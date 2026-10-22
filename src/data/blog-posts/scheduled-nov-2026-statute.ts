import type { BlogPost } from './index';

// Eight Illinois statute and seasonal-compliance guides added 2026-10-22,
// covering 2026-11-15 through 2026-11-22.
//
// Editorial rule for this file: every rule stated in these posts was read in
// the primary text on ilga.gov or chicago.gov, not summarised from a secondary
// source. Specifically: Sections 9, 9.2, 12, 18(a)(8), 18.6 and 19 of the
// Condominium Property Act (765 ILCS 605); Sections 1-30(i), 1-45 and 1-70 of
// the Common Interest Community Association Act (765 ILCS 160); the
// Homeowners' Energy Policy Statement Act (765 ILCS 165); the Snow and Ice
// Removal Act (745 ILCS 75); the Smoke Detector Act (425 ILCS 60); the Carbon
// Monoxide Alarm Detector Act (430 ILCS 135); and the City of Chicago's own
// sidewalk snow removal page citing Municipal Code sections 4-4-310 and
// 10-8-180.
//
// Where Illinois law is made by case law rather than statute — the natural
// accumulation doctrine, premises liability, fair housing accommodation
// standards — these posts point the reader to counsel instead of summarising
// it. Keep that line: the sourcing rule for this site is primary sources, and
// a judicial doctrine cannot be verified from a statute page.
//
// If a rule changes, update the post and add dateModified.
export const scheduledNov2026StatutePosts: BlogPost[] = [
  {
    slug: 'illinois-condo-master-policy-section-12-requirements',
    title: 'What Illinois Law Requires Your Condo Master Policy to Cover',
    metaDescription:
      'Section 12 of the Illinois Condominium Property Act sets minimum master policy coverage: full insurable replacement cost, demolition and increased cost of construction, and $1,000,000 liability.',
    date: '2026-11-15',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Insurance',
    readTime: '10 min read',
    excerpt:
      'Illinois does not leave condominium insurance to the declaration. Section 12 of the Condominium Property Act says no policy may be issued or renewed to a condominium association unless it includes specific coverages — and it sets a floor on replacement cost, demolition and increased cost of construction, liability limits and more. Here is the section read as a board checklist.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 12, Insurance',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160) — Section 1-50, Insurance',
        url: 'https://www.ilga.gov/legislation/ILCS/details?ActID=3273&ChapterID=62&ChapAct=FullText',
      },
    ],
    content: `
      <p>Most insurance conversations in a board meeting are about the premium. The more useful conversation starts with what the policy is legally required to contain, because Section 12 of the Illinois Condominium Property Act is unusually specific — and because a board that cannot say whether its policy meets the statute has no way to judge whether a cheaper quote is a saving or a gap.</p>

      <p>Section 12 opens by framing it as a condition on the policy itself: no policy of insurance may be issued or delivered to a condominium association, and no policy issued to a condominium association may be renewed, unless the coverage includes the items the Section then lists.</p>

      <h2>What property coverage does Section 12 require?</h2>

      <p>Section 12(a)(1) requires property insurance:</p>

      <ul>
        <li><strong>On the common elements and the units</strong>, including the limited common elements and — except as otherwise determined by the board of managers — the bare walls, floors and ceilings of the unit;</li>
        <li><strong>Providing coverage for special form causes of loss;</strong> and</li>
        <li><strong>In a total amount of not less than the full insurable replacement cost</strong> of the insured property, less deductibles, at the time the insurance is purchased and at each renewal date.</li>
      </ul>

      <p>Then comes the part boards most often have never checked. The coverage must be sufficient to rebuild the insured property in compliance with building code requirements following an insured loss, including <strong>Coverage B, demolition costs</strong>, and <strong>Coverage C, increased cost of construction</strong>. The statute sets a floor on those two: the combined total of Coverage B and Coverage C must be <strong>no less than 10% of each insured building value, or $500,000, whichever is less</strong>.</p>

      <p>For a vintage Chicago building this is not a technicality. A fire in a 1920s courtyard building triggers current code for the rebuild, and the difference between the old construction and a code-compliant replacement is exactly what Coverage C is for. Ask your agent to show you the Coverage B and Coverage C limits as dollar figures and do the 10% arithmetic yourself.</p>

      <h2>What liability coverage is required?</h2>

      <p>Section 12(a)(2) requires commercial general liability insurance against claims and liabilities arising in connection with the ownership, existence, use or management of the property, in a minimum amount of <strong>$1,000,000</strong>, or a greater amount the board judges sufficient.</p>

      <p>The Section also dictates who must be insured. The policy must insure the board, the association, the management agent and their respective employees and agents and all persons acting as agents. The developer must be included as an additional insured in its capacity as a unit owner, manager, board member or officer. Unit owners must be included as additional insureds, but only for claims and liabilities arising in connection with the ownership, existence, use or management of the common elements. And the insurance must cover claims of one or more insured parties against other insured parties.</p>

      <p>That last sentence is worth noting. A policy that excludes insured-versus-insured claims does not meet the statute.</p>

      <h2>What about the fidelity bond and directors and officers coverage?</h2>

      <p>Section 12(a)(3) covers both.</p>

      <p>An association with <strong>six or more dwelling units</strong> must obtain and maintain a fidelity bond covering persons — including the managing agent and its employees — who control or disburse association funds, for the maximum amount of coverage available to protect funds in the custody or control of the association, plus the association reserve fund. Management companies responsible for funds held or administered by the association must themselves be covered by a fidelity bond for the maximum available, and the association has standing to make a loss claim against the managing agent's bond as a party covered under it. The statute states that the bond must be in the full amount of association funds and reserves in the custody of the association or the management company.</p>

      <p>Section 12(a)(3)(D) then requires the board to obtain directors and officers liability coverage at a level the board deems reasonable, if not otherwise set by the declaration or bylaws. The coverage must extend to all contracts and other actions taken by the board in their official capacity, excluding actions for which directors are not entitled to indemnification under the General Not For Profit Corporation Act of 1986 or the association's documents. It must include coverage of the defense of non-monetary actions, the defense of breach of contract, and the defense of decisions related to the placement or adequacy of insurance. And it must insure past, present and future board members acting in that capacity, the managing agent, and employees of the board and the managing agent.</p>

      <p>Read that last list against your actual policy. Defense of non-monetary actions and defense of breach of contract are the two that are missing most often, and they are the two that matter when an owner sues for an injunction rather than for money. We cover both areas in more depth in our guides to <a href="/blog/illinois-association-fidelity-insurance-requirements">fidelity insurance requirements</a> and <a href="/blog/condo-hoa-directors-officers-insurance-guide">directors and officers insurance</a>.</p>

      <h2>Who pays the deductible?</h2>

      <p>Section 12(c) gives the board three options on a claim for damage to a unit or the common elements. The board may:</p>

      <ol>
        <li>Pay the deductible amount as a common expense;</li>
        <li><strong>After notice and an opportunity for a hearing</strong>, assess the deductible amount against the owners who caused the damage or from whose units the damage or cause of loss originated; or</li>
        <li>Require the unit owners of the units affected to pay the deductible amount.</li>
      </ol>

      <p>The notice-and-hearing condition attaches to option 2 only, and it is not optional. A board that charges a deductible to the owner it believes caused a leak, without notice and a hearing, has skipped a statutory step. Our guide to <a href="/blog/illinois-condo-insurance-deductible-charge-owner">charging an insurance deductible to an owner</a> walks through the procedure, and <a href="/blog/who-pays-condo-water-leak-illinois">who pays for a condo water leak in Illinois</a> covers the underlying question.</p>

      <h2>What does the Act say about units, improvements and betterments?</h2>

      <p>Section 12(b) requires the property insurance to include the units, the limited common elements except as otherwise determined by the board, and the common elements. The insurance need not cover improvements and betterments to the units installed by unit owners — but if it does, any increased cost may be assessed by the association against the units affected.</p>

      <p>The Section then draws the line most disputes turn on. Common elements <em>include</em> fixtures located within the unfinished interior surfaces of the perimeter walls, floors and ceilings of the individual units as initially installed by the developer. Common elements <em>exclude</em> floor, wall and ceiling coverings. And "improvements and betterments" means all decorating, fixtures and furnishings installed or added within the unit boundaries, including electrical fixtures, appliances, air conditioning and heating equipment, water heaters, built-in cabinets installed by unit owners, and any other additions, alterations or upgrades installed or purchased by a unit owner.</p>

      <p>In plain terms: the original developer-installed fixtures inside the wall cavity are common elements; your tile, paint, cabinets and new furnace are not. That boundary is where the master policy stops and the owner's HO-6 begins. See <a href="/blog/condo-master-policy-vs-ho6-board-guide">master policy versus HO-6</a> for the owner-facing version.</p>

      <h2>Whose policy pays first?</h2>

      <p>Section 12(f) answers it: if at the time of a loss there is other insurance in the name of a unit owner covering the same property covered by the association's policy, <strong>the association's policy is primary insurance</strong>.</p>

      <p>Section 12(e) requires the policies to include three provisions: each unit owner and secured party is an insured person with respect to liability arising out of the owner's interest in the common elements or membership in the association; the insurer waives subrogation against any unit owner, members of the owner's household, the association and board members; and the unit owner waives subrogation under the association policy against the association and the board.</p>

      <h2>Who controls the claim and the money?</h2>

      <p>Section 12(g) is the provision boards should read before their first large loss, not after. Any loss covered by the property policy must be adjusted <strong>by and with the association</strong>. The proceeds are payable to the association, or to an insurance trustee designated by the association, and the trustee or association holds them in trust for unit owners and secured parties as their interests appear.</p>

      <p>The proceeds must be disbursed <strong>first</strong> for repair or restoration of the damaged common elements and the bare walls, ceilings and floors of the units, and then to any improvements and betterments the association insures. Unit owners are not entitled to receive any portion of the proceeds unless there is a surplus after the common elements and units are completely repaired or restored, or the association has been terminated as trustee.</p>

      <p>So an owner who wants a cheque instead of a repair is asking for something the statute does not provide.</p>

      <h2>What else is in Section 12 that boards should action?</h2>

      <ul>
        <li><strong>Mandatory owner coverage (12(h)).</strong> The board may, under the declaration and bylaws or by rule, require owners to carry insurance covering their personal liability and compensatory — but not consequential — damages to another unit caused by the negligence of the owner or their guests, residents or invitees, or regardless of any negligence originating from the unit. The owner's personal liability must include the deductible of the owner whose unit was damaged, damage not covered by the required insurance, and decorating, painting, wall and floor coverings, trim, appliances, equipment and other furnishings. If your association has never adopted this rule, it is one of the highest-value rules available to a board.</li>
        <li><strong>Vendor certificates (12(i)).</strong> Contractors and vendors, except public utilities, doing business with the association under contracts exceeding <strong>$10,000 per year</strong> must provide certificates of insurance naming the association, its board and its managing agent as additional insureds. Build this into the vendor onboarding step, not the first claim. See our <a href="/blog/condo-hoa-vendor-rfp-checklist">vendor RFP checklist</a>.</li>
        <li><strong>Settlement notice (12(k)).</strong> An insurer defending a liability claim against the association must notify the association of the settlement terms no less than <strong>10 days</strong> before settling. The association may not veto the settlement unless a contract or statute provides otherwise.</li>
        <li><strong>Other coverages (12(d)).</strong> The declaration may require the association to carry other insurance the board considers appropriate, including workers compensation, employment practices, environmental hazards and equipment breakdown.</li>
        <li><strong>Non-residential condominiums (12(j)).</strong> The Section's provisions may be varied or waived for a condominium community in which all units are restricted to nonresidential use.</li>
      </ul>

      <h2>Does any of this apply to HOAs and townhome associations?</h2>

      <p>Section 12 is a Condominium Property Act provision and applies to condominiums. CICAA has its own insurance provision at Section 1-50 with its own terms. An HOA or townhome board should have counsel and its agent work from Section 1-50 rather than assuming the condominium rules carry across. Our guide to <a href="/blog/which-illinois-law-governs-condo-hoa-townhome">which Illinois law governs your association</a> is the starting point.</p>

      <h2>Board checklist for the next renewal</h2>

      <ul>
        <li>Ask the agent to confirm in writing that the policy meets each requirement of Section 12(a), item by item.</li>
        <li>Get the Coverage B and Coverage C limits as dollar figures and check them against 10% of each insured building value or $500,000, whichever is less.</li>
        <li>Confirm the replacement cost figure was reviewed at this renewal, not carried forward from three years ago.</li>
        <li>Confirm general liability is at least $1,000,000 and that insured-versus-insured claims are covered.</li>
        <li>Confirm the fidelity bond covers association funds plus reserves, and get the management company's bond certificate.</li>
        <li>Check the D&O policy for defense of non-monetary actions, defense of breach of contract, and defense of insurance-placement decisions.</li>
        <li>Decide and record the board's standing position on deductibles under Section 12(c), and build the notice-and-hearing step for option 2.</li>
        <li>Consider adopting the mandatory owner coverage rule under Section 12(h) if you have not.</li>
        <li>Require certificates of insurance from every vendor over $10,000 per year, before the work starts.</li>
        <li>Work through our <a href="/blog/condo-hoa-insurance-renewal-checklist">insurance renewal checklist</a> alongside this one.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar takes each association's policy apart against Section 12 before renewal, puts the gaps in front of the board in writing, and holds vendor certificates on file so the $10,000 rule is met before a contractor sets foot on site. If your board wants its master policy reviewed against the statute, <a href="/contact">contact our office</a> or see our <a href="/services/financial-management">financial management</a> and <a href="/services/board-support">board support</a> services.</p>

      <p><em>This article is general information for Illinois condominium boards and is not legal or insurance advice. It summarizes Section 12 of the Condominium Property Act as enacted; your declaration, your policy wording and your circumstances matter. Have association counsel and a licensed agent review your coverage.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-115-percent-assessment-petition',
    title: 'The 115% Rule: When Owners Can Reject an Assessment',
    metaDescription:
      'Illinois owners can petition to vote on a budget or special assessment that pushes total assessments above 115% of last year. The 20% petition, the deadlines and the exceptions.',
    date: '2026-11-16',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Financial Management',
    readTime: '9 min read',
    excerpt:
      'Illinois gives owners a specific, limited veto over large assessment increases — and gives boards an exception for emergencies and legal mandates. The thresholds differ between condominiums and common interest communities, the petition windows are short, and a board that plans the calendar badly can hand owners a veto it did not have to.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 18(a)(8)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160) — Section 1-45',
        url: 'https://www.ilga.gov/legislation/ILCS/details?ActID=3273&ChapterID=62&ChapAct=FullText',
      },
    ],
    content: `
      <p>Every board that proposes a large increase hears the same question: can the owners stop this? In Illinois the answer is a qualified yes, and the qualifications are the whole story.</p>

      <h2>What does the condominium rule actually say?</h2>

      <p>Section 18(a)(8) of the Condominium Property Act requires the condominium instruments to provide, among other things, that:</p>

      <ul>
        <li><strong>(i)</strong> Each unit owner receives notice, in the same manner as for membership meetings, of any board meeting concerning the adoption of the proposed annual budget and regular assessments, or the adoption of a separate (special) assessment.</li>
        <li><strong>(ii)</strong> If an adopted budget or any separate assessment adopted by the board would result in the sum of all regular and separate assessments payable in the current fiscal year exceeding <strong>115%</strong> of the sum of all regular and separate assessments payable during the preceding fiscal year, then on <strong>written petition by unit owners with 20% of the votes of the association</strong>, delivered to the board <strong>within 21 days</strong> of the board action, the board must call a meeting of the unit owners <strong>within 30 days</strong> of the date of delivery of the petition to consider the budget or separate assessment. Unless <strong>a majority of the total votes</strong> of the unit owners are cast at the meeting to reject it, it is ratified.</li>
        <li><strong>(iii)</strong> Any common expense not set forth in the budget, or any increase in assessments over the amount adopted in the budget, must be separately assessed against all unit owners.</li>
        <li><strong>(iv)</strong> Separate assessments for expenditures relating to <strong>emergencies or mandated by law</strong> may be adopted by the board without unit owner approval and are not subject to item (ii) or item (v). "Emergency" means an immediate danger to the structural integrity of the common elements or to the life, health, safety or property of the unit owners.</li>
        <li><strong>(v)</strong> Assessments for <strong>additions and alterations</strong> to the common elements or to association-owned property not included in the adopted annual budget must be separately assessed and are subject to approval of <strong>two-thirds of the total votes</strong> of all unit owners.</li>
        <li><strong>(vi)</strong> The board may adopt separate assessments payable over more than one fiscal year; for multi-year assessments not governed by items (iv) and (v), the entire amount is deemed considered and authorized in the first fiscal year in which it is approved.</li>
      </ul>

      <h2>Why "unless a majority of the total votes are cast to reject" matters</h2>

      <p>This is the single most misunderstood clause in Illinois assessment law. The default at that meeting is <strong>ratification</strong>. Silence ratifies. An owner who stays home has, in effect, voted to keep the assessment.</p>

      <p>And the threshold is a majority of the <em>total</em> votes of the unit owners — not a majority of those attending, and not a majority of a quorum. In a 100-unit association with one vote per unit, rejection takes 51 votes cast to reject. Forty owners turning up angry does not do it.</p>

      <p>Boards sometimes treat the petition as the end of the budget. It is not. It is the start of a meeting with a high bar that owners frequently fail to clear. That is not a reason to be cavalier — a board that forces a 30% increase through on owner apathy has a governance problem even if it has a legal win — but it is the rule.</p>

      <h2>How is the 115% calculated?</h2>

      <p>Read the words: the sum of <strong>all regular and separate assessments</strong> payable in the current fiscal year, against the sum of <strong>all regular and separate assessments</strong> payable during the preceding fiscal year.</p>

      <p>Two consequences boards miss:</p>

      <p><strong>Special assessments count on both sides.</strong> A building that levied a large special assessment last year has a high prior-year base, which can leave room for a substantial regular increase this year without crossing 115%. A building with a clean prior year and a new special assessment this year can cross the line on the special assessment alone, even with a flat regular budget.</p>

      <p><strong>The test is triggered by the board action, whichever action crosses the line.</strong> Item (ii) applies to an adopted budget "or any separate assessment adopted by the board" that produces the excess. So a mid-year special assessment can trigger a petition right even though the budget was adopted quietly in December.</p>

      <p>Do this arithmetic before the vote, not after the petition. Our <a href="/blog/condo-hoa-annual-budget-workbook">annual budget workbook</a> is a place to record it, and the <a href="/blog/illinois-condo-hoa-budget-adoption-guide">budget adoption guide</a> covers the notice sequence.</p>

      <h2>How is the CICAA rule different?</h2>

      <p>Same 115% test, different mechanics. Section 1-45 of the Common Interest Community Association Act provides:</p>

      <ul>
        <li><strong>1-45(c)</strong>: the same 115% comparison, but the petition window is <strong>14 days</strong> of the board action rather than 21, with the same 20% of the votes, the same meeting within 30 days of delivery, and the same default of ratification unless a majority of total votes are cast to reject.</li>
        <li><strong>1-45(e)</strong>: emergency and law-mandated separate assessments are exempt from subsections (c) and (f). CICAA's definition of emergency is slightly broader than the condominium one — "a danger to or a compromise of the structural integrity of the common areas or any of the common facilities," and also "a danger to the life, health or safety of the membership."</li>
        <li><strong>1-45(f)</strong>: assessments for additions and alterations not in the adopted budget need approval of <strong>a simple majority of the total members</strong> at a meeting called for that purpose — not the two-thirds that condominiums require.</li>
        <li><strong>1-45(g)</strong>: multi-year assessments work as under the condominium Act.</li>
        <li><strong>1-45(d)</strong> adds a duty condominiums do not have: if total common expenses exceed the total amount of the approved and adopted budget, the association must disclose the variance to all members and specifically identify the subsequent assessments needed to offset it in future budgets.</li>
      </ul>

      <p>So a townhome board has seven fewer days of petition exposure and a lower bar for additions and alterations, and an extra disclosure duty when it overspends. Worth knowing which set of rules you are under before you plan the calendar.</p>

      <h2>What is the difference between a special assessment and an "addition or alteration"?</h2>

      <p>This is the distinction that decides whether you need a petition-proof 115% calculation or a two-thirds owner vote, and it is a legal question, not an accounting one.</p>

      <p>Broadly, replacing or restoring something that already exists is not an addition or alteration; putting in something that was not there before is. Replacing a failing roof is restoration. Adding a roof deck is an alteration. The hard cases sit in between — a new boiler of a different type, a lobby renovation that changes the layout, a parking lot rebuilt with EV conduit — and they are exactly the cases where a board should get counsel's view in writing before it votes, because the consequence of getting it wrong is an assessment that can be challenged after the money is spent.</p>

      <p>Note also that Section 18.4(a) provides that limits on expenditures for the common elements in a condominium instrument do not apply to expenditures for repair, replacement or restoration of existing portions of the common elements. A spending cap in your declaration may not block a repair even where it would block an improvement.</p>

      <h2>How should a board use the emergency exception?</h2>

      <p>Sparingly, and with the definition in front of it. For condominiums, "emergency" means an <em>immediate</em> danger to the structural integrity of the common elements or to the life, health, safety or property of the unit owners. A failing elevator that traps residents, a gas leak, a collapsing porch, a roof actively letting water into units — those are the shape of it. A project the board has known about for four years and now wants to fund without a vote is not an emergency because the board ran out of patience.</p>

      <p>If the board does rely on the exception, document the facts in the minutes at the time: what the condition is, who said it was dangerous, and why it could not wait. The exception is judged on the record you made when you used it. See our <a href="/blog/condo-hoa-emergency-planning-checklist">emergency planning checklist</a>.</p>

      <p>"Mandated by law" is the quieter half of the same exception and is increasingly useful in Chicago — work required by a facade ordinance, an elevator order or a life-safety requirement. Keep the ordinance citation and the inspection order with the board's decision.</p>

      <h2>Board checklist before adopting a budget or special assessment</h2>

      <ul>
        <li>Total all regular and separate assessments payable last fiscal year. Total them for the proposed year. Divide. Write the percentage in the board packet.</li>
        <li>Give owners notice of the board meeting at which adoption will occur, in the manner required for membership meetings.</li>
        <li>Deliver the proposed budget to owners on time — at least 25 days before adoption for condominiums; at least 30 and not more than 60 days for CICAA associations.</li>
        <li>If you are over 115%, diary the petition deadline the day you adopt: 21 days for condominiums, 14 for CICAA.</li>
        <li>If a petition arrives, calendar the owner meeting within 30 days of delivery and confirm with counsel how votes must be counted.</li>
        <li>For anything that might be an addition or alteration, get counsel's view in writing before the vote.</li>
        <li>For an emergency or law-mandated assessment, record the specific facts and the authority in the minutes at the time.</li>
        <li>For a multi-year assessment, confirm the whole amount is being treated as authorized in the first fiscal year.</li>
        <li>CICAA boards: if you overspent the adopted budget, disclose the variance and identify the offsetting assessments.</li>
        <li>Explain the increase to owners in the cover letter. A board that explains reserves, insurance and the <a href="/blog/fannie-freddie-condo-reserve-15-percent-2027">2027 reserve change</a> gets fewer petitions than one that mails a number.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar runs the 115% arithmetic before the board votes, builds the notice and petition deadlines into the budget calendar so nothing is missed by a day, and writes the owner cover letter that keeps a necessary increase from becoming a petition. If your board is adopting a difficult budget, <a href="/contact">contact our office</a> or learn more about our <a href="/services/financial-management">financial management services</a>.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal advice. It summarizes Section 18(a)(8) of the Condominium Property Act and Section 1-45 of the Common Interest Community Association Act as enacted; your condominium or community instruments may add requirements. Have association counsel review any assessment you expect to be challenged.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-assessments-after-foreclosure-sale',
    title: 'Six Months of Assessments After an Illinois Foreclosure',
    metaDescription:
      'Section 9(g) of the Illinois Condominium Property Act sets what a foreclosure purchaser owes an association: assessments from the month after the sale, plus up to six months of arrears.',
    date: '2026-11-17',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Financial Management',
    readTime: '9 min read',
    excerpt:
      'When a delinquent unit in your building is foreclosed, how much of the unpaid balance survives? Illinois answers it in Section 9(g), and the answer differs depending on whether the buyer is the mortgagee or a third party — and depends on whether the association filed a collection action. The timing is in the board’s hands.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Sections 9 and 9.2',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
    ],
    content: `
      <p>Foreclosures move slowly and associations lose money the whole time. By the time a sale happens, an association can be eighteen months into unpaid assessments on a unit nobody is living in. The question the board needs answered is simple: how much of that comes back?</p>

      <p>Section 9(g) of the Illinois Condominium Property Act answers it, and the answer has two different shapes depending on who buys.</p>

      <h2>What does the association's lien cover in the first place?</h2>

      <p>Section 9(g)(1) is the foundation. If a unit owner fails or refuses to make any payment of common expenses or the amount of any unpaid fine when due, the amount — <strong>together with any interest, late charges, reasonable attorney fees</strong> incurred enforcing the covenants of the condominium instruments, the rules and regulations, or any applicable statute or ordinance, <strong>and costs of collection</strong> — constitutes a lien on the unit owner's interest in the property.</p>

      <p>That lien has priority over all other liens and encumbrances, recorded or unrecorded, except two: taxes, special assessments and special taxes levied by a political subdivision, plus other state and federal taxes that by law take priority; and encumbrances on the owner's interest recorded <em>before</em> the date of the failure or refusal which by law would take priority over later encumbrances.</p>

      <p>The second exception is the one that matters in practice: a first mortgage recorded years before the owner stopped paying generally sits ahead of the association's lien. That is why the association's recovery after a foreclosure depends on Section 9(g)(3) and 9(g)(4) rather than on lien priority. Section 9(g)(1) also adds that any action brought to extinguish the association's lien must include the association as a party.</p>

      <h2>What does the buyer owe going forward?</h2>

      <p>Section 9(g)(3) covers the purchaser at a judicial foreclosure sale, a mortgagee who takes title by deed in lieu of foreclosure or judgment by common law strict foreclosure, and a party who takes possession under a court order through the Illinois Mortgage Foreclosure Law. Each has the duty to pay the unit's proportionate share of common expenses assessed <strong>from and after the first day of the month after</strong> the date of the judicial foreclosure sale, the delivery of the deed in lieu, the entry of the strict foreclosure judgment, or the taking of possession under the court order.</p>

      <p>And that payment does something important: it <strong>confirms the extinguishment</strong> of the lien created under 9(g)(1) or 9(g)(2) arising from the prior owner's failure to pay — where the sale has been confirmed by court order, the deed in lieu has been accepted by the lender, or a consent judgment has been entered.</p>

      <p>So the association's lien for the old arrears does not simply vanish on the day of the sale. Its extinguishment is confirmed by the new owner paying the going-forward assessments. A board should therefore be prompt and precise about billing the new owner from the first day of the month after the sale.</p>

      <h2>Where do the six months come from?</h2>

      <p>Section 9(g)(4) applies to a narrower group: the purchaser at a judicial foreclosure sale <strong>other than a mortgagee</strong> who takes possession under a court order, and a purchaser who acquires title <strong>from a mortgagee</strong>. That purchaser has the duty to pay the unit's proportionate share, if any, of the common expenses that:</p>

      <ul>
        <li>would have become due <strong>in the absence of any assessment acceleration</strong>,</li>
        <li><strong>during the 6 months immediately preceding institution of an action to enforce the collection of assessments</strong>, and</li>
        <li><strong>which remain unpaid</strong> by the owner during whose possession the assessments accrued.</li>
      </ul>

      <p>Three things follow, and each one is a board decision in disguise.</p>

      <p><strong>First, the six months are measured backwards from the association's collection action — not from the foreclosure sale.</strong> If the association never instituted an action to enforce collection, there is no date from which to count. That is the single most consequential point in this Section for a board: the six-month recovery depends on the association having started a collection action.</p>

      <p><strong>Second, acceleration is stripped out.</strong> The figure is what would have become due absent any acceleration — the ordinary monthly amounts for those six months, not a full-year balance the association declared due at once.</p>

      <p><strong>Third, the mortgagee itself is excluded.</strong> Where the bank takes title and holds it, 9(g)(4) does not apply to the bank; 9(g)(3) governs its going-forward obligation. The six months attach when a third party buys at the sale or buys from the mortgagee.</p>

      <h2>The sentence that costs associations money</h2>

      <p>Section 9(g)(4) ends with this: "If the outstanding assessments are paid at any time during any action to enforce the collection of assessments, the purchaser shall have no obligation to pay any assessments which accrued before he or she acquired title."</p>

      <p>Read that against the way foreclosures actually unfold. If the arrears get paid during the association's collection action — by the former owner, by a lender protecting its position, by anyone — the purchaser owes nothing from before it took title. The six-month claim exists only where the arrears were still outstanding.</p>

      <p>This is not a reason to delay collection in the hope of preserving a claim. It is a reason to understand that the association's recovery route is the collection action itself, and that the six months is a backstop, not a plan.</p>

      <h2>Does the buyer have to be told?</h2>

      <p>Yes, in two places, under Section 9(g)(5). The notice of sale of a condominium unit under subsection (c) of Section 15-1507 of the Code of Civil Procedure must state that the purchaser of the unit, other than a mortgagee, shall pay the assessments and the legal fees required by subdivisions (g)(1) and (g)(4) of Section 9.</p>

      <p>And the association's own documents carry the same duty: the statement of assessment account issued by the association to a unit owner under Section 18(i), and the disclosure statement issued to a prospective purchaser under Section 22.1, <strong>shall state the amount of the assessments and the legal fees, if any, required by subdivisions (g)(1) and (g)(4)</strong>.</p>

      <p>That is a direct instruction to whoever prepares your resale disclosures. If your 22.1 statement does not carry those figures where they apply, fix the template. See our <a href="/blog/illinois-22-1-disclosure-packet-checklist">22.1 packet checklist</a> and <a href="/blog/illinois-section-22-1-disclosure-board-guide">Section 22.1 board guide</a>, and note that <a href="/services/resale-disclosures">our resale disclosure service</a> exists partly because this detail is so often missed.</p>

      <h2>Can the association foreclose its own lien?</h2>

      <p>Yes. Section 9(h) provides that the lien for common expenses is in favor of the members of the board and their successors in office, for the benefit of all other unit owners; that notice of the lien may be recorded by the board — or by any unit owner if the developer is the manager or holds a board majority and fails to record it; and that upon recording, the lien may be foreclosed by an action brought in the name of the board in the same manner as a mortgage of real property. Section 9(i) lets the board bid on the foreclosed interest at the sale and acquire, hold, lease, mortgage and convey it, unless the declaration says otherwise.</p>

      <p>Whether that is ever the right move is a question for counsel and depends entirely on the equity in the unit. Our guides to <a href="/blog/illinois-condo-association-liens-delinquency">association liens and delinquencies</a> and the <a href="/blog/illinois-condo-assessment-collection-possession-action">assessment collection possession action</a> cover the realistic alternatives.</p>

      <h2>What about attorney's fees and manager collection fees?</h2>

      <p>Section 9.2(b) provides that attorney's fees incurred by the association arising out of a default by a unit owner, their tenant, invitee or guest are added to and deemed part of that owner's share of the common expenses.</p>

      <p>Section 9.2(c) is stricter about everything else. Other than attorney's fees, no fees pertaining to the collection of an owner's financial obligation — including fees charged by a manager or managing agent — may be added to and deemed part of the owner's share of common expenses unless all three of these hold: the managing agent fees relate to the costs to collect common expenses for the association; the fees are set forth in a contract between the managing agent and the association; and the authority to add them to the owner's share is specifically stated in the declaration or bylaws.</p>

      <p>Check your declaration for that third condition before any collection fee goes on an owner's ledger. If it is silent, the fee cannot ride there — and it will be the thing an owner's attorney finds first.</p>

      <h2>Board checklist</h2>

      <ul>
        <li>Know the date your association instituted its collection action on any unit now in foreclosure. That date defines the six-month window.</li>
        <li>Do not let a delinquent file sit without a decision. The <a href="/blog/condo-hoa-delinquency-escalation-process">escalation process</a> is also the mechanism that preserves the 9(g)(4) claim.</li>
        <li>Monitor the foreclosure docket on delinquent units so you learn the sale date from the court, not from a new neighbour.</li>
        <li>Bill the new owner from the first day of the month after the sale, in the first month — not retroactively six months later.</li>
        <li>Identify who bought: mortgagee, third party at sale, or purchaser from the mortgagee. The answer changes what is owed.</li>
        <li>Calculate the six-month figure without acceleration, and have counsel confirm it before you send it.</li>
        <li>Make sure your Section 18(i) account statements and Section 22.1 disclosure statements state the 9(g)(1) and 9(g)(4) amounts where they apply.</li>
        <li>Confirm the association was named as a party in the foreclosure action, as Section 9(g)(1) requires for an action to extinguish its lien.</li>
        <li>Check the declaration for authority to charge manager collection fees before adding any.</li>
        <li>Write the association's practice into the <a href="/blog/illinois-condo-hoa-collection-policy-january-2027">written collection policy</a> required from January 1, 2027.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar tracks the foreclosure docket on delinquent units, works with association counsel so the collection action is filed when it should be rather than after the sale, bills new owners from the correct month, and keeps the 22.1 statements accurate on the amounts Section 9(g)(5) requires. If your association has units in foreclosure, <a href="/contact">contact our office</a> or see our <a href="/services/financial-management">financial management</a> and <a href="/services/resale-disclosures">resale disclosure</a> services.</p>

      <p><em>This article is general information for Illinois condominium boards and is not legal advice. It summarizes Sections 9 and 9.2 of the Condominium Property Act as enacted. Foreclosure outcomes turn on court records and the specific facts of each sale — have association counsel calculate what is owed before you demand it.</em></p>
    `,
  },
  {
    slug: 'illinois-association-records-retention-schedule',
    title: 'How Long Must an Illinois Association Keep Its Records?',
    metaDescription:
      'Section 19 of the Illinois Condominium Property Act sets retention periods: 7 years of minutes, 10 fiscal years of books and records, 12 months of ballots. The full schedule for boards.',
    date: '2026-11-18',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '9 min read',
    excerpt:
      'Illinois does not leave record retention to the board’s discretion. Section 19 of the Condominium Property Act names ten categories of records the board must keep at the principal office, and attaches specific periods to three of them. CICAA has its own, different schedule. Here is both, as a retention policy a board can adopt.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 19, Records of the association',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160) — Section 1-30(i), Board records',
        url: 'https://www.ilga.gov/legislation/ILCS/details?ActID=3273&ChapterID=62&ChapAct=FullText',
      },
    ],
    content: `
      <p>Record retention is the kind of duty that costs nothing to meet and a great deal to have ignored. The time a board discovers Section 19 is usually the week an owner asks for ten years of financial records, or the month a management transition reveals that the previous company kept three.</p>

      <p>Our guide to <a href="/blog/illinois-condo-association-records-request-guide">responding to a records request</a> covers the request side. This one covers the question underneath it: what must exist in the first place, and for how long.</p>

      <h2>What records must a condominium board keep?</h2>

      <p>Section 19(a) requires the board of managers of every association to keep and maintain the following records, or true and complete copies of them, <strong>at the association's principal office</strong>:</p>

      <ol>
        <li>The declaration, bylaws and plats of survey, and all amendments.</li>
        <li>The rules and regulations, if any.</li>
        <li>If incorporated, the articles of incorporation and all amendments.</li>
        <li><strong>Minutes of all meetings</strong> of the association and its board of managers <strong>for the immediately preceding 7 years</strong>.</li>
        <li>All current policies of insurance of the association.</li>
        <li>All contracts, leases and other agreements then in effect to which the association is a party, or under which the association or the unit owners have obligations or liabilities.</li>
        <li>A current listing of the names, addresses, email addresses, telephone numbers and weighted vote of all members entitled to vote.</li>
        <li><strong>Ballots and proxies related to ballots</strong> for all matters voted on by the members <strong>during the immediately preceding 12 months</strong>, including but not limited to the election of board members.</li>
        <li><strong>The books and records</strong> for the association's <strong>current and 10 immediately preceding fiscal years</strong>, including but not limited to itemized and detailed records of all receipts, expenditures and accounts.</li>
        <li><strong>Any reserve study.</strong></li>
      </ol>

      <p>Three periods, then. Seven years of minutes. Twelve months of ballots and proxies. Eleven years of financial records, counting the current year plus ten. Item (10) has no period attached at all, which reads most naturally as keeping any reserve study the association has.</p>

      <h2>Which records must be produced on request?</h2>

      <p>Section 19(b) gives any member the right to inspect, examine and copy the records in items (1), (2), (3), (4), (5), (6), (9) and (10) — in person or by agent, at any reasonable time, at the principal office. The member must submit a written request to the board or its authorized agent <strong>stating with particularity the records sought</strong>. Failure to make the requested records available <strong>within 10 business days</strong> of receipt is deemed a denial. A member who prevails in an enforcement action to compel examination of those records is entitled to recover reasonable attorney's fees and costs from the association.</p>

      <p>Items (7) and (8) — the member list and the ballots — are handled separately under Section 19(e). A member may inspect them but <strong>only for a purpose that relates to the association</strong>. The board may require the member to certify in writing that the information will not be used for any commercial purpose or any purpose unrelated to the association, and may fine a person who makes a false certification. The same 10-business-day clock applies. But on these items, attorney's fees are available to a prevailing member <strong>only if the court finds the board acted in bad faith</strong> in denying the request.</p>

      <p>Section 19(d-5) defines "commercial purpose" as using any part of those records, or information derived from them, in any form for sale, resale, solicitation or advertisement for sales or services. And Section 19(e) carries a specific accommodation for secret-ballot elections: a board that adopted a secret ballot process under Section 18 is not deemed to have denied a request for item (8) records if it makes voting ballots available without identifying unit numbers within the 10 business days.</p>

      <h2>What may the board withhold?</h2>

      <p>Section 19(g) lists five categories an association need not make available for inspection, examination or copying by its members, unless a court orders otherwise:</p>

      <ol>
        <li>Documents relating to appointment, employment, discipline or dismissal of association employees;</li>
        <li>Documents relating to actions pending against or on behalf of the association or its board in a court or administrative tribunal;</li>
        <li>Documents relating to actions threatened against, or likely to be asserted on behalf of, the association or its board;</li>
        <li>Documents relating to common expenses or other charges owed by a member <strong>other than the requesting member</strong>; and</li>
        <li>Documents provided to the association in connection with the lease, sale or other transfer of a unit by a member other than the requesting member.</li>
      </ol>

      <p>Category 4 is the one to internalise. An owner is entitled to the association's financial records; an owner is not entitled to their neighbour's ledger. Boards that forget this create a privacy problem out of a routine request.</p>

      <h2>What may the association charge?</h2>

      <p>Section 19(f) allows the association to charge the requesting member the <strong>actual cost to the association of retrieving and making the records available</strong> for inspection and examination. If the member requests copies, the <strong>actual costs of reproducing</strong> them may also be charged.</p>

      <p>"Actual cost" is a ceiling, not an invitation. A per-page figure set years ago and never revisited, or a flat administrative fee, is not what the statute describes. Keep the basis for the charge documented.</p>

      <h2>Can the declaration override any of this?</h2>

      <p>No. Section 19(h) provides that the Section's provisions apply to all condominium instruments recorded under the Act; that any portion of a condominium instrument containing provisions contrary to them is <strong>void as against public policy and ineffective</strong>; and that any condominium instrument failing to contain the required provisions is deemed to incorporate them by operation of law.</p>

      <p>So a 1974 declaration that gives owners fewer rights than Section 19 does not reduce the duty. Read the statute, not the declaration, when answering a records question.</p>

      <h2>How is the CICAA schedule different?</h2>

      <p>Section 1-30(i) of the Common Interest Community Association Act sets its own, shorter list and its own periods. The board must maintain and make available for examination and copying at convenient hours of weekdays — by any member or unit owner subject to the board's authority, their mortgagees, and their duly authorized agents or attorneys:</p>

      <ul>
        <li>The recorded declaration and other community instruments, recorded covenants and bylaws and amendments, articles of incorporation or organization, annual reports and any rules adopted by the board. Before the board is organized, the developer must maintain and make these available.</li>
        <li><strong>Detailed and accurate records in chronological order</strong> of receipts and expenditures affecting the common areas, itemizing maintenance and repair expenses and any other expenses incurred, and copies of all contracts, leases or other agreements entered into by the board.</li>
        <li><strong>Minutes of all board meetings, maintained for not less than 7 years.</strong></li>
        <li>With a written statement of a proper purpose, <strong>ballots and related proxies for any board election and any other matter voted on by the members, maintained for not less than one year</strong>.</li>
        <li>With a written statement of a proper purpose, such other board records as are available for inspection by members of a not-for-profit corporation under Section 107.75 of the General Not For Profit Corporation Act of 1986.</li>
        <li>Written designations by a trustee, officer or manager of a land trust, living trust or other entity of a person to cast votes for a unit, effective until a subsequent document is filed.</li>
        <li><strong>Any reserve study.</strong></li>
      </ul>

      <p>Two differences matter operationally. CICAA gives the board <strong>30 days</strong> to respond rather than 10 business days — failure to provide the record or to respond within 30 days is deemed a denial. And it allows "a reasonable fee" for the cost of retrieving and copying records properly requested, rather than actual cost. On fees, Section 1-30(i)(4) awards reasonable attorney's fees and costs to a member who prevails only where the court finds the failure was due to the acts or omissions of the board.</p>

      <p>Note what CICAA does <em>not</em> specify: an eleven-year financial retention period. It requires detailed and accurate chronological records of receipts and expenditures without naming a term. A CICAA board should ask counsel what period to adopt, and should not assume it is shorter just because the statute is quiet.</p>

      <h2>A retention policy a board can adopt</h2>

      <p>Nothing requires a written retention policy, and every association benefits from one. A workable version:</p>

      <ul>
        <li><strong>Permanent:</strong> declaration, bylaws, plats, articles of incorporation, all amendments, recorded documents, every reserve study ever commissioned.</li>
        <li><strong>Permanent in practice:</strong> engineering and inspection reports, capital project records, warranties. Nothing requires this and a lender, a buyer or an engineer will ask.</li>
        <li><strong>At least 11 years (current plus 10 fiscal years):</strong> general ledger, bank statements, invoices, receipts, assessment ledgers, audits, tax filings.</li>
        <li><strong>At least 7 years:</strong> minutes of all board and membership meetings. Many boards keep minutes permanently, and should.</li>
        <li><strong>At least 1 year:</strong> ballots and proxies. Confirm with counsel before destroying any ballot connected to a contested election.</li>
        <li><strong>While in effect, plus the limitations period counsel advises:</strong> contracts, leases, insurance policies.</li>
        <li><strong>Current:</strong> the member list with addresses, email addresses, phone numbers and weighted votes.</li>
      </ul>

      <p>Before destroying anything, ask counsel two questions: is there any pending, threatened or likely litigation, and is there any audit or regulatory matter open? A retention policy is not a licence to destroy a document someone has asked for.</p>

      <h2>Board checklist</h2>

      <ul>
        <li>Identify the association's principal office — the place Section 19 says the records must be. If it is a manager's office, say so in writing.</li>
        <li>Audit what you actually hold against the ten items in Section 19(a). Most boards find gaps in items 6, 7 and 9.</li>
        <li>Count back: do you have 7 years of minutes and 11 years of financial records? If a prior manager held them, request them now, not at the next transition.</li>
        <li>Build the member list to include email addresses and weighted votes, not just mailing addresses.</li>
        <li>Adopt a written retention policy and a records-request procedure with the 10-business-day clock built in.</li>
        <li>Train whoever opens the mail to date-stamp a records request the day it arrives.</li>
        <li>Keep a log of every request, what was produced, when, and what was charged.</li>
        <li>Document how any retrieval or copying charge is calculated.</li>
        <li>Store the archive somewhere that survives a board turnover and a flooded storage room — cloud storage with two people holding access.</li>
        <li>Remember the <a href="/blog/illinois-association-website-requirement-2028">website requirement</a> is additive: posting minutes does not discharge the duty to produce records on request.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar holds each association's records to the statutory list in one place, with the retention periods tracked, requests logged against the statutory clock, and the archive in a form that survives a change of board or manager. If your board is not sure what it has, <a href="/contact">contact our office</a> or see our <a href="/services/board-support">board support</a> service — and our guide to <a href="/blog/switch-condo-management-companies-chicago">switching management companies</a> if the gap turns out to be at your current one.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal advice. It summarizes Section 19 of the Condominium Property Act and Section 1-30(i) of the Common Interest Community Association Act as enacted. Before destroying any record, have association counsel confirm no litigation, audit or regulatory matter requires it to be kept.</em></p>
    `,
  },
  {
    slug: 'illinois-association-flag-display-rules',
    title: 'Flags and Flagpoles: What Illinois Owners May Display',
    metaDescription:
      'Illinois law bars condo and HOA boards from prohibiting the American flag, military flags and flagpoles on limited common elements. What boards may still regulate, and what the law omits.',
    date: '2026-11-19',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'Illinois protects two kinds of flag display in community associations, and a board rule to the contrary does not survive the statute. It also leaves a great deal to the board — placement, manner, flagpole location and size — and says nothing at all about political signs. Knowing which side of the line a request sits on prevents most of these disputes.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 18.6, Display of American flag or military flag',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160) — Section 1-70, Display of American flag or military flag',
        url: 'https://www.ilga.gov/legislation/ILCS/details?ActID=3273&ChapterID=62&ChapAct=FullText',
      },
      {
        title: 'United States Code, Title 4, Chapter 1 — the flag code referenced by the Illinois statute',
        url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title4/html/USCODE-2023-title4-chap1.htm',
      },
    ],
    content: `
      <p>Flag disputes in associations have a predictable shape. An owner hangs a flag from a balcony. A rule says nothing may be affixed to the exterior. Somebody writes a violation letter, and the association is suddenly in a conversation it cannot win on the merits.</p>

      <p>Illinois settled most of this. Section 18.6 of the Condominium Property Act and Section 1-70 of the Common Interest Community Association Act contain substantially the same rule, and they are emphatic about overriding the documents.</p>

      <h2>What does the statute protect?</h2>

      <p>Both Sections open the same way: notwithstanding any provision in the declaration, bylaws, rules, regulations, agreements or other instruments of the association — <em>or a board's construction of any of those instruments</em> — a board <strong>may not prohibit</strong> the display of the American flag or a military flag, or both:</p>

      <ul>
        <li><strong>On or within the limited common areas and facilities of a unit owner</strong>; or</li>
        <li><strong>On the immediately adjacent exterior of the building</strong> in which the owner's unit is located.</li>
      </ul>

      <p>And a board <strong>may not prohibit the installation of a flagpole</strong> for the display of either flag in those same locations.</p>

      <p>The phrase "or a board's construction of any of those instruments" is doing real work. It closes the argument that a general rule — nothing affixed to the exterior, no items on balconies — can be read to reach flags. A board cannot get to a prohibition by interpretation any more than by a rule that says so.</p>

      <p>The Condominium Property Act version also defines "board" to include a board of managers, a board of a master association, and a board of a common interest community association.</p>

      <h2>What counts as an American flag or a military flag?</h2>

      <p>The definitions are narrower than most people assume, and the narrowness is in the association's favour.</p>

      <p><strong>"American flag"</strong> means the flag of the United States as defined in Section 1 of Chapter 1 of Title 4 of the United States Code and the Executive Orders entered in connection with it, <strong>made of fabric, cloth or paper</strong>, displayed from a staff or flagpole or in a window. It expressly <strong>does not include</strong> a depiction or emblem of the American flag made of lights, paint, roofing, siding, paving materials, flora or balloons, or any other similar building, landscaping or decorative component.</p>

      <p><strong>"Military flag"</strong> means a flag of any branch of the United States armed forces or the Illinois National Guard, and — in the condominium version, following a 2024 amendment — the Honor and Remember Flag, again made of fabric, cloth or paper, displayed from a staff or flagpole or in a window, with the same exclusion for painted, lighted or landscaped depictions.</p>

      <p>So a cloth flag on a balcony staff is protected. A flag painted on a garage door, picked out in rope lighting, or planted in red, white and blue flowers is not within the statute's protection and remains subject to the association's ordinary architectural rules.</p>

      <h2>What can a board still regulate?</h2>

      <p>A good deal, and this is where a sensible rule earns its keep. Both Sections expressly allow:</p>

      <ul>
        <li><strong>Reasonable rules and regulations regarding the placement and manner of display of the American flag</strong>, consistent with Sections 4 through 10 of Chapter 1 of Title 4 of the United States Code;</li>
        <li><strong>Reasonable rules and regulations regarding the placement and manner of display of a military flag</strong>; and</li>
        <li><strong>Reasonable rules and regulations regarding the location and size of flagpoles.</strong></li>
      </ul>

      <p>Note the asymmetry: for the American flag, the rules must be consistent with the federal flag code; for a military flag, the statute requires only that they be reasonable. And for flagpoles, the board's authority is over location and size — not over whether a flagpole may be installed at all.</p>

      <h2>What a workable flag rule looks like</h2>

      <p>One page, adopted before anyone has a grievance:</p>

      <ol>
        <li><strong>State the right.</strong> Owners may display the American flag and military flags as defined by Illinois law on or within their limited common elements and on the immediately adjacent building exterior, and may install a flagpole for that purpose.</li>
        <li><strong>Placement and manner.</strong> Where a staff may be mounted, how it may be fastened, maximum flag dimensions, and a requirement that the mounting not damage the common elements or create a hazard. For the American flag, write these consistent with the federal flag code.</li>
        <li><strong>Flagpole location and size.</strong> A stated maximum height and a stated location, with a short approval step that is about location and size only.</li>
        <li><strong>Repair of damage.</strong> That the owner is responsible for repairing damage to the common elements caused by the installation — a conventional term, and one to run past counsel.</li>
        <li><strong>What is not covered.</strong> A plain statement that painted, lighted, landscaped or similar depictions, and flags other than those the statute defines, are governed by the association's architectural rules.</li>
      </ol>

      <p>Have counsel review it, and adopt it through your ordinary rules process. Our guide to <a href="/blog/adopting-enforcing-condo-hoa-rules-illinois">adopting and enforcing rules in Illinois</a> covers that process, and <a href="/blog/are-hoa-condo-rules-enforceable-illinois">whether your rules are enforceable</a> covers why a rule that conflicts with a statute is not a rule.</p>

      <h2>What about political signs, pride flags and other banners?</h2>

      <p>This is the question boards most often ask next, and the honest answer is that Sections 18.6 and 1-70 do not address it. Neither Act contains a political-sign provision, and neither extends to flags outside the two defined categories.</p>

      <p>That does not mean a board can do whatever it likes. Other bodies of law — including fair housing law, and in some places municipal ordinances — can bear on what an association may restrict, and those questions are fact-specific and litigated. We will not summarise them here, because the sourcing standard for this site is primary authority and the answers in this area do not come from a statute page.</p>

      <p>What a board should do is practical. Decide the policy question before a request arrives, with counsel, so the answer does not look like it was reverse-engineered from who asked. Apply whatever rule you adopt uniformly, which is the single best protection in this area. And when a request arrives that is not plainly within Section 18.6 or 1-70, send it to counsel before sending a violation letter.</p>

      <h2>What should a board do about an existing display?</h2>

      <p>If an owner is flying a protected flag and the association has an open violation file, close it. If a fine has been levied on the basis of a provision the statute makes unenforceable, ask counsel how to reverse it — a fine resting on an unenforceable prohibition is not a fine the association will keep, and pursuing it is how a flag dispute becomes a lawsuit with a sympathetic plaintiff.</p>

      <p>If the display is genuinely a safety or damage problem — a staff mounted into a lintel, a flag blocking an egress path — that is a placement-and-manner question, which is squarely within the board's authority. Address it as that, in writing, with the specific concern named. Do not address it as a prohibition.</p>

      <p>See our guide to <a href="/blog/illinois-association-fines-notice-hearing">fines, notice and hearing</a> for the procedure, and <a href="/blog/common-condo-rule-violations-chicago">common condo rule violations in Chicago</a> for the wider context.</p>

      <h2>Board checklist</h2>

      <ul>
        <li>Read the declaration, bylaws and rules for any provision that prohibits or could be read to prohibit flags or flagpoles.</li>
        <li>Have counsel confirm which of those are unenforceable under Section 18.6 or Section 1-70.</li>
        <li>Adopt a written flag rule covering placement, manner, and flagpole location and size — reasonable, and for the American flag consistent with the federal flag code.</li>
        <li>Close any open violation or fine aimed at a protected display.</li>
        <li>Decide, with counsel and in advance, how the association will handle displays the statute does not cover.</li>
        <li>Apply the rule uniformly, and record decisions in the minutes.</li>
        <li>Brief the manager and door staff so the first response to a flag is not a violation letter.</li>
        <li>Put the rule in the owner welcome packet so new owners know the answer before they drill.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar reviews each association's documents against the flag statutes, works with counsel on a rule that holds, and handles the day-to-day so that a request about a flag gets a considered answer rather than a form letter. If your board needs a flag and flagpole rule on the books, <a href="/contact">contact our office</a> or see our <a href="/services/violation-management">violation management</a> and <a href="/services/board-support">board support</a> services.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal advice. It summarizes Section 18.6 of the Condominium Property Act and Section 1-70 of the Common Interest Community Association Act as enacted. Displays outside those Sections raise questions this article does not address — have association counsel advise your board before restricting any display.</em></p>
    `,
  },
  {
    slug: 'illinois-association-solar-panel-rights',
    title: 'Solar Panels in Illinois Associations: Who Has the Right',
    metaDescription:
      'The Illinois Homeowners’ Energy Policy Statement Act bars associations from prohibiting solar — but not for buildings over 60 feet or with a shared roof. The policy, the deadlines and the limits.',
    date: '2026-11-20',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '10 min read',
    excerpt:
      'Illinois law prohibits associations from banning solar energy systems, requires a written energy policy statement within 90 days of a request, and gives owners a self-help remedy if the board does not act. It also exempts buildings over 60 feet tall and buildings with a shared roof — which excludes most condominiums. Knowing which side your association is on comes first.',
    sources: [
      {
        title: 'Homeowners’ Energy Policy Statement Act (765 ILCS 165)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3278&ChapterID=62',
      },
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 18.4, powers and duties of the board',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
    ],
    content: `
      <p>Illinois has a solar access law for community associations, and it has real teeth — a flat prohibition on banning solar, deadlines on the board, a self-help remedy for the owner, and fees to the prevailing party. It also has an exemption that removes most condominium buildings from its scope entirely.</p>

      <p>Start with the exemption, because getting that wrong in either direction wastes everyone's time.</p>

      <h2>Which buildings does the Act not apply to?</h2>

      <p>Section 45 of the Homeowners' Energy Policy Statement Act says the Act does not apply to any building that:</p>

      <ol>
        <li><strong>Is greater than 60 feet in height;</strong> or</li>
        <li><strong>Has a shared roof</strong> and is subject to a homeowners' association, common interest community association, or condominium unit owners' association.</li>
      </ol>

      <p>The Act defines "shared roof" as any roof that (i) serves more than one unit, including a contiguous roof serving adjacent units, or (ii) is part of the common elements or common area.</p>

      <p>Read that against the Chicago and North Shore housing stock. A six-flat has a shared roof. A courtyard building has a shared roof. A high-rise is over 60 feet and has a shared roof. A row of attached townhomes under one contiguous roof plane has a shared roof — the definition says so expressly. What is left inside the Act is mainly the detached or fully separated single-family home in a homeowners' association, with its own roof, under 60 feet.</p>

      <p>So for most condominium boards in our market, the answer to "can an owner put panels on the roof" is not governed by this Act at all. It is governed by the declaration, by the board's authority over the common elements under Section 18.4(a) of the Condominium Property Act, and by whatever architectural process the association has. That is a different conversation, and a board should have it on the merits — roof age and warranty, load, penetrations, access, insurance, who maintains the equipment, what happens at resale — rather than treating the statute as either a mandate or a shield.</p>

      <h2>What does the Act require where it does apply?</h2>

      <p>Three things, in ascending order of bite.</p>

      <p><strong>First, no prohibition.</strong> Section 15 provides that the adoption of a bylaw or the exercise of any power by the governing entity of a homeowners', common interest community or condominium association which prohibits — or has the effect of prohibiting — the installation of a solar energy system is expressly prohibited. Section 20(a) extends the same rule to deed restrictions, covenants and similar agreements running with the land.</p>

      <p>Section 20(a) goes further than a simple ban on bans. A property owner may not be denied permission to install a solar energy system, and may not be required to use specific technology — the statute names solar shingles rather than traditional panels as the example. The association <em>may</em> determine the specific configuration of the system's elements on a given roof face, but it <strong>may not prohibit elements from being installed on any roof face</strong>, and any such determination <strong>may not reduce the production of the system by more than 10%</strong>. "Production" means the estimated annual electrical production of the system.</p>

      <p>Section 20(c) makes any conflicting provision of a declaration or energy policy statement void and unenforceable as contrary to public policy.</p>

      <p><strong>Second, a written energy policy statement.</strong> Under Section 20(b), within <strong>90 days</strong> after the association receives a request for a policy statement or an application from a member, the association shall adopt a written energy policy statement. Any such statement, whenever adopted, must explicitly include as minimum standards the terms of Section 20, and may also address:</p>

      <ul>
        <li>The location, design and architectural requirements of solar energy systems; and</li>
        <li>Whether a wind energy collection, rain water collection or composting system is allowed, and if so the location, design and architectural requirements of those systems.</li>
      </ul>

      <p>Section 20(b) then lists what the statement may not do. It may not condition approval on approval by adjacent property owners. The association may not inquire into a property owner's energy usage, impose conditions impairing the operation of a solar energy system, impose conditions negatively impacting any component industry standard warranty, or require post-installation reporting. And permission may not be denied based on system ownership or the financing method the owner chose — which rules out refusing a leased or third-party-owned system as such.</p>

      <p>What the statement <em>may</em> do: impose reasonable conditions concerning the maintenance, repair, replacement and ultimate removal of damaged or inoperable systems, <strong>so long as those conditions are not more onerous than the association's analogous conditions for nonsolar projects</strong>. The association must disclose the statement on request and include it in its declaration.</p>

      <p><strong>Third, deadlines on applications.</strong> Section 30(a) requires that where approval is needed, the application be made available in hard copy at an owner's request or, if the association maintains a website, through the website. The association need not use a solar-specific form. It <strong>may not impose any fee</strong> for a solar application above what it charges for any other application related to changes to property. And the application <strong>must be processed within 30 days</strong> of submission. At the owner's request, the association may communicate with the owner's solar contractor. Section 30(b) extends the period to <strong>120 days</strong> where the application is submitted before the association has adopted a written energy policy statement.</p>

      <h2>What happens if the board does nothing?</h2>

      <p>Section 30(c) is the provision that should get a board's attention. If an association fails to adopt a written solar energy policy statement consistent with the Act, or fails to process an application within the specified time, the <strong>property owner may proceed with the installation</strong> notwithstanding any other policy or provision in the declaration.</p>

      <p>There is a safeguard, and it is short. Before proceeding, the owner must give the association <strong>written notice of the alleged failure and 10 business days to cure</strong>. During those 10 business days the association <strong>may only adopt the policy statement or process the application</strong> — it may not take other action, including seeking injunctive relief. And in that situation the association may not impose fines or otherwise penalize the owner for exercising their rights under the Act.</p>

      <p>Ten business days, and the only permitted moves are the two the board should have made already. A board that lets an application sit has handed the decision to the owner.</p>

      <p>Section 30(d) also lets an owner resubmit a previously denied application, to be evaluated under the 2023 amendments.</p>

      <h2>What are the consequences of getting it wrong?</h2>

      <p>Section 35 provides that any entity other than a public entity that <strong>willfully violates</strong> the Act is liable to the applicant for actual damages and any other consequential damages — and that an entity which complies with the Act is not liable to any other resident or third party for that compliance. That second half is useful: a board that approves a system under the Act has statutory cover against the neighbour who objects.</p>

      <p>Section 40 adds that in any litigation arising under the Act or involving its application, <strong>the prevailing party is entitled to costs and reasonable attorney's fees</strong>. Two-way fee shifting changes the economics of a dispute entirely, and not in the association's favour where the association is in the wrong.</p>

      <p>Section 25 keeps other requirements in place: a solar energy system must meet applicable standards and requirements imposed by state and local permitting authorities other than the association. So the City of Chicago or the village still has its say on permits and code.</p>

      <h2>What should a board do now?</h2>

      <h3>If your buildings are exempt under Section 45</h3>
      <ul>
        <li>Confirm the exemption properly — height and roof configuration — rather than assuming it. A mixed association with both attached and detached homes may be exempt for some buildings and not others.</li>
        <li>Decide your position on roof-mounted equipment on the merits anyway. Owners will ask, and "the statute does not make us" is not an answer a board should be happy giving.</li>
        <li>If the association is considering association-owned solar on a common-element roof, treat it as a capital project with a reserve and insurance dimension. See our <a href="/blog/condo-hoa-capital-project-loan-preparation">capital project preparation guide</a>.</li>
      </ul>

      <h3>If the Act applies to any of your buildings</h3>
      <ul>
        <li>Adopt a written energy policy statement <em>before</em> a request arrives. Ninety days sounds generous and is not, once counsel review and a board vote are in it.</li>
        <li>Read your declaration and rules for anything that prohibits or effectively prohibits solar, and have counsel confirm what is void.</li>
        <li>Build the 30-day application clock into the board's calendar, with a named person responsible for date-stamping submissions.</li>
        <li>Check your application fee against what you charge for other property-change applications. A solar-specific surcharge is not allowed.</li>
        <li>Make sure maintenance, repair, replacement and removal conditions are no more onerous than your analogous conditions for nonsolar work — compare them side by side on paper.</li>
        <li>Remove anything requiring neighbour consent, energy-usage disclosure or post-installation reporting.</li>
        <li>Decide in advance how a configuration determination will be documented, including how the 10% production limit was respected. That is a calculation, and somebody will ask to see it.</li>
        <li>Put the statement on the association website once you have one, as Section 30(a) contemplates.</li>
      </ul>

      <h2>How does this compare to the EV charging law?</h2>

      <p>It is the same shape of statute — a prohibition on prohibitions, a required policy, deadlines on the board — and boards that handled EV charging well will recognise the pattern. See our guide to the <a href="/blog/illinois-condo-hoa-ev-charging-board-process">EV charging board process in Illinois</a>. The practical lesson from EV charging applies here: the associations that had a written policy before the first request spent a fraction of the time and legal cost of the ones that improvised.</p>

      <h2>How Stellar helps</h2>

      <p>Stellar confirms which of an association's buildings fall inside the Act, works with counsel on an energy policy statement that meets the statutory minimums without giving away the board's legitimate authority, and runs the application clock so a 30-day deadline is never missed by inattention. If your board needs a policy in place, <a href="/contact">contact our office</a> or see our <a href="/services/maintenance-coordination">maintenance coordination</a> and <a href="/services/board-support">board support</a> services.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal advice. It summarizes the Homeowners’ Energy Policy Statement Act as enacted; whether your buildings are exempt under Section 45, and what your policy statement should say, are questions for association counsel.</em></p>
    `,
  },
  {
    slug: 'illinois-association-snow-ice-sidewalk-liability',
    title: 'Snow and Ice: What Illinois Law Actually Protects',
    metaDescription:
      'The Illinois Snow and Ice Removal Act protects residential sidewalk clearing from liability unless willful or wanton. Chicago requires clearing by 10 p.m. or 10 a.m. with a 5-foot path.',
    date: '2026-11-21',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Maintenance',
    readTime: '9 min read',
    excerpt:
      'Two rules govern snow at an Illinois association, and they pull in different directions. A state immunity statute protects residential sidewalk clearing from liability unless the conduct was willful or wanton. A Chicago ordinance requires clearing on a tight clock with a five-foot path. What the immunity covers is narrower than most boards assume.',
    sources: [
      {
        title: 'Snow and Ice Removal Act (745 ILCS 75)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2084&ChapterID=58',
      },
      {
        title: 'City of Chicago — Sidewalk Snow Removal (Municipal Code 4-4-310 and 10-8-180)',
        url: 'https://www.chicago.gov/city/en/depts/cdot/supp_info/sidewalk_snow_removal.html',
      },
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Sections 12 and 18.4',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
    ],
    content: `
      <p>Every Chicago winter produces the same board conversation, usually in a hurry. Somebody fell. The question on the table is whether the association is exposed, and whether it was better off not shoveling at all.</p>

      <p>The last part of that is a myth with a grain of statute in it, and it is worth separating the two rules that apply.</p>

      <h2>What does the Illinois Snow and Ice Removal Act say?</h2>

      <p>The whole Act is two sections. Section 1 states the policy: it is the public policy of Illinois that owners and others residing in residential units be encouraged to clean the sidewalks abutting their residences of snow and ice, and that it is undesirable for any person to be found liable for damages due to their efforts in removing snow or ice from such sidewalks, except for acts amounting to clear wrongdoing.</p>

      <p>Section 2 is the operative provision:</p>

      <blockquote>
        <p>Any owner, lessor, occupant or other person in charge of any residential property, or any agent of or other person engaged by any such party, who removes or attempts to remove snow or ice from sidewalks abutting the property shall not be liable for any personal injuries allegedly caused by the snowy or icy condition of the sidewalk resulting from his or her acts or omissions unless the alleged misconduct was willful or wanton.</p>
      </blockquote>

      <p>So the immunity is real, and it is deliberately broad in one respect: it covers the person "in charge of" residential property and "any agent of or other person engaged by" them. On its face that language reaches an association and the contractor it engaged. Have counsel confirm how it applies to your association, because that is a legal conclusion about your facts.</p>

      <h2>Read the four limits in that sentence</h2>

      <p>The immunity is also much narrower than the way it gets repeated in board meetings. Four words and phrases do the limiting:</p>

      <p><strong>"Sidewalks abutting the property."</strong> That is the scope. The Act speaks about sidewalks abutting residential property. It says nothing about parking lots, driveways, interior walkways, courtyards, stairs, entries, garages or common-element paths inside the property line. Most falls at an association happen in exactly those places. Do not assume the Act reaches them.</p>

      <p><strong>"Personal injuries."</strong> The immunity is directed at personal injury claims allegedly caused by the snowy or icy condition of the sidewalk. It is not a general shield.</p>

      <p><strong>"Resulting from his or her acts or omissions."</strong> The immunity concerns the condition resulting from the removal acts or omissions.</p>

      <p><strong>"Unless the alleged misconduct was willful or wanton."</strong> The exception. Willful or wanton conduct is a standard developed in Illinois case law, and whether particular conduct meets it is litigated, not looked up. We are not going to characterise it here beyond saying that it is a higher bar than ordinary negligence and that it is not unreachable.</p>

      <p>There is a further body of Illinois law — the natural accumulation doctrine and premises liability generally — that governs the rest of the picture, including the areas this Act does not mention. That law comes from court decisions, not from a statute, so this guide does not summarise it. Ask association counsel, and ask before the season rather than after the claim.</p>

      <h2>What does Chicago require?</h2>

      <p>A separate question with much more precise answers. The City of Chicago cites Municipal Code sections 4-4-310 and 10-8-180 and states that property owners are responsible for clearing snow and ice from their sidewalks. The city's own guidance sets out:</p>

      <ul>
        <li><strong>Snow that falls between 7:00 a.m. and 7:00 p.m. must be removed no later than 10:00 p.m.</strong></li>
        <li><strong>Snow that falls between 7:00 p.m. and 7:00 a.m. must be removed by 10:00 a.m.</strong></li>
        <li><strong>A path at least 5 feet wide</strong> must be cleared on all sidewalks adjacent to the property, <strong>including any crosswalk ramps</strong>.</li>
        <li>Snow may not be shoveled into the right-of-way — transit stops and bus pads, parking spaces, bike lanes, bike racks, Divvy stations, or any other space where snow impedes traffic.</li>
        <li><strong>Corner lots:</strong> snow and ice must be removed from sidewalks on all sides of the building and from corner sidewalk ramps. This applies to residential property and business owners.</li>
        <li>At a traditional bus stop without a shelter, the adjoining property owner is responsible for clearing the stop as with any other sidewalk in the public way. The city's contractor handles sheltered stops.</li>
        <li><strong>Seven days a week.</strong> There is no weekend exemption.</li>
        <li><strong>Fines range from $50 to $500</strong>, with the amount determined case by case by an Administrative Hearings judge.</li>
      </ul>

      <p>Owners and residents can report an uncleared sidewalk to 311 as a "Snow - Uncleared Sidewalk or Bike Lane" request, so enforcement often begins with a neighbour rather than an inspector.</p>

      <p>If your association is outside the city, check the village code — the North Shore municipalities each have their own rules, and some differ materially from Chicago's clock.</p>

      <h2>So should the association shovel or not?</h2>

      <p>Shovel. The question is almost always framed backwards.</p>

      <p>The Act's stated purpose is to <em>encourage</em> clearing, and the immunity it provides exists to remove the disincentive. Chicago's ordinance requires clearing on a clock, with a fine attached. And the board's duty under Section 18.4(a) of the Condominium Property Act is to provide for the operation, care, upkeep, maintenance, replacement and improvement of the common elements — which a board does not discharge by leaving ice on the front walk.</p>

      <p>The useful version of the question is not whether to clear but how to clear in a way the association can later describe. That is a documentation problem more than a legal one.</p>

      <h2>What should the board actually do before the first storm?</h2>

      <h3>Get the contract right</h3>
      <ul>
        <li><strong>Define the trigger.</strong> A contract that says "plow when needed" produces an argument. State a snowfall depth, and state what happens with freezing rain and refreeze, which cause most falls.</li>
        <li><strong>Define the areas on a map.</strong> Sidewalks, entries, stairs, ramps, lot, drive aisles, garage approach, mail area, trash enclosure path. Mark who clears what, including anything the city requires that is outside the property line.</li>
        <li><strong>Define the clock.</strong> Build Chicago's 10 p.m. and 10 a.m. deadlines into the contract so the vendor is bound to the same times the association is.</li>
        <li><strong>Require ice treatment, not just plowing</strong>, and say what material and where.</li>
        <li><strong>Require certificates of insurance</strong> naming the association, its board and its managing agent as additional insureds. Section 12(i) of the Condominium Property Act requires this of contractors and vendors under contracts exceeding $10,000 per year — and a snow contract for a mid-size association often clears that.</li>
        <li><strong>Require a service log</strong> with date, time, areas serviced and material applied, delivered after each event.</li>
      </ul>

      <p>Our <a href="/blog/illinois-condo-hoa-snow-removal-vendor-guide">snow removal vendor guide</a> goes through the contract in detail, and the <a href="/blog/condo-hoa-vendor-rfp-checklist">vendor RFP checklist</a> covers procurement.</p>

      <h3>Keep the record</h3>
      <p>The single most valuable thing a board can have after a fall is a contemporaneous record of what was done and when. That means the vendor's service log, kept as it comes in — not reconstructed in March. It means a photograph after a difficult event. It means a dated note when a resident reports an icy spot and a dated note when it was treated. Boards that keep this find that most claims become straightforward; boards that do not find that the conversation is about memory.</p>

      <h3>Handle the reports</h3>
      <p>Give residents one way to report ice and answer it the same day. An unanswered email about a slippery entry, surfacing later, is the worst document in the file.</p>

      <h2>What else belongs on the November list?</h2>

      <p>Snow is one part of winter exposure. Frozen pipes are the other, and the damage is larger. See our <a href="/blog/chicago-condo-frozen-pipes-winter-checklist">frozen pipes winter checklist</a>. Porches, decks and stairs carry load and salt all season — see the <a href="/blog/chicago-condo-porch-deck-safety-board-guide">porch and deck safety guide</a>. And the city's <a href="/blog/chicago-condo-association-compliance-calendar">compliance calendar</a> pulls the seasonal items into one place.</p>

      <h2>Board checklist</h2>

      <ul>
        <li>Confirm the snow contract is signed, insured and in force before the first forecast — not after.</li>
        <li>Map every area to be cleared, and name who clears each.</li>
        <li>Write Chicago's 10 p.m. and 10 a.m. deadlines and the 5-foot path into the contract, or your village's equivalents.</li>
        <li>Include corner-lot sidewalks and crosswalk ramps if your building sits on a corner.</li>
        <li>Require and file certificates of insurance naming the association as additional insured.</li>
        <li>Require a per-event service log and actually file it as it arrives.</li>
        <li>Give residents one reporting channel and answer every report the same day, in writing.</li>
        <li>Photograph conditions after a major event.</li>
        <li>Ask counsel, before the season, how the Snow and Ice Removal Act applies to your association and which areas it does not reach.</li>
        <li>Tell the insurance agent what your snow arrangements are at renewal.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar puts snow contracts in writing with defined triggers, mapped areas and the city's deadlines built in, holds vendor insurance certificates on file, and keeps the per-event service log so the board has a record rather than a recollection. If your association needs its winter arrangements reviewed, <a href="/contact">contact our office</a> or see our <a href="/services/maintenance-coordination">maintenance coordination</a> service. We handle winters across <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>, including <a href="/property-management-glenview">Glenview</a>.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal advice. It summarizes the Snow and Ice Removal Act and the City of Chicago’s published guidance on Municipal Code sections 4-4-310 and 10-8-180. Premises liability for snow and ice is largely governed by Illinois case law, which this article does not address — have association counsel advise your board.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-smoke-carbon-monoxide-alarms',
    title: 'Smoke and CO Alarms in Illinois Condo Buildings',
    metaDescription:
      'Illinois law requires alarms within 15 feet of every sleeping room and a smoke detector at the top of every interior stairwell. Who installs and maintains them in a condominium.',
    date: '2026-11-22',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Compliance',
    readTime: '9 min read',
    excerpt:
      'Two short Illinois statutes govern smoke and carbon monoxide alarms, and both place duties on the owner of the structure — a phrase that does not map cleanly onto a condominium. What is clear is what the building needs: alarms within 15 feet of every sleeping room, a detector at the top of every interior stairwell, and sealed 10-year batteries in most battery units.',
    sources: [
      {
        title: 'Smoke Detector Act (425 ILCS 60)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=1640&ChapterID=38',
      },
      {
        title: 'Carbon Monoxide Alarm Detector Act (430 ILCS 135)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2786&ChapterID=39',
      },
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605) — Section 18.4, powers and duties of the board',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
    ],
    content: `
      <p>Alarms are the cheapest life-safety item a building has and the one most often out of compliance, because responsibility for them sits exactly on the line between the unit and the common elements. Two Illinois statutes set the requirements. Neither was written with condominiums in mind, which is part of the problem and most of the reason to settle your association's position in writing.</p>

      <h2>Where must smoke detectors be?</h2>

      <p>Section 3 of the Smoke Detector Act sets three placement rules that matter to a condominium building.</p>

      <p><strong>Every dwelling unit</strong> must be equipped with at least one approved smoke detector in operating condition <strong>within 15 feet of every room used for sleeping purposes</strong>. The detector must be installed on the ceiling at least 6 inches from any wall, or on a wall between 4 and 6 inches from the ceiling. A "dwelling unit" under the Act includes each living unit of a multiple family residence and each living unit in a mixed-use building.</p>

      <p><strong>Every structure containing more than one dwelling unit</strong>, or containing at least one dwelling unit in a mixed-use structure, must contain at least one approved smoke detector <strong>at the uppermost ceiling of each interior stairwell</strong>, installed on the ceiling at least 6 inches from the wall, or on a wall between 4 and 6 inches from the ceiling.</p>

      <p>That second rule is squarely the association's. Interior stairwells are common elements. If nobody on your board can say when the stairwell detectors were last tested, that is this month's work.</p>

      <p>The Act's third placement rule — a detector on every story including basements, with a specific rule for split levels — is directed at single family residences, so it reaches a detached home in an association rather than a unit in a multi-unit building.</p>

      <h2>What about carbon monoxide alarms?</h2>

      <p>Section 10 of the Carbon Monoxide Alarm Detector Act requires that <strong>every dwelling unit</strong> be equipped with at least one approved carbon monoxide alarm in operating condition <strong>within 15 feet of every room used for sleeping purposes</strong>. And separately, <strong>every structure that contains more than one dwelling unit</strong> must contain at least one approved alarm in operating condition within 15 feet of every room used for sleeping purposes.</p>

      <p>A CO alarm may be combined with a smoke detecting device, provided the combined unit complies with the provisions applying to both and emits an alarm in a manner that clearly differentiates the hazard. Alarms may be battery powered, plug-in with battery back-up, or wired into the structure's AC power with secondary battery back-up.</p>

      <p>Section 20 exempts two kinds of residential unit. A unit in a building that (i) does not rely on combustion of fossil fuel for heat, ventilation or hot water, (ii) is not connected in any way to a garage, and (iii) is not sufficiently close to any ventilated source of carbon monoxide, as determined by the local building commissioner, to receive carbon monoxide from that source. And a unit that is not sufficiently close to any source of carbon monoxide to be at risk of receiving it, as determined by the local building commissioner.</p>

      <p>Note who makes that determination: the local building commissioner, not the board and not the manager. An all-electric building with no attached garage may well be exempt, but a board should not simply decide it is. Many Chicago condominium buildings have gas heat, gas water heaters or an attached garage, which puts them plainly inside the requirement.</p>

      <h2>What are the battery rules?</h2>

      <p>Section 3(e) of the Smoke Detector Act is where the sealed-battery requirement lives. For dwelling units in existence on July 1, 1988, the required detectors may be battery powered <strong>provided the battery is a self-contained, non-removable, long-term battery</strong>, or wired into the structure's AC power line, and need not be interconnected.</p>

      <p>The battery requirement applies to battery-powered smoke detectors that:</p>

      <ul>
        <li>Are in existence and <strong>exceed 10 years from the date of their being manufactured</strong>;</li>
        <li><strong>Fail to respond to operability tests</strong> or otherwise malfunction; or</li>
        <li>Are <strong>newly installed</strong>.</li>
      </ul>

      <p>So the practical rule for a condominium is this: when a detector is over ten years old, fails a test, or is being installed for the first time, the replacement must have a sealed ten-year battery or be hard-wired. Loose nine-volt batteries are the thing being phased out, which is sensible, because a removable battery is a battery somebody removes.</p>

      <p>The battery requirements do not apply to a fire alarm, smoke detector, smoke alarm or ancillary component that is electronically connected as part of a centrally monitored or supervised alarm system; that uses a low-power radio frequency wireless communication signal; that uses Wi-Fi or other wireless local area networking to send and receive notifications to and from the Internet, such as early low-battery warnings; or to other devices the State Fire Marshal designates.</p>

      <p>For units newly constructed, reconstructed or substantially remodelled after December 31, 1987, Section 3(f) requires detectors permanently wired into the AC power line, interconnected so that one actuating actuates all detectors in the unit. For such work on or after January 1, 2011, hard-wired detectors must also maintain an alternative back-up power source — a battery or an emergency generator. A board approving a gut rehab in a unit should know this before the work is inspected.</p>

      <h2>Who is responsible in a condominium?</h2>

      <p>Here is the honest answer: the statutes do not say, in terms that resolve a condominium.</p>

      <p>Section 3(d) of the Smoke Detector Act provides that it is <strong>the responsibility of the owner of a structure to supply and install all required detectors</strong>, and that the owner is responsible for making <strong>reasonable efforts to test and maintain detectors in common stairwells and hallways</strong>. It then allocates duties between owner and <em>tenant</em> for detectors inside a dwelling unit: the tenant tests and provides general maintenance and notifies the owner in writing of deficiencies the tenant cannot correct; the tenant replaces batteries, except that the owner must ensure batteries are operating when the tenant takes possession; and the owner must give one tenant per unit written information on testing and maintenance. The Carbon Monoxide Alarm Detector Act at Section 10(c) uses the same owner-and-tenant structure.</p>

      <p>A condominium has no landlord and tenant in that sense. The unit owner owns the unit; the association holds the common elements. The common-stairwell-and-hallway duty maps cleanly onto the association. What the phrase "owner of a structure" means for alarms inside a separately owned unit is a legal question your association counsel should answer against your declaration — and it is worth asking, once, and writing the answer down.</p>

      <p>Meanwhile, the board's own duty under Section 18.4(a) of the Condominium Property Act — to provide for the operation, care, upkeep and maintenance of the common elements — is not in doubt for the stairwell and hallway devices.</p>

      <h2>Does the Chicago code change any of this?</h2>

      <p>It can, and the Smoke Detector Act says so expressly. Section 3(h) provides that compliance with an applicable federal, state or local law or building code requiring installation and maintenance of smoke detectors in a manner different from the Act, <strong>but providing a level of safety for occupants equal to or greater than</strong> the Act, is deemed compliance — and that <strong>the requirements of the more stringent law govern</strong>.</p>

      <p>So a Chicago building must satisfy the city's requirements where they are stricter. This is also where the building's wider life-safety obligations sit: the alarm statutes are a floor, and a high-rise has a separate regime. See our guides to <a href="/blog/chicago-condo-life-safety-board-planning">Chicago life-safety planning</a> and the <a href="/blog/chicago-condo-association-compliance-calendar">compliance calendar</a>, and check the current city requirements with the Department of Buildings or the Fire Department rather than relying on a summary.</p>

      <h2>What are the penalties?</h2>

      <p>Both Acts attach criminal penalties. Under the Smoke Detector Act, willful failure to install or maintain a required detector in operating condition is a Class B misdemeanor, and tampering with, removing, destroying, disconnecting or removing batteries from an installed detector — other than in the course of inspection, maintenance or replacement — is a Class A misdemeanor on a first conviction. The Carbon Monoxide Alarm Detector Act at Section 15 mirrors this: willful failure to install or maintain is a Class B misdemeanor, and tampering is a Class A misdemeanor on a first conviction and a Class 4 felony on a second or subsequent conviction.</p>

      <p>Those penalties are not the reason to act. The reason to act is that this is the cheapest intervention a board has available against the worst outcome a building can have.</p>

      <h2>What should the board do this month?</h2>

      <ul>
        <li><strong>Walk every interior stairwell.</strong> Confirm an approved smoke detector at the uppermost ceiling of each one, mounted as the Act describes. Test it. Record the date.</li>
        <li><strong>Walk the hallways.</strong> Section 3(d) names common stairwells and hallways together for the testing and maintenance duty.</li>
        <li><strong>Check the age of every common-area device.</strong> The manufacture date is printed on the back. Over ten years means replace, and the replacement must be sealed-battery or hard-wired.</li>
        <li><strong>Settle the unit-interior question with counsel</strong> and write the answer into the rules so the next board does not have to ask again.</li>
        <li><strong>Send owners a short annual notice</strong> — one page, before heating season — stating the 15-foot rule for smoke and CO alarms, the sealed-battery requirement, and how to report a problem. Keep a copy and the send date.</li>
        <li><strong>Ask about CO specifically.</strong> If the building has gas heat, gas water heating or an attached garage, the exemption does not apply. If you think it might, ask the local building commissioner rather than deciding internally.</li>
        <li><strong>Check renovation permits.</strong> A unit undergoing substantial remodelling needs hard-wired, interconnected detectors with back-up power. Make it a condition of the association's alteration approval.</li>
        <li><strong>Keep the log.</strong> Date, location, device age, test result, action taken. This is the document that matters afterwards, and it costs nothing to keep.</li>
        <li><strong>Pair it with the rest of the winter list</strong> — the <a href="/blog/chicago-condo-frozen-pipes-winter-checklist">frozen pipes checklist</a> and the <a href="/blog/condo-hoa-emergency-planning-checklist">emergency planning checklist</a>.</li>
      </ul>

      <h2>How Stellar helps</h2>

      <p>Stellar inventories common-area alarms by location and manufacture date, tests and logs them on a schedule, sends the annual owner notice on the association's behalf, and builds the hard-wired detector requirement into unit alteration approvals so a rehab does not quietly create a code problem. If your board does not know the age of its stairwell detectors, <a href="/contact">contact our office</a> or see our <a href="/services/maintenance-coordination">maintenance coordination</a> and <a href="/services/high-rise-condominium-management">high-rise management</a> services.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal or code advice. It summarizes the Smoke Detector Act and the Carbon Monoxide Alarm Detector Act as enacted. Who is responsible for alarms inside a separately owned unit, and what your local code requires, are questions for association counsel and your municipality.</em></p>
    `,
  },
];
