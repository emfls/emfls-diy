# emfls-diy

An EMFLS workshop manual for people beginning small DIY projects.

- Site No.: 14
- Repository: `emfls/emfls-diy`
- Production domain: `https://diy.emfls.com/`
- Framework: Astro + TypeScript
- Output: Static
- Current scope: Owner Directive 11 minimum Foundation + Search Launch
- Source indexing policy: Public foundation pages are indexable and the 404 is noindex;
  Production publication and Search Console/Search Advisor submissions are pending

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
