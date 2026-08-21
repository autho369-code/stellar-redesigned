# Search reputation playbook — Stellar Property Management

> Written 2026-08-21. Companion to `PROJECT-STATE.md`. Covers what a searcher
> currently sees for brand and founder-name queries, what was shipped to change
> it, and the off-site work that only a human with account access can do.

## The problem, stated plainly

Two different searches have two different problems.

**Query: "Stellar Property Management" / "Stellar Property Management Chicago"**
The first page is dominated by review aggregators, not by Stellar. Observed
2026-08-21: Yelp, Birdeye, BBB, YellowPages, Yahoo Local, ShowMeLocal,
Facebook, a third-party `localo.site` microsite, and the real website. Google
Business Profile sits at 3.3★ / 63.

**Query: "Mirsad Cerimovic"**
A near-empty SERP filled by contact-scraper sites (ContactOut, RocketReach), a
**dead LinkedIn URL** that returns "Profile Not Found", and the Yelp listing.
An empty personal SERP is the easiest kind to improve — and the easiest kind
for a single negative page to dominate.

### The specific damaging content

A Yelp review alleges that after a resident posted a negative review, the
principal responded with repeated threats of legal action: threats to identify
the reviewer by IP address, a threat to sue the entire association if the
review was not removed, and a further threat sent to the reviewer's spouse.
This narrative is now reproduced in AI-generated summaries of the business,
not just on the Yelp page itself.

Whether or not the account is fair, it is the single most repeated negative
claim attached to the name, and it is the one that generalizes: it reads as a
claim about character rather than about one service dispute.

**The first rule of this playbook: do not escalate.** Legal threats against
reviewers are what produced the content. Illinois has an anti-SLAPP statute
(the Citizen Participation Act, 735 ILCS 110) that makes suits over reviews
legally risky, and every escalation creates fresh indexable material — the
"Streisand effect" is the ordinary outcome, not a rare one. Public, calm,
factual replies outperform legal pressure on every measurable axis. Run any
review that touches active litigation past association counsel first, then
reply neutrally or not at all.

*This is a communications recommendation, not legal advice — confirm the
statutory questions with the association attorney.*

## What shipped on the site (2026-08-21)

**New: `/about/mirsad-cerimovic`** — a dedicated founder profile page.

This is the core suppression asset. Reasoning: informational condo-law blog
posts, however good, do not rank for *"Mirsad Cerimovic"* or *"Stellar
Property Management"*. Suppression requires pages that target the **name**
itself. The profile page carries:

- A `<title>` led by the name ("Mirsad Cerimovic, CMCA | Founder, Stellar
  Property Management")
- `ProfilePage` + `Person` JSON-LD. The Person node keeps its original `@id`
  (`/about#mirsad-cerimovic`) so the 57 existing Article author references stay
  intact, but its `url` and `mainEntityOfPage` now resolve to the new page —
  one entity, one canonical home.
- Verifiable credentials: Illinois CAM license, CMCA, AMS, Illinois CAM Firm
  license #291000211, CAI and CAI-Illinois membership
- Biography, four focus areas, and an author archive of the published guides

**Supporting internal links** (these are what make the page rank):

- Every blog post now ends with an author box linking to the profile —
  57 articles pointing at one page, which is a strong internal signal
- Blog bylines and the `Article.author.url` now resolve to the profile
- The About page founder card links through to it
- `llms.txt` lists the profile, so AI crawlers reading the site for answers
  about the principal find a first-party source

## Off-site work — requires human account access

Ordered by leverage-to-effort. Items 1 and 2 are the highest return.

### 1. BBB — respond to the open complaint (highest priority)

Current state: rating **C**, not accredited, "failure to respond to 1
complaint". BBB ranks on page one for the brand query, and the rating is
depressed by a single unanswered item. This is the cheapest available win.

1. Sign in / claim the profile at `bbb.org` (file opened 2024-02-23)
2. Open the complaint and respond factually — what happened, what was done,
   what the association's process is. No legal language.
3. Ask BBB to re-evaluate the rating once the response posts.

Response structure that works:

> Thank you for the opportunity to respond. Stellar Property Management is the
> managing agent for [association], which means our authority comes from the
> association's elected board and its governing documents.
> [Factual account of what occurred and when.]
> [What was done, or what the correct process is for this issue.]
> Owners with an unresolved concern can reach me directly at
> mirsad@stellarpropertygroup.com or 773.728.0652.
>
> — Mirsad Cerimovic, CMCA, AMS, Founder & Principal

The pattern to keep: state the agent/board distinction once, stay factual,
give a real contact route, sign personally. Never argue the complainant's
motives.

Accreditation is optional and paid — worth considering only after the rating
recovers, since an accredited C looks worse than an unaccredited B.

### 2. Rebuild LinkedIn

`linkedin.com/in/mirsad-cerimovic-0a1a62bb/` currently returns "Profile Not
Found". LinkedIn profiles rank on page one for personal-name queries almost by
default — this is a free slot currently being wasted.

- Rebuild the personal profile: headline "Founder & Principal, Stellar
  Property Management | CMCA, AMS | Chicago Condo & HOA Management"
- Create/claim the company page, link it to the website
- Once live, add the LinkedIn URL to the `Person.sameAs` array in
  `src/pages/AuthorMirsadCerimovic.tsx` (deliberately omitted for now — do not
  add `sameAs` links to profiles that 404)

### 3. Vercel — make the apex redirect permanent

`https://stellarpropertygroup.com/` currently answers **307 Temporary
Redirect** to the www host. Google treats 307 as temporary, which weakens
consolidation onto the canonical www host — and non-www legacy URLs are still
appearing in search results as a result.

Vercel dashboard → Project → Settings → Domains → `stellarpropertygroup.com` →
change the redirect status code from 307 to **308 Permanent**. Roughly a
two-minute change; it cannot be set from `vercel.json` because the domain-level
redirect fires ahead of routing rules.

### 4. Purge the legacy hacked URLs from the index

The previous site was compromised and spam pages under `/site/*` are still
surfacing in search results (e.g. `/site/matt-stonie-eyes-08336a`). The site
handles these correctly — `vercel.json` rewrites `/site/*` to `api/gone.js`,
which returns **410 Gone** — but a 410 only drops a URL when the crawler
revisits it.

- Google Search Console → Removals → Temporary removals, then submit the
  prefix `stellarpropertygroup.com/site/`
- Bing Webmaster Tools → Block URLs, same prefix
- Both properties: confirm the **non-www** property is also verified, since
  that is the host these URLs are indexed under

### 5. Review velocity — the only durable fix for 3.3★

Ratings math from the current 3.3 / 63 base: **+10 five-star reviews → 3.5,
+28 → 3.8, +46 → 4.0.** There is no shortcut; the only lever is volume of
genuine reviews from real clients.

- Ask board members after a meeting that went well — that is the moment
- Weekly rhythm, not a one-time blast; a sudden spike looks manufactured and
  risks a filter
- Never incentivize, never gate ("only if you'd rate us 5 stars"). Both violate
  Google's policies and the FTC's 2024 rule on review suppression, and gating
  is exactly what the existing `/reviews` page was built to avoid — it offers
  the public review link and the private feedback route side by side with no
  screening step.
- Point people at `/reviews` (already `noindex, follow` — correct, it is a
  utility page, not a ranking asset)

Note the asymmetry worth exploiting: Birdeye already shows **3.9★ across 162
reviews**, materially better than the GBP figure and it ranks on brand
queries.

### 6. Fill the remaining brand-SERP slots

Every slot Stellar owns is a slot an aggregator doesn't.

- **CooperatorNews Chicagoland** — appeared in nearly every topical search run
  during this audit. Pitch a bylined board-education article. An author archive
  on an established industry publication is both a name-query asset and a real
  backlink.
- **CAI-Illinois chapter** — member/manager directory profile
- **Yelp and Facebook** — claim/verify both; a claimed profile lets you post
  factual owner responses
- **`stellar-property-management.localo.site`** — a third-party microsite
  ranking on brand queries. **Determine who controls this.** If it is an
  agency-run asset, either keep it pointed at the canonical site or have it
  taken down; if nobody at Stellar controls it, it is an uncontrolled page
  ranking for the brand name.

## What not to do

- **No legal threats over reviews.** See above. This is the origin of the worst
  content on the internet about this business.
- **No fake or incentivized reviews.** Illegal under the FTC rule, detectable,
  and a filtered review purge would drop the rating further than it is now.
- **No paid "reputation repair" vendors** promising removals. Reviews on Yelp
  and Google come down only for policy violations, which you can flag yourself
  for free.
- **No new domains or doorway microsites** to bury results. Google treats that
  pattern as manipulation, and the site just finished consolidating 13 thin
  area pages for exactly that reason.

## Measurement

There is no ranking data in this repo and no Search Console API credential
configured, so nothing here is measured — it is inferred from live checks and
web search. To close that gap, either:

- Export GSC **Performance → Pages** and **Queries** (last 3 months) to CSV and
  commit under `docs/`, or
- Add a Google service-account JSON with Search Console read scope so a
  reporting script can pull positions directly

Track monthly: brand-query SERP composition (how many of the top 10 does
Stellar control), GBP rating and count, BBB rating, and whether
`/about/mirsad-cerimovic` ranks for the founder name.
