import { useState } from 'react'
import { lossnay } from '../data/lossnay'

// Mitsubishi Electric's own Lossnay Wi-Fi Control demo, embedded.
//
// Their hosted app rather than a rebuild of it: it stays current without us
// touching it, and a visitor is driving the real interface rather than our
// impression of it. Neither embed is mounted until its tab is opened, so the
// page isn't loading two third-party frames nobody asked for.

const TABS = [
  { key: 'app', label: 'Try the app', hint: 'Interactive demo' },
  { key: 'video', label: 'Watch the walkthrough', hint: '2 min' },
]

const FEATURES = [
  'See how much heat is being recovered, live',
  'Watch what the core is doing to the incoming air',
  'Switch on free cooling and boost',
  'Set fan speeds and timers',
  'Get filter and core cleaning reminders',
  'Check CO₂ levels where a sensor is fitted',
]

export default function LossnayDemo() {
  const [tab, setTab] = useState('app')
  const { appUrl, videoId, videoTitle, sourceUrl } = lossnay.demo

  return (
    <section id="demo" style={{ padding: '80px 0', background: '#1a1a1a', color: 'white' }}>
      <div className="container">
        <div className="demo-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'center',
        }}>
          <div>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Lossnay Wi-Fi Control
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800,
              lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>
              Have a go on the real app
            </h2>
            <p style={{
              fontSize: 16.5, color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8, marginTop: 18, maxWidth: 520,
            }}>
              This is Mitsubishi Electric's live demonstration unit, not a picture of one.
              Press the buttons — turn it on, change the fan speed, switch bypass on and
              watch what happens to the temperatures.
            </p>

            <ul style={{
              listStyle: 'none', display: 'grid', gap: 11, marginTop: 28, maxWidth: 520,
            }}>
              {FEATURES.map(f => (
                <li key={f} style={{
                  display: 'flex', gap: 11, fontSize: 15,
                  color: 'rgba(255,255,255,0.82)', lineHeight: 1.6,
                }}>
                  <span aria-hidden="true" style={{ color: 'white' }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginTop: 26 }}>
              Demonstration app and video supplied by Mitsubishi Electric New Zealand.{' '}
              <a href={sourceUrl} target="_blank" rel="noreferrer noopener"
                style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline' }}>
                View it on their site
              </a>
              . Values shown are representative.
            </p>
          </div>

          {/* ── the phone ── */}
          <div>
            <div role="tablist" aria-label="Demonstration"
              style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              {TABS.map(t => {
                const on = t.key === tab
                return (
                  <button key={t.key} type="button" role="tab" aria-selected={on}
                    onClick={() => setTab(t.key)}
                    style={{
                      flex: 1, padding: '10px 12px', borderRadius: 8,
                      fontSize: 13.5, fontWeight: 600, lineHeight: 1.3,
                      background: on ? 'white' : 'rgba(255,255,255,0.08)',
                      color: on ? '#1a1a1a' : 'rgba(255,255,255,0.75)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      transition: 'all 0.15s',
                    }}>
                    {t.label}
                    <span style={{ display: 'block', fontSize: 11, fontWeight: 400, opacity: 0.6 }}>
                      {t.hint}
                    </span>
                  </button>
                )
              })}
            </div>

            {tab === 'app' ? (
              <div style={{
                // A phone-shaped frame, because that is the device the app is
                // built for — given a wide box it lays itself out wrongly.
                background: '#000', borderRadius: 34, padding: 11,
                border: '1px solid rgba(255,255,255,0.16)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                maxWidth: 400, margin: '0 auto',
              }}>
                <div style={{
                  position: 'relative', borderRadius: 24, overflow: 'hidden',
                  background: '#f7f7f7', aspectRatio: '9 / 17',
                }}>
                  {/* Sits behind the frame: if the embed is blocked or slow, the
                      visitor gets a way through instead of a white rectangle. */}
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: 14, padding: 28, textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>
                      Loading Mitsubishi Electric's demo…
                    </p>
                    <a href={appUrl} target="_blank" rel="noreferrer noopener"
                      style={{
                        fontSize: 13.5, fontWeight: 600, color: '#1a1a1a',
                        textDecoration: 'underline',
                      }}>
                      Open it in a new tab instead
                    </a>
                  </div>

                  <iframe
                    src={appUrl}
                    title="Mitsubishi Electric Lossnay Wi-Fi Control demonstration"
                    loading="lazy"
                    style={{
                      position: 'relative', width: '100%', height: '100%',
                      border: 0, display: 'block',
                    }}
                  />
                </div>
              </div>
            ) : (
              <div style={{
                borderRadius: 14, overflow: 'hidden', background: '#000',
                aspectRatio: '16 / 9', border: '1px solid rgba(255,255,255,0.16)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              }}>
                {/* No lazy loading here: this frame only exists once someone
                    has clicked the tab, and Chrome will otherwise sit on it. */}
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}`}
                  title={videoTitle}
                  allow="fullscreen; picture-in-picture"
                  style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                />
              </div>
            )}

            <p style={{
              fontSize: 12.5, color: 'rgba(255,255,255,0.45)',
              textAlign: 'center', marginTop: 14, lineHeight: 1.6,
            }}>
              {tab === 'app'
                ? 'Best on a phone-sized screen — it is a phone app.'
                : videoTitle}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .demo-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
