import { PROPOSAL_TURNAROUND } from './ctaPosts';

/** What the flat management fee covers. Shown on /pricing and in the homepage pricing teaser. */
export const includedServices = [
  'A dedicated association manager',
  'Monthly financial reporting and budget support',
  'Board meeting and governance support',
  'Vendor bidding, coordination, and performance follow-up',
  'Owner communications and online portal access',
  'Assessment collection and account administration',
  '24/7 emergency response coordination',
  'Capital-project planning and management oversight',
];

/** The three steps from first call to a managed building. Shown on the homepage and /pricing. */
export const switchSteps: Array<[string, string]> = [
  ['Tell us about your building', 'Unit count, age, amenities and what is not working today. A call or the short form is enough.'],
  ['Get a written flat-fee proposal', `We send it${PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}. It lists the scope and one monthly fee, so your board can compare it line by line.`],
  ['We run the handover', 'After your board signs, the move from your current manager is a managed 30 to 60 day transition.'],
];
