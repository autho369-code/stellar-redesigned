/**
 * "Request a flat-fee proposal" blocks (ProposalCta) on the top compliance and
 * cost guides, and on the guides that already get search impressions. Each listed guide gets one mid-article card and one end block.
 *
 * - hook: the one sentence shown in the mid-article card.
 * - replacesClosing: the guide's own closing "contact us" sentence. The end
 *   block replaces it at render time so two calls to action never stack. The
 *   authored post is not edited; scripts/verify-content-silos.mjs fails the
 *   build if this text is no longer found in the post exactly once.
 */

export interface CtaPost {
  hook: string;
  replacesClosing?: string;
}

/**
 * Proposal turnaround, shown in the end block. Confirmed true by Mirsad on
 * 2026-11-26. Set to null to leave the clause out.
 */
export const PROPOSAL_TURNAROUND: string | null = 'within two business days';

export const ctaPosts: Record<string, CtaPost> = {
  'illinois-condo-hoa-collection-policy-january-2027': {
    hook: 'Does your board have a written collection policy ready for January 1, 2027? We help boards put a delinquency process into daily practice. Legal advice comes from your association’s counsel.',
  },
  'fannie-freddie-condo-reserve-15-percent-2027': {
    hook: 'Building the 2027 budget around the new lender reserve test? We help boards model reserves and budget lines before owners vote.',
  },
  'illinois-section-22-1-disclosure-board-guide': {
    hook: 'Tired of 22.1 requests landing on a volunteer? We can run the resale disclosure workflow for your association.',
    replacesClosing: ` <a href="/contact">Schedule a consultation</a> and we will review your current packet against your governing documents.`,
  },
  'chicago-condo-facade-compliance-board-guide': {
    hook: 'Not sure where your building stands on the facade schedule? We help boards track filings, inspections and repair bids.',
    replacesClosing: `<p><a href="/contact">Schedule a consultation</a> to review your association's facade planning readiness.</p>`,
  },
  'chicago-condo-association-compliance-calendar': {
    hook: 'Want the calendar run for you? We assign owners and due dates for every recurring obligation, and report to the board.',
    replacesClosing: ` <a href="/contact">Contact us</a> for a consultation and we will walk your board through building a compliance calendar it can actually maintain.`,
  },
  'illinois-condo-law-updates-2026': {
    hook: 'Keeping up with new Illinois requirements is a lot for volunteers. We help boards turn each change into a dated task.',
    replacesClosing: ` To talk through your association's needs, <a href="/contact">contact our team</a>.`,
  },
  'switch-condo-management-companies-chicago': {
    hook: 'Thinking about switching management companies? Our transition is a managed 30 to 60 day handover after your board signs.',
    replacesClosing: ` <a href="/contact">Request a private proposal consultation</a> to compare your current operating model with a transition plan built for your association.`,
  },
  'score-condo-hoa-management-proposals': {
    hook: 'Comparing proposals? Ask us for a written, flat-fee proposal so it scores cleanly against the others.',
    replacesClosing: ` <a href="/contact">Contact us</a> to schedule a consultation.`,
  },
  'condominium-property-management-chicago-what-board-members-should-expect': {
    hook: 'Want to see what this looks like in your building? Request a flat-fee proposal with a defined scope.',
    replacesClosing: `<p><strong><a href="/contact">Contact us today</a> to schedule a free consultation and learn why Chicago boards trust Stellar Property Management to manage their communities.</strong></p>`,
  },
  'illinois-condo-hoa-budget-adoption-guide': {
    hook: 'Budget season is easier with a second set of eyes. We help boards build and present the budget.',
    replacesClosing: ` <a href="/contact">Contact us</a> to schedule a consultation before your next budget cycle begins.`,
  },
  'reasonable-reserves-illinois-condo-law': {
    hook: 'Want help turning “reasonable reserves” into a defensible number? We work with boards and their reserve-study providers.',
    replacesClosing: ` If your condominium association is heading into budget season without a current reserve basis, <a href="/contact">schedule a consultation</a>.`,
  },
  // Added 2026-11-26 from the Search Console pull: guides that already get impressions.
  'condo-repairs-owner-vs-association-illinois': {
    hook: 'After you know who pays for a repair, the next question is who coordinates it. Request a flat-fee proposal and we will tell you how we handle work orders and vendor bids.',
    replacesClosing: ` Boards that want responsibility questions answered this cleanly every time can learn about our condominium management practice or <a href="/contact">request a proposal</a>.`,
  },
  'renting-out-your-condo-chicago-rules': {
    hook: 'Leasing rules are only half the job. If your board wants a manager who actually enforces them, request a flat-fee proposal.',
    replacesClosing: ` If your building's leasing file is a shoebox, <a href="/contact">we should talk</a>.`,
  },
  'can-condo-boards-enter-your-unit-illinois': {
    hook: 'Questions about unit access often come up during a management search. We can walk your board through how we handle notices and emergencies.',
    replacesClosing: ` — <a href="/contact">contact us</a> to learn more`,
  },
  'illinois-condo-board-elections-proxies-ballots': {
    hook: 'Election season is a lot for a volunteer board. We can run the calendar, notices and proxies with you.',
    replacesClosing: ` If an election is coming up and you want a second set of eyes, <a href="/contact">contact us</a>.`,
  },
  'amend-illinois-condo-declaration-section-27': {
    hook: 'Amending a declaration is a board project. If you also want a manager for the day-to-day work around it, request a flat-fee proposal.',
    replacesClosing: `<p>Planning an amendment? <a href="/contact">Talk with our team</a> before the vote is scheduled.</p>`,
  },
};

/** The guide body with its own closing contact sentence removed (see above). */
export function withoutClosingCta(slug: string, html: string): string {
  const closing = ctaPosts[slug]?.replacesClosing;
  if (!closing || !html.includes(closing)) return html;
  return html.replace(closing, '');
}

/**
 * Where the mid-article card goes: just before the top-level <h2> closest to
 * the middle of the guide. That spot is never directly under a heading and
 * never inside a list or a table. Returns null when no safe spot exists.
 */
export function splitForMidCta(html: string): [string, string] | null {
  const candidates = [...html.matchAll(/<h2[\s>]/g)]
    .map((match) => match.index!)
    .filter((index) => {
      const before = html.slice(0, index);
      if (/<\/h[1-6]>\s*$/.test(before)) return false;
      for (const tag of ['ul', 'ol', 'table', 'blockquote', 'figure']) {
        const opened = (before.match(new RegExp(`<${tag}[\\s>]`, 'g')) ?? []).length;
        const closed = (before.match(new RegExp(`</${tag}>`, 'g')) ?? []).length;
        if (opened !== closed) return false;
      }
      return index > html.length * 0.25 && index < html.length * 0.8;
    });
  if (!candidates.length) return null;

  const middle = html.length / 2;
  const at = candidates.reduce((best, index) => (Math.abs(index - middle) < Math.abs(best - middle) ? index : best));
  return [html.slice(0, at), html.slice(at)];
}
