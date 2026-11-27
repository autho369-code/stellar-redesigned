import type { AreaContent } from './types';

export const westLoop: AreaContent = {
  slug: 'west-loop',
  targetQuery: 'condo management west loop chicago',
  title: 'Condo Management in the West Loop, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for West Loop boards: Fulton Market loft conversions, new towers and townhome blocks. Flat fee from $30 per unit a month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'The West Loop grew from meatpacking and warehouse blocks into a restaurant and residential district. Today it combines loft conversions in old industrial buildings with new towers and rows of townhomes.',
  housing: {
    intro:
      'The West Loop sits in the Near West Side, Community Area 28. The Census-based numbers below, compiled by the Chicago Metropolitan Agency for Planning, describe the whole community area, which also takes in the University of Illinois Chicago and the medical district.',
    stats: [
      { label: 'Homes in buildings of twenty or more units', value: '25,712 (66.0%)' },
      { label: 'Homes in buildings of three or four units', value: '8.6%' },
      { label: 'Homes in buildings of five to nine units', value: '6.5%' },
      { label: 'Homes in two-unit buildings', value: '5.4%' },
      { label: 'Median year a home was built', value: '2000' },
      { label: 'Homes built from 1990 through 2009', value: '35.0%' },
      { label: 'Homes built before 1940', value: '20.5%' },
      { label: 'Renter-occupied households', value: '65.3%' },
    ],
    takeaway:
      'Two in three homes are in a building of twenty units or more, but a distinct minority are in small buildings of two to nine units. A West Loop board may therefore manage a tower with an amenity deck or a six-unit brick conversion, and the two need very different kinds of oversight.',
  },
  buildingTypes: [
    {
      name: 'Loft conversions in former industrial buildings',
      detail:
        'Brick-and-beam buildings with large windows, old roofs and freight elevators. Their boards plan for masonry, window and mechanical upgrades.',
    },
    {
      name: 'New towers and mid-rises',
      detail:
        'Recent buildings with amenity decks, garages and contracts the developer signed before the owners took over.',
    },
    {
      name: 'Townhome and small-building infill',
      detail:
        'Buildings of two to nine units, together about one home in five. Associations are small and heavily volunteer-run.',
    },
  ],
  issues: [
    {
      title: 'Handoff from the developer',
      body:
        'In a new building the developer controls the board at first. The turnover meeting hands over the records, the reserve account and the open warranty claims, and a checklist keeps nothing from being missed.',
      post: 'illinois-condo-developer-turnover-checklist',
      linkText: 'an Illinois condo developer turnover checklist',
    },
    {
      title: 'Reading a first reserve study',
      body:
        'The initial reserve study sets the contribution for years. Owners and lenders should know what its assumptions are.',
      post: 'how-to-read-condo-reserve-study',
      linkText: 'how to read a condo reserve study',
    },
    {
      title: 'Meeting buyers’ lenders on eligibility',
      body:
        'With 65 percent of households renting, owner-occupancy and delinquency numbers can affect whether buyers get loans. The eligibility guide explains the tests.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'Fannie Mae and Freddie Mac condo eligibility for boards',
    },
    {
      title: 'Elevator and life-safety work',
      body:
        'Elevator modernization, fire alarm updates and sprinkler maintenance have fixed schedules. A board that plans them avoids emergency scheduling.',
      post: 'chicago-condo-life-safety-board-planning',
      linkText: 'life-safety planning for Chicago condo boards',
    },
    {
      title: 'Large budgets and independent review',
      body:
        'Illinois gives owners a right to ask for an independent audit. The guide explains when and how it can be requested, and what the board must provide.',
      post: 'illinois-condo-owners-independent-audit-rights',
      linkText: 'owners’ rights to an independent audit in Illinois',
    },
  ],
  localItems: [
    {
      title: 'Exterior walls of 80 feet or more',
      body:
        'Chicago’s facade ordinance covers buildings of 80 feet or taller. Critical examinations are due every 4, 8 or 12 years depending on category, and the City collects short-form reports every November 1. Owners of occupied buildings in good condition may be able to file short forms only, every second year.',
    },
    {
      title: 'Annual energy reporting',
      body:
        'A residential building of 50,000 square feet or more reports its energy use each year by June 1. Condominium buildings are covered, and exemptions include buildings that are less than 50 percent occupied.',
    },
    {
      title: 'Garbage service and private haulers',
      body:
        'The City picks up garbage from buildings of four units or fewer. Larger West Loop buildings hire private haulers, as Municipal Code 7-28-240 requires.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'The City of Chicago was reassessed in 2024 and will be again in 2027.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Is the University of Illinois Chicago part of these numbers?',
      a: 'The Census community area includes it, so the figures reflect a mix of residents. The West Loop neighborhood itself is a subset of the area, and the numbers describe the area as a whole.',
      post: 'condominium-property-management-chicago-what-board-members-should-expect',
    },
    {
      q: 'When does a developer hand over the board?',
      a: 'The Condominium Property Act requires a turnover meeting once the developer has sold a set share of units, and the declaration may set its own trigger. The guide lists the records and funds the developer hands over.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'Does a new building still need a facade inspection?',
      a: 'If it is 80 feet or taller, yes. The City’s program sets the schedule by category and building age, and the Department of Buildings can confirm where a specific building stands.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
    {
      q: 'Can an owner rent a West Loop condo on a short-term basis?',
      a: 'That depends on the declaration and on whether the building is on the City’s Prohibited Buildings List. The guide explains how the list works.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'What does an agreement review look at?',
      a: 'Term, fees, termination rights, who holds the funds and what happens to records on transition. The guide goes through each clause.',
      post: 'community-association-management-agreement-review',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Near West Side community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Near-West-Side.pdf' },
    { label: 'Chicago exterior wall inspection program', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
