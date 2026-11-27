import type { AreaContent } from './types';

export const deerfield: AreaContent = {
  slug: 'deerfield',
  targetQuery: 'condo management deerfield il',
  title: 'Condo Management in Deerfield, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Deerfield boards: 1,200 homes in large buildings and a Cook and Lake County split. Flat fee from $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Deerfield? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Deerfield is a family suburb on the Cook and Lake County line, with a walkable downtown. Most of its homes are single-family houses, with a group of townhome and condominium communities among them.',
  housing: {
    intro:
      'These numbers come from the Census Bureau’s 2020 to 2024 American Community Survey, summarized by the Chicago Metropolitan Agency for Planning, which compares Deerfield with Lake County. The village has about 7,500 occupied homes.',
    stats: [
      { label: 'Median year a Deerfield home was built', value: '1970' },
      { label: 'Homes built from 1940 through 1969', value: '3,686 (47.3%)' },
      { label: 'Homes built since 2010', value: '1,069 (13.7%)' },
      { label: 'Homes in buildings of twenty or more units', value: '1,223 (15.7%)' },
      { label: 'Homes in buildings of ten to nineteen units', value: '190 (2.4%)' },
      { label: 'Homes in buildings of three or four units', value: '189 (2.4%)' },
      { label: 'Attached single-family homes (townhomes)', value: '294 (3.8%)' },
      { label: 'Owner-occupied households', value: '82.5%' },
    ],
    takeaway:
      'Deerfield’s multi-unit stock is concentrated in large buildings. Buildings of twenty or more units hold 15.7 percent of homes, more than double the Lake County share of 7.5 percent, and 13.7 percent of homes were built since 2010. Older large buildings and newer communities sit side by side.',
  },
  buildingTypes: [
    {
      name: 'Mid-century large buildings',
      detail:
        'Buildings of twenty units or more, from a period when much of the village was built. Elevators, boilers and parking structures drive the budget.',
    },
    {
      name: 'Newer condominium and townhome communities',
      detail:
        'About 1,070 homes have been built since 2010. Boards in newer communities are working through developer turnover and first reserve studies.',
    },
    {
      name: 'Attached townhome associations',
      detail:
        'About 300 attached single-family homes, where the question of which Illinois statute applies decides how assessments and meetings work.',
    },
  ],
  issues: [
    {
      title: 'Elevator and life-safety schedules',
      body:
        'Buildings with elevators carry inspection and maintenance contracts. The village issues the semi-annual elevator inspection certificates, so the board should keep the dates on its calendar.',
      post: 'chicago-condo-association-compliance-calendar',
      linkText: 'a compliance calendar for condo associations',
    },
    {
      title: 'Turnover in newer communities',
      body:
        'When the developer hands over control, the board inherits records, warranties and a reserve account. A checklist keeps the transfer complete.',
      post: 'illinois-condo-developer-turnover-checklist',
      linkText: 'an Illinois condo developer turnover checklist',
    },
    {
      title: 'Choosing contractors who are registered',
      body:
        'The village requires contractors in several trades to register. Asking for the registration, the insurance certificate and a lien waiver is a basic step before a project begins.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for condo and HOA boards',
    },
    {
      title: 'Reserves that match the building age',
      body:
        'A building from the 1960s and a building from 2015 need different reserve contributions. A reserve study provides the schedule.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves under Illinois condo law',
    },
    {
      title: 'Annual meetings for large associations',
      body:
        'Notice, quorum and proxy rules apply to every association. Large buildings must plan the logistics, including virtual attendance.',
      post: 'electronic-voting-illinois-condo-hoa',
      linkText: 'electronic voting in Illinois condo and HOA associations',
    },
  ],
  localItems: [
    {
      title: 'Two counties, two property tax processes',
      body:
        'Deerfield straddles the Cook and Lake County line. A parcel in the Cook County part follows Cook County’s township reassessment calendar. A parcel in the Lake County part follows Lake County’s own assessment process. Check which county a building’s tax bill comes from before planning an appeal.',
    },
    {
      title: 'Elevator inspection certificates',
      body:
        'Deerfield’s Building and Code Enforcement Division issues semi-annual elevator inspection certificates and registers contractors in several trades. General, electrical, roofing, excavation and concrete contractors must post a $20,000 surety bond and pay a $100 fee to register.',
    },
    {
      title: 'Updated building codes',
      body:
        'The village’s Building Division said it expected to adopt the 2024 International codes, with the 2023 National Electrical Code, effective March 1, 2026. The village’s page says permit applications submitted after that date follow the new codes.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is Deerfield in Cook County or Lake County?',
      a: 'Both. The village straddles the county line, and a building’s property tax bill depends on which county its parcel is in.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Who issues elevator certificates in Deerfield?',
      a: 'The village’s Building and Code Enforcement Division issues semi-annual elevator inspection certificates.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'Why does Deerfield have so many large buildings?',
      a: 'Census data show that 15.7 percent of Deerfield’s homes are in buildings of twenty or more units, compared with 7.5 percent across Lake County.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'What counts as a reasonable reserve?',
      a: 'Illinois law asks associations to maintain reasonable reserves for anticipated replacements. A reserve study gives the number for a specific building.',
      post: 'how-to-read-condo-reserve-study',
    },
    {
      q: 'Do you quote small townhome communities?',
      a: 'Yes. We price from the community’s documents and budget, and the pricing page explains what is included in the fee.',
      post: 'self-managed-condo-association-problems',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Deerfield community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Deerfield.pdf' },
    { label: 'Deerfield Building and Code Enforcement Division', href: 'https://www.deerfield.il.us/160/Building-Code-Enforcement-Division' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
