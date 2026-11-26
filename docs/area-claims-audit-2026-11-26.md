# Area page claims audit — 2026-11-26 (growth brief, Phase 3, Step 0)

Every sentence on the 10 pages below that says or implies Stellar currently
manages property, has clients, or has special expertise in that neighborhood.
Claude cannot verify these. **Mirsad marks each one TRUE or NOT TRUE.**

- TRUE: the sentence may be used on the upgraded page.
- NOT TRUE: it is removed or softened. "We serve boards in X" is fine.
  "We manage buildings in X" is not, unless it is true.
- No association, building, owner or board is ever named.

Status: **waiting for Mirsad.** Until he answers, the five upgraded Batch 1
pages show NONE of these sentences. They use the neutral sentence "Stellar
provides condo, HOA and townhome management to X boards from our Chicago
office". The old sentences are still in `src/data/neighborhoods.ts` and still
appear on other pages' "nearby neighborhoods" cards and on the five Batch 2
pages. They get removed or softened there after he marks them.

## Batch 1

### Rogers Park — /property-management-rogers-park
1. "We help boards navigate the unique challenges of maintaining properties in this eclectic far north side community."
2. "Property management in Rogers Park requires cultural sensitivity and experience with a wide range of building ages and styles." (implies experience)

### Edgewater — /property-management-edgewater
3. "Our expertise in high-rise management makes us the ideal partner for Edgewater boards seeking professional, detail-oriented service."
4. "For the condominium associations we manage here, wind exposure, aging risers, and facade critical examinations drive capital planning, and we run those cycles daily."
5. "The vintage buildings around the Bryn Mawr Red Line stop sit in a designated historic district, where exterior work needs the right approvals and the right masons. We line up both before scaffolding goes up."
6. "Many Edgewater associations combine hundreds of units with decades-long residents and on-site staff. We coordinate staffing, keep communication accessible, and give boards financial reporting that stands up to engaged owners."
7. "Yes — vintage high-rise management is one of our core strengths. ... We build board-approved capital calendars for each building."

### Lincoln Square — /property-management-lincoln-square
8. "Our Lincoln Square service area also covers the Bowmanville, Budlong Woods, and Arcadia Terrace pockets nearby, and our team delivers the community-oriented management that boards across all of them expect."

### Lakeview — /property-management-lakeview
9. "We serve every section of the neighborhood — including Wrigleyville, Northalsted (Boystown), and Lakeview East along the harbor — managing the varied building types that make Lakeview one of Chicago's most popular neighborhoods."
10. "We write event-day parking, trash, noise, and security logistics into the operating calendar so boards are not improvising every summer weekend." (buildings near Wrigley Field)
11. "Lakeview East's towers along Lake Shore Drive carry true lakefront exposure ... and we build reserve plans around those capital rhythms."
12. "Do you manage condo buildings near Wrigley Field? Yes. ... We prepare an event-season operating plan for each Wrigleyville client ..."

### Lincoln Park — /property-management-lincoln-park
13. "Our property management team understands the unique demands of this affluent neighborhood ..."
14. "We serve associations in every section of Lincoln Park — including Sheffield, the DePaul campus blocks, Ranch Triangle, and Wrightwood ..."
15. "The towers along Lincoln Park West and Lakeview Avenue ... We budget, staff, and plan capital work for exactly this profile."
16. "We manage tuckpointing cycles, boiler seasons, and City of Chicago porch enforcement for this stock every year." (converted walk-ups)
17. "The blocks around DePaul's campus, the Armitage–Halsted landmark shopping district, and the Ranch Triangle ... and we manage associations in all of them."
18. "Yes — small vintage associations are core to our Lincoln Park portfolio. We handle the realities of pre-war stock ... with budgets sized for 6-to-24-unit buildings."

## Batch 2 (pages not changed yet)

### Evanston — /property-management-evanston
19. "We serve Evanston associations with the responsive, detail-driven management its engaged, well-informed boards expect."
20. "We keep boards — and owners who lease their units — on the right side of both City Hall and the statute."
21. "Evanston's stock spans a century of construction. Our capital planning spans it too."
22. "Evanston boards read the financials. We deliver monthly reporting detailed enough for the university-town scrutiny this community is known for ..."
23. "We manage Evanston associations with those local requirements built into day-to-day operations."

### Uptown — /property-management-uptown
24. "We help Uptown associations capitalize on rising property values while maintaining strong financial reserves."

### Andersonville — /property-management-andersonville
25. "Our management approach in Andersonville emphasizes community engagement and preserving the neighborhood's distinctive residential charm."

### Ravenswood — /property-management-ravenswood
26. "We provide hands-on service tailored to the smaller building associations that define this neighborhood."

### Gold Coast — /property-management-gold-coast (HOLD until answered)
27. "We are proud to manage some of the Gold Coast's most distinguished addresses."
28. "... exterior work here routinely runs through Chicago landmark review. We manage the approvals path alongside the contractors."
29. "Steam heat, original elevator cabs, and hand-laid masonry ... We maintain those vendor relationships and plan facade critical examinations years in advance."
30. "Many Gold Coast buildings run door staff around the clock. We coordinate staffing, scheduling, and payroll administration ..."
31. "Yes. We manage vintage condominium associations where exterior alterations require Commission on Chicago Landmarks review ..."

## Fill-in sheet (from the brief; nothing with a blank ships)

For each of the 10 pages:
1. Does Stellar manage an association in or near this neighborhood today? If
   yes: how many, and about how many units?
2. Which of the page's "issues boards face here" are true to your experience?
   Strike the rest.
3. Typical monthly fee range for a 12-, 24- and 48-unit building there, from
   real recent proposals (or "skip").
4. Photos: real photos only, from the public sidewalk or with a board's
   written permission. The shot list is in each `src/data/areas/<slug>.ts`.

Once, for all pages:
5. Approve or decline the portfolio average fee line (the brief computed about
   $24 per unit per month — that is below the $30 starting fee, so decide the
   wording first).
