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
- Per-route keyboard/focus and reduced-motion interaction review, Production
  publication/live HTTP and true-404 checks, and search registration/submission
  remain pending. The IndexNow key is ready locally, but no external search
  submissions have been attempted.

## 2026-09-16 — Stage 2 Minimal Bootstrap

- Created minimal Astro + TypeScript static scaffold.
- Added thin-site `noindex, nofollow`.
- Added standard EMFLS repository documentation.
- Site-specific identity, content, infrastructure, and search work intentionally deferred.
