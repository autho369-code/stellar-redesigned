import type { AreaContent } from './types';

export const winnetka: AreaContent = {
  slug: 'winnetka',
  targetQuery: 'condo management winnetka il',
  title: 'Condo Management in Winnetka, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Winnetka boards: about 440 homes in multi-unit buildings, plus a village-owned electric and water utility. From $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Winnetka is a North Shore village with a walkable downtown and a lakefront. Condominiums are a small share of its homes.',
  housing: {
    intro:
      'The figures below are from the Census Bureau’s 2020 to 2024 American Community Survey, as summarized by the Chicago Metropolitan Agency for Planning. Winnetka has about 4,200 occupied homes.',
    stats: [
      { label: 'Median year a Winnetka home was built', value: '1942' },
      { label: 'Homes built before 1940', value: '2,216 (48.8%)' },
      { label: 'Homes built since 2010', value: '326 (7.2%)' },
      { label: 'Detached single-family houses', value: '88.5%' },
      { label: 'Homes in buildings of twenty or more units', value: '220 (4.8%)' },
      { label: 'Homes in buildings of five to nine units', value: '81 (1.8%)' },
      { label: 'Homes in buildings of three or four units', value: '75 (1.7%)' },
      { label: 'Owner-occupied households', value: '92.0%' },
    ],
    takeaway:
      'About 9 percent of Winnetka’s homes are in buildings of three or more units, split between a few larger buildings and a scattering of small ones. Nearly half of the village’s homes predate 1940, so even newer condominium communities sit among very old neighbors.',
  },
  buildingTypes: [
    {
      name: 'Larger buildings near the business districts',
      detail:
        'About 220 homes are in buildings of twenty units or more, which typically means elevators, garages and shared systems.',
    },
    {
      name: 'Small multi-unit buildings',
      detail:
        'Buildings of three to nine units hold about 156 homes. Boards here are small and owner-run.',
    },
    {
      name: 'Newer communities',
      detail:
        'Roughly 330 homes have been built since 2010, and their boards are working through reserve funding and the end of builder warranties.',
    },
  ],
  issues: [
    {
      title: 'Electric service questions',
      body:
        'Winnetka owns its electric utility, so an association with a capacity question, a meter question or an outage talks to the village’s Water and Electric Department. A board planning EV chargers should start there.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'an EV charging process for Illinois association boards',
    },
    {
      title: 'Utility costs in the budget',
      body:
        'Common-area electricity and water are billed by the village. The budget workbook compares each line to prior-year actuals.',
      post: 'condo-hoa-annual-budget-workbook',
      linkText: 'a condo annual budget workbook',
    },
    {
      title: 'Insuring older and newer buildings together',
      body:
        'A 1920s building and a 2018 building need different valuations and deductibles. A renewal checklist helps the board compare quotes.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo and HOA insurance renewal checklist',
    },
    {
      title: 'Reserves for large and small buildings',
      body:
        'Reserve contributions have to match building age and the real cost of replacing roofs, elevators and parking surfaces.',
      post: 'condo-reserve-funds-explained',
      linkText: 'condo reserve funds explained',
    },
    {
      title: 'Owner disputes in a close community',
      body:
        'Where neighbors know each other well, a written process for complaints and fines keeps enforcement fair and out of the board room.',
      post: 'illinois-association-fines-notice-hearing',
      linkText: 'fines, notice and hearings in Illinois associations',
    },
  ],
  localItems: [
    {
      title: 'Village-owned electric and water utility',
      body:
        'Winnetka’s Water and Electric Department operates both utilities and says the village generates electric power and serves all local residents and businesses, with supply contracts through the Illinois Municipal Electric Agency. The department has provided water since 1893 and electricity since 1900.',
    },
    {
      title: 'Boil orders and cross-connection surveys',
      body:
        'The department publishes a boil order FAQ and a cross-connection survey, which matter to a building whose irrigation or boiler systems connect to the water supply. Ask the department what applies to a given building.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Winnetka is in the New Trier township group. Cook County reassessed the north suburbs in 2025, and the next reassessment is 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Who provides electricity in Winnetka?',
      a: 'The Village of Winnetka. Its Water and Electric Department runs the electric utility, so billing and outage reports go through the village.',
      post: 'hoa-insurance-costs-illinois',
    },
    {
      q: 'Are most Winnetka condominiums new?',
      a: 'Not mostly. Nearly half of the village’s homes were built before 1940, and 326 homes (7.2 percent) were built since 2010.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'Can a board member’s relative bid on a building project?',
      a: 'Only with disclosure and a fair process. In a small village where neighbors know the contractors, the conflict-of-interest guide explains how boards document it.',
      post: 'illinois-condo-board-conflicts-of-interest',
    },
    {
      q: 'When is the next property reassessment in Winnetka?',
      a: 'Cook County’s next north suburban reassessment is 2028.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Does a small building need a manager?',
      a: 'Not always. We quote a small association from its documents, and the pricing page explains what the fee covers.',
      post: 'self-managed-condo-association-problems',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Winnetka community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Winnetka.pdf' },
    { label: 'Winnetka Water and Electric Department', href: 'https://www.villageofwinnetka.org/176/Water-Electric' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
