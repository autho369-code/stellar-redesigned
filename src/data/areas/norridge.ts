import type { AreaContent } from './types';

export const norridge: AreaContent = {
  slug: 'norridge',
  targetQuery: 'condo management norridge il',
  title: 'Condo Management in Norridge, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Norridge boards: 800 homes in large buildings and a village rental license that reaches condos. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Norridge is a small village on Chicago’s northwest edge, surrounded by city neighborhoods and centered on Harlem Avenue. Its housing is mostly single-family homes from the 1950s and 1960s, with a group of larger multi-unit buildings.',
  housing: {
    intro:
      'The figures below are from the Census Bureau’s 2020 to 2024 American Community Survey, compiled by the Chicago Metropolitan Agency for Planning. The village has about 5,800 occupied homes.',
    stats: [
      { label: 'Median year a Norridge home was built', value: '1962' },
      { label: 'Homes built from 1940 through 1969', value: '3,724 (62.0%)' },
      { label: 'Homes in buildings of twenty or more units', value: '806 (13.4%)' },
      { label: 'Homes in buildings of five to nine units', value: '328 (5.5%)' },
      { label: 'Homes in two-unit buildings', value: '247 (4.1%)' },
      { label: 'Homes in buildings of ten to nineteen units', value: '91 (1.5%)' },
      { label: 'Detached single-family houses', value: '72.6%' },
      { label: 'Owner-occupied households', value: '82.4%' },
    ],
    takeaway:
      'Norridge is a village of owners, with more than four homes in five owner-occupied. Its multi-unit stock is concentrated in two groups: about 800 homes in large buildings and about 400 in buildings of five to nineteen units. Associations can use that stability to build steady records and reserves.',
  },
  buildingTypes: [
    {
      name: 'Larger buildings of twenty units or more',
      detail:
        'About 13 percent of homes. Elevators, boilers and parking areas typically make these the village’s largest associations by budget.',
    },
    {
      name: 'Garden buildings of five to nineteen units',
      detail:
        'About 420 homes sit in buildings of five to nineteen units, usually with a shared lot and common roof systems.',
    },
    {
      name: 'Two-flats',
      detail:
        'About 250 homes are in two-unit buildings. A two-owner association still needs a bank account, insurance and a way to decide.',
    },
  ],
  issues: [
    {
      title: 'Licensing a rented unit',
      body:
        'The village’s rental license covers condominium units, and the application asks for the association and any manager. Boards benefit from knowing which owners rent, so the roster matches the village’s.',
      post: 'renting-out-your-condo-chicago-rules',
      linkText: 'the rules for renting out a condo',
    },
    {
      title: 'Preparing common areas for inspection',
      body:
        'A village inspection tied to a rental license can cover common areas such as hallways, stairs, laundry rooms and parking. A board that walks the property every quarter finds problems before the inspector does.',
      post: 'new-condo-board-member-first-30-days',
      linkText: 'the first thirty days for a new condo board member',
    },
    {
      title: 'Budgeting for older systems',
      body:
        'With a median build year of 1962, boilers, roofs and lot surfaces are due for replacement. A line-by-line workbook shows the gap between contributions and costs.',
      post: 'condo-hoa-annual-budget-workbook',
      linkText: 'a condo annual budget workbook',
    },
    {
      title: 'Collecting from owner-landlords',
      body:
        'An owner who rents the unit still owes the assessment. A written policy and a prompt first notice keep the account from drifting.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'a collection policy for Illinois associations',
    },
    {
      title: 'Vendor decisions with a small board',
      body:
        'A standard scope for every bid helps the board compare snow, landscaping and roofing proposals without relying on one member’s memory.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for condo and HOA boards',
    },
  ],
  localItems: [
    {
      title: 'Residential Rental Dwelling Unit License',
      body:
        'Norridge enacted its rental licensing code in Ordinance 2140-24, covering residential rentals of all types, including condominium units. A license is annual, a unit is inspected at least once every three years if violations are few, and the owner of a condominium unit lists the association’s name and contact information and its manager on the application. Where an association controls the common areas, the common areas can be part of the inspection.',
    },
    {
      title: 'Fees and penalties',
      body:
        'The ordinance’s fee schedule lists annual license fees by number of units and penalties that run per day for operating a rental without a license. Check the current schedule in the village code before an owner rents.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Norridge is in the Norwood Park township group. Cook County’s north suburban reassessment was 2025, and the next is 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is a Norridge condo owner responsible for the rental license, or the association?',
      a: 'The owner applies, but the application lists the association and its manager. The ordinance defines an owner to include the association where it controls the common areas.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'How often does the village inspect a rental?',
      a: 'At least once every three years when a unit has few violations, according to the ordinance. More violations mean more frequent inspections.',
      post: 'common-condo-rule-violations-chicago',
    },
    {
      q: 'Why is Norridge on the north suburban reassessment schedule?',
      a: 'Cook County reassesses by township. Norridge is in the Norwood Park group, which was reassessed in 2025.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Does Norridge have many high-rise condominiums?',
      a: 'Census data show 806 homes in buildings of twenty or more units. The count covers both condominiums and rental buildings.',
      post: 'condo-reserve-funds-explained',
    },
    {
      q: 'How do we start a management search?',
      a: 'List what you want covered, collect two or three proposals and score them against the same criteria. The guide has a scoring sheet.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Norridge community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Norridge.pdf' },
    { label: 'Norridge Ordinance 2140-24, Rental Property Licensing Code', href: 'https://library.municode.com/il/norridge/ordinances/code_of_ordinances?nodeId=1335757' },
    { label: 'Norridge Code of Ordinances', href: 'https://library.municode.com/IL/norridge' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
