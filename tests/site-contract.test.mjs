import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const output = join(process.cwd(), 'dist');
const sourceStyles = readFileSync(join(process.cwd(), 'src/styles/site.css'), 'utf8');
const siteUrl = 'https://diy.emfls.com';

const publicPages = [
  { file: 'index.html', path: '/', title: '초보 DIY 작업 가이드 | EMFLS DIY' },
  { file: 'about/index.html', path: '/about/', title: 'EMFLS DIY 소개 | 초보 작업을 위한 워크숍 매뉴얼' },
  { file: 'safety/index.html', path: '/safety/', title: 'DIY 안전 기준 | EMFLS DIY' },
  { file: 'editorial-policy/index.html', path: '/editorial-policy/', title: '편집 및 출처 원칙 | EMFLS DIY' },
  { file: 'privacy/index.html', path: '/privacy/', title: '개인정보 처리 안내 | EMFLS DIY' },
  { file: 'contact/index.html', path: '/contact/', title: '문의 및 정정 요청 | EMFLS DIY' },
];

test('publishes a unique, useful DIY home page with an explicit safety boundary', () => {
  const home = readFileSync(join(output, 'index.html'), 'utf8');

  assert.match(home, /직접 만들기 전에/);
  assert.match(home, /치수|측정/);
  assert.match(home, /전문가에게 맡기세요/);
  assert.doesNotMatch(home, /initial technical bootstrap stage|noindex/i);
});

test('keeps Korean mobile headings together at word boundaries', () => {
  const mobileRules = sourceStyles.match(/@media \(max-width: 640px\) \{([\s\S]*?)\n\}/)?.[1] ?? '';

  assert.match(mobileRules, /\.hero-copy h1\s*\{[^}]*word-break:\s*keep-all;/);
});

test('emits a unique title, description, and production canonical for each public page', () => {
  for (const page of publicPages) {
    const html = readFileSync(join(output, page.file), 'utf8');
    const canonical = `${siteUrl}${page.path}`;

    assert.ok(html.includes(`<title>${page.title}</title>`), `${page.path} should have its own title`);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${page.path} should canonicalize to production`);
    assert.doesNotMatch(html, /name="robots" content="noindex/i, `${page.path} should be indexable`);
  }
});

test('serves an allow-all robots file and a sitemap containing only canonical public URLs', () => {
  const robots = readFileSync(join(output, 'robots.txt'), 'utf8');
  const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8');

  assert.match(robots, /^User-agent: \*\s+Allow: \/\s+Sitemap: https:\/\/diy\.emfls\.com\/sitemap\.xml/m);
  for (const page of publicPages) {
    assert.ok(sitemap.includes(`<loc>${siteUrl}${page.path}</loc>`), `${page.path} should appear in sitemap`);
  }
  assert.doesNotMatch(sitemap, /\/404(?:\.html)?<\/loc>/);
});

test('publishes a matching IndexNow key file at the host root', () => {
  const keyFiles = readdirSync(output).filter((file) => /^[a-f0-9]{32}\.txt$/.test(file));

  assert.equal(keyFiles.length, 1, 'the host should publish exactly one IndexNow key file');
  assert.equal(readFileSync(join(output, keyFiles[0]), 'utf8').trim(), keyFiles[0].slice(0, -4));
});

test('builds a branded 404 page that is excluded from indexing and offers a home route', () => {
  const notFound = readFileSync(join(output, '404.html'), 'utf8');

  assert.match(notFound, /페이지를 찾을 수 없습니다/);
  assert.match(notFound, /<a[^>]+href="\/"[^>]*>홈으로 돌아가기<\/a>/);
  assert.match(notFound, /name="robots" content="noindex, nofollow"/);
});
