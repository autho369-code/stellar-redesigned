PASTE FROM HERE (after the CONTEXT BLOCK)

# R6 — Proof: reviews showcase, case studies, review components

Competitors that lead put proof above the fold (Chicagoland: stat bar with its Google rating; Hales: live Google review widget plus a dollar-savings stat). Stellar's `/reviews` page today only asks for feedback and shows no reviews at all. Fix that without overstating anything.

## A. `<ReviewCards />` component
- Data file `src/data/reviews.ts`: only real Google reviews already published on the site or provided by Jojo — fields `quote` (verbatim, may be trimmed with "…"), `context` (e.g. "254-unit condominium", "Long-term client"), `source: "Google"`, `date` (month/year if known), `url` (the Google reviews link). Never edit wording beyond trimming. No invented names.
- Variants: `grid` (3 cards) and `marquee` (Magic UI marquee, pauses on hover/focus, static under reduced motion).
- Every card links to the public Google reviews (`Review Link Click`, location = component placement).

## B. Redesign `/reviews` (keep URL, title, H1 meaning and `index, follow`)
1. Hero: H1 stays about honest feedback; add a short line "Read what boards and owners say on Google, or tell us directly."
2. Two big actions (today's cards): **Post a Google review** (`https://g.page/r/CXsN7jc7d5JTEBM/review`, keeps `Review Link Click`) and **Send feedback to our team**.
3. **What boards say** — `<ReviewCards variant="grid" />` with every approved quote.
4. **Read all public Google reviews** link.
- Do **not** show an aggregate star number or star graphic for the company until Jojo approves it (today ≈3.6). If he later approves showing it, pull it live from the Google Places API (New) via a Vercel function with daily caching — never type it in by hand.
- Do **not** add `AggregateRating`/`Review` JSON-LD to the company's own LocalBusiness (Google treats it as self-serving and ignores or penalises it).

## C. Case study — 6150 N Kenmore roof replacement (approved, ship live)
Jojo confirmed this result on Nov 26, 2026. It may go on production (not behind a feature flag).

Approved facts — use only these, verbatim in meaning:
- Property: **6150 N Kenmore, Chicago**
- Work: **roof replacement**
- Result: **saved the association $150,000**

Do **not** invent the year, building size, unit count, vendor, neighborhood nickname, board quote, photos, or any other detail. If the template has a field for those, show a clearly marked `[CONFIRM WITH JOJO: year of the roof project]`, `[CONFIRM WITH JOJO: number of units at 6150 N Kenmore]`, `[CONFIRM WITH JOJO: roofing vendor]` in the **preview only**. Do not ship placeholders to production — omit the field instead.

1. Create `/case-studies/6150-n-kenmore-roof` (new URL; add it to the sitemap; do not change any existing URL). Self-canonical, `index, follow`. Title/H1 may be: "A $150,000 savings on a roof replacement at 6150 N Kenmore, Chicago." Body: a short account that stays inside the three approved facts, plus the pricing line and a proposal CTA (`?source=case-kenmore`).
2. Add a compact results card (the $150,000 figure + the address + "roof replacement" + link to the case study) on the homepage (R4), `/pricing`, `/services/condominium-management` and `/about`. Same three facts only.
3. Template `/case-studies/[slug]` should exist for later studies, but do not invent a second case. No more case-study URLs until Jojo approves more facts.
4. No `AggregateRating` on these pages. No BBB. No fabricated board quote.

## D. Placement
`<ReviewCards variant="grid" />` on home (R4 section 2), `/pricing`, every `/services/*` page above the final CTA, and the Chicago/North Shore hub pages. Place the Kenmore results card as specified in section C.

Acceptance: `/reviews` still `index, follow`, 200, self-canonical; no rating number shown; R0 tests pass; Lighthouse ≥ 95.
