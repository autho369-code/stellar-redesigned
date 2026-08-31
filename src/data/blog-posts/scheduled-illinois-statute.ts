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
];
