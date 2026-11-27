import type { AreaContent } from './types';

export const lincolnwood: AreaContent = {
  slug: 'lincolnwood',
  targetQuery: 'condo management lincolnwood il',
  title: 'Condo Management in Lincolnwood, IL | Stellar',
  metaDescription:
    'Condo, HOA and townhome management for Lincolnwood boards, a short drive from our Chicago office: taxes, snow, resales. Flat fee from $30 per unit a month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Lincolnwood? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Lincolnwood is a compact Cook County village between Chicago’s far North Side and Skokie, a short drive from our office at 5107 N Western Ave. Its condominium buildings and townhome communities sit near Touhy Avenue and the Lincolnwood Town Center area.',
  buildingTypes: [
    {
      name: 'Condominium buildings',
      detail:
        'Buildings whose boards want accurate books, dependable vendors and quick answers. Most are small enough that every owner knows the board, which makes clear written rules more important, not less.',
    },
    {
      name: 'Townhome communities',
      detail:
        'Shared roofs, siding, drives, landscaping and snow contracts that work best as one coordinated plan. A single calendar for exterior work keeps every home on the same schedule.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Cook County reassessment years',
      body:
        'Lincolnwood is in Cook County. One property tax appeal can cover every unit in a condominium building, and any savings go to the owners. Time the budget letter around the assessment notices. Owners often ask the board about it the week the notices arrive, so have a short answer ready.',
      post: 'cook-county-property-tax-appeal-condo-association',
      linkText: 'Cook County tax appeals for a condo building',
    },
    {
      title: 'Snow on shared drives',
      body:
        'A townhome community lives on its drives. Sign the snow contract before the season, with the service level and the record of each visit written into it. Mark where plowed snow may be piled, so it does not block a neighbor’s garage.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'a snow and ice contract that holds up',
    },
    {
      title: 'Paying a deductible after a loss',
      body:
        'Section 12(c) of the Condominium Property Act gives a condo board three options for who pays the master policy deductible. One of them requires notice and an opportunity for a hearing first. Decide the approach before a loss and put it in the rules, so no owner is surprised.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
      linkText: 'who pays the master policy deductible',
    },
    {
      title: 'Resale requests',
      body:
        'When a condominium unit is sold, Section 22.1 of the Illinois Condominium Property Act governs what the association provides. A ready packet keeps the closing date safe. Name one person who answers resale requests, and a backup for vacations.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'preparing a 22.1 resale packet',
    },
    {
      title: 'Two statutes, one village',
      body:
        'Condominiums follow the Condominium Property Act. Many townhome communities follow the Common Interest Community Association Act. Check the declaration before adopting a rule. A board that oversees both a condominium and a townhome section should keep two checklists.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'condo law and townhome law in Illinois',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Lincolnwood condominium building from the sidewalk; a townhome street near Touhy Avenue.
  photos: [],
  faqs: [
    {
      q: 'Can a Lincolnwood condo association file one tax appeal for the building?',
      a: 'One filing can cover every unit in a condominium building. The savings go to the owners, not to the association budget.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Who pays the insurance deductible after a pipe breaks?',
      a: 'Under Section 12(c) of the Condominium Property Act the board has three options, and one of them requires notice and an opportunity for a hearing. Read it together with your declaration.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
    },
    {
      q: 'When should the snow contract be signed?',
      a: 'Before the season, commonly in September, with the service level written out.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
    },
    {
      q: 'How quickly can a manager reach a Lincolnwood building?',
      a: 'Our office is at 5107 N Western Ave in Chicago, a short drive from Lincolnwood. For building emergencies, the same phone number is answered 24/7.',
      post: 'condo-hoa-emergency-planning-checklist',
    },
  ],
  hasHighRises: false,
};
