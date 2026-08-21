// The four kinds of ventilation, each with its own page under /ventilation.
//
// The one-line summaries come from the existing Dekker Group site; the rest is
// written for these pages. `calculator` names the SmartVent family the sizing
// calculator should work from — heat transfer and extraction aren't sized that
// way, so those pages take an enquiry instead.

export const ventilationTypes = [
  {
    slug: 'positive-pressure',
    title: 'Positive Pressure',
    icon: '🌬️',
    calculator: 'positive',
    tagline: 'Fresh, filtered air pushed gently through the house.',
    summary: 'A positive pressure ventilation system controls condensation by bringing fresh air in and pushing stale air out.',
    metaDescription: 'Positive pressure home ventilation in the Bay of Plenty. SmartVent systems sized to your home to control condensation, damp and mould — installed by Dekker Air.',
    intro: [
      'Most of the moisture in a house comes from living in it — showers, cooking, drying washing indoors, and simply breathing. With the windows shut it has nowhere to go, so it settles on the coldest surfaces it can find: windows, curtains, and the corners of bedrooms.',
      'A positive pressure system draws air from the roof space, filters it, and pushes it gently into the house through ceiling diffusers. That slight pressure moves the damp indoor air out through the gaps every house already has, so the moisture leaves rather than condensing on the glass.',
    ],
    offerings: [
      'SmartVent Lite+ for straightforward homes',
      'SmartVent Positive3 with room-by-room control',
      'SmartVent Positive Advance for larger or more complex layouts',
      'Extension kits to add outlets to an existing system',
      'Filter replacement and servicing, whoever installed it',
    ],
    highlights: [
      { title: 'Sized on your house', desc: 'Floor area and the number of rooms you want air to reach decide the unit and the outlet count — not a guess from the doorstep.' },
      { title: 'Filtered on the way in', desc: 'Air passes through a filter before it reaches the ceiling diffusers, so what comes in isn\'t roof-space dust.' },
      { title: 'Quiet enough to forget', desc: 'These run continuously at low speed. Most people stop noticing them within a week.' },
      { title: 'Cheap to run', desc: 'A positive pressure fan draws very little power compared with running a dehumidifier in every damp room.' },
    ],
    faqs: [
      { q: 'How many outlets do I need?', a: 'It depends on floor area and which rooms you want covered — bedrooms and living areas usually, hallways sometimes. The calculator on this page will size it for you, and we confirm it on site.' },
      { q: 'Will it make the house cold?', a: 'The air comes from the roof space rather than straight from outside, and for much of the year that sits warmer than the outdoor air. Some systems can add heat to the incoming air. We\'ll talk through what your roof space actually does before you buy.' },
      { q: 'Does it replace opening the windows?', a: 'It does the job on the days you can\'t — winter, rain, or when the house is empty. Opening windows still helps, but a ventilation system keeps working when nobody\'s there to open them.' },
      { q: 'What maintenance does it need?', a: 'Filters need replacing periodically, and the unit benefits from a check-over. We can do it as part of a service visit or supply filters for you to change yourself.' },
    ],
  },

  {
    slug: 'balanced-pressure',
    title: 'Balanced Pressure',
    icon: '♻️',
    calculator: 'balanced',
    tagline: 'Fresh air in, stale air out, keeping the warmth.',
    summary: 'A balanced pressure system brings fresh air in while recovering the valuable energy already in your home.',
    metaDescription: 'Balanced pressure ventilation with heat recovery for Bay of Plenty homes. SmartVent Synergy and Balance systems supplied and installed by Dekker Air.',
    intro: [
      'A balanced system does two things at once: it brings filtered air in from outside, and it takes stale air out of the wet rooms. Because both happen at a matched rate, the house doesn\'t end up pressurised in either direction.',
      'The part that matters is what sits between them. The outgoing air passes a heat exchanger on its way out, and hands most of its warmth to the incoming air. You get the fresh air without throwing away the heating you\'ve already paid for.',
    ],
    offerings: [
      'SmartVent Synergy 3 with heat recovery',
      'SmartVent Balance for smaller homes',
      'Ducting and diffusers laid out for your floor plan',
      'Extraction from bathrooms, kitchen and laundry',
      'Filter replacement and system servicing',
    ],
    highlights: [
      { title: 'Keeps the heat', desc: 'The heat exchanger recovers warmth from the air on its way out, so ventilating doesn\'t undo your heating.' },
      { title: 'Balanced by design', desc: 'Supply and extract are matched, so the house isn\'t pushed one way or the other — useful in a tightly built or newer home.' },
      { title: 'Air from outside', desc: 'Fresh air is drawn from outside rather than the roof space, then filtered before it reaches the rooms.' },
      { title: 'Extracts at the source', desc: 'Damp air is taken from the rooms that make it, rather than pushed around the house first.' },
    ],
    faqs: [
      { q: 'How is this different from positive pressure?', a: 'Positive pressure pushes filtered roof-space air in and lets the damp air find its own way out. A balanced system also actively extracts, and passes the outgoing air through a heat exchanger to keep the warmth. It costs more and does more.' },
      { q: 'Which one suits my house?', a: 'Newer, tighter homes tend to suit balanced systems; older, draughtier ones often do very well on positive pressure for a lot less money. It\'s worth a conversation rather than a rule.' },
      { q: 'How big a house can it do?', a: 'The systems we install cover homes up to around 350 m². Larger or unusually laid out homes can still be done — it just needs designing rather than picking off a chart.' },
      { q: 'Is it noisy?', a: 'The unit sits in the roof space and runs continuously at low speed. Ducting is sized so air moves slowly, which is what keeps it quiet at the diffuser.' },
    ],
  },

  {
    slug: 'heat-transfer',
    title: 'Heat Transfer',
    icon: '🔥',
    calculator: null,
    tagline: 'Move the heat you already have to the rooms that need it.',
    summary: 'Make the heat from your fire go further with a whole-home heat transfer system.',
    metaDescription: 'Heat transfer systems for Bay of Plenty homes — move warmth from your fire or heat pump into cold bedrooms. Supplied and installed by Dekker Air.',
    intro: [
      'Plenty of homes have one very warm room and several cold ones. A fire or a large heat pump heats the living area beautifully while the bedrooms down the hall stay cold enough that nobody wants to be in them.',
      'A heat transfer system takes the warm air collecting at the ceiling of that room and ducts it to the rooms that aren\'t getting any. It doesn\'t create heat — it moves what you\'re already producing to where it\'s useful, which is a great deal cheaper than heating those rooms separately.',
    ],
    offerings: [
      'Single and multi-room heat transfer kits',
      'Ducting from the living area to bedrooms',
      'Thermostat and timer control',
      'Installation alongside a new fire or heat pump',
      'Servicing and fault finding on existing systems',
    ],
    highlights: [
      { title: 'Uses heat you\'ve paid for', desc: 'The warmth is already at the ceiling of your living room doing nothing. This puts it somewhere useful.' },
      { title: 'Cheaper than a second heater', desc: 'Far less to install and to run than putting separate heating into every bedroom.' },
      { title: 'Set and forget', desc: 'Thermostat control means it moves air when there\'s warmth worth moving, and stops when there isn\'t.' },
      { title: 'Works with what you have', desc: 'Fires, wood burners and heat pumps all produce the surplus these systems are designed to shift.' },
    ],
    faqs: [
      { q: 'Will it heat the whole house?', a: 'It spreads the heat you\'re already making, so the answer depends on how much surplus your fire or heat pump produces. It will take the edge off cold bedrooms; it won\'t turn one small heater into central heating.' },
      { q: 'Does it help with damp?', a: 'Indirectly — warmer rooms hold moisture better than cold ones, so you see less condensation. But it moves air around the house rather than replacing it, so it isn\'t a substitute for ventilation.' },
      { q: 'How many rooms can it feed?', a: 'Commonly two to four, depending on the layout and how much heat is available to move. We work it out from your floor plan.' },
      { q: 'Can it be installed with a new fire?', a: 'Yes, and that\'s the easiest time to do it — the ducting runs are simpler before linings and insulation are finished.' },
    ],
  },

  {
    slug: 'extraction',
    title: 'Extraction',
    icon: '💨',
    calculator: null,
    tagline: 'Deal with the steam where it\'s made.',
    summary: 'Tackle moisture at the source with extraction for kitchens, bathrooms and laundries.',
    metaDescription: 'Bathroom, kitchen and laundry extraction across the Bay of Plenty. Extractor fans and inline systems supplied and installed by Dekker Air.',
    intro: [
      'A hot shower puts a surprising amount of water into the air in a few minutes. If it isn\'t taken out of the room it goes everywhere else in the house instead, and turns up as condensation on a bedroom window at the other end of the hall.',
      'Extraction deals with it at the source: a fan in the room that makes the moisture, ducted properly to outside. Done well it\'s the cheapest moisture control there is. Done badly — undersized, or ducted into the roof space — it just moves the problem somewhere you can\'t see it.',
    ],
    offerings: [
      'Bathroom and ensuite extractor fans',
      'Inline fans for quieter, stronger extraction',
      'Kitchen rangehood ducting to outside',
      'Laundry extraction',
      'Replacing fans that were never ducted properly',
      'Humidity and timer switching',
    ],
    highlights: [
      { title: 'Ducted to outside', desc: 'Air goes out of the building, not into the roof space where it becomes a different problem.' },
      { title: 'Sized for the room', desc: 'A fan too small for the bathroom never clears it. Extraction rate is matched to the room volume.' },
      { title: 'Runs on its own', desc: 'Humidity sensing or a timer means it runs long enough to clear the room after the shower stops.' },
      { title: 'Quiet options', desc: 'Inline fans sit in the roof space rather than the ceiling, so the noise isn\'t in the room with you.' },
    ],
    faqs: [
      { q: 'My fan runs but the mirror still fogs — why?', a: 'Usually the fan is undersized for the room, or it\'s ducted into the roof space instead of outside, or the duct is long and crushed. All three are common and all three are fixable.' },
      { q: 'How long should it run after a shower?', a: 'Long enough to clear the room — typically 10 to 20 minutes. A timer or humidity sensor handles it without anyone having to remember.' },
      { q: 'Is extraction enough on its own?', a: 'For a house that\'s otherwise dry, often yes. If you\'re getting condensation in rooms that don\'t make moisture, the house needs ventilation as well as extraction.' },
      { q: 'Can you duct an existing fan properly?', a: 'Usually. If there\'s roof access we can run new ducting to an outside vent and reuse the fan, or replace it if it\'s not up to the room.' },
    ],
  },
]

export const getVentilationType = slug => ventilationTypes.find(v => v.slug === slug)
