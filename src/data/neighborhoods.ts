export interface Neighborhood {
  name: string;
  slug: string;
  description: string;
  propertyTypes: string[];
  zipCodes: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    name: 'Lincoln Park',
    slug: 'lincoln-park',
    description: 'Lincoln Park features some of Chicago\'s most desirable residential properties, from vintage walk-ups to luxury high-rises along the lakefront. Our property management team understands the unique demands of this affluent neighborhood, where well-maintained common areas and responsive service are expected. We help Lincoln Park boards maintain property values in one of the city\'s most competitive real estate markets.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs', 'high-rises'],
    zipCodes: ['60614', '60610']
  },
  {
    name: 'Lakeview',
    slug: 'lakeview',
    description: 'Lakeview is a vibrant lakefront neighborhood with a diverse mix of vintage courtyard buildings, mid-rises, and newer construction. Property management here requires balancing the needs of a dynamic resident population with the preservation of historic building character. Our team excels at managing the varied building types that make Lakeview one of Chicago\'s most popular neighborhoods.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60657', '60613']
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
    zipCodes: ['60660', '60640']
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
    description: 'Lincoln Square blends old-world European charm with a thriving arts and dining scene centered around its iconic town square. The neighborhood features a healthy mix of vintage courtyard buildings and newer townhome developments. Our team understands the community-oriented spirit of Lincoln Square and delivers management services that support board goals and resident satisfaction.',
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
    zipCodes: ['60647', '60622']
  },
  {
    name: 'Wicker Park',
    slug: 'wicker-park',
    description: 'Wicker Park is a cultural hotspot with a thriving nightlife scene, acclaimed restaurants, and stunning Victorian-era architecture. Managing properties in Wicker Park means balancing the energy of a bustling entertainment district with residents\' need for peaceful living. Our experienced team navigates these dynamics while keeping buildings in top condition.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60622', '60647']
  },
  {
    name: 'Logan Square',
    slug: 'logan-square',
    description: 'Logan Square has become one of Chicago\'s most dynamic neighborhoods, with its iconic boulevard system and rapidly evolving dining and arts scene. The area features everything from classic Chicago greystones to new mid-rise developments. We provide forward-thinking property management that helps Logan Square associations adapt to the neighborhood\'s exciting growth.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60647', '60618']
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
    zipCodes: ['60654', '60611']
  },
  {
    name: 'Streeterville',
    slug: 'streeterville',
    description: 'Streeterville is a prestigious lakefront neighborhood home to iconic high-rises, world-class shopping on the Magnificent Mile, and Northwestern\'s downtown campus. Managing properties here requires sophisticated expertise in large-scale high-rise operations and luxury amenity management. We are trusted by Streeterville boards to deliver institutional-quality management with a personal touch.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60611']
  },
  {
    name: 'Gold Coast',
    slug: 'gold-coast',
    description: 'The Gold Coast is Chicago\'s most exclusive residential neighborhood, featuring historic mansions, landmark buildings, and luxury high-rises along Lake Shore Drive. Property management here sets the highest standard, requiring expertise in historic preservation, premium vendor relationships, and discreet, professional service. We are proud to manage some of the Gold Coast\'s most distinguished addresses.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60610', '60611']
  },
  {
    name: 'Old Town',
    slug: 'old-town',
    description: 'Old Town is one of Chicago\'s oldest and most charming neighborhoods, known for its comedy clubs, historic row houses, and the iconic Old Town Triangle. Property management here involves caring for architecturally significant buildings while meeting modern resident expectations. Our experience with vintage properties makes us an excellent fit for Old Town associations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60610', '60614']
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
    zipCodes: ['60605', '60616']
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
    zipCodes: ['60607', '60661']
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
    zipCodes: ['60631', '60068']
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
    description: 'North Park is a serene neighborhood bordered by the North Branch of the Chicago River, home to North Park University and beautiful nature preserves. The area features a mix of condominium associations and townhome communities in a peaceful residential setting. We provide thoughtful property management that complements North Park\'s tranquil character and strong sense of community.',
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
    name: 'Peterson Park',
    slug: 'peterson-park',
    description: 'Peterson Park is a quiet residential enclave on the far north side, popular with families seeking good schools and safe streets. The area features well-established condominium and homeowner associations that value consistent, reliable service. We provide the steady, professional management that Peterson Park communities depend on to maintain their welcoming residential character.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60659', '60645']
  },
  {
    name: 'Budlong Woods',
    slug: 'budlong-woods',
    description: 'Budlong Woods is a peaceful north side neighborhood known for its tree-canopied streets and strong neighborhood association. The area features a mix of smaller condominium buildings and townhome communities. We offer attentive property management scaled to the neighborhood\'s intimate building sizes, providing personalized service that larger firms often cannot match.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60625']
  },
  {
    name: 'Arcadia Terrace',
    slug: 'arcadia-terrace',
    description: 'Arcadia Terrace is a charming pocket neighborhood on the north side with well-maintained residential streets and a strong community identity. The area features boutique condominium buildings and townhome associations that appreciate personalized management attention. We bring dedicated service to Arcadia Terrace properties, ensuring each association receives the focused care it deserves.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60625', '60640']
  },
  {
    name: 'Bowmanville',
    slug: 'bowmanville',
    description: 'Bowmanville is a hidden gem on the north side, tucked between Lincoln Square and Andersonville with a cozy, village-like atmosphere. The area features charming condominium conversions and smaller associations that value responsive, personalized management. We serve Bowmanville communities with the hands-on approach that smaller buildings need to run smoothly.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60625', '60640']
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
    description: 'Mayfair is a stable residential neighborhood on the northwest side with convenient access to major transportation corridors. The area features a mix of condominium buildings and townhome communities seeking quality management and responsive service. We deliver reliable, professional property management that helps Mayfair associations steward their budgets with confidence.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60630', '60646']
  },
  {
    name: 'North Mayfair',
    slug: 'north-mayfair',
    description: 'North Mayfair is a quiet residential pocket on the far northwest side, popular with families and longtime residents who appreciate its neighborhood stability. The area has several condominium and homeowner associations that rely on professional management for smooth operations. We serve North Mayfair with dependable management focused on maintaining property values and community satisfaction.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60646']
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
    description: 'Austin is Chicago\'s largest neighborhood by population, featuring a diverse housing stock and significant ongoing investment in community revitalization. The area has a growing number of condominium associations and townhome communities seeking professional guidance. We support Austin\'s development with accessible, community-focused property management that helps associations build value.',
    propertyTypes: ['condominiums', 'HOAs', 'townhomes'],
    zipCodes: ['60644', '60651']
  },
  {
    name: 'Oak Park Adjacent',
    slug: 'oak-park-adjacent',
    description: 'The Oak Park adjacent area bridges Chicago\'s west side with the architecturally rich suburb of Oak Park, offering convenient access to both communities. Properties here benefit from the spillover appeal of Oak Park\'s Frank Lloyd Wright heritage and vibrant downtown. We manage associations in this border area with attention to the unique advantages and opportunities this location provides.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60644', '60302']
  },
  {
    name: 'Lakeview East',
    slug: 'lakeview-east',
    description: 'Lakeview East offers stunning lakefront living with direct access to the lakefront trail, harbors, and vibrant Belmont Harbor. The area features a mix of vintage walk-ups and modern high-rises that cater to a diverse resident community. We manage Lakeview East properties with an understanding of lakefront building challenges including wind exposure and moisture management.',
    propertyTypes: ['condominiums', 'high-rises', 'HOAs'],
    zipCodes: ['60657', '60613']
  },
  {
    name: 'Boystown',
    slug: 'boystown',
    description: 'Boystown, officially Northalsted, is a historic and vibrant neighborhood recognized as one of the first officially designated LGBTQ+ neighborhoods in the United States. The area features well-maintained condominium buildings and an active, engaged resident community. We provide inclusive, community-oriented property management that reflects Boystown\'s welcoming spirit and cultural significance.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60657']
  },
  {
    name: 'Wrigleyville',
    slug: 'wrigleyville',
    description: 'Wrigleyville is the iconic neighborhood surrounding Wrigley Field, where property management must account for the unique impacts of major league baseball and year-round entertainment events. Buildings here face special challenges including event-day parking, noise management, and seasonal foot traffic. We have deep experience managing properties in Wrigleyville\'s one-of-a-kind environment.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60613']
  },
  {
    name: 'Sheffield',
    slug: 'sheffield',
    description: 'Sheffield is an upscale neighborhood nestled between Lincoln Park and DePaul University, known for its beautiful tree-lined streets and historic homes. The area features elegant condominium conversions and townhome communities with discerning residents. We provide polished, professional property management that matches Sheffield\'s refined residential character and high property values.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60614']
  },
  {
    name: 'DePaul',
    slug: 'depaul',
    description: 'The DePaul neighborhood surrounds DePaul University\'s Lincoln Park campus, creating a dynamic mix of student energy and established residential living. Property management here requires balancing the needs of owner-occupants with the rhythm of a university neighborhood. We help DePaul area associations maintain high standards while navigating the unique dynamics of campus-adjacent living.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60614', '60657']
  },
  {
    name: 'Ranch Triangle',
    slug: 'ranch-triangle',
    description: 'Ranch Triangle is an exclusive pocket neighborhood within Lincoln Park, bounded by Clybourn, Armitage, and Sheffield with a tight-knit community feel. The area features premium townhomes and condominiums in one of Chicago\'s most desirable settings. We deliver boutique property management tailored to Ranch Triangle\'s intimate scale and premium residential expectations.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60614']
  },
  {
    name: 'Wrightwood',
    slug: 'wrightwood',
    description: 'Wrightwood is a prestigious residential area within Lincoln Park, featuring landmark homes and upscale condominium buildings along the neighborhood\'s gracious tree-lined streets. Property management in Wrightwood demands exceptional attention to detail and proactive maintenance of high-value properties. We serve Wrightwood associations with the elevated management standards this distinguished area requires.',
    propertyTypes: ['condominiums', 'townhomes', 'HOAs'],
    zipCodes: ['60614']
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
  }
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getRelatedNeighborhoods(currentSlug: string, count: number = 3): Neighborhood[] {
  const currentIndex = neighborhoods.findIndex((n) => n.slug === currentSlug);
  if (currentIndex === -1) return neighborhoods.slice(0, count);

  const related: Neighborhood[] = [];
  const total = neighborhoods.length;

  for (let i = 1; related.length < count; i++) {
    const nextIndex = (currentIndex + i) % total;
    if (nextIndex !== currentIndex) {
      related.push(neighborhoods[nextIndex]);
    }
  }

  return related;
}
