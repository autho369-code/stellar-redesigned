import type { AreaContent } from './types';

export const desPlaines: AreaContent = {
  slug: 'des-plaines',
  targetQuery: 'condo management des plaines il',
  title: 'Condo Management in Des Plaines, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Des Plaines boards: rental licensing for investor-owned units, river floodplain rules, 1960s buildings. From $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Des Plaines sits along the Des Plaines River next to O’Hare, with a mix of 1960s mid-rise condominiums, garden-style complexes and townhomes. One in five homes is a condo, and the city’s rental licensing and floodplain rules touch many of them.',
  housing: {
    intro:
      'Figures are from the Census Bureau’s 2020 to 2024 American Community Survey as summarized by the Chicago Metropolitan Agency for Planning, plus DePaul’s Institute for Housing Studies for condo counts.',
    stats: [
      { label: 'Median year a Des Plaines home was built', value: '1966' },
      { label: 'Homes built before 1970', value: '58.6%' },
      { label: 'Homes in buildings of 20 or more units', value: '4,709 (19.7%)' },
      { label: 'Homes in buildings of 5 or more units', value: '6,666 (27.9%)' },
      { label: 'Share of housing that is condominium, 2025', value: '20.0%' },
      { label: 'Condominium sales in 2005 and in 2025', value: '660 and 217' },
      { label: 'Renter-occupied households', value: '21.7%' },
      { label: 'Homes built since 2010', value: '6.5%' },
    ],
    takeaway:
      'Recorded condo sales are down by about two thirds from 2005, and more than one in five households rents. With that much rental activity, the city’s licensing rules matter to boards and not just to landlords.',
  },
  buildingTypes: [
    {
      name: 'Larger condominium buildings',
      detail:
        'Nearly one home in five sits in a building of twenty or more units. These buildings have shared boilers, elevators, roofs and parking structures, and the board’s budget is dominated by systems installed when the building opened.',
    },
    {
      name: 'Garden-style and townhome associations',
      detail:
        'Attached ranch and townhome developments share roofs, siding, asphalt and detention areas. They look like single-family blocks but are managed like a building: one roof schedule, one paving plan, one snow contract.',
    },
    {
      name: 'Riverside and low-lying complexes',
      detail:
        'Properties near the Des Plaines River or its tributaries may fall in a mapped floodplain, which affects insurance, any addition to the site and how a board plans for water.',
    },
  ],
  issues: [
    {
      title: 'Investor ownership and rental licensing',
      body:
        'In Des Plaines a condo unit is licensed as a rental even if only one unit is rented, and the owner has to complete the city’s Crime Free Multi-Housing seminar before the license issues. Boards should keep a current list of rented units and know that the license belongs to the owner, not the association.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
      linkText: 'adopting and enforcing association rules',
    },
    {
      title: 'Leasing rules and fines',
      body:
        'City licensing does not replace a leasing rule in your declaration or rules. If you want a minimum lease term or a tenant move-in procedure, adopt it in the way your governing documents require, and fine only after notice and a hearing.',
      post: 'illinois-association-fines-notice-hearing',
      linkText: 'fines, notice and hearing requirements',
    },
    {
      title: 'Floodplain and river-adjacent sites',
      body:
        'Construction in the Des Plaines River floodway or floodplain needs a city development permit, and floodway work needs hydraulic analysis. A board that wants a new retaining wall, parking addition or detention repair near the river should start by asking the city for the flood-zone determination.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing a capital project and its financing',
    },
    {
      title: 'Sixty-year-old systems and the reserve fund',
      body:
        'With a median build year of 1966, plumbing stacks, flat roofs and parking decks are the items most likely to outrun a reserve account. A funding plan that spreads the cost over several years is easier on owners than a single special assessment.',
      post: 'condo-special-assessments-illinois',
      linkText: 'special assessments in Illinois condos',
    },
    {
      title: 'Collecting from absentee owners',
      body:
        'When a unit is a rental, the owner may live out of state and the tenant may not know the association exists. A written collection policy, sent to the owner’s address of record, keeps delinquency from drifting.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'the Illinois collection policy guide for associations',
    },
  ],
  localItems: [
    {
      title: 'Rental license',
      body:
        'A condominium counts as a multiple dwelling unit when more than one unit under common ownership in a single building is offered for rent. Licenses expire each December 31, and the city may inspect before issuing one. The published fees are $20 for a multi-family dwelling unit license and $50 for a single-family attached unit, which includes a condo or townhome.',
    },
    {
      title: 'Crime Free Multi-Housing',
      body:
        'Since 2009 the city has required rental owners to complete the Phase 1 Crime Free Multi-Housing seminar before getting a license. A manager hired by an owner has three months to attend. Completing all three certification levels earns a 10 percent license discount.',
    },
    {
      title: 'Floodplain development permit',
      body:
        'New construction in the Des Plaines River floodway or floodplain requires a development permit from Community and Economic Development, with Engineering determining the flood zone. Floodway work must not raise the base flood elevation.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Des Plaines is in the north and northwest suburban reassessment group. Cook County last reassessed it in 2025 and will reassess it again in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Do Des Plaines condo owners need a rental license?',
      a: 'Yes. The city’s code requires a license for any rented condominium unit, and the owner must complete the Phase 1 Crime Free Multi-Housing seminar first. The owner, not the association, holds the license.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'Can our association limit rentals in Des Plaines?',
      a: 'Only through your governing documents. City licensing sets a floor for every landlord, but a minimum lease term or a rental cap has to be adopted in the way your declaration and bylaws require.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'Is my Des Plaines building in a floodplain?',
      a: 'The city’s Engineering staff determine flood zones, and FEMA publishes the maps. If the building sits near the Des Plaines River, ask for a determination before you plan site work or shop for flood insurance.',
      post: 'condo-hoa-insurance-renewal-checklist',
    },
    {
      q: 'How old are the condominium buildings in Des Plaines?',
      a: 'The median home in Des Plaines was built in 1966, and almost six in ten homes predate 1970. Most boards are managing original roofs, plumbing and mechanical systems.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'What does a flat-fee proposal for a Des Plaines association include?',
      a: 'The scope is written down before you sign: who manages the building, what the board receives each month, how vendors are bid and how maintenance requests are handled. The pricing page explains how the fee is set.',
      post: 'score-condo-hoa-management-proposals',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Des Plaines community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Des-Plaines.pdf' },
    { label: 'Des Plaines housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/des-plaines/' },
    { label: 'Des Plaines code, chapter 17: residential properties used for rentals', href: 'https://codelibrary.amlegal.com/codes/desplainesil/latest/desplaines_il/0-0-0-2994' },
    { label: 'Des Plaines business registration and rental licenses', href: 'https://www.desplainesil.gov/Departments/Community-and-Economic-Development/Business-Registration-and-Licenses' },
    { label: 'Des Plaines floodplain construction', href: 'https://www.desplainesil.gov/access-your-government/city-departments/public-works-and-engineering/flood-information/floodplain-construction' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
