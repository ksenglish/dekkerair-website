import { useEffect, useMemo, useState } from 'react'
import { HEAT_PUMPS_ENDPOINT, LEAD_WEBHOOK, nzd } from '../config'

// Mirrors the Heat Pump Sizing calculator in Dekker App's Sales Presenter:
// room volume x an insulation multiplier gives the required heating capacity,
// and the model bands come from the app's own price list via the public API —
// so there's no copy of the sizing table living on this site to drift.
const INSULATION = [
  { value: 'good',    multiplier: 0.05,  label: 'Good — modern, well insulated' },
  { value: 'average', multiplier: 0.055, label: 'Average — partially insulated' },
  { value: 'poor',    multiplier: 0.06,  label: 'Poor — older, uninsulated' },
]

const CEILING_HEIGHTS = [
  { value: '2.1', label: '2.1 m (low)' },
  { value: '2.4', label: '2.4 m (standard)' },
  { value: '2.7', label: '2.7 m (high stud)' },
  { value: '3.0', label: '3.0 m' },
  { value: '3.6', label: '3.6 m (very high)' },
  { value: 'other', label: 'Other — enter below' },
]

const field = {
  width: '100%', padding: '11px 14px',
  border: '1px solid var(--border)', borderRadius: 'var(--radius)',
  fontSize: 15, fontFamily: 'inherit', outline: 'none', background: 'white',
}

const label = { fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }

function Row({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '9px 0', fontSize: 15 }}>
      {children}
    </div>
  )
}

export default function HeatPumpCalculator() {
  // ── price list ──────────────────────────────────────────────────────────────
  const [models, setModels] = useState(null) // null = loading, [] = unavailable
  const [pricingEnabled, setPricingEnabled] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(HEAT_PUMPS_ENDPOINT)
      .then(r => { if (!r.ok) throw new Error('bad response'); return r.json() })
      .then(data => {
        if (cancelled) return
        setModels(data.models || [])
        setPricingEnabled(!!data.pricingEnabled)
      })
      .catch(() => { if (!cancelled) setModels([]) })
    return () => { cancelled = true }
  }, [])

  // ── sizing inputs ───────────────────────────────────────────────────────────
  const [room, setRoom] = useState('')
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(0)
  const [m2, setM2] = useState('0')
  const [ceiling, setCeiling] = useState('2.4')
  const [customHeight, setCustomHeight] = useState('')
  const [insulation, setInsulation] = useState('average')

  const setL = v => { setLength(v); setM2((v * width).toFixed(1)) }
  const setW = v => { setWidth(v); setM2((length * v).toFixed(1)) }

  const height = ceiling === 'other' ? (parseFloat(customHeight) || 0) : parseFloat(ceiling)
  const area = parseFloat(m2) || 0
  const volume = area * height
  const multiplier = INSULATION.find(i => i.value === insulation).multiplier
  const kw = volume > 0 ? volume * multiplier : 0

  const maxKw = models && models.length ? Math.max(...models.map(m => m.kwMax)) : null
  const overCapacity = maxKw != null && kw > maxKw
  const match = models && kw > 0 && !overCapacity
    ? models.find(m => kw >= m.kwMin && kw <= m.kwMax)
    : null

  // ── basket ──────────────────────────────────────────────────────────────────
  const [basket, setBasket] = useState([])

  const addToBasket = () => {
    if (!match) return
    setBasket(b => [...b, {
      key: `${Date.now()}`,
      room: room.trim() || `Room ${b.length + 1}`,
      length, width, area, height, insulation,
      kw: Number(kw.toFixed(2)),
      model: match.model,
      description: match.description,
      priceCents: match.installedPriceIncGstCents,
      qty: 1,
    }])
    setRoom(''); setLength(0); setWidth(0); setM2('0')
  }

  const setQty = (key, qty) =>
    setBasket(b => b.map(i => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))
  const removeItem = key => setBasket(b => b.filter(i => i.key !== key))

  const allPriced = basket.length > 0 && basket.every(i => i.priceCents != null)
  const totalCents = allPriced
    ? basket.reduce((sum, i) => sum + i.priceCents * i.qty, 0)
    : null

  // ── enquiry submit ──────────────────────────────────────────────────────────
  const [contact, setContact] = useState({ name: '', email: '', phone: '', notes: '', website: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const summary = useMemo(() => {
    const lines = basket.map((i, n) => [
      `${n + 1}. ${i.room} — ${i.area} m² @ ${i.height} m stud, ${i.insulation} insulation`,
      `   Required capacity: ${i.kw} kW`,
      `   Recommended: ${i.model} (${i.description})`,
      `   ${i.priceCents != null ? `Installed inc GST: ${nzd(i.priceCents)}` : 'Price: on request'}`,
      `   Quantity: ${i.qty}`,
    ].join('\n'))
    if (totalCents != null) lines.push(`\nEstimated total (installed, inc GST): ${nzd(totalCents)}`)
    return lines.join('\n\n')
  }, [basket, totalCents])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(LEAD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          service_required: 'Heating',
          message: [
            'Heat pump enquiry built with the website calculator.',
            '',
            summary,
            contact.notes ? `\nCustomer notes:\n${contact.notes}` : '',
            '\nPrices are the customer-facing estimate from the site — confirm on site visit.',
          ].join('\n'),
          source: 'Dekker Air-Website-Heat Pump Calculator',
          website: contact.website, // honeypot
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  // ── render ──────────────────────────────────────────────────────────────────
  return (
    <section id="calculator" style={{ padding: '80px 0', background: 'var(--light)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Work it out yourself</div>
        <h2 className="section-title">Heat Pump Calculator</h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Size a heat pump for any room in your home, add it to your list, and send
          it straight to us. It's the same sizing our team uses on site — treat the
          result as a solid starting point rather than a final quote.
        </p>

        <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* ── inputs ── */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22 }}>1. Measure the room</h3>

            <div style={{ marginBottom: 18 }}>
              <label style={label} htmlFor="hp-room">Room name (optional)</label>
              <input id="hp-room" style={field} placeholder="e.g. Lounge" value={room}
                onChange={e => setRoom(e.target.value)} />
            </div>

            <div style={{ marginBottom: 6 }}>
              <label style={label} htmlFor="hp-length">Length — {length} m</label>
              <input id="hp-length" type="range" min="0" max="15" step="0.1" value={length}
                onChange={e => setL(parseFloat(e.target.value))} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={label} htmlFor="hp-width">Width — {width} m</label>
              <input id="hp-width" type="range" min="0" max="10" step="0.1" value={width}
                onChange={e => setW(parseFloat(e.target.value))} style={{ width: '100%' }} />
            </div>

            <div className="calc-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
              <div>
                <label style={label} htmlFor="hp-area">Floor area (m²)</label>
                <input id="hp-area" type="number" min="0" style={field} value={m2}
                  onChange={e => setM2(e.target.value)} placeholder="or type directly" />
              </div>
              <div>
                <label style={label} htmlFor="hp-ceiling">Ceiling height</label>
                <select id="hp-ceiling" style={{ ...field, cursor: 'pointer' }} value={ceiling}
                  onChange={e => setCeiling(e.target.value)}>
                  {CEILING_HEIGHTS.map(h => <option key={h.value} value={h.value}>{h.label}</option>)}
                </select>
              </div>
            </div>

            {ceiling === 'other' && (
              <div style={{ marginBottom: 18 }}>
                <label style={label} htmlFor="hp-custom">Custom ceiling height (m)</label>
                <input id="hp-custom" type="number" min="0" step="0.1" style={field} value={customHeight}
                  onChange={e => setCustomHeight(e.target.value)} placeholder="e.g. 4.2" autoFocus />
              </div>
            )}

            <div>
              <label style={label} htmlFor="hp-insulation">Insulation level</label>
              <select id="hp-insulation" style={{ ...field, cursor: 'pointer' }} value={insulation}
                onChange={e => setInsulation(e.target.value)}>
                {INSULATION.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
              </select>
            </div>
          </div>

          {/* ── result ── */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22 }}>2. Your recommendation</h3>

            {kw <= 0 ? (
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                {ceiling === 'other' && !(parseFloat(customHeight) > 0)
                  ? 'Enter a ceiling height to size the heat pump.'
                  : 'Set a length and width — or type a floor area — and your recommended unit will appear here.'}
              </p>
            ) : (
              <>
                <div style={{ borderTop: '1px solid var(--border)' }}>
                  <Row><span style={{ color: 'var(--muted)' }}>Volume</span><strong>{volume.toFixed(1)} m³</strong></Row>
                  <Row>
                    <span style={{ color: 'var(--muted)' }}>Required capacity</span>
                    <strong style={{ fontSize: 20 }}>{kw.toFixed(2)} kW</strong>
                  </Row>
                </div>

                {models === null && (
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16 }}>Loading models…</p>
                )}

                {overCapacity && (
                  <div style={{
                    marginTop: 18, padding: 18, borderRadius: 10,
                    background: 'var(--light)', border: '1px solid var(--border)',
                    fontSize: 14, lineHeight: 1.7,
                  }}>
                    {kw.toFixed(2)} kW is beyond the largest high wall unit we list ({maxKw} kW).
                    A space this size usually wants multiple units or a ducted system —
                    send us an enquiry and we'll design something that suits it.
                  </div>
                )}

                {match && (
                  <>
                    {/* The specific model and unit description are deliberately not
                        shown to the customer — they still travel with the enquiry so
                        the team knows what was sized. */}
                    <div className="rec-price" style={{
                      display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap',
                      borderTop: '1px solid var(--border)', marginTop: 8, paddingTop: 22,
                    }}>
                      {kw > 0.1 && (
                        <img
                          src="/heat-pump.webp"
                          alt="High wall heat pump indoor unit"
                          width={600}
                          height={330}
                          loading="lazy"
                          decoding="async"
                          // height:auto so the height attribute above, which is
                          // there to reserve space, can't override the ratio.
                          style={{ width: 190, height: 'auto', flexShrink: 0 }}
                        />
                      )}
                      <div>
                        <div style={{
                          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6,
                        }}>Starting from</div>
                        <div style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                          {match.installedPriceIncGstCents != null
                            ? nzd(match.installedPriceIncGstCents)
                            : 'On request'}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>
                          Installed, inc GST
                        </div>
                      </div>
                    </div>

                    <button type="button" onClick={addToBasket} className="btn btn-primary"
                      style={{ width: '100%', marginTop: 22, padding: 14, fontSize: 15 }}>
                      + Add to my list
                    </button>
                  </>
                )}

                {models !== null && models.length === 0 && !overCapacity && (
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 18, lineHeight: 1.7 }}>
                    We couldn't load our model list just now. Your required capacity above is
                    still correct — send us an enquiry and we'll match a unit to it.
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── basket ── */}
        {basket.length > 0 && (
          <div style={{
            marginTop: 32, background: 'white',
            border: '1px solid var(--border)', borderRadius: 16, padding: 32,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22 }}>3. Your list</h3>

            {basket.map(item => (
              <div key={item.key} className="basket-row" style={{
                display: 'grid', gridTemplateColumns: '1fr auto auto auto',
                gap: 18, alignItems: 'center',
                padding: '16px 0', borderTop: '1px solid var(--border)',
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{item.room}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginTop: 2 }}>
                    {item.area} m² · {item.kw} kW required
                  </div>
                </div>

                <label style={{ fontSize: 13, color: 'var(--muted)' }}>
                  Qty{' '}
                  <input type="number" min="1" value={item.qty}
                    onChange={e => setQty(item.key, parseInt(e.target.value, 10) || 1)}
                    style={{ ...field, width: 70, padding: '7px 9px', display: 'inline-block' }} />
                </label>

                <strong style={{ fontSize: 15, minWidth: 110, textAlign: 'right' }}>
                  {item.priceCents != null ? nzd(item.priceCents * item.qty) : 'On request'}
                </strong>

                <button type="button" onClick={() => removeItem(item.key)} aria-label={`Remove ${item.room}`}
                  style={{ background: 'none', fontSize: 20, color: 'var(--muted)', lineHeight: 1, padding: 4 }}>
                  ×
                </button>
              </div>
            ))}

            <div style={{
              borderTop: '2px solid #1a1a1a', marginTop: 8, paddingTop: 18,
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
            }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                Estimated total {totalCents != null && <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 14 }}>(installed, inc GST)</span>}
              </span>
              <strong style={{ fontSize: 26 }}>
                {totalCents != null ? nzd(totalCents) : 'On request'}
              </strong>
            </div>

            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginTop: 14 }}>
              An estimate for a standard installation, not a fixed quote. Pipe runs, wall
              access and electrical work vary between homes, so we confirm the final price
              in writing after we've seen the job.
            </p>

            {/* ── enquiry ── */}
            <div style={{ marginTop: 30, paddingTop: 30, borderTop: '1px solid var(--border)' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div style={{ fontSize: 44, marginBottom: 14 }}>✅</div>
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Thanks — we've got your list.</h4>
                  <p style={{ color: 'var(--muted)', fontSize: 15 }}>
                    We'll be in touch within one business day to confirm sizing and book a look.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700 }}>Send this list to us for a firm quote</h4>

                  <input type="text" name="website" value={contact.website} tabIndex={-1} autoComplete="off"
                    onChange={e => setContact(c => ({ ...c, website: e.target.value }))}
                    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

                  <div className="calc-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={label} htmlFor="hp-name">Name *</label>
                      <input id="hp-name" required style={field} value={contact.name}
                        onChange={e => setContact(c => ({ ...c, name: e.target.value }))} />
                    </div>
                    <div>
                      <label style={label} htmlFor="hp-email">Email *</label>
                      <input id="hp-email" required type="email" style={field} value={contact.email}
                        onChange={e => setContact(c => ({ ...c, email: e.target.value }))} />
                    </div>
                    <div>
                      <label style={label} htmlFor="hp-phone">Phone</label>
                      <input id="hp-phone" style={field} value={contact.phone}
                        onChange={e => setContact(c => ({ ...c, phone: e.target.value }))} />
                    </div>
                  </div>

                  <div>
                    <label style={label} htmlFor="hp-notes">Anything else we should know?</label>
                    <textarea id="hp-notes" style={{ ...field, minHeight: 80, resize: 'vertical' }}
                      value={contact.notes}
                      onChange={e => setContact(c => ({ ...c, notes: e.target.value }))}
                      placeholder="Access, timing, existing units to remove…" />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#dc2626', fontSize: 14, margin: 0 }}>
                      Something went wrong sending your list — please try again, or call us on 0800 477 123.
                    </p>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="btn btn-primary"
                    style={{ padding: 14, fontSize: 16, opacity: status === 'sending' ? 0.7 : 1 }}>
                    {status === 'sending' ? 'Sending…' : 'Send my list'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {!pricingEnabled && models !== null && (
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 24, lineHeight: 1.7 }}>
            Pricing is shown once your enquiry is confirmed — send us your list and we'll
            come back with figures.
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .calc-fields { grid-template-columns: 1fr !important; }
          .basket-row { grid-template-columns: 1fr auto !important; row-gap: 10px !important; }
        }
      `}</style>
    </section>
  )
}
