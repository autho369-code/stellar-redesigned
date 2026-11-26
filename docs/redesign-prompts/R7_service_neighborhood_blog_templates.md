PASTE FROM HERE (after the CONTEXT BLOCK)

# R7 — Templates: service pages, neighborhood pages, blog

Apply the new components to the three templates that carry most of the 150 URLs. **Layout only** — titles, meta descriptions, H1s, intros and body copy belong to phases 1b, 2, 3 and 4. Keep every internal link those phases add.

## A. Service pages (`/services/*`, 10 pages + `/services`)
Hero (H1 + first paragraph as written + primary CTA + phone) → `<TrustBar />` → "What your board receives every month" (existing content as icon cards) → existing sections in readable 68-character columns with a sticky in-page table of contents on desktop → `<FeeEstimator />` → `<ReviewCards />` → related services → FAQ accordion (keep FAQPage JSON-LD) → final proposal CTA (keep its `?source=`). Breadcrumbs visible + `BreadcrumbList` JSON-LD unchanged. Move "Six disciplines" from the old homepage to `/services`.

## B. Neighborhood pages (45 pages, plus `/property-management-chicago`, `/property-management-north-shore`, `/service-areas`)
Hero with neighborhood name (as written) + a small static map image (no interactive map JS) → local building types & issues (existing copy) → "Associations we serve near {area}" only if real data exists in the area data file, otherwise omit → links to nearby neighborhoods + relevant guides (keep phase 2/3 links) → `<FeeEstimator />` → CTA with `?source=area-{slug}` (keep existing values) and phone `data-track-location="area-page"`. Keep `area-data` chunk lazy so neighborhood pages stay ≤ 170 KB gzip JS.

## C. Blog posts (75) and blog index
Post: title, updated date, author box (from `/about/mirsad-cerimovic` data or "Your Property Management Team"), reading time, sticky TOC, 68–72 character measure, pull-quotes styled with Fraunces, mid and end proposal CTA blocks **exactly as they are today** (same placement, labels and `?source=`), related posts (same topic hub), `Article` + `BreadcrumbList` JSON-LD unchanged. Index: topic-hub filter chips (the 4 existing `/blog/topic/*` pages), featured guide, cards with real images or a brand-colored pattern (no stock).

Acceptance: R0 URL test shows identical titles/H1/meta/canonical/robots for all 150 URLs; all blog CTA events still fire; Unlighthouse full-site run (attach summary) shows no template under 90 performance on mobile.
