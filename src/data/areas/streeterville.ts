import type { AreaContent } from './types';

export const streeterville: AreaContent = {
  slug: 'streeterville',
  targetQuery: 'condo management streeterville chicago',
  title: 'Condo Management in Streeterville, Chicago | From $30/Unit',
  metaDescription:
    'Condo management for Streeterville boards: high-rise staff and systems, life safety, facade cycles and mixed-use towers. Flat fee from $30 per unit.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Streeterville? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Streeterville is a lakefront neighborhood of high-rises next to the Magnificent Mile and Northwestern’s downtown campus. Towers here often have hundreds of units, engineers, door staff and several elevators, and some stack residences above hotels, retail and parking.',
  buildingTypes: [
    {
      name: 'Large residential towers',
      detail:
        'Buildings with on-site staff and building systems that run around the clock. Reporting and staffing have to match that scale. A change of shift should never be the reason a problem is missed.',
    },
    {
      name: 'Mixed-use towers near Michigan Avenue',
      detail:
        'Residences above hotels, shops and parking, where shared-facility agreements divide the costs. Review those agreements whenever a commercial neighbor changes.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Life-safety planning',
      body:
        'What applies to a tower depends on its height, age, construction and existing systems. Start from a written, building-specific statement by a fire-protection engineer or life-safety consultant, and report progress to owners. Door staff and engineers should each know their part of the plan.',
      post: 'chicago-condo-life-safety-board-planning',
      linkText: 'life-safety planning for a Chicago high-rise board',
    },
    {
      title: 'The exterior wall cycle',
      body:
        'Buildings 80 feet or taller are in the City of Chicago exterior wall program. Put the examination and filing dates on the board calendar, and fund the repairs over several years. Scaffolding and sidewalk canopies affect residents and neighbors, so tell them early.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'keeping a tower on its facade schedule',
    },
    {
      title: 'Contracts at tower scale',
      body:
        'Elevator, mechanical and staffing contracts are large enough to deserve a formal request for proposals. One scope and one insurance standard let the board compare the bids fairly. Ask each bidder how it will staff a building that never closes.',
      post: 'condo-hoa-vendor-rfp-checklist',
      linkText: 'running a formal vendor RFP',
    },
    {
      title: 'A budget hundreds of owners will read',
      body:
        'In a large tower the budget notice reaches hundreds of households. Keep to a fixed calendar and explain every change in plain words before the board votes. A one-page summary on top of the full budget helps owners who will not read the detail.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
      linkText: 'how a large association adopts its budget',
    },
    {
      title: 'Resale packets at volume',
      body:
        'A tower sees many resales a year. Section 22.1 of the Illinois Condominium Property Act governs what the association provides, so the packet should be ready before the request arrives. Track how long each packet takes, and fix the slowest step.',
      post: 'illinois-section-22-1-disclosure-board-guide',
      linkText: 'handling Section 22.1 requests',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): the Streeterville skyline from a public street; a tower entrance from the sidewalk.
  photos: [],
  faqs: [
    {
      q: 'Which Streeterville buildings fall under the exterior wall program?',
      a: 'The City of Chicago program covers buildings 80 feet or more in height. Confirm your building’s cycle and filing dates with the City and a licensed structural engineer or architect.',
      post: 'chicago-condo-facade-compliance-board-guide',
    },
    {
      q: 'Where should a high-rise board start on life safety?',
      a: 'With a written statement of what applies to your building, prepared by a qualified fire-protection engineer or life-safety consultant. The requirements depend on height, age, construction and existing systems.',
      post: 'chicago-condo-life-safety-board-planning',
    },
    {
      q: 'How does a mixed-use tower split shared costs?',
      a: 'The recorded agreements between the residential and commercial parts set the split. Have association counsel and the accountant confirm how each shared cost is allocated.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
    {
      q: 'How does a tower board keep track of staff, vendors and projects?',
      a: 'With one monthly report that shows open work orders, contract dates, project status and the budget against actual spending. The board should be able to read it in one sitting.',
      post: 'illinois-condo-hoa-budget-adoption-guide',
    },
  ],
  hasHighRises: true,
};
