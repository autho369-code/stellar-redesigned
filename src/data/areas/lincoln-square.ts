import type { AreaContent } from './types';

export const lincolnSquare: AreaContent = {
  slug: 'lincoln-square',
  targetQuery: 'condo management lincoln square chicago',
  title: 'Condo Management in Lincoln Square, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lincoln Square boards from our office in the 60625 ZIP code. Courtyard buildings and townhomes. Flat fee from $30 per unit.',
  // Per-area managed counts are company-private (owner decision, Nov 27, 2026), so this stays null and nothing is shown.
  managed: null,
  context:
    'Lincoln Square is centered on its town square. The neighborhood has a mix of vintage courtyard buildings and newer townhome developments, and our office shares its 60625 ZIP code. Our Lincoln Square service area also covers Bowmanville, Budlong Woods and Arcadia Terrace.',
  housing: {
    intro:
      'Lincoln Square is Community Area 4. The numbers below are Census Bureau American Community Survey estimates for 2020 to 2024, as compiled by the Chicago Metropolitan Agency for Planning, and describe the whole community area, including Bowmanville and Budlong Woods.',
    stats: [
      { label: 'Midpoint year of home construction', value: '1944' },
      { label: 'Homes older than 1940', value: '9,812 (46.3%)' },
      { label: 'Homes dating from 2010 or later', value: '977 (4.6%)' },
      { label: 'Two-unit buildings (homes)', value: '2,798 (13.2%)' },
      { label: 'Three- and four-unit buildings (homes)', value: '4,301 (20.3%)' },
      { label: 'Owner-occupied homes', value: '8,092 (40.7%)' },
      { label: 'Five-to-nine-unit buildings (homes)', value: '4,692 (22.2%)' },
      { label: 'Renter-occupied homes', value: '11,779 (59.3%)' },
    ],
    takeaway:
      'Nearly half of Lincoln Square’s homes (46.3 percent) were built before 1940, and more than half sit in buildings of three to nineteen units. Associations here are mostly small, which makes the roof, the boiler and the masonry calendar the decisions that matter most.',
  },
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
  localItems: [
    {
      title: 'Garbage collection by building size',
      body:
        'City crews collect from buildings of up to four units, and those units pay the monthly garbage fee. A courtyard building of five or more units contracts with a private hauler instead.',
    },
    {
      title: 'Rear porches',
      body:
        'A Chicago porch must be built to carry 100 pounds per square foot, repairs that touch the structure need a permit and stamped plans, and inspections follow complaints to 311. Courtyard buildings often have several stacked porches on one structure.',
    },
    {
      title: 'Reassessment',
      body:
        'Chicago was reassessed in 2024, and the next reassessment of the city is 2027.',
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
    {
      q: 'Does a courtyard building have to repair stacked porches all at once?',
      a: 'Not necessarily, but they usually share one structure, so the engineer’s report decides the order. A permit with stamped plans is needed for structural work, and a phased plan can spread the cost over several budget years.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
    {
      q: 'Do we pay the City garbage fee for a six-unit courtyard building?',
      a: 'No. The City serves buildings of up to four units. A building above that size hires a private hauler and pays that contract from the association budget.',
      post: 'condo-hoa-annual-budget-workbook',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Lincoln Square community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincoln-Square.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Chicago porch safety and permits', href: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/porch-safety.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
