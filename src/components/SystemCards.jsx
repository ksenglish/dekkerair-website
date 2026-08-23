import { Link } from 'react-router-dom'
import { nzd } from '../config'
import useVentilationPricing from '../hooks/useVentilationPricing'

// The three systems side by side, each opening its own page with the
// calculator already set to it. Prices are the cheapest model under each
// system — a genuine "from", worked out from the price list rather than typed
// in here.
export default function SystemCards({ systems, family, basePath }) {
  const { fromBySystem, installPerOutlet } = useVentilationPricing(family)

  return (
    <section style={{ padding: '80px 0', background: 'var(--light)' }}>
      <div className="container">
        <div className="section-label">Choose your system</div>
        <h2 className="section-title">Three ways to do it</h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          They all move filtered air through the house. What separates them is where
          the air can come from, and how much say you get over it. Pick one to size
          it for your home.
        </p>

        <div className="system-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24,
        }}>
          {systems.map(s => {
            const from = fromBySystem[s.system]
            return (
              <Link key={s.slug} to={`${basePath}/${s.slug}`} style={{
                background: 'white', border: '1px solid var(--border)', borderRadius: 14,
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
                position: 'relative', transition: 'border-color 0.15s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
              >
                {s.badge && (
                  <div style={{
                    position: 'absolute', top: 16, right: -34, transform: 'rotate(45deg)',
                    background: '#1a1a1a', color: 'white', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '5px 40px',
                  }}>{s.badge}</div>
                )}

                <div style={{ padding: '28px 26px 0' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginTop: 8 }}>{s.tagline}</p>
                </div>

                <div style={{
                  background: 'var(--light)', margin: '20px 0 0', height: 190,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img src={s.image} alt={s.title} loading="lazy" decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 14 }} />
                </div>

                <ul style={{ listStyle: 'none', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 9, fontSize: 13.5, lineHeight: 1.55, color: 'var(--muted)' }}>
                      <span aria-hidden="true" style={{ color: '#1a1a1a' }}>✓</span><span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ padding: '20px 26px 26px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.01em' }}>
                    {from != null ? `From ${nzd(from)}` : 'Price on request'}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
                    Supply only, inc GST
                    {installPerOutlet != null && ` · installation from ${nzd(installPerOutlet)} per outlet`}
                  </div>
                  <div style={{
                    marginTop: 16, fontSize: 13, fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    Size it for my home →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .system-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
