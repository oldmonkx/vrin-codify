/**
 * CONTENT DRAFT
 *
 * Edit this file with your final copy first.
 * We can later wire these values into the live sections or copy them over section by section.
 *
 * Image paths below match the current assets in /public.
 * If you replace images directly in /public with the same filenames, you do not need code changes.
 */

export const contentDraft = {
  interactions: {
    modalTitles: {
      bookSiteVisit: 'Book a Site Visit',
      downloadBrochure: 'Download Brochure',
      getPriceSheet: 'Get Price Sheet',
      downloadSpecifications: 'Download Specifications',
      downloadFloorPlans: 'Download Floor Plans',
    },
    leadForms: {
      heroInline: {
        title: 'Hero Enquiry Form',
        entryPoint: 'hero-inline-form',
      },
      modal: {
        entryPoint: 'lead-modal',
      },
    },
  },

  header: {
    logoAlt: 'Namishree',
    navLinks: [
      { label: 'Overview', href: '#overview' },
      { label: 'Residences', href: '#configurations' },
      { label: 'Amenities', href: '#amenities' },
      { label: 'Location', href: '#location' },
    ],
    ctaMobile: 'Book Visit',
    ctaDesktop: 'Book Site Visit',
    mobileMenuCta: 'Book Site Visit',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    closeOverlayLabel: 'Close menu overlay',
  },

  seo: {
    title: 'Vrindavan by Namishree · Kondapur, Hyderabad',
    description:
      'Live in the heart of Kondapur. 8 Towers · G+52 · 9.5 acres · 1846 premium residences. TGRERA P02400008653.',
    ogTitle: 'Vrindavan by Namishree · Kondapur',
    ogDescription:
      'Sky-high 2/3/4 BHK residences across 9.5 acres in Kondapur, Hyderabad.',
  },

  hero: {
    backgroundImage: '/optimized/hero-desktop.webp',
    backgroundImageMobile: '/optimized/hero-mobile.webp',
    logo: '/vrindavan-logo-white.svg',
    eyebrow: '',
    headingLine1: 'Luxury 2/3/4 BHKs',
    headingLine2: 'Minutes Away From Work',
    body:
      'Live under open skies, surrounded by grand architecture and a calm everyday lifestyle that feels easy, elevated, and truly complete.',
    stats: [
      { label: 'Spread Across', value: '9.5', suffix: 'acres' },
    ],
    reraLabel: 'TG RERA Registration No.',
    reraNumber: 'P02400008653',
    reraLinkLabel: 'Verify on rera.telangana.gov.in',
    form: {
      title: 'ENQUIRE NOW',
      subtitle: 'Discover Your Dream Home in Kondapur',
      namePlaceholder: 'Name',
      phonePlaceholder: 'Phone Number',
      configurationPlaceholder: 'Select Configuration',
      configurationOptions: ['2 BHK', '3 BHK', '4 BHK'],
      consent:
        'I authorize Namishree Group and its representatives to contact me via email, SMS, WhatsApp, Google RCS and phone call. This will override my DND/ NDNC registration.',
      submitLabel: 'Download Brochure',
    },
  },

  leadModal: {
    defaultTitle: 'Get Exclusive Access',
    subtitle: 'Instantly receive the brochure, price sheet & floor plans',
    fullNamePlaceholder: 'Full Name',
    phonePlaceholder: 'Phone Number',
    submitLabel: 'Send Me the Details',
    submittingLabel: 'Sending...',
    privacyLabel: 'Your details are private',
    countryCodePrefix: '+91',
    fallbackError:
      'We could not submit your details right now. Please try again or contact us directly.',
  },

  projectHighlights: {
    title: 'Project Highlights',
    items: [
      {
        value: '8',
        label: 'Iconic Towers',
      },
      {
        value: '1846',
        label: 'Premium Residences',
      },
      {
        value: '1475 - 3375',
        label: 'Sq.ft Unit Sizes',
      },
      {
        value: '1,35,000',
        label: 'Sft Clubhouse',
      },
      {
        value: '50+',
        label: 'Lifestyle Amenities',
      },
      {
        value: 'Kondapur',
        label: 'Prime Address',
      },
    ],
  },

  configurations: {
    eyebrow: 'Curated Living',
    headingLine1: 'Find Your',
    headingLine2: 'Perfect Home',
    body:
      'Thoughtfully crafted 2, 3 & 4 BHK residences in Kondapur, surrounded by sky-high views, lush open spaces, and a 1.35 lakh sq.ft clubhouse lifestyle.',
    featureImage: '/optimized/configurations-tower.webp',
    panelTitle: 'Project Configurations',
    cards: [
      {
        type: '2 BHK',
        size: '1475 & 1690 Sq.Ft',
        towers: 'E, F, G, H',
        image: '/optimized/config-2bhk-plan.svg',
        cta: 'Get Price Sheet',
      },
      {
        type: '3 BHK',
        size: '2190 & 2400 Sq.Ft',
        towers: 'E, F, G, H',
        image: '/optimized/config-3bhk-plan.svg',
        cta: 'Get Price Sheet',
      },
      {
        type: '4 BHK Premium',
        size: '2790 – 3375 Sq.Ft',
        towers: 'A, B, C, D',
        image: '/optimized/config-4bhk-plan.svg',
        cta: 'Get Price Sheet',
      },
    ],
  },

  highlights: {
    headingLine1: 'Where every detail',
    headingLine2: 'is a luxury.',
    body:
      'Every corner is designed with intention — from double-height lobbies and open courtyards to homes that rise above the everyday.',
    cards: [
      {
        title: 'Double Height Lobbies',
        stat: 'Grand Arrival',
        copy: 'Grand entrance lobbies designed with soaring volumes, elegant finishes, and a refined sense of arrival that welcomes you home in style.',
        image: '/optimized/double-height-lobbies.jpg',
      },
      {
        title: 'Green Quiet',
        stat: '9.5 Acres',
        copy: 'Landscaped courtyards, shaded walkways, water features, and calm green pockets create a peaceful retreat within the community, giving every day a quieter, more refreshing rhythm.',
        image: '/optimized/walkway.jpg',
      },
      {
        title: 'Home in the Sky',
        stat: '2, 3 & 4 BHK',
        copy: 'Thoughtfully planned 2, 3 & 4 BHK homes with expansive views, elegant finishes, and generous spaces that bring comfort, privacy, and a sense of elevation to everyday living.',
        image: '/optimized/home-sky.webp',
      },
    ],
  },

  amenities: {
    headingLine1: 'Carefully curated',
    headingLine2: 'lifestyle',
    headingLine3: 'for your loved ones',
    description:
      'A beautifully planned lifestyle environment where nature, leisure, and community come together. With open greens, curated outdoor spaces, and family-friendly amenities, every moment is designed to feel more peaceful, meaningful, and complete.',
    cta: 'Download Brochure',
    groups: [
      {
        title: 'NATURE',
        fullTitle: 'Outdoors & Nature',
        image: '/optimized/outdoors.jpg',
        items: [
          'Central Courtyard',
          'Amphitheatre',
          'Party Lawn',
          'Pond',
          'Youth Plaza',
          'Meditation Pavilion',
        ],
      },
      {
        title: 'SOCIAL',
        fullTitle: 'Social & Lifestyle',
        image: '/optimized/convenience-lifestyle.jpg',
        items: [
          'Entrance Plaza',
          'Concierge Desk',
          'Banquet Hall',
          'Co-Working Spaces',
          'Premium Guest Suites',
        ],
      },
      {
        title: 'FITNESS',
        fullTitle: 'Sports & Fitness',
        image: '/optimized/gym-rope.jpg',
        items: [
          'Swimming Pool',
          "Kids' Pool",
          'Indoor Gym',
          'Badminton Courts',
          'Tennis Courts',
        ],
      },
      {
        title: 'CONVENIENCE',
        fullTitle: 'Convenience',
        image: '/optimized/elders.jpg',
        items: [
          'Centralised Kitchen',
          'Pharmacy',
          'Departmental Store',
          'School Bus Stop',
          'EV Charging',
        ],
      },
    ],
  },

  floorPlans: {
    headingLine1: 'Thoughtfully Planned',
    headingLine2: 'Residences',
    body:
      'Get exclusive access to high-resolution master plans, individual unit layouts, detailed dimensions, and facing directions for all 2, 3 & 4 BHK residences.',
    includedLabel: 'Included in the download:',
    includedItems: [
      'Complete Project Master Plan',
      '2, 3 & 4 BHK Detailed Floor Plans',
      'Block & Tower Orientations',
    ],
    previewImage: '/optimized/floorplan-preview.webp',
    lockedTitle: 'Download Floor Plans',
    lockedBody:
      'Get access to detailed layouts, unit sizes, tower orientation, and master plan details for Vrindavan.',
    lockedCta: 'Download Floor Plans',
  },

  location: {
    headingLine1: 'Location',
    headingLine2: 'Highlights',
    nearbyLabel: 'Nearby in Minutes',
    body:
      'Designed around convenience and connectivity, this address brings the city closer without compromising on calm. Whether it’s work, school, healthcare, shopping, or leisure, every essential part of daily life feels easier to reach.',
    proximities: [
      { label: 'HITECH City', time: '3 min' },
      { label: 'Financial District', time: '8 min' },
      { label: 'Sancta Maria School', time: '2 min' },
      { label: 'KIMS Hospital', time: '10 min' },
      { label: 'University of Hyderabad', time: '12 min' },
      { label: 'Gachibowli', time: '10 min' },
      { label: 'TCS / Infosys', time: '10-15 min' },
      { label: 'Mumbai Highway', time: 'Direct' },
    ],
  },

  specifications: {
    mobileHeadingLine1: 'Project',
    mobileHeadingLine2: 'Specifications',
    desktopHeadingLine1: 'Project',
    desktopHeadingLine2: 'Specifications',
    body:
      'Built with advanced structural engineering, premium finishes, branded fittings, and refined specifications that ensure strength, comfort, and long-lasting luxury.',
    downloadLabel: 'Download Full Specs',
    viewMoreMobileLabel: 'View More Specs',
    viewAllDesktopLabel: 'View All Specifications',
    showLessLabel: 'Show Less',
    visible: [
      {
        title: 'Structure',
        desc: 'RCC shear wall technology with M40-grade concrete; seismically designed for zone II compliance',
      },
      {
        title: 'Flooring | Living & Dining',
        desc: '1200 x 1800 mm premium vitrified tiles in living, dining and master bedroom',
      },
      {
        title: 'Flooring | Bedrooms',
        desc: '800 x 1200 mm vitrified tiles in all bedrooms; anti-skid ceramic tiles on balconies',
      },
      {
        title: 'Walls & Paint',
        desc: 'Internal: gypsum plaster with premium acrylic emulsion; external: weatherproof texture paint',
      },
    ],
    hidden: [
      {
        title: 'Main Door',
        desc: '8-ft engineered teak wood frame with decorative laminate and heavy-duty hardware',
      },
      {
        title: 'Windows',
        desc: 'UPVC sliding windows with tinted glass; MS railing with toughened glass on all balconies',
      },
      {
        title: 'Kitchen',
        desc: 'Black galaxy granite counter, SS sink, ceramic dado tiling up to 600 mm, provision for chimney and RO',
      },
      {
        title: 'Bathrooms',
        desc: 'Floor-to-ceiling glazed tiles; branded CP fittings (Jaquar or equivalent); wall-hung EWC',
      },
      {
        title: 'Electrical',
        desc: 'MCB / ELCB distribution panel; concealed copper wiring; AC power points in all bedrooms and living room',
      },
      {
        title: 'Power Backup',
        desc: '100% DG backup for all common areas and lifts; limited backup for each apartment',
      },
      {
        title: 'Lifts',
        desc: '2 high-speed passenger lifts + 1 service lift per tower (Otis / Mitsubishi or equivalent)',
      },
      {
        title: 'Security',
        desc: 'Video door phone, perimeter CCTV, boom barriers at entry/exit, 24 x 7 manned security',
      },
      {
        title: 'Parking',
        desc: '4-level stilt + basement car parking; EV charging provision at designated bays',
      },
      {
        title: 'Water Supply',
        desc: 'WTP to potable standards + sewage treatment plant (STP); underground sump with overhead tank per tower',
      },
      {
        title: 'Fire Safety',
        desc: 'Pressurised fire hydrant system, automatic sprinklers, smoke detectors and dedicated fire escape stairway on every floor',
      },
      {
        title: 'Landscaping',
        desc: 'Professionally designed podium garden, water features, tree-lined promenades across 9.5 acres',
      },
      {
        title: 'Smart Home',
        desc: 'Pre-wired for home automation; intercom network connecting apartments to lobby',
      },
    ],
  },

  mobileBottomBar: {
    phoneHref: 'tel:9177634477',
    phoneLabel: 'Call',
    whatsappHref: 'https://wa.me/919177634477',
    whatsappLabel: 'WhatsApp',
    brochureLabel: 'Brochure',
  },

  footer: {
    headingLine1: 'Your Sky-High',
    headingLine2: 'Life Awaits',
    body: 'Limited units available across 8 towers. Speak to an advisor today.',
    primaryCta: 'Book a Site Visit',
    callLabel: 'Call: 9177634477',
    otherProjectsLabel: 'Other Projects by Namishree',
    otherProjects: [
      {
        name: 'Aria',
        location: '@Nagole',
        type: '3 BHK',
        size: '1650 & 2100 Sft',
        details: ['5 Towers · 625 Units', '25 Floors · 6.15 Acres', '50,000 Sft Clubhouse'],
        rera: 'RERA: P02400006832',
        image: '/optimized/aria-desktop.jpg',
        imageMobile: '/optimized/aria-mobile.jpg',
      },
      {
        name: 'Trident',
        location: '@Vanasthalipuram',
        type: '3 BHK',
        size: '1650 – 1955 Sft',
        details: ['3 Towers · 330 Units', 'G+23 Floors · 3.5 Acres', '35,000 Sft Clubhouse'],
        rera: 'RERA: P02500003864',
        badge: 'Ready for possession',
        image: '/optimized/trident-desktop.jpg',
        imageMobile: '/optimized/trident-mobile.jpg',
      },
      {
        name: 'Jewel',
        location: '@L.B Nagar',
        type: '2 & 3 BHK',
        size: '1635 – 2305 Sft',
        details: ['154 Units · G+22 Floors', '1.65 Acres', '10,000 Sft Clubhouse'],
        rera: 'RERA: P02500007768',
        image: '/optimized/jewel-desktop.jpg',
        imageMobile: '/optimized/jewel-mobile.jpg',
      },
      {
        name: 'Twin Towers',
        location: '@Champapet',
        type: '2 & 3 BHK',
        size: '1285 – 1855 Sft',
        details: ['2 Towers · G+22 Floors', '3 Acres · 35,000 Sft Clubhouse'],
        rera: 'RERA: P02500001997',
        badge: 'Ready To Move',
        image: '/optimized/twin-towers-desktop.jpg',
        imageMobile: '/optimized/twin-towers-mobile.jpg',
      },
    ],
    contactLabel: 'Contact',
    email: 'info@namishree.com',
    website: 'www.namishree.com',
    officeLabel: 'Corporate Office',
    officeLines: [
      '15th Floor, T19 Towers, Ranigunj',
      'Secunderabad, Hyderabad – 500003',
    ],
    trustBar: [
      'TGRERA: P02400008653',
      '9.5 Acre Township',
      '1846 Homes',
      'G+49 Floors',
      'Namishree',
    ],
    legalLinks: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    disclaimerHeading: 'Disclaimer:',
    disclaimerParagraph1:
      "This advertisement is for informational purposes only and does not constitute an offer or agreement to sell. All visuals, renders, images, floor plans and specifications shown are artist's impressions and are indicative in nature only. Actual product may differ from what is depicted. Sizes mentioned are approximate and subject to change without prior notice. Amenities, features, specifications and project details are proposed and may be altered, modified or withdrawn at the developer's sole discretion in accordance with applicable laws. Buyers are advised to visit the site, verify all details independently and refer to the registered sale agreement for final terms before making any purchase decision.",
    disclaimerParagraph2:
      'Project registered under TG RERA bearing No. P02400008653. For details visit rera.telangana.gov.in. Layout / Building Permission No. File No. 042365/SKP/R1/U6/HMDA. Promoter: Namishree Infrastructure Pvt. Ltd., 15th Floor, T19 Towers, Ranigunj, Secunderabad, Hyderabad – 500003.',
  },

  thankYou: {
    namishreeLogo: '/namishree-logo-color.svg',
    vrindavanLogo: '/vrindavan-logo-color.svg',
    heading: 'Thank you for your interest.',
    body:
      'Our team has received your details and will get in touch with you shortly.',
    callLabel: 'Call Sales Team',
    whatsappLabel: 'WhatsApp Us',
    footerLabel: 'Vrindavan by Namishree',
  },
} as const;
