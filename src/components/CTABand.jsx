import { Link } from 'react-router-dom'

export default function CTABand({
  title = 'Ready to get started?',
  subtitle = "Tell us what you're after and we'll come out, take a look, and put a written quote in front of you — free of charge.",
}) {
  return (
    <section style={{ background: '#1a1a1a', color: 'white', padding: '72px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 300, marginBottom: 14 }}>{title}</h2>
        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7,
          maxWidth: 560, margin: '0 auto 32px',
        }}>{subtitle}</p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{
            padding: '14px 34px', background: 'white', color: '#1a1a1a', borderRadius: 4,
            fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Request a Quote</Link>

          <a href="tel:0800477123" style={{
            padding: '14px 34px', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 4,
            fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'white', transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1a1a1a' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
          >Call 0800 477 123</a>
        </div>
      </div>
    </section>
  )
}
