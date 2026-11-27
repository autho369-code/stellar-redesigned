import type { AreaContent } from './types';

export const arlingtonHeights: AreaContent = {
  slug: 'arlington-heights',
  targetQuery: 'condo management arlington heights il',
  title: 'Condo Management in Arlington Heights, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Arlington Heights boards: 1970s mid-rises, the 30-day minimum rental rule and flood planning. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Arlington Heights has one of the biggest condominium markets in the northwest suburbs, with a quarter of its housing in condos and more than 7,000 homes in buildings of twenty or more units. Most of that stock was built in the 1970s and 1980s.',
  housing: {
    intro:
      'These numbers come from the Census Bureau’s 2020 to 2024 American Community Survey as summarized by the Chicago Metropolitan Agency for Planning, and from DePaul’s Institute for Housing Studies.',
    stats: [
      { label: 'Median year an Arlington Heights home was built', value: '1974' },
      { label: 'Homes built between 1970 and 1989', value: '13,360 (40.5%)' },
      { label: 'Homes in buildings of 20 or more units', value: '7,350 (22.3%)' },
      { label: 'Homes in buildings of 5 to 19 units', value: '4,064 (12.3%)' },
      { label: 'Share of housing that is condominium, 2025', value: '25.0%' },
      { label: 'Condominium sales in 2005 and in 2025', value: '806 and 348' },
      { label: 'Renter-occupied households', value: '26.0%' },
      { label: 'Owner-occupied households', value: '74.0%' },
    ],
    takeaway:
      'With a median build year of 1974, many of the village’s condo buildings reach the same point in their life cycle together: original elevators, boilers, windows and garage membranes come due in the same decade. A board that starts a reserve plan early has more options than one that waits for the first failure.',
  },
  buildingTypes: [
    {
      name: 'Large mid-rise condominiums',
      detail:
        'More than one home in five is in a building of twenty or more units. These buildings carry elevator contracts, life-safety systems, common utilities and garage structures, and their budgets move with insurance and energy markets.',
    },
    {
      name: 'Mid-sized buildings of five to nineteen units',
      detail:
        'About 4,000 homes sit in buildings of this size. A part-time board with a volunteer treasurer is typical, and the work that piles up is vendor oversight, collections and records.',
    },
    {
      name: 'Townhome and attached associations',
      detail:
        'Attached homes make up about 7 percent of the housing stock. These communities share roofs, siding and a snow contract across many separate owners.',
    },
  ],
  issues: [
    {
      title: 'Planning for a wave of original systems',
      body:
        'Buildings from the 1970s and 1980s are replacing windows, roofs and piping now. A board that stages the work over several budget years avoids the single assessment that forces some owners to sell.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'preparing a capital project loan',
    },
    {
      title: 'Lender eligibility and resale friction',
      body:
        'Buyers who finance a unit in a large condominium depend on the lender’s approval of the association. Reserve funding, delinquency rates and the share of rented units all feed that review, so weak records show up as slow closings.',
      post: 'fannie-freddie-condo-eligibility-board-guide',
      linkText: 'what Fannie Mae and Freddie Mac look at in a condo',
    },
    {
      title: 'Fines, notices and the 30-day rental rule',
      body:
        'The village now treats residential stays of under 30 consecutive days as a nuisance. That backs up any rule in your documents against Airbnb-style use, but only the association can fine an owner, and only after notice and a hearing.',
      post: 'illinois-association-fines-notice-hearing',
      linkText: 'fining owners with proper notice and hearing',
    },
    {
      title: 'EV charging and electrical capacity',
      body:
        'Larger buildings with shared garages are where owners start asking for chargers. A board needs a plan for capacity, cost allocation and who owns the equipment before the first request arrives.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'handling EV charging requests in an Illinois association',
    },
    {
      title: 'Special assessments that owners can follow',
      body:
        'When an assessment is unavoidable, owners respond better to a clear scope, bids and a payment schedule than to a single lump sum with little explanation.',
      post: 'condo-special-assessments-illinois',
      linkText: 'special assessments in Illinois condos',
    },
  ],
  localItems: [
    {
      title: '30-day minimum stay',
      body:
        'Since July 1, 2026, Arlington Heights requires every residential rental to run at least 30 consecutive days. The ordinance does not grandfather existing short-term listings, exempts hotels, and allows a short post-closing rental tied to a sale contract. Enforcement is complaint-based.',
    },
    {
      title: 'Permits and plans',
      body:
        'All building permit applications go through the village’s Civic Access Portal, where plans are uploaded and inspections scheduled. Permits require lot-grading and erosion-control plans, and grading may not divert water onto neighbors.',
    },
    {
      title: 'Buffalo Creek and Salt Creek drainage',
      body:
        'The village’s stormwater program identifies Buffalo Creek and the Arlington Heights branch of Upper Salt Creek as relevant drainage areas. Cook County’s MWRD watershed ordinance applies to larger site work.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'The county last reassessed Arlington Heights in 2025 and is scheduled to do so again in 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Can owners list a condo on Airbnb in Arlington Heights?',
      a: 'Not for stays under 30 consecutive days. The village ordinance in effect since July 1, 2026 sets a 30-day minimum for residential rentals, and your association may be stricter under its own documents.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'Does Arlington Heights require a condo rental license?',
      a: 'We found no general rental license for condominium units on the village’s published pages. Building permits and inspections still apply, and your association’s own leasing rules still control.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
    {
      q: 'How do I apply for a building permit for my association?',
      a: 'The village takes all applications through its Civic Access Portal. Plans and grading information go in with the application.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'How large are Arlington Heights condo buildings?',
      a: 'Census data show about 7,350 homes in buildings of twenty or more units and about 4,000 in buildings of five to nineteen units, so both large and mid-sized associations are common.',
      post: 'how-many-associations-should-community-manager-handle',
    },
    {
      q: 'Why do lenders care about our reserves?',
      a: 'Fannie Mae and Freddie Mac apply condominium project standards that look at reserves, delinquencies and rentals. Weak numbers can leave buyers unable to finance a unit in your building.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Arlington Heights community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Arlington-Heights.pdf' },
    { label: 'Arlington Heights housing data (DePaul Institute for Housing Studies)', href: 'https://www.housingstudies.org/data-portal/geography/arlington-heights/' },
    { label: 'Village of Arlington Heights short-term rental ordinance', href: 'https://www.vah.com/residents/short_term_rentals.php' },
    { label: 'Arlington Heights Civic Access Portal for permits and licensing', href: 'https://www.vah.com/government/permits___licenses_/citizen_self_serve_portal.php' },
    { label: 'Upper Salt Creek watershed (MWRD)', href: 'https://www.mwrd.org/what-we-do/stormwater-management/watersheds/upper-salt-creek-watershed' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
