# Personal landing page

Astro + Tailwind, English (`/`) and Spanish (`/es/`).

```sh
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Fill in your content (search the code for `TODO`)
- [ ] `src/site.config.ts`: email, WhatsApp, GitHub, LinkedIn, Formspree ID
- [x] CV: edit `cv/cv.typ` (both languages), then `npm run cv` to rebuild `public/cv-en.pdf` and `public/cv-es.pdf`
- [ ] `src/content/projects/{en,es}/*.md`: replace the example projects (same filename in both languages)
- [ ] `src/data/services.ts`: packages and prices (USD + COP)
- [ ] `src/data/skills.ts`: your real skills
- [ ] `src/i18n/ui.ts`: bio, headline, FAQ text
- [ ] `public/og.png`: social preview image (1200×630)
- [x] `astro.config.mjs`: site is https://jaimenorena.dev

## Deploy
Push to GitHub, then import the repo in Cloudflare Pages or Netlify (build: `npm run build`, output: `dist`). Add your custom domain there.
