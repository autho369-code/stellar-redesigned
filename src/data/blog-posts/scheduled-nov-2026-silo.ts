import type { BlogPost } from './index';

// Reverse-silo support posts, 2026-11-23 through 2026-11-30. Each one exists
// to support a money page that had few or no supporting guides (see
// docs/blog-silo-fix-plan-2026-10-28.md, section 6) and is mapped in
// src/data/post-silos.ts.
//
// Sourcing rule: statutory and City facts here were read on 2026-10-28 in the
// primary text — 765 ILCS 605/22.1 and 765 ILCS 160/1-35 on ilga.gov, and the
// Department of Buildings' Chicago Heat Ordinance page on chicago.gov. Facts
// about Stellar come from the live site (pricing, service pages). Area facts
// come from src/data/neighborhoods.ts. Anything else is practice guidance and
// is written as such.
export const scheduledNov2026SiloPosts: BlogPost[] = [
  {
    slug: 'high-rise-condo-management-chicago-whats-different',
    title: 'High-Rise Condo Management in Chicago: What Is Different',
    metaDescription:
      'Why a Chicago high-rise condominium needs a different kind of management than a walk-up: staff, building systems, City inspection programs, capital planning and 24/7 response.',
    date: '2026-11-23',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'A 200-unit tower and a six-flat are both condominiums under Illinois law, but they are not run the same way. Here is what changes when the building has elevators, staff, a fire pump and a facade on the City’s inspection cycle.',
    content: `
      <p>Illinois law treats a six-unit walk-up and a 300-unit lakefront tower the same way: both are condominiums under the Condominium Property Act, with the same board duties, the same budget rules and the same owner rights. Day to day, they are very different buildings. This guide explains what changes when an association owns a high-rise, and what a board should expect from its manager because of it.</p>

      <h2>What makes a high-rise different to manage?</h2>

      <p>Three things: equipment, people and the City. A high-rise depends on equipment that must run every day — elevators, pumps, boilers or chillers, fire alarm and life-safety systems, garage doors and access control. It usually has people on payroll or under contract: door staff, engineers, cleaners. And it sits inside City of Chicago programs that smaller buildings may never see, such as the elevator inspection program and the facade inspection cycle.</p>

      <p>None of this is hard on its own. The difficulty is that it all runs at once, all year, and a missed date in one area becomes a cost in another. That is why high-rise management is less about reacting and more about keeping a calendar.</p>

      <h2>Which City programs does a Chicago high-rise board need to track?</h2>

      <ul>
        <li><strong>Elevators.</strong> The Department of Buildings oversees conveyances, and some buildings must take part in the Annual Inspection Certification program. Our <a href="/blog/chicago-condo-elevator-inspection-board-guide">elevator inspection guide</a> explains what the board owns.</li>
        <li><strong>The facade.</strong> Tall buildings in Chicago are subject to the City’s facade inspection requirements. See <a href="/blog/chicago-condo-facade-compliance-board-guide">Chicago facade compliance for condo boards</a>.</li>
        <li><strong>Life safety.</strong> Fire alarm, sprinkler and emergency systems need testing records that stand up to an inspector. Start with <a href="/blog/chicago-condo-life-safety-board-planning">high-rise life-safety planning</a>.</li>
        <li><strong>Boilers.</strong> The City’s Boiler Inspection Bureau inspects boilers at apartment buildings where the boiler heats four or more units.</li>
      </ul>

      <h2>How is the budget different?</h2>

      <p>In a high-rise, the operating budget carries payroll, service contracts and utilities that a small building does not have, and the reserve study carries very large items: elevator modernization, riser replacement, roof, facade, garage. A board should expect the reserve study and the capital calendar to drive the budget, not the other way around. If a component is due in five years, owners should see it in the budget conversation now.</p>

      <h2>What should a board expect from a high-rise manager?</h2>

      <ul>
        <li><strong>One calendar</strong> that shows every inspection, permit, contract renewal and capital project with an owner and a date.</li>
        <li><strong>Staff and vendor oversight</strong> with clear scopes, so the board is not managing the engineer or the door staff directly.</li>
        <li><strong>Reporting the board can read:</strong> monthly financials, open work orders and upcoming deadlines in one packet.</li>
        <li><strong>24/7 response</strong> with a live person, because a failed pump or a stuck elevator at 2 a.m. is still the association’s problem.</li>
      </ul>

      <p>This is the scope of our <a href="/services/high-rise-condominium-management">high-rise condominium management</a>: building systems, staff and vendor coordination, capital planning, financial controls and 24/7 response, under one flat monthly fee.</p>

      <h2>When should a board review its current arrangement?</h2>

      <p>Good signals: inspection dates are found by accident, the reserve study is more than a few years old, owners hear about large projects late, or the board spends meetings on vendor problems instead of decisions. Any one of these is worth a conversation. For the wider picture, see how we manage <a href="/property-management-chicago">condominium associations in Chicago</a>.</p>

      <p>If your building is reviewing its management, <a href="/contact">contact Stellar Property Management</a> for a walk-through and a written scope.</p>
    `,
  },
  {
    slug: 'chicago-condo-heat-outage-protocol',
    title: 'No Heat in a Chicago Condo Building: A Board Protocol',
    metaDescription:
      'What Chicago’s Heat Ordinance requires (68°F day, 66°F night, Sept. 15 to June 1), and a step-by-step protocol for condo boards when central heat or hot water fails.',
    date: '2026-11-24',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '8 min read',
    excerpt:
      'When a shared boiler fails in January, the board has hours, not days. Here is what the City’s Heat Ordinance says, and a protocol for the first hour, the first day and the follow-up.',
    sources: [
      {
        title: 'City of Chicago, Department of Buildings — Chicago Heat Ordinance',
        url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/chicago-heat-ordinance.html',
      },
      {
        title: 'City of Chicago, Department of Buildings — Boiler Inspections',
        url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/boiler_inspections.html',
      },
    ],
    content: `
      <p>In a building with a shared boiler, heat is the association’s job. When it fails in a Chicago winter, owners are cold within hours and pipes can freeze soon after. A board that has a written protocol before the first cold night handles this calmly. A board without one improvises at 11 p.m. This guide gives you the protocol.</p>

      <h2>What does the Chicago Heat Ordinance require?</h2>

      <p>The Department of Buildings enforces the Chicago Heat Ordinance, Section 14X-8-803 of the Municipal Code. According to the City’s page:</p>

      <ul>
        <li>The heat season runs from <strong>September 15 until June 1</strong>.</li>
        <li>For residential buildings with central heating and no central cooling, the indoor temperature must be at least <strong>68°F from 8:30 a.m. to 10:30 p.m.</strong> and at least <strong>66°F from 10:30 p.m. to 8:30 a.m.</strong></li>
        <li>Buildings where one system provides both heating and cooling (“two-pipe” buildings) have special rules at the start and end of the season, with a 64°F minimum at all hours during those transition periods.</li>
        <li>Cooking appliances, domestic water heating equipment and portable space heaters do not count toward the required heat.</li>
        <li>The City lists fines of <strong>$500 to $1,000 per day, per violation</strong>, and says the reason for the lack of heat does not matter.</li>
        <li>If heating equipment fails when heat is required, the City treats it as an immediate violation.</li>
      </ul>

      <p>The City writes the ordinance mainly in terms of landlords and building owners. How it applies to a particular condominium — for example, where some units are leased — is a question for association counsel. As a practical standard, these are the temperatures your owners and the City will measure against.</p>

      <h2>What should the board do before winter?</h2>

      <ul>
        <li><strong>Service the boiler in late summer or early fall.</strong> The City itself recommends routine inspection and the manufacturer’s maintenance before the season.</li>
        <li><strong>Confirm the after-hours path.</strong> Who gets the first call, who can authorize an emergency repair, and what spending limit applies without a board vote.</li>
        <li><strong>Keep the vendor list current:</strong> a boiler contractor licensed by the City of Chicago, a plumber and a temporary-heat provider.</li>
        <li><strong>Know the building’s weak points:</strong> stairwells, garages and units with exposed pipes. Our <a href="/blog/chicago-condo-frozen-pipes-winter-checklist">frozen pipe winter checklist</a> covers these.</li>
      </ul>

      <h2>What should happen in the first hour of an outage?</h2>

      <ol>
        <li><strong>Confirm the failure</strong> with the engineer or on-call vendor and get a technician dispatched.</li>
        <li><strong>Tell owners</strong> what happened, what is being done and when the next update will come. Short and factual beats long and late.</li>
        <li><strong>Protect the building:</strong> check vulnerable pipes and common areas, and tell owners not to use ovens or unsafe heaters for warmth.</li>
        <li><strong>Log everything:</strong> time reported, time the vendor arrived, readings taken. The log protects the association later.</li>
      </ol>

      <h2>What if the repair will take more than a day?</h2>

      <p>Ask the contractor about temporary heat, and decide quickly whether the cost is approved under the emergency spending limit or needs a board vote. Send owners an update at least once a day, even if nothing has changed. If the outage risks frozen pipes, read <a href="/blog/who-pays-condo-water-leak-illinois">who pays for a condo water leak</a> before the claims start, so the board understands how responsibility is usually decided.</p>

      <h2>What about hot water?</h2>

      <p>A shared water heater failing is not a heat outage, but owners will treat it with the same urgency. Use the same protocol: dispatch, notify, log, update. Water heating equipment does not count as a heat source under the ordinance, so a working water heater does not solve a heat problem.</p>

      <h2>How do we stop this happening again?</h2>

      <p>After every outage, write one page: what failed, why, what it cost, and what will change. If the boiler is near the end of its life, put replacement in the reserve plan now, while it is a planned project and not an emergency. Our <a href="/blog/condo-hoa-emergency-planning-checklist">emergency planning checklist</a> has the template.</p>

      <p>This is everyday work in our <a href="/services/maintenance-coordination">maintenance coordination</a> for associations across <a href="/property-management-chicago">Chicago</a>, with a live person on our 24/7 line. <a href="/contact">Contact us</a> before the first cold snap.</p>
    `,
  },
  {
    slug: 'small-condo-association-professional-manager',
    title: 'Does a Small Condo Association Need a Professional Manager?',
    metaDescription:
      'An honest look at when a small Chicago condo association (6 to 30 units) can self-manage, when it should hire a manager, and what professional management actually changes.',
    date: '2026-11-25',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Choosing Management',
    readTime: '7 min read',
    excerpt:
      'Many small buildings self-manage for years without trouble. Others discover the cost of it all at once. Here is how a small association can decide honestly — and what changes when it hires help.',
    content: `
      <p>Many Chicago condo associations are small: a converted three-flat, a twelve-unit courtyard building, a 24-unit vintage walk-up. Many of them self-manage, and some do it well for years. The question is not whether self-management can work. It is whether it is working for your building right now, and whether it will still work when the volunteer who carries it moves away.</p>

      <h2>Can a small condo association legally self-manage?</h2>

      <p>Yes. Illinois does not require a condominium association to hire a management company. The board is responsible for the association’s duties under the Condominium Property Act whether a manager helps or not. What changes with self-management is who does the work: budgets, collections, records, vendor contracts, insurance, meetings and owner communication all land on volunteers.</p>

      <h2>When does self-management usually work?</h2>

      <ul>
        <li>The building is small and has few shared systems.</li>
        <li>Two or more owners share the work, so it does not depend on one person.</li>
        <li>Delinquencies are rare and handled by a written policy.</li>
        <li>The books are reconciled monthly and an outside accountant reviews them yearly.</li>
        <li>No large capital project is coming in the next few years.</li>
      </ul>

      <h2>What are the warning signs that it has stopped working?</h2>

      <p>The common ones: one volunteer does everything and is tired; owners do not trust the numbers; collections are inconsistent; nobody knows when the insurance renews; or a roof, porch or tuckpointing project is coming and nobody has planned for it. We wrote about these patterns in <a href="/blog/self-managed-condo-association-problems">the hidden problems of self-managed associations</a>. Note that Illinois’ new collection policy rule takes effect January 1, 2027, so the administrative load is rising, not falling.</p>

      <h2>What does a professional manager change in a small building?</h2>

      <p>Mostly, it changes continuity. The books are kept the same way every month, notices go out on time, vendors have one contact, and the history of the building does not leave with a volunteer. The board still makes every decision. A good manager makes those decisions easier to carry out.</p>

      <p>Small buildings also need a manager who is sized to them. A firm whose managers carry too many buildings will not give a 12-unit association much attention — see <a href="/blog/how-many-associations-should-community-manager-handle">how many associations one manager should handle</a>.</p>

      <h2>What does it cost?</h2>

      <p>Our <a href="/services/small-condo-association-management">small condo association management</a> starts at $20 per unit per month as a flat monthly proposal, covering finances, vendors, maintenance, compliance, owner communication and board continuity. The final fee depends on the building, and the proposal states the exact scope. Many small associations find that professional collections and vendor pricing offset part of the fee, but that depends on the building, so ask for a written proposal and compare it honestly.</p>

      <h2>How should a small board decide?</h2>

      <p>Write down every task the association must do in a year, who does it today, and how long it takes. If the list depends on one person, or if anything on it has been late twice, the building has already outgrown self-management. For buildings across <a href="/property-management-chicago">Chicago</a>, we are glad to walk through that list with you — <a href="/contact">contact us</a>.</p>
    `,
  },
  {
    slug: 'glenview-townhome-hoa-board-guide',
    title: 'Running a Glenview Townhome or HOA Board: A Local Guide',
    metaDescription:
      'A guide for Glenview townhome, HOA and condo boards: master and sub-associations at The Glen, aging townhome roofs and roads, snow contracts, and which Illinois law applies.',
    date: '2026-11-26',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '8 min read',
    excerpt:
      'Glenview associations range from boutique condo buildings near downtown to large multi-phase communities around The Glen. Here is what boards here deal with most, and how to stay ahead of it.',
    content: `
      <p>Glenview is home to some of the North Shore’s most varied associations: boutique condominium buildings near downtown Glenview, 1970s-era townhome communities, and the newer master-planned neighborhoods built on the former Glenview Naval Air Station at The Glen. Each type has its own pressure points. This guide covers the ones Glenview boards bring to us most.</p>

      <h2>Which Illinois law governs a Glenview association?</h2>

      <p>It depends on how the community was created. A condominium is governed by the Condominium Property Act. Most townhome and single-family HOAs are governed by the Common Interest Community Association Act (CICAA), unless they are small enough to be exempt from most of it. The difference matters for budgets, records requests, resale disclosures and the new 2027 collection policy rule. Start with <a href="/blog/which-illinois-law-governs-condo-hoa-townhome">which Illinois law governs your association</a>, and if your community is small, read <a href="/blog/cicaa-small-association-exemptions-collection-policy">the CICAA small-association exemptions</a>.</p>

      <h2>How do master and sub-associations work at The Glen?</h2>

      <p>Many communities built in the redevelopment of the former Naval Air Station have layered structures: a master association that owns or maintains shared areas, and sub-associations for individual neighborhoods or buildings. Each has its own board, budget and governing documents. The most common problems are cost-sharing disputes and owners not knowing which board handles what. Two habits prevent most of them: keep each budget and bank account fully separate, and publish a one-page “who handles what” map for owners.</p>

      <h2>What capital projects are coming for Glenview townhomes?</h2>

      <p>Many Glenview townhome communities are entering the expensive decade: roofs, siding, gutters, driveways and private roads that were installed together are now wearing out together. That makes the reserve study the most important document the board owns. If yours is old, update it before the next budget. Our guide to <a href="/blog/how-to-read-condo-reserve-study">reading a reserve study</a> applies to townhome communities too.</p>

      <h2>Who maintains what in a townhome community?</h2>

      <p>Townhome declarations split responsibility in many different ways — some associations maintain roofs and exteriors, others leave them to owners. Read the declaration before you budget, and make sure owners have the same reading. We will publish a full townhome maintenance checklist on November 29.</p>

      <h2>What about snow, landscaping and vendors?</h2>

      <p>With two Metra stations and many commuters, Glenview owners notice a late plow immediately. Snow and landscape contracts should state trigger depths, response times, sidewalk scope and insurance. Our guide to <a href="/blog/illinois-condo-hoa-snow-removal-vendor-guide">hiring a snow removal vendor</a> has the contract checklist, and <a href="/blog/illinois-association-snow-ice-sidewalk-liability">snow and ice liability for associations</a> covers the legal side.</p>

      <h2>What should a Glenview board ask a management company?</h2>

      <ul>
        <li>How many Glenview or North Shore associations does the manager handle now?</li>
        <li>Can the firm manage master and sub-association budgets separately?</li>
        <li>How are capital projects overseen, and is there an extra fee for it?</li>
        <li>Who answers the phone at night when a pipe breaks?</li>
      </ul>

      <p>Glenview is home for us — I live here. Our <a href="/services/townhome-management">townhome association management</a> covers shared-exterior planning, transparent financials and capital project oversight with no separate oversight fee. See our <a href="/property-management-glenview">Glenview association management</a> page, or <a href="/contact">contact us</a> to talk with a local manager.</p>
    `,
  },
  {
    slug: 'illinois-resale-disclosure-fees-turnaround',
    title: 'Resale Disclosure Fees and Deadlines in Illinois: Condo vs. HOA',
    metaDescription:
      'Illinois condo 22.1 disclosures: 10 business days, fee capped at $375 adjusted by CPI, $100 rush within 72 hours. HOAs under CICAA 1-35: 30 days and a reasonable cost-based fee.',
    date: '2026-11-27',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Financial Management',
    readTime: '7 min read',
    excerpt:
      'Condominiums and common interest communities answer resale requests under different sections, with different deadlines and different fee rules. Here is what the statutes actually say.',
    sources: [
      {
        title: 'Illinois Condominium Property Act — 765 ILCS 605/22.1',
        url: 'https://www.ilga.gov/Documents/legislation/ilcs/documents/076506050K22.1.htm',
      },
      {
        title: 'Common Interest Community Association Act — 765 ILCS 160/1-35',
        url: 'https://www.ilga.gov/Documents/legislation/ilcs/documents/076501600K1-35.htm',
      },
    ],
    content: `
      <p>Every resale in an association starts with a request for documents, and every request comes with two questions from the seller: how fast, and how much. Illinois answers both — but differently for condominiums and for common interest communities. This guide sets the two side by side, read from the statutes.</p>

      <h2>How fast must a condominium answer a 22.1 request?</h2>

      <p>Section 22.1(b) of the Condominium Property Act says the principal officer, or another officer specifically designated, must furnish the information when requested in writing and <strong>within 10 business days</strong> of the request. The clock starts with a written request, so the association should date-stamp every request when it arrives.</p>

      <h2>What may a condominium charge?</h2>

      <p>Section 22.1(c) allows a reasonable fee covering the direct out-of-pocket cost of providing the information and copying, <strong>not to exceed $375</strong>, charged to the unit seller. The amendment made by Public Act 102-976 took effect January 1, 2023; beginning one year after that date, the $375 cap is increased or decreased each year by the percentage change in the Consumer Price Index-U during the preceding 12-month calendar year. The association may also charge an <strong>additional $100 for rush service completed within 72 hours</strong>.</p>

      <p>Two practical points. First, the cap is a ceiling, not a price list: the fee must still cover direct out-of-pocket cost. Second, because the cap moves with CPI, confirm the current adjusted figure with counsel before changing your fee schedule.</p>

      <h2>What is different for an HOA or townhome community under CICAA?</h2>

      <p>Section 1-35(d) of the Common Interest Community Association Act covers resales in common interest communities. The differences:</p>

      <ul>
        <li><strong>Deadline:</strong> the information must be furnished <strong>within 30 days</strong> after receiving a written request.</li>
        <li><strong>Fee:</strong> a reasonable fee covering the direct out-of-pocket cost of copying and providing the information, charged to the unit seller. CICAA does not state a dollar cap or a rush fee.</li>
        <li><strong>Contents:</strong> a similar list — instruments and rules, the unit’s account, anticipated capital expenditures, reserves, the last financial statement, pending suits and insurance.</li>
      </ul>

      <h2>What changes on January 1, 2027?</h2>

      <p>Public Act 104-734 adds one item to both lists: a copy of the association’s collection policy. For condominiums it is the policy adopted under Section 18.4(t); for common interest communities, under Section 1-45(j). If your association has not adopted its policy yet, read <a href="/blog/illinois-condo-hoa-collection-policy-january-2027">the collection policy boards must adopt by January 1, 2027</a>.</p>

      <h2>Where do associations get into trouble?</h2>

      <ul>
        <li>Missing the deadline because a request sat in a volunteer’s inbox.</li>
        <li>Charging a flat fee that has nothing to do with actual cost.</li>
        <li>Giving an account balance that is out of date by the closing.</li>
        <li>Answering a CICAA request using the condominium rules, or the reverse.</li>
      </ul>

      <p>For the full packet and process, see <a href="/blog/illinois-section-22-1-disclosure-board-guide">the Illinois 22.1 disclosure guide</a> and <a href="/blog/illinois-22-1-response-workflow">a 22.1 response workflow</a>. Our <a href="/services/resale-disclosures">resale disclosure service</a> answers these requests with a named person responsible. This guide is educational, not legal advice; confirm details with association counsel. Questions? <a href="/contact">Contact our office</a>.</p>
    `,
  },
  {
    slug: 'chicago-condo-management-cost',
    title: 'What Condo Management Costs in Chicago — and What Drives the Fee',
    metaDescription:
      'How Chicago condo and HOA management fees are built: per-unit pricing, building systems, staffing, meetings and hidden add-ons. Stellar starts at $20 per unit per month, flat.',
    date: '2026-11-28',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Choosing Management',
    readTime: '7 min read',
    excerpt:
      'Boards comparing management proposals often compare the wrong number. Here is what actually drives a management fee in Chicago, and how to find the full annual cost.',
    content: `
      <p>“What does management cost?” is the first question most boards ask, and the headline number is usually the least useful answer. Two proposals with the same monthly fee can cost very different amounts over a year. This guide explains what drives the fee and how to see the real total.</p>

      <h2>How are condo management fees usually priced?</h2>

      <p>Most Chicago firms quote a monthly fee, often built from a per-unit figure and adjusted for the building’s complexity. Some add separate charges for meetings, mailings, violation letters, project oversight or transitions. Some take a percentage of capital project costs. The structure matters as much as the number.</p>

      <h2>What drives the fee for a particular building?</h2>

      <ul>
        <li><strong>Size.</strong> Unit count sets the baseline workload.</li>
        <li><strong>Building systems.</strong> Elevators, boilers, fire pumps, garages and pools add recurring work and vendor management.</li>
        <li><strong>Staff.</strong> On-site staff need scheduling, payroll coordination and supervision.</li>
        <li><strong>Financial complexity.</strong> Multiple bank accounts, master and sub-associations, delinquencies and loans add work.</li>
        <li><strong>Meetings and communication.</strong> How many board and owner meetings the scope includes, and in what format.</li>
      </ul>

      <h2>What hidden costs should a board look for?</h2>

      <p>Ask every firm for the full annual cost, not the monthly fee. Look for per-item charges (copies, postage, letters), after-hours charges, transition or setup fees, resale disclosure fees that go to the manager, and any percentage taken on capital projects. Our guide to <a href="/blog/community-association-management-agreement-review">reviewing a management agreement</a> lists the clauses where these appear.</p>

      <h2>What does Stellar charge?</h2>

      <p>Our management starts at <strong>$20 per unit per month</strong>, quoted as a flat monthly fee for the agreed scope. That starting price is not a quote: we review the property, financials, governing documents and contracts first. Our compensation does not rise because your budget or capital spending rises, and there is no separate capital-project planning or oversight fee. Details are on our <a href="/pricing">management pricing</a> page.</p>

      <h2>Is the cheapest proposal the best value?</h2>

      <p>Rarely. A low fee with a manager carrying too many buildings, or with add-ons that double the real cost, is not cheap. The better test is the full annual cost against the scope you actually need. Use <a href="/blog/score-condo-hoa-management-proposals">a scoring method for management proposals</a> so the board compares like with like, and put the numbers in our <a href="/tools/compare-management-proposals">proposal comparison tool</a>.</p>

      <p>For associations across <a href="/property-management-chicago">Chicago</a>, we provide a written scope and flat fee after a walk-through. <a href="/contact">Request a proposal</a>.</p>
    `,
  },
  {
    slug: 'townhome-association-maintenance-responsibilities-illinois',
    title: 'Townhome Association Maintenance: Who Fixes What in Illinois',
    metaDescription:
      'In an Illinois townhome association, the declaration decides who maintains roofs, siding, driveways and decks. A board checklist for reading it and building the budget around it.',
    date: '2026-11-29',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Building Operations',
    readTime: '7 min read',
    excerpt:
      'In townhome communities, the same roof can be the association’s job in one development and the owner’s in the next. Here is how boards can read their documents and avoid the arguments.',
    content: `
      <p>In a condominium, the building’s structure is usually common element and the association maintains it. Townhome communities are not that predictable. Some associations maintain every roof and wall; others maintain only the private roads and green space and leave each home to its owner. The answer is in your declaration, and it decides how big your budget needs to be.</p>

      <h2>Which document decides who maintains what?</h2>

      <p>The declaration, read together with any plat and recorded amendments. Most townhome communities in Illinois are governed by the Common Interest Community Association Act, and some are organized as condominiums under the Condominium Property Act. Before anything else, confirm which law applies — see <a href="/blog/which-illinois-law-governs-condo-hoa-townhome">which Illinois law governs your association</a>.</p>

      <h2>What do townhome declarations usually split?</h2>

      <ul>
        <li><strong>Roofs and gutters</strong> — association in some communities, owner in others.</li>
        <li><strong>Siding, trim and paint</strong> — often association, sometimes on a schedule.</li>
        <li><strong>Driveways, private streets and sidewalks</strong> — usually association.</li>
        <li><strong>Decks, patios and fences</strong> — often owner, with association approval for changes.</li>
        <li><strong>Windows and doors</strong> — usually owner.</li>
        <li><strong>Snow and landscaping</strong> — usually association, with the scope set by contract.</li>
      </ul>

      <h2>Why does this matter so much for the budget?</h2>

      <p>If the association maintains roofs and siding, those are some of the largest items in the reserve study, and many townhome communities installed them at the same time. They will wear out at the same time too. A board that learns this from a leak instead of from its reserve study ends up with a special assessment. Our guide to <a href="/blog/how-to-read-condo-reserve-study">reading a reserve study</a> applies here.</p>

      <h2>How should a board avoid maintenance disputes?</h2>

      <ul>
        <li>Make a one-page responsibility chart from the declaration and have counsel confirm it.</li>
        <li>Share it with every owner and with every buyer’s disclosure packet.</li>
        <li>Apply it the same way to every home, every time.</li>
        <li>When a repair crosses the line — a roof leak that damages an owner’s ceiling — follow the declaration and the insurance policy, not the neighbor relationship. <a href="/blog/condo-repairs-owner-vs-association-illinois">Owner versus association repairs</a> explains the usual logic.</li>
      </ul>

      <h2>When should the declaration be changed?</h2>

      <p>If the chart produces results nobody intended — for example, owners maintaining roofs that are physically shared — the board may want counsel to draft an amendment. Amendment rules depend on the governing law and the declaration, so start there.</p>

      <p>Planning shared exteriors and capital cycles is the core of our <a href="/services/townhome-management">townhome association management</a>. If your board wants a responsibility chart and reserve plan built from your documents, <a href="/contact">contact us</a>.</p>
    `,
  },
  {
    slug: 'condo-pet-noise-smoking-complaints-illinois',
    title: 'Pet, Noise and Smoking Complaints: A Fair Process for Illinois Boards',
    metaDescription:
      'How Illinois condo and HOA boards should handle neighbor complaints about pets, noise and smoke: check the rules, document, give notice and a hearing, and fine only consistently.',
    date: '2026-11-30',
    author: 'Mirsad Cerimovic, CAM, CMCA, AMS',
    category: 'Board Governance',
    readTime: '7 min read',
    excerpt:
      'Most association disputes start with a neighbor complaint: a barking dog, a heavy walker upstairs, smoke in the hallway. Here is a process that is fair, consistent and defensible.',
    content: `
      <p>Few things take up more board time than complaints between neighbors. The dog barks all day. The owner upstairs walks loudly at midnight. Smoke drifts into the hallway. These are real problems for the people living with them, and they can turn into long disputes when the board handles each one differently. A written process fixes most of that.</p>

      <h2>Does the board have authority to act on a complaint?</h2>

      <p>Only if a rule, the declaration or the bylaws covers the conduct. Before acting, find the provision: a pet rule, a nuisance clause, a flooring or noise rule, a smoking restriction. If nothing covers it, the board may be able to adopt a rule, but it cannot enforce one that does not exist yet. See <a href="/blog/are-hoa-condo-rules-enforceable-illinois">what makes a rule enforceable</a>.</p>

      <h2>What should happen when a complaint comes in?</h2>

      <ol>
        <li><strong>Get it in writing</strong> with dates, times and details. Verbal complaints are hard to act on fairly.</li>
        <li><strong>Check the rule</strong> and confirm it applies.</li>
        <li><strong>Look for a pattern</strong>, not a single incident. Ask the complainant to keep a short log.</li>
        <li><strong>Send a courtesy letter first</strong> in most cases. Many issues end here.</li>
        <li><strong>If it continues, start formal enforcement</strong> with notice and an opportunity to be heard.</li>
      </ol>

      <h2>Can the board fine an owner for noise or a pet problem?</h2>

      <p>For condominiums, Section 18.4(l) of the Condominium Property Act allows reasonable fines after notice and an opportunity to be heard. Common interest communities have a similar rule. Our guide to <a href="/blog/illinois-association-fines-notice-hearing">the notice and hearing required before a fine</a> explains what that means in practice.</p>

      <h2>What makes pets, noise and smoke different?</h2>

      <ul>
        <li><strong>Pets:</strong> a request for an assistance animal is not a pet rule question and should go to counsel, because fair housing law applies.</li>
        <li><strong>Noise:</strong> building construction matters. A vintage building may need flooring and underlayment rules more than quiet hours.</li>
        <li><strong>Smoke:</strong> whether smoking can be restricted inside units depends on the declaration and on how it can be amended. Ask counsel before adopting a ban.</li>
      </ul>

      <h2>How does the board stay fair?</h2>

      <p>Treat every owner the same, including board members and their friends. Keep the file factual. Decide at a properly noticed meeting. And keep the rule set small: rules nobody enforces teach owners that no rule matters. Read <a href="/blog/adopting-enforcing-condo-hoa-rules-illinois">adopting and enforcing association rules</a> for the full approach.</p>

      <p>Our <a href="/services/violation-management">violation management</a> service runs this process with written notices, hearing scheduling and consistent records. This guide is educational, not legal advice. <a href="/contact">Contact us</a> if your board wants a complaint process in place.</p>
    `,
  },
];
