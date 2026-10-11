import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import { rinnaiProSeries2Ducted } from '../data/rinnaiProSeries2Ducted'
import usePageMeta from '../hooks/usePageMeta'

// Rinnai Pro Series 2 Ducted Heat Pump System. Sits under /heating because
// that is what a customer is shopping for — see the same reasoning on
// RinnaiProSeries2.jsx, the high-wall version of this range.
export default function RinnaiProSeries2Ducted() {
  usePageMeta(rinnaiProSeries2Ducted.title, rinnaiProSeries2Ducted.metaDescription)

  return (
    <>
      <PageHero
        label={rinnaiProSeries2Ducted.brand}
        labelImage="/images/heating/rinnai-logo.webp"
        title={rinnaiProSeries2Ducted.title}
        subtitle={rinnaiProSeries2Ducted.tagline}
        image={rinnaiProSeries2Ducted.heroImage}
      />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/heating" style={{ color: 'var(--muted)' }}>Heating</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/heating/ducted-heating" style={{ color: 'var(--muted)' }}>Ducted Heating</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>Pro Series 2</span>
          </nav>

          <div className="split-grid" style={{
            display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'start',
          }}>
            <div>
              <div className="section-label">Overview</div>
              {rinnaiProSeries2Ducted.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: i === 0 ? 0 : 18 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{
              background: 'var(--light)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 32,
            }}>
              <h2 style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 20,
              }}>Key features</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {rinnaiProSeries2Ducted.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6 }}>
                    <span style={{ color: '#1a1a1a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <div className="section-label">Product details</div>
          <h2 className="section-title">{rinnaiProSeries2Ducted.buildQuality.title}</h2>
          {rinnaiProSeries2Ducted.buildQuality.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: i === 0 ? 16 : 18, maxWidth: 720 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <h2 className="section-title">{rinnaiProSeries2Ducted.coilProtection.title}</h2>
          {rinnaiProSeries2Ducted.coilProtection.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: i === 0 ? 16 : 18, maxWidth: 720 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <div className="section-label">In detail</div>
          <h2 className="section-title" style={{ marginBottom: 28 }}>Everything the Pro Series 2 Ducted does</h2>
          <div className="highlight-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}>
            {rinnaiProSeries2Ducted.highlights.map(h => (
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
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{
            background: 'var(--light)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 36,
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enquire about the Pro Series 2 Ducted</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
              Tell us a little about your home and we'll get back to you within one
              business day.
            </p>
            <ContactForm
              defaultService="Heating"
              source="Dekker Air-Website-Rinnai Pro Series 2 Ducted"
            />
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
