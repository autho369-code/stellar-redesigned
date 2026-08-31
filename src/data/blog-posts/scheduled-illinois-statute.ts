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
    date: '2026-09-26',
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
];
