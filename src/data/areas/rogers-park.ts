import type { AreaContent } from './types';

export const rogersPark: AreaContent = {
  slug: 'rogers-park',
  targetQuery: 'condo management rogers park chicago',
  title: 'Condo Management in Rogers Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Rogers Park boards: vintage courtyard buildings, rear porches and reserves. Flat fee from $30 per unit. Chicago office.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Rogers Park? Needed for the "Stellar manages N ..." sentence.
  managed: null,
  context:
    'Rogers Park is on Chicago’s far north side. Its housing is a mix of vintage courtyard condominium buildings and lakefront buildings of many ages and styles.',
  buildingTypes: [
    {
      name: 'Vintage courtyard condominium buildings',
      detail:
        'Brick walk-up buildings set around a shared court. For a small association, the rear porches are often the largest structural item the board looks after.',
    },
    // TODO(Jojo): confirm "Lakefront mid-rise and high-rise buildings near Sheridan Rd".
    // TODO(Jojo): confirm "Small brick buildings of roughly 6 to 24 units" and the typical range.
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Masonry, porches and decks',
      body:
        'Rear wood porches are part of almost every courtyard building, and they often serve as a required exit. The City of Chicago sets the rules for permits and inspections. A board should run the porches as a yearly program, not as a surprise.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'Chicago condo porch and deck safety guide',
    },
    {
      title: 'Water intrusion: who pays',
      body:
        'When water comes through a ceiling in a walk-up, the first question is not who caused it. Stop the water, document it, find the part that failed, then read the declaration. Insurance is a second, separate question.',
      post: 'who-pays-condo-water-leak-illinois',
      linkText: 'who pays for a condo water leak in Illinois',
    },
    {
      title: 'Capital planning for vintage buildings',
      body:
        'Age alone does not decide what is urgent. A capital plan starts with a list of the building’s components, their condition and their remaining life. Then it becomes a funding schedule the board reviews every year.',
      post: 'vintage-chicago-condo-capital-planning',
      linkText: 'capital planning for vintage Chicago condominium buildings',
    },
    {
      title: 'Setting reasonable reserves',
      body:
        'Illinois law does not give condo boards a fixed reserve percentage. The standard is what is reasonable for the association’s circumstances, so a courtyard building’s board should write down how it reached its number.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'reasonable reserves under Illinois condo law',
    },
    {
      title: 'Switching managers',
      body:
        'A board that is unhappy with its current firm should look for a pattern before it starts a search. Then it should review the contract and run a short, building-specific RFP. The guide gives the full sequence, through the handoff of records.',
      post: 'switch-condo-management-companies-chicago',
      linkText: 'how to switch condo management companies in Chicago',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Rogers Park, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only (public sidewalk or with a board's written
  // permission): a vintage brick courtyard building; a street scene near Sheridan Rd.
  photos: [],
  faqs: [
    {
      q: 'Who is responsible for the rear porches on a Rogers Park courtyard building?',
      a: 'In most Chicago condominiums the porches are common elements or limited common elements, so the association usually maintains, repairs and replaces them. Your declaration decides it for your building.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
    },
    {
      q: 'Does Illinois law set a reserve percentage for a vintage condo building?',
      a: 'No. The Illinois Condominium Property Act asks the board to budget reasonable reserves in light of the association’s circumstances. It does not set a fixed percentage.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Can our board change management companies before the contract ends?',
      a: 'It depends on the termination terms in the agreement your board signed. Review those terms with association counsel before the board announces a search.',
      post: 'switch-condo-management-companies-chicago',
    },
  ],
  hasHighRises: false,
};
