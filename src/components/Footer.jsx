import logo from '/dekkerair-logo.jpg'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.7)', padding: '48px 0 28px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 40 }}>

          <div>
            <img src={logo} alt="Dekker Air" style={{ height: 48, width: 'auto', objectFit: 'contain', marginBottom: 16, filter: 'brightness(1.1)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
              Dekker Air provides professional heating, cooling, and ventilation solutions
              across the Bay of Plenty and surrounding regions.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Heating', 'Cooling', 'Ventilation', 'HVAC Servicing'].map(s => (
                <li key={s}><a href="#services" style={{ fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = ''}>{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="tel:0800477123" style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = ''}>📞 0800 477 123</a>
              <a href="mailto:office@dekkergroup.co.nz" style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = ''}>✉️ office@dekkergroup.co.nz</a>
              <span>🕐 Mon–Fri, 9am–5pm</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span>© {new Date().getFullYear()} Dekker Air. All rights reserved.</span>
          <a href="https://www.dekkergroup.co.nz" target="_blank" rel="noreferrer"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = ''}>
            Part of the Dekker Group
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
