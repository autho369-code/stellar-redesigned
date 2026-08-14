export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
  propertyTypes: string[];
  zipCodes: string[];
  /** 'chicago' (default) = city neighborhood; 'north-shore' = suburb */
  region?: 'chicago' | 'north-shore';
  /** Community-specific operating knowledge rendered as proof points on the area page. */
  localProof?: LocalProofPoint[];
  /** Neighborhood-specific Q&A rendered ahead of the standard FAQ set and emitted in FAQPage schema. */
  localFaq?: LocalFaqItem[];
}

export interface LocalProofPoint {
  title: string;
  detail: string;
}

export interface LocalFaqItem {
  q: string;
  a: string;
}

// Micro-neighborhood pages (Sheffield, DePaul, Ranch Triangle, Wrightwood,
// Boystown, Wrigleyville, Lakeview East, Peterson Park, Budlong Woods,
// Arcadia Terrace, Bowmanville, North Mayfair) and the out-of-area
// "Oak Park Adjacent" entry were consolidated into their parent pages;
// vercel.json 301-redirects each old /property-management-<slug> URL.
// Only add entries for areas with a query space distinct from existing pages.
export const neighborhoods: Neighborhood[] = [
  {
    name: 'Lincoln Park',
    slug: 'lincoln-park',
    description: 'Lincoln Park features some of Chicago\'s most desirable residential properties, from vintage walk-ups to luxury high-rises along the lakefront. Our property management team understands the unique demands of this affluent neighborhood, where well-maintained common areas and responsive service are expected. We serve associations in every section of Lincoln Park — including Sheffield, the DePaul campus blocks, Ranch Triangle, and Wrightwood — helping boards maintain property values in one of the city\'s most competitive real estate markets.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs', 'high-rises'],
    zipCodes: ['60614', '60610'],
    localProof: [
      {
        title: 'Park-facing high-rises',
        detail: 'The towers along Lincoln Park West and Lakeview Avenue pair vintage elevators and door staff with masonry facades on the city\'s critical-examination cycle. We budget, staff, and plan capital work for exactly this profile.',
      },
      {
        title: 'Three-flats and courtyard conversions',
        detail: 'On streets like Fremont, Seminary, and Cleveland, converted walk-ups run on tight budgets where one deferred roof or porch decision matters. We manage tuckpointing cycles, boiler seasons, and City of Chicago porch enforcement for this stock every year.',
      },
      {
        title: 'Sheffield to Wrightwood',
        detail: 'The blocks around DePaul\'s campus, the Armitage–Halsted landmark shopping district, and the Ranch Triangle each have their own rhythm — student turnover, landmark storefront condos, premium townhome courts — and we manage associations in all of them.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage vintage walk-ups and converted three-flats in Lincoln Park?',
        a: 'Yes — small vintage associations are core to our Lincoln Park portfolio. We handle the realities of pre-war stock: masonry tuckpointing, flat-roof replacement cycles, City of Chicago porch and deck enforcement, and boiler heating seasons, with budgets sized for 6-to-24-unit buildings.',
      },
      {
        q: 'Does Stellar serve Sheffield, DePaul, Ranch Triangle, and Wrightwood?',
        a: 'Yes. These are all sections of Lincoln Park (ZIP 60614) and part of our standard Lincoln Park service area — the blocks around DePaul\'s Lincoln Park campus, the Ranch Triangle near the Clybourn corridor, and the Wrightwood streets north of Fullerton — covered by the same dedicated manager.',
      },
    ]
  },
  {
    name: 'Lakeview',
    slug: 'lakeview',
    description: 'Lakeview is a vibrant lakefront neighborhood with a diverse mix of vintage courtyard buildings, mid-rises, and newer construction. Property management here requires balancing the needs of a dynamic resident population with the preservation of historic building character. We serve every section of the neighborhood — including Wrigleyville, Northalsted (Boystown), and Lakeview East along the harbor — managing the varied building types that make Lakeview one of Chicago\'s most popular neighborhoods.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60657', '60613'],
    localProof: [
      {
        title: 'Wrigleyville event-day operations',
        detail: 'Buildings near Wrigley Field live with 81 home games plus concerts and street festivals. We write event-day parking, trash, noise, and security logistics into the operating calendar so boards are not improvising every summer weekend.',
      },
      {
        title: 'The Belmont Harbor high-rise corridor',
        detail: 'Lakeview East\'s towers along Lake Shore Drive carry true lakefront exposure — wind-driven rain, masonry critical examinations, riser and window replacement cycles — and we build reserve plans around those capital rhythms.',
      },
      {
        title: 'Northalsted and Southport walk-ups',
        detail: 'From Northalsted\'s well-kept vintage condo buildings to courtyard walk-ups off the Southport Corridor, most Lakeview associations are small to mid-size communities that want responsive, personal management rather than a national call center.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage condo buildings near Wrigley Field?',
        a: 'Yes. Wrigleyville associations face conditions most Chicago buildings never see — game-day parking and traffic, event noise, and heavy seasonal foot traffic. We prepare an event-season operating plan for each Wrigleyville client so the building runs smoothly from opening day through the last night game.',
      },
      {
        q: 'Does Stellar serve Boystown (Northalsted) and Lakeview East?',
        a: 'Yes. Northalsted and Lakeview East are part of our Lakeview service area (ZIPs 60657 and 60613), including the high-rise corridor near Belmont Harbor. Associations there get the same dedicated manager, transparent reporting, and 24/7 live emergency response as every Stellar community.',
      },
    ]
  },
  {
    name: 'Rogers Park',
    slug: 'rogers-park',
    description: 'Rogers Park is Chicago\'s most diverse neighborhood, featuring a rich mix of vintage courtyard condominium buildings and distinctive lakefront architecture. Property management in Rogers Park requires cultural sensitivity and experience with a wide range of building ages and styles. We help boards navigate the unique challenges of maintaining properties in this eclectic far north side community.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60626', '60645']
  },
  {
    name: 'Edgewater',
    slug: 'edgewater',
    description: 'Edgewater is known for its stunning lakefront high-rises and historic residential hotels converted to condominiums. Managing properties here often means working with large-scale buildings that have complex mechanical systems and significant common areas. Our expertise in high-rise management makes us the ideal partner for Edgewater boards seeking professional, detail-oriented service.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60660', '60640'],
    localProof: [
      {
        title: 'The Sheridan Road corridor',
        detail: 'Edgewater\'s stretch of Sheridan Road holds one of the densest runs of vintage lakefront high-rises in Chicago, including landmark co-op buildings. Wind exposure, aging risers, and facade critical examinations drive capital planning here, and we manage those cycles daily.',
      },
      {
        title: 'Bryn Mawr Historic District',
        detail: 'The vintage buildings around the Bryn Mawr Red Line stop sit in a designated historic district, where exterior work needs the right approvals and the right masons. We line up both before scaffolding goes up.',
      },
      {
        title: 'Large buildings, long-tenured residents',
        detail: 'Many Edgewater associations combine hundreds of units with decades-long residents and on-site staff. We coordinate staffing, keep communication accessible, and give boards financial reporting that stands up to engaged owners.',
      },
    ],
    localFaq: [
      {
        q: 'Can Stellar manage older lakefront high-rises in Edgewater?',
        a: 'Yes — vintage high-rise management is one of our core strengths. Edgewater\'s lakefront towers need proactive masonry and facade programs, riser and window replacement planning, and reserves that anticipate lakefront weathering. We build board-approved capital calendars for each building.',
      },
      {
        q: 'Do you manage housing cooperatives as well as condominiums?',
        a: 'Yes. Edgewater retains several co-op buildings alongside its condominiums, and we support both — including share-and-proprietary-lease administration for co-ops — with the same transparent monthly financial reporting.',
      },
    ]
  },
  {
    name: 'Uptown',
    slug: 'uptown',
    description: 'Uptown is experiencing a renaissance with significant new development alongside its iconic entertainment venues and historic architecture. Property management in Uptown requires navigating a neighborhood in transition, balancing renovation projects with day-to-day operations. We help Uptown associations capitalize on rising property values while maintaining strong financial reserves.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60640']
  },
  {
    name: 'Andersonville',
    slug: 'andersonville',
    description: 'Andersonville is a charming neighborhood celebrated for its independent shops, Swedish heritage, and tight-knit community feel. The housing stock here features well-maintained vintage buildings, many converted to condominiums that retain their original character. Our management approach in Andersonville emphasizes community engagement and preserving the neighborhood\'s distinctive residential charm.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60640', '60660']
  },
  {
    name: 'Ravenswood',
    slug: 'ravenswood',
    description: 'Ravenswood is a quiet, tree-lined neighborhood with a mix of single-family homes and boutique condominium buildings near its thriving craft brewery corridor. Property management here focuses on maintaining the residential tranquility that makes Ravenswood so desirable for families. We provide hands-on service tailored to the smaller building associations that define this neighborhood.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60640', '60625']
  },
  {
    name: 'Lincoln Square',
    slug: 'lincoln-square',
    description: 'Lincoln Square blends old-world European charm with a thriving arts and dining scene centered around its iconic town square. The neighborhood features a healthy mix of vintage courtyard buildings and newer townhome developments. Our Lincoln Square service area also covers the Bowmanville, Budlong Woods, and Arcadia Terrace pockets nearby, and our team delivers the community-oriented management that boards across all of them expect.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60625']
  },
  {
    name: 'Albany Park',
    slug: 'albany-park',
    description: 'Albany Park is one of Chicago\'s most ethnically diverse neighborhoods, situated along the North Branch of the Chicago River with excellent transit access. The area features a mix of well-kept condominiums and multi-unit conversions that serve a broad resident base. We bring culturally responsive property management to Albany Park associations looking for reliable, professional service.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60625', '60618']
  },
  {
    name: 'North Center',
    slug: 'north-center',
    description: 'North Center is a family-friendly neighborhood anchored by excellent schools and the popular Northcenter Town Square shopping district. Properties here range from charming brick two-flats converted to condos to newer luxury townhome developments. Our management services help North Center boards maintain the high standards that make this one of Chicago\'s most sought-after neighborhoods for families.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60618']
  },
  {
    name: 'Roscoe Village',
    slug: 'roscoe-village',
    description: 'Roscoe Village is a walkable, family-oriented neighborhood with a vibrant retail corridor along Roscoe Street. The housing stock includes beautifully renovated vintage buildings alongside modern townhome developments. We provide attentive property management that matches the neighborhood\'s high expectations for quality maintenance and responsive communication.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60618', '60657']
  },
  {
    name: 'Bucktown',
    slug: 'bucktown',
    description: 'Bucktown is a trendy neighborhood known for its art galleries, boutique shopping, and beautifully renovated historic homes. Property management here requires experience with both vintage conversions and new luxury construction in a rapidly appreciating market. We help Bucktown boards protect their investments with proactive maintenance and smart financial planning.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60647', '60622'],
    localProof: [
      {
        title: 'Townhome courts and boutique elevators',
        detail: 'Bucktown\'s side streets mix new-construction townhome communities with boutique elevator condo buildings along Milwaukee and Damen. Both need right-sized budgets — we scale each service plan to the building, not a template.',
      },
      {
        title: 'Trail and park adjacency',
        detail: 'The Bloomingdale Trail\'s western stretch and Holstein Park anchor Bucktown\'s residential blocks. Nearby associations see steady buyer demand and expect their buildings maintained to match it.',
      },
      {
        title: 'Commuter-heavy ownership',
        detail: 'With the Clybourn Metra stop and the Blue Line close by, many Bucktown owners are busy professionals who expect portal-first communication, online payments, and board packets that respect their time.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage new-construction townhome associations in Bucktown?',
        a: 'Yes. We manage townhome HOAs across Bucktown, including newer developments still working through developer turnover, warranty punch lists, and first-generation budgets. We set up reserves and vendor contracts so early boards start on solid footing.',
      },
      {
        q: 'What does management cost for a small Bucktown condo building?',
        a: 'Stellar\'s pricing starts at $20 per unit per month as a flat fee — no percentage of budget, no surprise add-ons. For a typical 8-to-20-unit Bucktown building, boards get a dedicated manager, monthly financials, and 24/7 emergency response at a predictable cost.',
      },
    ]
  },
  {
    name: 'Wicker Park',
    slug: 'wicker-park',
    description: 'Wicker Park is a cultural hotspot with a thriving nightlife scene, acclaimed restaurants, and stunning Victorian-era architecture. Managing properties in Wicker Park means balancing the energy of a bustling entertainment district with residents\' need for peaceful living. Our experienced team navigates these dynamics while keeping buildings in top condition.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622', '60647'],
    localProof: [
      {
        title: 'Landmark Victorians off the park',
        detail: 'The Wicker Park Landmark District\'s mansions on Hoyne and Pierce — many long since divided into condominiums — need slate, masonry, and millwork vendors who respect the architecture. We keep exactly those trades on call.',
      },
      {
        title: 'The 606 effect',
        detail: 'Property values along the Bloomingdale Trail have climbed for a decade, and buyers expect buildings to match. We help boards fund the tuckpointing, roofs, and common-area upgrades that keep trail-adjacent buildings competitive.',
      },
      {
        title: 'Six Corners energy',
        detail: 'Around Milwaukee, North, and Damen, condos sit above bars and storefronts. We manage the mixed-use realities — shared utilities, late-night noise, trash logistics — that come with living at the center of the action.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage converted three-flats and small condo buildings in Wicker Park?',
        a: 'Yes. Much of Wicker Park\'s condo stock is vintage two-to-six-flat conversions, and our flat monthly fee starting at $20 per unit is designed so buildings that size get professional management, transparent books, and 24/7 emergency coverage without big-building overhead.',
      },
      {
        q: 'Our building sits above retail on Milwaukee Avenue — can Stellar manage it?',
        a: 'Yes. We manage mixed-use condominium buildings and handle the extra layers they involve: cost allocations with commercial owners, shared building systems, and operating rules that keep the residential floors livable above active storefronts.',
      },
    ]
  },
  {
    name: 'Logan Square',
    slug: 'logan-square',
    description: 'Logan Square has become one of Chicago\'s most dynamic neighborhoods, with its iconic boulevard system and rapidly evolving dining and arts scene. The area features everything from classic Chicago greystones to new mid-rise developments. We provide forward-thinking property management that helps Logan Square associations adapt to the neighborhood\'s exciting growth.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60647', '60618'],
    localProof: [
      {
        title: 'Boulevard greystones',
        detail: 'The Logan Square Boulevards Historic District carries some of the city\'s best greystone architecture. Cornices, limestone facades, and century-old roofs make disciplined capital planning essential — it is the heart of our work here.',
      },
      {
        title: 'Transit-oriented mid-rises',
        detail: 'New mid-rise condo buildings along Milwaukee Avenue near the California and Logan Square Blue Line stops bring first-generation boards who need budgets, rules, and reserve studies built from scratch. We specialize in that setup work.',
      },
      {
        title: 'Two-flat and greystone conversions',
        detail: 'Much of Logan Square\'s condo stock is converted two-to-four-flats, where self-management burns out volunteers fast. Our flat per-unit pricing makes professional management viable at exactly that size.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage greystones and vintage buildings in Logan Square?',
        a: 'Yes. Vintage masonry buildings — including boulevard greystones — are a specialty. We plan tuckpointing, cornice, and roof cycles years ahead, and we work with masons who know limestone restoration from a quick concrete patch.',
      },
      {
        q: 'Can Stellar take over a newer condo building near the Blue Line?',
        a: 'Yes. Logan Square\'s transit-oriented buildings are often on their first or second board. We run developer-transition reviews, set up realistic budgets and reserves, and put governance rhythms in place so the association matures smoothly.',
      },
    ]
  },
  {
    name: 'Humboldt Park',
    slug: 'humboldt-park',
    description: 'Humboldt Park is a culturally rich neighborhood centered around its beautiful namesake park with a historic boathouse and lagoon. The area features a growing number of condominium conversions as the neighborhood continues to develop. We offer attentive, transparent property management tailored to the needs of Humboldt Park\'s diverse community.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60647', '60624', '60651']
  },
  {
    name: 'Ukrainian Village',
    slug: 'ukrainian-village',
    description: 'Ukrainian Village is prized for its tree-lined streets, ornate churches, and some of Chicago\'s finest Victorian and workers\' cottage architecture. Property management in this historic neighborhood requires sensitivity to preservation while implementing modern building systems. We help Ukrainian Village boards maintain their buildings\' historic character while ensuring efficient operations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622', '60612']
  },
  {
    name: 'West Town',
    slug: 'west-town',
    description: 'West Town encompasses several vibrant sub-neighborhoods and features a dynamic mix of historic and contemporary residential properties. The area\'s rapid development means property management must stay ahead of evolving building codes and market expectations. Our team brings the expertise needed to manage West Town\'s diverse property portfolio effectively.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622', '60642']
  },
  {
    name: 'River North',
    slug: 'river-north',
    description: 'River North is Chicago\'s premier gallery district and entertainment destination, featuring luxury high-rise condominiums and converted loft spaces. Property management in River North demands white-glove service and expertise in managing high-end amenity spaces like rooftop decks and fitness centers. We deliver the premium management experience that River North residents and boards expect.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60654', '60611'],
    localProof: [
      {
        title: 'Brick-and-timber lofts',
        detail: 'The converted warehouses around Kinzie, Hubbard, and the gallery district have exposed timber, original masonry, and freight-elevator retrofits. We treat the maintenance profile of loft conversions as its own discipline.',
      },
      {
        title: 'Short-term-rental enforcement',
        detail: 'River North\'s location makes it a magnet for unauthorized short-term rentals. We help boards adopt leasing amendments, pursue violations, and use Chicago\'s shared-housing rules — including the prohibited-buildings list — to keep buildings residential.',
      },
      {
        title: 'High-rise turnover and transitions',
        detail: 'As developer-controlled boards turn over in newer towers, we coordinate transition studies, warranty claims, and first-year budgets that put new associations on solid ground.',
      },
    ],
    localFaq: [
      {
        q: 'Can Stellar help our River North board control Airbnb and short-term rentals?',
        a: 'Yes. We work with association counsel to draft and enforce leasing amendments, monitor listings, process violations, and register buildings on the City of Chicago\'s shared-housing prohibited-buildings list where the board chooses to opt out.',
      },
      {
        q: 'Do you manage loft condominium buildings in River North?',
        a: 'Yes. Brick-and-timber loft conversions are a management specialty of ours — from freight elevator modernization and sprinkler systems to the masonry and window programs that keep century-old warehouse buildings sound.',
      },
    ]
  },
  {
    name: 'Streeterville',
    slug: 'streeterville',
    description: 'Streeterville is a prestigious lakefront neighborhood home to iconic high-rises, world-class shopping on the Magnificent Mile, and Northwestern\'s downtown campus. Managing properties here requires sophisticated expertise in large-scale high-rise operations and luxury amenity management. We are trusted by Streeterville boards to deliver institutional-quality management with a personal touch.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60611'],
    localProof: [
      {
        title: 'Institutional scale',
        detail: 'Streeterville towers routinely run hundreds of units with engineers, door staff, and multi-elevator banks. Our financial reporting and staffing coordination are built for that scale — and hold up to financially sophisticated boards.',
      },
      {
        title: 'Life-safety and facade compliance',
        detail: 'Older residential high-rises here fall under Chicago\'s life-safety evaluation requirements and the exterior-wall critical-examination cycle. We keep both on visible, board-approved compliance calendars.',
      },
      {
        title: 'Mixed-use towers',
        detail: 'Buildings near Michigan Avenue often stack residences above hotels, retail, and parking. We administer shared-facility and reciprocal-easement cost allocations so the association pays its fair share and nothing more.',
      },
    ],
    localFaq: [
      {
        q: 'Does Stellar manage large high-rise associations in Streeterville?',
        a: 'Yes. High-rise condominium management is a core Stellar practice: building staff coordination, elevator and mechanical contracts, facade and life-safety compliance, and reserve planning for major systems — with 24/7 live emergency response behind it.',
      },
      {
        q: 'How do you handle towers shared with hotels or commercial space?',
        a: 'Many Streeterville buildings operate under reciprocal easement or shared-facilities agreements with hotel, retail, or parking components. We administer those cost allocations, audit shared expenses, and represent the association\'s interests in operator meetings.',
      },
    ]
  },
  {
    name: 'Gold Coast',
    slug: 'gold-coast',
    description: 'The Gold Coast is Chicago\'s most exclusive residential neighborhood, featuring historic mansions, landmark buildings, and luxury high-rises along Lake Shore Drive. Property management here sets the highest standard, requiring expertise in historic preservation, premium vendor relationships, and discreet, professional service. We are proud to manage some of the Gold Coast\'s most distinguished addresses.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60610', '60611'],
    localProof: [
      {
        title: 'Landmark addresses',
        detail: 'From the Astor Street District\'s rowhouses to the East Lake Shore Drive Historic District\'s grand facades, exterior work here routinely runs through Chicago landmark review. We manage the approvals path alongside the contractors.',
      },
      {
        title: 'Pre-war building systems',
        detail: 'Steam heat, original elevator cabs, and hand-laid masonry demand engineers and specialty trades who know pre-war buildings. We maintain those vendor relationships and plan facade critical examinations years in advance.',
      },
      {
        title: 'Full front-of-house operations',
        detail: 'Many Gold Coast buildings run door staff around the clock. We coordinate staffing, scheduling, and payroll administration while protecting the service culture residents of these addresses expect.',
      },
    ],
    localFaq: [
      {
        q: 'Does Stellar manage landmark and vintage buildings in the Gold Coast?',
        a: 'Yes. We manage vintage condominium and co-op buildings where exterior alterations require Commission on Chicago Landmarks review, coordinating approvals, specialty masons, and phased capital plans that respect both the architecture and the budget.',
      },
      {
        q: 'Can you manage housing cooperatives as well as condominiums?',
        a: 'Yes. The Gold Coast retains several cooperatives among its vintage high-rises. Co-op boards receive the same transparent monthly reporting, with share-structure and proprietary-lease administration handled correctly.',
      },
    ]
  },
  {
    name: 'Old Town',
    slug: 'old-town',
    description: 'Old Town is one of Chicago\'s oldest and most charming neighborhoods, known for its comedy clubs, historic row houses, and the iconic Old Town Triangle. Property management here involves caring for architecturally significant buildings while meeting modern resident expectations. Our experience with vintage properties makes us an excellent fit for Old Town associations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60610', '60614'],
    localProof: [
      {
        title: 'The Old Town Triangle',
        detail: 'Crilly Court and the frame cottages and rowhouses of the Old Town Triangle sit in one of Chicago\'s oldest landmark districts, where exterior projects need landmark sign-off. We have the approval path down to a routine.',
      },
      {
        title: 'Small buildings, big expectations',
        detail: 'Most Old Town associations are 4-to-24-unit vintage buildings off Wells Street — exactly the size where self-management burns out volunteers and national firms under-serve. Our model was built for them.',
      },
      {
        title: 'Wells Street mixed-use',
        detail: 'Condos above the Wells Street corridor\'s restaurants and shops deal with shared systems, commercial neighbors, and nightlife hours. We keep the residential floors quiet, clean, and fairly billed.',
      },
    ],
    localFaq: [
      {
        q: 'Our Old Town building is in a landmark district — how does that affect projects?',
        a: 'Exterior work in the Old Town Triangle District generally requires review by the Commission on Chicago Landmarks before permits issue. We build that review into project timelines, prepare the documentation, and match the work to approved materials so projects clear without surprises.',
      },
      {
        q: 'Do you take on small or self-managed Old Town associations?',
        a: 'Yes — converting self-managed buildings is one of the most common ways associations come to Stellar. We set up the books, vendor contracts, and governance calendar in a 30-to-60-day transition, with flat pricing from $20 per unit per month.',
      },
    ]
  },
  {
    name: 'Near North Side',
    slug: 'near-north-side',
    description: 'The Near North Side is a bustling urban center that includes some of Chicago\'s most recognizable skyline towers and cultural institutions. Property management in this area requires handling complex high-rise operations, large resident populations, and premium service expectations. We bring institutional-grade management capabilities to Near North Side condominium associations of all sizes.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60610', '60611', '60654']
  },
  {
    name: 'Loop',
    slug: 'loop',
    description: 'The Loop is Chicago\'s central business district, where an increasing number of commercial buildings have been converted to residential condominiums and new luxury towers continue to rise. Property management in the Loop requires expertise in mixed-use buildings, 24/7 operations, and coordination with commercial tenants. We excel at managing the unique complexities of downtown living.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60601', '60602', '60603', '60604']
  },
  {
    name: 'South Loop',
    slug: 'south-loop',
    description: 'The South Loop has transformed from an industrial area into one of Chicago\'s most popular residential neighborhoods, anchored by Museum Campus and Grant Park. The area features many newer construction high-rises with extensive amenity packages that require skilled management. We help South Loop boards navigate the challenges of managing modern, amenity-rich buildings.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs', 'townhomes'],
    zipCodes: ['60605', '60616'],
    localProof: [
      {
        title: 'Dearborn Park and Central Station',
        detail: 'The planned communities south of the Loop mix townhome courts, mid-rises, and private drives with layered association structures. We manage within master-and-sub-association frameworks without losing any community\'s interests in the shuffle.',
      },
      {
        title: 'Amenity-tower operations',
        detail: 'Newer South Loop high-rises run on garage podiums, pool decks, and club floors. We size the service contracts and reserves these amenity packages actually require, so assessments stay honest.',
      },
      {
        title: 'Event-season logistics',
        detail: 'With Grant Park festivals and marathon weekend at the doorstep, we plan traffic, parking, and building-access logistics ahead of the city\'s biggest weekends instead of reacting to them.',
      },
    ],
    localFaq: [
      {
        q: 'Do you manage townhome communities in Dearborn Park and Central Station?',
        a: 'Yes. We manage South Loop townhome and homeowner associations, including communities with private streets and shared drives — coordinating snow removal, landscaping, and capital work, and navigating master-association relationships where they exist.',
      },
      {
        q: 'Can Stellar handle a high-rise with a large amenity package?',
        a: 'Yes. Amenity-rich buildings are a South Loop signature, and we manage them daily: pool and fitness contracts, engineer staffing, package-room logistics, and reserve planning for the systems behind the amenities.',
      },
    ]
  },
  {
    name: "Printer's Row",
    slug: 'printers-row',
    description: 'Printer\'s Row is a historic district known for its stunning loft conversions in former printing and publishing buildings with soaring ceilings and exposed brick. Managing these unique properties requires understanding the specific maintenance needs of converted industrial spaces. We specialize in preserving the industrial character that makes Printer\'s Row lofts so desirable while ensuring modern comfort.',
    propertyTypes: ['condominiums', 'HOAs'],
    zipCodes: ['60605']
  },
  {
    name: 'West Loop',
    slug: 'west-loop',
    description: 'The West Loop is Chicago\'s hottest neighborhood, home to Restaurant Row and a booming residential market of converted warehouses and sleek new towers. Property management here must keep pace with rapid development and the high expectations of an upscale, design-conscious resident base. We deliver cutting-edge management services that match the West Loop\'s innovative spirit.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs', 'townhomes'],
    zipCodes: ['60607', '60661'],
    localProof: [
      {
        title: 'Lofts to glass towers',
        detail: 'The West Loop runs from converted warehouse lofts near Randolph Street\'s Restaurant Row to new high-rises rising block by block. We manage both ends of that spectrum — and the very different budgets they demand.',
      },
      {
        title: 'Developer turnover, done right',
        detail: 'Many West Loop associations are within their first decade. We coordinate the turnover process under the Illinois Condominium Property Act: records handover, transition engineering studies, and warranty claims pursued before deadlines pass.',
      },
      {
        title: 'Amenity-heavy operations',
        detail: 'Rooftop decks, pools, coworking lounges, and package rooms define new West Loop buildings. We procure and supervise the service contracts that keep amenity floors worth their assessments.',
      },
    ],
    localFaq: [
      {
        q: 'Our West Loop building just left developer control — can Stellar help?',
        a: 'Yes — developer transitions are a Stellar specialty. We coordinate document and financial handover, commission a transition engineering study, organize warranty claims before deadlines, and build the association\'s first owner-controlled budget and reserve plan.',
      },
      {
        q: 'Do you manage warehouse loft conversions in the West Loop?',
        a: 'Yes. Loft buildings have a maintenance profile all their own — exposed brick and timber, oversized windows, freight elevators, rooftop systems — and we manage buildings of the same era and construction across the city.',
      },
    ]
  },
  {
    name: 'Fulton Market',
    slug: 'fulton-market',
    description: 'Fulton Market has evolved from a meatpacking district into one of Chicago\'s most sought-after addresses, with luxury condominiums and trendy loft conversions. Property management in this rapidly evolving area requires adaptability and experience with new construction warranty issues and amenity-rich buildings. We help Fulton Market associations establish strong operational foundations from day one.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60607', '60661']
  },
  {
    name: 'Pilsen',
    slug: 'pilsen',
    description: 'Pilsen is a vibrant, culturally rich neighborhood celebrated for its Mexican-American heritage, colorful murals, and thriving arts community. The area features a growing number of condominium conversions and new developments alongside its iconic row houses. We provide culturally aware property management that respects Pilsen\'s community character while supporting property value growth.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60608', '60616']
  },
  {
    name: 'Bridgeport',
    slug: 'bridgeport',
    description: 'Bridgeport is a proud, historic neighborhood with strong community ties, known as the traditional home of Chicago\'s political establishment. The area features a mix of classic Chicago bungalows, newer townhome developments, and growing condominium options. We bring dependable, no-nonsense property management to Bridgeport associations that value straightforward service and fiscal responsibility.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60608', '60609']
  },
  {
    name: 'Hyde Park',
    slug: 'hyde-park',
    description: 'Hyde Park is an intellectual hub anchored by the University of Chicago, featuring architecturally significant buildings and a diverse, engaged community. Property management here often involves working with sophisticated boards who expect data-driven decision-making and transparent financials. We thrive in Hyde Park\'s demanding environment, delivering professional management backed by clear reporting.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs', 'townhomes'],
    zipCodes: ['60615', '60637']
  },
  {
    name: 'Kenwood',
    slug: 'kenwood',
    description: 'Kenwood is one of Chicago\'s most historic and stately neighborhoods, featuring grand mansions and landmark buildings including the home of former President Obama. Property management in Kenwood requires attention to historic preservation and the expectations of a discerning residential community. We provide premium management services worthy of Kenwood\'s distinguished architectural heritage.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60615', '60653']
  },
  {
    name: 'Bronzeville',
    slug: 'bronzeville',
    description: 'Bronzeville is experiencing a powerful revitalization, building on its rich African-American cultural heritage as the historic center of Chicago\'s Black Metropolis. New condominium developments and townhome communities are bringing fresh energy to the neighborhood. We support Bronzeville\'s growth with professional property management that helps new and established associations thrive.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60653', '60616']
  },
  {
    name: 'South Shore',
    slug: 'south-shore',
    description: 'South Shore is a lakefront neighborhood with beautiful residential architecture, anchored by the historic South Shore Cultural Center and Jackson Park. The area features distinctive residential architecture and a growing number of managed condominium associations. We bring reliable, attentive property management to South Shore boards focused on building strong communities and protecting their investments.',
    propertyTypes: ['condominiums', 'HOAs'],
    zipCodes: ['60649']
  },
  {
    name: 'Beverly',
    slug: 'beverly',
    description: 'Beverly is a unique Chicago neighborhood that feels like a suburban enclave, famous for its rolling hills, historic homes, and the annual Beverly Hills bike race. The area features many homeowner associations and townhome communities that require professional management. We serve Beverly with the personalized attention and community focus that this tight-knit neighborhood deserves.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60643', '60655']
  },
  {
    name: 'Mount Greenwood',
    slug: 'mount-greenwood',
    description: 'Mount Greenwood is a quiet, family-oriented neighborhood on Chicago\'s far southwest side known for its strong community spirit and well-kept properties. The area features homeowner associations and townhome communities that prioritize safety and property maintenance. We deliver dependable management services that align with Mount Greenwood\'s values of community pride and fiscal responsibility.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60655']
  },
  {
    name: 'Edison Park',
    slug: 'edison-park',
    description: 'Edison Park is Chicago\'s northwesternmost neighborhood, offering a small-town feel with easy Metra access to downtown. The area features well-maintained townhome communities and homeowner associations with strong community involvement. We provide the responsive, hands-on management that Edison Park residents expect from their neighborhood\'s commitment to quality living.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60631']
  },
  {
    name: 'Norwood Park',
    slug: 'norwood-park',
    description: 'Norwood Park is a quiet residential neighborhood on the northwest side with tree-lined streets and a historic district dating back to the 1800s. The area features a mix of homeowner associations and condominium communities that value traditional neighborhood character. We bring professional management to Norwood Park properties while respecting the area\'s established residential traditions.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60631', '60656']
  },
  {
    name: 'Jefferson Park',
    slug: 'jefferson-park',
    description: 'Jefferson Park is a transit-rich northwest side neighborhood served by both CTA and Metra, making it popular with commuters. The area has seen growing condominium development near its transportation hub alongside established homeowner associations. We offer efficient, accessible property management that serves Jefferson Park\'s practical-minded community.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60630', '60646']
  },
  {
    name: 'Portage Park',
    slug: 'portage-park',
    description: 'Portage Park is a large northwest side neighborhood centered around its beautiful namesake park and the iconic Portage Theater. The area features an increasing number of condominium conversions and townhome developments as new residents discover the neighborhood. We provide straightforward, professional property management to Portage Park associations that expect responsive, dependable service.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60634', '60641']
  },
  {
    name: 'Irving Park',
    slug: 'irving-park',
    description: 'Irving Park is a diverse neighborhood with a historic district featuring stunning homes along its tree-lined boulevards. The area offers a mix of condominiums, townhomes, and homeowner associations in both vintage and newer construction. We deliver reliable property management that helps Irving Park boards maintain the neighborhood\'s residential appeal and architectural heritage.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60618', '60641']
  },
  {
    name: 'Avondale',
    slug: 'avondale',
    description: 'Avondale is a rapidly growing northwest side neighborhood attracting new residents with its craft breweries, dining scene, and creative energy. The area features a growing number of condominium conversions and new townhome developments. We help Avondale associations navigate the neighborhood\'s evolution with forward-looking management strategies.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60618', '60647']
  },
  {
    name: 'Hermosa',
    slug: 'hermosa',
    description: 'Hermosa is a predominantly residential neighborhood on Chicago\'s northwest side with a strong Latino cultural identity. The area features a growing number of condominium and homeowner associations seeking professional management. We provide bilingual, community-oriented property management services that meet the specific needs of Hermosa\'s residential associations.',
    propertyTypes: ['condominiums', 'HOAs'],
    zipCodes: ['60639']
  },
  {
    name: 'Belmont Cragin',
    slug: 'belmont-cragin',
    description: 'Belmont Cragin is one of Chicago\'s most populated neighborhoods, featuring a vibrant commercial district and a strong residential community. The area has growing demand for professional property management as condominium and townhome associations mature. We serve Belmont Cragin with responsive, reliable management that helps associations build strong financial foundations.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60639', '60641']
  },
  {
    name: 'Montclare',
    slug: 'montclare',
    description: 'Montclare is a small, quiet residential neighborhood on the far northwest side known for its well-kept homes and community stability. The area features several townhome and condominium associations that benefit from professional management oversight. We offer personalized service scaled to Montclare\'s intimate community size, ensuring every association receives dedicated attention.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60707', '60634']
  },
  {
    name: 'Dunning',
    slug: 'dunning',
    description: 'Dunning is a residential neighborhood on the northwest side offering a strong residential character and convenient access to O\'Hare airport. The area features established homeowner associations and growing condominium communities. We bring professional management to Dunning properties, helping boards maintain property values and create welcoming residential communities.',
    propertyTypes: ['HOAs', 'condominiums', 'townhomes'],
    zipCodes: ['60634']
  },
  {
    name: 'Forest Glen',
    slug: 'forest-glen',
    description: 'Forest Glen is one of Chicago\'s most secluded and affluent neighborhoods, with winding streets and lush landscaping that feel miles from the city. The area features upscale homeowner associations and condominium communities with high standards for property maintenance. We provide premium management services that uphold Forest Glen\'s reputation for exceptional residential quality.',
    propertyTypes: ['HOAs', 'condominiums', 'townhomes'],
    zipCodes: ['60646', '60630']
  },
  {
    name: 'North Park',
    slug: 'north-park',
    description: 'North Park is a serene neighborhood bordered by the North Branch of the Chicago River, home to North Park University and beautiful nature preserves. The area features a mix of condominium associations and townhome communities in a peaceful residential setting, and our service area here includes the Peterson Park blocks along Peterson Avenue. We provide thoughtful property management that complements North Park\'s tranquil character and strong sense of community.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60625', '60659']
  },
  {
    name: 'West Ridge',
    slug: 'west-ridge',
    description: 'West Ridge is one of Chicago\'s most culturally diverse neighborhoods, featuring a thriving Devon Avenue commercial corridor and a mix of housing types. The area has many condominium associations that benefit from professional management with multilingual capabilities. We serve West Ridge communities with culturally responsive management and strong vendor relationships.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60645', '60659']
  },
  {
    name: 'Ravenswood Manor',
    slug: 'ravenswood-manor',
    description: 'Ravenswood Manor is a picturesque neighborhood along the Chicago River with a designated historic district and a strong homeowner community. Property management here requires sensitivity to historic preservation guidelines and close coordination with an active neighborhood association. We provide knowledgeable management that respects Ravenswood Manor\'s architectural heritage and community standards.',
    propertyTypes: ['HOAs', 'condominiums', 'townhomes'],
    zipCodes: ['60625']
  },
  {
    name: 'Sauganash',
    slug: 'sauganash',
    description: 'Sauganash is one of Chicago\'s most prestigious residential neighborhoods, featuring spacious homes and beautifully landscaped properties along winding streets. The area\'s homeowner associations maintain high standards for property appearance and community amenities. We deliver premium management services befitting Sauganash\'s reputation as one of the city\'s finest residential enclaves.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60646']
  },
  {
    name: 'Wildwood',
    slug: 'wildwood',
    description: 'Wildwood is an exclusive pocket neighborhood on the far northwest side with a distinctly suburban character and strong property values. The area features established homeowner associations that take pride in maintaining their community\'s pristine appearance. We provide meticulous management services that support Wildwood\'s high standards for property maintenance and community governance.',
    propertyTypes: ['HOAs', 'townhomes'],
    zipCodes: ['60646', '60656']
  },
  {
    name: 'Edgebrook',
    slug: 'edgebrook',
    description: 'Edgebrook is a secluded, affluent neighborhood on the northwest side that feels worlds apart from the urban hustle, with forest preserves and winding roads. The area\'s homeowner associations focus on preserving the neighborhood\'s natural beauty and residential exclusivity. We manage Edgebrook properties with the attention to detail and environmental sensitivity this unique community requires.',
    propertyTypes: ['HOAs', 'townhomes', 'condominiums'],
    zipCodes: ['60646', '60630']
  },
  {
    name: 'Old Irving Park',
    slug: 'old-irving-park',
    description: 'Old Irving Park is a historic neighborhood with a designated landmark district featuring stately homes from the early 1900s alongside new boutique developments. Property management here balances historic preservation with modern amenity expectations. We bring experience in managing architecturally diverse properties to Old Irving Park\'s growing association community.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60618', '60641']
  },
  {
    name: 'Mayfair',
    slug: 'mayfair',
    description: 'Mayfair is a stable residential neighborhood on the northwest side with convenient access to major transportation corridors. The area features a mix of condominium buildings and townhome communities seeking quality management and responsive service, and our coverage includes the North Mayfair blocks as well. We deliver reliable, professional property management that helps Mayfair associations steward their budgets with confidence.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60630', '60646']
  },
  {
    name: 'Galewood',
    slug: 'galewood',
    description: 'Galewood is a residential neighborhood on the west side with a mix of bungalows, townhomes, and growing condominium developments near the Metra station. The area\'s associations benefit from professional management that understands the neighborhood\'s blend of longtime residents and newcomers. We provide balanced, community-minded property management to Galewood associations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60639', '60707']
  },
  {
    name: 'Austin',
    slug: 'austin',
    description: 'Austin is Chicago\'s largest neighborhood by population, featuring a diverse housing stock and significant ongoing investment in community revitalization. The area has a growing number of condominium associations and townhome communities seeking professional guidance, and our service area runs to the Oak Park border along Austin Boulevard. We support Austin\'s development with accessible, community-focused property management that helps associations build value.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60644', '60651']
  },
  {
    name: 'East Village',
    slug: 'east-village',
    description: 'East Village is a trendy, walkable neighborhood within West Town, known for its eclectic dining scene and beautifully restored vintage buildings. The area features condominium conversions that blend historic charm with modern living. We manage East Village properties with sensitivity to their architectural character while implementing efficient modern management practices.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622']
  },
  {
    name: 'Noble Square',
    slug: 'noble-square',
    description: 'Noble Square is a historic neighborhood at the crossroads of several vibrant Chicago communities, featuring landmark churches and a growing residential population. The area\'s condominium associations benefit from professional management that understands the neighborhood\'s evolving character. We provide responsive management to Noble Square properties navigating growth while preserving community identity.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622', '60642']
  },
  {
    name: 'Goose Island',
    slug: 'goose-island',
    description: 'Goose Island is a unique Chicago neighborhood undergoing a dramatic transformation from its industrial past into a modern mixed-use destination with new residential developments. Property management on Goose Island requires navigating new construction challenges and establishing association operations from the ground up. We specialize in helping newly developed Goose Island communities build strong management foundations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60642', '60622']
  },
  {
    name: 'Evanston',
    slug: 'evanston',
    description: 'Evanston is the North Shore\'s most vibrant lakefront city, home to Northwestern University, a thriving downtown, and an exceptional mix of vintage lakefront condominiums, mid-century co-ops, and modern transit-oriented developments. Property management in Evanston requires fluency with the city\'s own landlord-tenant and building regulations layered on top of Illinois condominium law. We serve Evanston associations with the responsive, detail-driven management its engaged, well-informed boards expect.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs', 'townhomes'],
    zipCodes: ['60201', '60202'],
    region: 'north-shore',
    localProof: [
      {
        title: 'A second rulebook',
        detail: 'Evanston layers its own property-maintenance standards and rental-registration rules on top of Illinois condominium law. We keep boards — and owners who lease their units — on the right side of both City Hall and the statute.',
      },
      {
        title: 'Lakefront vintage to downtown towers',
        detail: 'From vintage co-ops and courtyard condos near the lakefront to transit-oriented towers by the Davis Street Metra and CTA stops, Evanston\'s stock spans a century of construction. Our capital planning spans it too.',
      },
      {
        title: 'Engaged, well-informed boards',
        detail: 'Evanston boards read the financials. We deliver monthly reporting detailed enough for the university-town scrutiny this community is known for — and answer the follow-up questions gladly.',
      },
    ],
    localFaq: [
      {
        q: 'Does Evanston regulate condo associations differently than Chicago?',
        a: 'Evanston enforces its own property-standards and rental-registration ordinances alongside the Illinois Condominium Property Act, so compliance looks different than it does across the border in Chicago. We manage Evanston associations with those local requirements built into day-to-day operations.',
      },
      {
        q: 'Do you manage vintage co-ops and courtyard buildings in Evanston?',
        a: 'Yes. Evanston\'s vintage housing stock — lakefront co-ops, courtyard condominiums, and mid-century buildings — is central to our North Shore practice, with capital planning and specialty vendors suited to older construction.',
      },
    ]
  },
  {
    name: 'Skokie',
    slug: 'skokie',
    description: 'Skokie is one of Chicagoland\'s most diverse and well-run suburbs, with a strong stock of condominium buildings, townhome communities, and homeowner associations near the Yellow Line and Old Orchard corridor. Boards in Skokie value fiscal discipline and clear communication, and our management approach delivers both — transparent budgets, dependable maintenance, and multilingual resident support where communities need it.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60076', '60077'],
    region: 'north-shore'
  },
  {
    name: 'Glenview',
    slug: 'glenview',
    description: 'Glenview blends established tree-lined neighborhoods with newer master-planned communities like The Glen, creating steady demand for professional townhome and condominium association management. Associations here expect polished common areas, proactive reserve planning, and vendors who show up on time. We bring North Shore-calibre service to Glenview communities of every size, from boutique condo buildings to large multi-phase HOAs.',
    propertyTypes: ['townhomes', 'HOAs', 'condominiums'],
    zipCodes: ['60025', '60026'],
    region: 'north-shore'
  },
  {
    name: 'Wilmette',
    slug: 'wilmette',
    description: 'Wilmette is a premier North Shore village known for its lakefront beauty, top-rated schools, and meticulously maintained housing stock, including elegant vintage condominium buildings near the Metra and CTA. Boards in Wilmette hold high standards for appearance, communication, and financial stewardship. We manage Wilmette properties with the discretion and precision this distinguished community expects.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60091'],
    region: 'north-shore'
  },
  {
    name: 'Winnetka',
    slug: 'winnetka',
    description: 'Winnetka is among the most prestigious addresses on the North Shore, with landmark estates, refined village-center condominiums, and associations that expect white-glove attention to every detail. Property management here means premium vendor relationships, immaculate common areas, and board reporting polished enough for the financially sophisticated residents who call Winnetka home.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60093'],
    region: 'north-shore'
  },
  {
    name: 'Highland Park',
    slug: 'highland-park',
    description: 'Highland Park pairs dramatic lakefront ravines and a celebrated arts scene with a diverse mix of condominium buildings, townhome enclaves, and homeowner associations. Managing property here requires sensitivity to mature landscaping, ravine and bluff maintenance, and the high service expectations of long-tenured owners. We deliver attentive, proactive management worthy of one of the North Shore\'s flagship communities.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60035'],
    region: 'north-shore'
  },
  {
    name: 'Northbrook',
    slug: 'northbrook',
    description: 'Northbrook is a thriving suburb with an exceptional concentration of townhome and condominium associations built from the 1970s through today — many now facing major capital projects like roofing, siding, and private road replacement. Our strength in reserve planning and capital project oversight makes us a natural partner for Northbrook boards navigating aging infrastructure with confidence.',
    propertyTypes: ['townhomes', 'HOAs', 'condominiums'],
    zipCodes: ['60062'],
    region: 'north-shore'
  },
  {
    name: 'Glencoe',
    slug: 'glencoe',
    description: 'Glencoe is an intimate lakefront village renowned for the Chicago Botanic Garden, outstanding schools, and some of the North Shore\'s most carefully preserved residential architecture. Its boutique condominium buildings and small associations benefit from hands-on, personal management rather than big-firm bureaucracy — exactly the model Stellar was built on.',
    propertyTypes: ['condominiums', 'HOAs'],
    zipCodes: ['60022'],
    region: 'north-shore'
  },
  {
    name: 'Kenilworth',
    slug: 'kenilworth',
    description: 'Kenilworth is the smallest and one of the most exclusive villages on the North Shore, a designated historic district where property stewardship is taken seriously at every level. Associations here require discreet, meticulous management with uncompromising attention to architectural character and resident privacy — a standard we are proud to uphold.',
    propertyTypes: ['HOAs', 'condominiums'],
    zipCodes: ['60043'],
    region: 'north-shore'
  },
  {
    name: 'Lake Forest',
    slug: 'lake-forest',
    description: 'Lake Forest is the North Shore\'s grande dame — historic estates, a landmark Market Square, and a tradition of exacting property standards dating back more than a century. Condominium and homeowner associations in Lake Forest expect institutional-quality financial reporting with country-club-level service. We manage Lake Forest properties with the polish and rigor this storied community demands.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60045'],
    region: 'north-shore'
  },
  {
    name: 'Deerfield',
    slug: 'deerfield',
    description: 'Deerfield is a family-oriented North Shore suburb with strong schools, a walkable downtown, and a substantial base of townhome and condominium associations along the Milwaukee District North line. Boards here value straightforward communication, competitive vendor pricing, and budgets that hold. We give Deerfield communities dependable, professional management without the overhead of the national chains.',
    propertyTypes: ['townhomes', 'HOAs', 'condominiums'],
    zipCodes: ['60015'],
    region: 'north-shore'
  }
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getRelatedNeighborhoods(currentSlug: string, count: number = 3): Neighborhood[] {
  const current = getNeighborhoodBySlug(currentSlug);
  if (!current) return neighborhoods.slice(0, count);

  // Keep the local link graph geographically coherent. Chicago neighborhood
  // pages link to Chicago peers; North Shore pages link to North Shore peers.
  const regionalNeighborhoods = neighborhoods.filter((n) =>
    current.region === 'north-shore'
      ? n.region === 'north-shore'
      : n.region !== 'north-shore'
  );
  const currentIndex = regionalNeighborhoods.findIndex((n) => n.slug === currentSlug);

  const related: Neighborhood[] = [];
  const total = regionalNeighborhoods.length;

  for (let i = 1; related.length < count; i++) {
    const nextIndex = (currentIndex + i) % total;
    if (nextIndex !== currentIndex) {
      related.push(regionalNeighborhoods[nextIndex]);
    }
  }

  return related;
}
