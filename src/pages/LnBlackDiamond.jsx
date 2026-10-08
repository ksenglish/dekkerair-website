import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import { lnBlackDiamond } from '../data/lnBlackDiamond'
import usePageMeta from '../hooks/usePageMeta'

// Mitsubishi Electric LN Black Diamond Smart Series. Sits under /heating
// because that is what a customer is shopping for — see the same reasoning
// on AireTile.jsx.
export default function LnBlackDiamond() {
  usePageMeta(lnBlackDiamond.title, lnBlackDiamond.metaDescription)

  return (
    <>
      <PageHero
        label={lnBlackDiamond.brand}
        labelImage="/images/lossnay/mitsubishi-electric-logo-white.png"
        title={lnBlackDiamond.title}
        subtitle={lnBlackDiamond.tagline}
        image={lnBlackDiamond.heroImage}
      />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/heating" style={{ color: 'var(--muted)' }}>Heating</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/heating/highwall-heat-pumps" style={{ color: 'var(--muted)' }}>Highwall Heat Pumps</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>LN Black Diamond Smart Series</span>
          </nav>

          <div className="split-grid" style={{
            display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'start',
          }}>
            <div>
              <div className="section-label">Overview</div>
              {lnBlackDiamond.intro.map((p, i) => (
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
                {lnBlackDiamond.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6 }}>
                    <span style={{ color: '#1a1a1a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {lnBlackDiamond.optionalUpgrades.length > 0 && (
                <div style={{ marginTop: 26, paddingTop: 22, borderTop: '1px solid var(--border)' }}>
                  <h2 style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', marginBottom: 20,
                  }}>Optional upgrades</h2>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {lnBlackDiamond.optionalUpgrades.map(u => (
                      <li key={u} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6 }}>
                        <span style={{ color: '#1a1a1a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {lnBlackDiamond.footnotes.length > 0 && (
                <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
                  {lnBlackDiamond.footnotes.map((note, i) => (
                    <p key={i} style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                      * {note}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{
            background: 'var(--light)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 36,
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enquire about the LN Black Diamond Smart Series</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
              Tell us a little about the room and we'll get back to you within one
              business day.
            </p>
            <ContactForm
              defaultService="Heating"
              source="Dekker Air-Website-LN Black Diamond Series"
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
