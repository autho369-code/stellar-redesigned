# LinkedIn build sheet

> Written 2026-08-21. Paste-ready fields for the personal profile and the
> company page. Purpose is the name query: LinkedIn ranks on a person's name
> almost by default, so this is the most reliable slot you control, and every
> field here matches what is now published at
> `stellarpropertygroup.com/about/mirsad-cerimovic`.
>
> **The rule underneath all of it:** the site and the profile must tell Google
> the *same* story. Matching facts merge into one entity. Diverging facts split
> into two weak ones.

---

## 1. Headline

Current headline carries the credentials but no topic or geography, so it can
only ever rank for the name itself. Replace with:

> Founder & Principal, Stellar Property Management | CMCA, AMS | Licensed
> Chicago Stationary Engineer | Condo & HOA Management

220 characters available; this uses about 120. It carries the name-adjacent
terms someone would pair with the name — *Chicago*, *condo*, *HOA*,
*engineer* — which is what lets the profile rank for more than the bare name.

---

## 2. About section

Paste verbatim. This is the long bio from `name-search-plan.md`, which matches
the site biography.

> I entered the Chicago community association industry in April 1997 and
> founded Stellar Property Management in 2007 to do one thing: manage community
> associations. Not rentals, not brokerage — condominium associations, HOAs, and
> townhome communities.
>
> The firm manages 42 associations and roughly 2,450 residences across Chicago
> and the North Shore, with a 96% client retention rate. I review the financial
> reporting standard applied to every association in the portfolio and lead each
> incoming board through its transition personally. Over the years I have
> managed portfolios exceeding fifty associations.
>
> I am a licensed Illinois Community Association Manager (CMCA, AMS) and a
> member of the Community Associations Institute and its Illinois Chapter. I am
> also a licensed City of Chicago stationary engineer and a NIULPE-certified
> power engineer — qualified to run a commercial building's mechanical plant,
> not merely to hire someone who can. From July 2007 to November 2024 I taught the
> exam-preparation course for that same Chicago license at SEIU Local 1,
> seventeen years training the engineers who keep the city's buildings running.
>
> That combination changes the work. Most association managers read a reserve
> study as a spreadsheet. I read it as a building — which components are
> genuinely near end of life, which contractor bid describes work the plant does
> not need, and which deferred repair becomes an emergency in the next cold
> snap.
>
> I write the firm's board guides on Illinois condominium law, reserve funding,
> and association governance, published at stellarpropertygroup.com.
>
> Board members evaluating management can reach me at
> mirsad@stellarpropertygroup.com or 773.728.0652.

---

## 3. Licenses & Certifications — the highest-value section

This is the part most people skip, and it is the single most useful thing on
the profile for the name query. LinkedIn renders each entry as **structured
data with the issuing organization as a linked entity**. Five entries, each
tying you to an organization Google already recognizes.

Add all five. `Profile → Add profile section → Recommended → Add licenses &
certifications`.

| Name | Issuing organization | Credential ID | Notes |
|---|---|---|---|
| Community Association Manager (CAM) License | Illinois Department of Financial and Professional Regulation | 261000524 | No expiration date — set "Issued" only, or the entry shows as lapsed after the renewal date passes |
| Certified Manager of Community Associations (CMCA) | Community Association Managers International Certification Board (CAMICB) | — | Credential URL: `https://www.camicb.org/find-a-cmca/` |
| Association Management Specialist (AMS) | Community Associations Institute | — | Issued March 2020 |
| Stationary Engineer's License | City of Chicago Department of Buildings | — | |
| Certified Power Engineer | National Institute for the Uniform Licensing of Power Engineers (NIULPE) | — | |

**Pick the issuing organization from LinkedIn's autocomplete** rather than
typing free text. A matched organization links to a real LinkedIn company
entity; typed text is an unlinked string and carries far less weight.

---

## 4. Experience

Two entries. The teaching role is the one that differentiates you and it is
currently missing.

**Stellar Property Management** — Founder & Principal · 2007 – Present ·
Chicago, Illinois

> Community association management for condominium, HOA, and townhome boards
> across Chicago and the North Shore. 42 associations, roughly 2,450
> residences, 96% client retention. Lead every incoming board through its
> transition personally and set the financial reporting standard applied across
> the portfolio.

**SEIU Local 1** — Instructor, Stationary Engineer's License Exam Preparation ·
July 2007 – November 2024 · Chicago, Illinois

> Helped establish and then taught the exam-preparation course for the City of
> Chicago Stationary Engineer's License for seventeen years — boiler and pressure-vessel
> operation, refrigeration, building mechanical systems, and the code knowledge
> the city examination requires. Trained the engineers who operate the plant in
> Chicago's commercial and residential buildings.

If roles between 1997 and 2007 belong on the profile, add them — the 1997 start
date is now published on the site and the two should agree.

---

## 5. Featured section

`Add profile section → Recommended → Add featured`. Pin these three:

1. `https://www.stellarpropertygroup.com/about/mirsad-cerimovic` — "Full profile, credentials and published guides"
2. `https://www.stellarpropertygroup.com/blog/illinois-section-22-1-disclosure-board-guide` — "Illinois Section 22.1 disclosures: a board guide"
3. `https://www.stellarpropertygroup.com/condo-living` — "The Owner's Companion"

Featured links are followed and they pass real signal to the profile page —
which is the other slot being built for the name query.

---

## 6. Contact info

**Website field → `https://www.stellarpropertygroup.com/about/mirsad-cerimovic`**,
labeled "Company." The profile page, not the homepage. The site already points
at LinkedIn via `Person.sameAs` and a visible `rel="me"` link; this is the
return half, and without it the identity claim only runs one direction.

---

## 7. Public visibility — check this or none of it counts

`Settings → Visibility → Edit your public profile`

- Public profile visible to **everyone**
- Search engines **allowed** to show the profile
- Photo, headline, about, experience, and certifications all set to public

Google still has a "Profile Not Found" result cached for this URL from before
it was restored. It only clears when a crawler fetches the page publicly.
**Test in an incognito window** — if you cannot see it logged out, neither can
Google.

---

## 8. Company page — `linkedin.com/company/6977209`

**Fix first:** CAMICB lists the firm as "Stellar Property Group." The company
page, the CAMICB record, GBP, and the site should all read **Stellar Property
Management**. Mismatched names split the entity exactly the way misspellings
do.

- **Tagline:** Condo, HOA & townhome association management for Chicago and the
  North Shore. Licensed, credentialed, flat-fee.
- **About:** reuse the short bio from `name-search-plan.md`, third person
- **Website:** `https://www.stellarpropertygroup.com`
- **Industry:** Real Estate · **Company size:** 2–10 · **Founded:** 2007
- **Specialties:** condominium association management, HOA management, townhome
  association management, reserve planning, Illinois association law
  compliance, board support, financial reporting
- **Location:** 5107 N Western Ave, Suite 1S, Chicago, IL 60625

**Posting:** connect a scheduler to `https://www.stellarpropertygroup.com/rss.xml`
and new guides post themselves — see `linkedin-launch-posts.md` for the six
hand-written backfill posts and the pacing. A page that posts weekly outranks a
dormant one on the brand query.

---

## Order of work

1. Public visibility check — everything else is wasted until this is right
2. Website field → the profile page
3. Licenses & certifications, all five
4. Headline
5. About section
6. Experience — especially SEIU Local 1
7. Featured links
8. Company page name fix and fields
9. Scheduler → RSS

**Send me the URL of anything new that names you** — a CAI directory listing, a
NIULPE record, an SEIU page — and it goes into `Person.sameAs` on the site.
Third-party corroboration outweighs anything the site can say about itself.
