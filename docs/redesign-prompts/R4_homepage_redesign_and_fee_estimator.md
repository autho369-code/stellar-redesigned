PASTE FROM HERE (after the CONTEXT BLOCK)

# R4 — Homepage redesign + instant fee estimator

Goal: cut the homepage from ≈12,200 px to ≈6,500 px on desktop, put proof and the price tool above the fold, and keep every piece of important copy (move, don't delete — anything removed from the homepage must still live on its own page and be linked).

## A. `<FeeEstimator />` (new, reusable, used on home, /pricing, service pages)
- Card with one number input "How many units are in your association?" (stepper, 2–2,000, inputmode numeric) and optional chips: Condo / HOA / Townhome.
- Output, live: **"Starting at ${units × 30} per month"** in large Fraunces numerals, then the exact line: "That is $30 per unit per month, everything included, with no extra fees. Your exact flat fee comes in a written proposal within two business days." Format with `Intl.NumberFormat('en-US')`.
- Do not show any other price, discount, range, minimum or comparison number.
- Button **Get my exact flat-fee proposal** → `/contact?source=estimator&units={n}&type={chip}`; the contact form prefills unit count and property type from the query string.
- Analytics: add **one new** event `Fee Estimator Used` with properties `units_band` (`2-24`, `25-74`, `75-199`, `200+`) and `page`. Fire once per page view, on the first change. Keep all existing events untouched.
- Prerendered HTML shows the default state (e.g. 40 units → "Starting at $1,200 per month") so it is useful without JS.

## B. New homepage order (keep today's H1, title and meta description exactly — they are owned by phase 1/1b)
1. **Hero (two columns).** Left: eyebrow, today's H1, today's subline, primary CTA "Request a flat-fee proposal" (keep its current `?source=`), secondary "Call 773-728-0652". Right: `<FeeEstimator />` in a card instead of the stock arched photo (move the photo into section 4). Under the hero: `<TrustBar />`.
2. **Proof strip.** Three real Google review quotes already on the site (keep their attribution format "Google review · 254-unit condominium") in cards + "Read all our Google reviews" (`Review Link Click`, location `home-proof`) + "Share your experience" link to `/reviews`.
3. **"Who we manage"** — four tiles (Condominium, High-rise, HOA, Townhome) linking to the existing service pages (idea from competitor sites; replaces the long "Six disciplines" block, which moves to `/services`).
4. **Why boards switch to us** — four points: today's "Not another national management firm", "Boards deal with the principal", "One platform. Two experiences." (condense to 2–3 sentences each, link to `/about`, `/about/mirsad-cerimovic`, portal), plus the approved contract line as a risk-reverser: **"No long-term contracts — cancel with 60 days notice."** Real Chicago building photo here (not stock). Optionally add a compact results card linking to the Kenmore case study (R6): only the approved facts — "At 6150 N Kenmore in Chicago, a roof replacement saved the association $150,000."
5. **The first ninety days** — keep, as a horizontal 4-step timeline (this is the board-switch reassurance competitors like Chicagoland lead with). Link to the switch guide when phase 4 ships.
6. **Pricing teaser** — "Starting at $30 per unit per month, everything included, with no extra fees" + what's included checklist (pull from `/pricing`) + **"No long-term contracts — cancel with 60 days notice."** + "How pricing works" → `/pricing`.
7. **Neighborhoods** — keep "Chicago neighborhoods and the North Shore" as a compact chip grid.
8. **Board resources** — 3 latest guides + Board Toolkit + Proposal Scorecard cards.
9. **FAQ** — keep "What boards ask us first" (shadcn Accordion; keep FAQPage JSON-LD identical).
10. **Final CTA** — keep "Raise the standard of home." with proposal button + phone.
Sections removed from home ("From first call to a managed building", "Six disciplines", "Nobody hands you a manual…") must remain reachable: move "Six disciplines" to `/services`, the condo-life manual block to `/condo-living`.

## C. Design rules
Max 2 type families (Fraunces display, Inter body); H1 56/60 px desktop, 38/42 mobile; body 18/30; section padding `--section-y`; one accent color for CTAs; cards `--radius-lg` with `--shadow-card`; real photos only (no stock families); every image has width/height.

Acceptance: homepage desktop height ≤ 7,000 px; Lighthouse mobile ≥ 95, LCP ≤ 2.5 s, CLS ≤ 0.05; all existing events still fire (R0 test) and `Fee Estimator Used` fires once; JSON-LD types on home unchanged (ProfessionalService, LocalBusiness, FAQPage, WebSite); every link that was on the old homepage still resolves somewhere on the site.
