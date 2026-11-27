import type { AreaContent } from './types';

export const northfield: AreaContent = {
  slug: 'northfield',
  targetQuery: 'condo management northfield il',
  title: 'Condo Management in Northfield, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Northfield boards: a small village with two flood basins, low-rise condos and owner-occupied streets. From $30 per unit.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Northfield? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Northfield is a small Cook County village of about 2,300 households, nearly all of them owner-occupied. Its multi-unit housing is a small share of the total and mostly low-rise, in a village that flags two flood-hazard basins.',
  housing: {
    intro:
      'These figures are from the Census Bureau’s 2020 to 2024 American Community Survey, as summarized by the Chicago Metropolitan Agency for Planning, and from DePaul’s Institute for Housing Studies.',
    stats: [
      { label: 'Occupied homes in Northfield', value: '2,302' },
      { label: 'Median year a Northfield home was built', value: '1971' },
      { label: 'Owner-occupied households', value: '91.8%' },
      { label: 'Homes in buildings of 5 to 9 units', value: '200 (8.1%)' },
      { label: 'Homes in buildings of 20 or more units', value: '128 (5.2%)' },
      { label: 'Attached single-family homes', value: '196 (8.0%)' },
      { label: 'Share of housing that is condominium, 2025', value: '21.4%' },
      { label: 'Condominium sales in 2025', value: '31' },
    ],
    takeaway:
      'With only a few hundred homes in multi-unit buildings and about 30 condo sales a year, Northfield associations are small enough that one engaged board member changes the outcome. Their weak points are succession, written records and flood exposure.',
  },
  buildingTypes: [
    {
      name: 'Low-rise condominium buildings',
      detail:
        'Buildings of five to nine units are the most common multi-unit type, with a smaller group of larger buildings. The median home here dates from 1971, so windows, roofs and mechanical equipment are coming due.',
    },
    {
      name: 'Attached townhome communities',
      detail:
        'About 200 attached homes share walls, roofs and landscaping. A single reserve plan and a single exterior contractor keep these groups consistent.',
    },
    {
      name: 'Associations on or near flood-mapped land',
      detail:
        'The village identifies two basins as its most problematic flood-hazard areas, so insurance, grading and sewer backup deserve more attention here than in most suburbs.',
    },
  ],
  issues: [
    {
      title: 'Insurance that fits a flood-prone village',
      body:
        'Standard master policies do not cover overland flooding. Boards on or near mapped floodplain should confirm what the master policy covers, what owners need separately, and whether a separate flood policy on the building makes sense.',
      post: 'condo-master-policy-vs-ho6-board-guide',
      linkText: 'master policy versus owner HO-6 coverage',
    },
    {
      title: 'Who pays when water gets in',
      body:
        'Sewer backup, a failed sump pump and a leak from the unit above all look the same on the carpet. Decide in advance who handles each, using the declaration and the master policy’s endorsements.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for condo water leaks in Illinois',
    },
    {
      title: 'Flood and emergency plans',
      body:
        'The village says owners are responsible for sandbagging, pumping and shutting off electricity on their own property. A board should set out who does what, who holds keys and how owners are told.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'an emergency planning checklist for associations',
    },
    {
      title: 'Insurance deductibles passed to owners',
      body:
        'A large master-policy deductible can land on a single owner after a unit-level loss. Know what your documents allow before a claim.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'charging an insurance deductible to an owner',
    },
    {
      title: 'Reserves for a building that has to be ready',
      body:
        'Roofs and drainage in a wet village cannot wait until the budget is comfortable. A reserve study tells the board how much to set aside each year.',
      post: 'how-to-read-condo-reserve-study',
      linkText: 'how to read a condo reserve study',
    },
  ],
  localItems: [
    {
      title: 'Two flood basins',
      body:
        'The village says the middle fork of the North Branch of the Chicago River basin and the Skokie River basin are its two most problematic flood-hazard areas, with flooding typically in spring or fall. It publishes a floodplain map.',
    },
    {
      title: 'Flood insurance discount',
      body:
        'Northfield participates in FEMA’s Community Rating System, which gives residents a 15 percent discount on new or renewed National Flood Insurance Program overland-flood policies. The village keeps elevation certificates for many structures near the floodplain.',
    },
    {
      title: 'Sewer backflow reimbursement',
      body:
        'The Village Board approved a cost-sharing program for overhead sanitary sewers or backflow-prevention valves in vaults. Ask the Village Engineer, at 847-821-6271, whether your building qualifies.',
    },
    {
      title: 'Building permits and stormwater detention',
      body:
        'The village requires building permits for new construction and for work such as driveways, patios, sidewalks and decks. Projects adding 1,000 square feet or more of impervious surface need stormwater detention.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Northfield is in the north and northwest suburban reassessment group. The county last reassessed it in 2025 and will reassess again in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is Northfield prone to flooding?',
      a: 'Parts of it are. The village names the Skokie River basin and the middle fork of the North Branch of the Chicago River basin as its two most problematic flood-hazard areas, and it publishes floodplain maps.',
      post: 'condo-hoa-insurance-renewal-checklist',
    },
    {
      q: 'Does Northfield offer a flood insurance discount?',
      a: 'Yes. Because the village participates in FEMA’s Community Rating System, eligible residents get a 15 percent discount on new or renewed overland-flood policies.',
      post: 'hoa-insurance-costs-illinois',
    },
    {
      q: 'How many condominiums does Northfield have?',
      a: 'DePaul’s housing data put condominiums at about 21 percent of Northfield’s housing in 2025, and Census data count about 2,300 occupied homes in the village overall.',
      post: 'how-many-associations-should-community-manager-handle',
    },
    {
      q: 'Can a small association hire a manager?',
      a: 'Yes. A proposal is written for the building after we review it, and the pricing page explains how the fee is set.',
      post: 'score-condo-hoa-management-proposals',
    },
    {
      q: 'When is the next Cook County reassessment for Northfield?',
      a: 'The county last reassessed Northfield in 2025 and is scheduled to do so again in 2028.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Northfield community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Northfield.pdf' },
    { label: 'Northfield housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/northfield/' },
    { label: 'Northfield stormwater management', href: 'https://northfieldil.org/190/Stormwater-Management' },
    { label: 'Northfield building and development', href: 'https://northfieldil.org/175/Building-Development' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
