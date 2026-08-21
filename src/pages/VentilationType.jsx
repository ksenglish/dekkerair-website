import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import SmartVentCalculator from '../components/SmartVentCalculator'
import { ventilationTypes, getVentilationType } from '../data/ventilation'
import usePageMeta from '../hooks/usePageMeta'

export default function VentilationType({ slug }) {
  const type = getVentilationType(slug)
  usePageMeta(`${type.title} Ventilation`, type.metaDescription)

  const others = ventilationTypes.filter(v => v.slug !== slug)

  return (
    <>
      <PageHero label="Ventilation" title={type.title} subtitle={type.tagline} />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/ventilation" style={{ color: 'var(--muted)' }}>Ventilation</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{type.title}</span>
          </nav>

          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Overview</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(21px, 2.8vw, 29px)', lineHeight: 1.4 }}>
                {type.summary}
              </h2>
              {type.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: 18 }}>{p}</p>
              ))}
            </div>

            <div style={{
              background: 'var(--light)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 32,
            }}>
              <h3 style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 18,
              }}>What we do</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {type.offerings.map(o => (
                  <li key={o} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.6 }}>
                    <span aria-hidden="true">✓</span><span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="section-label">Why it matters</div>
          <h2 className="section-title">What you get from us</h2>
          <div className="highlight-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24, marginTop: 36,
          }}>
            {type.highlights.map(h => (
              <div key={h.title} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 12, padding: 26,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {type.calculator && (
        <SmartVentCalculator family={type.calculator} typeTitle={type.title} />
      )}

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Common questions</div>
              <h2 className="section-title">{type.title} FAQs</h2>
              <div style={{ marginTop: 28 }}>
                {type.faqs.map(f => (
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
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enquire about {type.title.toLowerCase()}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
                We'll get back to you within one business day.
              </p>
              <ContactForm
                defaultService="Ventilation"
                source={`Dekker Air-Website-${type.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 22 }}>Other ventilation options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {others.map(o => (
              <Link key={o.slug} to={`/ventilation/${o.slug}`} style={{
                border: '1px solid var(--border)', borderRadius: 12, padding: 24,
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#1a1a1a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: 24, marginBottom: 10 }}>{o.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{o.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{o.tagline}</p>
              </Link>
            ))}
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
