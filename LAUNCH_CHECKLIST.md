# Launch Checklist

## Owner Directive 11 · Foundation + Search Launch

- [x] Exact locked dependency install, Astro check, and static build
- [x] Site-specific workshop identity and a useful, bounded home page
- [x] About, Safety, Editorial Policy, Privacy, Contact, and actual 404 routes
- [x] Per-page title, description, canonical, and crawlable robots/sitemap
- [x] 404 carries `noindex` and is excluded from the sitemap
- [x] Automated static-output contract tests (6/6)
- [x] Local Chrome visual QA at 320px, 390px, and 1440px; all measured widths match viewport
- [x] Home skip-link keyboard focus and visible focus treatment
- [x] Production public routes return HTTP 200; an unknown route returns branded HTTP 404 with `noindex`
- [x] Cloudflare Pages project and `diy.emfls.com` custom domain already active
- [x] Push the exact QA-approved source to GitHub `main`
- [x] Cloudflare Production deployment succeeded for commit `a08ae73e0c917e9ab1f8f7ad784af359b3df9a0d`
- [x] Google Search Console URL-prefix property verified through existing parent-domain ownership; `sitemap.xml` submitted (processing pending)
- [x] Root IndexNow key file configured and covered by a contract test
- [x] Six canonical public routes submitted to IndexNow; HTTP 202 (key validation pending; not an indexing guarantee)
- [ ] Naver Search Advisor site ownership + sitemap report — blocked at `LOGIN_REQUIRED`
- [ ] Daum registration — HTTP URL variant is unregistered; application requires mandatory consent and applicant details
- [ ] Sync Site Control Page, Site Registry, and Handoff Index

Deep guides, advanced tools, detailed design polish, and AdSense work are deferred
until the network-wide foundation pass is complete.
