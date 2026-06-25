import { useState } from 'react'

const services = ['Heating', 'Cooling', 'Ventilation', 'HVAC Servicing', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire up to a form backend (e.g. Resend, Formspree, or your own API)
    // For now simulate success
    setTimeout(() => setStatus('sent'), 1200)
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
    fontSize: 15, fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s',
    background: 'white',
  }

  return (
    <section id="contact" style={{ padding: '96px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Request a Free Quote</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Fill in the form and we'll get back to you within one business day with
              a no-obligation quote tailored to your needs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: '📞', label: 'Call Us', value: '0800 477 123', href: 'tel:0800477123' },
                { icon: '✉️', label: 'Email', value: 'office@dekkergroup.co.nz', href: 'mailto:office@dekkergroup.co.nz' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–5pm' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: '#fff0f0', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a' }}>{c.value}</a>
                      : <div style={{ fontSize: 15, fontWeight: 500 }}>{c.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: 'var(--light)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 36,
          }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Thanks, we'll be in touch!</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15 }}>
                  We've received your enquiry and will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Name *</label>
                    <input required style={inputStyle} placeholder="Your name" value={form.name}
                      onChange={e => set('name', e.target.value)}
                      onFocus={e => e.target.style.borderColor = '#1a1a1a'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Phone</label>
                    <input style={inputStyle} placeholder="Your phone" value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      onFocus={e => e.target.style.borderColor = '#1a1a1a'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Email *</label>
                  <input required type="email" style={inputStyle} placeholder="your@email.com" value={form.email}
                    onChange={e => set('email', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#1a1a1a'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Service Required</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service}
                    onChange={e => set('service', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#1a1a1a'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Message</label>
                  <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    placeholder="Tell us a bit about your project..."
                    value={form.message} onChange={e => set('message', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#1a1a1a'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: 16, opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
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
