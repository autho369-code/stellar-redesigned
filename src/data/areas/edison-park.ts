import type { AreaContent } from './types';

export const edisonPark: AreaContent = {
  slug: 'edison-park',
  targetQuery: 'condo management edison park chicago',
  title: 'Condo Management in Edison Park, Chicago | From $30/Unit',
  metaDescription:
    'Condo and HOA management for Edison Park boards: small garden buildings and townhomes on Chicago’s far northwest edge. Flat fee from $30 per unit a month.',
  // TODO(Mirsad): how many associations and about how many units does Stellar
  // manage in or near Edison Park? Until then the page says "we serve boards here".
  managed: null,
  context:
    'Edison Park is Chicago’s far northwest corner, a village-like neighborhood along Northwest Highway with a mostly residential street grid. Its condominium buildings are small garden-style complexes mixed among single-family blocks.',
  housing: {
    intro:
      'Edison Park is Community Area 9. These figures come from the Census Bureau’s American Community Survey as prepared by the Chicago Metropolitan Agency for Planning, and cover all of the community area.',
    stats: [
      { label: 'Median year a home was built', value: '1953' },
      { label: 'Homes built from 1940 through 1969', value: '48.4%' },
      { label: 'Homes built before 1940', value: '29.9%' },
      { label: 'Detached single-family houses', value: '65.1%' },
      { label: 'Homes in buildings of five to nine units', value: '16.0%' },
      { label: 'Homes in buildings of three or four units', value: '7.1%' },
      { label: 'Households that own', value: '81.2%' },
      { label: 'Households that rent', value: '18.8%' },
    ],
    takeaway:
      'Edison Park is overwhelmingly owner-occupied, and its multi-unit buildings are concentrated in the five-to-nine-unit range, which is a larger share than in nearby Portage Park or Irving Park. With owners who mostly live in the building, records and communication are the first things worth formalizing.',
  },
  buildingTypes: [
    {
      name: 'Garden courtyard buildings',
      detail:
        'Two- and three-story buildings of five to nine units around a shared lawn. Landscaping, snow and parking lots are budget lines in their own right.',
    },
    {
      name: 'Townhome groups',
      detail:
        'Attached homes with shared walls, drives and a small homeowners association. Boards must confirm which Illinois statute governs.',
    },
    {
      name: 'Mixed buildings near Northwest Highway',
      detail:
        'Buildings with residential units above commercial space, where the declaration needs to say which costs belong to which use.',
    },
  ],
  issues: [
    {
      title: 'Snow, salt and lot maintenance',
      body:
        'Lots and walks make snow removal a major line in a garden building’s budget. A written contract, with triggers and response times, avoids disputes over invoices.',
      post: 'illinois-condo-hoa-snow-removal-vendor-guide',
      linkText: 'an Illinois snow removal vendor guide for condo and HOA boards',
    },
    {
      title: 'Keeping fees and interest in policy',
      body:
        'An adopted late-fee and interest policy makes collections routine rather than personal.',
      post: 'illinois-association-late-fees-interest-policy',
      linkText: 'late fee and interest policy for Illinois associations',
    },
    {
      title: 'Liens as a last step',
      body:
        'A recorded lien secures the association’s claim when a unit is sold or refinanced. The guide explains timing, notice and release.',
      post: 'illinois-condo-association-liens-delinquency',
      linkText: 'liens and delinquency under Illinois condo law',
    },
    {
      title: 'Enforcing rules evenly',
      body:
        'A written enforcement process helps the board treat every owner the same, which is the strongest defense when a rule is challenged.',
      post: 'are-hoa-condo-rules-enforceable-illinois',
      linkText: 'whether HOA and condo rules are enforceable in Illinois',
    },
    {
      title: 'Townhome or condominium: which statute applies',
      body:
        'The answer controls how the board can raise assessments, hold meetings and collect. The guide gives a quick test and then points to the right statute.',
      post: 'which-illinois-law-governs-condo-hoa-townhome',
      linkText: 'which Illinois law governs a condo, HOA or townhome',
    },
  ],
  localItems: [
    {
      title: 'City garbage service stops at four units',
      body:
        'Edison Park is inside the City of Chicago, so its garbage rules are the City’s. Crews collect from single-family homes and buildings of four units or fewer. A building of five or more units, the most common multi-unit size here, must contract a private hauler.',
    },
    {
      title: 'Energy benchmarking threshold',
      body:
        'Chicago requires residential buildings of 50,000 square feet or more to report their energy and water use each year by June 1 through ENERGY STAR Portfolio Manager. Most small garden buildings fall below that size.',
    },
    {
      title: 'Reassessment',
      body:
        'The City of Chicago was reassessed in 2024 and is due again in 2027. Neighboring Park Ridge is on the north-suburban cycle, last reassessed in 2025.',
    },
  ],
  feeRanges: null,
  photos: [],
  faqs: [
    {
      q: 'Why does Edison Park’s reassessment year differ from Park Ridge’s?',
      a: 'Cook County reassesses the City of Chicago and the suburbs on separate cycles. Chicago was reassessed in 2024 and the north and northwest suburbs in 2025.',
      post: 'cook-county-property-tax-appeal-condo-association',
    },
    {
      q: 'Does the City pick up garbage at my five-unit building?',
      a: 'No. Chicago’s service covers buildings of four units or fewer, so a five-unit building contracts privately.',
      post: 'condo-hoa-vendor-rfp-checklist',
    },
    {
      q: 'Can the board set leasing limits in a mostly owner-occupied building?',
      a: 'If the declaration allows it. The guide explains how leasing rules and caps work and how they have to be adopted.',
      post: 'renting-out-your-condo-chicago-rules',
    },
    {
      q: 'Who is liable if a tree limb damages a car in the lot?',
      a: 'That depends on the cause, on the building’s insurance and on the declaration. The guide covers common allocations between owners and the association.',
      post: 'illinois-condo-insurance-deductible-charge-owner',
    },
    {
      q: 'What happens at the first meeting with a new manager?',
      a: 'We review the declaration, the budget and the current contracts. The pricing page explains what the monthly fee includes.',
      post: 'community-association-management-agreement-review',
    },
  ],
  hasHighRises: false,
  sources: [
    { label: 'Edison Park community data snapshot (CMAP, 2020 to 2024 ACS)', href: 'https://cmap.illinois.gov/wp-content/uploads/dlm_uploads/Edison-Park.pdf' },
    { label: 'City of Chicago garbage collection eligibility', href: 'https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/grid-garbage-collection.html' },
    { label: 'Chicago Energy Benchmarking', href: 'https://www.chicago.gov/city/en/depts/env/supp_info/energy-benchmarking.html' },
    { label: 'Cook County property tax system and reassessment schedule', href: 'https://www.cookcountyassessoril.gov/cook-county-property-tax-system' },
  ],
};
