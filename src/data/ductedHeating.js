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
    "A ducted system hides the equipment out of sight and delivers warm, quiet air to every room through outlets in the ceiling, so you get balanced heating and cooling across the whole house — all year round — without a unit on every wall. One outdoor unit, one thermostat, and the system can be zoned so you're only running the rooms you're using.",
    "We're not tied to one brand, so we'll help you weigh up Mitsubishi Electric against Rinnai for your home, size the system to the floor plan, and install it to the manufacturer's own specification so your warranty stands.",
  ],

  // The case for ducted over high-wall, as a set of cards — same pattern as
  // lossnay.highlights.
  highlights: [
    {
      title: 'Even heat in every room',
      desc: "A high-wall unit heats the room it's in, which often leaves hallways and bedrooms further away colder than the living room. A ducted system sends conditioned air to every room through the same ceiling outlets, so the whole house holds a steady temperature.",
    },
    {
      title: 'Nothing on the wall',
      desc: 'The fan unit sits out of sight in the ceiling cavity. All you see are discreet ceiling diffusers or floor grilles, instead of a unit taking up wall space in the living room.',
    },
    {
      title: 'Quieter running',
      desc: "With the fan unit tucked away rather than mounted on the wall above your head, a ducted system runs noticeably quieter than a high-wall unit blowing straight into the room.",
    },
    {
      title: 'Zone the house to suit',
      desc: "Group rooms into zones so you can heat the living areas during the day and the bedrooms at night, rather than running the whole house at once — which helps keep the power bill down too.",
    },
  ],

  pairing:
    "A ducted system also pairs well with a balanced ventilation system like Lossnay, bringing in filtered fresh air and clearing out stale, damp air without losing the heat you've already paid for.",

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
