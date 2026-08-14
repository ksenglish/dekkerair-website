// The current Dekker Air promotions, mirroring the ones running on
// dekkergroup.co.nz/dekkerair/latestdeals. Artwork lives in public/deals/
// as WebP, 1000x1000.
//
// A deal disappears from the site by itself once `expires` has passed (the
// expiry date itself is still live), so an old promotion can't be left up by
// accident. `expires: null` means it runs until someone removes it here.
// Dates are YYYY-MM-DD.

export const deals = [
  {
    id: 'high-wall-heat-pump',
    badge: 'Winter deal',
    title: 'Rinnai Pro Series 2 high wall heat pump',
    price: 'From $1,695',
    priceNote: 'installed',
    image: '/deals/high-wall-heat-pump.webp',
    imageAlt: 'Rinnai high wall heat pump — Dekker Air winter deal, from $1,695 installed',
    hook: "Don't wait for the cold snap — secure your installation now.",
    body: 'A Rinnai Pro Series 2 high wall heat pump supplied and installed, from $1,695.',
    terms: 'T&Cs apply.',
    service: 'heating',
    expires: '2026-08-31',
  },
  {
    id: 'ducted-heat-pump',
    badge: 'Winter deal',
    title: 'Rinnai Pro Series ducted heat pump',
    price: 'From $8,995',
    priceNote: 'installed',
    image: '/deals/ducted-heat-pump.webp',
    imageAlt: 'Whole home ducted heat pump — Dekker Air deal, from $8,995 installed',
    hook: 'Invisible comfort for your entire home — seamless, quiet and effortless.',
    body: 'A whole-home Rinnai Pro Series ducted heat pump supplied and installed, from $8,995. Get in touch today for your free quote.',
    terms: 'T&Cs apply.',
    service: 'heating',
    expires: '2026-08-31',
  },
  {
    id: 'smartvent-lite-plus',
    badge: 'Winter deal',
    title: 'SmartVent Lite+ home ventilation',
    price: 'From $2,595',
    priceNote: 'installed',
    image: '/deals/smartvent-lite-plus.webp',
    imageAlt: 'SmartVent Lite+ home ventilation system — Dekker Air deal, from $2,595 installed',
    hook: 'No more mould and crying windows — just fresh, dry air.',
    body: "A SmartVent Lite+ ventilation system supplied and installed, from $2,595. Protect your home and your family's health — get in touch today for your free quote.",
    terms: 'T&Cs apply.',
    service: 'ventilation',
    expires: '2026-08-31',
  },
  {
    id: 'heat-pump-service',
    badge: 'Service offer',
    title: 'High wall heat pump service',
    price: 'From $129',
    priceNote: null,
    image: '/deals/heat-pump-service.webp',
    imageAlt: 'Heat pump being serviced — Dekker Air servicing offer, from $129',
    hook: 'Protect your investment — keep your heat pump running clean and efficiently with annual servicing.',
    body: 'A full service on your high wall heat pump, from $129. Any brand, whoever installed it.',
    terms: 'T&Cs apply.',
    service: 'hvac-servicing',
    expires: '2026-08-31',
  },
]

// A deal is live if it has no expiry, or its expiry is today or later.
// Built from local date parts rather than toISOString(), which is UTC — that
// would keep NZ deals visible for the first half of the day after they expire.
export const activeDeals = (today = new Date()) => {
  const cutoff = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')
  return deals.filter((d) => !d.expires || d.expires >= cutoff)
}

export const formatExpiry = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
