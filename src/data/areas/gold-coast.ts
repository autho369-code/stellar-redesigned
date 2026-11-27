import type { AreaContent } from './types';

export const goldCoast: AreaContent = {
  slug: 'gold-coast',
  targetQuery: 'condo management gold coast chicago',
  title: 'Condo Management in the Gold Coast, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Gold Coast boards: pre-war masonry buildings, Lake Shore Drive towers and landmark rowhouse blocks. From $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'The Gold Coast runs along the lakefront just north of the Loop. Historic rowhouses on streets like Astor sit near high-rise condominiums along Lake Shore Drive, and the two kinds of building have very different maintenance calendars.',
  housing: {
    intro:
      'The Gold Coast is part of the Near North Side, Community Area 8, which the City counts as one unit along with River North, Streeterville and Old Town. The Census-based figures below, compiled by the Chicago Metropolitan Agency for Planning, describe that whole area, so they lean toward high-rises more than the Gold Coast alone does.',
    stats: [
      { label: 'Homes in buildings of twenty or more units', value: '69,343 (89.4%)' },
      { label: 'Households that rent', value: '63.5%' },
      { label: 'Households that own', value: '36.5%' },
      { label: 'Median year a home was built', value: '1989' },
      { label: 'Homes built from 1970 through 1989', value: '22.8%' },
      { label: 'Homes built before 1940', value: '9,681 (12.5%)' },
      { label: 'Homes in buildings of five to nineteen units', value: '4.4%' },
      { label: 'Detached or attached single-family homes', value: '3.8%' },
    ],
    takeaway:
      'Nearly nine homes in ten are in a high-rise, so board work here is dominated by building-systems and compliance calendars rather than lawn and lot questions. The 12.5 percent built before 1940 is the other pole: older masonry buildings, many in landmark districts, whose boards face preservation review on top of the usual costs.',
  },
  buildingTypes: [
    {
      name: 'Pre-war masonry buildings',
      detail:
        'Older masonry buildings with detailed facades. Their capital plans start with the envelope: masonry, windows and roofs.',
    },
    {
      name: 'Lake Shore Drive towers',
      detail:
        'Mid-century and later high-rises with elevators, garages and staffed lobbies. Their budgets are large and so are their compliance calendars.',
    },
    {
      name: 'Rowhouse and small-building blocks',
      detail:
        'Small associations in historic rowhouses on landmark streets, where exterior work has to fit the district’s review process.',
    },
  ],
  issues: [
    {
      title: 'Master policy and owner coverage that fit together',
      body:
        'The gap between the association’s master policy and each owner’s HO-6 policy is where claims get contested. The guide shows how to read the two side by side.',
      post: 'condo-master-policy-vs-ho6-board-guide',
      linkText: 'condo master policy versus HO-6 coverage',
    },
    {
      title: 'Insurance renewals on a fixed calendar',
      body:
        'Start the renewal process early enough to market the policy, review valuation and compare deductibles, rather than accepting whatever arrives thirty days out.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a condo and HOA insurance renewal checklist',
    },
    {
      title: 'Facade inspection cycles',
      body:
        'Buildings of 80 feet or taller fall under the City’s facade ordinance, and many on the lakefront do. The board needs an engineer, a filing calendar and a repair budget.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'facade compliance for Chicago condo boards',
    },
    {
      title: 'Fidelity coverage for funds the board controls',
      body:
        'Large associations handle significant cash. The guide explains Illinois fidelity insurance requirements and what the board should confirm with its manager.',
      post: 'illinois-association-fidelity-insurance-requirements',
      linkText: 'fidelity insurance requirements for Illinois associations',
    },
    {
      title: 'Emergency planning for a staffed high-rise',
      body:
        'A heat failure, a water-main break or an elevator outage in a building with hundreds of residents needs a written plan. The checklist covers contacts, communications and roles.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'an emergency planning checklist for condo boards',
    },
  ],
  localItems: [
    {
      title: 'Astor Street, East Lake Shore Drive and Seven Houses districts',
      body:
        'The City designated the Astor Street district on December 19, 1975, the East Lake Shore Drive district on April 18, 1985 and the Seven Houses on Lake Shore Drive district on June 28, 1989. For a property inside a landmark district, exterior permits are reviewed by the City’s historic preservation staff before they are issued.',
    },
    {
      title: 'Exterior wall inspections at 80 feet',
      body:
        'Chicago’s facade ordinance, Municipal Code 13-196-032 through 037, applies to buildings 80 feet or taller. Critical examinations recur every 4, 8 or 12 years depending on the building’s category, and short-form reports are due each November 1 in between.',
    },
    {
      title: 'Energy benchmarking for large residential buildings',
      body:
        'A residential building of 50,000 square feet or more reports its energy and water use each year by June 1 through ENERGY STAR Portfolio Manager. Condominiums are covered, and a licensed professional verifies the data every third year.',
    },
    {
      title: 'Private hauling and reassessment',
      body:
        'Buildings of five or more units contract a private hauler, since City crews serve only buildings of up to four units. Chicago was reassessed in 2024, and the next reassessment is 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Which Gold Coast streets are landmark districts?',
      a: 'The City lists the Astor Street, East Lake Shore Drive and Seven Houses on Lake Shore Drive districts. The official landmark list shows boundaries, and the Department of Planning and Development can confirm whether a specific address is inside one.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'How often does a high-rise facade need a full inspection?',
      a: 'Every 4, 8 or 12 years depending on the category the building falls into, with a short report filed in the years between. The Department of Buildings can confirm where a specific building stands.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'Are the Census numbers for the Gold Coast alone?',
      a: 'No. They cover the Near North Side community area, which also includes River North, Streeterville and Old Town. They show the housing mix of the area as a whole.',
      post: 'condominium-property-management-chicago-what-board-members-should-expect',
    },
    {
      q: 'Can a board stop short-term rentals in a high-rise?',
      a: 'A condominium association can ask the City to add its building to the Prohibited Buildings List, and its declaration may also restrict leasing. The guide compares the routes.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'What does a management agreement review cover?',
      a: 'Term, fees, termination rights, who holds the funds and how records transfer if the board changes managers. The guide goes through each clause.',
      post: 'community-association-management-agreement-review',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Near North Side community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Near-North-Side.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
