import type { BlogPost } from './index';

export const scheduledGovernancePosts: BlogPost[] = [
  {
    slug: 'which-illinois-law-governs-condo-hoa-townhome',
    title: 'Which Illinois Law Governs Your Condo, HOA, or Townhome Association?',
    metaDescription:
      'Illinois boards are governed by the Condominium Property Act or CICAA depending on ownership form. Learn which statute applies and how to confirm it.',
    date: '2026-08-18',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Illinois Association Law',
    readTime: '7 min read',
    excerpt:
      'Condominiums, HOAs, and townhome associations in Illinois do not all operate under the same statute. Here is how boards identify the governing law and reconcile it with their own declaration and bylaws.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'Illinois General Not For Profit Corporation Act of 1986 (805 ILCS 105)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2280&ChapterID=65',
      },
    ],
    content: `
      <p>The short answer: in Illinois, a property submitted to condominium ownership is generally governed by the Illinois Condominium Property Act, while many non-condominium homeowner and townhome associations are governed by the Common Interest Community Association Act (CICAA). Both statutes sit on top of your recorded declaration and bylaws, and most Illinois associations are also incorporated under the General Not For Profit Corporation Act of 1986. Knowing which of these applies to your association is the first step in almost every governance decision a board makes.</p>

      <p>Boards get into trouble when they borrow a procedure from the wrong statute. A condominium board that follows an HOA-oriented checklist, or a townhome board that assumes the Condominium Property Act applies to it, can end up with a meeting, vote, or assessment action that does not match the law and documents actually controlling the property. Because the statutes were written separately and amended on different timelines, their provisions on notice, records, meetings, and enforcement are similar in spirit but not identical in text. Confirm the correct framework once, document it, and reuse it.</p>

      <h2>Start with the Recorded Declaration</h2>
      <p>The declaration recorded against your property is the controlling document for identifying the ownership form. A condominium declaration submits the property to the Condominium Property Act and creates units plus undivided interests in the common elements. A homeowners or townhome association declaration typically creates lots with an obligation to pay assessments to an association that owns or maintains common area, without submitting the property to condominium ownership.</p>

      <h3>Signals of a Condominium</h3>
      <ul>
        <li>The declaration states that the property is submitted to the Illinois Condominium Property Act.</li>
        <li>Ownership is described in units and percentage interests in common elements.</li>
        <li>A plat of survey identifies unit boundaries within one or more buildings.</li>
      </ul>

      <h3>Signals of a Non-Condominium Common Interest Community</h3>
      <ul>
        <li>Owners hold lots or parcels rather than units with percentage interests.</li>
        <li>Common area is owned by the association or subject to easements rather than held as common elements.</li>
        <li>The declaration references covenants, conditions, and restrictions running with the land.</li>
      </ul>

      <p>Townhome associations sit on both sides of this line. Many Illinois townhome communities are legally condominiums even though the buildings look like row homes, and others are lot-owner associations. The architecture tells you nothing; the recorded declaration tells you everything. Our <a href="/services/townhome-management">townhome association management</a> team routinely pulls the recorded documents before making any governance recommendation, because that single step resolves most of the ambiguity.</p>

      <h2>Where the Not For Profit Corporation Act Fits</h2>
      <p>If your association is incorporated in Illinois as a not-for-profit corporation, the corporate statute governs matters such as corporate existence, annual reporting to the Secretary of State, director and officer roles, and certain corporate formalities. It does not replace the Condominium Property Act or CICAA; it operates alongside them. Boards should confirm that the corporation remains in good standing and that officer records match reality, since lenders, insurers, and title companies frequently check.</p>

      <h2>Order of Authority for Board Decisions</h2>
      <p>Use a consistent hierarchy when analyzing any governance question:</p>
      <ol>
        <li>Applicable Illinois statute (Condominium Property Act or CICAA), which can override conflicting document provisions.</li>
        <li>The recorded declaration.</li>
        <li>The bylaws.</li>
        <li>Duly adopted rules and regulations.</li>
        <li>Board policies and past practice, which never outrank the above.</li>
      </ol>
      <p>Where a statute and a document appear to conflict, that is a question for association counsel, not a judgment call for the board at the meeting table. Local ordinances may add requirements in some municipalities as well, so associations in the city should also review applicable Chicago requirements with counsel.</p>

      <h2>Board Checklist: Confirm Your Governing Framework</h2>
      <ul>
        <li>Obtain a complete recorded copy of the declaration, bylaws, plat, and all recorded amendments.</li>
        <li>Note whether the declaration submits the property to the Condominium Property Act.</li>
        <li>Confirm the association's corporate status and current registered agent with the Secretary of State.</li>
        <li>Ask counsel to confirm in writing which statute governs and to flag any document provisions superseded by statute.</li>
        <li>Record the conclusion in a one-page governance summary kept with the official records.</li>
        <li>Give every new director that summary during orientation.</li>
        <li>Re-verify after any declaration amendment, deconversion discussion, or merger of parcels.</li>
        <li>Align your meeting, notice, records, and collection templates to the confirmed statute.</li>
      </ul>

      <h2>Why This Matters Operationally</h2>
      <p>The governing framework drives meeting notice practices, records response procedures, reserve and budget presentation, insurance placement, and enforcement steps. It also drives how lenders read your documents during resale, which is why <a href="/services/financial-management">association financial management</a> and document accuracy are so closely linked. A clean governance summary gives current and future directors a shared reference point for those questions.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Your association's counsel should interpret your specific declaration, bylaws, and the current statutes before you act.</p>

      <h2>Talk Through Your Documents With Us</h2>
      <p>Stellar Property Management supports boards across <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a> with <a href="/services/condominium-management">condominium management</a>, <a href="/services/hoa-management">HOA management</a>, and day-to-day <a href="/services/board-support">board support</a>. If your board is unsure which framework applies or wants a second set of eyes on its documents, <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'illinois-condo-association-records-request-guide',
    title: 'How Illinois Condo Boards Should Handle Records Requests',
    metaDescription:
      'A practical process for Illinois condo and HOA boards responding to owner records requests: intake, review with counsel, redaction, delivery, and documentation.',
    date: '2026-09-15',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Owner records requests are a recurring source of conflict. A written intake process, counsel review, and consistent recordkeeping turn them into routine administration.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>The short answer: Illinois association owners have statutory rights to inspect and copy certain association records, and boards should respond through a single written process rather than improvising each time. The Illinois Condominium Property Act sets out records rights for condominiums, and CICAA does the same for non-condominium common interest communities. The categories of records, the form of a proper request, and the association's permitted response vary by statute and by your own declaration and bylaws, so your counsel should confirm the exact requirements that apply to you before you publish a policy.</p>

      <p>What boards can control is the operational side: how requests are received, who reviews them, how sensitive information is protected, how the response is delivered, and how the whole exchange is documented. A disciplined process reduces avoidable disputes by giving the owner a complete and consistent answer.</p>

      <h2>Build a Single Intake Channel</h2>
      <p>Designate one channel for records requests, typically the management office, and require the request in writing. A written request creates a clear date stamp, a clear description of what is sought, and a record you can act on. Verbal requests at a meeting should be politely redirected to the written channel and noted in the file.</p>

      <h3>What Intake Should Capture</h3>
      <ul>
        <li>Requesting owner's name, unit, and contact information, and confirmation of current ownership.</li>
        <li>Date the request was received.</li>
        <li>Specific records or categories requested and the date range.</li>
        <li>Any purpose statement the owner provides.</li>
        <li>Preferred delivery format, whether inspection, paper copies, or electronic files.</li>
      </ul>

      <h2>Review Before You Release</h2>
      <p>Not everything in an association's files is an association record subject to production, and some records contain information that should be protected. Common examples that warrant careful review include attorney-client communications, personnel information, information related to pending litigation, and personal financial information of individual owners. Because the treatment of these categories is statute- and document-specific, route non-routine requests to association counsel before responding.</p>

      <p>Redaction should be applied consistently and documented. Keep a copy of both the produced version and the unredacted original so the board can later explain exactly what was withheld and why. Never redact ad hoc at the copier; do it as a reviewed step with a written note.</p>

      <h2>Deliver in a Repeatable Format</h2>
      <p>Electronic delivery through a secure owner portal is usually the cleanest option: it timestamps delivery, avoids copying-cost disputes, and creates an automatic record. If your association charges for copies or staff time, confirm with counsel what your governing documents and the applicable statute permit, quote the amount in writing before production, and apply the same schedule to every owner. Inconsistent charging is a frequent source of complaints.</p>

      <h2>Board Checklist: Records Request Response</h2>
      <ul>
        <li>Adopt a written records request policy reviewed by association counsel.</li>
        <li>Publish the policy and the intake address to all owners and post it in the portal.</li>
        <li>Log every request with received date, scope, and assigned reviewer.</li>
        <li>Verify the requester is a current owner or an authorized representative.</li>
        <li>Route unusual or broad requests to counsel before responding.</li>
        <li>Apply redactions through a documented review step, retaining the unredacted original.</li>
        <li>Quote any permitted costs in writing before producing records.</li>
        <li>Deliver through the portal or another method that creates proof of delivery.</li>
        <li>Close the log entry with the production date and a list of what was provided.</li>
        <li>Retain the full request file with the association's official records.</li>
      </ul>

      <h2>Prevention Beats Response</h2>
      <p>Many records requests are really questions about money or a decision that felt opaque. Boards that publish approved minutes promptly, distribute monthly financials, and explain major decisions in an owner update see fewer formal requests. Strong <a href="/services/financial-management">financial reporting</a> and consistent <a href="/services/board-support">board support</a> reduce the volume of requests more effectively than any policy language.</p>

      <p>Recordkeeping quality also shows up at resale, when buyers, lenders, and title companies request documents on short timelines. An association with organized minutes, budgets, insurance certificates, and governing documents closes those requests in days instead of weeks.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. The Illinois Condominium Property Act and CICAA contain distinct records provisions, and your association's counsel should interpret your governing documents and the current statute before your board responds to a request.</p>

      <h2>Get Help Standardizing Your Process</h2>
      <p>Stellar Property Management runs records intake and production for <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards throughout <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> to review your current policy and recordkeeping.</p>
    `,
  },
  {
    slug: 'illinois-condo-board-closed-session-guide',
    title: 'Closed Sessions for Illinois Condo Boards: A Practical Guide',
    metaDescription:
      'When and how Illinois condo and HOA boards use closed session, what belongs there, and how to document decisions properly in open session minutes.',
    date: '2026-10-13',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Closed session exists for a narrow set of sensitive topics. Used correctly it protects the association; used loosely it damages owner trust.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>The short answer: Illinois association boards may close a portion of a meeting to discuss a limited set of sensitive matters, and both the Illinois Condominium Property Act and CICAA address closed portions of board meetings. Closed session is for discussion of narrowly defined subjects; it is not a place to run the association out of public view. Because the permitted subjects and any voting restrictions are set by statute and by your governing documents, ask association counsel to confirm the exact rules that apply to your association before your board adopts a closed-session practice.</p>

      <p>The practical principle boards should internalize is this: closed session protects information, not decisions. Owners are entitled to see what their board decided and to understand the governance process, even when the underlying discussion involved confidential facts. A board that discusses sensitive matters privately but records its actions transparently gets both protection and credibility.</p>

      <h2>Topics That Typically Belong in Closed Session</h2>
      <p>Common categories associations reserve for closed discussion include pending or probable litigation, communications with association counsel, matters involving individual owner violations or hearings, and employment or personnel matters. Confirm your specific list with counsel, since the statutes are worded differently for condominiums and non-condominium associations and your declaration may add restrictions.</p>

      <h3>Topics That Almost Never Belong There</h3>
      <ul>
        <li>Routine budget development and general assessment discussion.</li>
        <li>Vendor selection for ordinary maintenance work.</li>
        <li>General rule ideas that have not become an individual enforcement matter.</li>
        <li>Community complaints of a general nature.</li>
        <li>Anything the board would prefer to avoid discussing simply because it is unpopular.</li>
      </ul>

      <h2>Running the Closed Portion Cleanly</h2>
      <p>Open the meeting properly, then move to the closed portion with a stated general subject that does not disclose the confidential content, for example "pending litigation" or "an owner violation hearing." Limit attendance to directors plus any advisor the board needs, such as counsel or the managing agent. Keep the discussion inside the stated subject; if the conversation drifts to operations, stop and return to open session.</p>

      <p>When the board is ready to act, return to open session and take the vote there unless counsel has confirmed a specific exception applies to your association. Recording the action in open session is the single most important habit for preserving owner trust, and it also produces clean minutes for lenders and future boards.</p>

      <h2>Minutes and Confidentiality</h2>
      <p>Minutes of the open portion should reflect that the board entered a closed portion, the general subject, the time it began and ended, and any action taken after returning. Detailed narrative of confidential discussion does not belong in open minutes. Directors should understand that confidentiality obligations continue after the meeting and after their term ends; a signed confidentiality acknowledgment during orientation makes that expectation explicit.</p>

      <h2>Board Checklist: Closed Session Discipline</h2>
      <ul>
        <li>Confirm with counsel the permitted closed-session subjects for your statute and documents.</li>
        <li>Keep a standing agenda template that separates open business from any closed portion.</li>
        <li>State a general subject on the record before closing the meeting.</li>
        <li>Limit attendance to directors and necessary advisors.</li>
        <li>Stop the discussion if it moves outside the stated subject.</li>
        <li>Return to open session to take and record votes unless counsel advises otherwise.</li>
        <li>Record start time, end time, general subject, and resulting action in the open minutes.</li>
        <li>Distribute a plain-language explanation of the decision to owners when appropriate.</li>
        <li>Have every director sign a confidentiality acknowledgment at orientation.</li>
        <li>Review closed-session usage annually to confirm it is not expanding by habit.</li>
      </ul>

      <h2>The Trust Cost of Overuse</h2>
      <p>Boards that retreat into closed session frequently invite exactly the scrutiny they were trying to avoid: records requests, meeting disruptions, and contested elections. In our experience supporting boards through <a href="/services/board-support">board support services</a>, the associations with the calmest meetings are the ones that discuss almost everything openly and reserve closed session for genuinely confidential matters.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Closed-meeting provisions differ between the Illinois Condominium Property Act and CICAA, and your association's counsel should interpret your governing documents and the current statute before your board relies on any closed-session practice.</p>

      <h2>Bring Structure to Your Meetings</h2>
      <p>Stellar Property Management prepares agendas, packets, and minutes for <a href="/services/condominium-management">condominium</a> and <a href="/services/hoa-management">HOA</a> boards across <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> to review your meeting process.</p>
    `,
  },
  {
    slug: 'electronic-voting-illinois-condo-hoa',
    title: 'Electronic Voting for Illinois Associations: Board Checklist',
    metaDescription:
      'What Illinois condo and HOA boards should verify before moving to electronic voting: authority, consent, ballot integrity, records, and vendor controls.',
    date: '2026-11-10',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Electronic voting can lift participation dramatically, but only if the board confirms its authority, collects proper consent, and preserves a defensible record.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>The short answer: an Illinois association can generally move toward electronic voting and electronic delivery only after confirming that the applicable statute and its own governing documents permit it, and after obtaining owner consent to electronic delivery in the manner those authorities require. The Illinois Condominium Property Act and CICAA each address association meetings, voting, and delivery of notices, and the specifics differ. Before your board signs a vendor contract, have association counsel confirm what your association is authorized to do and what consent or amendment steps come first.</p>

      <p>The upside is real. Associations that struggle to reach quorum at annual meetings often see participation rise substantially once owners can vote from a phone. But the value only holds if the result is defensible. A contested election decided by an electronic process the board cannot document is worse than a paper election with modest turnout.</p>

      <h2>Confirm Authority Before Anything Else</h2>
      <p>Three questions come first, in this order. Does the statute governing your association permit the electronic method you want to use? Do your declaration and bylaws permit it, or do they contain language that must be amended? And what form of owner consent to electronic delivery is required before you may send notices and ballots electronically? Counsel should answer all three in writing. Do not rely on a vendor's marketing material as your legal analysis.</p>

      <h2>Collect and Maintain Consent Records</h2>
      <p>Build a consent register that records, for each unit or lot, whether the owner has consented to electronic delivery, the date, the email address on file, and any later revocation. Owners who have not consented continue to receive notices by the traditional method. This dual-track approach is the most common operational failure point, because associations forget to run the paper track for non-consenting owners and invalidate the notice for those units.</p>

      <h3>Keep the Register Current</h3>
      <ul>
        <li>Update immediately on resale, since consent does not follow the unit to a new owner.</li>
        <li>Handle bounced email as a delivery failure requiring fallback, not as a delivered notice.</li>
        <li>Honor revocations promptly and confirm them in writing.</li>
        <li>Reconcile the register against the ownership roster before every noticed vote.</li>
      </ul>

      <h2>Ballot Integrity Requirements</h2>
      <p>Whatever platform you use should give the board a clean answer to each of these: how is a voter authenticated as the record owner, how is one vote per eligible unit or lot enforced, how are proxies handled alongside electronic ballots, how is the ballot secured before the count, and what audit trail is produced afterward. Ask the vendor for a sample audit report and a sample tabulation record before signing, and have counsel review the contract's data ownership and retention terms.</p>

      <h2>Board Checklist: Before You Launch Electronic Voting</h2>
      <ul>
        <li>Obtain a written opinion from counsel on statutory and document authority.</li>
        <li>Amend the bylaws first if counsel advises that the documents do not permit the method.</li>
        <li>Adopt a written electronic voting and delivery policy.</li>
        <li>Run a consent campaign and build a consent register tied to the ownership roster.</li>
        <li>Maintain a parallel paper process for owners who have not consented.</li>
        <li>Verify voter authentication, one-vote enforcement, and proxy handling with the vendor.</li>
        <li>Confirm the platform produces an exportable audit trail the association owns.</li>
        <li>Review vendor data security, retention, and breach notification terms with counsel.</li>
        <li>Pilot the platform on a low-stakes vote before an election.</li>
        <li>Retain ballots, tabulations, and audit records with the association's official records.</li>
        <li>Debrief after the first election and correct the process before the next cycle.</li>
      </ul>

      <h2>Communication Drives Turnout, Not Technology</h2>
      <p>The platform removes friction; it does not create interest. Associations that see the biggest participation gains pair electronic voting with a short candidate statement package, a clear explanation of what is being decided, and two or three reminders on a published schedule. Owners respond to clarity about what their vote changes.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Requirements differ between the Illinois Condominium Property Act and CICAA, and requirements may change; confirm current requirements for electronic notice, consent, and voting with your association's counsel before implementing any platform.</p>

      <h2>Plan Your Next Election With Support</h2>
      <p>Stellar Property Management coordinates notice, ballot, and meeting logistics for <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards in <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> to review your election process.</p>
    `,
  },
  {
    slug: 'adopting-enforcing-condo-hoa-rules-illinois',
    title: 'Adopting and Enforcing Association Rules in Illinois',
    metaDescription:
      'How Illinois condo and HOA boards adopt rules that hold up: authority in the declaration, owner notice and comment, fair hearings, and consistent enforcement.',
    date: '2026-12-08',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'A rule is only as strong as the process behind it. Authority, notice, a fair hearing, and consistency are what make enforcement stick.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>The short answer: an Illinois association board can adopt and enforce rules only within the authority granted by the applicable statute and its own declaration and bylaws, and both the Illinois Condominium Property Act and CICAA address owner notice and the opportunity to be heard in connection with rules and charges. A rule adopted without authority, or enforced without a fair process, is the kind of rule that collapses the first time an owner pushes back. Have association counsel confirm the adoption and enforcement procedure that applies to your association before your board publishes new rules.</p>

      <p>The distinction boards most often miss is between a rule and a restriction. A rule regulates conduct and the use of property within limits the declaration already establishes. A change to substantive property rights, such as altering what an owner may build or how common elements are allocated, usually requires a declaration amendment with an owner vote, not a board resolution. When in doubt, ask counsel which instrument you need.</p>

      <h2>Test Your Authority First</h2>
      <p>Before drafting, locate the specific provision in the declaration or bylaws that empowers the board to regulate the subject at issue. Write it down. If you cannot find it, that is your answer: the board either needs a different approach or an amendment. Rules must also be consistent with applicable law, including fair housing requirements, which is another reason counsel should review any rule touching occupancy, accommodations, assistance animals, or accessibility.</p>

      <h2>Draft Rules That Can Actually Be Enforced</h2>
      <p>Enforceable rules share a few characteristics:</p>
      <ul>
        <li>They describe observable conduct rather than vague impressions.</li>
        <li>They state where and when they apply.</li>
        <li>They identify who is responsible, including responsibility for guests and contractors.</li>
        <li>They state the enforcement path, including notice and the opportunity for a hearing.</li>
        <li>They avoid categories the board has no authority to regulate.</li>
      </ul>
      <p>A rule that says common areas must be kept "tidy" invites argument. A rule that says personal items may not be stored in common hallways, and that the association will provide written notice and an opportunity to be heard before any charge is imposed, is a rule a board can apply the same way every time.</p>

      <h2>Give Owners Notice and a Chance to Comment</h2>
      <p>Even where not strictly required, circulating a proposed rule to owners with a comment window before adoption produces better rules and far less resistance. Owners raise the practical exceptions the board did not think of. Adopt the rule at an open board meeting, record the vote in the minutes, and distribute the final text with its effective date.</p>

      <h2>Enforce the Same Way Every Time</h2>
      <p>Selective enforcement is the most common reason associations lose enforcement disputes. Run every matter through the same sequence: documented observation, written notice to the owner describing the violation and the rule, an opportunity for a hearing consistent with your governing documents and the applicable statute, a decision communicated in writing, and a record of the outcome. Keep a violation log so the board can see at a glance whether similar matters have been treated similarly.</p>

      <h2>Board Checklist: Rule Adoption and Enforcement</h2>
      <ul>
        <li>Identify and cite the declaration or bylaw provision granting authority.</li>
        <li>Confirm with counsel whether the change requires a rule or a declaration amendment.</li>
        <li>Have counsel review any rule touching occupancy, animals, accessibility, or accommodations.</li>
        <li>Circulate a draft to owners and collect comments before adoption.</li>
        <li>Adopt at an open meeting and record the vote in the minutes.</li>
        <li>Distribute the final text with a clear effective date and publish it in the portal.</li>
        <li>Maintain one consolidated, dated rules document rather than scattered memos.</li>
        <li>Use a standard violation notice template for every matter.</li>
        <li>Provide notice and an opportunity to be heard consistent with your documents and statute.</li>
        <li>Log every violation, hearing, and outcome to demonstrate consistency.</li>
        <li>Review the full rule set annually and retire rules the board no longer enforces.</li>
      </ul>

      <h2>Keep the Rule Set Small</h2>
      <p>Long rule books are difficult to apply consistently and signal that the board has been legislating reactively. Boards that periodically consolidate and retire dead rules find enforcement easier and owner relations better. Coordinating enforcement with <a href="/services/maintenance-coordination">maintenance coordination</a> also helps, since a share of violations are really deferred repair issues that a work order resolves faster than a notice does.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Rulemaking and enforcement provisions differ between the Illinois Condominium Property Act and CICAA, and your association's counsel should interpret your declaration, bylaws, and the current statute before your board adopts or enforces a rule.</p>

      <h2>Review Your Rules With Us</h2>
      <p>Stellar Property Management helps <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards consolidate and administer rules across <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> for a rules and enforcement review.</p>
    `,
  },
  {
    slug: 'new-condo-board-member-first-30-days',
    title: 'New Condo Board Member Guide: The First 30 Days',
    metaDescription:
      'A 30-day onboarding plan for new Illinois condo and HOA board members: documents to read, financials to review, and questions to ask before your first vote.',
    date: '2027-01-05',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'New directors are asked to vote on real money within weeks of election. Here is what to read, review, and ask in your first month.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Illinois General Not For Profit Corporation Act of 1986 (805 ILCS 105)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2280&ChapterID=65',
      },
      {
        title: 'IDFPR Community Association Manager Licensing',
        url: 'https://idfpr.illinois.gov/profs/cam.html',
      },
    ],
    content: `
      <p>The short answer: in your first 30 days as a new Illinois association director, your job is to learn the association before you try to change it. Read the governing documents, understand the money, meet the manager, and ask questions in writing. You are a fiduciary from the moment you take office, and the decisions in front of you will involve real dollars belonging to your neighbors.</p>

      <p>Most new directors run into the same two surprises. First, the board has less unilateral power than they assumed, because the declaration and the applicable statute constrain what a board may decide on its own. Second, the association has more financial complexity than expected, with reserves, insurance, and long-cycle capital projects sitting behind the monthly assessment. Both surprises are easier to absorb during a structured onboarding than in the middle of a contested vote.</p>

      <h2>Week One: Read the Documents</h2>
      <p>Request a complete governance packet and actually read it: the recorded declaration, bylaws, plat, all recorded amendments, the current rules and regulations, and the last twelve months of approved minutes. Note which statute governs your association, since Illinois condominiums and non-condominium common interest communities are governed by different acts. If nobody can tell you which applies, that is your first question for counsel.</p>

      <h3>Questions to Ask Right Away</h3>
      <ul>
        <li>Which statute governs this association, and has counsel confirmed it in writing?</li>
        <li>What is the board's current officer slate and term structure?</li>
        <li>What matters are currently in litigation or under counsel review?</li>
        <li>What major capital projects are planned in the next three years?</li>
        <li>Is the association's corporate registration current with the Secretary of State?</li>
      </ul>

      <h2>Week Two: Understand the Money</h2>
      <p>Review the current year budget, the most recent monthly financial statements, the reserve balance and any reserve study, the aged delinquency report, and the insurance policies with limits and deductibles. Do not skim. Ask the manager to walk you line by line through one month's statements until you can explain where the assessment dollars go. Boards make better decisions when every director can read a balance sheet, and good <a href="/services/financial-management">association financial management</a> makes that possible.</p>

      <h2>Week Three: Meet the People and Walk the Property</h2>
      <p>Meet the community association manager and understand the scope of the management agreement, including what the manager does and what remains a board responsibility. Illinois licenses community association managers through IDFPR, and you should know who is licensed and serving your association. Then walk the property with the manager or engineer. Look at roofs, facades, mechanical rooms, garages, and any area with an active repair history. Physical condition is where deferred decisions become visible.</p>

      <h2>Week Four: Learn the Process, Then Contribute</h2>
      <p>Attend a board meeting with the goal of understanding how the board moves from packet to motion to minutes. Ask how the agenda is built, when packets go out, and how owner concerns reach the board. Once you understand the process, propose your first improvement in writing so it can be evaluated on its merits rather than debated on the spot.</p>

      <h2>Board Checklist: First 30 Days</h2>
      <ul>
        <li>Obtain and read the declaration, bylaws, plat, amendments, and rules.</li>
        <li>Read twelve months of approved minutes.</li>
        <li>Confirm which Illinois statute governs the association.</li>
        <li>Review the current budget and the latest monthly financial statements.</li>
        <li>Review the reserve balance and the most recent reserve study, if one exists.</li>
        <li>Review the delinquency report and the collection policy.</li>
        <li>Review insurance policies, limits, deductibles, and the certificate on file.</li>
        <li>Read the management agreement and confirm the manager's license status.</li>
        <li>Walk the property and note deferred maintenance.</li>
        <li>Sign the board's confidentiality and conflict-of-interest acknowledgments.</li>
        <li>Disclose any potential conflict, including business relationships with vendors.</li>
        <li>Submit questions in writing and keep the responses in your board file.</li>
      </ul>

      <h2>Habits That Make Good Directors</h2>
      <p>Prepare before the meeting rather than reading the packet at the table. Vote on the record and support the board's decision publicly once it is made. Keep association business out of hallway conversations. Route legal questions to counsel instead of to online forums. And remember that a director's duty runs to the association as a whole, not to the owners who campaigned for you.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Your association's counsel should interpret your declaration, bylaws, and the applicable statute for your specific situation.</p>

      <h2>Onboarding Support for New Boards</h2>
      <p>Stellar Property Management provides orientation packets and ongoing <a href="/services/board-support">board support</a> for <a href="/services/condominium-management">condominium</a> and <a href="/services/hoa-management">HOA</a> boards in <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> to get your new directors up to speed.</p>
    `,
  },
  {
    slug: 'illinois-condo-developer-turnover-checklist',
    title: 'Developer Turnover: What an Illinois Association Board Should Collect',
    metaDescription:
      'A collection checklist for Illinois associations at developer turnover: documents, financial records, warranties, as-builts, keys, and professional reviews.',
    date: '2027-02-02',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Turnover is the one moment when an association has maximum leverage to obtain complete records. Use a written collection list and independent professional review.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'Fannie Mae Condo, Co-op, and PUD Eligibility',
        url: 'https://singlefamily.fanniemae.com/originating-underwriting/condo-co-op-and-pud-eligibility',
      },
    ],
    content: `
      <p>The short answer: at developer turnover an Illinois association board should collect the complete governance, financial, construction, and warranty record for the property, and it should engage independent counsel and an independent engineer or accountant to review what it receives. The Illinois Condominium Property Act addresses the transfer of control and delivery of records for condominiums, and CICAA addresses transition for non-condominium common interest communities. The specific items and timelines are statute- and document-dependent, so have association counsel confirm exactly what your association is entitled to receive and by when.</p>

      <p>Turnover is a leverage moment. Once the developer's involvement ends and personnel move on, reconstructing missing as-builts, warranty documentation, or accounting detail becomes expensive or impossible. Boards that show up with a written collection list and independent advisors get a materially better handoff than boards that accept a box of binders and a friendly meeting.</p>

      <h2>Governance and Legal Records</h2>
      <ul>
        <li>Recorded declaration, bylaws, plat, and every recorded amendment.</li>
        <li>Articles of incorporation, corporate filings, and evidence of good standing.</li>
        <li>Minutes and resolutions from the developer-controlled board period.</li>
        <li>The complete owner roster with unit or lot designations and percentage interests.</li>
        <li>All contracts binding the association, including any affiliated-party agreements.</li>
        <li>Any easements, licenses, or agreements with neighboring parcels.</li>
      </ul>

      <h2>Financial Records</h2>
      <p>Request full accounting for the developer-control period, not just summary reports: bank statements, general ledger detail, assessment billing and receipt history, budgets, tax filings, and the calculation of any reserve or working capital contribution transferred to the association. Ask counsel whether an independent audit or review of the developer-control period is warranted, and obtain control of all bank accounts, signatory authority, and online banking credentials before the meeting ends. Establishing clean <a href="/services/financial-management">financial management</a> from day one is far easier than untangling a shared account later.</p>

      <h2>Construction, Warranty, and Building Records</h2>
      <ul>
        <li>As-built plans and specifications for the buildings and site.</li>
        <li>Certificates of occupancy and permit records.</li>
        <li>Product and system warranties with transfer documentation and registration confirmations.</li>
        <li>Operation and maintenance manuals for mechanical, elevator, life-safety, and roofing systems.</li>
        <li>Subcontractor and supplier contact list.</li>
        <li>Inspection, testing, and commissioning reports.</li>
        <li>Keys, fobs, master key systems, access-control credentials, and alarm codes.</li>
      </ul>

      <h2>Independent Review Is the Point</h2>
      <p>Collecting boxes is not the same as knowing what you received. Engage an engineer to conduct a transition study of building conditions and to identify construction issues while warranties may still be available, and engage counsel to review the documents and advise on any claims and deadlines. Commission or update a reserve study once the engineer's findings are in, because the reserve plan the developer set during control was built for sales, not for a thirty-year building.</p>

      <h2>Board Checklist: Turnover Execution</h2>
      <ul>
        <li>Retain independent association counsel before the turnover meeting.</li>
        <li>Send the developer a written collection list in advance with a response date.</li>
        <li>Inventory everything received at the meeting and note what is missing in writing.</li>
        <li>Take control of all bank accounts, signatories, and banking credentials immediately.</li>
        <li>Engage an engineer for a transition study of the buildings and site.</li>
        <li>Ask counsel about audit or review of the developer-control accounting.</li>
        <li>Register and confirm the transfer of all warranties.</li>
        <li>Obtain and re-key or re-credential all access systems as counsel and security advise.</li>
        <li>Place association insurance in the association's own name and verify coverage.</li>
        <li>Commission or update the reserve study using engineer findings.</li>
        <li>Confirm with counsel any deadlines that may apply to claims or transition obligations.</li>
        <li>Store everything in an indexed digital archive owners and lenders can be served from.</li>
      </ul>

      <h2>Why Documentation Affects Financing</h2>
      <p>Secondary-market guidelines from Fannie Mae and Freddie Mac drive what lenders ask associations to produce during resale, including budget, reserve, insurance, and litigation information. A newly turned-over association with a complete, organized document set answers those questionnaires quickly. One with gaps creates friction for every buyer in the building.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Transition provisions differ between the Illinois Condominium Property Act and CICAA, and your association's counsel should interpret your governing documents and the current statute and confirm any applicable deadlines.</p>

      <h2>Support Through Transition</h2>
      <p>Stellar Property Management guides newly turned-over <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards through document collection, vendor setup, and <a href="/services/maintenance-coordination">maintenance coordination</a> in <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> before your turnover meeting.</p>
    `,
  },
  {
    slug: 'illinois-condo-board-fiduciary-duty-audit',
    title: 'Fiduciary Duty Self-Audit for Illinois Association Boards',
    metaDescription:
      'A self-audit Illinois condo and HOA boards can run annually to test care, loyalty, and process: conflicts, documentation, financial oversight, and insurance.',
    date: '2027-03-02',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Fiduciary duty is demonstrated through process. This annual self-audit helps a board show that its decisions were informed, disinterested, and documented.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'Illinois General Not For Profit Corporation Act of 1986 (805 ILCS 105)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2280&ChapterID=65',
      },
    ],
    content: `
      <p>The short answer: Illinois association directors owe fiduciary obligations to the association, and the practical way a board demonstrates it met them is through documented process. Being right is not enough if the record does not show the board gathered information, considered alternatives, avoided self-interest, and acted within its authority. An annual self-audit is the cheapest way to find gaps before someone else does.</p>

      <p>The scope and contours of a director's duties come from the applicable statute, the association's governing documents, and Illinois corporate law where the association is incorporated. Your association's counsel should explain how those authorities apply to your board. What follows is an operational review a board can run on its own to test whether its habits match the standard it will be measured against.</p>

      <h2>Duty of Care: Were Decisions Informed?</h2>
      <p>Care is about diligence. Pull the three largest decisions the board made in the last twelve months and ask, for each one: what information did the board have, was more than one option evaluated, was outside expertise obtained when the question exceeded the board's competence, and does the minute record reflect the basis for the decision? If a major contract was awarded without competitive proposals or a documented rationale, that is a gap worth fixing regardless of whether the vendor performed well.</p>

      <h2>Duty of Loyalty: Was Anyone Self-Interested?</h2>
      <p>Loyalty is about whose interest the decision served. Every director should complete an annual conflict-of-interest disclosure covering business relationships with vendors, employment connections, family relationships, and ownership of multiple units where relevant. When a conflict exists on a specific matter, the interested director should disclose it on the record and abstain, and the minutes should reflect both. Boards should also confirm they are not extending discretionary benefits, waivers, or enforcement leniency to directors that owners do not receive.</p>

      <h2>Authority: Did the Board Act Within Its Powers?</h2>
      <p>Review whether any action taken in the past year should have required an owner vote or a declaration amendment instead of a board resolution. Common areas of exposure include changes to common element use, allocations of expense, and rules that function as substantive restrictions. If you find one, raise it with counsel rather than quietly continuing.</p>

      <h2>Financial Oversight</h2>
      <ul>
        <li>Does the board receive and review monthly financial statements?</li>
        <li>Are bank reconciliations performed and reviewed by someone other than the preparer?</li>
        <li>Are two signatures or dual controls required above a defined threshold?</li>
        <li>Is the reserve funded on a plan supported by a current study rather than by habit?</li>
        <li>Is the collection policy applied uniformly to every delinquent account?</li>
        <li>Has the board obtained an independent audit or review at the interval its documents require?</li>
      </ul>

      <h2>Insurance and Risk</h2>
      <p>Confirm that property, general liability, fidelity or crime, and directors and officers coverage are in place with limits reviewed against current replacement values and current risk. Ask the broker to present coverage annually and to explain exclusions in plain language. Verify that vendors carry required insurance and that certificates on file are current, which is easier when <a href="/services/maintenance-coordination">maintenance coordination</a> and vendor compliance are managed centrally.</p>

      <h2>Board Checklist: Annual Fiduciary Self-Audit</h2>
      <ul>
        <li>Collect signed conflict-of-interest disclosures from every director.</li>
        <li>Confirm abstentions were recorded on every conflicted matter.</li>
        <li>Test three major decisions for documented information gathering and alternatives.</li>
        <li>Verify competitive proposals were obtained for significant contracts.</li>
        <li>Confirm minutes exist, were approved, and record the basis for major actions.</li>
        <li>Verify monthly financials are delivered and reviewed at meetings.</li>
        <li>Confirm reconciliation and dual-control procedures are operating.</li>
        <li>Review reserve funding against the current reserve study.</li>
        <li>Confirm uniform application of the collection policy.</li>
        <li>Review all insurance coverage with the broker and confirm fidelity coverage.</li>
        <li>Confirm corporate registration and registered agent are current.</li>
        <li>Ask counsel to review any action that may have exceeded board authority.</li>
        <li>Record the completed self-audit in the minutes.</li>
      </ul>

      <h2>Make It an Annual Habit</h2>
      <p>Run this review at the same point each year, ideally before budget season so any findings can be funded in the coming year's plan. Recording that the board completed the self-audit is itself evidence of a board taking its obligations seriously, and it gives incoming directors a clear picture of how the board operates.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Duties and standards differ in their statutory expression between the Illinois Condominium Property Act and CICAA, and your association's counsel should interpret your governing documents and the current statutes for your board.</p>

      <h2>Run the Audit With Professional Support</h2>
      <p>Stellar Property Management helps <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards build the documentation and <a href="/services/financial-management">financial controls</a> this review tests, across <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>. <a href="/contact">Schedule a consultation</a> to review your governance practices.</p>
    `,
  },
  {
    slug: 'illinois-association-annual-meeting-guide',
    title: 'Illinois Association Annual Meetings: Notice, Quorum, and Minutes',
    metaDescription:
      'How Illinois condo and HOA boards plan an annual meeting that holds up: notice logistics, quorum and proxy handling, election mechanics, and minute drafting.',
    date: '2027-03-30',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Most annual meeting problems are logistics problems. Confirm the requirements with counsel, then execute notice, quorum, and minutes the same way every year.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'Illinois General Not For Profit Corporation Act of 1986 (805 ILCS 105)',
        url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2280&ChapterID=65',
      },
    ],
    content: `
      <p>The short answer: an Illinois association's annual meeting is valid when it is properly noticed to all owners, a quorum is present in person or by the proxy or ballot methods your documents allow, business is conducted within the noticed scope, and the outcome is captured in minutes. The notice period, quorum threshold, proxy rules, and election mechanics come from the applicable statute and from your declaration and bylaws, and they differ between condominiums and non-condominium common interest communities. Confirm your association's specific requirements with counsel and calendar them.</p>

      <p>Nearly every annual meeting dispute we see traces back to logistics rather than law: notice sent to a stale address, a quorum count nobody can reconstruct, a proxy form that did not match the bylaws, or minutes written weeks later from memory. Fix the logistics and the meeting takes care of itself.</p>

      <h2>Build a Notice Plan Backward From the Meeting Date</h2>
      <p>Set the meeting date first, then work backward through candidate solicitation, the notice mailing or transmission, the candidate statement deadline, and the proxy or ballot return date. Confirm the required notice period with counsel and add margin; sending early is never a defect. Reconcile the owner roster against current recorded ownership before you send, and make sure owners who have not consented to electronic delivery receive notice in the traditional manner.</p>

      <h3>What the Notice Package Should Include</h3>
      <ul>
        <li>Date, time, and location or access instructions for the meeting.</li>
        <li>The agenda and a statement of the business to be conducted.</li>
        <li>Election information, candidate statements, and the ballot or proxy form.</li>
        <li>Clear instructions and a deadline for returning proxies or ballots.</li>
        <li>Any budget or other materials your documents require to be circulated.</li>
      </ul>

      <h2>Handle Quorum and Proxies Methodically</h2>
      <p>Know your quorum threshold before the meeting and know exactly which units or lots are eligible to vote. Check in attendees against the roster, collect and validate proxies at check-in against the form your bylaws require, and record the count on paper. If quorum fails, follow the adjournment and reconvening procedure in your documents rather than improvising, and confirm with counsel whether any reduced-quorum provision applies to your association.</p>

      <p>Give the election itself a defined process: who counts ballots, who observes, how ties are handled, and how the count is recorded. Retain ballots and proxies with the association's records for the retention period counsel advises.</p>

      <h2>Minutes That Serve the Association</h2>
      <p>Minutes are a record of actions, not a transcript. Capture the meeting type, date, time, and location; confirmation that notice was given; the quorum determination; who chaired; each motion with its mover, second, and result; election results; and the time of adjournment. Leave out debate summaries and personal commentary. Draft within a few days while recollection is fresh, circulate to the board for review, and approve at the next meeting.</p>

      <h2>Board Checklist: Annual Meeting Execution</h2>
      <ul>
        <li>Confirm notice period, quorum, and proxy rules with counsel and calendar them.</li>
        <li>Reconcile the owner roster against recorded ownership before mailing.</li>
        <li>Send notice by the method each owner is entitled to receive and keep proof.</li>
        <li>Solicit candidates early and circulate candidate statements with the notice.</li>
        <li>Use a proxy or ballot form that matches your bylaws exactly.</li>
        <li>Prepare a check-in roster and a written quorum tally sheet.</li>
        <li>Validate proxies at check-in before the meeting is called to order.</li>
        <li>Follow the documented adjournment procedure if quorum is not met.</li>
        <li>Run the election with designated counters and observers.</li>
        <li>Announce results and record them in the minutes.</li>
        <li>Retain notice proof, ballots, proxies, and tally sheets with official records.</li>
        <li>Draft minutes within a week and approve them at the next meeting.</li>
      </ul>

      <h2>Turnout Follows Relevance</h2>
      <p>Owners are more likely to understand the value of attending when the meeting decides something they care about. Publish the agenda with a short plain-language summary of what will be decided, send reminders, and hold the meeting at a realistic hour. A brief year-in-review of completed projects and the coming year's plan also gives owners a practical reason to participate.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Meeting, notice, and quorum provisions differ between the Illinois Condominium Property Act and CICAA, and your association's counsel should interpret your declaration, bylaws, and the current statute before your meeting.</p>

      <h2>Let Us Run the Logistics</h2>
      <p>Stellar Property Management handles notice packages, check-in, tabulation, and minutes for <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards in <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>, backed by ongoing <a href="/services/board-support">board support</a>. <a href="/contact">Schedule a consultation</a> before your next annual meeting.</p>
    `,
  },
  {
    slug: 'condo-hoa-emergency-planning-checklist',
    title: 'Association Emergency Planning: A Board-Ready Playbook',
    metaDescription:
      'An emergency planning playbook for Illinois condo, HOA, and townhome boards: authority, contacts, communication, vendor readiness, and post-event documentation.',
    date: '2027-04-27',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Operations',
    readTime: '7 min read',
    excerpt:
      'A pipe break at 2 a.m. is not the time to look up who can authorize a vendor. Decide the authority, contacts, and communication plan in advance.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
      {
        title: 'City of Chicago Condominium Ordinance Information',
        url: 'https://www.chicago.gov/city/en/depts/bacp/supp_info/condominium_ordinanceinformation.html',
      },
    ],
    content: `
      <p>The short answer: an association emergency plan is a short written document that answers four questions before an emergency happens. Who can authorize emergency work and up to what amount, who gets called and in what order, how are owners notified, and how is everything documented for insurance. Boards that answer those four questions in advance handle a burst riser or a fire alarm event calmly. Boards that do not spend the first two hours trying to reach someone with authority.</p>

      <p>The board's spending authority in an emergency comes from your declaration, bylaws, and the applicable statute, so confirm with association counsel what your board may authorize without a meeting and whether ratification at the next meeting is required. Do that once, write the answer into the plan, and every future emergency starts from a known position.</p>

      <h2>Define Authority in Writing</h2>
      <p>Adopt a resolution, reviewed by counsel, that identifies who may authorize emergency work, the dollar threshold, and the notification and ratification steps that follow. Typically this designates the board president or a designated officer plus the managing agent, requires notice to the full board as soon as practicable, and requires ratification at the next board meeting with the action recorded in the minutes. Without this, well-intentioned directors either freeze or act outside their authority.</p>

      <h2>Maintain a Contact Tree That Is Actually Current</h2>
      <ul>
        <li>Board officers and the managing agent with after-hours numbers.</li>
        <li>Insurance broker and the claims reporting line with the policy number.</li>
        <li>Association counsel.</li>
        <li>Water mitigation, plumbing, electrical, HVAC, elevator, roofing, and restoration vendors.</li>
        <li>Utility emergency numbers and the municipal non-emergency line.</li>
        <li>Building engineer or on-site staff.</li>
        <li>Owners with mobility needs who may require assistance during an evacuation, maintained with appropriate privacy safeguards.</li>
      </ul>
      <p>Verify every number twice a year. A contact tree that has not been checked since the last board turnover is the most common failure in an otherwise good plan.</p>

      <h2>Know Your Building Before You Need To</h2>
      <p>Document and post the locations of main water shutoffs and riser isolation valves, gas shutoffs, electrical panels and the main disconnect, fire pump and sprinkler control valves, alarm panels, elevator recall controls, and the roof access route. Keep a labeled diagram in the management office and with the board. Practically speaking, knowing which valve isolates a single riser instead of the whole building is often the difference between a one-unit loss and a twenty-unit loss.</p>

      <h2>Plan the Communication in Advance</h2>
      <p>Pre-write three short templates: an initial notification, a status update, and an all-clear with next steps. State what happened in plain terms, what the association is doing, what owners should do, and when the next update will come. Send updates on the schedule you promised even when there is little to report. Silence during an incident produces more owner anxiety and more complaints than the incident itself.</p>

      <h2>Board Checklist: Emergency Readiness</h2>
      <ul>
        <li>Adopt an emergency authority resolution reviewed by counsel.</li>
        <li>Maintain and verify the contact tree twice a year.</li>
        <li>Pre-qualify emergency vendors and keep current insurance certificates on file.</li>
        <li>Document and post shutoff, panel, and control locations with a labeled diagram.</li>
        <li>Keep insurance policies, limits, deductibles, and claim procedures accessible after hours.</li>
        <li>Prepare initial, update, and all-clear communication templates.</li>
        <li>Confirm the owner contact list is current and reachable by more than one channel.</li>
        <li>Confirm life-safety systems are inspected on the required schedule.</li>
        <li>Maintain a reserve or contingency line the board can draw on immediately.</li>
        <li>Photograph and log all damage before mitigation begins.</li>
        <li>Report claims promptly and keep every invoice and work authorization.</li>
        <li>Ratify emergency actions at the next board meeting and record them in the minutes.</li>
        <li>Debrief after every incident and update the plan.</li>
      </ul>

      <h2>Documentation Determines the Claim Outcome</h2>
      <p>Insurance claims depend heavily on documentation. Photograph conditions before mitigation, keep a running log with dates and times of every call and decision, retain all vendor authorizations and invoices, and record which costs the association paid versus which fell to individual owners under your declaration's maintenance and repair allocation. Reliable <a href="/services/maintenance-coordination">maintenance coordination</a> and clean <a href="/services/financial-management">financial records</a> give the adjuster a clearer record to evaluate.</p>

      <p>This article is educational information for Illinois association boards and is not legal advice. Emergency spending authority and related requirements differ between the Illinois Condominium Property Act and CICAA and may be affected by local ordinances, so your association's counsel should interpret your governing documents and the current requirements that apply to your property.</p>

      <h2>Build Your Plan With Us</h2>
      <p>Stellar Property Management builds and maintains emergency playbooks for <a href="/services/condominium-management">condominium</a>, <a href="/services/hoa-management">HOA</a>, and <a href="/services/townhome-management">townhome</a> boards throughout <a href="/property-management-chicago">Chicago</a> and the <a href="/property-management-north-shore">North Shore</a>, supported by structured <a href="/services/board-support">board processes</a>. <a href="/contact">Schedule a consultation</a> to put a plan in place before you need it.</p>
    `,
  },
];
