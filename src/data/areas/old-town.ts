import type { AreaContent } from './types';

export const oldTown: AreaContent = {
  slug: 'old-town',
  targetQuery: 'condo management old town chicago',
  title: 'Condo Management in Old Town, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Old Town boards: vintage buildings, the Old Town Triangle and Wells Street mixed-use. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Old Town? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Old Town is one of Chicago’s oldest neighborhoods, known for its historic row houses and the Old Town Triangle. Most associations here are small vintage buildings off Wells Street, and some sit above the shops and restaurants of the Wells Street corridor.',
  buildingTypes: [
    {
      name: 'Small vintage buildings',
      detail:
        'Buildings of roughly 4 to 24 units, where a handful of owners carry every board job. Old roofs, masonry and plumbing set the budget.',
    },
    {
      name: 'Row houses and cottages in the Old Town Triangle',
      detail:
        'The Triangle is a Chicago landmark district. Before an exterior project goes out to bid, the board should confirm with the City what review the work needs.',
    },
    {
      name: 'Condominiums above Wells Street storefronts',
      detail:
        'Homes that share walls, systems and hours with restaurants and shops. Cost sharing and house rules need to be written down clearly.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'A repair plan for an old building',
      body:
        'Give the roof, the masonry, the plumbing and the heating plant each a date, a cost and a funding source. In a landmark district, add time for City review of exterior work. Old photographs and past permits help the next contractor understand the building.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'a capital plan for a vintage Chicago building',
    },
    {
      title: 'When volunteers run out of time',
      body:
        'In a building of a dozen units, self-management rests on two or three people. It works until one of them moves or burns out, so write the routines down while they are still there. A simple calendar of what happens each month is the best gift to the next board.',
      post: 'self-managed-condo-association-problems',
      linkText: 'what self-managed boards tend to miss',
    },
    {
      title: 'Short-term rentals near Wells Street',
      body:
        'A nightlife corridor attracts short-term rental listings. Chicago keeps a prohibited-buildings list that can close a whole building to them, which is faster than chasing one unit at a time. Add the house rule to the welcome packet, so new owners see it on day one.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
      linkText: 'using the prohibited-buildings list in Chicago',
    },
    {
      title: 'Insurance for a mixed-use building',
      body:
        'Residences over a restaurant raise questions a carrier will ask at renewal. Arrive with organized records, finished maintenance and the story behind any past loss. Ask whether the commercial tenant’s policy and the association’s leave any gap.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'what to prepare before an insurance renewal',
    },
    {
      title: 'Resales in a small building',
      body:
        'Section 22.1 of the Illinois Condominium Property Act governs what the association hands over when a unit is resold. In a small building, one prepared packet saves the board a scramble at every closing. Keep the budget, the minutes and the insurance certificate in one folder.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'a board’s guide to resale disclosures',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a row of Old Town Triangle houses from the sidewalk; a vintage building off Wells Street.
  photos: [],
  faqs: [
    {
      q: 'Does exterior work in the Old Town Triangle need extra review?',
      a: 'The Triangle is a Chicago landmark district. Ask the City what review your project needs before you collect bids, and build that time into the schedule.',
      post: 'vintage-chicago-condo-capital-planning',
    },
    {
      q: 'Can an Old Town building stop short-term rentals completely?',
      a: 'Chicago keeps a prohibited-buildings list for that purpose. The guide explains how an association uses it. Confirm the current steps with the City and with association counsel.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'Is a 6 to 12 unit building too small for a manager?',
      a: 'No size is too small for the legal duties, and they stay with the board either way. A flat fee quoted per unit lets a small building see the cost before it decides.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'How do condos above Wells Street shops share costs with the commercial space?',
      a: 'The recorded declaration and any shared-facilities agreement set the split. Ask association counsel to confirm it, then show it as its own line in the budget.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
  ],
  hasHighRises: false,
};
