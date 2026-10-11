// Whole-home ducted heating across the brands we install. Sits under
// /heating because that is what a customer is shopping for — see the same
// reasoning on src/data/highwall.js. Brand sections start with no systems
// listed; add images (with a link once each system has its own page) the
// same way src/data/highwall.js does once there is content to show.

export const ductedHeating = {
  slug: 'ducted-heating',
  title: 'Whole Home Ducted Heating',
  tagline: 'One outdoor unit, heat delivered to every room through the ceiling.',
  metaDescription:
    'Ducted heat pump systems supplied and installed across the Bay of Plenty by Dekker Air, from Mitsubishi Electric and Rinnai.',
  heroImage: '/images/heating/whole-home-ducted.jpg',

  intro: [
    "A ducted system hides the equipment out of sight and delivers warm air to every room through outlets in the ceiling, so you get whole-home comfort without a unit on every wall. One outdoor unit, one thermostat, and the system can be zoned so you're only heating the rooms you're using.",
    "We're not tied to one brand, so we'll help you weigh up Mitsubishi Electric against Rinnai for your home, size the system to the floor plan, and install it to the manufacturer's own specification so your warranty stands.",
  ],

  brands: [
    {
      name: 'Mitsubishi Electric',
      logo: '/images/heating/mitsubishi-electric-logo.jpg',
      intro: "Mitsubishi Electric's ducted range runs a single outdoor unit through ceiling ductwork, with zoning so different areas of the home can be heated independently.",
      images: [],
    },
    {
      name: 'Rinnai',
      logo: '/images/heating/rinnai-logo.webp',
      intro: "Rinnai's ducted heat pumps heat and cool the whole home from one outdoor unit, built for New Zealand conditions.",
      images: [],
    },
  ],
}
