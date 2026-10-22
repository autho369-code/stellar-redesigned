import type { BlogPost } from './index';

// Batch added 2026-10-21 for the late-October daily cadence.
//
// Editorial rule for this file: every legal number below was checked against
// the statute text on ilga.gov (Condominium Property Act 765 ILCS 605, Common
// Interest Community Association Act 765 ILCS 160, General Not For Profit
// Corporation Act 805 ILCS 105) in October 2026. Where the statute is silent,
// the post says so and sends the board to association counsel instead of
// guessing. P.A. 104-797 (eff. 1-1-27) amends Sections 18 and 1-30 but does not
// change any provision quoted in these posts.
export const scheduledOct2026GovernancePosts: BlogPost[] = [
  {
    slug: 'illinois-condo-board-elections-proxies-ballots',
    title: 'Illinois Condo Board Elections: Nominations, Proxies and Secret Ballots',
    metaDescription:
      'How Illinois condo board elections work under Section 18: candidate deadlines, proxy rules, ballot-only elections, secret ballots, and the HOA differences.',
    date: '2026-10-24',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'Most contested condo elections are not lost on votes. They are lost on process: a proxy form that only lists the incumbents, a candidate deadline nobody announced, or a ballot count no candidate was allowed to watch.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Sections 18 and 19 (765 ILCS 605/18, 605/19)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act, Section 1-25 (765 ILCS 160/1-25)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>Board elections are the one moment every year when owners directly decide who runs the building. They are also where Illinois associations most often get into avoidable disputes, because the Condominium Property Act sets specific rules for proxies, ballots and candidate information that many sets of bylaws were written before. This guide walks through the questions boards ask most, with the statutory answer first.</p>

      <p>One distinction before anything else: condominiums are governed by the Illinois Condominium Property Act (765 ILCS 605). Most single-family HOAs and many townhome communities are governed by the Common Interest Community Association Act, or CICAA (765 ILCS 160). The election rules are similar in spirit but differ in the details, and those differences are noted below.</p>

      <h2>Who can serve on an Illinois condo board, and for how long?</h2>

      <p>Under Section 18(a)(1), directors are elected from among the unit owners, at large, and the terms of at least one-third of the board must expire each year. Where a unit has several owners, only one may serve at a time. Section 18(a)(11) caps any single term at two years, though directors may be re-elected. For CICAA communities, Section 1-25(d) allows terms of up to four years.</p>

      <p>Section 18(a)(1) also allows newer declarations, or amendments adopted under Section 27, to require that a majority of the board be owners who live in their units as their primary residence. The instruments cannot require more than a majority. If your bylaws contain a residency rule, confirm with counsel that it was adopted in a way the statute recognises.</p>

      <h2>When must the election be held, and how much notice do owners get?</h2>

      <p>Condominium owners must hold an annual meeting, and one of its purposes is electing directors (Section 18(b)(3)). Written notice of any membership meeting must give owners no less than 10 and no more than 30 days' notice of the time, place and purpose (Section 18(b)(6)). CICAA communities must hold an election at least once every 24 months (Section 1-25(a)).</p>

      <p>For condominiums with 20 or more units, the quorum is 20% of the unit owners unless owners holding a majority of the percentage interest have set a higher figure (Section 18(b)(1)). Voting is on a percentage-interest basis unless the Act or bylaws say otherwise (Section 18(b)(7)). CICAA sets a 20% quorum unless the community instruments set a lower one (Section 1-40(b)(1)).</p>

      <h2>Can owners vote by proxy in an Illinois condo election?</h2>

      <p>Yes, by default. Section 18(b)(9)(A) allows a written proxy executed by the owner or their attorney-in-fact. The proxy must be dated, and unless the condominium instruments or the proxy itself say otherwise, it expires 11 months after it was signed. Where the instruments or rules expressly allow it, a vote or proxy can be submitted electronically.</p>

      <p>If the board distributes the proxy form, Section 18(a)(18) imposes two requirements that are routinely missed. The form must let the owner name <strong>any person</strong> as proxy holder, not only a board member or the manager. And it must let the owner express a preference for any of the known candidates or write in a name. A board-distributed proxy that only allows the owner to hand their vote to the current president does not comply.</p>

      <h2>How does an association switch to ballot-only elections?</h2>

      <p>Under Section 18(b)(9)(B), proxies can be eliminated for board elections if the declaration or bylaws provide for it, or if the board adopts a rule at least 120 days before the election. Owners then vote only with an association-issued ballot, either in person or delivered by mail or another method the documents or rule specify.</p>

      <p>The ballot process has fixed timing:</p>

      <ul>
        <li>Ballots go out <strong>not less than 10 and not more than 30 days</strong> before the election meeting.</li>
        <li>Owners receive <strong>at least 21 days' written notice</strong> of the deadline for getting a candidate's name on the ballot.</li>
        <li>That candidate deadline can be <strong>no more than 7 days</strong> before the ballots are distributed.</li>
        <li>Every ballot lists all candidates who gave timely written notice and allows write-in votes.</li>
        <li>Ballots received after voting closes are not counted.</li>
        <li>An owner who mailed a ballot may still vote in person at the meeting, which voids the earlier ballot.</li>
      </ul>

      <p>Owners have a check on that rule. If owners holding at least 20% of the votes petition the board within 30 days after it adopts the ballot rule, the board must call an owners' meeting within 30 days of the petition. The rule stands unless a majority of the total votes is cast to reject it (Section 18(b)(9)(C)). Ballots count toward quorum (Section 18(b)(9)(D)). Section 18(b)(9)(B-5) sets a parallel process for voting by electronic or other acceptable technological means.</p>

      <h2>Can the election be a secret ballot?</h2>

      <p>Yes. Section 18(b)(10) allows the association, once the board adopts appropriate rules, to hold elections by secret ballot, where the ballot shows only the unit's percentage interest and the vote. The board must also adopt rules for verifying that the person issuing a proxy or casting a ballot is actually the owner. And any candidate, or the candidate's representative, has the right to be present when ballots are counted.</p>

      <p>That last point matters more than it sounds. Most election complaints we see are not about the result but about who counted, where, and whether anyone could watch. Letting candidates observe is not optional, so plan the count for a room and a time that makes it practical.</p>

      <h2>Can the board send out candidate biographies?</h2>

      <p>Yes, with conditions. Under Section 18(a)(17), the board may circulate biographical and background information about candidates only if it makes reasonable efforts to identify all candidates, gives every candidate the opportunity to include information, and does not express a preference for any candidate. An incumbent board that sends owners a letter endorsing its own slate on association letterhead is outside that permission.</p>

      <h2>How long must ballots and proxies be kept?</h2>

      <p>Section 19(a)(8) requires the association to keep ballots and proxies for all matters voted on by owners during the immediately preceding 12 months, including board elections, as part of the records owners may request. Build that retention into your election checklist rather than leaving envelopes in the manager's office.</p>

      <h2>What is different for an HOA under CICAA?</h2>

      <p>CICAA's election section is shorter. Elections follow the community instruments, held at least every 24 months, with terms of up to four years (Section 1-25(a) and (d)). Members may vote by dated written proxy, valid for up to 11 months unless the instruments or proxy say otherwise, by association-issued ballot in person or by mail, or by electronic or acceptable technological means (Section 1-25(h-5)). If the board adopts rules for electronic elections, members may not vote by proxy in those board elections (Section 1-25(i)).</p>

      <p>CICAA also gives members a remedy if the election does not happen. If no election is held within the time in the bylaws, or within a reasonable time not exceeding 90 days afterward, 20% of the members may sue to compel one, and may recover attorney's fees if the court finds bad faith by the board. That does not apply where proper notice was given and the election failed only for lack of quorum (Section 1-25(g)). Smaller CICAA communities may be exempt from parts of the Act under Section 1-75; counsel can confirm whether yours is.</p>

      <h2>A practical election checklist for Illinois boards</h2>

      <ol>
        <li><strong>Read your bylaws against Section 18 now,</strong> not in the month before the meeting. Provisions contrary to Section 18 are void, and missing ones are read in by law.</li>
        <li><strong>Decide proxy or ballot early.</strong> A ballot-only rule must be adopted at least 120 days before the election, and owners have 30 days to petition against it.</li>
        <li><strong>Set and publish the candidate deadline</strong> with at least 21 days' written notice, no more than 7 days before ballots go out.</li>
        <li><strong>Check the proxy or ballot form:</strong> any person as proxy holder, all known candidates listed, a write-in line.</li>
        <li><strong>Circulate candidate information evenhandedly</strong> or not at all.</li>
        <li><strong>Send the meeting notice 10 to 30 days ahead</strong> with time, place and purpose.</li>
        <li><strong>Plan the count</strong> so candidates or their representatives can attend, and verify owner status before counting.</li>
        <li><strong>Retain ballots and proxies</strong> for at least 12 months.</li>
      </ol>

      <p>Elections run smoothly when the process is boring: published deadlines, compliant forms, an observable count. Our <a href="/services/board-support">board support team</a> prepares election calendars, notices and ballot packages for Chicago and North Shore associations, and can coordinate with your counsel where the bylaws need updating. If an election is coming up and you want a second set of eyes, <a href="/contact">contact us</a>.</p>

      <p><em>This article is general information for Illinois association boards and is not legal advice. Your declaration and bylaws may add requirements, and statutes change. Confirm your election procedure with association counsel.</em></p>
    `,
  },
  {
    slug: 'illinois-association-fines-notice-hearing',
    title: 'Can an Illinois Association Fine an Owner? Notice and Hearing Rules',
    metaDescription:
      'Illinois condo and HOA boards may fine owners only after notice and a chance to be heard. What Section 18.4(l) and CICAA 1-30(g) require, step by step.',
    date: '2026-10-26',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'Illinois law lets a condo or HOA board fine an owner for violating the governing documents, but only after notice and an opportunity to be heard. Skipping that step is the fastest way to lose a fine you were right to impose.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Sections 18 and 18.4 (765 ILCS 605/18, 605/18.4)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act, Sections 1-30, 1-40 and 1-75 (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>Every board eventually faces an owner who will not stop: the dog on the roof deck, the contractor working at 7 a.m. on a Sunday, the balcony grill the insurance carrier flagged. Letters do not work, and someone asks whether the association can simply start fining. In Illinois the answer is yes, but the statute attaches a condition that boards skip more often than any other: notice and an opportunity to be heard, before the fine.</p>

      <h2>Does Illinois law allow a condo board to fine an owner?</h2>

      <p>Yes. Section 18.4(l) of the Condominium Property Act gives the board power, after notice and an opportunity to be heard, to levy reasonable fines for violations of the declaration, bylaws, and rules and regulations of the association. The power is real, but the procedure comes first and the amount must be reasonable. A fine imposed without that process is exposed to challenge.</p>

      <p>The same subsection also lets the board impose charges for late payment of assessments. Late charges and fines are different tools: a late charge responds to non-payment, while a fine responds to a violation of the documents and carries the notice-and-hearing requirement.</p>

      <h2>Is the rule the same for an HOA?</h2>

      <p>Substantially, yes. For communities governed by the Common Interest Community Association Act, Section 1-30(g) gives the board power, after notice and an opportunity to be heard, to levy and collect reasonable fines from members or unit owners for violations of the declaration, bylaws, operating agreement, and rules and regulations. The wording tracks the condominium statute closely.</p>

      <p>One caveat for smaller HOAs: under CICAA Section 1-75(a), an association organized under the General Not For Profit Corporation Act with 10 units or fewer, or annual budgeted assessments of $100,000 or less, is exempt from CICAA unless its directors or members vote to be covered. An exempt association should ask counsel what fining authority its own documents provide.</p>

      <h2>What counts as notice and an opportunity to be heard?</h2>

      <p>The statutes do not define a specific form of notice, a deadline for responding, or a hearing format. Those details come from your declaration, bylaws and adopted rules, and from what a court would consider fair. Because the statute is silent, boards should have counsel review a written enforcement procedure before relying on it, rather than improvising one case at a time.</p>

      <p>In practice, a defensible procedure usually includes:</p>

      <ul>
        <li>A written notice identifying the specific provision violated, what happened, and when.</li>
        <li>The fine that may be imposed, and whether it repeats for continuing violations.</li>
        <li>A date, time and place where the owner can appear before the board, or a way to respond in writing.</li>
        <li>A reasonable amount of time between the notice and the hearing.</li>
        <li>A written decision sent after the hearing.</li>
      </ul>

      <p>None of those elements is a specific statutory number. They are the components that make it easy to show, later, that the owner actually had notice and a real chance to respond.</p>

      <h2>Can the hearing be held in closed session?</h2>

      <p>The discussion can be. Section 18(a)(9)(A)(iv) allows a condominium board to close a portion of a noticed meeting to discuss violations of the association's rules and regulations, and CICAA Section 1-40(b)(5)(iv) says the same for HOAs. But both statutes require that any vote on those matters take place at a meeting, or portion of one, that is open to owners. The decision to impose a fine is a vote, so it belongs in open session, even if the facts were discussed privately. Many boards record the decision by unit number rather than owner name.</p>

      <h2>What makes a fine reasonable?</h2>

      <p>Neither statute sets a dollar cap or a schedule, so we will not suggest one. What the statutes require is that fines be reasonable. Boards are in a stronger position when the amounts are set in advance in an adopted fine schedule, applied consistently to every owner, and proportionate to the violation. A fine schedule is a rule, so in a condominium it is adopted through the Section 18.4(h) process: a meeting of the unit owners called for the specific purpose of discussing the proposed rules, with the full text included in the notice.</p>

      <p>Consistency is the part boards underestimate. A fine against one owner for a violation the board has ignored in five other units invites a selective-enforcement argument. Before the first notice goes out, check whether the rule has actually been enforced.</p>

      <h2>Do the governing documents still matter?</h2>

      <p>Yes. The statutes grant the power and set the minimum procedure; your declaration and bylaws may add steps, such as a required warning letter, a specific hearing panel, or a minimum response period. Where the documents add requirements, follow them. Where they conflict with the Act, the Act controls. Section 18 also requires that condominium bylaws contain restrictions designed to prevent unreasonable interference with other owners' use of their units and the common elements, and a method for adopting and amending rules (Section 18(k) and (l)).</p>

      <h2>What if the owner disputes the facts at the hearing?</h2>

      <p>Then the hearing is doing its job. The purpose of an opportunity to be heard is that the board might change its mind, so treat the owner's account as evidence rather than as an obstacle. If the owner produces something new, such as a contractor's permit, a photo with a different date, or a statement that the noise came from another unit, the board can postpone the decision, ask the manager to verify, and decide at the next open meeting.</p>

      <p>Boards get into trouble when the hearing is a formality and the decision was obviously made beforehand. Directors who have already told neighbours the owner will be fined should consider whether they can listen fairly. Where a director has a personal dispute with the owner, stepping back from that vote is the cleaner course.</p>

      <p>Whatever the board decides, write it down: what the owner said, what the board considered, and why it reached its result. A short written decision is far easier to defend than a recollection.</p>

      <h2>A fining checklist for Illinois boards</h2>

      <ol>
        <li><strong>Confirm the rule exists and was properly adopted.</strong> You cannot fine for violating a rule that was never adopted through the required process.</li>
        <li><strong>Confirm the fine schedule</strong> is adopted and that the amount is in it.</li>
        <li><strong>Document the violation</strong> with dates, photos where appropriate, and the provision broken.</li>
        <li><strong>Send written notice</strong> naming the violation, the possible fine, and how and when the owner can be heard.</li>
        <li><strong>Hold the hearing.</strong> Listen, take notes, and let the owner finish. Discussion can be in closed session.</li>
        <li><strong>Vote in open session</strong> and record the decision in the minutes.</li>
        <li><strong>Send the written decision</strong> and post the fine to the owner's ledger only after the vote.</li>
        <li><strong>Apply the same steps to the next owner,</strong> including board members.</li>
      </ol>

      <h2>When should the board call counsel instead?</h2>

      <p>Call counsel before fining if the owner has asserted a disability-related accommodation, if the violation involves religious items (Section 18.4(h) bars rules that prohibit reasonable accommodation for religious practices), if fines have been accruing for months without a hearing, or if the board intends to pursue collection of fines in court. How fines can be collected and secured is fact-specific, and boards should not assume fines are treated the same as unpaid assessments.</p>

      <p>Fining well is mostly paperwork done in the right order. Our <a href="/services/board-support">board support team</a> runs violation notices, hearing scheduling and minutes for Chicago and North Shore associations so that the process holds up when an owner pushes back. If your building has a violation that has dragged on, <a href="/contact">contact us</a> and we can walk through the next step with you.</p>

      <p><em>This article is general information for Illinois association boards and is not legal advice. Have association counsel review your enforcement procedure and fine schedule before relying on them.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-open-board-meetings-notice-comment',
    title: 'Open Board Meetings in Illinois: Notice, Owner Comment and Recording',
    metaDescription:
      'Illinois condo and HOA board meetings must be open to owners: the 48-hour notice rule, budget-meeting notice, owner comment, recording and open votes.',
    date: '2026-10-28',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Illinois starts from a simple rule: board meetings are open to owners. The exceptions are narrow, the notice periods are short but strict, and every vote happens where owners can see it.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Section 18 (765 ILCS 605/18)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act, Section 1-40 (765 ILCS 160/1-40)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>New directors often assume board meetings are private business meetings that owners may sometimes attend. Illinois law works the other way around. Board meetings are open to owners by default, notice is required, and the board needs a specific statutory reason to step out of public view. This guide covers the open-meeting rules themselves. For the narrow closed-session exceptions, see our separate guide on closed sessions.</p>

      <h2>Do Illinois condo board meetings have to be open to owners?</h2>

      <p>Yes. Section 18(a)(9)(A) of the Condominium Property Act requires that every meeting of the board be open to any unit owner. The board may close part of a noticed meeting, or meet separately, only for six listed topics such as pending or probable litigation and rule violations, and any vote on those topics must still be taken in a portion of the meeting open to owners.</p>

      <p>CICAA Section 1-40(b)(5) sets the same rule for HOAs, with a similar list of six exceptions. The HOA list also allows closed discussion of third-party contracts.</p>

      <h2>How much notice must the board give before a meeting?</h2>

      <p>For condominiums, notice of every board meeting must be posted in entranceways, elevators or other conspicuous places at least 48 hours in advance (Section 18(a)(9)(E)). Notice must also go, at least 48 hours ahead, to owners who have authorised electronic communication, and to other owners by mail or delivery where the condominium instruments require it. Every director must receive at least 48 hours' notice unless they waive it (Section 18(a)(9)(D)).</p>

      <p>Where there is no common entranceway for seven or more units, the board may designate posting locations near those units. CICAA Section 1-40(b)(4) uses the same 48-hour standard, allowing either a prescribed delivery method or posting.</p>

      <h2>Are budget and special assessment meetings different?</h2>

      <p>Yes. For condominiums, owners must receive notice of any board meeting concerning adoption of the annual budget, regular assessments, or a separate (special) assessment in the same manner the Act provides for membership meetings (Section 18(a)(8)(i)), which means 10 to 30 days' written notice (Section 18(b)(6)). Each owner must also receive a copy of the proposed budget at least 25 days before the board adopts it (Section 18(a)(6)).</p>

      <p>For HOAs under CICAA, notice of a board meeting to adopt the budget, regular assessments or a special assessment must be given 10 to 60 days before the meeting, unless another provision of the Act says otherwise (Section 1-40(b)(4)).</p>

      <h2>Do owners have a right to speak at board meetings?</h2>

      <p>In an HOA, yes. CICAA Section 1-40(b)(6) requires the board to reserve a portion of each board meeting for member comments, while leaving the length and place on the agenda to the board's sole discretion. We did not find a parallel requirement in Section 18 of the Condominium Property Act, so condominium boards should check their bylaws and confirm with counsel.</p>

      <p>Even where it is not required, a short, scheduled owner forum tends to make meetings shorter. Owners who know they will get three minutes at a set time are less likely to interrupt the business agenda. Whatever format you choose, apply it the same way at every meeting and state it at the top of the agenda.</p>

      <h2>Can owners record board meetings?</h2>

      <p>In a condominium, yes. Section 18(a)(9)(C) gives any unit owner the right to record the portions of board meetings that are required to be open, by tape, film or other means. The board may adopt reasonable rules governing how recordings are made, such as where a camera may be placed, but it cannot prohibit recording of open portions.</p>

      <h2>How often must the board meet, and who can call a meeting?</h2>

      <p>Condominium boards must meet at least four times a year (Section 18(a)(10)), and CICAA boards likewise (Section 1-30(a)). Special board meetings can be called by the president or by 25% of the directors (Section 18(a)(19)). CICAA also allows any other method the community instruments prescribe (Section 1-40(b)(3)).</p>

      <p>Directors may attend and act by telephone or any acceptable technological means that lets all participants communicate with each other, and that participation counts as attendance in person (Section 18(a)(9)(B)).</p>

      <h2>What about decisions made between meetings?</h2>

      <p>Ordinary business should wait for a noticed, open meeting. The Act gives the board an emergency route instead: Section 18(a)(21) lets the board ratify actions taken by directors in response to an emergency, which Section 18(a)(8)(iv) defines as an immediate danger to the structural integrity of the common elements or to the life, health, safety or property of the owners. The board must notify owners of the emergency within 7 business days and give a general description of the actions taken within 7 days.</p>

      <p>An email chain that settles a vendor selection is not an emergency. Bring it to the next open meeting and vote there.</p>

      <h2>What are the most common open-meeting mistakes?</h2>

      <p>In our experience, the problems are rarely dramatic. They are small habits that drift away from the statute:</p>

      <ul>
        <li><strong>Deciding by email</strong> and then reading the result into the minutes as if it had been voted at a meeting.</li>
        <li><strong>Calling an executive session</strong> for a topic that is not on the statutory list, such as a disagreement among directors.</li>
        <li><strong>Voting in closed session</strong> on a collection matter or vendor contract that was properly discussed there.</li>
        <li><strong>Posting notice late</strong> because the meeting date moved and nobody updated the lobby.</li>
        <li><strong>Treating the budget meeting like any other meeting</strong> and giving 48 hours' notice instead of the longer period required.</li>
      </ul>

      <p>Each of these is easy to fix with a standing calendar and an agenda template, and each is the kind of thing an unhappy owner will raise later.</p>

      <h2>An open-meeting checklist for Illinois boards</h2>

      <ol>
        <li><strong>Post notice at least 48 hours ahead</strong> in the building's conspicuous places and send it to owners who opted into electronic delivery.</li>
        <li><strong>Give 10 to 30 days' notice</strong> (condominium) or 10 to 60 days' notice (HOA) for budget and assessment meetings, and send the proposed condominium budget at least 25 days before adoption.</li>
        <li><strong>Publish an agenda</strong> that shows when owner comment happens.</li>
        <li><strong>Hold at least four meetings a year</strong> and calendar them in January.</li>
        <li><strong>Use closed session only for a listed topic,</strong> and come back into open session to vote.</li>
        <li><strong>Let owners record</strong> open portions, under a short written recording rule.</li>
        <li><strong>Ratify emergency actions</strong> and send the required owner notices on time.</li>
        <li><strong>Keep minutes</strong> that show every vote and who made the motion.</li>
      </ol>

      <p>These rules are state law, so they apply the same way in a Chicago high-rise and a North Shore townhome community; what differs is what each building's declaration and bylaws add. Our <a href="/services/board-support">board support team</a> prepares notices, agendas and minutes for associations across Chicago and the North Shore. To talk through how your meetings run today, <a href="/contact">contact us</a>.</p>

      <p><em>This article is general information for Illinois association boards and is not legal advice. Confirm notice requirements and meeting procedures with association counsel.</em></p>
    `,
  },
  {
    slug: 'removing-illinois-condo-board-member',
    title: 'Removing a Condo Board Member in Illinois: What Owners and Boards Can Do',
    metaDescription:
      'How a condo board member is removed in Illinois: bylaws, the two-thirds owner vote under the Not For Profit Act, court removal, and what boards can’t do.',
    date: '2026-10-30',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Illinois Association Law',
    readTime: '8 min read',
    excerpt:
      'A board that wants to push out a difficult colleague usually discovers it cannot do so by itself. In most Illinois associations, the people who elected the director are the ones who can remove them.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Sections 18 and 18.3 (765 ILCS 605/18, 605/18.3)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'General Not For Profit Corporation Act of 1986, Sections 108.35 and 108.55 (805 ILCS 105)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Details?ActID=2280&ChapterID=65',
      },
      {
        title: 'Common Interest Community Association Act, Sections 1-25 and 1-40 (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>Removal questions arrive from two directions. Owners ask how to get rid of a director they believe is acting against the building. Directors ask how to get rid of a colleague who leaks closed-session discussions or stops showing up. The answers are different, and both start in the same place: the bylaws, read together with the statutes they sit under.</p>

      <h2>Where do the removal rules for an Illinois condo board come from?</h2>

      <p>From three layers. Section 18(a)(4) of the Condominium Property Act requires the bylaws to state the method of removing directors. Section 18.3 gives every condominium association, incorporated or not, the powers of the General Not For Profit Corporation Act that are consistent with the Condominium Act and its instruments. Section 108.35 of that Act sets the corporate removal rules.</p>

      <p>Because those layers interact, the first step in any removal question is to pull the bylaws and have counsel read the removal clause against the statutes. Bylaws written decades ago sometimes contain a procedure that no longer lines up with current law.</p>

      <h2>Can owners remove a director, and what vote does it take?</h2>

      <p>Yes. Under Section 108.35(a), directors may be removed with or without cause. Where members elect the directors, Section 108.35(c)(1) requires the affirmative vote of two-thirds of the votes present and voted, in person or by proxy. Your bylaws may set a procedure of their own, so counsel should confirm which standard governs your association before a meeting is called.</p>

      <p>Section 108.35(c)(2) adds a notice condition that matters in practice. Written notice of the meeting must go to all members entitled to vote, must state that a purpose of the meeting is to vote on removing one or more directors, and must name them. Only the directors named in the notice can be removed at that meeting. An owner who stands up at the annual meeting and moves to remove the treasurer is out of order if the notice did not say so.</p>

      <h2>How do owners force a removal vote?</h2>

      <p>By calling a special meeting. In a condominium, special meetings of the owners can be called by the president, the board, or 20% of unit owners (Section 18(b)(5)). Notice must give 10 to 30 days' notice of the time, place and purpose (Section 18(b)(6)). In an HOA, CICAA Section 1-40(b)(3) allows special membership meetings to be called by the president, the board, 20% of the membership, or any other method in the community instruments.</p>

      <p>Owners organising a petition should state the purpose exactly, naming each director to be removed, so the notice that follows satisfies Section 108.35(c)(2).</p>

      <h2>Can the board vote to remove one of its own members?</h2>

      <p>Generally not, where owners elect the board. Section 108.35(b) allows directors to remove a director only in a corporation with no voting members, which does not describe a typical condominium. For associations whose members elect directors, Section 108.35(c) lists the owner vote, and Section 108.35(d) adds court removal. A board vote is not on that list. Confirm the position with counsel before relying on any contrary bylaw.</p>

      <p>What the board can do is remove a director from an <strong>officer</strong> role. Section 108.55 allows any officer to be removed by the board or whoever is authorised to elect or appoint that officer. A board that has lost confidence in its president can elect a different president from among the directors. The former president stays on the board until the owners decide otherwise or the term ends.</p>

      <h2>Can a court remove a director?</h2>

      <p>Yes, in serious cases. Under Section 108.35(d), the circuit court may remove a director in a proceeding brought by the corporation or by members holding at least 10% of the outstanding votes of any class, if it finds the director engaged in fraudulent or dishonest conduct or grossly abused the position to the corporation's detriment, and that removal is in the corporation's best interest. The court may also bar re-election for a period it sets. This is litigation, not a governance shortcut.</p>

      <h2>What happens after a director is removed or resigns?</h2>

      <p>The vacancy is filled under Section 18(a)(13). The remaining directors may fill it by a two-thirds vote until the next annual meeting. If owners holding 20% of the votes petition for an owners' meeting to fill the vacancy, the board appointment lasts no more than 30 days after the petition is filed, and the meeting must be called within 30 days of the filing. CICAA Section 1-25(e) sets the same two-thirds and 20% rules for HOAs.</p>

      <p>Vacancies among officers are filled by the board for the rest of the term.</p>

      <h2>What about an HOA under CICAA?</h2>

      <p>CICAA does not contain its own director-removal section. HOAs are commonly organised as not-for-profit corporations, so the bylaws and the General Not For Profit Corporation Act usually supply the answer. Counsel should confirm how your community is organised and which provisions apply.</p>

      <h2>Is removal the right tool?</h2>

      <p>Often it is not. Condominium terms cannot exceed two years, and at least one-third of the seats turn over every year (Section 18(a)(1) and (11)), so the next election is rarely far away. A removal campaign splits the building, costs a special meeting, and can fail on a two-thirds threshold. Before starting one, owners and boards should ask whether the actual problem is a conduct issue that a board policy can address, such as confidentiality of closed sessions, attendance expectations, or communications with vendors.</p>

      <h2>What should owners weigh before starting a petition?</h2>

      <p>Owners considering a removal petition should be clear about what they are trying to change. If the concern is a single decision, such as a contract or an assessment, there may be a more direct route: the Act gives owners petition rights on certain budgets and special assessments, and on certain related-party contracts. If the concern is how the building is run generally, recruiting candidates for the next election is often more effective than a removal vote.</p>

      <p>Owners should also expect the director to defend themselves. Keep communications factual, avoid accusations that cannot be supported, and remember that the neighbours on the other side of the vote will still share the elevator afterward.</p>

      <h2>A removal checklist</h2>

      <ol>
        <li><strong>Read the bylaws' removal clause</strong> and have counsel compare it with Section 108.35.</li>
        <li><strong>Separate officer removal from director removal.</strong> The board can change officers; owners remove directors.</li>
        <li><strong>Call the special meeting correctly:</strong> president, board, or 20% of owners, with 10 to 30 days' notice.</li>
        <li><strong>Name every director</strong> to be removed in the notice and state the purpose.</li>
        <li><strong>Count the vote carefully</strong> against the threshold counsel confirms, with proxies or ballots verified.</li>
        <li><strong>Fill the vacancy</strong> under Section 18(a)(13) and record it in the minutes.</li>
        <li><strong>Keep the building running.</strong> Vendors, payments and maintenance should not stall while governance is contested.</li>
      </ol>

      <p>A professional manager cannot take sides in a removal effort, but we can make sure notices, meetings and vote counts are handled correctly so the outcome holds. Learn about our <a href="/services/board-support">board support services</a> for Chicago and North Shore associations, or <a href="/contact">contact us</a> to talk about governance at your building.</p>

      <p><em>This article is general information for Illinois association boards and owners and is not legal advice. Removal of a director should be planned with association counsel.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-board-conflicts-of-interest',
    title: 'Conflicts of Interest on Illinois Association Boards: Contracts With Directors',
    metaDescription:
      'Can an Illinois condo or HOA board hire a director’s family business? Section 18(a)(16), CICAA 1-30(b), the 25% rule, owner notice and petitions.',
    date: '2026-11-01',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'The director whose brother-in-law runs a roofing company may well offer the best price. Illinois law does not ban that contract, but it requires notice to owners and gives them a way to force a vote.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Sections 18 and 18.4 (765 ILCS 605/18, 605/18.4)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act, Section 1-30 (765 ILCS 160/1-30)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'General Not For Profit Corporation Act of 1986, Section 108.60 (805 ILCS 105/108.60)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Details?ActID=2280&ChapterID=65',
      },
    ],
    content: `
      <p>Volunteer boards are made up of neighbours, and neighbours have businesses, spouses and children with businesses. Sooner or later a director, or someone close to one, wants to bid on association work. Illinois law does not prohibit that. It does impose a specific notice-and-petition procedure, and it holds every director to a fiduciary standard. Boards that follow the procedure protect both the contract and the director. Boards that skip it put both at risk.</p>

      <h2>Can an Illinois condo board contract with one of its own directors?</h2>

      <p>Yes, but only through a set procedure. Section 18(a)(16) of the Condominium Property Act says the board may not contract with a current director, or with a corporation or partnership in which a director or the director's immediate family holds a 25% or greater interest, unless owners are notified and given the chance to petition for a vote on the contract.</p>

      <p>For this purpose, "immediate family" means the director's spouse, parents and children.</p>

      <h2>What notice and petition procedure applies to a condominium?</h2>

      <p>The steps and deadlines in Section 18(a)(16) are:</p>

      <ol>
        <li>The board decides to enter into the contract.</li>
        <li>Within <strong>20 days</strong> after that decision, the board gives unit owners notice of its intent to enter the contract.</li>
        <li>Owners may file a petition, signed by <strong>20% of the unit owners</strong>, for an election to approve or disapprove the contract. The petition must be filed within <strong>30 days</strong> after the notice.</li>
        <li>If a valid petition is filed, the election must be held within <strong>30 days</strong> after the petition is filed.</li>
      </ol>

      <p>The statute does not say what vote approves or disapproves the contract at that election. If a petition arrives, ask counsel how the election should be run and counted under your documents.</p>

      <h2>Is the rule different for an HOA?</h2>

      <p>Yes, in three details. CICAA Section 1-30(b) applies the same structure to common interest communities, but:</p>

      <ul>
        <li>It covers a corporation, <strong>limited liability company</strong> or partnership in which the director or immediate family holds 25% or more. The condominium provision names only corporations and partnerships; whether it reaches an LLC is a question for counsel, and the prudent course is to give notice anyway.</li>
        <li>"Immediate family" includes the director's spouse, parents, <strong>siblings</strong> and children.</li>
        <li>The member petition, signed by 20% of the membership, must be filed within <strong>20 days</strong> after the notice, not 30. The election still follows within 30 days of the petition.</li>
      </ul>

      <p>The 20-day notice deadline after the board's decision is the same in both statutes.</p>

      <h2>What if the relationship falls outside the 25% rule?</h2>

      <p>The statutory procedure is triggered by a director, or a business in which the director or immediate family holds 25% or more. Plenty of real conflicts fall outside that line: a director's employer, a sibling's company in a condominium, a business in which the director holds 10%, or a vendor who is a close friend. The statute does not require the owner-notice procedure for those, but the director's fiduciary duty still applies.</p>

      <p>Section 18.4 requires directors and officers to exercise the care required of a fiduciary of the unit owners. The General Not For Profit Corporation Act, whose consistent powers apply to condominium associations through Section 18.3, adds Section 108.60. It provides that a transaction in which a director has an interest is not invalid for that reason if it was fair to the corporation when approved. Where the transaction is challenged, the person defending it must prove fairness unless the material facts and the director's interest were disclosed and the transaction was approved by a majority of disinterested directors, or by the voting members without counting the interested director's vote. An interested director may be counted toward quorum but not when the board acts on the transaction (Section 108.60(c)).</p>

      <p>Put plainly: disclose, step out of the vote, and let the disinterested directors decide on the record.</p>

      <h2>What should the owner notice say?</h2>

      <p>Neither statute prescribes the contents of the notice, so the safest approach is to make it complete enough that an owner could decide whether to petition without asking a follow-up question. That usually means identifying the director and the nature of the relationship, describing the work and the contract price, summarising the other bids the board considered, and explaining how and by when owners can file a petition.</p>

      <p>Send it through the same channels the association uses for other official notices, and keep a copy with proof of delivery in the association's records. If no petition is filed within the window, note that in the minutes before the contract is signed.</p>

      <h2>Can the board discuss the contract in closed session?</h2>

      <p>The board may close a portion of a meeting to discuss the engagement of an independent contractor or other provider of goods and services (Section 18(a)(9)(A)(ii)), and CICAA additionally lists third-party contracts (Section 1-40(b)(5)(ii)). But the vote to approve the contract must happen in a portion of the meeting open to owners. For a related-party contract, holding the full discussion in open session is usually the wiser choice anyway, because the point is to show owners there was nothing to hide.</p>

      <h2>A conflict-of-interest checklist for Illinois boards</h2>

      <ol>
        <li><strong>Adopt a written disclosure policy.</strong> Each director lists businesses in which they or immediate family hold an interest, updated annually and whenever a bid is received.</li>
        <li><strong>Ask at every vendor vote</strong> whether any director has a relationship with the bidder, and minute the answer.</li>
        <li><strong>Get competing bids</strong> on related-party work so fairness can be shown with numbers.</li>
        <li><strong>The interested director discloses and abstains</strong> from discussion and the vote.</li>
        <li><strong>Vote in open session</strong> and record which directors voted.</li>
        <li><strong>Send the owner notice within 20 days</strong> when the 25% rule applies, describing the contract and the director's relationship.</li>
        <li><strong>Calendar the petition window</strong>: 30 days for condominiums, 20 days for HOAs, and do not sign until it closes.</li>
        <li><strong>If a petition arrives,</strong> involve counsel and hold the election within 30 days.</li>
      </ol>

      <h2>Why the procedure helps the director too</h2>

      <p>Related-party contracts fail in a predictable way. The work is fine, the price was fair, and two years later an owner discovers the relationship and assumes the worst. A director who disclosed, abstained, and saw the board send the statutory notice has a complete answer. A director who quietly voted for a relative's bid has none, even if the deal was a good one.</p>

      <p>Managing related-party bids is routine work for a professional manager: collecting comparable proposals, documenting disclosures, drafting the owner notice and tracking the petition window. Our <a href="/services/board-support">board support team</a> handles this for associations across Chicago and the North Shore. If your board is weighing a contract with a director's business, <a href="/contact">contact us</a> before the vote.</p>

      <p><em>This article is general information for Illinois association boards and is not legal advice. Related-party contracts should be reviewed by association counsel before they are signed.</em></p>
    `,
  },
];
