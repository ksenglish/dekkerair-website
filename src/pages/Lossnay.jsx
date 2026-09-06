import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import LossnayCore from '../components/LossnayCore'
import LossnayDemo from '../components/LossnayDemo'
import { lossnay } from '../data/lossnay'
import usePageMeta from '../hooks/usePageMeta'

// Mitsubishi Electric Lossnay. Sits under /ventilation because that is what a
// customer is shopping for — the brand is the reason to pick it, not the
// category it belongs to.
export default function Lossnay() {
  usePageMeta(lossnay.title, lossnay.metaDescription)

  return (
    <>
      <PageHero label={lossnay.brand} title={lossnay.title} subtitle={lossnay.tagline} />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/ventilation" style={{ color: 'var(--muted)' }}>Ventilation</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>Lossnay</span>
          </nav>

          <div className="split-grid" style={{
            display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 64, alignItems: 'start',
          }}>
            <div>
              <div className="section-label">Overview</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(21px, 2.8vw, 29px)', lineHeight: 1.4 }}>
                Ventilation that keeps the heat you have already paid for.
              </h2>
              {lossnay.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: 18 }}>
                  {p}
                </p>
              ))}

              <a href="#demo" className="btn btn-primary" style={{ marginTop: 28 }}>
                Try the app demo
              </a>
            </div>

            {/* The three numbers that make the case, each with the conditions
                it was measured under rather than on its own. */}
            <div style={{ display: 'grid', gap: 14 }}>
              {lossnay.headline.map(h => (
                <div key={h.figure} style={{
                  background: 'var(--light)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '22px 24px',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    {h.figure}
                  </div>
                  <div style={{ fontSize: 14.5, marginTop: 6, lineHeight: 1.5 }}>{h.label}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 8, lineHeight: 1.5 }}>
                    {h.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LossnayCore />

      <LossnayDemo />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="section-label">Why it matters</div>
          <h2 className="section-title">What Lossnay gives you</h2>
          <div className="highlight-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24, marginTop: 36,
          }}>
            {lossnay.highlights.map(h => (
              <div key={h.title} style={{
                background: 'var(--light)', border: '1px solid var(--border)',
                borderRadius: 12, padding: 26,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The range</h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 640 }}>
            Which unit suits depends on the house and how much of the app you want.
            We will size it and tell you what is included before you commit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {lossnay.range.map(r => (
              <div key={r.name} style={{
                border: '1px solid var(--border)', borderRadius: 12, padding: 24,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{r.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Common questions</div>
              <h2 className="section-title">Lossnay FAQs</h2>
              <div style={{ marginTop: 28 }}>
                {lossnay.faqs.map(f => (
                  <details key={f.q} style={{ borderTop: '1px solid var(--border)', padding: '18px 0' }}>
                    <summary style={{ fontSize: 16, fontWeight: 600, cursor: 'pointer', listStyle: 'none' }}>
                      {f.q}
                    </summary>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, marginTop: 12 }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--light)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 36,
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enquire about Lossnay</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
                Tell us a little about the house and we will come back to you within one
                business day.
              </p>
              <ContactForm
                defaultService="Ventilation"
                source="Dekker Air-Website-Lossnay"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 22 }}>Other ventilation options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            <Link to="/ventilation/balanced-pressure" style={{
              border: '1px solid var(--border)', borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>♻️</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Balanced Pressure</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                The wider category Lossnay belongs to, including SmartVent systems.
              </p>
            </Link>
            <Link to="/ventilation/positive-pressure" style={{
              border: '1px solid var(--border)', borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>🌬️</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Positive Pressure</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                A simpler, cheaper way to deal with condensation in an older home.
              </p>
            </Link>
            <Link to="/ventilation" style={{
              border: '1px solid var(--border)', borderRadius: 12, padding: 24,
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>💨</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>All ventilation</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                Heat transfer, extraction and everything else we install.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        details > summary::-webkit-details-marker { display: none; }
        details > summary::after { content: ' +'; color: var(--muted); }
        details[open] > summary::after { content: ' –'; }
      `}</style>
    </>
  )
}
