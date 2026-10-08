import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import ImageGallery from '../components/ImageGallery'
import { highwall } from '../data/highwall'
import usePageMeta from '../hooks/usePageMeta'

// High-wall heat pumps across the brands we install. Sits under /heating
// because that is what a customer is shopping for — see the same reasoning on
// AireTile.jsx.
export default function Highwall() {
  usePageMeta(highwall.title, highwall.metaDescription)

  return (
    <>
      <PageHero
        title={highwall.title}
        subtitle={highwall.tagline}
        image={highwall.heroImage}
      />

      <section style={{ padding: '80px 0 24px', background: 'white' }}>
        <div className="container">
          <nav style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32 }}>
            <Link to="/heating" style={{ color: 'var(--muted)' }}>Heating</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>Highwall Heat Pumps</span>
          </nav>

          <div className="section-label">Overview</div>
          {highwall.intro.map((p, i) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: i === 0 ? 0 : 18, maxWidth: 720 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {highwall.brands.map(brand => (
        brand.images.length > 0 ? (
          <ImageGallery
            key={brand.name}
            images={brand.images}
            title={brand.name}
            intro={brand.intro}
            logo={brand.logo}
          />
        ) : (
          <section key={brand.name} style={{ padding: '0 0 80px', background: 'white' }}>
            <div className="container">
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} style={{ height: 36, marginBottom: 8 }} />
              ) : (
                <div className="section-label">Have a look</div>
              )}
              <h2 className="section-title">{brand.name}</h2>
              <p className="section-subtitle">{brand.intro}</p>
            </div>
          </section>
        )
      ))}

      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{
            background: 'var(--light)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 36,
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Enquire about high-wall heat pumps</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
              Tell us a little about the room and we'll get back to you within one
              business day.
            </p>
            <ContactForm
              defaultService="Heating"
              source="Dekker Air-Website-Highwall"
            />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
