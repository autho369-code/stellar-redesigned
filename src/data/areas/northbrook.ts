import type { AreaContent } from './types';

export const northbrook: AreaContent = {
  slug: 'northbrook',
  targetQuery: 'hoa management northbrook il',
  title: 'HOA & Condo Management in Northbrook, IL | From $30/Unit',
  metaDescription:
    'HOA, townhome and condo management for Northbrook boards: roofing, siding and private road projects, bids and reserves. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Northbrook has a large number of townhome and condominium associations built from the 1970s to today. Many are reaching the years when roofing, siding, windows, private roads and common lighting need replacement close together.',
  housing: {
    intro:
      'Northbrook is a Cook County village of about 13,300 occupied homes. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median construction year, all homes', value: '1976' },
      { label: 'Homes built before 1940', value: '593 (4.1%)' },
      { label: 'Homes built from 1940 to 1969', value: '4,942 (34.2%)' },
      { label: 'Homes built since 2010', value: '1,578 (10.9%)' },
      { label: 'Detached single-family houses', value: '9,703 (67.2%)' },
      { label: 'Attached houses, such as townhomes', value: '1,622 (11.2%)' },
      { label: 'Homes in buildings of twenty or more units', value: '2,295 (15.9%)' },
      { label: 'Households that own their home', value: '11,604 (87.2%)' },
    ],
    takeaway:
      'A third of Northbrook’s housing (33.4 percent) was built between 1970 and 1989 and another 34.2 percent between 1940 and 1969, with the median home dating to 1976. Attached houses are 11.2 percent of homes and buildings of twenty or more units are 15.9 percent, so the village’s townhome and condominium associations are reaching the age when roofs, siding, windows and roads need replacing together.',
  },
  buildingTypes: [
    {
      name: 'Townhome communities',
      detail:
        'Communities with private drives, drainage areas, mature landscaping and shared exteriors that all need a seasonal vendor and a long-term plan.',
    },
    {
      name: 'Condominium associations',
      detail:
        'Buildings where the board wants comparable bids, documented approvals and progress reports on every large project.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Overlapping replacement cycles',
      body:
        'When roofs, siding and roads come due in the same few years, order matters. Turn the reserve study into a phased calendar, so owners see each project and its cost coming. Publish the calendar, so no owner is surprised by a crew at the door.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves and how to plan them',
    },
    {
      title: 'Bids a board can compare',
      body:
        'Large exterior projects need one written scope, one insurance standard and one bid form. Record why the board chose a contractor, and keep it with the minutes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for large projects',
    },
    {
      title: 'Borrowing for a road or roofing project',
      body:
        'If a project is financed, the lender studies assessment income and how the association is run. Clean books and current minutes help long before the application. Ask the lender early which documents it will need.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'what a lender wants before an association loan',
    },
    {
      title: 'The 2027 lender reserve test',
      body:
        'For condominium loan applications dated January 4, 2027 or later, Fannie Mae and Freddie Mac look for 15% of budgeted assessment income going to reserves, up from 10%. A project-heavy budget should be checked against it.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
      linkText: 'the 15% reserve rule that starts in 2027',
    },
    {
      title: 'Telling owners about a large budget change',
      body:
        'A year with a big project needs earlier notice and plainer words. Follow the same calendar every year, so the vote is never the first time owners hear the number.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'a budget adoption calendar for boards',
    },
  ],
  localItems: [
    {
      title: 'Multi-unit permit fees from July 1, 2026',
      body:
        'For multi-unit residential and non-residential projects, Northbrook now charges a flat $600 application fee plus 1.4 percent of construction cost up to $7,000,000 and 1.2 percent above that, on applications filed on or after July 1, 2026. A board should add that fee to the project budget before it asks owners to approve an assessment.',
    },
    {
      title: 'Which common-element projects need a permit',
      body:
        'The Village’s multi-unit permit list includes exterior alterations, additions, fences, site work such as grading and retaining walls, tree removal on private property, parking lot resurfacing and re-striping, generators, elevators and fire protection systems. Submit by email to the Development and Planning Services office.',
    },
    {
      title: 'Reassessment cycle',
      body:
        'Northbrook is on Cook County’s north suburban calendar, reassessed in 2022 and 2025. The next reassessment is 2028.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Northbrook townhome community from the public street; a private drive entrance (public view).
  photos: [],
  faqs: [
    {
      q: 'How should a Northbrook association pay for roofs, siding and roads?',
      a: 'Start with the reserve study and a phased calendar. Decide what reserves cover, what needs a special assessment or a loan, and show owners the plan before any vote.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'What makes contractor bids comparable?',
      a: 'One written scope, the same insurance requirements and the same bid form for every contractor. Without that, the lowest price may describe a smaller job.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Can an association borrow for a capital project?',
      a: 'Associations do borrow for large projects. Lenders underwrite on assessment income and governance quality, and a board can improve both before it applies.',
      post: 'condo-hoa-capital-project-loan-preparation',
    },
    {
      q: 'What does a Northbrook association pay the Village to permit a roof or siding project?',
      a: 'On applications filed from July 1, 2026, a $600 application fee plus 1.4 percent of construction cost up to $7,000,000 and 1.2 percent above. The board should confirm the permit type with the Village first.',
      post: 'condo-hoa-capital-project-loan-preparation',
    },
    {
      q: 'Does replacing the parking lot in a Northbrook townhome community need a permit?',
      a: 'Yes. The Village’s multi-unit permit list includes parking lot resurfacing and re-striping, and also fences, grading and tree removal on private property.',
      post: 'condo-special-assessments-illinois',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Northbrook community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Northbrook.pdf' },
    { label: 'Northbrook multi-unit residential or non-residential permits', href: 'https://www.northbrook.il.us/675/Multi-Unit-Residential-or-Non-Residentia' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
