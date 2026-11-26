import type { AreaContent } from './types';

export const albanyPark: AreaContent = {
  slug: 'albany-park',
  targetQuery: 'condo management albany park chicago',
  title: 'Condo Management in Albany Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Albany Park boards: condominiums and multi-unit conversions near the river and the Brown Line. Flat fee from $30 per unit.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Albany Park? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Albany Park sits along the North Branch of the Chicago River with good transit access. It is one of Chicago’s most diverse neighborhoods, with a mix of condominiums and multi-unit conversions.',
  buildingTypes: [
    {
      name: 'Multi-unit conversions',
      detail:
        'Two-flats to courtyard buildings that became condominiums. The board is small and the building is older than its paperwork.',
    },
    {
      name: 'Condominium buildings',
      detail:
        'Well-kept buildings where owners come from many backgrounds, so notices need to be short, clear and sent more than one way.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Running a small building',
      body:
        'A conversion with a few units often has no manager. The duties are the same as in a large building, so decide who keeps the books, the records and the calendar. A shared folder and a bank account in the association’s own name are the first two steps.',
      post: 'self-managed-condo-association-problems',
      linkText: 'the risks of managing your own association',
    },
    {
      title: 'Back porches',
      body:
        'Wood rear porches are common on Chicago walk-ups. Know what the City requires and when a permit is needed, and keep each inspection on file. Photograph the porches each spring, so changes are easy to see from year to year.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'a board guide to Chicago porch and deck rules',
    },
    {
      title: 'Leaks between floors',
      body:
        'In a stacked building, water finds the unit below. The declaration decides who pays, so read it before anyone agrees to cover a repair. Ask every owner to know where their own shut-off valve is.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who is responsible for a condo water leak',
    },
    {
      title: 'A written collection policy',
      body:
        'Illinois condo and HOA boards must adopt a written assessment collection policy by January 1, 2027, under Public Act 104-0734. A small board should adopt it now and apply it the same way to every owner. If owners read different languages, a short translated summary can sit beside the official policy.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'the 2027 collection policy requirement',
    },
    {
      title: 'A manager with time for you',
      body:
        'Ask how many buildings the manager carries and who answers when that person is out. A small association should get a named person, not a queue. Ask to meet that person before the board signs.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'how to judge a manager’s workload',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): an Albany Park courtyard or two-flat conversion from the sidewalk; a street near the river.
  photos: [],
  faqs: [
    {
      q: 'Does a small Albany Park condo association need a written collection policy?',
      a: 'Yes. Illinois condo and HOA boards must adopt a written assessment collection policy by January 1, 2027, under Public Act 104-0734. Size does not change the requirement.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
    },
    {
      q: 'Who pays when water from one unit damages another?',
      a: 'It starts with the declaration, which assigns responsibility for each part of the building. Read it first, then look at insurance.',
      post: 'who-pays-condo-water-leak-illinois',
    },
    {
      q: 'Can a four-unit building hire a professional manager?',
      a: 'Yes. The legal duties are the same at four units as at forty. A per-unit flat fee lets a small board see the cost before it decides.',
      post: 'self-managed-condo-association-problems',
    },
    {
      q: 'How should a board send notices where owners speak several languages?',
      a: 'Keep notices short and plain, send them more than one way, and follow the notice rules in your declaration and the statute. A translated summary can sit beside the official notice.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
  ],
  hasHighRises: false,
};
