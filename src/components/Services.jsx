import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" style={{ padding: '72px 0', background: 'white' }}>
      <div className="container">
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}>
          {services.map(s => (
            <div key={s.slug} style={{ textAlign: 'center', padding: '8px 8px 0' }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: 8,
                background: '#1a1a1a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: 30,
              }}>{s.icon}</div>

              <h3 style={{
                fontSize: 13, fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: 12,
              }}>{s.title}</h3>

              <p style={{
                fontSize: 14, color: '#555',
                lineHeight: 1.7, marginBottom: 16,
              }}>{s.summary}</p>

              <Link to={`/${s.slug}`} style={{
                fontSize: 13, color: '#1a1a1a', fontWeight: 500,
                borderBottom: '1px solid #1a1a1a',
                paddingBottom: 1,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Learn More &gt;</Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
