# Project History

## 2026-09-30 — Owner Directive 11 Foundation + Responsive QA

- Replaced the Stage 2 placeholder with a Korean beginner-workshop landing page and
  added the minimum About, Safety, Editorial Policy, Privacy, Contact, and 404 routes.
- Added shared per-page metadata/canonicals, production `robots.txt` and `sitemap.xml`,
  and a small responsive drafting-sheet visual system derived from Site Control.
- Updated the repo's scope and launch documentation to match Owner Directive 11.
- Added static-output contracts, a narrow-screen title-wrap regression, and a
  root IndexNow key file with a matching output contract. The Notion work page
  records the expected RED checks and their minimal fixes.
- Local QA: `npm run check` passed (11 Astro files, 0 diagnostics); `npm test`
  passed (6/6 contracts, 7 generated routes); `git diff --check` passed.
- Chrome visual QA passed at 320px, 390px, and 1440px. Measured inner/html/body
  widths matched each viewport (320/320/320, 390/390/390, 1440/1440/1440); no
  horizontal overflow. DevTools console showed 0 messages at the 1440px review.
- Browser-level per-route keyboard interaction and reduced-motion emulation were
  not completed; Home's visible keyboard skip link and reduced-motion source rule
  were inspected separately.

## 2026-09-30 — Production + Search Launch Evidence

- Published `a08ae73e0c917e9ab1f8f7ad784af359b3df9a0d` to `main`. Cloudflare Pages
  deployment `3c8ee7fa-6cdf-44c1-b755-3bfc396a4e5a` completed build and deploy
  successfully and aliases `https://diy.emfls.com`.
- Direct Production GETs returned HTTP 200 for `/`, all six public routes,
  `/robots.txt`, `/sitemap.xml`, and the IndexNow root key. A unique unknown route
  returned HTTP 404 with the branded not-found page and `noindex`.
- Added the URL-prefix Google Search Console property `https://diy.emfls.com/`;
  Google automatically verified it via the existing parent-domain DNS ownership.
  Submitted `sitemap.xml`; Search Console confirmed receipt, with parsing pending.
- Submitted six canonical public routes to IndexNow. The official endpoint returned
  HTTP 202 Accepted: URLs received, key validation pending. This is not an indexing
  confirmation.
- Naver Search Advisor remains unregistered because the connected browser is not
  signed in; stop recorded at `LOGIN_REQUIRED`. The public Daum lookup reports its
  HTTP-prefixed variant as unregistered. Daum's registration form requires mandatory
  personal-data consent and service agreement plus applicant name/email; submission
  stopped before consent or applicant data.
- Owner Directive 11 does not require an AdSense step here. Remaining blockers are
  site-specific and do not block the next independent Foundation/Search Launch site.

## 2026-09-16 — Stage 2 Minimal Bootstrap

- Created minimal Astro + TypeScript static scaffold.
- Added thin-site `noindex, nofollow`.
- Added standard EMFLS repository documentation.
- Site-specific identity, content, infrastructure, and search work intentionally deferred.
