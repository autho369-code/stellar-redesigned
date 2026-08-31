import type { BlogPost } from './index';

// Batch added 2026-08-29 to extend the daily cadence past 2026-09-25.
//
// Editorial rule for this file: every post targets a question that is specific
// to Illinois — and ideally splits differently for Chicago than for the North
// Shore. Search Console showed the generic posts ("condo reserve fund") sitting
// at positions 46-77 against national publishers, while Illinois-qualified
// queries rank far better. Statute-specific questions are where a Chicago firm
// can actually win, and where national sites are routinely wrong.
export const scheduledIllinoisStatutePosts: BlogPost[] = [
  {
    slug: 'illinois-condo-deconversion-75-or-85-percent',
    title: 'Condo Deconversion in Illinois: Is It 75% or 85%?',
    metaDescription:
      'The Illinois deconversion threshold is 75% under Section 15 — but 85% inside Chicago city limits since 2019. What boards need to know about a Section 15 sale.',
    date: '2026-08-31',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Illinois Association Law',
    readTime: '8 min read',
    excerpt:
      'A developer offer to buy every unit in the building is the single most consequential vote most condo boards will ever put to their owners — and the approval threshold is different in Chicago than it is three miles north.',
    sources: [
      {
        title: 'Illinois Condominium Property Act, Section 15 (765 ILCS 605/15)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'IDFPR — Condominium and Common Interest Community Ombudsperson: How Does a Deconversion Work?',
        url: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/ccico/faq/how-does-a-deconversion-work.pdf',
      },
      {
        title: 'CAI Illinois — ILAC Legislative Update: De-Conversions and the Chicago Ordinance',
        url: 'https://www.cai-illinois.org/ilac-legislative-update/',
      },
    ],
    content: `
      <p>A buyer approaches the board with an offer to purchase every unit in the building. It is usually a developer, the number is usually well above what individual units have been trading for, and the board has usually never handled anything like it. This is a <strong>Section 15 sale</strong> — commonly called a deconversion, because the building stops being a condominium and returns to single ownership, typically as apartments.</p>

      <p>The first question every board asks is what percentage of owners must approve. The answer depends on where the building sits, and getting it wrong wastes months.</p>

      <h2>75% under state law, 85% in Chicago</h2>

      <p>Section 15 of the Illinois Condominium Property Act (765 ILCS 605/15) sets the threshold at <strong>75% of unit owners</strong> for condominiums of four or more units. That is the number across most of Illinois.</p>

      <p>Chicago is different. In September 2019 the City Council passed an amendment to the Municipal Code raising the approval threshold to <strong>85%</strong> for condominiums located in the city, effective 16 October 2019. Because Chicago is a home rule municipality, that ordinance supersedes the state threshold within city limits.</p>

      <p>So a 60-unit building in Lakeview needs 85% approval. A comparable building in Evanston, Skokie or Wilmette needs 75%. Same statute, same offer, materially different vote — and on a 60-unit building that is the difference between needing 51 owners and needing 45.</p>

      <p>Your governing documents may also set a higher figure than the statutory minimum, and building size can change the calculation. Before a board tells owners any number, association counsel should confirm which threshold applies to that specific property.</p>

      <h2>What the board can do, and what only owners can do</h2>

      <p>Boards frequently assume they must stay entirely out of a deconversion until owners vote. That is not right, and the passivity causes problems of its own — an unmanaged process lets a buyer set the terms and the narrative.</p>

      <p>A board generally has authority to act in a representative capacity: to discuss a potential sale, to bring offers to the ownership, to engage a broker, and to negotiate the contract on the association's behalf. What the board cannot do is approve the sale. That decision belongs to the owners at the required percentage.</p>

      <p>The practical consequence is that a board should be organised well before a vote — because the quality of the deal owners are eventually asked to approve depends heavily on how the board handled the months preceding it.</p>

      <h2>Approval binds everyone, including the owners who voted no</h2>

      <p>This is the part owners find hardest, and boards should say it plainly rather than let people discover it late. Once the required percentage approves the sale, it becomes the duty of every unit owner to execute and deliver the instruments necessary to complete the transaction. An owner who voted against the sale, or who did not vote at all, is still carried by the outcome.</p>

      <p>Illinois law does provide protections for objecting owners around how they are compensated, and those provisions have been the subject of both litigation and legislative attention. They are specific enough that no board should characterise them to owners from memory or from an article. Direct that question to association counsel, and expect owners to ask it early and repeatedly.</p>

      <h2>What a board should actually do when an offer arrives</h2>

      <ol>
        <li><strong>Say nothing definitive at first.</strong> A board member speculating about price or likelihood in a lobby conversation creates expectations that are difficult to walk back.</li>
        <li><strong>Engage counsel before engaging the buyer.</strong> This is not a transaction to negotiate on instinct. Illinois has attorneys who do deconversions repeatedly.</li>
        <li><strong>Confirm the threshold in writing</strong> — statute, municipal ordinance, and your own declaration.</li>
        <li><strong>Establish how owners will be kept informed</strong> and hold to it. Information vacuums in a deconversion fill with rumour faster than in any other association matter.</li>
        <li><strong>Get the association's records in order.</strong> A buyer's diligence will surface every gap in your reserve history, insurance file and minute book. So will a dissenting owner's attorney.</li>
        <li><strong>Keep running the building.</strong> Deconversion discussions have taken years. Deferring the roof because the building might sell is how an association ends up with both a failed sale and a failed roof.</li>
      </ol>

      <h2>The dynamic nobody warns boards about</h2>

      <p>A deconversion splits an association in a way ordinary disputes do not. Owners who bought recently at a high basis, owners who have lived there thirty years, owners who rent their units out, and owners who cannot easily buy again in the same neighbourhood all have genuinely different interests — and all of them are correct about their own position.</p>

      <p>Boards that handle this well do two things: they keep the process procedurally clean so the outcome is defensible regardless of which way it goes, and they resist the temptation to advocate. A board that is perceived as campaigning for the sale loses the trust it needs if the sale fails and everyone still has to live together.</p>

      <h2>Where this sits in Chicago right now</h2>

      <p>Deconversion activity tracks the gap between what a building is worth as individual condominiums and what it is worth as a single rental asset. That gap moves with interest rates, rents and construction costs, which is why deconversion offers arrive in waves rather than steadily. Vintage buildings with deferred capital needs and low reserves are the most frequent targets, because the arithmetic favours a buyer who intends to renovate comprehensively.</p>

      <p>If your association is in that category, the useful preparation is not to have a position on selling. It is to have the reserve study, the capital plan and the records in a condition where the board can evaluate an offer on its merits within weeks rather than months.</p>

      <p><em>This article is general information about Illinois community association practice and is not legal advice. Deconversion involves statutory thresholds, municipal ordinances and your own recorded declaration interacting with each other, and the analysis is property-specific. Engage association counsel before taking any step.</em></p>
    `,
  },
  {
    slug: 'illinois-condo-assessment-collection-possession-action',
    title: 'Collecting Unpaid Assessments in Illinois: The Possession Action',
    metaDescription:
      'Illinois lets a condo association take possession of a delinquent unit and lease it to recover the debt. How the Section 9-102 process works and where boards go wrong.',
    date: '2026-08-31',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Illinois Association Law',
    readTime: '8 min read',
    excerpt:
      'Most boards think their only collection tool is a lien that sits until the owner sells. Illinois gives associations something considerably sharper — and considerably more misunderstood.',
    sources: [
      {
        title: 'Illinois Code of Civil Procedure, Article IX (735 ILCS 5/9-102)',
        url: 'https://law.onecle.com/illinois/735ilcs5/indexIX.html',
      },
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
    ],
    content: `
      <p>Ask most Illinois condo boards what happens when an owner stops paying assessments and you will hear the same answer: we record a lien and wait for them to sell. That is a real remedy, and it is also the slowest one available. An owner with no intention of selling can sit on a lien for years while the other owners carry the shortfall.</p>

      <p>Illinois gives associations a materially stronger tool, and it is the one boards understand least.</p>

      <h2>The association can take possession of the unit</h2>

      <p>Under Article IX of the Illinois Code of Civil Procedure — 735 ILCS 5/9-102 — an association may bring an action for possession of a unit when the owner has failed to pay their proportionate share of common expenses after the board has served a statutory demand.</p>

      <p>Read that carefully, because the misunderstanding here is near-universal. <strong>The association does not take ownership of the unit.</strong> It takes <em>possession</em>. The owner keeps title, keeps the mortgage, and keeps the obligation. What the association gains is the right to control occupancy — which in practice means the association can lease the unit and apply the rent against what is owed until the debt, costs and fees are satisfied.</p>

      <p>It is a collection mechanism, not a forfeiture. For a delinquent owner who is not selling and not paying, it is the difference between a claim that might be honoured someday and a unit that starts generating money for the association next month.</p>

      <h2>The demand is where cases are won or lost</h2>

      <p>The possession action is not available until the board has served a proper demand under Section 9-104.1, and the demand is where most associations create their own problems.</p>

      <p>The amount claimed may include regular and special assessments, late charges or interest on the delinquency, and attorneys' fees incurred before the demand was served. Two things follow from that:</p>

      <ul>
        <li><strong>The figure has to be right.</strong> A demand that overstates what is owed hands the owner an argument, and the whole action can turn on it. The ledger, the late-fee policy and the fee invoices all need to reconcile before anything is served.</li>
        <li><strong>Attorneys' fees claimed in the demand are subject to court review.</strong> A court can and will look at whether the fees an association is claiming are reasonable. Boards that treat the fee line as a way to pressure an owner tend to discover this at an inconvenient moment.</li>
      </ul>

      <p>There is also a trap in the opposite direction. Accepting a payment from a delinquent owner does not automatically waive an action already brought — Illinois law addresses payments covering periods other than the one in the demand. But "does not automatically waive" is not the same as "no effect," and how a payment is received, applied and receipted matters. Have counsel tell you how to handle money that arrives mid-process rather than deciding it at the management desk.</p>

      <h2>Condominiums and other associations are not in the same position</h2>

      <p>This is the distinction that catches townhome and HOA boards. The statutory provisions covering common interest communities carry conditions that do not apply identically to condominiums — including, for common interest communities, a requirement that the association be organised as a not-for-profit corporation.</p>

      <p>So a condominium association governed by the Condominium Property Act and a townhome association governed by the Common Interest Community Association Act can face genuinely different answers on whether this route is available and what has to be true first. Two boards a block apart, same delinquency, different remedy. Confirm which statute governs your association before anyone assumes the process transfers.</p>

      <h2>What a board should have in place before any of this matters</h2>

      <p>The associations that collect well are not the ones with the most aggressive attorney. They are the ones whose records survive scrutiny. Before a delinquency ever escalates:</p>

      <ol>
        <li><strong>A written collection policy, adopted by the board</strong> — when a balance becomes delinquent, when late fees attach, when the file goes to counsel. Applied identically to every owner, every time.</li>
        <li><strong>An owner ledger that reconciles to the financial statements.</strong> If the balance sheet and the ledger disagree, the demand figure is unsupportable.</li>
        <li><strong>A documented late-fee and interest basis</strong> traceable to the declaration or an adopted rule, not to custom.</li>
        <li><strong>Clean records of every notice sent</strong> — what, when, to which address, by what method.</li>
        <li><strong>Board minutes reflecting the decision to proceed.</strong> Collection escalation is a board action, not a manager's discretion.</li>
      </ol>

      <p>Every one of those is unglamorous, and every one of them is what makes the difference when an owner's attorney starts looking for a defect.</p>

      <h2>The judgement call boards actually face</h2>

      <p>Having a strong remedy does not mean using it early. Possession actions cost money, take time, and land hardest on owners in genuine difficulty — job loss, illness, a death in the family. Boards that reach for the sharpest tool first tend to spend more in fees than they recover, and they poison the building while doing it.</p>

      <p>The better sequence is consistent, documented escalation with a real chance to cure at each step — and then, for owners who simply will not engage, a remedy with actual teeth. What is unfair to the other owners is not enforcement. It is an association where non-payment carries no consequence and the paying owners quietly cover the difference forever.</p>

      <p><em>This article is general information about Illinois community association practice and is not legal advice. Collection remedies involve statutory notice requirements, your governing documents and court procedure interacting with each other, and the analysis is association-specific. Engage association counsel before serving a demand or filing an action.</em></p>
    `,
  },
  {
    slug: 'amend-illinois-condo-declaration-section-27',
    title: 'Amending an Illinois Condo Declaration: What It Actually Takes',
    metaDescription:
      'Section 27 sets the amendment threshold at two-thirds of voting owners unless your instruments say otherwise. And an amendment nobody records is not in force.',
    date: '2026-08-31',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Illinois Association Law',
    readTime: '7 min read',
    excerpt:
      'Boards routinely pass amendments that never take effect, because the vote is only half the job. Here is the threshold, the exceptions, and the step that gets skipped.',
    sources: [
      {
        title: 'Illinois Condominium Property Act (765 ILCS 605)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62',
      },
      {
        title: 'IDFPR — Illinois Condominium Property Act, full text',
        url: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/ccico/pdfs/2025-08-15-cpa-full-act.pdf',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160)',
        url: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62',
      },
    ],
    content: `
      <p>Every few years a board runs into something its declaration will not let it do. Leasing has got out of hand, the rules have no teeth, an obsolete provision is blocking a project. Someone says "we should amend the declaration," and the board discovers the process is less obvious than it looked.</p>

      <h2>The default is two-thirds — but check your own documents first</h2>

      <p>Section 27 of the Illinois Condominium Property Act sets the general amendment threshold at an affirmative vote of <strong>two-thirds of voting unit owners</strong>. That is the default, and it applies unless your condominium instruments specify a different figure.</p>

      <p>Your instruments can set another majority, but not any number the drafter felt like. The alternative has to fall somewhere between 50% and 75%. So a declaration might require 60%, or 70%, and either is enforceable. If the documents are silent, two-thirds governs.</p>

      <p>The practical instruction is simple and it is skipped constantly: <strong>read your declaration before you announce a number to owners.</strong> A board that campaigns for months on the wrong threshold either falls short of a bar it did not know about, or clears a bar it did not need to clear.</p>

      <h2>Some amendments require two-thirds no matter what your documents say</h2>

      <p>There is a category where the statute overrides whatever figure your instruments contain. Section 18 requires a two-thirds majority regardless of document language for:</p>

      <ul>
        <li>merger or consolidation of the association;</li>
        <li>sale, lease, exchange or other disposition of substantially all the property and assets of the association; and</li>
        <li>the purchase or sale of land or units on behalf of all owners.</li>
      </ul>

      <p>These are the decisions that change what the association fundamentally is or what it owns. A declaration setting a 55% threshold does not lower the bar for them.</p>

      <h2>The step that gets skipped: recording</h2>

      <p>This is the single most common failure, and it is entirely avoidable.</p>

      <p><strong>An amendment is not effective until it is recorded.</strong> Section 17 of the Condominium Property Act governs this for condominiums, and Section 1-20 of the Common Interest Community Association Act does the same for common interest communities. Until the amendment is recorded, it cannot be enforced — no matter how decisively owners voted.</p>

      <p>The failure mode is predictable. The board holds the vote, the amendment passes, everyone celebrates, and the executed document goes into a file. Two years later a new board tries to enforce the new leasing cap against an owner, the owner's attorney checks the recorded chain of title, and the amendment is not in it. The association loses, and it loses on a clerical omission rather than on the merits.</p>

      <p>Treat recording as part of the vote, not as follow-up. The task is not complete until you are holding the recorded instrument with the recorder's stamp on it.</p>

      <h2>Mortgagee consent</h2>

      <p>Some declarations require the consent of mortgage holders for particular amendments — commonly those touching the percentage of ownership, insurance provisions, or reserves. Where your documents require it, Section 27 contains a mechanism for notifying mortgagees.</p>

      <p>Boards discover this requirement late and it is a genuine schedule risk, because tracking down and notifying every mortgagee on a large building is slow work. Establish at the start whether your amendment falls into a consent category, because the answer changes the timeline by months.</p>

      <h2>A sequence that works</h2>

      <ol>
        <li><strong>Have counsel draft it.</strong> Amendments are recorded instruments that outlive every director who voted on them. This is not a task for a board member with a word processor.</li>
        <li><strong>Confirm the threshold</strong> from your own declaration, not from what a neighbouring association used.</li>
        <li><strong>Determine whether mortgagee consent is triggered</strong> before you set a target date.</li>
        <li><strong>Explain the change plainly to owners</strong> well ahead of the vote. Amendments fail on confusion far more often than on opposition.</li>
        <li><strong>Run the vote by the book</strong> — notice, meeting, and ballot procedure exactly as your documents require. A defective vote is worse than a failed one, because it produces an amendment that looks valid until it is challenged.</li>
        <li><strong>Record it, and file the stamped copy</strong> with the governing documents.</li>
        <li><strong>Distribute the recorded amendment to owners</strong> and give the current version to your manager, so the packet sent on the next resale reflects reality.</li>
      </ol>

      <h2>Why this matters beyond the amendment itself</h2>

      <p>Every unrecorded or badly documented amendment becomes someone else's problem later — usually at a closing, when a buyer's attorney asks for the declaration with all recorded amendments and the association cannot produce a clean set. That is the same file that drives Section 22.1 disclosure responses, and gaps in it surface at precisely the worst moment.</p>

      <p>An association that keeps a complete, recorded, current set of governing documents saves itself a recurring tax it would otherwise pay at every sale, every dispute and every insurance renewal.</p>

      <p><em>This article is general information about Illinois community association practice and is not legal advice. Amendment thresholds, consent requirements and recording procedure depend on your recorded declaration and which statute governs your association. Engage association counsel before drafting or noticing an amendment.</em></p>
    `,
  },
  {
    slug: 'cook-county-property-tax-appeal-condo-association',
    title: 'Cook County Property Tax Appeals: What Condo Boards Should Know',
    metaDescription:
      'A Cook County condo association can appeal on behalf of every unit in one filing. How the two-stage process works, what the filing must include, and why you need an attorney.',
    date: '2026-08-31',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Association Finance',
    readTime: '7 min read',
    excerpt:
      'One filing can cover every unit in the building — and unlike most things a board does, the upside lands directly in owners\u2019 pockets rather than in the association\u2019s budget.',
    sources: [
      {
        title: 'Official Appeal Rules of the Cook County Assessor',
        url: 'https://www.cookcountyassessoril.gov/official-appeal-rules-cook-county-assessor',
      },
      {
        title: 'Cook County Board of Review — Frequently Asked Questions',
        url: 'https://www.cookcountyboardofreview.com/about/frequently-asked-questions',
      },
      {
        title: 'CAI Illinois — Property Tax Assessments and Tax Bills',
        url: 'https://www.cai-illinois.org/property-tax-assessments-tax-bills/',
      },
    ],
    content: `
      <p>Property taxes are usually the largest single cost of owning a unit, and they are the one an association can actually do something about collectively. Illinois lets a community association board file a <strong>single appeal covering every unit</strong> rather than leaving each owner to fend for themselves.</p>

      <p>It is one of the few board actions where the benefit goes straight to owners' own tax bills rather than into the association budget — which makes it one of the easiest things a board ever has to explain at an annual meeting.</p>

      <h2>How the association filing works</h2>

      <p>When an association files with the Cook County Assessor's Office, the filing must include <strong>all the PINs in the association</strong>, except those belonging to owners who have opted out. Individual owners are strongly encouraged to file with their association, but they retain the right to opt out and appeal their own unit separately.</p>

      <p>The filing must also include <strong>a copy of the declaration, or the most recent amendment, setting out the percentage of ownership for each unit.</strong> That requirement quietly rewards associations that keep their recorded documents in order, and quietly punishes the ones that do not — if you cannot produce a clean declaration with all recorded amendments, this is one more place it costs you.</p>

      <h2>Two stages, two separate bodies</h2>

      <p>Boards frequently assume one filing is the whole process. It is not.</p>

      <ol>
        <li><strong>The Cook County Assessor's Office.</strong> The first appeal of the assessed valuation.</li>
        <li><strong>The Cook County Board of Review.</strong> If the association does not agree with the Assessor's decision, a further appeal can be filed here. This is a separate body with its own filing window.</li>
      </ol>

      <p>Missing the second stage because the first produced a disappointing result is a common and expensive mistake. Treat them as two calendar entries, not one.</p>

      <h2>You need an attorney, and this is not optional</h2>

      <p>Filing a tax appeal in Illinois is considered the practice of law. A corporation or association therefore <strong>must be represented by an attorney</strong> — a board member, a manager, or a consultant cannot file on the association's behalf.</p>

      <p>This surprises boards, and it is worth stating plainly because the alternative is a filing that gets rejected. Firms that do this work typically operate on contingency, taking a share of the reduction achieved, so the association usually is not writing a cheque up front. Confirm the fee basis in writing before engaging anyone.</p>

      <h2>Timing is the whole game</h2>

      <p>Cook County reassesses on a triennial cycle, and townships open for appeal on a rolling schedule rather than all at once. The window for a given township is short and it does not move because a board was busy.</p>

      <p>The practical consequence: this belongs on the association's annual calendar as a standing item, with someone accountable for watching the township's filing window. An association that misses its window waits until the next cycle, and every owner pays the difference in the meantime.</p>

      <h2>What a board should actually do</h2>

      <ul>
        <li><strong>Put the township's appeal window on the annual calendar</strong> and assign it to a named person.</li>
        <li><strong>Keep the declaration and every recorded amendment current and accessible</strong> — the filing requires it.</li>
        <li><strong>Engage counsel who does this work routinely</strong> and confirm the fee arrangement in writing.</li>
        <li><strong>Tell owners the association is filing</strong>, and explain the opt-out. Owners who do not know an appeal is happening sometimes file duplicates or pay someone else to do what the association is already doing for them.</li>
        <li><strong>Follow through to the Board of Review</strong> if the Assessor's result is unsatisfactory.</li>
        <li><strong>Report the outcome.</strong> A reduction achieved and never communicated is a benefit the board gets no credit for.</li>
      </ul>

      <h2>Setting expectations honestly</h2>

      <p>An appeal is a request to correct an assessed valuation, not a guarantee of a lower bill. A successful appeal reduces assessed value; the eventual tax bill also depends on the tax rate and the equalisation factor, neither of which the association influences. It is entirely possible to win a reduction and still see a bill rise.</p>

      <p>Say that to owners before the appeal rather than after. A board that promises lower taxes and delivers a lower assessment inside a higher bill has created a credibility problem it did not need.</p>

      <p><em>This article is general information for Illinois community association boards and is not legal or tax advice. Appeal rules, deadlines and filing requirements are set by the Cook County Assessor and Board of Review and change; associations outside Cook County follow a different process entirely. Engage an attorney who handles association tax appeals.</em></p>
    `,
  },
  {
    slug: 'chicago-condo-short-term-rental-prohibited-buildings-list',
    title: 'Stopping Airbnb in Your Chicago Condo: The Prohibited Buildings List',
    metaDescription:
      'Chicago lets a condo association opt its entire building out of short-term rentals. Over 90,000 units are already on the Prohibited Buildings List. How a board gets there.',
    date: '2026-09-26',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Rules & Leasing',
    readTime: '7 min read',
    excerpt:
      'Most boards fight short-term rentals one unit at a time, through violation notices and fines. Chicago offers a far blunter instrument, and comparatively few associations use it.',
    sources: [
      {
        title: 'City of Chicago — Shared Housing Registrations and Associated Licenses',
        url: 'https://www.chicago.gov/city/en/depts/bacp/supp_info/sharedhousingandaccomodationslicensing.html',
      },
      {
        title: 'City of Chicago Data Portal — House Share Prohibited Buildings List',
        url: 'https://data.cityofchicago.org/Buildings/House-Share-Prohibited-Buildings-List/7bzs-jsyj/data',
      },
      {
        title: 'City of Chicago — Regulating the House Sharing Industry (ordinance summary)',
        url: 'https://www.chicago.gov/content/dam/city/depts/bacp/ordinances/housesharesummaryfinal.pdf',
      },
    ],
    content: `
      <p>A unit in the building is being listed nightly. Strangers have the door code. There is a lockbox in the lobby, luggage in the lift at midnight, and an owner who insists the declaration does not actually prohibit it. Most Chicago boards respond the way they respond to any violation — notice, hearing, fine, repeat — and find themselves in a grinding fight with one owner while a second unit quietly starts doing the same thing.</p>

      <p>Chicago offers something much blunter, and a surprising number of associations have never used it.</p>

      <h2>The Prohibited Buildings List</h2>

      <p>Under Chicago's Shared Housing Ordinance, a building can be placed on the city's <strong>Prohibited Buildings List</strong>, which makes short-term rental activity in that building unlawful as a matter of city regulation — not merely a breach of your declaration.</p>

      <p>This is not a marginal programme. As of July 2026 the list carried more than <strong>2,400 buildings and over 90,000 Chicago units</strong>. Buildings of five or more units can request inclusion, and for condominium properties that request comes from the association.</p>

      <p>The distinction that makes this worth doing is enforcement. A rule in your declaration is enforced by your board, at your association's cost, through your own hearing process, against an owner who may simply absorb the fines as a cost of doing business. Inclusion on the Prohibited Buildings List brings the city's licensing and enforcement apparatus to bear, and it applies to the platforms as well as the host.</p>

      <h2>What it does not do</h2>

      <p>Two honest limits, because boards that expect too much end up disappointed:</p>

      <ul>
        <li><strong>It addresses short-term rentals, not leasing generally.</strong> If your actual concern is a building filling with year-long tenants, this is the wrong tool. That is a governing-documents question about leasing restrictions, and it is a much harder one.</li>
        <li><strong>It is not self-policing.</strong> Listings still appear, and someone still has to notice and report them. The list changes who has authority to act and how much weight the response carries — it does not remove the need for someone to be paying attention.</li>
      </ul>

      <p>It also does not replace your declaration. The strongest position is both: a clear governing-document restriction that lets the association act directly, plus city-level prohibition that gives the restriction outside teeth.</p>

      <h2>What a board should do</h2>

      <ol>
        <li><strong>Check the list first.</strong> The current Prohibited Buildings List is published on the City of Chicago Data Portal. Some associations discover their building was added years ago by a prior board and nobody carried the knowledge forward.</li>
        <li><strong>Read your declaration and rules on leasing and transient occupancy</strong> before doing anything else. What you already prohibit shapes what you need.</li>
        <li><strong>Take a board vote and minute it.</strong> Opting the whole building out affects every owner, including any who are currently hosting. That decision belongs in the minutes, not in a manager's inbox.</li>
        <li><strong>Follow the city's inclusion process</strong> through the Department of Business Affairs and Consumer Protection, which administers registration and maintains the list.</li>
        <li><strong>Tell owners plainly</strong>, before and after. An owner who has been hosting legally will be materially affected and should hear it from the board rather than from a delisting notice.</li>
        <li><strong>Have counsel review</strong> if any owner is currently hosting, or if your documents are ambiguous about transient occupancy. This is where the disputes start.</li>
      </ol>

      <h2>Why boards keep losing this fight without it</h2>

      <p>Short-term rental disputes are unusually corrosive in condominium buildings. They are not really about the rules — they are about neighbours who feel their home has become a hotel corridor, and an owner who has a genuine economic interest in continuing. Fine-and-hearing cycles let that conflict run for a year while both sides harden.</p>

      <p>Removing the activity's legality at city level changes the conversation from a dispute between neighbours into a compliance fact. That is usually better for the building than winning slowly.</p>

      <p>It is also worth acting before there is a problem. An association with no current short-term rental activity has the easiest possible path: no affected owner, no contested vote, no one with money on the line. Boards that wait until a unit is already listed are negotiating with someone who has revenue to defend.</p>

      <h2>One more reason this matters</h2>

      <p>Short-term rental activity affects more than the corridor. It shows up in insurance — carriers ask about transient occupancy, and answers can affect coverage and premium. It shows up in lender questionnaires, where high transient use can complicate financing for every buyer in the building. And it shows up in resale disclosure, because a buyer's attorney will ask what the building permits.</p>

      <p>A board that resolves this cleanly is not just settling a neighbour dispute. It is protecting the insurability and financeability of every unit, which is squarely the board's job.</p>

      <p><em>This article is general information for Chicago community association boards and is not legal advice. The Shared Housing Ordinance, its registration requirements and the Prohibited Buildings List process are administered by the City of Chicago and change over time; associations outside Chicago are governed differently. Confirm the current process with the city and your association counsel before acting.</em></p>
    `,
  },
];
