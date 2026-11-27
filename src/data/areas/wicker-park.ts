import type { AreaContent } from './types';

export const wickerPark: AreaContent = {
  slug: 'wicker-park',
  targetQuery: 'condo management wicker park chicago',
  title: 'Condo Management in Wicker Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Wicker Park boards: Victorian conversions, lofts and new mid-rises near the landmark district. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Wicker Park centers on the Six Corners intersection and the 606 trail. Its blocks hold Victorian and workers’ cottage conversions, brick walk-ups, converted lofts and a steady supply of newer elevator buildings.',
  housing: {
    intro:
      'Wicker Park lies inside West Town, Community Area 24. The Census-based numbers below, compiled by the Chicago Metropolitan Agency for Planning, describe the whole community area, which also takes in Ukrainian Village and East Village.',
    stats: [
      { label: 'Median year a home was built', value: '1968' },
      { label: 'Homes built before 1940', value: '40.0%' },
      { label: 'Homes built from 1990 through 2009', value: '27.1%' },
      { label: 'Homes built since 2010', value: '13.3%' },
      { label: 'Homes in buildings of three or four units', value: '32.1%' },
      { label: 'Homes in buildings of five to nine units', value: '22.8%' },
      { label: 'Homes in buildings of twenty or more units', value: '13.9%' },
      { label: 'Households that own their home', value: '41.9%' },
    ],
    takeaway:
      'West Town’s median home is newer than the Chicago community-area median of 1953, because two waves of building arrived in the 1990s and the 2010s on top of a core of Victorian-era stock. A single board here may be managing a 1890s frame building or a 2015 tower, and the two need different reserve plans.',
  },
  buildingTypes: [
    {
      name: 'Victorian and cottage conversions',
      detail:
        'Small associations in frame or brick houses that were divided into condominiums. Foundations, porches and old roof framing set the capital calendar.',
    },
    {
      name: 'Loft and mill conversions',
      detail:
        'Large-floor-plate buildings with timber or concrete frames, shared mechanicals and owners who care about common-area finishes.',
    },
    {
      name: 'Newer mid-rise condominiums',
      detail:
        'Buildings from the past twenty years, where the original developer’s warranty is over and the first big roof, window and elevator bills are arriving.',
    },
  ],
  issues: [
    {
      title: 'Turnover from the developer',
      body:
        'Newer buildings change hands from developer to owners’ board. The first year goes better with a punch list, a records handoff and a reserve study done before the warranty clock runs out.',
      post: 'illinois-condo-developer-turnover-checklist',
      linkText: 'an Illinois condo developer turnover checklist',
    },
    {
      title: 'Annual budgets that keep pace with costs',
      body:
        'Insurance, snow and elevator contracts rise faster than assessments in many Wicker Park buildings. A workbook that compares each line to last year’s actuals shows where the budget will break before it does.',
      post: 'condo-hoa-annual-budget-workbook',
      linkText: 'a condo annual budget workbook',
    },
    {
      title: 'Appealing the assessment on time',
      body:
        'A reassessment can move a building’s bill in either direction. A board that tracks the Assessor’s calendar can file for the common areas on time, and individual owners can file their own appeals.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'a Cook County property tax appeal for a condo association',
    },
    {
      title: 'Choosing vendors by the same scope',
      body:
        'A written request for proposals with identical scope makes bids comparable and keeps one board member from being the only person who knows the contractor.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for condo and HOA boards',
    },
    {
      title: 'Charging stations in older garages',
      body:
        'Owners with electric cars ask first about outlets in shared parking. A written request process settles who pays, who owns the equipment and what happens at resale.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'an EV charging process for Illinois association boards',
    },
  ],
  localItems: [
    {
      title: 'Wicker Park Landmark District',
      body:
        'The City designated the Wicker Park district on April 12, 1991. Building permits for exterior work inside it are routed to the City’s historic preservation staff for review before they issue.',
    },
    {
      title: 'Private haulers for five-unit buildings and up',
      body:
        'Chicago’s city crews collect from buildings of four units or fewer. A five-unit building or larger has to hire a private hauler under Municipal Code 7-28-240.',
    },
    {
      title: 'Next citywide reassessment',
      body:
        'The City of Chicago townships were reassessed in 2024 and are scheduled again for 2027. Assessment appeals open on a township-by-township calendar published by the Assessor.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does Wicker Park have a historic district?',
      a: 'Yes. The Wicker Park Landmark District was designated in 1991. If a building is inside it, exterior permits go through historic preservation review.',
      post: 'condo-repairs-owner-vs-association-illinois',
    },
    {
      q: 'Why does West Town have so many mid-size buildings?',
      a: 'The Census shows that about 23 percent of homes are in buildings of five to nine units, and 32 percent in buildings of three or four. The rest is split between larger buildings and single-family houses.',
      post: 'condo-reserve-funds-explained',
    },
    {
      q: 'Can an association with only a few units get a management proposal?',
      a: 'Yes. Ask for a proposal and we will quote the building in front of us. The pricing page explains what the fee covers.',
      post: 'switch-condo-management-companies-chicago',
    },
    {
      q: 'When is the next Cook County reassessment for Wicker Park?',
      a: 'The City of Chicago was reassessed in 2024, and the next reassessment is scheduled for 2027.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Who is responsible when a leak starts in a neighboring unit?',
      a: 'It depends on the declaration and on where the pipe sits. The guide explains how Illinois courts and most declarations divide the cost.',
      post: 'who-pays-condo-water-leak-illinois',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'West Town community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/West-Town.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
