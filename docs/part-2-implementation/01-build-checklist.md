# 01 · Build Checklist — definition of "finished"

Do not send back until every item is ticked.

## Structure

- [ ] Every page in `../part-1-copy-and-decisions/01-sitemap.md` exists at its own address
- [ ] Every page reachable from a real `<nav>` — **no anchor links standing in for pages**

## Copy

- [ ] Copy deck approved by Arham before build began
- [ ] Copy used exactly as approved — no silent edits
- [ ] Every page has a **hand-written** `<title>` and meta description — no generated filler
- [ ] Alex's full name appears in page titles where appropriate
- [ ] About is built around his name + Arizona location
- [ ] Fee wording verbatim (including "managements" typo pending counsel)

## Compliance

- [ ] Zero testimonials / reviews / ratings / social proof of any kind
- [ ] Zero performance figures, returns, track records, worked fee examples
- [ ] Zero superlatives (best, top, leading, #1, trusted, premier, elite, award-winning)
- [ ] Zero promises / guarantees about outcomes, safety, returns
- [ ] Zero invented facts (credentials, awards, team, years, AUM, client counts, locations)
- [ ] Zero stock person-photos
- [ ] Zero exclamation marks
- [ ] Zero mentions of DriveChain Capital Management or Hilbert Financial Group
- [ ] All `[NEEDS CONFIRMATION]` / `[NEEDS DECISION]` items logged in `../open-gaps.md`

## Accessibility (hard requirement)

- [ ] WCAG AA contrast passes on every page (verified with a tool)
- [ ] Base font size ≥ 18px
- [ ] Semantic headings in order on every page (single `<h1>`, no skipped levels)
- [ ] Real landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Visible focus states on every interactive element
- [ ] Every interactive element keyboard-reachable
- [ ] Respects `prefers-reduced-motion`

## Performance

- [ ] Static output, minimal JavaScript
- [ ] Images compressed, correctly sized, explicit width/height (no layout shift)
- [ ] Fast on a mid-tier phone on 4G

## Responsive

- [ ] Genuinely usable on a phone
- [ ] Checked at 320 / 375 / 768 / 1024 / 1440

## SEO

- [ ] Name search test: searching Alex's firm name + personal name returns this site (once launched — track for post-launch)
- [ ] Hand-written meta descriptions per page
- [ ] `robots.txt` and meta `noindex` on staging (see `03-staging-and-launch.md`)

## Discovery / measurement (post-approval step)

- [ ] Analytics + Search Console installed and confirmed reporting **before calling it done**
- [ ] Analytics tool approved by Arham (privacy-respecting default)

## Delivery

- [ ] Staging URL (Vercel/Netlify preview) — not a zip
- [ ] Staging is `noindex` + robots disallow
- [ ] Every published state committed and **date-tagged in git** (retention requirement)
- [ ] Written list of every remaining `[NEEDS CONFIRMATION]` / `[NEEDS DECISION]`
- [ ] Compliance gate (`06-pre-send-compliance-gate.md`) run and passes
