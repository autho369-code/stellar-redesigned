import type { AreaContent } from './types';

export const streeterville: AreaContent = {
  slug: 'streeterville',
  targetQuery: 'condo management streeterville chicago',
  title: 'Condo Management in Streeterville, Chicago | From $30/Unit',
  metaDescription:
    'Condo management for Streeterville boards: high-rise staff and systems, life safety, facade cycles and mixed-use towers. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Streeterville is a lakefront neighborhood of high-rises next to the Magnificent Mile and Northwestern’s downtown campus. Towers here often have hundreds of units, engineers, door staff and several elevators, and some stack residences above hotels, retail and parking.',
  housing: {
    intro:
      'Streeterville does not have a community area of its own. It lies in the Near North Side, Community Area 8. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning for the whole Near North Side, which also includes River North, Old Town and the Gold Coast.',
    stats: [
      { label: 'Median year the housing stock was built', value: '1989' },
      { label: 'Pre-1940 construction', value: '9,681 (12.5%)' },
      { label: '1990 to 2009 construction', value: '24,141 (31.1%)' },
      { label: 'Construction since 2010', value: '13,560 (17.5%)' },
      { label: 'Buildings of ten to nineteen units', value: '1,707 (2.2%)' },
      { label: 'Buildings of twenty or more units', value: '69,343 (89.4%)' },
      { label: 'Renter households', value: '44,142 (63.5%)' },
      { label: 'Owner households', value: '25,410 (36.5%)' },
    ],
    takeaway:
      'In the Near North Side, 89.4 percent of homes (69,343) are in buildings of twenty or more units, 63.5 percent of households rent, and the median home dates to 1989. About 31 percent of homes went up between 1990 and 2009 and 17.5 percent since 2010, so the area’s towers are far newer than the city’s typical building. Streeterville’s lakefront towers sit inside that profile, with large staffs, several elevators and, in some buildings, hotels, retail and parking under the same roof.',
  },
  buildingTypes: [
    {
      name: 'Large residential towers',
      detail:
        'Buildings with on-site staff and building systems that run around the clock. Reporting and staffing have to match that scale. A change of shift should never be the reason a problem is missed.',
    },
    {
      name: 'Mixed-use towers near Michigan Avenue',
      detail:
        'Residences above hotels, shops and parking, where shared-facility agreements divide the costs. Review those agreements whenever a commercial neighbor changes.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Life-safety planning',
      body:
        'What applies to a tower depends on its height, age, construction and existing systems. Start from a written, building-specific statement by a fire-protection engineer or life-safety consultant, and report progress to owners. Door staff and engineers should each know their part of the plan.',
      post: 'chicago-condo-life-safety-board-planning',
      linkText: 'life-safety planning for a Chicago high-rise board',
    },
    {
      title: 'The exterior wall cycle',
      body:
        'Buildings 80 feet or taller are in the City of Chicago exterior wall program. Put the examination and filing dates on the board calendar, and fund the repairs over several years. Scaffolding and sidewalk canopies affect residents and neighbors, so tell them early.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'keeping a tower on its facade schedule',
    },
    {
      title: 'Contracts at tower scale',
      body:
        'Elevator, mechanical and staffing contracts are large enough to deserve a formal request for proposals. One scope and one insurance standard let the board compare the bids fairly. Ask each bidder how it will staff a building that never closes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'running a formal vendor RFP',
    },
    {
      title: 'A budget hundreds of owners will read',
      body:
        'In a large tower the budget notice reaches hundreds of households. Keep to a fixed calendar and explain every change in plain words before the board votes. A one-page summary on top of the full budget helps owners who will not read the detail.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'how a large association adopts its budget',
    },
    {
      title: 'Resale packets at volume',
      body:
        'A tower sees many resales a year. Section 22.1 of the Illinois Condominium Property Act governs what the association provides, so the packet should be ready before the request arrives. Track how long each packet takes, and fix the slowest step.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'handling Section 22.1 requests',
    },
  ],
  localItems: [
    {
      title: 'Exterior wall inspections for tall buildings',
      body:
        'A tower that reaches 80 feet falls under the City’s exterior wall program in Municipal Code sections 13-196-032 to 13-196-037. The Department of Buildings assigns each building a category, which sets how often a full critical examination is due, and the years between are covered by short-form reports filed by November 1. Confirm the category and dates for your own building with the Department.',
    },
    {
      title: 'Elevator certification in a tower',
      body:
        'Every year the owner of a Chicago building with elevators pays a state-licensed third-party inspector and reports the outcome to the Department of Buildings through its Annual Inspection Certification portal. In a tower with a bank of passenger cars plus service and garage cars, that is a recurring budget line with its own calendar.',
    },
    {
      title: 'Energy and water benchmarking',
      body:
        'A residential building of 50,000 square feet or more reports its yearly energy and water use to the City by June 1, and condominium buildings are covered by the same ordinance. Every third year, a licensed professional has to verify the data. Large towers are the buildings the program was written for.',
    },
    {
      title: 'Reassessment timing',
      body:
        'The Cook County Assessor last reassessed the City of Chicago in 2024 and will reassess it again in 2027. A tower board that plans a tax appeal should work back from that date.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): the Streeterville skyline from a public street; a tower entrance from the sidewalk.
  photos: [],
  faqs: [
    {
      q: 'Which Streeterville buildings fall under the exterior wall program?',
      a: 'The City of Chicago program covers buildings 80 feet or more in height. Confirm your building’s cycle and filing dates with the City and a licensed structural engineer or architect.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
    {
      q: 'Where should a high-rise board start on life safety?',
      a: 'With a written statement of what applies to your building, prepared by a qualified fire-protection engineer or life-safety consultant. The requirements depend on height, age, construction and existing systems.',
      post: 'chicago-condo-life-safety-board-planning',
    },
    {
      q: 'How does a mixed-use tower split shared costs?',
      a: 'The recorded agreements between the residential and commercial parts set the split. Have association counsel and the accountant confirm how each shared cost is allocated.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'How does a tower board keep track of staff, vendors and projects?',
      a: 'With one monthly report that shows open work orders, contract dates, project status and the budget against actual spending. The board should be able to read it in one sitting.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Who files the annual elevator report for a Streeterville tower?',
      a: 'The owner, which is the association, hires a state-licensed independent inspector and reports through the City’s AIC portal each year. Large towers with several elevators budget for the inspections.',
      post: 'chicago-condo-life-safety-board-planning',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Near North Side (Streeterville) community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Near-North-Side.pdf' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
