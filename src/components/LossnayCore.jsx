import { useState } from 'react'
import { lossnay } from '../data/lossnay'

// How the Lossnay core behaves across the year, drawn rather than described.
//
// Original artwork — Mitsubishi Electric's own animation is on their site and
// in the embedded app demo further down the page. The numbers on each mode are
// their published examples; see src/data/lossnay.js.

const COOL = '#2563eb'
const WARM = '#ea580c'
const OFF = '#9ca3af'

// Blue below room temperature, orange above — so a stream's colour reads as its
// temperature without anyone consulting a key.
const tempColour = (t) => (t < 19 ? COOL : WARM)

function Stream({ d, colour, label, temp, labelX, labelY, anchor = 'middle', dim }) {
  return (
    <g opacity={dim ? 0.25 : 1}>
      <path d={d} fill="none" stroke={colour} strokeWidth="9" strokeLinecap="round"
        markerEnd={`url(#arrow-${colour.replace('#', '')})`} />
      <text x={labelX} y={labelY} textAnchor={anchor} fontSize="14" fill="#4b5563" fontWeight="600">
        {label}
      </text>
      {temp != null && (
        <text x={labelX} y={labelY + 21} textAnchor={anchor} fontSize="19" fill={colour} fontWeight="800">
          {temp}°C
        </text>
      )}
    </g>
  )
}

export default function LossnayCore() {
  const [modeKey, setModeKey] = useState('winter')
  const mode = lossnay.modes.find(m => m.key === modeKey)
  const bypass = !!mode.bypass

  const inColour = tempColour(mode.outside)
  const supplyColour = bypass ? inColour : tempColour(mode.supply)
  const returnColour = tempColour(mode.indoor)

  return (
    <section style={{ padding: '80px 0', background: 'var(--light)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-title">The core does the work</h2>
        <p className="section-subtitle" style={{ maxWidth: 720, marginBottom: 32 }}>
          Two air streams cross inside the core without ever mixing. Heat passes between
          them through the channel walls. Pick a season to see what that does to the air
          arriving in your rooms.
        </p>

        {/* ── mode switch ── */}
        <div role="group" aria-label="Season" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 26 }}>
          {lossnay.modes.map(m => {
            const on = m.key === modeKey
            return (
              <button key={m.key} type="button" onClick={() => setModeKey(m.key)} aria-pressed={on}
                style={{
                  padding: '11px 20px', borderRadius: 999, fontSize: 14.5, fontWeight: 600,
                  background: on ? '#1a1a1a' : 'white',
                  color: on ? 'white' : 'var(--muted)',
                  border: `1px solid ${on ? '#1a1a1a' : 'var(--border)'}`,
                  transition: 'all 0.15s',
                }}>
                {m.name}
                <span style={{ opacity: 0.7, fontWeight: 400 }}> · {m.caption}</span>
              </button>
            )
          })}
        </div>

        <div style={{
          background: 'white', border: '1px solid var(--border)', borderRadius: 16,
          padding: 'clamp(16px, 3vw, 32px)',
        }}>
          {/* On a phone the diagram would shrink until its labels were
              unreadable, so below 620px it keeps its size and pans instead. */}
          <div className="core-scroll">
          <svg viewBox="0 0 760 430" role="img"
            aria-label={`${mode.name}: ${mode.summary}`}
            style={{ width: '100%', height: 'auto' }}>
            <defs>
              {[COOL, WARM, OFF].map(c => (
                <marker key={c} id={`arrow-${c.replace('#', '')}`} viewBox="0 0 10 10"
                  refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={c} />
                </marker>
              ))}
              <pattern id="plates" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M0 14 L14 0" stroke="#cbd5e1" strokeWidth="1.5" />
              </pattern>
            </defs>

            {/* the building line: outside on the left, rooms on the right */}
            <line x1="185" y1="30" x2="185" y2="400" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="7 7" />
            <text x="96" y="26" textAnchor="middle" fontSize="12.5" fill="#9ca3af"
              fontWeight="700" letterSpacing="1.4">OUTSIDE</text>
            <text x="470" y="26" textAnchor="middle" fontSize="12.5" fill="#9ca3af"
              fontWeight="700" letterSpacing="1.4">INSIDE YOUR HOME</text>

            {/* the core */}
            <g opacity={bypass ? 0.3 : 1}>
              <rect x="300" y="130" width="160" height="170" rx="10"
                fill="url(#plates)" stroke="#94a3b8" strokeWidth="2" />
              <rect x="300" y="130" width="160" height="170" rx="10" fill="white" opacity="0.55" />
              <text x="380" y="207" textAnchor="middle" fontSize="14" fontWeight="800" fill="#334155">
                LOSSNAY
              </text>
              <text x="380" y="227" textAnchor="middle" fontSize="14" fontWeight="800" fill="#334155">
                CORE
              </text>
            </g>

            {/* fresh air in from outside */}
            <Stream
              d="M 40 175 L 292 175"
              colour={inColour}
              label="Fresh air in"
              temp={mode.outside}
              labelX={110} labelY={140}
            />

            {/* bypass: straight past the core, or through it */}
            {bypass ? (
              <g>
                <path d="M 300 175 C 340 175 340 78 380 78 C 420 78 420 175 468 175"
                  fill="none" stroke={inColour} strokeWidth="9" strokeLinecap="round"
                  markerEnd={`url(#arrow-${inColour.replace('#', '')})`} />
                <text x="380" y="62" textAnchor="middle" fontSize="13.5" fill="#4b5563" fontWeight="700">
                  Core bypassed
                </text>
              </g>
            ) : (
              <line x1="300" y1="175" x2="460" y2="175" stroke={inColour}
                strokeWidth="9" strokeLinecap="round" opacity="0.45" />
            )}

            {/* supply into the rooms */}
            <Stream
              d="M 468 175 L 720 175"
              colour={supplyColour}
              label={bypass ? 'Supplied straight to the rooms' : 'Supplied to your rooms'}
              temp={mode.supply}
              labelX={600} labelY={140}
            />

            {/* stale air back from the house */}
            <Stream
              d="M 720 268 L 468 268"
              colour={returnColour}
              label="Stale air from the house"
              temp={mode.indoor}
              labelX={600} labelY={318}
            />

            {!bypass && (
              <line x1="460" y1="268" x2="300" y2="268" stroke={returnColour}
                strokeWidth="9" strokeLinecap="round" opacity="0.45" />
            )}

            {/* exhaust back outside — deliberately unlabelled for temperature,
                since the manufacturer doesn't publish one for these examples */}
            <Stream
              d="M 292 268 L 40 268"
              colour={bypass ? returnColour : OFF}
              label="Stale air out"
              labelX={110} labelY={318}
            />

            {/* what the core changed */}
            {!bypass && (
              <g>
                <rect x="292" y="336" width="176" height="52" rx="9"
                  fill="#1a1a1a" />
                <text x="380" y="358" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.65)"
                  fontWeight="700" letterSpacing="1.2">HEAT RECOVERED</text>
                <text x="380" y="378" textAnchor="middle" fontSize="17" fill="white" fontWeight="800">
                  {mode.delta}
                </text>
              </g>
            )}
          </svg>
          </div>

          <p style={{
            fontSize: 15, color: 'var(--muted)', lineHeight: 1.8,
            marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--border)',
          }}>
            {mode.summary}
          </p>
        </div>

        <p style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.7, marginTop: 16, maxWidth: 760 }}>
          Figures are Mitsubishi Electric's published examples, shown with the conditions
          they were measured under. Real numbers depend on your house, the weather and the
          unit installed — we will give you our own once we have seen the job.
        </p>
      </div>

      <style>{`
        .core-scroll { overflow-x: auto; }
        @media (max-width: 620px) {
          .core-scroll > svg { min-width: 560px; }
        }
      `}</style>
    </section>
  )
}
