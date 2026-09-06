// Mitsubishi Electric Lossnay — heat recovery ventilation.
//
// Dekker Air is a Mitsubishi Electric dealer, so this page sells their product
// in our words. The figures are the manufacturer's published examples and are
// kept with the conditions they were measured under — they're quoted as
// Mitsubishi Electric's, not presented as a promise we've made.
//
// Written to be copied for the next Mitsubishi product we take on.

export const lossnay = {
  slug: 'lossnay',
  brand: 'Mitsubishi Electric',
  title: 'Lossnay Heat Recovery Ventilation',
  tagline: 'Fresh air in, without throwing your heating out with it.',
  metaDescription:
    'Mitsubishi Electric Lossnay heat recovery ventilation, supplied and installed across the Bay of Plenty by Dekker Air. Try the Lossnay Wi-Fi Control app demo.',

  intro: [
    'Every house needs air changed. The problem is what the old air takes with it — in winter, the warmth you have just paid to put into it, and in summer the cool.',
    'Lossnay is a balanced ventilation system built around a heat exchange core. Stale air on its way out and fresh air on its way in pass through that core in separate channels. They never mix, but heat crosses between them. The air that arrives in your rooms is already close to the temperature of the air that left.',
    'The result is a house that gets a full change of filtered outdoor air without the heating bill that usually comes with it.',
  ],

  // Each figure carries the condition it was measured under, because without
  // that a headline number is just a number.
  headline: [
    { figure: 'Up to 92%', label: 'of the heat in the outgoing air recovered', note: 'VL-500 at its lowest fan speed, winter conditions' },
    { figure: '+12.9°C', label: 'added to incoming air before it reaches the room', note: 'Manufacturer example: 7°C outside, 21°C indoors' },
    { figure: '1.1°C', label: 'left for your heating to do', note: 'Same example, against a 21°C target' },
  ],

  highlights: [
    {
      title: 'Heat recovery, not heat generation',
      desc: 'The core moves warmth from the air leaving your house into the air coming in. It costs nothing to run beyond the fans, because the heat is already there.',
    },
    {
      title: 'Filtered air from outside',
      desc: 'Fresh air is drawn from outdoors and filtered on the way in, rather than pulled out of the roof space.',
    },
    {
      title: 'Balanced supply and extract',
      desc: 'Air in and air out are matched, so the house is not pushed one way or the other. That matters in newer, tightly built homes.',
    },
    {
      title: 'Free cooling on summer nights',
      desc: 'When it is cooler outside than in, the system can send that air straight past the core and into the house, instead of warming it back up.',
    },
    {
      title: 'It tells you when to clean it',
      desc: 'The app watches run time and prompts you when the filters and core need attention, with a guide for doing it yourself or a way to call us in.',
    },
    {
      title: 'CO₂ monitoring where it matters',
      desc: 'The RVS and RVX3 units take an optional CO₂ sensor and lift the fan speed when levels climb — worth having in classrooms, clinics and offices.',
    },
  ],

  // The three states the interactive diagram steps through. The numbers are
  // Mitsubishi Electric's published examples for each.
  modes: [
    {
      key: 'winter',
      name: 'Winter',
      caption: 'Pre-warming',
      outside: 7,
      supply: 19.9,
      indoor: 21,
      delta: '+12.9°C',
      remaining: '1.1°C',
      summary: 'Outside air at 7°C picks up 12.9°C crossing the core, and reaches the room at 19.9°C. Against a 21°C target, your heating covers the last 1.1°C.',
    },
    {
      key: 'summer',
      name: 'Summer',
      caption: 'Pre-cooling',
      outside: 28,
      supply: 21.6,
      indoor: 21,
      delta: '−6.4°C',
      remaining: '0.6°C',
      summary: 'With the air conditioning running at 21°C, incoming air at 28°C gives up 6.4°C to the outgoing air and arrives at 21.6°C. Your cooling covers the last 0.6°C.',
    },
    {
      key: 'bypass',
      name: 'Summer night',
      caption: 'Automatic free cooling',
      outside: 16,
      supply: 16,
      indoor: 26,
      delta: 'Core bypassed',
      remaining: null,
      bypass: true,
      summary: 'The house has overheated during the day and it is now cooler outside than in. Rather than warming the incoming air, the system routes it around the core and delivers 16°C air straight to the rooms.',
    },
  ],

  range: [
    {
      name: 'Vertical Lossnay',
      detail: 'Wi-Fi control included as standard on units built from January 2024. The usual choice for a new home.',
    },
    {
      name: 'LGH series',
      detail: 'Wi-Fi control available as an option, so the app features can be added rather than assumed.',
    },
    {
      name: 'RVS and RVX3 series',
      detail: 'Take the optional Wi-Fi adapter, and the optional CO₂ sensor for occupancy-driven fan speed.',
    },
  ],

  faqs: [
    {
      q: 'How is Lossnay different from a positive pressure system?',
      a: 'A positive pressure system pushes filtered roof-space air in and lets damp air find its own way out. Lossnay actively extracts as well as supplies, draws its air from outside rather than the roof, and passes the two streams through a heat exchanger so the warmth stays in the house. It costs more, and it does considerably more.',
    },
    {
      q: 'Do the two air streams mix?',
      a: 'No. They travel through separate channels in the core and only ever share a surface. Heat crosses; the air does not.',
    },
    {
      q: 'Will it cool the house in summer?',
      a: 'It will take the edge off on a cool evening using free cooling mode, and it reduces the load on your air conditioning during the day. It is a ventilation system though, not a cooling system, and Mitsubishi Electric are clear about that too — it will not hold a house at a set temperature on its own.',
    },
    {
      q: 'What maintenance does it need?',
      a: 'Filters and the core need cleaning periodically. The app tells you when, based on how long the system has actually run, and links to a guide. If you would rather not, we do it as a service visit.',
    },
    {
      q: 'Can it work with my ducted heat pump?',
      a: 'If both have a Wi-Fi interface, yes — they can be interlocked and run from the one app. You can have them switch on together, or set the Lossnay to keep fresh air moving even when the ducted system is off.',
    },
    {
      q: 'Does the app come with every unit?',
      a: 'Wi-Fi control is standard on the Vertical Lossnay range. On the LGH, RVS and RVX3 ranges it is an optional adapter. CO₂ monitoring is an extra sensor on the RVS and RVX3 only. We will tell you exactly what your quote includes.',
    },
  ],

  // Mitsubishi Electric's own hosted demo and walkthrough. Embedded rather than
  // rebuilt, so it stays whatever they say it is.
  demo: {
    appUrl: 'https://app.melview.net/login.html#demoevl500',
    videoId: '909846033',
    videoTitle: 'How to use Lossnay Wi-Fi Control',
    sourceUrl: 'https://www.mitsubishi-electric.co.nz/wifi/lossnay/',
  },
}
