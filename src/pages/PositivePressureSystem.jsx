import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import SmartVentCalculator from '../components/SmartVentCalculator'
import { nzd } from '../config'
import useVentilationPricing from '../hooks/useVentilationPricing'
import { positivePressureSystems, getPositivePressureSystem } from '../data/positivePressure'
import usePageMeta from '../hooks/usePageMeta'

// One system, with the positive pressure calculator already set to it. The
// calculator still sizes across the whole range — picking a system here decides
// where it starts, not what it's allowed to recommend.
export default function PositivePressureSystem({ slug }) {
  const system = getPositivePressureSystem(slug)
  usePageMeta(system.title, system.metaDescription)

  const { fromBySystem, installPerOutlet } = useVentilationPricing('positive')
  const from = fromBySystem[system.system]
  const others = positivePressureSystems.filter(s => s.slug !== slug)

  return (
    <>
      <PageHero label="Positive Pressure" title={system.title} subtitle={system.tagline} />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/ventilation" style={{ color: 'var(--muted)' }}>Ventilation</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/ventilation/positive-pressure" style={{ color: 'var(--muted)' }}>Positive Pressure</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{system.title}</span>
          </nav>

          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div style={{
              background: 'var(--light)', border: '1px solid var(--border)', borderRadius: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28,
            }}>
              <img src={system.image} alt={system.title} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div>
              {system.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 18 }}>{p}</p>
              ))}

              <h2 style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', margin: '28px 0 16px',
              }}>Features</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {system.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.6 }}>
                    <span aria-hidden="true">✓</span><span>{f}</span>
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 30, paddingTop: 24, borderTop: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {from != null ? `From ${nzd(from)}` : 'Price on request'}
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 6, lineHeight: 1.7 }}>
                  Supply only, inc GST.
                  {installPerOutlet != null
                    ? ` Installation from ${nzd(installPerOutlet)} per outlet, confirmed after a site visit.`
                    : ' Installation quoted after a site visit.'}
                </div>
                <a href="#calculator" className="btn btn-primary" style={{ marginTop: 20 }}>
                  Size it for my home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartVentCalculator
        family="positive"
        typeTitle="Positive Pressure"
        defaultSystem={system.system}
      />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 22 }}>The other positive pressure systems</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {others.map(o => (
              <Link key={o.slug} to={`/ventilation/positive-pressure/${o.slug}`} style={{
                border: '1px solid var(--border)', borderRadius: 12, padding: 24,
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#1a1a1a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
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
          .split-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  )
}
