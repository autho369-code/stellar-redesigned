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
    seoTitle: 'Evanston Condo Boards: What Makes Managing Here Different',
    metaDescription:
      'A guide for Evanston condo and HOA boards: City rental registration, short-term rental licensing, vintage and lakefront buildings, and questions for a manager.',
    date: '2026-12-01',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Evanston associations range from vintage lakefront courtyard buildings to towers by the Davis Street stations. Here is what boards here should plan for, and what to expect from management.',
    sources: [
      { title: 'City of Evanston: rental registration (Ordinance 141-O-18)', url: 'https://www.cityofevanston.org/departments/community_development/building_development_services/property_standards/rental_registration/index.php' },
      { title: 'City of Evanston: short-term rental license', url: 'https://www.cityofevanston.org/departments/community_development/building_development_services/property_standards/vacation_rental_license.php' },
    ],
    content: `
      <p><strong>Short answer:</strong> an Evanston condominium board works with two rulebooks, the Illinois Condominium Property Act with its own documents, and the City of Evanston’s property rules, including rental registration and short-term rental licensing, and plans capital work for lakefront and vintage buildings.</p>

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

            <h2>What do Evanston’s rental rules mean for a condo board?</h2>

      <p>Evanston Ordinance 141-O-18 requires every long-term rental unit, including a rented condominium, to be registered with the City and renewed each year; only the owner-occupied unit in a building is exempt. Registered units are inspected on a cycle that depends on the last result: five years for no violations, three years for up to seven, and one year for more. Evanston also licenses short-term rentals, meaning stays shorter than 30 days, and requires an inspection of the unit and any common areas guests can use before a license is issued. A board that wants to restrict short-term or long-term rentals still relies on its own declaration and rules. See <a href="/blog/chicago-condo-short-term-rental-prohibited-buildings-list">our guide to short-term rental rules in Chicago</a> for how declarations and City rules interact, and our <a href="/property-management-evanston">Evanston association management</a> page for local service.</p>

      <h2>How does Evanston differ from a Chicago building?</h2>

      <p>The legal framework is the same state statute, but the City rules, permit offices and inspection programs are Evanston’s, not Chicago’s. A board that hires vendors who also work in Chicago should confirm Evanston’s permit requirements before every project. For the cost of management, see <a href="/pricing">pricing</a>.</p>
      <p>Choosing a manager for an Evanston building? Read <a href="/how-to-choose-condo-management-company-chicago">how to choose a condo management company</a> first.</p>

      <p>Our <a href="/services/condominium-management">condominium management</a> gives Evanston boards detailed monthly reporting, capital planning across every era of building, and 24/7 live emergency response. See our <a href="/property-management-evanston">Evanston association management</a> page, or <a href="/contact">contact us</a> to meet a manager.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'chicago-condo-annual-building-inspection-checklist',
    title: 'The Annual Building Inspection Checklist for Chicago Condo Boards',
    seoTitle: 'Chicago Condo Annual Building Inspection Checklist',
    metaDescription:
      'A one-page annual inspection calendar for Chicago condo boards: boilers, heat season, elevators, facade, porches and life safety, with owners and dates.',
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
      <p><strong>Short answer:</strong> a Chicago condo board should keep one annual calendar that lists every City inspection program that applies to the building (boiler, elevator, facade, porch, life safety), with a due date, a responsible person or vendor and the place the record is filed.</p>

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

            <h2>What does a board do in each quarter?</h2>

      <ul>
        <li><strong>Q1:</strong> review the calendar at the first meeting of the year; confirm which programs apply to the building and what is due this year.</li>
        <li><strong>Q2:</strong> schedule boiler and heating-system service for the off-season; confirm elevator and life-safety test dates; start any facade or porch work that needs a permit.</li>
        <li><strong>Q3:</strong> finish seasonal repairs and walk the roof, gutters and drains before the Heat Ordinance period begins on September 15.</li>
        <li><strong>Q4:</strong> confirm heat readiness, collect inspection reports into one folder and update next year’s calendar and reserve study.</li>
      </ul>

      <h2>Who should own the calendar?</h2>

      <p>One named person: a director, or the manager if the building is professionally managed. Vendors do the work, but the calendar stays with someone who answers to the board. Our <a href="/services/high-rise-condominium-management">high-rise condominium management</a> keeps the calendar and vendor records for managed buildings, and <a href="/pricing">our fee</a> includes vendor coordination. If you are choosing a manager partly for this work, read <a href="/how-to-choose-condo-management-company-chicago">how to choose a condo management company</a>.</p>

      <p>Keeping this calendar is part of our <a href="/services/high-rise-condominium-management">high-rise condominium management</a> for buildings across <a href="/property-management-chicago">Chicago</a>. If your board wants its checklist built from the City’s records, <a href="/contact">contact us</a>.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'lincoln-park-vintage-condo-board-guide',
    title: 'Lincoln Park Condo Boards: Managing Vintage Walk-Ups and Three-Flats',
    seoTitle: 'Lincoln Park Condo Boards: Managing Vintage Walk-Ups',
    metaDescription:
      'For Lincoln Park condo boards in vintage walk-ups: landmark-district review, exterior wall rules, porches, budgets and when to hire a manager.',
    date: '2026-12-03',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'Lincoln Park has towers on the park and three-flats on side streets. The small vintage buildings carry the tightest budgets and the oldest systems. Here is how their boards can stay ahead.',
    sources: [
      { title: 'Chicago Landmarks: official list of landmark districts', url: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
      { title: 'Chicago exterior wall inspection program', url: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
    ],
    content: `
      <p><strong>Short answer:</strong> Lincoln Park’s vintage walk-up and courtyard buildings need a reserve study and a capital plan for masonry, roofs, porches and boilers, and boards in a Chicago landmark district must also allow for City review of exterior work before a permit is issued.</p>

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

            <h2>Do Lincoln Park landmark districts affect exterior work?</h2>

      <p>Chicago designated the Mid-North district on August 31, 1977, the Armitage-Halsted district on February 5, 2003 and the Mid-North Extension on September 29, 2004. Exterior work on a building in one of these districts is reviewed by the City’s historic preservation staff before a permit is issued. Elsewhere in Lincoln Park the normal permit process applies, so a board should check the City’s landmark listing before it writes a masonry or window scope. Build the review time into the project schedule and the bid request. See <a href="/blog/vintage-chicago-condo-capital-planning">capital planning for vintage Chicago buildings</a> for how to order the big items.</p>

      <h2>What should a small Lincoln Park board do first?</h2>

      <ol>
        <li>Get a reserve study, even a simple one, and update it every few years.</li>
        <li>Put the City inspection items on a calendar (<a href="/blog/chicago-condo-annual-building-inspection-checklist">annual inspection checklist</a>).</li>
        <li>Decide who does the volunteer work and who backs them up.</li>
        <li>Price professional help against the real hours; see <a href="/blog/small-condo-association-professional-manager">when a small association needs a professional manager</a> and our <a href="/pricing">pricing</a>.</li>
      </ol>

      <p>See our <a href="/property-management-lincoln-park">Lincoln Park association management</a> page for local service, or <a href="/how-to-choose-condo-management-company-chicago">how to choose a management company</a> when you start comparing firms.</p>

      <p>Our <a href="/services/small-condo-association-management">small condo association management</a> is built for 6-to-24-unit vintage buildings, with budgets sized to match. See our <a href="/property-management-lincoln-park">Lincoln Park association management</a> page, or <a href="/contact">contact us</a> for a walk-through.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'condo-move-in-move-out-elevator-policy',
    title: 'Move-In, Move-Out and Elevator Reservation Rules for Condo Buildings',
    seoTitle: 'Condo Move-In and Move-Out Elevator Policy: What to Include',
    metaDescription:
      'How a condo board can write a move-in and move-out policy: elevator reservations, hours, pads, mover insurance, damage and fees, and how to adopt it properly.',
    date: '2026-12-04',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '6 min read',
    excerpt:
      'In a building with one freight elevator, a move without rules can tie up the building for a day and damage the halls. Here is what a good move policy covers.',
    content: `
      <p><strong>Short answer:</strong> a good condo move policy covers reservations, hours, elevator protection, mover insurance, damage reporting and any fee or deposit your documents allow, and it is adopted as a rule with notice to owners so it can be enforced.</p>

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

            <h2>What does a simple move-day procedure look like?</h2>

      <ol>
        <li>The owner or mover books a slot in writing at least a set number of days ahead and receives the policy.</li>
        <li>The mover sends a certificate of insurance before the date, if the policy requires one.</li>
        <li>Before the move, staff or the manager photograph the elevator, lobby and hallways.</li>
        <li>The elevator is padded and keyed to service mode for the booked slot only.</li>
        <li>After the move, the same areas are inspected and any damage is documented the same day.</li>
        <li>Damage is handled under the rule, the declaration and the owner’s responsibility for movers they hire.</li>
      </ol>

      <h2>How do you keep the policy consistent?</h2>

      <p>Put it in the owner handbook, send it with the welcome packet, and apply it the same way to every owner, tenant and delivery. Keep a simple log of bookings and incidents. Where a rule needs enforcement, follow <a href="/blog/illinois-association-fines-notice-hearing">notice and hearing</a> before any fine. Our <a href="/services/high-rise-condominium-management">high-rise condominium management</a> runs reservations and enforcement for boards, and <a href="/pricing">our pricing</a> covers the scope. For choosing a manager, see <a href="/how-to-choose-condo-management-company-chicago">how to choose a condo management company</a>.</p>

      <p>Running reservations, elevator staging and damage inspections is part of our <a href="/services/high-rise-condominium-management">high-rise condominium management</a>. <a href="/contact">Contact us</a> if your building wants a move policy that works.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'lakeview-condo-association-board-guide',
    title: 'Lakeview Condo Boards: Wrigleyville, Northalsted and the Lakefront',
    seoTitle: 'Lakeview Condo Boards: Wrigleyville to Lakeview East',
    metaDescription:
      'A guide for Lakeview condo boards: Wrigley event days, vintage walk-ups, lakefront high-rises, landmark districts, leasing rules and what to ask a manager.',
    date: '2026-12-05',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Lakeview boards manage everything from courtyard walk-ups to lakefront towers, and some of them manage around 81 home games a year. Here is what to plan for.',
    sources: [
      { title: 'Chicago Landmarks: official list of landmark districts', url: 'https://webapps1.chicago.gov/landmarksweb/web/listings.htm' },
      { title: 'Chicago Department of Buildings: annual elevator inspection reporting (AIC)', url: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    ],
    content: `
      <p><strong>Short answer:</strong> Lakeview boards plan around three building types, Wrigleyville buildings with event-day pressure, vintage walk-ups with small budgets and big capital items, and lakefront high-rises with facade and elevator cycles, and they check City landmark and leasing rules before they act.</p>

      <p>Lakeview is one of Chicago’s most varied neighborhoods for condo boards. Wrigleyville buildings live with baseball, concerts and street festivals. Northalsted and the streets off Southport are full of vintage walk-ups. Lakeview East has high-rises along the lake near Belmont Harbor. Each needs a different plan.</p>

      <h2>How should a Wrigleyville building prepare for event season?</h2>

      <p>With 81 home games plus concerts and festivals, event days are predictable. Put them on the building calendar and plan for them: garage and parking rules, extra trash pickups, door and entry checks, and a reminder to owners before big weekends. A plan written in March beats improvising every Saturday in July.</p>

      <h2>What do vintage walk-ups in Lakeview need?</h2>

      <p>The same things as vintage buildings across the North Side: masonry, flat roofs, porches and boilers. Small budgets mean big items need a reserve plan. See <a href="/blog/vintage-chicago-condo-capital-planning">capital planning for vintage Chicago buildings</a>.</p>

      <h2>What about Lakeview East high-rises?</h2>

      <p>Lakefront towers face wind-driven rain, facade inspection cycles and riser and window replacement. Their reserve plans should show those items years in advance. Our <a href="/blog/high-rise-condo-management-chicago-whats-different">guide to high-rise management</a> explains what changes in a tower.</p>

      <h2>How do Lakeview boards handle a busy, changing population?</h2>

      <p>Clear rules and quick communication. Many Lakeview buildings see regular move-ins, so a written move policy, an owner portal and a simple welcome packet do a lot of work. Consistent rule enforcement matters too — see <a href="/blog/common-condo-rule-violations-chicago">the most common rule violations in Chicago buildings</a>.</p>

            <h2>What City programs matter to a Lakeview building?</h2>

      <ul>
        <li><strong>Landmark districts.</strong> Lake View has Chicago landmark districts; exterior work in one is reviewed by the City before a permit is issued. Check the City’s <a href="https://webapps1.chicago.gov/landmarksweb/web/listings.htm" target="_blank" rel="noopener noreferrer">landmark listing</a> before writing a scope.</li>
        <li><strong>Annual elevator reporting.</strong> Elevator buildings answer to the City’s annual inspection reporting program; see <a href="/blog/chicago-condo-elevator-inspection-board-guide">our elevator inspection guide</a>.</li>
        <li><strong>Leasing and short-term rentals.</strong> Many Lakeview condominiums limit leasing; read <a href="/blog/chicago-condo-short-term-rental-prohibited-buildings-list">our short-term rental guide</a> before changing a rule.</li>
      </ul>

      <h2>What should a Lakeview board ask a manager?</h2>

      <ul>
        <li>How does the firm handle event days, garage and entry rules for Wrigleyville buildings?</li>
        <li>Who is the named manager, and how many buildings does that person carry?</li>
        <li>What is in the monthly board packet, and what does the flat fee include?</li>
      </ul>

      <p>See <a href="/pricing">our pricing</a> and <a href="/how-to-choose-condo-management-company-chicago">how to choose a condo management company</a>; for local service, our <a href="/property-management-lakeview">Lakeview association management</a> page.</p>

      <p>Our <a href="/services/condominium-management">condominium management</a> serves Lakeview associations of every size with a dedicated manager and 24/7 live emergency response. See our <a href="/property-management-lakeview">Lakeview association management</a> page, or <a href="/contact">contact us</a>.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'illinois-hoa-board-duties-cicaa',
    title: 'Illinois HOA Board Duties Under CICAA: A Plain-Language Guide',
    seoTitle: 'Illinois HOA Board Duties Under CICAA, Explained',
    metaDescription:
      'What Illinois HOA and townhome boards must do under CICAA (765 ILCS 160): records, resale disclosures, budget petitions and the 2027 collection policy.',
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
      <p><strong>Short answer:</strong> most Illinois HOA and townhome boards are governed by the Common Interest Community Association Act (765 ILCS 160, “CICAA”), not the Condominium Property Act, and the main board duties are records requests (30 days), resale disclosures (30 days), budget-increase petitions (14-day window), director removal rules and, from January 1, 2027, a collection policy.</p>

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

            <h2>How should an HOA board keep its CICAA deadlines?</h2>

      <ul>
        <li><strong>On receipt:</strong> log every written records request and resale request with the date received, because the clock starts then.</li>
        <li><strong>Within 30 days:</strong> respond to records requests and furnish resale information (Sections 1-30 and 1-35).</li>
        <li><strong>At each budget:</strong> compare the proposed assessments with the prior year; above 115%, owners have a petition right (Section 1-45(c)).</li>
        <li><strong>Before January 1, 2027:</strong> adopt the collection policy required under Section 1-45(j).</li>
        <li><strong>Every year:</strong> confirm with counsel whether a small-community exemption applies and what it covers.</li>
      </ul>

      <p>Put each item on one calendar and name the person responsible. Our <a href="/services/hoa-management">HOA management</a> runs that calendar for boards, and <a href="/pricing">our pricing</a> shows what the flat fee covers. For choosing a manager, start with <a href="/how-to-choose-condo-management-company-chicago">how to choose a management company</a>.</p>

      <p>Our <a href="/services/hoa-management">HOA management</a> keeps CICAA deadlines on one calendar for townhome and single-family communities. This guide is educational, not legal advice; confirm details with counsel. <a href="/contact">Contact us</a> with questions.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'edgewater-lakefront-condo-board-guide',
    title: 'Edgewater Lakefront Condo Boards: Planning for Big, Older Buildings',
    seoTitle: 'Edgewater Condo Boards: Planning for Large, Older Buildings',
    metaDescription:
      'For Edgewater condo boards in lakefront towers and converted hotels: exterior wall rules, elevator reporting, capital planning and what to ask a manager.',
    date: '2026-12-07',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'Edgewater’s Sheridan Road corridor holds one of the densest runs of vintage lakefront high-rises in Chicago. Here is how their boards can plan capital work and keep owners informed.',
    sources: [
      { title: 'Chicago exterior wall inspection program', url: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html' },
      { title: 'Chicago Department of Buildings: annual elevator inspection reporting (AIC)', url: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/annual_inspectioncertificationaicprogramupdate.html' },
    ],
    content: `
      <p><strong>Short answer:</strong> Edgewater’s large, older lakefront buildings need a written multi-year capital plan that covers the City’s exterior wall inspection cycle for buildings 80 feet or taller, annual elevator reporting, risers and mechanical systems, and a clear owner communication plan.</p>

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

            <h2>What do Chicago’s exterior wall and elevator rules require of a tower board?</h2>

      <p>Chicago’s exterior wall rules cover buildings 80 feet or more in height. A tower’s board should confirm its inspection cycle and filing dates with the City and a licensed engineer or architect, then treat facade work as a planned, multi-year program. On the lakefront, ask the engineer to look closely at the joints and sealant that face the wind. Elevator buildings also answer to the City’s annual inspection reporting program. Our guides to <a href="/blog/chicago-condo-facade-compliance-board-guide">facade compliance</a> and <a href="/blog/chicago-condo-elevator-inspection-board-guide">elevator inspections</a> go through both, and the <a href="/blog/chicago-condo-annual-building-inspection-checklist">annual inspection checklist</a> puts them on one calendar.</p>

      <h2>What should an Edgewater capital plan contain?</h2>

      <ol>
        <li>An up-to-date reserve study with facade, elevator, riser and boiler items placed by year.</li>
        <li>A facade inspection schedule and a budget line for repairs the first inspection finds.</li>
        <li>A funding plan: reserves, assessments or a loan, with the effect on each owner stated plainly (see <a href="/blog/condo-hoa-capital-project-loan-preparation">preparing for a capital project loan</a>).</li>
        <li>A communication plan for long-time owners, in more than one channel.</li>
      </ol>

      <p>Our <a href="/services/high-rise-condominium-management">high-rise condominium management</a> carries these calendars for managed towers, and <a href="/pricing">our pricing</a> covers capital-project oversight with no separate fee. See <a href="/how-to-choose-condo-management-company-chicago">how to choose a management company</a> and our <a href="/property-management-edgewater">Edgewater association management</a> page.</p>

      <p>A board-approved capital calendar, staff and vendor oversight, financial reporting that stands up to engaged owners, and 24/7 response. That is the scope of our <a href="/services/high-rise-condominium-management">Chicago high-rise condominium management</a>. We serve condominium associations in Edgewater; we do not manage co-op buildings. See our <a href="/property-management-edgewater">Edgewater association management</a> page, or <a href="/contact">contact us</a>.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
  {
    slug: 'replace-condo-management-company-60-day-plan',
    title: 'Replacing Your Condo Management Company: A 60-Day Board Plan',
    seoTitle: 'Replace Your Condo Management Company: 60-Day Board Plan',
    metaDescription:
      'How to replace a condo or HOA management company without a gap: read the termination clause, run an RFP, give notice in the right order and control the handoff.',
    date: '2026-12-08',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Choosing Management',
    readTime: '8 min read',
    excerpt:
      'Changing managers goes well when the board follows a calendar and badly when it reacts. Here is a 60-day plan from the first contract review to the first month with the new firm.',
    content: `
      <p><strong>Short answer:</strong> replace a management company in this order: read the current agreement’s termination clause, run a written RFP, vote and sign the new agreement, then give the old firm notice exactly as its contract requires and control the records and bank-account handoff. Decide first whether to switch at all (see <a href="/blog/switch-condo-management-companies-chicago">switching management companies</a>); this plan is the timetable once the board has decided.</p>

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

            <h2>What does the termination clause usually decide?</h2>

      <p>Read it before you tell anyone anything. Look for the notice period and the required method of notice (certified mail, a named address), any cure period for complaints, fees owed on exit, and what the firm must hand over and by when. If the clause is unclear, have association counsel read it before the board votes. The sequence matters because notice given too early or by the wrong method can leave the board with the old firm longer than planned, and notice given before the new agreement is signed can leave the building with no manager.</p>

      <h2>What happens after the new firm starts?</h2>

      <p>The handoff is a project in its own right: see <a href="/blog/chicago-condo-management-transition-first-60-days">what a management transition looks like in the first 60 days</a> for the first-month checklist. For what you will pay, <a href="/blog/chicago-condo-management-cost">condo management fees</a> and <a href="/pricing">our pricing</a> explain how to compare, and <a href="/how-to-choose-condo-management-company-chicago">how to choose a condo management company</a> covers the selection. Our <a href="/services/condominium-management">condominium management</a> proposals are flat-fee and written, and no long-term contracts — cancel with 60 days notice.</p>

      <p>When an association moves to Stellar, we coordinate the 30–60 day handoff and track missing items until they arrive. Read about our <a href="/services/condominium-management">Chicago condominium management</a>, see how we work across <a href="/property-management-chicago">Chicago</a>, or <a href="/contact">contact us</a> to start.</p>
<p>Boards comparing management proposals can also review <a href="/pricing">what condo management costs in Chicago</a>.</p>
`,
  },
];
