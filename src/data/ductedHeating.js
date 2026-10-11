// Whole-home ducted heating across the brands we install. Sits under
// /heating because that is what a customer is shopping for — see the same
// reasoning on src/data/highwall.js. Brand sections start with no systems
// listed; add images (with a link once each system has its own page) the
// same way src/data/highwall.js does once there is content to show.
//
// tagline is empty because the hero title alone already carries the page's
// marketing line; the intro paragraph below does the rest.

export const ductedHeating = {
  slug: 'ducted-heating',
  title: 'Whole-Home Comfort with Ducted Heat Pump Systems',
  tagline: '',
  metaDescription:
    'Ducted heat pump systems supplied and installed across the Bay of Plenty by Dekker Air, from Mitsubishi Electric and Rinnai.',
  heroImage: '/images/heating/whole-home-ducted.jpg',

  intro: [
    'Enjoy seamless, whisper-quiet climate control throughout your entire home. Ducted heat pump systems offer a comprehensive heating and cooling solution, delivering balanced temperatures across every room—all year round.',
  ],

  // The case for ducted over high-wall, as a set of cards — same pattern as
  // lossnay.highlights.
  highlights: [
    {
      title: 'Whole-Home Uniformity',
      desc: 'High-wall units cool or heat the specific room they are installed in, often creating temperature hot-spots or cold draughts in hallways and adjacent bedrooms. Ducted systems distribute conditioned air evenly throughout every room via discreet ceiling or floor vents.',
    },
    {
      title: 'Invisible, Space-Saving Design',
      desc: 'Unlike high-wall units that take up prominent wall space in living areas, ducted systems are hidden away out of sight in your ceiling cavity or underfloor space. All you see are subtle ceiling diffusers or floor grilles that blend into your interior decor.',
    },
    {
      title: 'Whisper-Quiet Operation',
      desc: 'Because the main indoor central fan unit is housed away in your ceiling or underfloor space, operational noise is significantly reduced compared to wall-mounted units blowing directly into living areas.',
    },
    {
      title: 'Multi-Zone Control',
      desc: 'Modern ducted setups allow you to group rooms into distinct "zones," giving you the flexibility to heat living areas during the day and bedrooms at night—helping to optimise energy consumption and keep power bills lower.',
    },
  ],

  pairing: {
    title: 'Seamless Pairing with Ventilation Systems',
    paragraphs: [
      'For a complete indoor environmental setup, most ducted heat pump systems can be seamlessly paired with balanced home ventilation systems.',
      "Combining ducted heating and cooling with heat-recovery ventilation ensures your home receives a continuous supply of filtered, fresh outdoor air while removing stale indoor moisture, VOCs, and allergens—all without sacrificing your home's energy efficiency or thermal comfort.",
    ],
  },

  installation: {
    title: 'Expert Design & Professional Installation',
    paragraphs: [
      'Getting the most out of a ducted heat pump system requires precise sizing, smart layout planning, and quality craftsmanship.',
      "Our team of experienced HVAC professionals brings deep product knowledge and hands-on installation expertise to every project. We work closely with you to assess your home's layout, design a custom ducting plan tailored to your lifestyle, and execute a flawless installation to ensure maximum efficiency, quiet operation, and long-term reliability.",
    ],
  },

  ctaQuestion: "Ready to transform your home's climate control?",

  brands: [
    {
      name: 'Mitsubishi Electric',
      logo: '/images/heating/mitsubishi-electric-logo.jpg',
      intro: "Mitsubishi Electric's ducted range runs a single outdoor unit through ceiling ductwork, with zoning so different areas of the home can be heated independently.",
      images: [
        { src: '/images/heating/mitsubishi-ducted-lifestyle.jpg', caption: 'Mitsubishi Electric Whole-Home Ducted Heating & Cooling' },
      ],
    },
    {
      name: 'Rinnai',
      logo: '/images/heating/rinnai-logo.webp',
      intro: "Rinnai's ducted heat pumps heat and cool the whole home from one outdoor unit, built for New Zealand conditions.",
      images: [
        { src: '/images/heating/ducted-system-diagram.jpg', caption: 'Pro Series 2 Ducted Central Heating & Cooling System', link: '/heating/rinnai-pro-series-2-ducted' },
      ],
    },
  ],
}
