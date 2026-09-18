# 04 · Stack Decisions

## Fresh build, not a WordPress rebuild

Decision already taken in the pack. Existing WordPress stays untouched until the new site is approved and switched.

## Framework: Next.js or Astro

Pick the one you are genuinely faster and better in. This is 9 content pages — either works. Recommendation: **Astro** for a content-only static site (less JS shipped by default, simpler mental model, fits "closer to a research publication than a SaaS landing page"). Choose Next.js only if there's a real reason (e.g. shared components with a future app).

## Static-first — no CMS, no database

- Static generation. Deploy = static assets.
- Nothing to maintain, nothing to get hacked.
- Copy lives as `.md` / `.mdx` in the repo. Git is the CMS.

## Contact form handler

**Do not roll your own mail handling.** Use a hosted form service or a serverless function. **Ask Arham before choosing** — where enquiry data lands is a client-data question, not a technical preference.

Options to raise (do not pick unilaterally):
- Formspree / Basin / Web3Forms (hosted)
- Vercel/Netlify function → transactional email provider
- Direct to a shared inbox

Build the form markup now; leave submission target `[NEEDS DECISION]`.

## Booking tool

Currently Calendly on live site. Scheduling tooling is being changed. **Confirm with Arham before wiring anything.**

## Analytics

**Privacy-respecting.** Ask before adding anything that sets marketing cookies. Suggested to raise:
- Plausible (recommended — no cookies, no consent banner needed)
- Fathom
- GA4 (only if client insists — needs consent banner)

Plus **Google Search Console** — required. Nothing measures success without it.

Do not add analytics during build. It is a separate approved step.

## Hosting

Vercel or Netlify preview for staging. Production host to be confirmed by Arham. **Do not create accounts in the client's name.**

## Accessibility — hard requirement, not a pass at the end

Audience ~60. WCAG AA. Generous base type (**≥ 18px**), strong contrast, real focus states, no thin grey text on white, keyboard-reachable interactives.

## Performance

Static pages, compressed images, minimal JavaScript. No layout shift. No reason for this to be slow.

## Compliance-driven constraints

- Every published state committed and **tagged with a date**. Retention requirement — must be produced on request for years.
- Staging is `noindex` + `robots.txt` disallow until launch.
- **Never modify DNS, the live WordPress site, or any hosting/billing account.**
