import type { BlogPost } from './index';

// Reverse-silo support posts, 2026-12-01 through 2026-12-08: area guides for
// Evanston, Lincoln Park, Lakeview and Edgewater, plus service-silo guides
// that had little support (high-rise, HOA, condominium management). Mapped in
// src/data/post-silos.ts.
//
// Sourcing rule: City facts were read on chicago.gov on 2026-10-28 (Boiler
// Inspections page, Chicago Heat Ordinance page). CICAA facts were read on
// ilga.gov (765 ILCS 160/1-35) or come from guides that cite the primary text.
// Area facts come from src/data/neighborhoods.ts. Everything else is practice
// guidance and is written as such.
export const scheduledDec2026SiloPosts: BlogPost[] = [
  {
    slug: 'evanston-condo-association-board-guide',
    title: 'Evanston Condo Boards: What Makes Managing Here Different',
    metaDescription:
      'A guide for Evanston condominium and HOA boards: a century of building stock, City rules layered on Illinois condo law, engaged owners, and capital planning for lakefront buildings.',
    date: '2026-12-01',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Evanston associations range from vintage lakefront courtyard buildings to towers by the Davis Street stations. Here is what boards here should plan for, and what to expect from management.',
    content: `
      <p>Evanston is the North Shore’s most urban city, and its associations show it: vintage courtyard condominiums near the lake, mid-century buildings, and newer towers near the Davis Street Metra and CTA stations. Owners here tend to read the financials closely and ask good questions. This guide covers what Evanston boards deal with most.</p>

      <h2>Which rules apply to an Evanston condominium?</h2>

      <p>The Illinois Condominium Property Act applies to every condominium in the state, Evanston included. On top of it, the City of Evanston has its own property-maintenance standards and building rules. So an Evanston board works with two rulebooks: the statute and its own documents for governance and money, and the City’s rules for the building itself. Confirm with the City which permits and inspections your project needs before work starts.</p>

      <h2>What capital issues come up in Evanston buildings?</h2>

      <ul>
        <li><strong>Vintage masonry:</strong> tuckpointing, parapets and lintels on early-1900s courtyard buildings.</li>
        <li><strong>Lakefront exposure:</strong> wind-driven rain, windows and roofs that wear faster near the lake.</li>
        <li><strong>Mechanical age:</strong> boilers, risers and electrical service in buildings that have been updated piece by piece.</li>
        <li><strong>Newer towers:</strong> elevators, garages and building systems that need service contracts and reserve planning from early on.</li>
      </ul>

      <p>For older buildings, read <a href="/blog/vintage-chicago-condo-capital-planning">capital planning for vintage buildings</a>; the same logic applies north of Howard Street.</p>

      <h2>How should a board handle engaged, detail-minded owners?</h2>

      <p>Give them the detail. Monthly financial reports that show the bank balances, the budget-to-actual and open items reduce questions instead of creating them. Publish meeting minutes promptly and keep records requests on a calendar. Our guides on <a href="/blog/read-condo-hoa-financial-statements">reading association financial statements</a> and <a href="/blog/illinois-condo-association-records-request-guide">answering owner records requests</a> help boards set that standard.</p>

      <h2>What should an Evanston board ask a management company?</h2>

      <ul>
        <li>How many Evanston or North Shore associations does the manager handle now?</li>
        <li>What does the monthly board packet contain? Ask to see a sample.</li>
        <li>How are capital projects bid, overseen and reported?</li>
        <li>Who answers after hours, and is it a live person?</li>
      </ul>

      <p>Our <a href="/services/condominium-management">condominium management</a> gives Evanston boards detailed monthly reporting, capital planning across every era of building, and 24/7 live emergency response. See our <a href="/property-management-evanston">Evanston association management</a> page, or <a href="/contact">contact us</a> to meet a manager.</p>
    `,
  },
  {
    slug: 'chicago-condo-annual-building-inspection-checklist',
    title: 'The Annual Building Inspection Checklist for Chicago Condo Boards',
    metaDescription:
      'A yearly checklist for Chicago condo boards: boiler inspections, elevators, facade, porches, life safety, smoke and CO alarms, and heat-season readiness — with who owns each item.',
    date: '2026-12-02',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Compliance',
    readTime: '7 min read',
    excerpt:
      'Chicago buildings answer to several City inspection programs at once. Here is one checklist that puts them on a single calendar, with links to the detailed guide for each.',
    sources: [
      {
        title: 'City of Chicago, Department of Buildings — Boiler Inspections',
        url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/boiler_inspections.html',
      },
      {
        title: 'City of Chicago, Department of Buildings — Chicago Heat Ordinance',
        url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/chicago-heat-ordinance.html',
      },
    ],
    content: `
      <p>A Chicago condominium building can answer to several City inspection programs in the same year: boilers, elevators, the facade, porches, and life-safety systems. Each has its own office, its own dates and its own consequences. The board’s job is not to become an inspector. It is to make sure every item has a date, an owner and a record. This checklist puts them on one page.</p>

      <h2>Which buildings get City boiler inspections?</h2>

      <p>The Department of Buildings’ Boiler Inspection Bureau makes periodic inspections of boilers and unfired pressure vessels at all apartment buildings where the boiler heats four or more apartments, as well as commercial and institutional buildings. The City says the Municipal Code requires periodic inspection by City inspectors, encourages owners to have boilers inspected and serviced regularly by a qualified company, and says repairs may be made by any boiler repairer licensed by the City of Chicago.</p>

      <h2>What belongs on the yearly checklist?</h2>

      <ul>
        <li><strong>Boiler:</strong> City inspection status, annual service before heat season, licensed repairer on contract.</li>
        <li><strong>Heat season readiness:</strong> the Heat Ordinance applies September 15 to June 1. See our <a href="/blog/chicago-condo-heat-outage-protocol">no-heat protocol for condo boards</a>.</li>
        <li><strong>Elevators:</strong> City record of devices, whether the building is in the Annual Inspection Certification program, and its quarterly due date. Details in <a href="/blog/chicago-condo-elevator-inspection-board-guide">the elevator inspection guide</a>.</li>
        <li><strong>Facade:</strong> where the building sits in the City’s facade inspection cycle. See <a href="/blog/chicago-condo-facade-compliance-board-guide">Chicago facade compliance</a>.</li>
        <li><strong>Porches and decks:</strong> condition, permits and any open violations. See <a href="/blog/chicago-condo-porch-deck-safety-board-guide">porch and deck safety</a>.</li>
        <li><strong>Life safety:</strong> fire alarm, sprinkler and emergency lighting test records. See <a href="/blog/chicago-condo-life-safety-board-planning">high-rise life-safety planning</a>.</li>
        <li><strong>Smoke and CO alarms:</strong> who is responsible inside units versus common areas. See <a href="/blog/illinois-condo-smoke-carbon-monoxide-alarms">smoke and carbon monoxide alarms</a>.</li>
      </ul>

      <h2>How should the board keep track?</h2>

      <p>Use one calendar with three columns for every item: the due date, the person or vendor responsible, and where the record is filed. Review it at the first board meeting of each quarter. When a vendor contract renews, check that the inspection work is in the scope, not assumed.</p>

      <h2>What happens if something is missed?</h2>

      <p>The usual results are violations, fines and rushed repairs at premium prices, plus questions from lenders and insurers later. A missed date is rarely about money at first. It becomes about money when it is found late.</p>

      <p>Keeping this calendar is part of our <a href="/services/high-rise-condominium-management">high-rise condominium management</a> for buildings across <a href="/property-management-chicago">Chicago</a>. If your board wants its checklist built from the City’s records, <a href="/contact">contact us</a>.</p>
    `,
  },
  {
    slug: 'lincoln-park-vintage-condo-board-guide',
    title: 'Lincoln Park Condo Boards: Managing Vintage Walk-Ups and Three-Flats',
    metaDescription:
      'A guide for Lincoln Park condo boards in vintage walk-ups and three-flat conversions: tuckpointing, roofs, porches, boilers, tight budgets, and when a small building needs help.',
    date: '2026-12-03',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'Lincoln Park has towers on the park and three-flats on side streets. The small vintage buildings carry the tightest budgets and the oldest systems. Here is how their boards can stay ahead.',
    content: `
      <p>Lincoln Park has two very different kinds of condominium. Along the park there are high-rises with door staff and vintage elevators. On streets like Fremont, Seminary and Cleveland there are converted three-flats and courtyard walk-ups, often with six to 24 units. This guide is for the second group, where one roof or porch decision can shape the budget for years.</p>

      <h2>What do vintage Lincoln Park buildings need most?</h2>

      <ul>
        <li><strong>Masonry:</strong> tuckpointing cycles, parapets and chimneys.</li>
        <li><strong>Roofs:</strong> flat roofs with a predictable replacement cycle.</li>
        <li><strong>Porches:</strong> wood rear porches that the City inspects and enforces. See <a href="/blog/chicago-condo-porch-deck-safety-board-guide">porch and deck safety for condo boards</a>.</li>
        <li><strong>Heat:</strong> older boilers that must be ready for the September 15 heat season.</li>
      </ul>

      <h2>How should a small building budget for this?</h2>

      <p>With a reserve study, even a simple one. In a six-unit building, a $60,000 roof is $10,000 per unit if there is no reserve. Spread over ten years of contributions, it is a manageable line in the budget. Read <a href="/blog/vintage-chicago-condo-capital-planning">capital planning for vintage Chicago buildings</a> for how to plan the big items in order.</p>

      <h2>Who does the work in a small building?</h2>

      <p>Often one or two volunteers. That works until it doesn’t: a volunteer moves, a collection goes unpaid, or a City notice sits unopened. If that sounds familiar, read <a href="/blog/small-condo-association-professional-manager">does a small condo association need a professional manager?</a> for an honest way to decide.</p>

      <h2>What about student turnover and the DePaul blocks?</h2>

      <p>Buildings near DePaul’s campus see more move-ins and move-outs. Clear move rules, a deposit for common-area damage if your documents allow it, and quick communication with new occupants prevent most problems.</p>

      <p>Our <a href="/services/small-condo-association-management">small condo association management</a> is built for 6-to-24-unit vintage buildings, with budgets sized to match. See our <a href="/property-management-lincoln-park">Lincoln Park association management</a> page, or <a href="/contact">contact us</a> for a walk-through.</p>
    `,
  },
  {
    slug: 'condo-move-in-move-out-elevator-policy',
    title: 'Move-In, Move-Out and Elevator Reservation Rules for Condo Buildings',
    metaDescription:
      'How Chicago condo boards should write move-in and move-out rules: elevator reservations, padding, hours, deposits and damage, adopted the right way so they can be enforced.',
    date: '2026-12-04',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '6 min read',
    excerpt:
      'In a building with one freight elevator, a move without rules can tie up the building for a day and damage the halls. Here is what a good move policy covers.',
    content: `
      <p>Every move in an elevator building affects everyone else: the elevator is out of service, the lobby is busy, and walls and doors get scraped. A short, clear move policy prevents most of that. It also protects the board, because damage claims are much easier when the rules were known in advance.</p>

      <h2>What should a move policy cover?</h2>

      <ul>
        <li><strong>Reservations:</strong> how far ahead, how to book, and how long a slot lasts.</li>
        <li><strong>Hours:</strong> which days and times moves are allowed.</li>
        <li><strong>Elevator protection:</strong> who installs pads and keys the elevator to service mode.</li>
        <li><strong>Movers:</strong> whether a certificate of insurance is required before the move.</li>
        <li><strong>Damage:</strong> how common-area damage is documented and charged, if your documents allow it.</li>
        <li><strong>Deliveries:</strong> whether large deliveries follow the same rules.</li>
      </ul>

      <h2>Can the association charge a move fee or deposit?</h2>

      <p>It depends on your declaration, bylaws and how the rule is adopted. Some documents allow it clearly; others do not mention it. Ask counsel before adding a fee, and make sure any charge is tied to real costs or damage, not used as a revenue line.</p>

      <h2>How should the board adopt the policy?</h2>

      <p>As a rule, following the process your documents and the law require, with notice to owners. A move policy adopted at a hallway conversation is hard to enforce. Read <a href="/blog/adopting-enforcing-condo-hoa-rules-illinois">adopting and enforcing association rules</a> first.</p>

      <h2>What about new owners?</h2>

      <p>Send the move policy with the welcome packet and include it in resale disclosures, so buyers know it before closing. Our <a href="/blog/moving-into-chicago-condo-guide">guide to moving into a Chicago condo</a> is a good companion for new owners.</p>

      <p>Running reservations, elevator staging and damage inspections is part of our <a href="/services/high-rise-condominium-management">high-rise condominium management</a>. <a href="/contact">Contact us</a> if your building wants a move policy that works.</p>
    `,
  },
  {
    slug: 'lakeview-condo-association-board-guide',
    title: 'Lakeview Condo Boards: Wrigleyville, Northalsted and the Lakefront',
    metaDescription:
      'A guide for Lakeview condo boards: event-day operations near Wrigley Field, vintage walk-ups off Southport and Northalsted, and capital planning for Lakeview East high-rises.',
    date: '2026-12-05',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Lakeview boards manage everything from courtyard walk-ups to lakefront towers, and some of them manage around 81 home games a year. Here is what to plan for.',
    content: `
      <p>Lakeview is one of Chicago’s most varied neighborhoods for condo boards. Wrigleyville buildings live with baseball, concerts and street festivals. Northalsted and the streets off Southport are full of vintage walk-ups. Lakeview East has high-rises along the lake near Belmont Harbor. Each needs a different plan.</p>

      <h2>How should a Wrigleyville building prepare for event season?</h2>

      <p>With 81 home games plus concerts and festivals, event days are predictable. Put them on the building calendar and plan for them: garage and parking rules, extra trash pickups, door and entry checks, and a reminder to owners before big weekends. A plan written in March beats improvising every Saturday in July.</p>

      <h2>What do vintage walk-ups in Lakeview need?</h2>

      <p>The same things as vintage buildings across the North Side: masonry, flat roofs, porches and boilers. Small budgets mean big items need a reserve plan. See <a href="/blog/vintage-chicago-condo-capital-planning">capital planning for vintage Chicago buildings</a>.</p>

      <h2>What about Lakeview East high-rises?</h2>

      <p>Lakefront towers face wind-driven rain, facade inspection cycles and riser and window replacement. Their reserve plans should show those items years in advance. Our <a href="/blog/high-rise-condo-management-chicago-whats-different">guide to high-rise management</a> explains what changes in a tower.</p>

      <h2>How do Lakeview boards handle a busy, changing population?</h2>

      <p>Clear rules and quick communication. Many Lakeview buildings see regular move-ins, so a written move policy, an owner portal and a simple welcome packet do a lot of work. Consistent rule enforcement matters too — see <a href="/blog/common-condo-rule-violations-chicago">the most common rule violations in Chicago buildings</a>.</p>

      <p>Our <a href="/services/condominium-management">condominium management</a> serves Lakeview associations of every size with a dedicated manager and 24/7 live emergency response. See our <a href="/property-management-lakeview">Lakeview association management</a> page, or <a href="/contact">contact us</a>.</p>
    `,
  },
  {
    slug: 'illinois-hoa-board-duties-cicaa',
    title: 'Illinois HOA Board Duties Under CICAA: A Plain-Language Guide',
    metaDescription:
      'What the Common Interest Community Association Act asks of Illinois HOA and townhome boards: records within 30 days, resale disclosures, the 115% petition, removal votes and the 2027 collection policy.',
    date: '2026-12-06',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'Most Illinois HOAs and townhome communities are governed by CICAA, not the Condominium Property Act. Here are the board duties that come up most, with links to the detailed guides.',
    sources: [
      {
        title: 'Common Interest Community Association Act — 765 ILCS 160/1-35',
        url: 'https://www.ilga.gov/Documents/legislation/ilcs/documents/076501600K1-35.htm',
      },
      {
        title: 'Common Interest Community Association Act (765 ILCS 160) — full text',
        url: 'https://www.ilga.gov/legislation/ILCS/details?ActID=3273&ChapterID=62&ChapAct=FullText',
      },
    ],
    content: `
      <p>Many Illinois HOA and townhome boards assume the Condominium Property Act applies to them. Usually it does not. Most common interest communities are governed by the Common Interest Community Association Act, 765 ILCS 160, known as CICAA. The two laws are similar in spirit but different in detail, and the details are where boards get into trouble.</p>

      <h2>Does CICAA apply to our association?</h2>

      <p>CICAA covers common interest communities that are not condominiums or cooperatives. Section 1-75 contains two different exemptions for small communities, with different thresholds and different effects — and a partial exemption is not an exemption from the whole Act. Have counsel confirm which, if either, applies to you. See <a href="/blog/which-illinois-law-governs-condo-hoa-townhome">which Illinois law governs your association</a> and <a href="/blog/cicaa-small-association-exemptions-collection-policy">the small-association exemptions</a>.</p>

      <h2>What are the duties boards ask about most?</h2>

      <ul>
        <li><strong>Records:</strong> CICAA gives the board 30 days to respond to an owner’s records request. See <a href="/blog/illinois-association-records-retention-schedule">records retention for Illinois associations</a>.</li>
        <li><strong>Resale disclosures:</strong> under Section 1-35(d), the board must furnish the resale information within 30 days of a written request, for a reasonable fee covering direct out-of-pocket cost. See <a href="/blog/illinois-resale-disclosure-fees-turnaround">resale disclosure fees and deadlines</a>.</li>
        <li><strong>Budget increases:</strong> Section 1-45(c) gives owners a petition right if assessments rise above 115% of the prior year, with a 14-day window. See <a href="/blog/illinois-condo-115-percent-assessment-petition">the 115% assessment petition</a>.</li>
        <li><strong>Removing a director:</strong> Section 1-35(c) allows two-thirds of the membership to remove a board member at a duly called special meeting.</li>
        <li><strong>Collection policy:</strong> from January 1, 2027, associations must have a collection policy adopted under Section 1-45(j). See <a href="/blog/illinois-condo-hoa-collection-policy-january-2027">the new collection policy law</a>.</li>
      </ul>

      <h2>Where do HOA boards most often go wrong?</h2>

      <ul>
        <li>Using condominium deadlines and fee rules for an HOA.</li>
        <li>Not knowing whether the small-association exemption applies.</li>
        <li>Letting records and resale requests sit with a volunteer.</li>
        <li>Treating the declaration as optional when the Act defers to it.</li>
      </ul>

      <p>Our <a href="/services/hoa-management">HOA management</a> keeps CICAA deadlines on one calendar for townhome and single-family communities. This guide is educational, not legal advice; confirm details with counsel. <a href="/contact">Contact us</a> with questions.</p>
    `,
  },
  {
    slug: 'edgewater-lakefront-condo-board-guide',
    title: 'Edgewater Lakefront Condo Boards: Planning for Big, Older Buildings',
    metaDescription:
      'A guide for Edgewater condo boards on Sheridan Road and around Bryn Mawr: lakefront high-rises, facade and riser cycles, historic district work, staff and engaged long-time owners.',
    date: '2026-12-07',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'Edgewater’s Sheridan Road corridor holds one of the densest runs of vintage lakefront high-rises in Chicago. Here is how their boards can plan capital work and keep owners informed.',
    content: `
      <p>Edgewater has some of the largest condominium buildings on the North Side: vintage lakefront high-rises along Sheridan Road, converted residential hotels, and the historic buildings around the Bryn Mawr Red Line stop. Many have hundreds of units, on-site staff and owners who have lived there for decades. This guide covers what their boards plan for most.</p>

      <h2>What drives capital planning in an Edgewater high-rise?</h2>

      <ul>
        <li><strong>Lake exposure:</strong> wind-driven rain and freeze-thaw cycles wear masonry and windows faster.</li>
        <li><strong>Facade cycles:</strong> tall buildings follow the City’s facade inspection requirements. See <a href="/blog/chicago-condo-facade-compliance-board-guide">Chicago facade compliance</a>.</li>
        <li><strong>Risers and plumbing:</strong> aging risers are among the largest projects an older tower faces.</li>
        <li><strong>Elevators:</strong> modernization is expensive and should appear in the reserve study years ahead. See <a href="/blog/chicago-condo-elevator-inspection-board-guide">the elevator inspection guide</a>.</li>
      </ul>

      <h2>What about the Bryn Mawr Historic District?</h2>

      <p>Buildings in a designated historic district may need extra approvals for exterior work, and the right masons for vintage materials. Line up both before the scaffolding goes up, and build the extra time into the project schedule.</p>

      <h2>How should a large building communicate with long-time owners?</h2>

      <p>Clearly and early. Large projects affect owners for months. Explain the why, the cost, the schedule and the effect on assessments before the vote. Use more than one channel — portal, email, posted notices and printed letters — because not every owner reads email. Our guide to <a href="/blog/high-rise-condo-management-chicago-whats-different">high-rise management in Chicago</a> covers the operating side.</p>

      <h2>What should an Edgewater board expect from management?</h2>

      <p>A board-approved capital calendar, staff and vendor oversight, financial reporting that stands up to engaged owners, and 24/7 response. That is the scope of our <a href="/services/high-rise-condominium-management">Chicago high-rise condominium management</a>. We serve condominium associations in Edgewater; we do not manage co-op buildings. See our <a href="/property-management-edgewater">Edgewater association management</a> page, or <a href="/contact">contact us</a>.</p>
    `,
  },
  {
    slug: 'replace-condo-management-company-60-day-plan',
    title: 'Replacing Your Condo Management Company: A 60-Day Board Plan',
    metaDescription:
      'A week-by-week 60-day plan for Chicago condo and HOA boards changing management companies: contract review, RFP, scoring, vote, records handoff and owner communication.',
    date: '2026-12-08',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Choosing Management',
    readTime: '8 min read',
    excerpt:
      'Changing managers goes well when the board follows a calendar and badly when it reacts. Here is a 60-day plan from the first contract review to the first month with the new firm.',
    content: `
      <p>Most boards change management companies once or twice in a decade, so few directors have done it before. The change itself is not complicated. What goes wrong is the order: a board fires the old firm before reading the termination clause, or picks a new one before deciding what it needs. This plan puts the steps in order over about 60 days.</p>

      <h2>Days 1–10: What should the board do first?</h2>

      <ul>
        <li><strong>Read the current management agreement:</strong> termination notice, fees on exit, and what the firm must hand over. See <a href="/blog/community-association-management-agreement-review">reviewing a management agreement</a>.</li>
        <li><strong>Write down the problem.</strong> Is it the manager, the firm’s systems, or the scope? The answer shapes the RFP.</li>
        <li><strong>Agree on who leads</strong> — usually the president and one other director.</li>
      </ul>

      <h2>Days 11–25: How should the board find candidates?</h2>

      <ul>
        <li>Send a short, building-specific request for proposals to three or four firms.</li>
        <li>Ask for the full annual cost, the named manager, that manager’s current portfolio, and references from similar buildings.</li>
        <li>Verify each firm’s Illinois license — see <a href="/blog/verify-illinois-community-association-manager-license">checking a CAM license</a>.</li>
      </ul>

      <h2>Days 26–40: How should the board compare proposals?</h2>

      <p>Score them against criteria set before the proposals arrived, interview the actual manager, and call references. Our <a href="/blog/score-condo-hoa-management-proposals">proposal scoring method</a> and our <a href="/tools/compare-management-proposals">proposal comparison tool</a> make this side by side. The free <a href="/board-toolkit">board toolkit</a> has an RFP outline and interview questions.</p>

      <h2>Days 41–45: How should the board decide?</h2>

      <p>Vote at a properly noticed board meeting, record the decision in the minutes, and sign the new agreement only after counsel or the board has read it. Then give written notice to the current firm as its contract requires.</p>

      <h2>Days 46–60: What happens during the handoff?</h2>

      <ul>
        <li>Transfer bank accounts and signers, and confirm balances against statements.</li>
        <li>Collect owner ledgers, vendor contracts, insurance policies, governing documents and minutes.</li>
        <li>Tell owners what changes, what does not, and when: payment address, portal, emergency number.</li>
        <li>Track missing items on a written list until every one is received.</li>
      </ul>

      <p>For more detail, read <a href="/blog/switch-condo-management-companies-chicago">switching management companies in Chicago</a>.</p>

      <h2>What about the first month with the new firm?</h2>

      <p>Set the standard early: a first monthly packet, a list of open items, and a meeting calendar for the year. The first 90 days show whether the change was worth it.</p>

      <p>When an association moves to Stellar, we coordinate the 30–60 day handoff and track missing items until they arrive. Read about our <a href="/services/condominium-management">Chicago condominium management</a>, see how we work across <a href="/property-management-chicago">Chicago</a>, or <a href="/contact">contact us</a> to start.</p>
    `,
  },
];
