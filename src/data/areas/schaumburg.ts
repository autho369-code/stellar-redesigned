import type { AreaContent } from './types';

export const schaumburg: AreaContent = {
  slug: 'schaumburg',
  targetQuery: 'condo management schaumburg il',
  title: 'Condo Management in Schaumburg, IL | Stellar',
  metaDescription:
    'Condo and HOA management for Schaumburg boards: association rental licenses, detention inspections and 1970s quad and townhome stock. From $30 per unit.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Schaumburg? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Schaumburg is the most rental-heavy suburb on our list, with 37 percent of households renting and one home in five attached to its neighbor. Most of its housing went up in the 1970s and 1980s, and the village asks associations for annual paperwork that few other suburbs require.',
  housing: {
    intro:
      'The figures below are from the Census Bureau’s 2020 to 2024 American Community Survey, as summarized in the Chicago Metropolitan Agency for Planning’s Schaumburg snapshot.',
    stats: [
      { label: 'Median year a Schaumburg home was built', value: '1979' },
      { label: 'Homes built between 1970 and 1989', value: '20,002 (60.0%)' },
      { label: 'Attached single-family homes (townhomes)', value: '6,204 (18.6%)' },
      { label: 'Homes in buildings of 3 or 4 units (quads)', value: '4,900 (14.7%)' },
      { label: 'Homes in buildings of 5 to 19 units', value: '4,686 (14.1%)' },
      { label: 'Homes in buildings of 20 or more units', value: '5,300 (15.9%)' },
      { label: 'Renter-occupied households', value: '37.1%' },
      { label: 'Owner-occupied households', value: '62.9%' },
    ],
    takeaway:
      'The numbers add up to a suburb where about two in three homes are attached or in multi-unit buildings, and where the quad and townhome form is common. Rentals are routine, so an association’s rules and records need to work for tenants as well as owners.',
  },
  buildingTypes: [
    {
      name: 'Quadhomes and townhome clusters',
      detail:
        'The village’s own licensing categories name the condominium, quadhome and townhouse as separate rental types, and Census data show nearly 5,000 homes in three-or-four-unit buildings. These communities share a roofline and a drive, so one failed contractor affects several owners.',
    },
    {
      name: 'Garden condominium buildings',
      detail:
        'Buildings of five to nineteen units make up about one home in seven. Shared entries, flat roofs and parking lots are the usual long-range items.',
    },
    {
      name: 'Large apartment-style condominium buildings',
      detail:
        'About 5,300 homes are in buildings of twenty or more units. Staff time at these buildings goes to elevator, mechanical and life-safety contracts and the insurance renewal.',
    },
  ],
  issues: [
    {
      title: 'Annual association rental license',
      body:
        'The village requires associations that allow rentals to file an annual license and list each renting owner’s name, address, phone and email. A board that already keeps a current owner roster can complete the filing in a sitting. One that does not should start now.',
      post: 'illinois-condo-association-records-request-guide',
      linkText: 'keeping association records ready for owners and officials',
    },
    {
      title: 'Detention and stormwater features on private property',
      body:
        'Schaumburg inspects stormwater management features, including basins, underground detention, parking-lot detention and rain gardens, on a five-year rotating basis, and mails letters to affected owners. Make sure the letter reaches the board or the manager and that the maintenance line is in the budget.',
      post: 'reasonable-reserves-illinois-condo-law',
      linkText: 'funding long-term maintenance with reasonable reserves',
    },
    {
      title: 'Rules that work for a renter-heavy community',
      body:
        'With more than a third of households renting, parking, trash, noise and move-in rules are tested daily. Rules that apply equally to owners and tenants, adopted properly and enforced consistently, are easier to defend.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
      linkText: 'adopting and enforcing association rules',
    },
    {
      title: 'Collections when owners are landlords',
      body:
        'An investor who owns several units can fall behind on all of them at once. The collection policy should say who is notified, by when and what comes next, and it should be applied the same way to every owner.',
      post: 'illinois-condo-hoa-collection-policy-january-2027',
      linkText: 'the Illinois collection policy guide for associations',
    },
    {
      title: 'Short-term rentals',
      body:
        'The village licenses short-term rentals separately, with a higher fee, and a board can go further by banning them in its own documents. Check what your declaration says before an owner lists a unit.',
      post: 'illinois-association-fines-notice-hearing',
      linkText: 'fining owners with proper notice and hearing',
    },
  ],
  localItems: [
    {
      title: 'Association rental license',
      body:
        'Associations and apartment complexes must hold a rental license. If the association allows owners to rent, the application must list each owner’s details inside the application itself, because the village does not accept a separate file. The association fee is $75, rising to $112.50 if paid after January 1.',
    },
    {
      title: 'Individual condo, quadhome and townhouse licenses',
      body:
        'A renting owner of a condominium, quadhome or townhouse pays $75 a year, or $37.50 if the license starts after July 1, and completes the Crime Free Housing seminar. The village says inspections apply to single-family homes and short-term rentals rather than condos.',
    },
    {
      title: 'Short-term rentals',
      body:
        'The village’s fee schedule sets a short-term rental license at $300 a year, well above the $75 for a standard condo rental.',
    },
    {
      title: 'Detention inspection program',
      body:
        'The village inspects each site every five years, at no charge, and sends a follow-up inspection about 60 days after an inspection that finds required maintenance.',
    },
    {
      title: 'Cook County reassessment',
      body:
        'Schaumburg is in the north and northwest suburban reassessment group, last reassessed in 2025 and scheduled again for 2028.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Does a Schaumburg condominium association need a rental license?',
      a: 'Yes, if it allows owners to rent. The village requires an annual association rental license at $75 and asks for each renting owner’s name, address, phone and email in the application.',
      post: 'illinois-condo-association-records-request-guide',
    },
    {
      q: 'Do individual condo owners need a license too?',
      a: 'Yes. An owner who rents a condominium, quadhome or townhouse needs an annual license at $75, prorated after July 1, and must complete the village’s Crime Free Housing seminar.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'What is a quadhome?',
      a: 'A building of four attached units under one roof, usually with separate entries. Census data count nearly 5,000 homes in three-or-four-unit buildings in Schaumburg, and the village licenses them as a rental type of their own.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
    },
    {
      q: 'Does the village inspect our detention basin?',
      a: 'Yes. Its detention inspection program covers basins, underground and parking-lot detention, rain gardens and flow-control structures, on a five-year rotation, with no fee for the inspection.',
      post: 'reasonable-reserves-illinois-condo-law',
    },
    {
      q: 'Can a board ban short-term rentals?',
      a: 'If the declaration or properly adopted rules allow it. The village licenses short-term rentals at $300 a year, but that does not override a stricter rule in your governing documents.',
      post: 'adopting-enforcing-condo-hoa-rules-illinois',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Schaumburg community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Schaumburg.pdf' },
    { label: 'Schaumburg rental license', href: 'https://www.villageofschaumburg.com/government/finance/license/rental-license' },
    { label: 'Schaumburg detention inspection program', href: 'https://www.villageofschaumburg.com/government/engineering-and-public-works/water-sewer/programs/detention-inspection-program' },
    { label: 'Cook County Assessor’s Office', href: 'https://www.cookcountyassessoril.gov/' },
  ],
};
