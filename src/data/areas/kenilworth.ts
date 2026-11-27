import type { AreaContent } from './types';

export const kenilworth: AreaContent = {
  slug: 'kenilworth',
  targetQuery: 'condo management kenilworth il',
  title: 'Condo Management in Kenilworth, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Kenilworth boards: a village of 762 homes where multi-unit buildings are rare. Flat fee from $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Kenilworth? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Kenilworth is a small lakefront village on the North Shore, built almost entirely with single-family houses. Its multi-unit stock is tiny, so a condominium board here is a rare case.',
  housing: {
    intro:
      'Figures are from the Census Bureau’s 2020 to 2024 American Community Survey, compiled by the Chicago Metropolitan Agency for Planning. The estimates have wide margins for such a small village.',
    stats: [
      { label: 'Occupied homes in the village', value: '762' },
      { label: 'Median year a Kenilworth home was built', value: '1938' },
      { label: 'Homes built before 1940', value: '493 (61.2%)' },
      { label: 'Detached single-family houses', value: '95.9%' },
      { label: 'Homes in buildings of five to nine units', value: '11 (1.4%)' },
      { label: 'Homes in buildings of twenty or more units', value: '3 (0.4%)' },
      { label: 'Attached single-family homes', value: '16 (2.0%)' },
      { label: 'Owner-occupied households', value: '97.5%' },
    ],
    takeaway:
      'The honest summary is that Kenilworth has very few condominium associations. Only about 20 homes are in buildings of two or more units, and almost all of the village is single-family. A condominium board here is a very small association that needs careful records and a manager who understands the village’s review process.',
  },
  buildingTypes: [
    {
      name: 'Very small condominium buildings',
      detail:
        'Census estimates show 3 homes in two-unit buildings and 11 in buildings of five to nine units. A board here is often two or three owners who share a policy and a roof.',
    },
    {
      name: 'Attached homes',
      detail:
        'Census estimates show 16 attached single-family homes in the whole village. Where homes share a wall, the declaration and the village’s review rules both matter.',
    },
    {
      name: 'Units above commercial space',
      detail:
        'The village’s zoning code allows multiple-family dwellings above the ground floor in its business district, which is the setting where an apartment above a shop would be allowed.',
    },
  ],
  issues: [
    {
      title: 'Exterior work in a design-reviewed village',
      body:
        'The village routes some projects through an Architectural Review Commission and a Building Review Commission. A board should confirm what needs approval before a contractor bids on roofs, windows or masonry.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for condo and HOA boards',
    },
    {
      title: 'Insurance and valuation for high-value buildings',
      body:
        'The renewal checklist covers replacement-cost valuation, limits and deductibles. A policy should be reviewed against what it would cost to rebuild the building as it stands.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo and HOA insurance renewal checklist',
    },
    {
      title: 'Keeping the declaration current',
      body:
        'A declaration from decades ago may say little about leasing, parking or alterations. The statute provides a defined vote to amend it.',
      post: 'amend-illinois-condo-declaration-section-27',
      linkText: 'how to amend an Illinois condominium declaration',
    },
    {
      title: 'Records for a two-person board',
      body:
        'Even a board of two keeps minutes, a ledger and contracts. An organized file makes a sale or refinancing quick.',
      post: 'illinois-22-1-disclosure-packet-checklist',
      linkText: 'a Section 22.1 disclosure packet checklist',
    },
    {
      title: 'When a unit owner leaves the board',
      body:
        'A small association can lose its only organized member when one person moves. A written handoff keeps the association running through the change.',
      post: 'new-condo-board-member-first-30-days',
      linkText: 'the first thirty days for a new condo board member',
    },
  ],
  localItems: [
    {
      title: 'Building and planning permits',
      body:
        'The village publishes permit packets for work such as decks, porches, elevators and wheelchair lifts, sewer and water service, roofs, windows and doors, and solar panels. Roof, tent, driveway and water heater permits are available as express permits issued within 48 hours of a complete application.',
    },
    {
      title: 'Commission review',
      body:
        'A Certificate of Appropriateness comes from the Architectural Review Commission, and a demolition application goes to the Building Review Commission. The village said a zoning code update was expected to be complete in the first quarter of 2026, so diagrams on its site may change.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Kenilworth is in the New Trier township group. The north suburbs were reassessed in 2025, and the next reassessment is 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does Kenilworth have condominium associations?',
      a: 'A very small number. Census estimates show about 14 homes in buildings of five or more units, out of 762 occupied homes in the whole village. The estimates have a wide margin for so small a place.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'How fast can a roof permit be issued?',
      a: 'The village lists roof permits among its express permits, issued within 48 hours of a complete application.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Who can I call about a building project in Kenilworth?',
      a: 'The village’s Building and Planning Division at 419 Richmond Road, which encourages pre-application meetings for major projects.',
      post: 'condo-repairs-owner-vs-association-illinois',
    },
    {
      q: 'Can two owners be a board?',
      a: 'Yes. Even a two-unit condominium has a declaration and statutory duties. The records guide explains what the association must keep.',
      post: 'illinois-condo-association-records-request-guide',
    },
    {
      q: 'Will you manage a very small association?',
      a: 'We will quote it. A proposal starts with the declaration and the budget, and the pricing page explains what the fee includes.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Kenilworth community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Kenilworth.pdf' },
    { label: 'Kenilworth permit and entitlement applications', href: 'https://www.vok.org/2442/Permit-and-Entitlement-Applications' },
    { label: 'Kenilworth Code of Ordinances, zoning chapter', href: 'https://codelibrary.amlegal.com/codes/kenilworth/latest/kenilworth_il/0-0-0-5616' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
