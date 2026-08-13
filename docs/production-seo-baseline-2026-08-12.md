# Stellar Property Management production baseline

Audit date: 2026-08-12
Canonical site: https://www.stellarpropertygroup.com
Primary conversion: Chicago or North Shore association board member requests a management proposal

## Executive finding

The site has a strong technical SEO foundation, but it is not yet converting that foundation into non-brand search demand or local-map visibility. The immediate opportunity is not to add more neighborhood pages or redesign the entire site. It is to improve the commercial pages Google already shows, strengthen measurable conversion paths, resolve trust and Google Business Profile weaknesses, and make the existing content faster and more accessible on mobile.

No top-three Google Maps position can be guaranteed. Google states that local ranking is primarily based on relevance, distance, and prominence. Work should therefore improve the controllable inputs while measuring results from representative search locations.

## P0/P1 implementation completed on release branch

The following changes were implemented after the baseline audit, without deleting or replacing indexed URLs:

- fixed the public `/knowledge` staff link by producing a dedicated static route and explicitly marking it `noindex, nofollow, noarchive`
- added Vercel Web Analytics, Speed Insights, proposal-form success events, and non-PII phone, email, and proposal-CTA click events
- updated the privacy policy to describe the measurement accurately
- aligned condominium, HOA, townhome, and Chicago commercial-page snippets with one preferred intent per page
- added complete Open Graph and Twitter metadata to all 117 indexable sitemap URLs, including 82 location pages
- moved Inter and Fraunces from render-blocking Google Fonts requests to locally served font assets
- deferred the Arthur concierge and its authentication dependencies until browser idle time
- corrected Arthur's accessible name, contact-form link styling, shared accent contrast, footer contrast, and heading order
- preserved the 117-URL sitemap, legacy redirects, canonical host, route paths, structured data, and existing reverse-silo architecture

Release-candidate crawl after implementation:

| Check | Result |
| --- | ---: |
| Sitemap URLs returning HTTP 200 | 117 / 117 |
| Broken internal targets | 0 |
| Missing/canonical-mismatched pages | 0 |
| Pages without complete Open Graph metadata | 0 |
| Pages without a Twitter card | 0 |
| Invalid H1 count, thin pages, missing alt text, or orphans | 0 |

Local Lighthouse mobile simulation after implementation (run-to-run scores vary slightly):

| Page | Performance | Accessibility | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home | 90 | 100 | 100 | 3.3 s | 0 |
| Contact | 90 | 100 | 100 | 3.4 s | 0 |

The contact page improved from the production baseline of 64 performance / 6.6 s LCP to approximately 90 / 3.4 s LCP. Production real-user data should replace simulated measurements after deployment.

## Baseline inventory

The production sitemap contains 117 URLs:

- 22 core, service, conversion, legal, and resource pages
- 82 Chicago neighborhood and North Shore community pages
- 13 currently published articles

Automated live crawl results:

| Check | Result |
| --- | ---: |
| Sitemap URLs returning HTTP 200 | 117 / 117 |
| Pages with an index-blocking robots directive | 0 |
| Pages missing a canonical | 0 |
| Canonical mismatches | 0 |
| Pages missing a title | 0 |
| Pages missing a meta description | 0 |
| Pages with other than one H1 | 0 |
| Pages under 300 rendered words | 0 |
| Pages with an image missing `alt` | 0 |
| Sitemap pages with no internal link found | 0 |
| Broken internal targets | 1 (`/knowledge`) |
| Pages without complete Open Graph metadata | 91 |
| Pages without a Twitter card | 92 |

The `/knowledge` problem is user-facing and operational: the footer advertises “Staff Sign-In,” but production returns 404 for that URL.

## Google Search Console baseline

Period: 2026-05-11 through 2026-08-10.

| Metric | Result |
| --- | ---: |
| Web clicks | 541 |
| Web impressions | 9,022 |
| Average CTR | 6.0% |
| Average position | 12.3 |
| Generative-AI-feature impressions | 192 |

The click total is heavily branded. The top queries are variations of Stellar’s company name. The clearest commercial weakness is poor CTR or weak ranking on non-brand association-management terms.

High-value observations:

- `/services/condominium-management`: 541 impressions, 2 clicks, 0.4% CTR, average position 3.1.
- `/services/hoa-management`: 541 impressions, 0 clicks, average position 3.1.
- `/services/townhome-management`: 538 impressions, 0 clicks, average position 6.3.
- `/property-management-chicago`: 120 impressions, 0 clicks, average position 38.7.
- Query `chicago condominium management companies`: 48 impressions, no clicks, average position 2.3.
- Query `condo management companies in chicago`: 24 impressions, no clicks, average position 2.4.
- Query `hoa management companies chicago`: 46 impressions, no clicks, average position 46.8.

These figures make snippet quality, intent alignment, and page differentiation higher priorities than publishing dozens of additional generic articles.

## Bing, Brave, and other search engines

The repository already contains the main non-Google discovery controls:

- a Bing Webmaster verification meta value (`msvalidate.01`)
- an IndexNow key file at the site root
- an IndexNow bulk-submission script and a scheduled-article release script
- a crawlable XML sitemap and robots file
- static prerendered HTML for Bing and answer engines that do not depend on client-side rendering
- explicit access for DuckDuckBot, Applebot, major AI crawlers, and the general `User-agent: *` rule

IndexNow should be run only after the release is live, so participating engines receive URLs containing the new content rather than the old production output. Brave operates an independent index and provides its own public URL-submission form; its crawler also requires normal crawlability. The deployment checklist therefore includes submitting the priority production URLs to IndexNow and Brave after verifying the release. No special Brave-only page or duplicate sitemap is needed.

The Page Indexing report last updated 2026-08-06 shows 104 indexed and 27 not indexed. Most excluded examples are valid legacy redirects, noindex utilities, canonical alternates, or old URLs. Eight current pages were reported as “Discovered – currently not indexed,” including `/about`, `/blog`, `/service-areas`, and four major service pages. That report is stale relative to current Search performance—several of the same service URLs already record impressions—so the correct action is to improve and resubmit the important pages, then validate the report after deployment rather than treating every exclusion as an error.

## Google Business Profile and Maps baseline

Observed from a Chicago-area Google Maps search on 2026-08-12.

Profile facts shown publicly:

- Name: Stellar Property Management
- Primary category: Property management company
- Address: 5107 N Western Ave #1S, Chicago, IL 60625
- Phone: (773) 728-0652
- Website: `https://stellarpropertygroup.com/` (non-canonical host)
- Rating: 3.3 from 63 reviews
- Distribution: 33 five-star, 2 four-star, 1 three-star, 3 two-star, 24 one-star
- Attributes shown: LGBTQ+ friendly and veteran-owned; business owner must confirm both remain accurate

Stellar was not visible in the first organic map results for `condominium management Chicago, IL`. The visible organic competitors included First Community Management, Connected Property Management, Chicago Condo Management & Maintenance, Forth Group, Hales Property Management, and Chicagoland Community Management. Westward360 appeared as a sponsored result.

The rating profile is the largest controllable local-search and conversion weakness. The correct remedy is not review gating, incentives, fake reviews, or selective suppression. It is a policy-compliant program that asks every real association stakeholder for an honest review, responds professionally to every review, identifies recurring service failures, and documents resolutions.

The Google Business Profile website should use the canonical `https://www.stellarpropertygroup.com/` URL. The business category, services, hours, description, opening date, photos, service areas, and profile attributes should be audited inside the owner account before editing.

## Performance and accessibility baseline

Lighthouse 2026-08-12:

| Page / device | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home / desktop | 97 | 90 | 100 | 100 | 1.1 s | 0 |
| Home / mobile simulation | 73 | 90 | 100 | 100 | 4.6 s | 0 |
| Condominium service / mobile simulation | 73 | 89 | 100 | 100 | 4.4 s | 0 |
| Contact / mobile simulation | 64 | 92 | 100 | 100 | 6.6 s | 0 |

Contact-page LCP is rendered text, delayed mainly by font/CSS blocking and hydration. The initial JavaScript bundle transfers about 136 KB compressed / 454 KB uncompressed; Lighthouse estimates roughly 66 KB of unused JavaScript on the contact page. The site-wide AI concierge and its dependencies are a major candidate for delayed loading. Google Fonts adds a render-blocking stylesheet and about 198 KB of font files on a cold load.

Accessibility failures include:

- Arthur’s visible “Ask Arthur” label does not match its accessible name.
- `gold-600` text and buttons do not consistently meet WCAG contrast thresholds.
- Several small footer links use insufficient opacity/contrast.
- In-text links rely on color without an underline or sufficient contrast from surrounding text.

## Analytics and lead measurement baseline

The proposal form already captures useful qualification data, referrer, landing URL, source query parameter, and UTM fields. It submits email through Web3Forms and mirrors the lead into the shared Supabase `website_leads` table.

Missing measurement:

- page views and traffic sources in one analytics surface
- proposal-form success events
- phone-click events
- email-click events
- proposal and consultation CTA clicks
- landing-page-to-lead attribution reporting
- real-user Core Web Vitals by route

Vercel Web Analytics and Speed Insights are the preferred lightweight first-party baseline for this Vercel deployment. Custom conversion events require a plan that supports them; if unavailable, proposal success attribution remains available in `website_leads`, while CTA parameters should preserve the originating route.

## Search-intent architecture

One page should own each commercial cluster.

| Intent cluster | Preferred page | Primary target | Supporting pages |
| --- | --- | --- | --- |
| Chicago association management | `/property-management-chicago` | community association management Chicago | Home, services hub, neighborhood pages |
| Chicago condominium management | `/services/condominium-management` | condominium management Chicago; condo management company Chicago | Chicago page, high-rise, small-condo, relevant articles |
| Chicago HOA management | `/services/hoa-management` | HOA management Chicago; HOA management company Chicago | Chicago page, townhome, North Shore |
| Townhome management | `/services/townhome-management` | townhome association management Chicago | HOA, North Shore, local pages |
| High-rise condominium management | `/services/high-rise-condominium-management` | high-rise condominium management Chicago | Condominium, downtown neighborhood pages |
| Small association management | `/services/small-condo-association-management` | small condo association management Chicago | Condominium, pricing, self-management article |
| Association accounting and financial management | `/services/financial-management` | condo association accounting Chicago; HOA accounting Chicago | Pricing, budget/reserve articles |
| Pricing | `/pricing` | condo association management cost Chicago | Condominium, small-condo, proposal form |
| Switching firms | `/blog/switch-condo-management-companies-chicago` when published | switch condo management companies Chicago | Condominium, pricing, proposal form |
| North Shore | `/property-management-north-shore` | North Shore condo and HOA management | Priority North Shore community pages |
| Individual community | Existing local page only where useful and genuinely served | `[community] condo/HOA management` | Regional page and relevant service |

The home page should lead with the entity and value proposition, not compete with every service page for the same exact phrase.

## Competitive analysis

### First Community Management

Map strength: 4.5 stars from 381 reviews. Strong association-only brand recognition and proposal intent. Its question-based content addresses board hiring concerns. Weakness for Stellar to exploit: create more current, Illinois-specific decision resources with transparent process details and direct primary-source citations.

### Hales Property Management

Map strength: 4.5 stars from 629 reviews. Its 2026 pricing article is the current organic benchmark and states a Chicago portfolio-management range of roughly $20–$45 per unit per month. It explains cost drivers, transition fees, capital-project charges, and contract escalation before presenting a proposal form. Stellar’s defensible differentiator is starting at $20 per unit and not charging a separate capital-project planning or management-oversight fee. Stellar should explain inclusions precisely without copying Hales’ wording.

Source: https://halespropertymanagement.com/chicago-condo-association/condo-association-management-cost-chicago/

### Westward360

Map/search strength: extensive reviews, paid local visibility, public package pricing, AAMC designation, named local managers with credentials, a Chicago office section, testimonials, and proposal CTAs. Weakness for Stellar to exploit: a more personal decision-maker relationship, simpler pricing logic, and genuinely local board guidance without national-chain breadth.

Source: https://westward360.com/locations/chicago-il/

### Chicagoland Community Management

Map strength: 4.3 stars from 141 reviews. The home page directly states community-association and condominium intent, provides board-facing service summaries, gives transition support its own section, and repeats a proposal CTA without overwhelming the page.

Source: https://www.chicagoland-inc.com/

### Connected Property Management

Map strength: 3.3 stars from 103 reviews. Its commercial positioning is sharply constrained to Chicago condominium associations, smaller associations, transparent fees, 24/7 support, and an explicit transition page. Its weakness is dated presentation and limited current educational depth.

Source: https://www.connectedmanagement.com/associations

### Haus Financial Services

Organic strength: focused exclusively on Chicago small condominium associations of 20 units or fewer, with package-based services, testimonials, and a detailed lead form. Stellar should not imitate the exact unit cutoff unless that matches its actual operating model. Stellar can win by connecting small-association operations, full-service management, transparent pricing, transition support, and licensed credentials on one authoritative page.

Source: https://hausfs.com/

## Claim-verification ledger

Claims currently supported by owner-provided material or public profile:

- Business name, office address, and phone
- CAI membership and CAI Illinois Chapter membership
- Mirsad Cerimovic credentials: CAM, CMCA, AMS (owner-provided CAI/CAMICB evidence)
- Illinois community-association-management firm license number 291000211 is stated in the project; current active status should be captured from the IDFPR public lookup before the next credential expansion
- Pricing starts at $20 per unit per month
- No separate capital-project planning or management-oversight fee

Claims requiring a dated internal source of truth before broader reuse:

- 42 associations under management
- 2,450+ residences/units managed
- 96% retention rate and the measurement period/denominator
- operating since 2007 / corporate formation or first management contract
- every claim of a 24/7 live person or next-morning incident report
- every claim that a dedicated manager is assigned to each community
- any “thousands of transactions monthly” claim
- veteran-owned and LGBTQ+ friendly profile attributes

No unverified statistic or credential should be added to new content. Existing claims should be preserved until the owner supplies contrary information, then corrected consistently across HTML, schema, `llms.txt`, and Google Business Profile.

## Prioritized work

### P0 — revenue / critical SEO

1. Fix the broken production `/knowledge` route or remove the public footer link until it is intentionally available.
2. Add privacy-friendly page/traffic analytics, real-user CWV, and qualified conversion attribution.
3. Improve titles, descriptions, opening copy, and CTA alignment on the condominium, HOA, townhome, Chicago, and pricing pages using their assigned search intents.
4. Audit and update the Google Business Profile’s canonical website URL, categories, services, hours, description, and verified attributes.
5. Create a policy-compliant review and response operating process; the 3.3 rating is a material map and conversion disadvantage.
6. Preserve all legacy redirects and canonical equity; monitor non-www and old `/contact-us/` impressions as Google consolidates them.

### P1 — high impact

1. Delay the AI concierge bundle until idle time or user intent to reduce initial mobile JavaScript.
2. Self-host/subset the required fonts or reduce requested font variants; remove the render-blocking Google Fonts dependency.
3. Fix contrast and accessible-name failures across the shared theme, footer, form, and Arthur control.
4. Add complete Open Graph and Twitter metadata to the 91/92 affected pages.
5. Publish the strongest decision-stage resources first: pricing, switching, proposal comparison, hiring questions, financial package, and transition checklist.
6. Strengthen reverse-silo links from decision articles to one service page, one regional page, pricing when relevant, and the proposal conversion.
7. Improve top local pages with verified neighborhood-specific association issues; do not expand the page count until existing local pages demonstrate quality and impressions.
8. Resubmit the improved commercial URLs and validate Search Console indexing after deployment.

### P2 — meaningful

1. Shorten overlong descriptions, particularly articles, to improve snippet control.
2. Add visible author/credential context and reviewed-date policies to legal and financial articles.
3. Add a verified leadership portrait and professional biography when real assets are available.
4. Build a board-ready downloadable management-proposal scorecard with attribution tracking.
5. Add monthly reporting that ties organic landing pages to qualified leads and signed associations.

### P3 — cosmetic / optional

1. Refine photography and visual hierarchy after P0/P1 metrics are in place.
2. Add subtle architectural visual details only where they do not increase LCP or distract from the proposal path.

## Release gates

Before production deployment:

- TypeScript, lint, production build, prerender, sitemap, publication schedule, content-silo checks
- Live-crawl equivalent against the preview URL
- Lighthouse mobile checks on home, condominium management, pricing, and contact
- Keyboard and form accessibility checks
- Proposal form smoke test without creating a real external lead unless explicitly authorized
- Redirect tests for non-www, HTTP, trailing slashes, `/contact-us/`, `/pay-assessments/`, and other legacy paths
- Structured-data validation against visible content
- Independent Claude review when the configured Claude integration is available

After production deployment:

- Confirm Vercel deployment is ready and scan runtime errors
- Verify canonical response headers and all priority URLs
- Submit priority URLs to Google Search Console and IndexNow
- Update the XML sitemap only through the build process
- Record the deployment date as the measurement baseline
- Review Search Console and qualified-lead outcomes after enough data accumulates; do not judge rankings from daily volatility
