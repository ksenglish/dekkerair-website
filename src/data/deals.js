// The current Dekker Air promotions, mirroring the ones running on
// dekkergroup.co.nz/dekkerair/latestdeals. Artwork lives in public/deals/.
//
// A deal disappears from the site by itself once `expires` has passed, so an
// old promotion can't be left up by accident. `expires: null` means it runs
// until someone removes it here. Dates are YYYY-MM-DD.

export const deals = [
  {
    id: 'high-wall-heat-pump',
    badge: 'Winter deal',
    title: 'Rinnai Pro Series 2 high wall heat pump',
    price: 'From $1,695',
    priceNote: 'installed',
    image: '/deals/high-wall-heat-pump.png',
    imageAlt: 'Rinnai high wall heat pump — Dekker Air winter deal, from $1,695 installed',
    hook: "Don't wait for the cold snap — secure your installation now.",
    body: 'A Rinnai Pro Series 2 high wall heat pump supplied and installed, from $1,695.',
    terms: 'T&Cs apply.',
    service: 'heating',
    expires: '2026-09-01',
  },
  {
    id: 'ducted-heat-pump',
    badge: 'Winter deal',
    title: 'Rinnai Pro Series ducted heat pump',
    price: 'From $8,995',
    priceNote: 'installed',
    image: '/deals/ducted-heat-pump.png',
    imageAlt: 'Whole home ducted heat pump — Dekker Air winter deal, from $8,995 installed',
    hook: 'Whole-home heating from a single ducted system.',
    body: 'A Rinnai Pro Series ducted heat pump supplied and installed, from $8,995. Get in touch today for your free quote.',
    terms: 'T&Cs apply.',
    service: 'heating',
    expires: '2026-09-01',
  },
  {
    id: 'smartvent-lite-plus',
    badge: 'Winter deal',
    title: 'SmartVent Lite+ home ventilation',
    price: 'From $2,595',
    priceNote: 'installed',
    image: '/deals/smartvent-lite-plus.png',
    imageAlt: 'SmartVent Lite+ home ventilation system — Dekker Air deal, from $2,595 installed',
    hook: 'Keep your home warm, healthy and dry this winter with SmartVent.',
    body: 'A SmartVent Lite+ ventilation system supplied and installed, from $2,595. Get in touch today for your free quote.',
    terms: 'T&Cs apply.',
    service: 'ventilation',
    expires: '2026-09-01',
  },
  {
    id: 'heat-pump-service',
    badge: 'Service offer',
    title: 'High wall heat pump service',
    price: 'From $129',
    priceNote: null,
    image: '/deals/heat-pump-service.png',
    imageAlt: 'Heat pump being serviced — Dekker Air servicing offer, from $129',
    hook: 'Get your heat pump serviced and running efficiently with our winter service offer.',
    body: 'A full service on your high wall heat pump, from $129. Any brand, whoever installed it.',
    terms: 'T&Cs apply.',
    service: 'hvac-servicing',
    expires: '2026-09-01',
  },
]

// A deal is live if it has no expiry, or its expiry is today or later.
export const activeDeals = (today = new Date()) => {
  const cutoff = today.toISOString().slice(0, 10)
  return deals.filter((d) => !d.expires || d.expires >= cutoff)
}

export const formatExpiry = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
