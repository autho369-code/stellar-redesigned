import type { AreaContent } from './types';

export const evanston: AreaContent = {
  slug: 'evanston',
  targetQuery: 'condo management evanston il',
  title: 'Condo Management in Evanston, IL | From $30/Unit | Stellar',
  metaDescription:
    'Condo and HOA management for Evanston boards: vintage lakefront condos, courtyard buildings, elections and resales. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Evanston? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Evanston is a lakefront city and the home of Northwestern University. Its housing runs from vintage lakefront condominiums and mid-century courtyard buildings to newer buildings near the Davis Street Metra and CTA stops.',
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
        'Renewal goes better when the association brings organized documents, finished maintenance and an explanation of past losses. A late, bare application gives the board little room.',
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
        'Contested elections tend to fail on process: a proxy form that names only incumbents, a deadline no one announced, a count no candidate could observe. Fix the calendar and the forms first.',
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
  ],
  hasHighRises: false,
};
