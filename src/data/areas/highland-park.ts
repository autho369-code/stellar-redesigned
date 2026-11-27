import type { AreaContent } from './types';

export const highlandPark: AreaContent = {
  slug: 'highland-park',
  targetQuery: 'condo management highland park il',
  title: 'Condo Management in Highland Park, IL | From $30/Unit',
  metaDescription:
    'Condo, HOA and townhome management for Highland Park boards: ravine and bluff sites, mature landscaping and reserves. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Highland Park pairs lakefront ravines and an arts scene with condominium buildings, townhome enclaves and homeowner associations. Mature landscaping and ravine and bluff sites shape the work here, and many owners have lived in their homes for a long time.',
  housing: {
    intro:
      'Highland Park is a Lake County city on the lakefront, with about 11,800 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median year the housing stock was built', value: '1963' },
      { label: 'Pre-1940 construction', value: '2,981 (23.9%)' },
      { label: '1940 to 1969 construction', value: '4,392 (35.2%)' },
      { label: 'Construction since 2010', value: '579 (4.6%)' },
      { label: 'Single-family detached homes', value: '9,193 (73.6%)' },
      { label: 'Single-family attached homes', value: '569 (4.6%)' },
      { label: 'Buildings of twenty or more units', value: '1,385 (11.1%)' },
      { label: 'Owner households', value: '9,875 (83.8%)' },
    ],
    takeaway:
      'Nearly three quarters of Highland Park’s homes (73.6 percent) are detached houses and 83.8 percent of households own. Buildings of twenty or more units are 11.1 percent of the stock, so condominium and townhome associations are a minority that sits among single-family blocks, often with ravine, bluff and landscape work that a single-family street does not have.',
  },
  buildingTypes: [
    {
      name: 'Condominium buildings',
      detail:
        'Buildings where long-tenured owners know the property well and expect clear answers about every dollar.',
    },
    {
      name: 'Townhome enclaves and homeowner associations',
      detail:
        'Communities with shared grounds, where trees, drainage and slopes are a large part of the yearly budget.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Landscape and site contracts',
      body:
        'On a ravine or bluff site, the landscape contract covers more than mowing. Write out tree care, drainage and slope work as separate lines, so each bidder prices the same job. Walk the site with each bidder, so slopes and access are priced from what they saw.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'building a vendor RFP with a clear scope',
    },
    {
      title: 'Storm and tree emergencies',
      body:
        'Decide now who can approve urgent tree or drainage work after a storm, which contractor is called first, and how owners are told. Keep photos and invoices for the insurer. After a storm, no board member should have to guess whether a fallen tree belongs to the association or to an owner.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'an association emergency checklist',
    },
    {
      title: 'Insurance renewal',
      body:
        'A carrier looks at how a property is kept. Bring maintenance records, completed repairs and the facts of any past claim, and start well before the renewal date. Ravine and bluff conditions are worth a short written note for the carrier.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'getting ready for the insurance renewal',
    },
    {
      title: 'The right statute',
      body:
        'A condominium follows the Condominium Property Act. Many townhome and homeowner associations follow the Common Interest Community Association Act. Know which one before the board sets a meeting or election rule. The answer also decides which notice periods and owner rights apply.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'finding the Illinois statute for your association',
    },
    {
      title: 'Reserves that match the site',
      body:
        'Illinois sets no fixed reserve percentage for condominiums; the Act asks for reasonable reserves in light of the association’s circumstances. On a wooded, sloped site, those circumstances include drainage and retaining structures. Review the plan after every hard storm season.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'how boards decide what reserves are reasonable',
    },
  ],
  localItems: [
    {
      title: 'Rental registration for units with their own entrance',
      body:
        'Highland Park Code Chapter 154 requires annual registration, on or before April 1, for a dwelling unit that is leased to someone other than an owner and has its own entrance to the outside, which takes in townhomes and condominium units that open directly outside. Each rented unit is registered separately.',
    },
    {
      title: 'Short-term rentals',
      body:
        'Under the zoning code, a property cannot be used as a short-term rental unless it is first registered as a rental property under Chapter 154. An association’s own rules may be stricter.',
    },
    {
      title: 'Lake County assessments',
      body:
        'Highland Park is in Lake County, not Cook County, so Cook County’s reassessment schedule does not apply. Assessments run through the township assessor and the Lake County Board of Review, and a board should confirm the township’s calendar before planning an appeal.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Highland Park townhome street from the sidewalk; a wooded common area (public view).
  photos: [],
  faqs: [
    {
      q: 'Who can approve emergency tree work for a Highland Park association?',
      a: 'Your declaration, bylaws and the governing statute decide what the board may approve without a meeting. Ask association counsel once and write the answer into the emergency plan.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'How should a board bid a landscape contract?',
      a: 'Give every bidder the same written scope, with tree care, drainage and seasonal work listed separately. Then the bids can be compared line by line.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Is a Highland Park homeowners association under the Condominium Property Act?',
      a: 'Often not. Many homeowner and townhome associations are governed by the Common Interest Community Association Act. The recorded declaration shows which statute applies.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'What should a Highland Park board put in its reserve plan?',
      a: 'Every shared component with a life span: roofs, drives, drainage, retaining structures and major trees. Give each one a date and a cost, and update the list every year.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Does Cook County’s reassessment schedule apply to Highland Park associations?',
      a: 'No. Highland Park is in Lake County, where assessments run through township assessors and the county Board of Review. Confirm the township calendar before planning a tax appeal.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Highland Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Highland-Park.pdf' },
    { label: 'Highland Park rental registration program', href: 'https://www.cityhpil.com/government/city_departments/community_development/rental_registration.php' },
    { label: 'Lake County Illinois, Supervisor of Assessments', href: 'https://www.lakecountyil.gov/FAQ.aspx?QID=242' },
  ],
};
