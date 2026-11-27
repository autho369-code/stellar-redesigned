import type { AreaContent } from './types';

export const evanston: AreaContent = {
  slug: 'evanston',
  targetQuery: 'condo management evanston il',
  title: 'Condo Management in Evanston, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Evanston boards: vintage lakefront condos, courtyard buildings, elections and resales. Flat fee from $30 per unit per month.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Evanston is a lakefront city and the home of Northwestern University. Its housing runs from vintage lakefront condominiums and mid-century courtyard buildings to newer buildings near the Davis Street Metra and CTA stops.',
  housing: {
    intro:
      'Evanston is a Cook County city of about 31,700 occupied homes on the lakefront next to Chicago. The figures below are Census Bureau American Community Survey estimates for 2020 to 2024, compiled by the Chicago Metropolitan Agency for Planning.',
    stats: [
      { label: 'Median construction year, all homes', value: '1953' },
      { label: 'Homes built before 1940', value: '13,749 (40.3%)' },
      { label: 'Homes built from 1940 to 1969', value: '10,204 (29.9%)' },
      { label: 'Homes built since 2010', value: '2,617 (7.7%)' },
      { label: 'Detached single-family houses', value: '11,068 (32.5%)' },
      { label: 'Attached houses, such as townhomes', value: '1,691 (5.0%)' },
      { label: 'Homes in buildings of twenty or more units', value: '10,823 (31.7%)' },
      { label: 'Households that own their home', value: '17,807 (56.2%)' },
    ],
    takeaway:
      'Evanston splits its housing three ways: 32.5 percent detached houses, a large block of buildings of twenty or more units (31.7 percent), and everything in between. Four in ten homes were built before 1940 and 43.8 percent of households rent, so associations here range from vintage walk-ups to large lakefront and downtown buildings.',
  },
  buildingTypes: [
    {
      name: 'Vintage lakefront condominiums',
      detail:
        'Older buildings near the lake, where long-lived systems need a written plan.',
    },
    {
      name: 'Mid-century courtyard buildings',
      detail:
        'Walk-up buildings around a shared court, usually with a small board.',
    },
    {
      name: 'Newer buildings near Davis Street',
      detail:
        'Transit-oriented buildings with more units and more shared systems.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Planning repairs in an older building',
      body:
        'An older building has systems with a known life. Put each one on a calendar with a cost and a funding source, and the board trades emergencies for scheduled projects.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage condominium buildings',
    },
    {
      title: 'Insurance renewal',
      body:
        'Renewal goes better when the association brings organized documents, finished maintenance and an explanation of past losses. A late, bare application gives the board little room. A lakefront building should describe any water or wind history plainly.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'a board checklist for insurance renewal',
    },
    {
      title: 'Resale packets',
      body:
        'Section 22.1 of the Illinois Condominium Property Act governs what a condominium association provides when a unit is resold. Keep the documents organized so a request does not wait on one volunteer.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'Illinois Section 22.1 disclosures for boards',
    },
    {
      title: 'Running a clean election',
      body:
        'Contested elections tend to fail on process: a proxy form that names only incumbents, a deadline no one announced, a count no candidate could observe. Fix the calendar and the forms first. Publish the rules for proxies and ballots before nominations open.',
      post: 'illinois-condo-board-elections-proxies-ballots',
      linkText: 'Illinois condo board elections, proxies and ballots',
    },
    {
      title: 'How much attention the manager can give',
      body:
        'Boards that read the financials closely should ask how many communities their manager carries, what support that person has, and who covers during a heavy week.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'the right workload for a community manager',
    },
  ],
  localItems: [
    {
      title: 'Rental registration reaches condominiums',
      body:
        'Evanston Ordinance 141-O-18 requires every long-term rental unit, including a rented condominium, to be registered with the City and renewed each year. Only the owner-occupied unit in a building is exempt. Registered units are inspected on a cycle that depends on the last result: five years for no violations, three years for up to seven, and one year for more.',
    },
    {
      title: 'Short-term rentals are licensed',
      body:
        'Evanston licenses short-term rentals, meaning stays shorter than 30 days, and requires an inspection of the unit and any common areas guests can use before a license is issued. A board that wants to restrict them still relies on its own declaration and rules.',
    },
    {
      title: 'Reassessment',
      body:
        'Evanston Township is on the north suburban reassessment calendar. Cook County reassessed it in 2022 and 2025, and the next reassessment is 2028.',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): an Evanston courtyard building from the sidewalk; a lakefront residential street; the area near Davis Street.
  photos: [],
  faqs: [
    {
      q: 'What does an Evanston condo association owe a buyer when a unit is resold?',
      a: 'Section 22.1 of the Illinois Condominium Property Act governs the information a condominium association provides on a resale. Organizing it ahead of time keeps a closing on schedule.',
      post: 'illinois-section-22-1-disclosure-board-guide',
    },
    {
      q: 'Why do contested board elections go wrong?',
      a: 'Usually because of process, not votes: a proxy form listing only incumbents, an unannounced candidate deadline, or a ballot count no candidate was allowed to watch.',
      post: 'illinois-condo-board-elections-proxies-ballots',
    },
    {
      q: 'How many associations should one manager handle?',
      a: 'There is no single right number. Ask what work is already committed across the manager’s portfolio, what support the manager has, and who covers when several communities need help at once.',
      post: 'how-many-associations-should-community-manager-handle',
    },
    {
      q: 'Do owners who rent out a condominium in Evanston have to register with the City?',
      a: 'Yes. Evanston requires annual registration of rented condominium units, and the City inspects registered units on a cycle of one, three or five years depending on past violations. The owner-occupied unit is exempt.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'Does a condominium association need to track which units are rented?',
      a: 'It helps. The declaration may require owners to give the board lease information, and the City’s registration lets the association check that rented units are registered.',
      post: 'illinois-condo-association-records-request-guide',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Evanston community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Evanston.pdf' },
    { label: 'Evanston rental registration (Ordinance 141-O-18)', href: 'https://www.cityofevanston.org/departments/community_development/building_development_services/property_standards/rental_registration/index.php' },
    { label: 'Evanston short-term rental license', href: 'https://www.cityofevanston.org/departments/community_development/building_development_services/property_standards/vacation_rental_license.php' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
