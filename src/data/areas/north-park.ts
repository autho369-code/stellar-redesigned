import type { AreaContent } from './types';

export const northPark: AreaContent = {
  slug: 'north-park',
  targetQuery: 'condo management north park chicago',
  title: 'Condo Management in North Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for North Park boards: condominium associations and townhome communities near the river. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near North Park? Until then the page says "we serve boards here".
  managed: null,
  context:
    'North Park is a quiet neighborhood on the North Branch of the Chicago River, home to North Park University and nature preserves. It has condominium associations and townhome communities, including the Peterson Park blocks.',
  buildingTypes: [
    {
      name: 'Condominium associations',
      detail:
        'Mid-size buildings in a residential setting, where the same owners often serve on the board for years.',
    },
    {
      name: 'Townhome communities',
      detail:
        'Homes that share roofs, drives and grounds, and that may follow a different Illinois statute than the condominium nearby.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Collections done the same way every time',
      body:
        'By January 1, 2027, Illinois condo and HOA boards must adopt a written assessment collection policy under Public Act 104-0734. A written policy also protects neighbors from having to judge each other. Send the policy to every owner once it is adopted.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'adopting a collection policy before 2027',
    },
    {
      title: 'Elections with long-serving boards',
      body:
        'When the same directors have served for years, the election steps get rusty. Announce the candidate deadline, use a proxy form that is fair to every candidate, and let candidates watch the count. A neutral person to count the ballots is worth arranging in advance.',
      post: 'illinois-condo-board-elections-proxies-ballots',
      linkText: 'how to run an Illinois condo board election',
    },
    {
      title: 'Condominium or townhome law',
      body:
        'Property submitted to condominium ownership follows the Condominium Property Act. Many townhome communities follow the Common Interest Community Association Act. The declaration tells you which. Peterson Park townhome owners and condo owners may be reading different rulebooks.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which statute applies to a townhome community',
    },
    {
      title: 'Renewal of the master policy',
      body:
        'Give the carrier a full picture: maintenance done, repairs finished, and what happened in any past claim. Start early enough to answer questions. Ask the agent what the carrier wants to see this year.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'an insurance renewal checklist for associations',
    },
    {
      title: 'Reserves near the river',
      body:
        'Illinois names no reserve percentage for condominiums. The board budgets reasonable reserves for its own building, which near the river includes drainage, foundations and grounds. Walk the grounds each spring and note what changed.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves explained for boards',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a North Park condominium building from the sidewalk; a residential street near the river.
  photos: [],
  faqs: [
    {
      q: 'When is the Illinois collection policy deadline?',
      a: 'January 1, 2027. Illinois condo and HOA boards must adopt a written assessment collection policy by then, under Public Act 104-0734.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
    },
    {
      q: 'How does a board keep an election fair?',
      a: 'Publish the candidate deadline, use a proxy form that does not favor incumbents, and allow candidates to observe the count. Most disputes come from those three steps.',
      post: 'illinois-condo-board-elections-proxies-ballots',
    },
    {
      q: 'Do North Park townhomes follow condo law?',
      a: 'Not always. Many townhome associations are governed by the Common Interest Community Association Act. Your recorded declaration shows which statute applies.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'What should a long-serving North Park board write down?',
      a: 'The yearly calendar, the vendor list with contract dates, where the records are kept, and who has access to the bank accounts. A new director should be able to take over from the page.',
      post: 'self-managed-condo-association-problems',
    },
  ],
  hasHighRises: false,
};
