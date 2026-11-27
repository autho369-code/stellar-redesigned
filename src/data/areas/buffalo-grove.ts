import type { AreaContent } from './types';

export const buffaloGrove: AreaContent = {
  slug: 'buffalo-grove',
  targetQuery: 'condo management buffalo grove il',
  title: 'Condo Management in Buffalo Grove, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Buffalo Grove boards: coach homes, village rental licensing, private stormwater basins, two counties. From $30 per unit.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Buffalo Grove? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Buffalo Grove spans the Cook and Lake County line and was built mostly in the 1970s and 1980s, with more than half of its homes in single-family subdivisions. The condominium, townhome and coach-home associations around them share a village with unusually active stormwater and rental programs.',
  housing: {
    intro:
      'The figures below are from the Census Bureau’s 2020 to 2024 American Community Survey, as summarized in the Chicago Metropolitan Agency for Planning’s Buffalo Grove snapshot.',
    stats: [
      { label: 'Median year a Buffalo Grove home was built', value: '1981' },
      { label: 'Homes built between 1970 and 1989', value: '9,752 (58.8%)' },
      { label: 'Attached single-family homes (townhomes, coach homes)', value: '2,253 (13.6%)' },
      { label: 'Homes in buildings of 3 to 9 units', value: '1,741 (10.5%)' },
      { label: 'Homes in buildings of 10 or more units', value: '3,495 (21.1%)' },
      { label: 'Detached single-family homes', value: '53.7%' },
      { label: 'Owner-occupied households', value: '79.8%' },
      { label: 'Renter-occupied households', value: '20.2%' },
    ],
    takeaway:
      'More than half of the housing here dates from a single 20-year window, so the same systems are aging in step across many associations. The village’s rental inspections and basin rules add recurring, dated obligations on top of that.',
  },
  buildingTypes: [
    {
      name: 'Coach-home and townhome associations',
      detail:
        'The village’s rental program lists coach homes, row homes and townhomes by name. These associations share roofs, siding, drives and landscape, and their budgets live or die on one reliable exterior schedule.',
    },
    {
      name: 'Mid-sized garden buildings',
      detail:
        'About 1,700 homes are in buildings of three to nine units. Small boards run on goodwill, which is exactly why written procedures matter.',
    },
    {
      name: 'Larger apartment-style condominium buildings',
      detail:
        'Roughly 3,500 homes are in buildings of ten or more units, with shared corridors, mechanical rooms and parking that need a long-range plan.',
    },
  ],
  issues: [
    {
      title: 'Detention basins you own',
      body:
        'The village counts more than 300 stormwater basins, and about 60 percent are privately owned. If your plat or deed puts a basin on the association, you must keep water moving through it. That means inspections, outlet clearing and a line in the reserve study.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'what Illinois means by reasonable reserves',
    },
    {
      title: 'Snow and ice on coach-home drives',
      body:
        'Buffalo Grove winters are long, and attached communities are judged by how fast the drives clear. Write the trigger depth, salt policy and visit log into the contract and price the season on a fixed schedule where you can.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'a snow and ice contract that holds up',
    },
    {
      title: 'Coordinating roofs and siding across many owners',
      body:
        'When most buildings went up in the same 20 years, roofs and siding age together. Bid the work as one coordinated project with a sealed-bid process rather than one repair at a time.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for associations',
    },
    {
      title: 'Cook or Lake: knowing which county rules apply',
      body:
        'Part of Buffalo Grove is in Cook County and part is in Lake County. That decides the assessor, the tax calendar and which county’s stormwater office has authority on a given parcel. Confirm it before you plan a tax appeal or a drainage project.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'appealing a Cook County property tax assessment',
    },
    {
      title: 'Budgets for a village with extra fees',
      body:
        'Rental license renewals, basin inspections and detention maintenance should be budget lines, not surprises. Adopt the budget and give owners the required notice.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'adopting an Illinois association budget',
    },
  ],
  localItems: [
    {
      title: 'Residential rental license',
      body:
        'Every rented condominium, coach home, townhome or single-family home in Buffalo Grove needs an annual license. The fee is $85, and the application and fee are due before January 1, with a late fee of $85 between January 1 and February 1 and $170 after that. The owner, not the association, applies.',
    },
    {
      title: 'Rental inspections',
      body:
        'A new license requires an initial inspection within 30 days of the application. Afterward inspections occur every other year if the last inspection found three or fewer violations, and every year if it found four or more. Owners must get tenant consent, and re-inspection fees run $50, $75 and then $125.',
    },
    {
      title: 'Stormwater ponds and basins',
      body:
        'Basin owners must ensure the free and uninterrupted flow of stormwater through their parcel. The village publishes an inspection checklist, and Lake County’s Stormwater Management Commission has offered workshops for associations that maintain detention ponds.',
    },
    {
      title: 'Tax calendar',
      body:
        'The Cook County portion of Buffalo Grove follows the county’s north and northwest suburban schedule: last reassessed in 2025 and next in 2028. The Lake County portion follows Lake County’s own assessment calendar.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Do Buffalo Grove condo owners need a rental license?',
      a: 'Yes. The village requires an annual license for any rented residential unit, including condominiums, coach homes and townhomes. The fee is $85 a year, with late fees after January 1.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'Who maintains a stormwater basin in Buffalo Grove?',
      a: 'The owner named in the plat, deed or easement does. For many subdivisions, that is the homeowners’ or condominium association. The village counts about 60 percent of its 300-plus basins as privately owned.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Is Buffalo Grove in Cook County or Lake County?',
      a: 'Both. The village’s municipal code names Cook and Lake Counties, and which county a property is in affects its assessor and tax calendar.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'How often are rental units inspected?',
      a: 'Every other year if the last inspection found three or fewer violations, and every year if it found four or more.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'What do coach-home associations usually need from a manager?',
      a: 'A single exterior calendar for roofs, siding and paving, competitive bids from vendors, and financial reports the board can read without a spreadsheet.',
      post: 'condo-hoa-annual-budget-workbook',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Buffalo Grove community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Buffalo-Grove.pdf' },
    { label: 'Buffalo Grove residential rental program', href: 'https://vbg.org/300/Residential-Rental' },
    { label: 'Buffalo Grove residential rental license application', href: 'https://www.vbg.org/DocumentCenter/View/248/Residential-Rental-License-Application-PDF' },
    { label: 'Buffalo Grove stormwater ponds and basins', href: 'https://www.vbg.org/580/Stormwater-Ponds-Basins' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
