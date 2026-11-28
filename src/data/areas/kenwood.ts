import type { AreaContent } from './types';

export const kenwood: AreaContent = {
  slug: 'kenwood',
  targetQuery: 'condo management kenwood chicago',
  title: 'Condo Management in Kenwood, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Kenwood boards: lakefront high-rises, mid-century mid-rises and historic houses. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Kenwood is a South Side lakefront neighborhood of large historic houses and tall apartment buildings, next to Hyde Park. Condominiums here are mostly in mid-century and later high-rises and mid-rises.',
  housing: {
    intro:
      'Kenwood is Community Area 39. The Census-based figures below, compiled by the Chicago Metropolitan Agency for Planning, describe the whole community area, which is dominated by large buildings.',
    stats: [
      { label: 'Homes in buildings of twenty or more units', value: '6,561 (58.4%)' },
      { label: 'Homes in buildings of five to nine units', value: '12.8%' },
      { label: 'Homes in buildings of ten to nineteen units', value: '4.3%' },
      { label: 'Detached single-family houses', value: '9.6%' },
      { label: 'Renter-occupied households', value: '62.5%' },
      { label: 'Median year a home was built', value: '1964' },
      { label: 'Homes built from 1970 through 1989', value: '21.5%' },
      { label: 'Homes built before 1940', value: '27.2%' },
    ],
    takeaway:
      'A median build year of 1964 means the typical home here is in a building more than sixty years old. Exterior walls, elevators, boilers and garages age together, and with 58 percent of homes in buildings of twenty or more units, big-building rules matter more here than in most neighborhoods.',
  },
  buildingTypes: [
    {
      name: 'Mid-century lakefront towers',
      detail:
        'Buildings of twenty units or more, with elevators, garages and central plants. Capital planning and engineering reviews are part of every budget cycle.',
    },
    {
      name: 'Courtyard and mid-rise buildings',
      detail:
        'Brick buildings of five to nineteen units, with a boiler room and shared roof. They run on smaller budgets than the towers, with the same kinds of systems.',
    },
    {
      name: 'Historic houses divided into condominiums',
      detail:
        'Large older houses inside landmark districts, where preservation review shapes exterior projects.',
    },
  ],
  issues: [
    {
      title: 'Facade inspections for tall buildings',
      body:
        'Chicago’s exterior wall rule applies to buildings over 80 feet. The board needs a licensed professional, a filing calendar and a budget line for repairs the inspection finds.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'facade compliance for Chicago condo boards',
    },
    {
      title: 'Fire and life-safety upgrades',
      body:
        'Chicago’s life-safety requirements for older high-rises can be costly and time-sensitive. The guide helps boards sequence the work with other capital projects.',
      post: 'chicago-condo-life-safety-board-planning',
      linkText: 'life-safety planning for Chicago condo boards',
    },
    {
      title: 'Reserves large enough for a tower',
      body:
        'Illinois law asks associations to keep reasonable reserves. Fannie Mae and Freddie Mac set their own thresholds, which affect whether a buyer can get a mortgage.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'Fannie Mae and Freddie Mac condo eligibility for boards',
    },
    {
      title: 'Capital loans for big projects',
      body:
        'When a facade, a roof and an elevator modernization arrive within a few years, a loan can spread the cost. Lenders want to see governance and reserve records.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing an association for a capital project loan',
    },
    {
      title: 'Emergency planning for a high-rise',
      body:
        'Power outages, water-main breaks and elevator failures need written procedures that owners can find. A checklist makes sure the board has contacts and a communication plan.',
      post: 'condo-hoa-emergency-planning-checklist',
      linkText: 'an emergency planning checklist for condo boards',
    },
  ],
  localItems: [
    {
      title: 'Kenwood and North Kenwood landmark districts',
      body:
        'The City designated the Kenwood District on June 29, 1979, and the North Kenwood Multiple Resource District on June 9, 1993. Exterior work on a property in either one goes through historic preservation review at the permit stage.',
    },
    {
      title: 'Chicago Exterior Wall Program',
      body:
        'Buildings 80 feet or taller above grade must have facade inspections under Chicago Municipal Code 13-196-032 through 037. Critical examinations recur on cycles of 4, 8 or 12 years depending on the building’s condition category. Short-form reports are due November 1 and critical examinations December 1.',
    },
    {
      title: 'Energy benchmarking',
      body:
        'A residential building of 50,000 square feet or more, condominiums included, reports energy use each year by June 1. A licensed professional must verify the data every third year.',
    },
    {
      title: 'Reassessment cycle',
      body:
        'The City of Chicago was reassessed in 2024 and is due again in 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Which Kenwood buildings fall under the exterior wall ordinance?',
      a: 'Buildings at least 80 feet above grade. The rule is set by the Department of Buildings, and the building’s category determines how often a full inspection is due.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'What does a licensed professional verify for benchmarking?',
      a: 'Every third year, a licensed architect or engineer verifies the data a covered building reports. The owner or manager submits the annual report through ENERGY STAR Portfolio Manager.',
      post: 'how-to-read-condo-reserve-study',
    },
    {
      q: 'Why does a big building’s reserve matter to a buyer?',
      a: 'Lenders that sell loans to Fannie Mae and Freddie Mac review reserves, delinquency and litigation, so a weak record can make a unit harder to finance.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Can a board keep all reserve funds in one bank?',
      a: 'FDIC insurance limits apply per depositor at each bank, so boards with large balances often spread funds. The guide explains the options.',
      post: 'illinois-association-reserve-funds-fdic-coverage',
    },
    {
      q: 'Does a high-rise need a different kind of manager?',
      a: 'A high-rise has more systems and contracts than a walk-up. We review the building before quoting, and the pricing page shows the fee basis.',
      post: 'how-many-associations-should-community-manager-handle',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Kenwood community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Kenwood.pdf' },
    { label: 'Chicago Landmarks, official list of landmark districts', href: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
