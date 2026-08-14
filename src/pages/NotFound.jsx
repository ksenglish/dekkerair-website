import { Link } from 'react-router-dom'
import { services } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page Not Found')

  return (
    <section style={{ padding: '220px 0 120px', background: 'white', textAlign: 'center' }}>
      <div className="container">
        <div style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
        }}>Error 404</div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 300, marginBottom: 16 }}>
          We couldn't find that page
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}>
          The link may be out of date. Here's where you probably wanted to go:
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/contact" style={{
            padding: '14px 32px', border: '1px solid #1a1a1a', borderRadius: 'var(--radius)',
            fontSize: 15, fontWeight: 600, display: 'inline-block',
          }}>Contact us</Link>
        </div>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {services.map(s => (
            <Link key={s.slug} to={`/${s.slug}`} style={{
              fontSize: 14, color: 'var(--muted)', borderBottom: '1px solid var(--border)',
            }}>{s.title}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}
