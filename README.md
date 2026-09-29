# emfls-diy

An EMFLS workshop manual for people beginning small DIY projects.

- Site No.: 14
- Repository: `emfls/emfls-diy`
- Production domain: `https://diy.emfls.com/`
- Framework: Astro + TypeScript
- Output: Static
- Current scope: Owner Directive 11 minimum Foundation + Search Launch
- Search state: Production pages are indexable and the 404 is noindex; Google property
  and sitemap are submitted; IndexNow returned 202 with key validation pending. Naver
  registration/sitemap need an authenticated session, and Daum registration awaits
  mandatory applicant consent and details (see `PROJECT_HISTORY.md`).

The site focuses on beginner woodworking, furniture assembly/repair, painting,
measurement, tools, materials, and safe-work boundaries. Professional electrical,
gas, structural, high-work, and heavy-cutting procedures are outside its beginner scope.

## Local verification

```sh
npm ci
npm run check
npm test
```

`npm test` builds the static site and checks the public routes, per-page metadata and
canonicals, robots and sitemap output, and the custom 404 artifact.
