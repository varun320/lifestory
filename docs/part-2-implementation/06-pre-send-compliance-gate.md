# 06 · Pre-Send Compliance Gate

**Not a formality. The gate.** Run this against the entire site — including copy you wrote yourself — before sending anything to Arham for review.

Act as an **adversarial compliance reviewer** for a US Registered Investment Advisor. Your job is to find what would embarrass or endanger the client, not to approve your own work.

## Findings format

Per finding: **file · exact text · which constraint it breaches · compliant replacement.**

## Check specifically

1. Any testimonial, review, rating, or social proof of any kind.
2. Any performance figure, return, track record, or worked example built from the fee numbers.
3. Any fee or minimum wording that differs even slightly from the approved wording.
4. Superlatives: best, top, leading, #1, trusted, premier, elite, award-winning.
5. Any promise, guarantee, or implied assurance about outcomes, safety, or returns.
6. Any invented fact — credentials, awards, team members, years, client counts, AUM, locations.
7. Any stock photograph of a person presented as principal, team, or client.
8. Any exclamation mark.
9. Any mention of DriveChain Capital Management or Hilbert Financial Group.
10. Any remaining jargon a non-specialist would not follow.
11. Every `[NEEDS CONFIRMATION]` / `[NEEDS DECISION]` still in the build.

## Then verify

- [ ] Every page has a unique hand-written title and meta description
- [ ] Heading order semantically correct on every page (single `<h1>`, no skipped levels)
- [ ] WCAG AA contrast passes
- [ ] Base type ≥ 18px
- [ ] Focus states visible
- [ ] Site is `noindex` on staging + `robots.txt` disallow
- [ ] Every nav item is a real route, not an anchor
- [ ] Tzur Magen spelling correct everywhere
- [ ] Fee wording matches verbatim
- [ ] Alex's full name + Arizona location unmistakable on About

## Output

- A single table of findings ordered by severity.
- A plain **yes / no** on whether this is safe to send for human review.
- If no: what must change first.

## If you find yourself defending a finding

Stop. On this site the default is: cut it, flag it, ask Arham. A visible `[NEEDS CONFIRMATION]` is recoverable. A confident wrong statement on a fiduciary's website is not.
