PASTE FROM HERE (after the CONTEXT BLOCK)

# R5 — /pricing: the page that wins on transparency

Only a handful of Chicago firms publish any price (Westward360 shows a package table; most big firms say "custom quote"). Publishing "starting at $30 per unit per month, everything included, with no extra fees" is Stellar's sharpest edge — make the page prove it. Keep today's title, meta description, H1 and FAQ text (owned by earlier phases); this phase changes layout and adds components.

Layout:
1. Hero: today's H1 + the exact pricing line + `<FeeEstimator />` on the right (replaces the plain text column). `<TrustBar />` below.
2. **"Everything included"** — a two-column checklist built from what today's page and service pages already say is included (dedicated manager, monthly board-ready financials, 24/7 emergency line, assessment collection, vendor coordination, meeting support, capital-project oversight with no separate oversight fee, online portal…). Only list items already stated on the site; mark anything else `[CONFIRM WITH JOJO]`.
3. **"What changes your flat fee"** — keep today's "What determines your exact fee?" content as 4 cards (size, amenities/staffing, financial complexity, scope).
4. **"Fees we don't charge"** — only items the site already states (no percentage-of-budget pricing, no separate capital-project planning or oversight fee). Third-party costs (contractors, engineers, attorneys, permits) stay association expenses — say so plainly.
5. **"No long-term contracts — cancel with 60 days notice."** Use that exact approved wording as a short, prominent risk-reverser (a card or callout). Do not upgrade it to "month-to-month" or "cancel anytime." Then **How switching works** — 4-step strip (proposal in 2 business days → board approval → transition → first 90 days), linking to the switch guide when phase 4 ships.
6. Testimonials (keep today's "What association clients report" quotes) in the R6 `<ReviewCards />` component.
7. FAQ accordion (keep FAQ text and FAQPage JSON-LD).
8. Final CTA "See your actual scope and flat monthly fee." (keep) + phone.

Rules: no competitor names or competitor prices on the page; no other per-unit number; no "average". JSON-LD stays `Service` + `FAQPage`; you may add `offers` → `PriceSpecification` with `price: 30`, `priceCurrency: USD`, `unitText: "per unit per month"`, `description: "Starting price; everything included, with no extra fees"`.

Acceptance: Lighthouse mobile ≥ 95 / a11y ≥ 95; the pricing line appears verbatim in static HTML; R0 tests pass.
