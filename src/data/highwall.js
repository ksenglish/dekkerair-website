// High-wall heat pumps across the brands we install. Sits under /heating
// because that is what a customer is shopping for — see the same reasoning on
// src/data/airetile.js.

export const highwall = {
  slug: 'highwall-heat-pumps',
  title: 'Highwall Heat Pumps',
  tagline: 'The full range, in a size and finish for every room.',
  metaDescription:
    'Highwall heat pumps supplied and installed across the Bay of Plenty by Dekker Air, from Mitsubishi Electric and Rinnai.',
  heroImage: '/images/heating/highwall-ap-series-lifestyle.jpg',

  intro: [
    'A high-wall heat pump is still the simplest way to heat a room, and between the brands we install there is a model for almost every room and budget — from a compact unit for a single bedroom through to a design-led piece for an open-plan living area.',
    "We're not tied to one brand, so we'll help you pick the series that suits the room and the look you're after, size it properly, and install it to the manufacturer's own specification so your warranty stands.",
  ],

  brands: [
    {
      name: 'Mitsubishi Electric',
      logo: '/images/heating/mitsubishi-electric-logo.jpg',
      intro: 'Every model draws on the same reliable platform underneath; what changes between series is the finish, the sound level and the features.',
      images: [
        { src: '/images/heating/highwall-ap-series-lifestyle.jpg', caption: 'AP Series' },
        { src: '/images/heating/highwall-ap-mini-lifestyle.jpeg', caption: 'AP Mini' },
        { src: '/images/heating/highwall-ef-designer-smart-lifestyle.jpg', caption: 'EF Designer Smart Series' },
        { src: '/images/heating/highwall-gs-series-lifestyle.jpg', caption: 'GS Series' },
        { src: '/images/heating/highwall-ln-black-diamond-lifestyle.jpg', caption: 'LN Black Diamond Series' },
      ],
    },
    {
      name: 'Rinnai',
      intro: 'Photos of the Rinnai high-wall range are on the way.',
      images: [],
    },
  ],
}
