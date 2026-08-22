import { useEffect, useMemo, useState } from 'react'
import { VENTILATION_ENDPOINT, LEAD_WEBHOOK, nzd } from '../config'

// Sizes a SmartVent system from floor area and the number of outlets, using the
// same bands the team uses on site — they come from Dekker App rather than a
// copy kept here, so the two can't drift apart.
//
// `family` is 'positive' or 'balanced'.

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

export default function SmartVentCalculator({ family, typeTitle }) {
  const [rows, setRows] = useState(null) // null = loading, [] = unavailable
  const [pricingEnabled, setPricingEnabled] = useState(false)
  const [installPerOutlet, setInstallPerOutlet] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${VENTILATION_ENDPOINT}?family=${family}`)
      .then(r => { if (!r.ok) throw new Error('bad response'); return r.json() })
      .then(data => {
        if (cancelled) return
        setRows(data.systems || [])
        setPricingEnabled(!!data.pricingEnabled)
        setInstallPerOutlet(data.installPerOutletIncGstCents ?? null)
      })
      .catch(() => { if (!cancelled) setRows([]) })
    return () => { cancelled = true }
  }, [family])

  const [area, setArea] = useState('')
  const [outlets, setOutlets] = useState('')
  const [system, setSystem] = useState('')

  const systems = useMemo(
    () => (rows ? [...new Set(rows.map(r => r.system))] : []),
    [rows]
  )

  const houseSize = parseInt(area, 10) || 0
  const outletCount = parseInt(outlets, 10) || 0
  const maxHouse = rows && rows.length ? Math.max(...rows.map(r => r.houseMax)) : null
  const overSize = maxHouse != null && houseSize > maxHouse

  // An exact band match wins. Failing that an outlet-only match is shown, which
  // is what the team's own calculator falls back to — the outlet count still
  // says something useful when the house is outside the charted sizes.
  const { match, approximate } = useMemo(() => {
    if (!rows || !outletCount) return { match: null, approximate: false }
    const pool = system ? rows.filter(r => r.system === system) : rows
    const exact = houseSize > 0
      ? pool.find(r => houseSize >= r.houseMin && houseSize <= r.houseMax && r.outlets === outletCount)
      : null
    if (exact) return { match: exact, approximate: false }
    const loose = pool.find(r => r.outlets === outletCount)
    return { match: loose || null, approximate: !!loose }
  }, [rows, system, houseSize, outletCount])

  // ── enquiry ────────────────────────────────────────────────────────────────
  const [contact, setContact] = useState({ name: '', email: '', phone: '', notes: '', website: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const summary = [
        `${typeTitle} enquiry built with the website calculator.`,
        '',
        `Floor area: ${houseSize > 0 ? `${houseSize} m²` : 'not given'}`,
        `Outlets wanted: ${outletCount}`,
        match ? `Suggested system: ${match.system} — ${match.model}` : 'No system matched',
        match?.installedPriceIncGstCents != null
          ? `Installed inc GST: ${nzd(match.installedPriceIncGstCents)}`
          : 'Price: on request',
        approximate ? 'NOTE: matched on outlet count only — floor area fell outside the charted bands.' : '',
        contact.notes ? `\nCustomer notes:\n${contact.notes}` : '',
        '\nSizing is the website estimate — confirm on site visit.',
      ].filter(Boolean).join('\n')

      const res = await fetch(LEAD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          service_required: 'Ventilation',
          message: summary,
          source: `Dekker Air-Website-${typeTitle} Calculator`,
          website: contact.website, // honeypot
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="calculator" style={{ padding: '80px 0', background: 'var(--light)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Work it out yourself</div>
        <h2 className="section-title">{typeTitle} Calculator</h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Tell us the floor area and how many rooms you want air to reach, and we'll
          show you the system that suits. It's the same sizing our team uses on site —
          treat it as a solid starting point rather than a final quote.
        </p>

        <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22 }}>1. Your home</h3>

            <div style={{ marginBottom: 18 }}>
              <label style={label} htmlFor="sv-area">Floor area (m²)</label>
              <input id="sv-area" type="number" min="0" style={field} value={area}
                onChange={e => setArea(e.target.value)} placeholder="e.g. 150" />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={label} htmlFor="sv-outlets">Number of outlets</label>
              <input id="sv-outlets" type="number" min="1" style={field} value={outlets}
                onChange={e => setOutlets(e.target.value)} placeholder="e.g. 4" />
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginTop: 6 }}>
                One per room you want fresh air delivered to — usually the bedrooms
                and living areas.
              </p>
            </div>

            {systems.length > 1 && (
              <div>
                <label style={label} htmlFor="sv-system">System</label>
                <select id="sv-system" style={{ ...field, cursor: 'pointer' }} value={system}
                  onChange={e => setSystem(e.target.value)}>
                  <option value="">Recommend one for me</option>
                  {systems.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}
          </div>

          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 22 }}>2. Your recommendation</h3>

            {rows === null ? (
              <p style={{ fontSize: 15, color: 'var(--muted)' }}>Loading systems…</p>
            ) : rows.length === 0 ? (
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                We couldn't load our system list just now. Send us an enquiry below and
                we'll size it for you.
              </p>
            ) : !outletCount ? (
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                Enter how many outlets you'd like and your recommended system will appear here.
              </p>
            ) : (
              <>
                {overSize && (
                  <div style={{
                    marginBottom: 18, padding: 18, borderRadius: 10,
                    background: 'var(--light)', border: '1px solid var(--border)',
                    fontSize: 14, lineHeight: 1.7,
                  }}>
                    {houseSize} m² is beyond the largest system we chart here ({maxHouse} m²).
                    A home this size can still be done — it just needs designing rather than
                    picking off a table. Send us an enquiry and we'll work it out.
                  </div>
                )}

                {match ? (
                  <>
                    <div style={{ borderTop: '1px solid var(--border)' }}>
                      <Row><span style={{ color: 'var(--muted)' }}>System</span><strong>{match.system}</strong></Row>
                      <Row>
                        <span style={{ color: 'var(--muted)' }}>Suits</span>
                        <strong style={{ textAlign: 'right' }}>
                          {match.houseMin}–{match.houseMax} m² · {match.outlets} outlets
                        </strong>
                      </Row>
                    </div>

                    <div style={{
                      borderTop: '1px solid var(--border)', marginTop: 8, paddingTop: 22,
                    }}>
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
                        System only, inc GST
                      </div>

                      {/* Installation is priced per outlet and confirmed on site,
                          so it's shown as a "from" figure rather than folded in. */}
                      {installPerOutlet != null && outletCount > 0 && (
                        <div style={{
                          marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)',
                          fontSize: 14, lineHeight: 1.7,
                        }}>
                          <strong>Installation from {nzd(installPerOutlet * outletCount)}</strong>
                          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
                            {nzd(installPerOutlet)} per outlet × {outletCount}. Confirmed after a
                            site visit — roof access and duct runs make the difference.
                          </div>
                        </div>
                      )}
                    </div>

                    {approximate && (
                      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginTop: 16 }}>
                        Matched on outlet count — your floor area sits outside the charted
                        sizes for this system, so we'll confirm the right unit on site.
                      </p>
                    )}
                  </>
                ) : (
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                    Nothing in this range matches {outletCount} outlet{outletCount === 1 ? '' : 's'}.
                    Send us an enquiry and we'll size it properly.
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── enquiry ── */}
        <div style={{
          marginTop: 32, background: 'white',
          border: '1px solid var(--border)', borderRadius: 16, padding: 32,
        }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ fontSize: 44, marginBottom: 14 }}>✅</div>
              <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Thanks — we've got your details.</h4>
              <p style={{ color: 'var(--muted)', fontSize: 15 }}>
                We'll be in touch within one business day to confirm sizing and book a look.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>3. Send this to us for a firm quote</h3>

              <input type="text" name="website" value={contact.website} tabIndex={-1} autoComplete="off"
                onChange={e => setContact(c => ({ ...c, website: e.target.value }))}
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

              <div className="calc-fields" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                <div>
                  <label style={label} htmlFor="sv-name">Name *</label>
                  <input id="sv-name" required style={field} value={contact.name}
                    onChange={e => setContact(c => ({ ...c, name: e.target.value }))} />
                </div>
                <div>
                  <label style={label} htmlFor="sv-email">Email *</label>
                  <input id="sv-email" required type="email" style={field} value={contact.email}
                    onChange={e => setContact(c => ({ ...c, email: e.target.value }))} />
                </div>
                <div>
                  <label style={label} htmlFor="sv-phone">Phone</label>
                  <input id="sv-phone" style={field} value={contact.phone}
                    onChange={e => setContact(c => ({ ...c, phone: e.target.value }))} />
                </div>
              </div>

              <div>
                <label style={label} htmlFor="sv-notes">Anything else we should know?</label>
                <textarea id="sv-notes" style={{ ...field, minHeight: 80, resize: 'vertical' }}
                  value={contact.notes}
                  onChange={e => setContact(c => ({ ...c, notes: e.target.value }))}
                  placeholder="Roof access, damp problem rooms, timing…" />
              </div>

              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: 14, margin: 0 }}>
                  Something went wrong sending your enquiry — please try again, or call us on 0800 477 123.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn btn-primary"
                style={{ padding: 14, fontSize: 16, opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Sending…' : 'Send my details'}
              </button>
            </form>
          )}
        </div>

        {!pricingEnabled && rows !== null && rows.length > 0 && (
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 24, lineHeight: 1.7 }}>
            Pricing is confirmed with your quote — send us your details and we'll come back with figures.
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .calc-fields { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
