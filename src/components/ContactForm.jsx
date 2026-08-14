import { useState } from 'react'
import { services } from '../data/services'
import { LEAD_WEBHOOK } from '../config'

const serviceOptions = [...services.map(s => s.title), 'Not sure yet']

// Shared by the home page contact section and the Contact Us page. Posts
// straight into Dekker App's lead intake.
export default function ContactForm({ defaultService = '', source = 'Dekker Air-Website-Contact Form' }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: defaultService, message: '', website: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(LEAD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service_required: form.service,
          message: form.message,
          source,
          website: form.website, // honeypot — real visitors never fill this in
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
    fontSize: 15, fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s',
    background: 'white',
  }

  const focus = e => e.target.style.borderColor = '#1a1a1a'
  const blur = e => e.target.style.borderColor = 'var(--border)'

  if (status === 'sent') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Thanks, we'll be in touch!</h3>
        <p style={{ color: 'var(--muted)', fontSize: 15 }}>
          We've received your enquiry and will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <input type="text" name="website" value={form.website} onChange={e => set('website', e.target.value)}
        autoComplete="off" tabIndex={-1}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Name *</label>
          <input required style={inputStyle} placeholder="Your name" value={form.name}
            onChange={e => set('name', e.target.value)} onFocus={focus} onBlur={blur} />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Phone</label>
          <input style={inputStyle} placeholder="Your phone" value={form.phone}
            onChange={e => set('phone', e.target.value)} onFocus={focus} onBlur={blur} />
        </div>
      </div>

      <div>
        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Email *</label>
        <input required type="email" style={inputStyle} placeholder="your@email.com" value={form.email}
          onChange={e => set('email', e.target.value)} onFocus={focus} onBlur={blur} />
      </div>

      <div>
        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Service Required</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.service}
          onChange={e => set('service', e.target.value)} onFocus={focus} onBlur={blur}>
          <option value="">Select a service...</option>
          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 5 }}>Message</label>
        <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
          placeholder="Tell us a bit about your project..."
          value={form.message} onChange={e => set('message', e.target.value)}
          onFocus={focus} onBlur={blur} />
      </div>

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: 14, margin: 0 }}>
          Something went wrong sending your enquiry — please try again, or call us on 0800 477 123.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary"
        style={{ width: '100%', padding: '14px', fontSize: 16, opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>

      <style>{`
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
