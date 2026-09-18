# 04 · Analytics & Search Console

Separate approved step. **Do not add during initial build** — add after copy + build pass compliance gate and Arham approves the tool.

## What to install

1. **Google Search Console** — required. Verify domain, submit sitemap.
2. **Privacy-respecting analytics** — proposed to Arham for approval:
   - Plausible (recommended: no cookies, no consent banner)
   - Fathom (equivalent)
   - GA4 only if the client insists — will require a consent banner.

Ask before adding anything that sets marketing cookies.

## Definition of "reporting confirmed"

- Search Console shows the site verified and the sitemap accepted.
- Analytics dashboard shows at least one real pageview from a non-dev source.
- Both linked to an account controlled by Arham / the client — **not** an agency-personal account.

## Sitemap

Generate `sitemap.xml` at build time. Include all 9 real routes. Exclude any staging or draft routes.

## robots.txt (production)

```
User-agent: *
Allow: /
Sitemap: https://<production-domain>/sitemap.xml
```

(Staging keeps `Disallow: /` — see `03-staging-and-launch.md`.)

## Nothing else without approval

No pixels. No conversion tracking beyond Search Console + basic pageview analytics. No third-party heatmaps or session recording. No chat widget.
