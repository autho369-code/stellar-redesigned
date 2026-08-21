import type { ServiceFAQItem } from '../components/seo/ServiceFAQ';
import type { ContentCluster } from './content-silos';

// Orientation questions for each cluster hub. The hubs were the thinnest pages
// on the site (415–649 words) and the only cluster surfaces without FAQPage
// schema — these answer the question a board actually arrives with, and give
// AI crawlers a citable block per topic.
export const topicFaqs: Record<ContentCluster, ServiceFAQItem[]> = {
  governance: [
    {
      question: 'Which Illinois law governs our association?',
      answer: 'Condominiums are governed by the Illinois Condominium Property Act. Homeowner and townhome associations that are not condominiums generally fall under the Common Interest Community Association Act, with smaller communities sometimes exempt from parts of it. Both sit alongside the General Not For Profit Corporation Act and your own recorded declaration and bylaws. Knowing which applies matters, because notice periods, records rights, and voting rules differ between them.',
    },
    {
      question: 'What decisions require an owner vote rather than a board vote?',
      answer: 'The board can act on ordinary operations, contracts, and rules within its granted authority. Amending the declaration, and in most cases adopting the annual budget where owners hold a rejection right, reach further. Special assessments above thresholds set in the statute or documents can trigger an owner petition right. When the line is unclear, the cost of asking counsel first is far below the cost of an action later reversed.',
    },
    {
      question: 'How long do we have to respond to an owner records request?',
      answer: 'Illinois sets a statutory response window for proper written requests and defines the categories that may be withheld, such as litigation files and other owners’ personal information. Treat every request the same way: log it, acknowledge it in writing, produce what the statute requires within the deadline, and route anything genuinely within an exception to counsel. Silence is what turns a records question into a legal dispute.',
    },
    {
      question: 'What is a director’s fiduciary duty in practice?',
      answer: 'It means acting in the association’s interest rather than your own, informing yourself before deciding, and following the process the documents require. In practice that is: read the board package, disclose and step back from conflicts, base decisions on documented information, and record what was decided and why. Directors are rarely faulted for a decision that turned out badly — they are faulted for deciding without a process.',
    },
  ],
  finance: [
    {
      question: 'How much should our association keep in reserves?',
      answer: 'Illinois requires condominium associations to fund reserves reasonable for the repair and replacement of common elements, judged against the age and condition of the building’s components, unless owners have voted to waive it. The statute sets no number, which is why a reserve study matters: it inventories components with remaining useful lives and replacement costs, then converts them into a funding plan a board can defend to owners.',
    },
    {
      question: 'What is the difference between a special assessment and a reserve?',
      answer: 'A reserve is money collected steadily in advance for work everyone knows is coming. A special assessment is money collected suddenly for work that arrived before the reserve did. They fund the same repairs — the difference is whether owners had years to absorb the cost or weeks. Most special assessments are a reserve-funding decision made years earlier, catching up.',
    },
    {
      question: 'When should the board involve the attorney on collections?',
      answer: 'Adopt a written collection policy in advance with defined trigger points, then follow it identically for every owner. Statements and late notices are administrative. Once the matter reaches a formal demand, a lien, or any action affecting possession, it carries statutory notice requirements and belongs with association counsel. What the board controls is the policy and the trigger; what counsel controls is the legal step.',
    },
    {
      question: 'Why does our insurance keep costing more?',
      answer: 'Illinois associations have faced sustained premium increases driven by claims history, replacement-cost inflation on building materials, deductible structures, and reinsurance markets that price weather risk. Boards have less control over the market than over their own exposure: current appraisals, documented maintenance, resolved deferred repairs, and a clean claims record all affect what an underwriter offers at renewal.',
    },
  ],
  buildings: [
    {
      question: 'Who is responsible for a repair, the owner or the association?',
      answer: 'The declaration decides, not intuition. Generally the association maintains common elements — roof, facade, structure, common risers, boilers, elevators, hallways — while owners maintain what sits inside their unit boundaries. Limited common elements such as balconies and assigned parking often carry their own rules. Because declarations vary building to building, the reliable answer comes from your own recorded documents rather than from what a neighbor was told.',
    },
    {
      question: 'What counts as an emergency for an association?',
      answer: 'Anything threatening people or property that cannot wait for business hours: burst pipes, no heat in cold weather, flooding, elevator entrapment, fire and life-safety alarms, roof or facade failures, and loss of power to common areas. Call 911 first for anything life-threatening. A building without heat in winter is genuinely an emergency, not a next-morning work order, and should be reported to a 24-hour line rather than an office voicemail.',
    },
    {
      question: 'How should a board approach a large capital project?',
      answer: 'Scope before price. Have an engineer or architect define the work in writing, then bid that written scope so the proposals a board compares describe the same job. Confirm funding — reserves, assessment, or a loan — before signing. Build in inspection milestones and retainage. Most capital projects that go badly went wrong at the scoping stage, when three bids described three different jobs.',
    },
    {
      question: 'What building inspections do Chicago associations have to keep up with?',
      answer: 'Depending on the building’s height, age, and systems, obligations can include facade inspection under the city’s critical-examination requirements, annual elevator inspection, life-safety and alarm testing, backflow-prevention testing, and boiler inspection. Deadlines vary by building rather than following one calendar, so the practical safeguard is a compliance calendar maintained by the association with the responsible party named against each item.',
    },
  ],
  management: [
    {
      question: 'How do we compare management proposals that all look similar?',
      answer: 'Normalize them before reading them. Convert every fee to an annual per-unit figure including anything billed separately — capital-project oversight, transition charges, statutory disclosure fees, after-hours calls. Then ask each firm the same operational questions: who is our manager, how many associations do they carry, what arrives each month and when, and who answers at 2 a.m. Proposals rarely differ on promises; they differ on those answers.',
    },
    {
      question: 'What should a board expect during a management transition?',
      answer: 'Plan a managed 30 to 60 day handoff after notice is given under the existing contract. It should cover records retrieval from the outgoing firm, banking migration under board control, owner balance verification, vendor and insurance notification, portal setup, and owner communication. Expect the first complete monthly financial package in the first full month. A transition without a written checklist is where records go missing.',
    },
    {
      question: 'How do we know if our current management company is underperforming?',
      answer: 'Look at inputs rather than feelings: do financials arrive before the meeting or at it, are action items from the last meeting tracked, are delinquencies aging, do owner emails get answered, are vendor certificates of insurance current, and does anyone answer after hours. One bad month is noise. A pattern across those six is the answer, and it is worth documenting before you raise it.',
    },
    {
      question: 'What does association management actually cost in Chicago?',
      answer: 'Stellar quotes a customized flat monthly fee starting at $20 per unit per month, based on building size, systems, staffing, amenities, financial complexity, and scope, rather than a percentage of the association’s budget. When comparing firms, the figure that matters is total annual cost including every separately billed item — a low base fee with unbundled charges frequently exceeds a higher all-in quote.',
    },
  ],
};
