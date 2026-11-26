import type { AreaContent } from './types';

export const lincolnSquare: AreaContent = {
  slug: 'lincoln-square',
  targetQuery: 'condo management lincoln square chicago',
  title: 'Condo Management in Lincoln Square, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lincoln Square boards from our office in the 60625 ZIP code. Courtyard buildings and townhomes. Flat fee from $30 per unit.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Lincoln Square?
  managed: null,
  context:
    'Lincoln Square is centered on its town square. The neighborhood has a mix of vintage courtyard buildings and newer townhome developments, and our office shares its 60625 ZIP code. Our Lincoln Square service area also covers Bowmanville, Budlong Woods and Arcadia Terrace.',
  buildingTypes: [
    {
      name: 'Vintage courtyard buildings',
      detail:
        'Older walk-up buildings where a small board looks after the roof, the masonry and the heating plant.',
    },
    {
      name: 'Newer townhome developments',
      detail:
        'Townhome communities with shared exteriors and drives. Many are governed by a different Illinois statute than a condominium is.',
    },
    // TODO(Jojo): confirm "Small 2 to 12 unit associations".
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Whether a small association needs a manager',
      body:
        'Self-management does not remove the work or the legal duties. It moves all of them onto unpaid neighbors. It can work for a small, stable building for a while, and the guide lists what tends to stay hidden.',
      post: 'self-managed-condo-association-problems',
      linkText: 'the hidden problems with self-managed condo associations',
    },
    {
      title: 'Manager workload',
      body:
        'There is no single right number of associations for one manager. A small board should ask what work is already committed across the manager’s portfolio, what support the manager has, and who covers when several communities need help at once.',
      post: 'how-many-associations-should-community-manager-handle',
      linkText: 'how many associations one community manager should handle',
    },
    {
      title: 'Insurance deductible charges to owners',
      body:
        'When a water loss falls under the master policy deductible, Section 12(c) of the Condominium Property Act gives a condo board three options for who pays it. One of them requires notice and an opportunity for a hearing first.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'when an Illinois condo board can charge the deductible to an owner',
    },
    {
      title: 'Budget season',
      body:
        'The budget is a board action, not an owner vote, but the notice and distribution steps are where boards get into trouble. Start about ninety days before the fiscal year begins.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'how Illinois association boards should adopt an annual budget',
    },
    {
      title: 'Which Illinois law governs a townhome association',
      body:
        'Many townhome associations are governed by the Common Interest Community Association Act, not the Condominium Property Act. Confirm which statute applies before the board borrows a procedure from the other one.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois law governs your condo, HOA or townhome association',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Lincoln Square, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only: a vintage courtyard building (public view);
  // a Western Ave or Lincoln Ave streetscape; a townhome row (public view only).
  photos: [],
  faqs: [
    {
      q: 'Does a townhome association in Lincoln Square follow the Condominium Property Act?',
      a: 'Often not. A property submitted to condominium ownership is generally governed by the Illinois Condominium Property Act. Many townhome and homeowner associations are governed by the Common Interest Community Association Act. Your recorded declaration tells you which one applies.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Can a small condo board charge a master policy deductible to one owner?',
      a: 'In defined circumstances, yes. Under Section 12(c) of the Condominium Property Act the board may pay the deductible as a common expense, assess it after notice and an opportunity for a hearing against the owners who caused the damage or from whose units it started, or require the owners of the affected units to pay it. Read it together with your declaration.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
    },
    {
      q: 'Is a small building better off self-managed?',
      a: 'Self-management can work for a small, stable building with engaged volunteers. It does not remove the work or the legal obligations. It moves them onto the volunteers.',
      post: 'self-managed-condo-association-problems',
    },
  ],
  hasHighRises: false,
};
