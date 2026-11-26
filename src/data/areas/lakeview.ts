import type { AreaContent } from './types';

export const lakeview: AreaContent = {
  slug: 'lakeview',
  targetQuery: 'condo management lakeview chicago',
  title: 'Condo Management in Lakeview, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Lakeview boards, from Wrigleyville to Lakeview East: leasing rules, short-term rentals, porches. Flat fee from $30 per unit.',
  // TODO(Jojo): how many associations and about how many units does Stellar
  // manage in or near Lakeview?
  managed: null,
  context:
    'Lakeview is a lakefront neighborhood with vintage courtyard buildings, mid-rises and newer construction. It includes Wrigleyville, Northalsted (Boystown) and Lakeview East along the harbor. Buildings near Wrigley Field live with 81 home games a season, plus concerts and street festivals.',
  buildingTypes: [
    {
      name: 'Vintage courtyard buildings',
      detail:
        'Walk-up buildings with rear wood porches and shared masonry. The porches and the masonry are the board’s main structural items.',
    },
    {
      name: 'Mid-rises',
      detail:
        'Elevator buildings with more units and more shared systems for the board to budget for.',
    },
    {
      name: 'Newer construction',
      detail:
        'Newer condominium buildings with modern systems. The board’s work is keeping the reserve plan and the rules current.',
    },
  ],
  issues: [
    // TODO(Jojo): confirm each issue from real experience; delete any that do not fit.
    {
      title: 'Porch and deck safety',
      body:
        'A porch on a courtyard walk-up often serves as a required exit. The guide covers when a building permit is needed, what a City inspector checks, and a yearly porch checklist for the board.',
      post: 'chicago-condo-porch-deck-safety-board-guide',
      linkText: 'porch and deck safety for Chicago condo boards',
    },
    {
      title: 'Renting out units',
      body:
        'Leasing runs through two rulebooks: the association’s governing documents and the City’s rental ordinances. Many Chicago condominiums limit leasing with rental caps, minimum lease terms or board approval.',
      post: 'renting-out-your-condo-chicago-rules',
      linkText: 'the rules for renting out a Chicago condo',
    },
    {
      title: 'Short-term rentals',
      body:
        'Under Chicago’s Shared Housing Ordinance a building can be placed on the City’s Prohibited Buildings List. For a condominium, that request comes from the association. The guide explains how this differs from fining one owner at a time.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
      linkText: 'Chicago’s Prohibited Buildings List for short-term rentals',
    },
    {
      title: 'EV charging requests',
      body:
        'A written process answers four questions once: does the building have electrical capacity, who pays for the electricity, who owns and maintains the equipment, and what happens when the owner sells the unit.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
      linkText: 'an EV charging process for Illinois association boards',
    },
    {
      title: 'Insurance renewals',
      body:
        'Start roughly 90 to 120 days before the policy expires. Have counsel confirm the insurance your documents and the statute require, and work with a licensed broker who knows Illinois community associations.',
      post: 'condo-hoa-insurance-renewal-checklist',
      linkText: 'insurance renewal checklist for association boards',
    },
  ],
  // TODO(Jojo): typical monthly fee range for a 12-, 24- and 48-unit building
  // in Lakeview, from real recent proposals. Never estimate.
  feeRanges: null,
  // TODO(Jojo): real photos only: a vintage courtyard building (public view);
  // a mid-rise on a Lakeview block; optional, the harbor area in Lakeview East.
  photos: [],
  faqs: [
    {
      q: 'Can our Lakeview building stop short-term rentals?',
      a: 'Chicago’s Shared Housing Ordinance lets a building be placed on the City’s Prohibited Buildings List. That makes short-term rental activity in the building unlawful under City rules, not only a breach of the declaration. For a condominium, the association makes the request.',
      post: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    },
    {
      q: 'Can an owner rent out a condo in Lakeview?',
      a: 'Only if the association’s governing documents allow it. Many Chicago condominiums limit leasing with rental caps, minimum lease terms or board approval. Ask for the current leasing rules in writing before listing the unit.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'How should the board handle an owner’s request for an EV charger?',
      a: 'With one written process. It should settle whether the building has electrical capacity, who pays for the electricity, who owns and maintains the equipment, and what happens when the owner sells the unit.',
      post: 'illinois-condo-hoa-ev-charging-board-process',
    },
  ],
  hasHighRises: true,
};
