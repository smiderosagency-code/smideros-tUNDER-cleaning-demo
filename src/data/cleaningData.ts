import { ServiceDetail, ChecklistItem, ReviewItem, FaqItem, AddOnOption } from '../types';

export const BUSINESS_INFO = {
  name: 'Thunder Cleaning Services OKC',
  tagline: 'Powerful Cleaning. Peaceful Living.',
  phone: '(405) 972-8473',
  phoneClean: '4059728473',
  email: 'info@thundercleaningservicesokc.com',
  address: '6425 Winchester Dr, Oklahoma City, OK 73162',
  originalWebsite: 'https://www.thundercleaningservicesokc.com/',
  originalBookingPortal: 'https://thundercleaningservicesokc.launch27.com/login',
  rating: 5.0,
  clientCount: '500+',
  serviceAreaName: 'Greater Oklahoma City Metro',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'standard',
    title: 'Standard House Cleaning',
    shortDescription: 'Comprehensive, recurring or one-time maintenance cleaning to keep your Oklahoma home spotless and healthy.',
    fullDescription: 'Our standard home cleaning takes care of everyday dust, dirt, surface grime, and clutter. Perfect for busy families and professionals who want a consistently fresh living environment without lifting a finger.',
    image: '/images/service-standard.jpg',
    bestFor: 'Routine upkeep, busy households, monthly resets',
    checklistHighlights: [
      'Dusting all reachable surfaces & picture frames',
      'Sanitizing kitchen countertops, sinks & appliance exteriors',
      'Scrubbing & disinfecting bathroom toilets, showers & vanity mirrors',
      'Vacuuming rugs & carpets; washing all hard surface floors',
      'Emptying trash receptacles & replacing liners',
      'Neatening beds & fluffing sofa cushions',
    ],
    startingPrice: 'From $135',
  },
  {
    id: 'deep',
    title: 'Deep House Cleaning',
    shortDescription: 'Intensive top-to-bottom scrub addressing neglected corners, built-up grime, baseboards, and tile buildup.',
    fullDescription: 'Our deep clean penetrates beneath the surface. We tackle built-up grease behind stove fixtures, lime and soap scum in shower tracks, detailed hand-wiped baseboards, door frames, and high-touch light switches.',
    image: '/images/service-deep-clean.jpg',
    bestFor: 'First-time clients, spring resets, homes uncleaned for 60+ days',
    checklistHighlights: [
      'Hand-washing all baseboards, door casings & trim',
      'Intensive scrubbing of shower tile grout & glass enclosures',
      'Deep degreasing of range hood vents & stovetops',
      'Wiping exterior & tops of kitchen cabinets',
      'Under-furniture vacuuming & detail dust edge work',
      'Spot cleaning light switch plates & interior doors',
    ],
    startingPrice: 'From $210',
  },
  {
    id: 'move_in_out',
    title: 'Move-In / Move-Out Cleaning',
    shortDescription: 'Turn-key vacant home sanitization designed to satisfy demanding landlord walkthroughs and real estate listings.',
    fullDescription: 'Moving in Oklahoma City is stressful enough without having to scrub ovens and baseboards. Our move-in/move-out clean covers every square inch of empty residential properties, ensuring total deposit protection and a sanitized fresh start.',
    image: '/images/service-move-in-out.jpg',
    bestFor: 'Tenants ending leases, home buyers/sellers, rental turnovers',
    checklistHighlights: [
      'Deep sanitization of empty cabinets, drawers & pantries',
      'Full interior/exterior appliance wipe-down',
      'Spot cleaning interior walls, baseboards & trim',
      'Window sills, tracks & interior glass cleaning',
      'Disinfecting closet shelving & laundry room stations',
      'Complete floor polishing, sanitization & vacuuming',
    ],
    startingPrice: 'From $260',
  },
  {
    id: 'recurring',
    title: 'Recurring Cleaning Membership',
    shortDescription: 'Scheduled maintenance with guaranteed technician pairing and up to 20% off regular cleaning rates.',
    fullDescription: 'Set your home on effortless autopilot. Choose weekly, bi-weekly, or monthly intervals. Recurring clients enjoy priority dispatch, customized cleaning checklists, and our 100% satisfaction re-clean guarantee.',
    image: '/images/hero-home.jpg',
    bestFor: 'Consistent peace of mind, working parents, pet owners',
    checklistHighlights: [
      'Weekly (20% off), Bi-Weekly (15% off), Monthly (10% off)',
      'Dedicated primary cleaning specialist for familiar consistency',
      'Flexible rescheduling with 48 hours notice',
      'Complimentary periodic deep details on rotating visits',
      'Zero cancellation lock-in contracts',
    ],
    startingPrice: 'From $115 / visit',
  },
  {
    id: 'apartment',
    title: 'Apartment & Condo Cleaning',
    shortDescription: 'Compact, efficient sanitization specifically calibrated for Oklahoma City lofts, mid-rises, and townhomes.',
    fullDescription: 'Designed for urban apartments and condos with compact footprints. We navigate building access, elevator logistics, and high-density living requirements while delivering five-star cleanliness tailored to your square footage.',
    image: '/images/service-standard.jpg',
    bestFor: 'Downtown OKC lofts, Midtown condos, suburban townhomes',
    checklistHighlights: [
      'Compact kitchen grease cutting & appliance shine',
      'Balcony sliding glass interior door cleaning',
      'Bathroom sanitization & odor neutralization',
      'Space-saving furniture dusting & rug freshening',
      'Quick turnaround times with building entry coordination',
    ],
    startingPrice: 'From $110',
  },
  {
    id: 'commercial',
    title: 'Commercial & Facility Cleaning',
    shortDescription: 'Dedicated business sanitation for offices, medical clinics, boutique retail, and creative studios across OKC.',
    fullDescription: 'Keep your workplace safe, hygienic, and client-ready. Unlike generic residential cleaning, our commercial pathway provides customized janitorial schedules, after-hours key-holding service, and transparent commercial scopes.',
    image: '/images/service-commercial.jpg',
    bestFor: 'Offices, medical suites, law firms, retail storefronts, agencies',
    checklistHighlights: [
      'Restroom sanitization & consumable restocking',
      'Breakroom & kitchen sink disinfection, microwave cleaning',
      'Reception, conference rooms & high-touch point disinfection',
      'Trash & recycling collection and consolidation',
      'Hard floor buffing, vacuuming & glass partition shine',
      'After-hours, weekend, or daytime porter options',
    ],
    startingPrice: 'Custom quote per facility',
  },
];

export const ADD_ONS: AddOnOption[] = [
  { id: 'fridge', name: 'Inside Refrigerator', price: 35, description: 'Remove racks, scrub food spills & sanitize shelves', iconName: 'Refrigerator' },
  { id: 'oven', name: 'Inside Oven', price: 40, description: 'Degrease baked-on residue, clean racks and glass door', iconName: 'Flame' },
  { id: 'windows', name: 'Interior Windows', price: 45, description: 'Squeegee interior glass, tracks & ledges (up to 8 windows)', iconName: 'Maximize2' },
  { id: 'cabinets', name: 'Inside Kitchen Cabinets', price: 50, description: 'Vacuum crumbs, wipe down interior pantry shelves', iconName: 'Archive' },
  { id: 'baseboards', name: 'Baseboards Deep Scrub', price: 40, description: 'Hand-wiped detailing of all room baseboards', iconName: 'Sparkles' },
  { id: 'laundry', name: 'Load of Laundry / Fold', price: 25, description: 'Wash, dry, and neatly fold one load of linens/towels', iconName: 'Shirt' },
];

export const CHECKLIST_MATRIX: ChecklistItem[] = [
  // Kitchen
  { area: 'Kitchen', task: 'Wipe & sanitize countertops and backsplash', standard: true, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Clean exterior of refrigerator, dishwasher, oven', standard: true, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Scrub and disinfect sink & polish chrome faucet', standard: true, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Clean microwave interior and exterior turntable', standard: true, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Degrease range hood vent & exterior stovetop dials', standard: false, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Wipe exterior cabinet doors and hardware', standard: false, deep: true, moveInOut: true },
  { area: 'Kitchen', task: 'Clean inside empty cabinets and drawers', standard: false, deep: false, moveInOut: true },

  // Bathrooms
  { area: 'Bathrooms', task: 'Disinfect toilet bowl, seat, tank and base', standard: true, deep: true, moveInOut: true },
  { area: 'Bathrooms', task: 'Scrub bathtub, shower walls & rinse clean', standard: true, deep: true, moveInOut: true },
  { area: 'Bathrooms', task: 'Clean & polish vanity, sinks and mirrors', standard: true, deep: true, moveInOut: true },
  { area: 'Bathrooms', task: 'Detailed tile grout scrub & soap scum removal', standard: false, deep: true, moveInOut: true },
  { area: 'Bathrooms', task: 'Clean shower door track & limescale removal', standard: false, deep: true, moveInOut: true },
  { area: 'Bathrooms', task: 'Wipe inside medicine cabinet and vanity drawers', standard: false, deep: false, moveInOut: true },

  // Living & Bedrooms
  { area: 'Living & Bedrooms', task: 'Dust all furniture surfaces, lamps & electronics', standard: true, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Vacuum all rugs, carpets and under light furniture', standard: true, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Mop all hard floors (wood, laminate, tile)', standard: true, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Empty wastebaskets & replace trash liners', standard: true, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Hand-wipe baseboards, door frames & window sills', standard: false, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Dust ceiling fans, vents & light fixtures within reach', standard: false, deep: true, moveInOut: true },
  { area: 'Living & Bedrooms', task: 'Wipe closet shelving & sanitize interior doors', standard: false, deep: false, moveInOut: true },
];

export const SERVICE_AREAS_OKC = [
  { city: 'Oklahoma City', zips: ['73162', '73116', '73120', '73132', '73142', '73134', '73103', '73102', '73106', '73118', '73107', '73170', '73159'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Edmond', zips: ['73013', '73034', '73025', '73003'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Moore', zips: ['73160', '73165'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Norman', zips: ['73069', '73071', '73072'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Yukon', zips: ['73099', '73085'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Mustang', zips: ['73064'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Nichols Hills', zips: ['73116', '73120'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'The Village', zips: ['73120'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Midwest City', zips: ['73110', '73130'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Del City', zips: ['73115'], status: 'Full Daily Service', time: 'Mon - Sat' },
  { city: 'Bethany', zips: ['73008'], status: 'Full Daily Service', time: 'Mon - Sat' },
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    location: 'Edmond, OK',
    rating: 5,
    serviceType: 'Recurring Bi-Weekly Clean',
    date: 'Recent Client Review',
    text: 'Thunder Cleaning has completely changed our family routine. With two kids and a Golden Retriever, our wood floors used to be a constant battle. The team arrives on time, brings their own supplies, and leaves the house smelling fresh without overwhelming chemicals. Worth every single penny.',
    source: 'Verified Homeowner',
  },
  {
    id: 'rev-2',
    name: 'David & Rachel T.',
    location: 'Nichols Hills, OKC',
    rating: 5,
    serviceType: 'Deep House Cleaning',
    date: 'Recent Client Review',
    text: 'We booked a deep clean before hosting out-of-town family for Thanksgiving. They wiped every baseboard, polished our kitchen marble until it gleamed, and made the shower glass look brand new. Professional, respectful of our home, and thorough.',
    source: 'Verified Homeowner',
  },
  {
    id: 'rev-3',
    name: 'Marcus K.',
    location: 'Downtown OKC / Midtown',
    rating: 5,
    serviceType: 'Move-Out Cleaning',
    date: 'Recent Client Review',
    text: 'Needed a move-out clean on short notice to ensure my security deposit was returned. The landlord walked through with a clipboard and could not find a single flaw. Got 100% of my deposit back in 3 days. Thunder Cleaning delivered exactly what was promised.',
    source: 'Verified Renter',
  },
  {
    id: 'rev-4',
    name: 'Elena R., Practice Manager',
    location: 'Northwest OKC',
    rating: 5,
    serviceType: 'Commercial Office Sanitation',
    date: 'Recent Client Review',
    text: 'Finding a reliable commercial cleaner for our medical office suite was difficult until we switched to Thunder Cleaning. Their team follows our sanitation checklist diligently, locks up securely after hours, and maintains spotless restrooms.',
    source: 'Verified Commercial Client',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'services',
    question: 'What is the main difference between Standard and Deep Cleaning?',
    answer: 'Standard cleaning focuses on maintaining a healthy, tidy home through surface dusting, kitchen sanitization, bathroom scrubbing, vacuuming, and mopping. Deep cleaning goes significantly further by hand-washing all baseboards, scrubbing tile grout, degreasing stove hood vents, wiping doors and frames, and targeting built-up grime in areas that aren\'t touched weekly.',
  },
  {
    category: 'guarantee',
    question: 'How does your 100% Satisfaction Guarantee work?',
    answer: 'We stand firmly behind our work. If any item on our agreed cleaning checklist is missed or does not meet your expectations, simply contact us within 24 to 48 hours. We will promptly dispatch a cleaner back to your home to re-clean those specific areas at absolutely no additional charge.',
  },
  {
    category: 'services',
    question: 'Do your cleaners bring their own supplies and equipment?',
    answer: 'Yes! Our cleaning professionals arrive equipped with commercial-grade vacuums with HEPA filtration, microfiber cloths, extension dusters, mops, and professional cleaning solutions. If you prefer specific eco-friendly products or have delicate surfaces (such as unsealed natural stone), just let us know.',
  },
  {
    category: 'pricing',
    question: 'Does requesting a quote automatically book or charge me?',
    answer: 'No. Submitting an inquiry creates a customized estimate and coordinates your preferred time window. Our Oklahoma City office contacts you to confirm all details, answer any questions, and schedule your appointment. No payments or credit card charges are processed until you officially confirm.',
  },
  {
    category: 'preparation',
    question: 'Do I need to be home while the cleaners are working?',
    answer: 'That is entirely up to you. Many of our Oklahoma clients prefer to be present for the first visit to show the team around. Afterwards, many provide a secure garage code, lockbox key, or leave entry instructions so they can return home to a clean space.',
  },
  {
    category: 'services',
    question: 'Are your cleaning professionals insured and background-checked?',
    answer: 'Yes. Thunder Cleaning Services OKC enforces thorough criminal background checks, identity verification, and carries comprehensive general liability insurance so you have complete peace of mind while we care for your property.',
  },
  {
    category: 'services',
    question: 'How do commercial cleaning inquiries differ from residential bookings?',
    answer: 'Commercial properties have unique requirements such as after-hours scheduling, specialized waste handling, and recurring commercial invoicing. When you select our Commercial Cleaning pathway, our operations manager coordinates a tailored scope and optional facility walk-through rather than using a rigid residential bedroom count.',
  },
];
