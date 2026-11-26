import type { AreaContent } from './types';

export const northbrook: AreaContent = {
  slug: 'northbrook',
  targetQuery: 'hoa management northbrook il',
  title: 'HOA & Condo Management in Northbrook, IL | From $30/Unit',
  metaDescription:
    'HOA, townhome and condo management for Northbrook boards: roofing, siding and private road projects, bids and reserves. Flat fee from $30 per unit a month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Northbrook? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Northbrook has a large number of townhome and condominium associations built from the 1970s to today. Many are reaching the years when roofing, siding, windows, private roads and common lighting need replacement close together.',
  buildingTypes: [
    {
      name: 'Townhome communities',
      detail:
        'Communities with private drives, drainage areas, mature landscaping and shared exteriors that all need a seasonal vendor and a long-term plan.',
    },
    {
      name: 'Condominium associations',
      detail:
        'Buildings where the board wants comparable bids, documented approvals and progress reports on every large project.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Overlapping replacement cycles',
      body:
        'When roofs, siding and roads come due in the same few years, order matters. Turn the reserve study into a phased calendar, so owners see each project and its cost coming. Publish the calendar, so no owner is surprised by a crew at the door.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves and how to plan them',
    },
    {
      title: 'Bids a board can compare',
      body:
        'Large exterior projects need one written scope, one insurance standard and one bid form. Record why the board chose a contractor, and keep it with the minutes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'a vendor RFP checklist for large projects',
    },
    {
      title: 'Borrowing for a road or roofing project',
      body:
        'If a project is financed, the lender studies assessment income and how the association is run. Clean books and current minutes help long before the application. Ask the lender early which documents it will need.',
      post: 'condo-hoa-capital-project-loan-preparation',
      linkText: 'what a lender wants before an association loan',
    },
    {
      title: 'The 2027 lender reserve test',
      body:
        'For condominium loan applications dated January 4, 2027 or later, Fannie Mae and Freddie Mac look for 15% of budgeted assessment income going to reserves, up from 10%. A project-heavy budget should be checked against it.',
      post: 'fannie-freddie-condo-reserve-15-percent-2027',
      linkText: 'the 15% reserve rule that starts in 2027',
    },
    {
      title: 'Telling owners about a large budget change',
      body:
        'A year with a big project needs earlier notice and plainer words. Follow the same calendar every year, so the vote is never the first time owners hear the number.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'a budget adoption calendar for boards',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Northbrook townhome community from the public street; a private drive entrance (public view).
  photos: [],
  faqs: [
    {
      q: 'How should a Northbrook association pay for roofs, siding and roads?',
      a: 'Start with the reserve study and a phased calendar. Decide what reserves cover, what needs a special assessment or a loan, and show owners the plan before any vote.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'What makes contractor bids comparable?',
      a: 'One written scope, the same insurance requirements and the same bid form for every contractor. Without that, the lowest price may describe a smaller job.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Can an association borrow for a capital project?',
      a: 'Associations do borrow for large projects. Lenders underwrite on assessment income and governance quality, and a board can improve both before it applies.',
      post: 'condo-hoa-capital-project-loan-preparation',
    },
  ],
  hasHighRises: false,
};
