// The three positive pressure systems, laid out the way SmartVent present them.
//
// `system` has to match the system name the app's sizing table uses — that's
// how a system page tells the calculator which one to start on, and how the
// "from" price is worked out from the models underneath it.
//
// The feature lists are the manufacturer's own product specifications.

export const positivePressureSystems = [
  {
    slug: 'smartvent-lite-plus',
    system: 'SmartVent Lite+',
    title: 'SmartVent Lite+',
    badge: 'Perfect for rentals',
    tagline: 'The straightforward one, and the one most homes need.',
    image: '/images/positive-pressure/lite-4-room.webp',
    metaDescription: 'SmartVent Lite+ positive pressure ventilation, supplied and installed across the Bay of Plenty. Size it for your home and see the price.',
    intro: [
      'Lite+ is the system most homes end up with, and for good reason: it does the thing that matters — filtered air in, damp air out — without paying for controls you were never going to use.',
      'Air is drawn from the roof space, passed through an F7 filter, and pushed into the rooms you choose through flat ceiling diffusers. A touch screen controller sets it and then you largely forget about it.',
    ],
    features: [
      'F7 grade filter, with HEPA or carbon filter options available',
      'Introduces fresh filtered air to reduce moisture',
      'Flat ceiling inset diffusers, adjustable to balance airflow into each room',
      'Ducting reduces air transfer noise between rooms',
      'Temperature and humidity sensing',
      'Touch screen controller for easy setting',
    ],
  },
  {
    slug: 'smartvent-positive3',
    system: 'SmartVent Positive3',
    title: 'SmartVent Positive3',
    tagline: 'Adds summer air from outside, and control from your phone.',
    image: '/images/positive-pressure/positive3-4-room.webp',
    metaDescription: 'SmartVent Positive3 positive pressure ventilation with app control, supplied and installed by Dekker Air across the Bay of Plenty.',
    intro: [
      'Positive3 does everything Lite+ does and adds a choice about where the air comes from. In summer a roof space gets hot, so being able to draw from outside instead makes a real difference to how the house feels in February.',
      'It also brings app control, so the system can be adjusted without standing at the wall panel.',
    ],
    features: [
      'F7 grade filter, with HEPA or carbon filter options available',
      'Fresher air from either the roof cavity or outside, with the optional summer add-on',
      'Flat ceiling inset diffusers, adjustable to balance airflow into each room',
      'Ducting retains temperature and reduces air transfer noise',
      'Temperature and humidity sensing',
      'Touch screen controller and app for easy setting',
    ],
  },
  {
    slug: 'smartvent-positive-advance',
    system: 'SmartVent Positive Advance',
    title: 'SmartVent Positive Advance',
    tagline: 'The most control, for larger or more complicated homes.',
    image: '/images/positive-pressure/advance-4-room.webp',
    metaDescription: 'SmartVent Positive Advance ventilation with wireless dew point sensing and Smart Life app control. Supplied and installed by Dekker Air.',
    intro: [
      'Advance is for homes where one setting for the whole house isn\'t good enough — a bigger floor plan, rooms that behave differently, or a damp problem that has been stubborn.',
      'Wireless sensors measure dew point rather than just humidity, which is what actually predicts condensation, and the system responds to it.',
    ],
    features: [
      'Connects to whole-house ventilation through the Smart Life app',
      'F7 grade filter, with HEPA or carbon filter options available',
      'Fresher air from either the roof cavity or outside, with the optional summer add-on',
      'Flat ceiling inset diffusers, adjustable to balance airflow into each room',
      'Ducting retains temperature and reduces air transfer noise',
      'Wireless temperature and humidity sensing to measure dew point',
      'Touch screen controller for easy setting',
    ],
  },
]

export const getPositivePressureSystem = slug =>
  positivePressureSystems.find(s => s.slug === slug)
