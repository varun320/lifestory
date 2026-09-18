# Life Story Wealth Planning — Astro site

Static Astro site. The Firm design direction. Home only for now; other 8 pages roll in after copy for each is approved.

## Dev

```bash
npm install
npm run dev
```

Local at http://localhost:4321. Hot reload.

## Build

```bash
npm run build
```

Output in `dist/`. Static HTML + assets. Deploy anywhere that serves files.

Preview the built output:

```bash
npm run preview
```

## Deploy to Vercel

1. Push repo to GitHub.
2. In Vercel: New Project → import repo → root directory `site/` → framework auto-detected as **Astro**.
3. First deploy is a preview URL. Every PR gets its own.
4. Promote to production when Alex + counsel sign off.

## Before launch — checklist

- [ ] Flip `noindex` default in `src/layouts/Base.astro` from `true` to `false` (or pass `noindex={false}` per page)
- [ ] Update `public/robots.txt` — change `Disallow: /` to `Allow: /` and add `Sitemap: https://<domain>/sitemap-index.xml`
- [ ] Confirm `site` URL in `astro.config.mjs` matches production domain
- [ ] Fill JSON-LD placeholders in `src/pages/index.astro` — SEC IAPD URL, LinkedIn (if any)
- [ ] Fill footer verification URLs in `src/layouts/Base.astro` — SEC IAPD, FINRA BrokerCheck (deep-link to Alex's CRD if he wants)
- [ ] Add real regulatory disclosure line (from counsel) in the footer legal row
- [ ] Real Alex photograph replaces the hero-figure placeholder
- [ ] Optional: swap Google Fonts CDN for `@fontsource/*` self-hosted for CWV
- [ ] Tag release (see `docs/part-2-implementation/05-git-and-retention.md`)

## SEO built in

- Hand-written `<title>` and `<meta description>` per page (props on `Base` layout)
- Canonical URL auto-derived from `Astro.site` + path
- Open Graph + Twitter card tags
- JSON-LD schema (`Person` + `FinancialService`) on Home
- `@astrojs/sitemap` generates sitemap at build
- Semantic HTML — real `<main>`, `<nav>`, `<footer>`, single `<h1>` per page
- Zero client-side JS from framework runtime (Astro static output)
- Only ~2KB of hand-written JS: reading progress, reveal-on-scroll, right-rail active state — all respect `prefers-reduced-motion`

## Accessibility

- Base font 18px (per audience — ~60)
- WCAG AA contrast on all text
- Real focus states, skip-to-content link
- `prefers-reduced-motion` disables all fade animations
- Keyboard-reachable everything

## What's *not* in this build yet

- Pages other than `/` — added after each page's copy is approved
- Real photograph of Alex (hero-figure is a placeholder frame)
- Contact form handler — build markup only, submission target `[NEEDS DECISION]`
- Analytics — separate approved step post-launch
