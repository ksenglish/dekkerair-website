import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails'
import usePageMeta from '../hooks/usePageMeta'

const areas = [
  'Tauranga', 'Mount Maunganui', 'Papamoa', 'Te Puke',
  'Katikati', 'Omokoroa', 'Rotorua', 'Whakatane',
]

export default function ContactUs() {
  usePageMeta(
    'Contact Us',
    'Get in touch with Dekker Air for heating, cooling, ventilation and HVAC servicing across the Bay of Plenty. Free quotes, no obligation.',
  )

  return (
    <>
      <PageHero
        label="Get in touch"
        title="Contact Us"
        subtitle="Tell us what you need and we'll come back to you within one business day with a free, no-obligation quote."
      />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            <div>
              <div className="section-label">Talk to us</div>
              <h2 className="section-title">However suits you best</h2>
              <p className="section-subtitle" style={{ marginBottom: 40 }}>
                Call us if it's urgent, email if it's not, or fill in the form and we'll
                come back to you. Either way you'll be talking to the local team, not a call centre.
              </p>

              <ContactDetails />

              <div style={{ marginTop: 44 }}>
                <h3 style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 16,
                }}>Areas we serve</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {areas.map(a => (
                    <span key={a} style={{
                      fontSize: 14, padding: '7px 14px',
                      background: 'var(--light)', border: '1px solid var(--border)',
                      borderRadius: 999, color: 'var(--mid)',
                    }}>{a}</span>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginTop: 16 }}>
                  Outside these areas? Get in touch anyway — we travel further for
                  larger jobs and can point you in the right direction if we can't help.
                </p>
              </div>

              <div style={{
                marginTop: 44, padding: 24,
                background: 'var(--light)', border: '1px solid var(--border)', borderRadius: 12,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Already a customer?</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  View your quotes, invoices and job history in the customer portal.
                </p>
                <a href="https://app.dekkerair.co.nz" target="_blank" rel="noreferrer"
                  className="btn btn-primary" style={{ fontSize: 14 }}>
                  Open the Portal
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--light)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 36,
              position: 'sticky',
              top: 144,
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Send us an enquiry</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 26 }}>
                Fields marked * are required.
              </p>
              <ContactForm source="Dekker Air-Website-Contact Page" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .split-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </>
  )
}
