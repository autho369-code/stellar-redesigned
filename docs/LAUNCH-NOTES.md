# Launch notes — redesign (R0–R9), 2026-11-26

For Mirsad. Short version of what changed, what to look at, and what is open.

## What changed on the live site
- New header, menu and footer. Call and proposal bar on phones.
- New, shorter homepage. No fee calculator: the only price shown is
  "starting at $30 per unit per month, everything included, with no extra fees".
- Trust bar under every page top: 30+ associations, about 1,500 residences.
- Pricing page: fees we do not charge, the 60-day contract line, how switching works.
- Reviews page shows the three Google reviews. Review cards on service pages.
- Kenmore roof case study page (`/case-studies/6150-n-kenmore-roof`).
- Uptown and Andersonville area pages upgraded. Hyde Park removed.
- Guides: "On this page" list on wide screens.
- Contact form: three short steps. Same emails, same fields.
- About page: timeline (1997, 2007, today) and the contract line.
- Blog page: topic buttons above the guide list.

## Checks run (R9)
- 205 automatic tests pass (all 150 pages keep their title, H1, description,
  canonical and robots tag; phone, email and form tracking still fire).
- Speed test, one phone run per page type, local build of `2e41691`:

| Page | Speed | Access. | SEO | Main content | Jump | Blocked |
|---|---|---|---|---|---|---|
| / | 85 | 100 | 100 | 3.1 s | 0 | 350 ms |
| /services/condominium-management | 98 | 96 | 100 | 2.3 s | 0 | 60 ms |
| /services | 97 | 96 | 100 | 2.4 s | 0 | 50 ms |
| /property-management-wilmette | 93 | 100 | 100 | 2.8 s | 0 | 160 ms |
| /property-management-gold-coast | 97 | 96 | 100 | 2.2 s | 0 | 110 ms |
| /property-management-chicago | 95 | 96 | 100 | 2.7 s | 0 | 110 ms |
| /blog | 96 | 96 | 100 | 2.3 s | 0 | 130 ms |
| /blog/switch-condo-management-companies-chicago | 95 | 96 | 100 | 2.6 s | 0 | 130 ms |
| /pricing | 96 | 100 | 100 | 2.5 s | 0 | 70 ms |
| /contact | 97 | 96 | 100 | 2.2 s | 0 | 140 ms |
| /about | 95 | 96 | 100 | 2.8 s | 0 | 40 ms |
| /reviews | 97 | 100 | 100 | 2.5 s | 0 | 70 ms |
| /case-studies/6150-n-kenmore-roof | 98 | 100 | 100 | 2.2 s | 0 | 50 ms |

  The homepage run of 85 is one run; two runs earlier the same night gave 94
  and 97. The homepage is the page to watch.
- Google Rich Results Test (run in Mirsad's Google account, 11:06 PM):
  home = 2 valid items (Local business, Organization); condo service page =
  1 valid (Breadcrumbs); switch guide = 1 valid (Article, non-critical notes);
  /pricing = no rich result items (not an error).
- Google "Request indexing": NOT done. Search Console answered "Quota
  exceeded" for today. Try again tomorrow for `/`, `/pricing`, `/reviews`,
  `/services/condominium-management`, `/services/hoa-management`.
- Brand-swap dry run: FAILS. Changing only `src/brand/brand.config.ts` to a
  made-up brand left 1,782 "Stellar", 382 old phone numbers and 1,468 old
  domain strings in the built pages; the name is typed by hand in 97 source
  files and in `public/llms.txt` and `index.html`. Only matters for a rename.

## Rollback
Vercel → project → Deployments → pick the deployment for the commit → "Instant
Rollback". Useful commits on `main`:
- `2e41691` current (all of the above).
- `7cced46` before the last four changes of the night (guides list, 3-step
  form, blog buttons/About timeline, font preload).
- `ecd5c5e` before the new header, footer and homepage (end of R2).
- `eeac687` before the whole redesign program (before R0).

## Rollback update (Nov 27, 2026)
Newest first; all squash merges on `main`. To roll back in git instead of Vercel:
`git revert <sha>` on a branch, PR, merge.
- `51c5a60` docs (#95), `35fcc10` AEO guide, FAQs, llms-full (#94).
- `a412095` 23 area pages upgraded (#92), `cbe4618` publishing freeze lifted (#91).
- `4903cf7` blank-page fix (#88): do not roll back past this one.
- `6bca362` schema, favicon, /pricing links (#83).
The production deployment ID is not recorded here: the Vercel project for this
site is not visible to the bot's connected account. To record it, open Vercel →
project → Deployments, copy the ID of the current Production deployment and add
it above. Instant Rollback works from that list without a rebuild.

## Not an owner decision, now built
- `npm run brand:dry-run` rehearses a rename end to end (docs/BRAND-SWAP.md).
- `npm run seo:diff` lists every title, H1, description, canonical, robots or
  JSON-LD change against `tests/fixtures/urls.json`.
- Full-site crawl: `npx unlighthouse --site https://www.stellarpropertygroup.com`
  (monthly, not in CI).

## Still needs Mirsad
- Team names, roles and photos for the About page.
- Gold Coast page: is "some of the Gold Coast's most distinguished addresses" true?
- Form emails: Web3Forms mail was landing in Deleted Items in Outlook. He
  added Web3Forms to trusted senders; one real form test should confirm.

## Not built
- Fee calculator, Hyde Park page, Google office photos, 29 / 1,422 numbers:
  owner said no.
- Sticky "On this page" list on service pages (does not fit those layouts).
- Static map on area pages (no map image).
- Switch-guide main content time is about 2.6 s (target 2.5 s).
