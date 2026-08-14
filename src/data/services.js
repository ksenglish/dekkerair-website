// Content for the four service pages. Edit the copy here — the page layout
// (src/pages/ServicePage.jsx) and the nav, footer and home-page grid all read
// from this list, so adding a service here adds it everywhere.

export const services = [
  {
    slug: 'heating',
    title: 'Heating',
    icon: '☀️',
    // Renders the sizing calculator on this page — see ServicePage.jsx
    calculator: 'heat-pump',
    tagline: 'Warm, dry homes that cost less to run.',
    summary: 'Efficient heating solutions designed to keep your home warm, comfortable and energy efficient through every season.',
    metaDescription: 'Heat pump and home heating installation across the Bay of Plenty. Dekker Air sizes, supplies and installs efficient heating for homes and businesses.',
    intro: [
      "A cold, damp home is hard on your family and hard on the building itself. We design and install heating that suits the space it's going into — the right capacity, in the right position, so the rooms you actually use stay comfortable without the system running flat out.",
      "We handle new builds, renovations and straight swap-outs of tired old units. Whether it's a single high-wall heat pump in the living room or a ducted system running the whole house, you get an honest recommendation and a fixed quote before any work starts.",
    ],
    offerings: [
      'High-wall heat pumps for living areas and bedrooms',
      'Ducted central heating for whole-home comfort',
      'Floor console and low-wall units for hard-to-heat rooms',
      'Multi-split systems running several rooms from one outdoor unit',
      'Replacement and upgrade of existing heat pumps',
      'Heating design for new builds and renovations',
    ],
    highlights: [
      { title: 'Sized properly', desc: 'We measure the space and factor in insulation, glazing and which way it faces before recommending a unit. Undersized systems never keep up; oversized ones cost more to run.' },
      { title: 'Placed for even heat', desc: 'Position matters as much as capacity. We work out where the unit will actually move heat through the room rather than just where the pipe run is easiest.' },
      { title: 'Quiet enough for bedrooms', desc: 'Modern inverter units run quietly at low load. We take noise into account for both the indoor head and the outdoor unit — including where it sits relative to your neighbours.' },
      { title: 'Backed by warranty', desc: 'Installations are carried out to manufacturer specification so your warranty stands, and our own workmanship guarantee sits behind it.' },
    ],
    faqs: [
      {
        q: 'How much does a heat pump installation cost?',
        a: "It depends on the size of the unit and how straightforward the install is — pipe runs, wall access and electrical work all play a part. We quote every job after seeing the space, and the price we give you is the price you pay.",
      },
      {
        q: 'Will one heat pump heat my whole house?',
        a: "Sometimes. In an open-plan home with decent insulation, a single well-placed unit can do a lot of work. Closed-off bedrooms usually need their own solution — a second unit, a multi-split, or a ducted system. We'll tell you honestly which one your place needs rather than overselling you.",
      },
      {
        q: 'Do you remove the old unit?',
        a: 'Yes. We decommission and remove your old system, recover the refrigerant properly, and tidy up before we leave.',
      },
      {
        q: 'How long does installation take?',
        a: "A standard single high-wall install is usually a one-day job. Ducted systems and multi-splits take longer — we'll give you a realistic timeframe along with your quote.",
      },
    ],
  },

  {
    slug: 'cooling',
    title: 'Cooling',
    icon: '❄️',
    tagline: 'Air conditioning that holds the temperature you set.',
    summary: 'Professional air conditioning systems tailored to deliver reliable cooling and year-round comfort for your home or business.',
    metaDescription: 'Air conditioning supply and installation for Bay of Plenty homes and businesses. Reverse-cycle, multi-split and ducted cooling from Dekker Air.',
    intro: [
      "A house that bakes through the middle of summer is miserable to live in, and a workplace that does the same is hard to be productive in. Air conditioning gives you control: set the temperature you want and the system holds it, without the noise and hot spots you get from portable units and fans.",
      "Nearly every system we install cools as well as heats, so one investment covers both ends of the year. We'll walk you through the sensible options for your building and quote the lot up front — including the electrical work, so there are no surprises later.",
    ],
    offerings: [
      'Reverse-cycle air conditioning for homes',
      'Multi-split systems cooling several rooms at once',
      'Ducted air conditioning with zone control',
      'Office, retail and light commercial cooling',
      'Server room and equipment cooling',
      'Upgrades and replacements for ageing systems',
    ],
    highlights: [
      { title: 'One system, both seasons', desc: 'Reverse-cycle units cool in summer and heat in winter, so you are not paying for two separate systems or finding space for both.' },
      { title: 'Zone what you use', desc: 'Ducted systems can be zoned so you cool the living areas during the day and the bedrooms at night, instead of conditioning the whole house around the clock.' },
      { title: 'Quiet running', desc: 'Inverter compressors ramp up and down rather than cycling hard on and off. Once the room is at temperature, the system settles into a low, quiet hum.' },
      { title: 'Efficient by design', desc: 'We recommend units with strong efficiency ratings and size them to the load, which is what actually keeps the running cost down over the life of the system.' },
    ],
    faqs: [
      {
        q: 'Is air conditioning expensive to run?',
        a: "A correctly sized modern inverter unit is far cheaper to run than most people expect — they are efficient at part load, which is where they spend most of their time. The expensive setups are usually the ones that were sized or positioned badly and end up working too hard.",
      },
      {
        q: 'Can I cool just one room?',
        a: 'Absolutely. A single split system serving one room is one of the most common jobs we do, and it can be added to later with a multi-split if you decide to cover more of the house.',
      },
      {
        q: 'Do you take on commercial work?',
        a: 'Yes — offices, retail spaces, workshops and server rooms. Commercial jobs get the same approach: an on-site assessment, a written quote, and a scheduled install that works around your trading hours where we can.',
      },
      {
        q: 'What maintenance does it need?',
        a: "Filters want a clean every few months, and the system as a whole should be serviced annually. We offer that as a standalone job or on a scheduled plan — see our HVAC servicing page.",
      },
    ],
  },

  {
    slug: 'ventilation',
    title: 'Ventilation',
    icon: '💨',
    tagline: 'Deal with the damp, not just the symptoms.',
    summary: 'Fresh air ventilation systems that help reduce moisture, condensation and stale air while improving indoor air quality.',
    metaDescription: 'Home ventilation systems for Bay of Plenty homes. Dekker Air installs positive and balanced pressure ventilation to cut condensation, damp and mould.',
    intro: [
      "Streaming windows, musty smells and mould creeping into the corners all point to the same thing: moisture with nowhere to go. Ventilation treats the cause rather than the symptom, continuously replacing damp indoor air with drier, filtered air.",
      "A drier home is cheaper to heat, easier on the people living in it and kinder to the building. We look at the layout, the roof space and the rooms giving you trouble, then specify a system that fits the house instead of handing you a one-size-fits-all package.",
    ],
    offerings: [
      'Positive pressure home ventilation systems',
      'Balanced pressure systems with heat recovery',
      'Bathroom, kitchen and laundry extraction',
      'Subfloor ventilation for damp underfloor spaces',
      'Filter replacement and system servicing',
      'Moisture and condensation assessments',
    ],
    highlights: [
      { title: 'Less condensation', desc: 'Lowering indoor humidity is what stops water forming on the coldest surfaces — the windows, the corners of the ceiling, the back of the wardrobe.' },
      { title: 'Cheaper to heat', desc: 'Dry air takes far less energy to warm than damp air. Ventilation and heating work together, and getting the moisture down usually takes load off the heating.' },
      { title: 'Filtered, not just moved', desc: 'Incoming air passes through filters, so you are not simply pulling dust and pollen straight in from outside.' },
      { title: 'Quiet and continuous', desc: 'These systems are designed to run in the background. Set correctly, you should notice the difference in the house without noticing the system itself.' },
    ],
    faqs: [
      {
        q: 'Will ventilation make my house cold?',
        a: "It shouldn't. Positive pressure systems draw from the roof space, which is often warmer than outside during the day, and balanced pressure systems with heat recovery transfer warmth from the outgoing air into the incoming air. We set the controls so the system backs off when the incoming air would be too cold.",
      },
      {
        q: 'Does it replace opening the windows?',
        a: "Open windows are great, but they only help while they're open — and nobody leaves them open through a wet winter night, which is exactly when the moisture builds up. A ventilation system keeps working around the clock.",
      },
      {
        q: 'How noisy is it?',
        a: 'On normal running speeds most people stop noticing it within a week. If noise is a particular concern, tell us during the assessment and we will factor it into the unit choice and where the ducting runs.',
      },
      {
        q: 'How often do filters need changing?',
        a: 'Typically every couple of years, though it depends on the system and how dusty the environment is. We can handle it as part of a scheduled service so it does not get forgotten.',
      },
    ],
  },

  {
    slug: 'hvac-servicing',
    title: 'HVAC Servicing',
    icon: '🔧',
    tagline: 'Catch the small faults before they become big ones.',
    summary: 'Comprehensive servicing and maintenance to keep your heat pump and ventilation systems running efficiently, reliably and performing at their best.',
    metaDescription: 'Heat pump and HVAC servicing, maintenance and repairs across the Bay of Plenty. Dekker Air services systems we installed and systems we did not.',
    intro: [
      "Heat pumps and ventilation systems are easy to forget about right up until they stop doing their job. Regular servicing keeps performance where it should be, keeps running costs down, and catches the small faults before they turn into a failed compressor in the middle of winter.",
      "We service systems we installed and plenty we didn't, across homes and commercial sites. You get a clear account of what we found and what — if anything — actually needs attention, along with a quote before any repair work goes ahead.",
    ],
    offerings: [
      'Annual heat pump servicing and deep clean',
      'Filter, coil and drain cleaning',
      'Refrigerant and operating pressure checks',
      'Fault finding and repairs',
      'Ventilation system servicing and filter changes',
      'Scheduled maintenance plans for commercial sites',
    ],
    highlights: [
      { title: 'Keeps efficiency up', desc: 'A clogged filter or dirty coil forces the system to work harder for the same result. Cleaning is the cheapest efficiency gain available on an existing system.' },
      { title: 'Documented for your records', desc: 'We service to manufacturer specification and leave you with a written record of exactly what was done and what we found.' },
      { title: 'Better air quality', desc: 'Mould and bacteria build up in the parts of a heat pump you never see. That musty smell when the unit first starts is the system telling you it needs a clean.' },
      { title: 'Fewer surprise breakdowns', desc: 'Most failures give warning signs long before they strand you. Servicing is when those signs get noticed and dealt with cheaply.' },
    ],
    faqs: [
      {
        q: 'How often should a heat pump be serviced?',
        a: "Once a year is the general rule for a home system, and more often for commercial sites or units running hard year-round. It's worth checking your unit's documentation as well, since manufacturers set their own recommended servicing intervals.",
      },
      {
        q: 'My heat pump smells musty — can you fix that?',
        a: "Usually, yes. That smell is almost always mould and grime built up on the internal coil and fan barrel. A proper deep clean is a different job from wiping the filters, and it makes an immediate difference.",
      },
      {
        q: "Do you service systems you didn't install?",
        a: 'Yes, whatever the brand and whoever installed it. If we find something that was done poorly the first time round, we will tell you what it would take to put right and let you decide.',
      },
      {
        q: 'What happens if it needs a repair?',
        a: "We tell you what's wrong, what it will cost, and what happens if you leave it. Nothing gets replaced without your say-so.",
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
