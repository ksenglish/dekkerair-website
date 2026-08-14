import { Link } from 'react-router-dom'
import logo from '/dekkerair-logo.jpg'
import { services } from '../data/services'

const dim = { fontSize: 14, transition: 'color 0.2s' }
const lighten = e => e.target.style.color = 'white'
const restore = e => e.target.style.color = ''

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.7)', padding: '48px 0 28px' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 40 }}>

          <div>
            <Link to="/">
              <img src={logo} alt="Dekker Air" style={{ height: 48, width: 'auto', objectFit: 'contain', marginBottom: 16, filter: 'brightness(1.1)' }} />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
              Dekker Air provides professional heating, cooling, and ventilation solutions
              across the Bay of Plenty and surrounding regions.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(s => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} style={dim} onMouseEnter={lighten} onMouseLeave={restore}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><Link to="/" style={dim} onMouseEnter={lighten} onMouseLeave={restore}>Home</Link></li>
              <li><Link to="/deals" style={dim} onMouseEnter={lighten} onMouseLeave={restore}>Latest Deals</Link></li>
              <li><Link to="/contact" style={dim} onMouseEnter={lighten} onMouseLeave={restore}>Contact Us</Link></li>
              <li>
                <a href="https://app.dekkerair.co.nz" target="_blank" rel="noreferrer"
                  style={dim} onMouseEnter={lighten} onMouseLeave={restore}>Customer Portal</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="tel:0800477123" style={dim} onMouseEnter={lighten} onMouseLeave={restore}>📞 0800 477 123</a>
              <a href="mailto:office@dekkergroup.co.nz" style={dim} onMouseEnter={lighten} onMouseLeave={restore}>✉️ office@dekkergroup.co.nz</a>
              <span>🕐 Mon–Fri, 9am–5pm</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span>© {new Date().getFullYear()} Dekker Air. All rights reserved.</span>
          <a href="https://www.dekkergroup.co.nz" target="_blank" rel="noreferrer"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={lighten} onMouseLeave={restore}>
            Part of the Dekker Group
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
