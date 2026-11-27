import type { AreaContent } from './types';

export const loganSquare: AreaContent = {
  slug: 'logan-square',
  targetQuery: 'condo management logan square chicago',
  title: 'Condo Management in Logan Square, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Logan Square boards: two-flats, three-flats and courtyard buildings on landmark boulevards. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Logan Square is built around its boulevards and the square itself. Most buildings are brick two-flats, three-flats and courtyard buildings from the early twentieth century, and many have been converted to condominiums. A smaller group of newer buildings sits along the Milwaukee Avenue corridor.',
  housing: {
    intro:
      'The City of Chicago publishes community-area data, and Logan Square is Community Area 22. The Census-based figures below, prepared by the Chicago Metropolitan Agency for Planning, describe the whole community area, so they include Palmer Square and the blocks around it.',
    stats: [
      { label: 'Median year a home was built', value: '1932' },
      { label: 'Homes built before 1940', value: '58.9%' },
      { label: 'Homes in two-unit buildings', value: '16.8%' },
      { label: 'Homes in buildings of three or four units', value: '27.6%' },
      { label: 'Homes in buildings of five to nine units', value: '16.3%' },
      { label: 'Homes in buildings of twenty or more units', value: '15.8%' },
      { label: 'Households that rent', value: '61.4%' },
      { label: 'Homes built since 2010', value: '10.0%' },
    ],
    takeaway:
      'Nearly three homes in five predate 1940, and almost half sit in buildings of two to four units. That is the classic Chicago pattern: small self-managed associations with old masonry, old porches and old plumbing, run by neighbors who have day jobs.',
  },
  buildingTypes: [
    {
      name: 'Three-flats and four-flats with a condominium declaration',
      detail:
        'Converted walk-ups where every owner is on the board and every decision is a neighbor conversation. The masonry, the back porch and the shared roof are usually the largest repairs ahead.',
    },
    {
      name: 'Courtyard buildings along the boulevards',
      detail:
        'Larger vintage buildings with a shared court, a boiler and a deep reserve question. Landmark review applies to buildings inside the boulevards district.',
    },
    {
      name: 'Newer mid-rise buildings near Milwaukee Avenue',
      detail:
        'Elevator buildings from the last fifteen years, with fewer owners-occupants on the board and a higher share of investors.',
    },
  ],
  issues: [
    {
      title: 'Back porches that carry the building’s exit',
      body:
        'Wooden porch stacks are often the only rear exit in an older walk-up. A board that inspects them every year and budgets for rebuilds avoids an emergency special assessment after a city complaint.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'porch and deck safety for Chicago condo boards',
    },
    {
      title: 'Capital planning for brick and boilers',
      body:
        'Tuckpointing, lintel replacement and a hot-water boiler are the line items that arrive together in a building from the 1920s. A phased plan costs less than three emergency jobs.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condominiums',
    },
    {
      title: 'Splitting costs inside a three-flat',
      body:
        'When one unit’s kitchen leak damages the unit below, owners look to the board for an answer. The declaration and Illinois law decide who pays for the pipe, the drywall and the deductible.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a condo water leak in Illinois',
    },
    {
      title: 'Buyers asking for paperwork on short notice',
      body:
        'Every sale of a condominium unit needs the association’s Section 22.1 disclosure package. Keeping budgets, minutes and the reserve summary current turns a two-week scramble into an afternoon.',
      post: 'illinois-22-1-disclosure-packet-checklist',
      linkText: 'a Section 22.1 disclosure packet checklist',
    },
    {
      title: 'Landlord owners and leasing limits',
      body:
        'With six in ten households renting, many units belong to investors. A leasing policy that is clear and applied the same way every time is easier to defend than a rule enforced only after a complaint.',
      post: 'renting-out-your-condo-chicago-rules',
      linkText: 'the rules for renting out a Chicago condo',
    },
  ],
  localItems: [
    {
      title: 'Logan Square Boulevards Landmark District',
      body:
        'The City designated the Logan Square Boulevards district on November 1, 2005. A building permit for exterior work inside a Chicago Landmark district is routed to the Department of Planning and Development’s historic preservation staff, who review windows, masonry and roofing against the district’s standards. Ask early, before a contractor quotes.',
    },
    {
      title: 'Garbage service stops at four units',
      body:
        'The City of Chicago picks up garbage only from single-family homes and buildings of four units or fewer. A building of five or more units has to contract a private hauler, with fines of up to $500 a day for not having one under Municipal Code 7-28-240. Many Logan Square buildings sit right at the line.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Chicago was reassessed in 2024, and the next citywide reassessment is 2027, with those bills payable in 2028. Boards can still appeal a building’s assessment each year when the Assessor’s calendar opens.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does the landmark district affect window replacement?',
      a: 'Inside the Logan Square Boulevards district, exterior permits go to the City’s historic preservation staff, who check whether the work fits the district. Ask the Department of Planning and Development before ordering windows.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Why do so many Logan Square associations have only three or four owners?',
      a: 'Census data show that about 44 percent of the neighborhood’s homes are in buildings of two to four units. Those buildings were often built as rental flats and converted later, so each declaration is different.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'Does a four-unit building have to hire a private hauler?',
      a: 'No. Chicago’s Department of Streets and Sanitation serves buildings of four units or fewer. At five units, the building must arrange private service.',
      post: 'common-condo-rule-violations-chicago',
    },
    {
      q: 'Can a board ban short-term rentals in a Logan Square building?',
      a: 'A condominium association can ask the City to add its building to the Prohibited Buildings List, and its declaration may also restrict leasing. The two routes work differently, and the guide compares them.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'Can a small building hire a management company?',
      a: 'Yes. A three-unit board can ask for a proposal like any other. We price from the building we review, and the pricing page shows how the fee is set.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Logan Square community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Logan-Square.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Landmark district permit requirements (City of Chicago)', href: 'https://www.chicago.gov/content/dam/city/depts/zlup/Historic_Preservation/Publications/Permit_Application_Submission_Requirements_2025.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
