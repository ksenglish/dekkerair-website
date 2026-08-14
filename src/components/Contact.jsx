import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

// The contact section on the home page. The standalone page lives in
// src/pages/ContactUs.jsx and shares the same form.
export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Request a Free Quote</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Fill in the form and we'll get back to you within one business day with
              a no-obligation quote tailored to your needs.
            </p>
            <ContactDetails />
          </div>

          <div style={{
            background: 'var(--light)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 36,
          }}>
            <ContactForm source="Dekker Air-Website-Home Contact Form" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
