import type { AreaContent } from './types';

export const hydePark: AreaContent = {
  slug: 'hyde-park',
  targetQuery: 'condo management hyde park chicago',
  title: 'Condo Management in Hyde Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Hyde Park boards: lakefront high-rises, vintage masonry, facade reports and leasing. Flat fee from $30 per unit per month.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Hyde Park? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Hyde Park is anchored by the University of Chicago and known for architecturally significant buildings. East Hyde Park has towers along Lake Park Avenue and South Shore Drive, and vintage masonry condominium buildings are common across the neighborhood.',
  buildingTypes: [
    {
      name: 'East Hyde Park towers',
      detail:
        'East Hyde Park towers combine elevators, staffed entries, life-safety systems and lakefront weather exposure.',
    },
    {
      name: 'Vintage masonry condominium buildings',
      detail:
        'Older buildings whose facades, roofs, windows, risers, boilers and elevators each need a place in the capital plan.',
    },
  ],
  issues: [
    // Each issue rests on the linked guide. Owner has not confirmed them from experience; wording stays general.
    {
      title: 'Facade inspections for towers',
      body:
        'The City of Chicago exterior wall program applies to buildings 80 feet or taller. Ask the City and a licensed architect or structural engineer which inspection cycle and filing dates apply to your tower, then spread the repair budget over several years.',
      post: 'chicago-condo-facade-compliance-board-guide',
      linkText: 'facade compliance for Chicago condo boards',
    },
    {
      title: 'Water leaks in older buildings',
      body:
        'In an older building one failed riser can reach several units. Who pays is decided by the declaration, so read it before the board or an owner promises anything.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'which documents decide who pays for a water leak',
    },
    {
      title: 'Capital planning in older masonry buildings',
      body:
        'Vintage buildings have finite systems. A capital plan puts each one on a calendar with a funding source, so the board schedules projects and does not wait for failures.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condo buildings',
    },
    {
      title: 'Leasing rules',
      body:
        'An owner may lease a unit only as far as the governing documents allow. Many Chicago condominiums use rental caps, minimum lease terms or board approval. The board should apply its own rules the same way every time.',
      post: 'renting-out-your-condo-chicago-rules',
      linkText: 'Chicago condo leasing rules for owners and boards',
    },
    {
      title: 'Board elections',
      body:
        'Contested elections are usually lost on process, not on votes: a proxy form that lists only the incumbents, a candidate deadline nobody announced, or a count no candidate could watch. Set the calendar and the forms before nominations open.',
      post: 'illinois-condo-board-elections-proxies-ballots',
      linkText: 'nominations, proxies and secret ballots in Illinois condo elections',
    },
  ],
  // TODO(Jojo): typical monthly fee range from real recent proposals. Never estimate; never below the $30 starting fee.
  feeRanges: null,
  // TODO(Jojo): real photos only (public view): a Hyde Park courtyard or mid-rise from the sidewalk; a neighborhood street.
  photos: [],
  faqs: [
    {
      q: 'What usually goes wrong in a contested condo board election?',
      a: 'Process, more often than votes. Common problems are a proxy form that lists only the incumbents, a candidate deadline that was never announced, and a ballot count that candidates were not allowed to watch.',
      post: 'illinois-condo-board-elections-proxies-ballots',
    },
    {
      q: 'Can a condo board limit rentals in the building?',
      a: 'Leasing limits live in the governing documents. Many Chicago condominiums restrict leasing with rental caps, minimum lease terms or board approval. Have association counsel review any change before the board acts.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'How should a vintage building plan its large repairs?',
      a: 'List the major systems, estimate when each will need work, and tie each project to a funding source. A capital plan turns surprise emergencies into scheduled, funded projects.',
      post: 'vintage-chicago-condo-capital-planning',
    },
  ],
  hasHighRises: true,
};
