import { useEffect, useMemo, useState } from 'react'
import { VENTILATION_ENDPOINT } from '../config'

// The sizing bands and prices for a ventilation family, plus the cheapest model
// under each system — the "from" figure the system cards quote.
//
// installFrom isn't shown anywhere at the moment: product prices still include
// labour, so quoting it alongside them counted the install twice. It stays here
// (and on the API) for when the labour-inclusive BOM kits are ready and prices
// become supply-only.
export default function useVentilationPricing(family) {
  const [rows, setRows] = useState(null) // null = loading, [] = unavailable
  const [pricingEnabled, setPricingEnabled] = useState(false)
  const [installFrom, setInstallFrom] = useState(null)
  // Set when a discount is running on this family. The prices in `rows` already
  // have it taken off; this is what's needed to say so.
  const [discount, setDiscount] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${VENTILATION_ENDPOINT}?family=${family}`)
      .then(r => { if (!r.ok) throw new Error('bad response'); return r.json() })
      .then(data => {
        if (cancelled) return
        setRows(data.systems || [])
        setPricingEnabled(!!data.pricingEnabled)
        setInstallFrom(data.installFromIncGstCents ?? null)
        setDiscount(data.discount || null)
      })
      .catch(() => { if (!cancelled) setRows([]) })
    return () => { cancelled = true }
  }, [family])

  // Cheapest priced model per system. A system whose models have no price at
  // all comes back undefined, so the card can say "on request" rather than $0.
  //
  // The cheapest model is picked on what it actually costs, and its own
  // pre-discount price is carried alongside — so the struck-through figure is
  // the one belonging to the model being quoted, not the lowest of the two
  // lists worked out separately.
  const { fromBySystem, listFromBySystem } = useMemo(() => {
    const from = {}
    const list = {}
    for (const r of rows || []) {
      if (r.installedPriceIncGstCents == null) continue
      const current = from[r.system]
      if (current == null || r.installedPriceIncGstCents < current) {
        from[r.system] = r.installedPriceIncGstCents
        list[r.system] = r.listPriceIncGstCents ?? r.installedPriceIncGstCents
      }
    }
    return { fromBySystem: from, listFromBySystem: list }
  }, [rows])

  return { rows, pricingEnabled, installFrom, discount, fromBySystem, listFromBySystem }
}
