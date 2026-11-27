import type { AreaContent } from './types';

export const riverNorth: AreaContent = {
  slug: 'river-north',
  targetQuery: 'condo management river north chicago',
  title: 'Condo Management in River North, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for River North boards: high-rises, converted lofts, short-term rentals and facade reports. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'River North is Chicago’s gallery district and an entertainment destination. It has high-rise condominiums with amenity spaces such as rooftop decks and fitness centers, and converted loft buildings around Kinzie and Hubbard.',
  housing: {
    intro:
      'River North does not have a community area of its own. It is part of the Near North Side, Community Area 8. The figures below are 2020 to 2024 American Community Survey estimates compiled by the Chicago Metropolitan Agency for Planning for the whole Near North Side, which also covers Old Town, Streeterville and the Gold Coast.',
    stats: [
      { label: 'Typical home was built in (median year)', value: '1989' },
      { label: 'Mid-century homes, built 1940 to 1969', value: '12,507 (16.1%)' },
      { label: 'Newer homes, built 2010 or later', value: '13,560 (17.5%)' },
      { label: 'Mid-size buildings, five to nine units', value: '1,705 (2.2%)' },
      { label: 'Larger buildings, ten to nineteen units', value: '1,707 (2.2%)' },
      { label: 'Large buildings, twenty or more units', value: '69,343 (89.4%)' },
      { label: 'Renter-occupied households', value: '44,142 (63.5%)' },
      { label: 'Owner-occupied households', value: '25,410 (36.5%)' },
    ],
    takeaway:
      'The Near North Side’s housing is much newer than the city’s overall (median year built 1953 citywide): the median home was built in 1989, 31.1 percent of homes date from 1990 to 2009 and 17.5 percent from 2010 or later, and 89.4 percent are in buildings of twenty or more units. River North’s towers and converted lofts sit on top of that profile, with amenity-heavy buildings and a majority of renter households (63.5 percent).',
  },
  buildingTypes: [
    {
      name: 'High-rise condominiums',
      detail:
        'Towers with shared amenities, staff and building systems that run every hour of the day.',
    },
    {
      name: 'Converted loft buildings',
      detail:
        'Brick-and-timber warehouses with exposed timber, original masonry and freight-elevator retrofits. Their upkeep is its own discipline. Timber, old brick and freight elevators each need a contractor who knows them.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Short-term rentals',
      body:
        'Chasing short-term rentals unit by unit, with notices and fines, is slow. The City of Chicago keeps a prohibited-buildings list that covers a whole building at once, and few associations use it. Tell owners and agents about the building’s status, so listings stop before they start.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
      linkText: 'Chicago’s prohibited-buildings list for short-term rentals',
    },
    {
      title: 'EV charging requests',
      body:
        'Requests for EV charging are reaching Illinois associations. A board that writes its process once can answer each new request in weeks, not months. In a tower garage, the electrical capacity question should be answered once for the whole building.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'a board process for EV charging requests',
    },
    {
      title: 'Facade reports',
      body:
        'Towers of 80 feet or more fall under the City of Chicago exterior wall program. Confirm your cycle and filing dates with the City and a licensed engineer or architect, and carry the work as a multi-year budget line.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'how condo boards stay ahead of facade compliance',
    },
    {
      title: 'Borrowing for a large project',
      body:
        'A lender underwrites an association loan on assessment income and on how the association is governed. The board can strengthen both in the months before it applies. Loft buildings with timber and masonry work ahead should start that preparation early.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'getting an association ready for a project loan',
    },
    {
      title: 'Who pays the insurance deductible',
      body:
        'When a loss falls under the master policy deductible, Section 12(c) of the Condominium Property Act gives the board three ways to decide who pays. One of them needs notice and a chance for a hearing first.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'charging a master policy deductible to an owner',
    },
  ],
  localItems: [
    {
      title: 'Elevator reporting',
      body:
        'Each year the City’s Annual Inspection Certification program has an owner hire a state-licensed third-party inspector and report the result through the Department of Buildings portal. A River North tower with several elevators carries that duty every year.',
    },
    {
      title: 'Energy benchmarking',
      body:
        'A residential building of 50,000 square feet or more reports energy and water use each year by June 1. Condominiums are covered, and a licensed professional verifies the data every third year.',
    },
    {
      title: 'Short-term rentals',
      body:
        'The City’s House Share Prohibited Buildings List excludes listed buildings from short-term-rental activity under the Shared Housing Ordinance. The City describes an affidavit process on its site.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024, and Cook County reassesses the city again in 2027.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a River North loft building from the sidewalk; a high-rise street view near the river.
  photos: [],
  faqs: [
    {
      q: 'Can a whole River North building be closed to short-term rentals?',
      a: 'Chicago keeps a prohibited-buildings list for that purpose. The guide explains how an association uses it. Check the current steps with the City and with association counsel.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'How should a board answer an EV charger request?',
      a: 'With a written process the board adopts once. Every later request then follows the same steps and can be answered in weeks.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
    },
    {
      q: 'What does a lender look at before lending to an association?',
      a: 'Mainly two things: assessment income and the quality of governance. A board can improve both before its first conversation with a lender.',
      post: 'condo-hoa-capital-project-loan-preparation',
    },
    {
      q: 'Which River North towers have to benchmark energy use?',
      a: 'Residential buildings of 50,000 square feet or more. Condominiums are covered, and the City expects a report each year with verification by a licensed professional every third year.',
      post: 'chicago-condo-association-compliance-calendar',
    },
    {
      q: 'What does a River North board do about amenity-space reserves?',
      a: 'List each amenity as its own reserve line, such as the pool, deck and fitness equipment, with a replacement year and cost. Lenders and buyers read that detail.',
      post: 'how-to-read-condo-reserve-study',
    },
  ],
  hasHighRises: true,
  sources: [
    { label: 'Near North Side (River North) community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Near-North-Side.pdf' },
    { label: 'Chicago Department of Buildings, annual elevator inspection reporting (AIC)', href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'City of Chicago House Share Prohibited Buildings List', href: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List-Map/k75w-468b/about' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
