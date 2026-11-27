import type { AreaContent } from './types';

export const glencoe: AreaContent = {
  slug: 'glencoe',
  targetQuery: 'condo management glencoe il',
  title: 'Condo Management in Glencoe, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Glencoe boards: a small condo stock in a village with a $60 to $70 million stormwater plan. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Glencoe is a lakefront North Shore village known for its gardens and large lots. Condominiums are a small part of the housing mix.',
  housing: {
    intro:
      'The numbers below are from the Census Bureau’s 2020 to 2024 American Community Survey, compiled by the Chicago Metropolitan Agency for Planning. Glencoe has about 3,000 occupied homes.',
    stats: [
      { label: 'Median year a Glencoe home was built', value: '1955' },
      { label: 'Homes built before 1940', value: '1,171 (35.3%)' },
      { label: 'Homes built from 1990 through 2009', value: '615 (18.5%)' },
      { label: 'Homes built since 2010', value: '232 (7.0%)' },
      { label: 'Detached single-family houses', value: '91.2%' },
      { label: 'Homes in buildings of twenty or more units', value: '114 (3.4%)' },
      { label: 'Homes in buildings of ten to nineteen units', value: '54 (1.6%)' },
      { label: 'Owner-occupied households', value: '92.0%' },
    ],
    takeaway:
      'Only about 5 percent of Glencoe’s homes are in buildings of ten or more units, so most associations here are small and run by neighbors. The common issues are the ones every small board faces: records, insurance and keeping reserves in step with an aging building.',
  },
  buildingTypes: [
    {
      name: 'Condominium buildings near the village center',
      detail:
        'About 170 homes are in buildings of ten units or more. Their boards run common entrances, shared parking and, in some buildings, elevators.',
    },
    {
      name: 'Townhome and attached communities',
      detail:
        'Only 83 homes in the village are attached single-family homes, so these communities are small.',
    },
    {
      name: 'Two-unit and small multi-unit buildings',
      detail:
        'Forty homes are in buildings of two to four units. Informal arrangements work until a leak or a sale forces a decision.',
    },
  ],
  issues: [
    {
      title: 'Water in basements and garages',
      body:
        'The village’s stormwater plan notes recurring flooding, so an association with a lower level should plan for water. Sump pumps, backflow valves and flood coverage belong in the building’s insurance review.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo and HOA insurance renewal checklist',
    },
    {
      title: 'Who pays when water damages a unit',
      body:
        'An overland flood, a plumbing leak and a failed sump pump can each produce different answers under the declaration and the insurance policies.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'charging a deductible to an owner in Illinois',
    },
    {
      title: 'Open board meetings in a small community',
      body:
        'A neighbor-run board still gives notice and lets owners attend. The guide explains what must be public and what may be discussed in closed session.',
      post: 'illinois-condo-board-closed-session-guide',
      linkText: 'when an Illinois condo board can meet in closed session',
    },
    {
      title: 'Records requests from owners',
      body:
        'Owners in small buildings often ask for budgets, minutes and contracts. A board that keeps records organized can answer on time without a lawyer.',
      post: 'illinois-condo-association-records-request-guide',
      linkText: 'answering owner records requests',
    },
    {
      title: 'Long-term capital planning',
      body:
        'A building from the 1950s needs a schedule for roofs, windows and mechanical systems. A written plan helps avoid special assessments that surprise owners.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing an association for a capital project loan',
    },
  ],
  localItems: [
    {
      title: 'Glencoe Stormwater Master Plan',
      body:
        'The village says it continues to experience flooding because of aging infrastructure and more intense rainfall. Its stormwater master plan recommends about $60 to $70 million in projects and publishes an interactive flood map. The plan also suggests the village could set up a stormwater utility, which would charge by a property’s impervious area or land use.',
    },
    {
      title: 'Detention rules differ by property type',
      body:
        'The master plan notes that the village requires detention for residential sites but has no detention requirement on non-residential sites, which is inconsistent with the Metropolitan Water Reclamation District’s rules. A board planning a lot or drainage change should check with the village’s engineering staff.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Glencoe is in the New Trier township group, and Cook County reassessed the north suburbs in 2025. The next reassessment is 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is Glencoe at risk of flooding?',
      a: 'The village’s own stormwater master plan says it continues to experience flooding. The village publishes an interactive flood map, and FEMA’s Flood Map Service Center shows the federal flood zone for any address.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
    {
      q: 'Could a stormwater fee affect an association’s budget?',
      a: 'It might. The master plan recommends that the village consider a stormwater utility, which would charge by a property’s impervious area or land use. The plan describes it as an option the village could adopt by ordinance.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Are most Glencoe condos in large buildings?',
      a: 'No. Census data show only 114 homes in buildings of twenty or more units and 54 in buildings of ten to nineteen.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'When does the village reassess again?',
      a: 'Cook County’s next north suburban reassessment is in 2028.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Can a very small association use a management company?',
      a: 'Yes. Ask for a proposal and we will price the building as it is, and the pricing page lists what the monthly fee covers.',
      post: 'switch-condo-management-companies-chicago',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Glencoe community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Glencoe.pdf' },
    { label: 'Glencoe Stormwater Master Plan', href: 'https://glencoestormwater.org/stormwater-master-plan/' },
    { label: 'FEMA Flood Map Service Center', href: 'https://msc.fema.gov/portal/home' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
