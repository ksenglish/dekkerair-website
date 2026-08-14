import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import ContactForm from '../components/ContactForm'
import HeatPumpCalculator from '../components/HeatPumpCalculator'
import { services, getService } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'

function Faq({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      {items.map((item, i) => (
        <div key={item.q} style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setOpen(o => (o === i ? null : i))}
            aria-expanded={open === i}
            style={{
              width: '100%', background: 'none', textAlign: 'left',
              padding: '20px 0', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: 20,
              fontSize: 16, fontWeight: 600, color: '#1a1a1a', fontFamily: 'inherit',
            }}
          >
            {item.q}
            <span style={{
              flexShrink: 0, fontSize: 20, fontWeight: 400, lineHeight: 1,
              transform: open === i ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.2s',
            }}>+</span>
          </button>

          {open === i && (
            <p style={{
              fontSize: 15, color: 'var(--muted)', lineHeight: 1.75,
              padding: '0 0 22px', maxWidth: 720,
            }}>{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ServicePage({ slug }) {
  const service = getService(slug)
  usePageMeta(service.title, service.metaDescription)

  const others = services.filter(s => s.slug !== slug)

  return (
    <>
      <PageHero label="Our Services" title={service.title} subtitle={service.tagline} />

      {/* Intro + what we do */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Overview</div>
              {/* The summary is a full sentence, so it wants a smaller size than
                  the usual .section-title heading. */}
              <h2 className="section-title" style={{ fontSize: 'clamp(21px, 2.8vw, 29px)', lineHeight: 1.4 }}>
                {service.summary}
              </h2>
              {service.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginTop: 18 }}>{p}</p>
              ))}
            </div>

            <div style={{
              background: 'var(--light)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 32,
            }}>
              <h3 style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 20,
              }}>What we do</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {service.offerings.map(o => (
                  <li key={o} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6 }}>
                    <span style={{ color: '#1a1a1a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ padding: '80px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="section-label">Why it matters</div>
          <h2 className="section-title" style={{ marginBottom: 40 }}>What you get from us</h2>

          <div className="quad-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {service.highlights.map(h => (
              <div key={h.title} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: 26,
                boxShadow: 'var(--shadow)',
              }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{h.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.calculator === 'heat-pump' && <HeatPumpCalculator />}

      {/* FAQ + enquiry form */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label">Common questions</div>
              <h2 className="section-title" style={{ marginBottom: 28 }}>{service.title} FAQs</h2>
              <Faq items={service.faqs} />
            </div>

            <div style={{
              background: 'var(--light)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 32,
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Enquire about {service.title.toLowerCase()}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
                We'll get back to you within one business day.
              </p>
              <ContactForm
                defaultService={service.title}
                source={`Dekker Air-Website-${service.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section style={{ padding: '72px 0', background: 'var(--light)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Our other services</h2>
          <div className="tri-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {others.map(o => (
              <Link key={o.slug} to={`/${o.slug}`} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: 26,
                transition: 'box-shadow 0.2s, transform 0.2s',
                display: 'block',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ fontSize: 26, marginBottom: 12 }}>{o.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{o.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{o.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .quad-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tri-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .quad-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
