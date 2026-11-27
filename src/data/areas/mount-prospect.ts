import type { AreaContent } from './types';

export const mountProspect: AreaContent = {
  slug: 'mount-prospect',
  targetQuery: 'condo management mount prospect il',
  title: 'Condo Management in Mount Prospect, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Mount Prospect boards: village rental inspections, Weller Creek drainage and aging garden buildings. Flat fee from $30/unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Mount Prospect has one of the largest shares of multi-family housing in the northwest suburbs: more than a third of its homes are in buildings of five or more units. Nearly a third of households rent, and the village inspects multi-family buildings on a set cycle.',
  housing: {
    intro:
      'Figures are from the Census Bureau’s 2020 to 2024 American Community Survey as summarized by the Chicago Metropolitan Agency for Planning, and from DePaul’s Institute for Housing Studies for condominium shares and sales.',
    stats: [
      { label: 'Median year a Mount Prospect home was built', value: '1969' },
      { label: 'Homes in buildings of 5 to 9 units', value: '2,133 (9.5%)' },
      { label: 'Homes in buildings of 10 to 19 units', value: '1,913 (8.5%)' },
      { label: 'Homes in buildings of 20 or more units', value: '3,925 (17.4%)' },
      { label: 'Share of housing that is condominium, 2025', value: '18.9%' },
      { label: 'Homes built before 1970', value: '51.5%' },
      { label: 'Renter-occupied households', value: '31.3%' },
      { label: 'Condominium sales in 2025', value: '187' },
    ],
    takeaway:
      'Mount Prospect has far more mid-sized buildings than most suburbs. Buildings of five to nineteen units are often too small for a full-time staff and too complex to run from a kitchen table, which is where a board’s time gets used up.',
  },
  buildingTypes: [
    {
      name: 'Mid-sized garden and courtyard buildings',
      detail:
        'About 4,000 homes sit in buildings of five to nineteen units. Expect shared hallways, a boiler or a handful of rooftop units, flat roofs and a parking lot that is the biggest paving line in the budget.',
    },
    {
      name: 'Larger mid-rise condominiums',
      detail:
        'Nearly 4,000 homes are in buildings of twenty or more units. Elevators, life-safety systems and garage structures dominate the long-range plan, and insurance renewals carry more weight.',
    },
    {
      name: 'Townhome and attached communities',
      detail:
        'Attached homes are a smaller group here than in Palatine or Schaumburg, so a townhome association in Mount Prospect is often a stand-alone block with its own drive, roofs and landscaping contract.',
    },
  ],
  issues: [
    {
      title: 'Insurance renewals on older multi-unit buildings',
      body:
        'A building of 1960s garden units and flat roofs looks different to an underwriter than a newer one. Start the renewal conversation early, compare deductible levels and make sure the master policy and owners’ HO-6 policies fit together.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo insurance renewal checklist',
    },
    {
      title: 'Choosing between management proposals',
      body:
        'With so many mid-sized buildings, Mount Prospect boards often weigh several proposals that are priced differently. A scorecard that compares scope, fees, reporting and exit terms keeps the decision from turning on the lowest line.',
      post: 'score-condo-hoa-management-proposals',
      linkText: 'scoring condo and HOA management proposals',
    },
    {
      title: 'Budgets that include the parking lot',
      body:
        'In garden-style buildings the asphalt, the roofs and the boiler are often the three largest future costs. Adopt the annual budget on the statutory timeline and show owners the reserve contribution as its own line.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'adopting an Illinois association budget',
    },
    {
      title: 'Repair responsibility between owners and the association',
      body:
        'In older buildings, a failed supply line, a window or a balcony door can sit on the boundary between unit and common element. The declaration decides, so a board should have a one-page chart before the argument starts.',
      post: 'condo-repairs-owner-vs-association-illinois',
      linkText: 'who repairs what in an Illinois condo',
    },
    {
      title: 'A high renter share and the rules that go with it',
      body:
        'With nearly one household in three renting, move-in rules, parking assignments and noise complaints show up more often. Written rules that apply to every owner and tenant evenly are easier to enforce.',
      post: 'common-condo-rule-violations-chicago',
      linkText: 'common condo rule violations and how boards handle them',
    },
  ],
  localItems: [
    {
      title: 'Multi-family rental license',
      body:
        'A building of three or more dwelling units with at least half rented is a multi-family rental structure under the village code. Condominium and townhouse associations are exempt from the licensing article, but individual owners who rent are not.',
    },
    {
      title: 'Annual common-area inspections',
      body:
        'The village code calls for annual inspections of multi-family rental buildings, and the Metropolitan Mayors Caucus describes exterior and common-space inspections every year with individual units on a five-year rotation. The checklist covers hallways, stairs, lobbies, utility and storage rooms, grounds, parking and refuse areas, with a typical 30-day window to fix a violation.',
    },
    {
      title: 'Weller Creek and Crumley Basin',
      body:
        'The village’s infrastructure page lists a Weller Creek bank-stabilization study and a Crumley Basin rehabilitation planned for spring 2027. Associations near those corridors should watch the public notices.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Mount Prospect is in the north and northwest suburban group. The county last reassessed in 2025 and will do so again in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does Mount Prospect license condominium associations as rentals?',
      a: 'The village code exempts condominium and townhouse associations from its rental-license article, but individual owners who rent their units may need a license. Ask village staff how it applies to your building.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'What does the village inspect in a multi-family building?',
      a: 'Common areas: hallways, stairs, lobbies, utility, laundry and storage rooms, grounds, parking and refuse areas. Inspections of the exterior and common spaces are annual, and units are inspected on a five-year rotation.',
      post: 'condo-repairs-owner-vs-association-illinois',
    },
    {
      q: 'How big are typical Mount Prospect condo buildings?',
      a: 'Census data show about 4,000 homes in buildings of five to nineteen units and about 3,900 in buildings of twenty or more, so mid-sized buildings are common.',
      post: 'how-many-associations-should-community-manager-handle',
    },
    {
      q: 'Where does Mount Prospect have drainage trouble?',
      a: 'The village’s stormwater work centers on the Weller Creek corridor and the Feehanville drainage area. Ask the public works department whether your property sits in either.',
      post: 'who-pays-condo-water-leak-illinois',
    },
    {
      q: 'When does Cook County next reassess Mount Prospect?',
      a: 'The next reassessment of Mount Prospect is scheduled for 2028, after the most recent one in 2025.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Mount Prospect community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Mount-Prospect.pdf' },
    { label: 'Mount Prospect housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/mount-prospect/' },
    { label: 'Mount Prospect rental housing and licensing', href: 'https://www.mountprospect.org/business/rental_housing_and_licensing.php' },
    { label: 'Mount Prospect code, Article XVIII: residential landlord and tenant regulations', href: 'https://codelibrary.amlegal.com/codes/mtprospectl/latest/mtprospect_il/0-0-0-15950' },
    { label: 'Mount Prospect rental license and inspection program (Metropolitan Mayors Caucus)', href: 'https://mayorscaucus.org/rental-license-and-inspection-program-mount-prospect/' },
    { label: 'Mount Prospect infrastructure projects', href: 'https://www.mountprospect.org/community/infrastructure_projects.php' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
