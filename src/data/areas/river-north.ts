import type { AreaContent } from './types';

export const riverNorth: AreaContent = {
  slug: 'river-north',
  targetQuery: 'condo management river north chicago',
  title: 'Condo Management in River North, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for River North boards: high-rises, converted lofts, short-term rentals and facade reports. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near River North? Until then the page says "we serve boards here".
  managed: null,
  context:
    'River North is Chicago’s gallery district and an entertainment destination. It has high-rise condominiums with amenity spaces such as rooftop decks and fitness centers, and converted loft buildings around Kinzie and Hubbard.',
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
  ],
  hasHighRises: true,
};
