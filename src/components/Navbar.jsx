import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '/dekkerair-logo.jpg'
import { services } from '../data/services'

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const linkStyle = (isActive) => ({
  fontSize: 17,
  fontWeight: 500,
  color: '#1a1a1a',
  letterSpacing: '0.02em',
  paddingBottom: 4,
  borderBottom: isActive ? '2px solid #1a1a1a' : '2px solid transparent',
  transition: 'opacity 0.15s',
})

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  const onServicePage = services.some(s => `/${s.slug}` === pathname)
  const closeAll = () => { setMenuOpen(false); setServicesOpen(false) }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'white',
      boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 120 }}>

        {/* Logo */}
        <Link to="/" onClick={closeAll} style={{ flexShrink: 0 }}>
          <img src={logo} alt="Dekker Air" style={{ height: 100, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop nav — centred */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">

          {/* Services dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onKeyDown={e => { if (e.key === 'Escape') setServicesOpen(false) }}
          >
            <button
              // Opens rather than toggles: hovering already opened it, so a
              // toggle here would just shut it again under the cursor.
              onClick={() => setServicesOpen(true)}
              onFocus={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              style={{
                ...linkStyle(onServicePage),
                background: 'none',
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'inherit',
              }}
            >
              Our Services
              <span style={{
                fontSize: 10,
                transform: servicesOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s',
              }}>▼</span>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                marginTop: 14, minWidth: 240,
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 6,
                boxShadow: 'var(--shadow-lg)',
                padding: '8px 0',
              }}>
                {services.map(s => (
                  <Link key={s.slug} to={`/${s.slug}`} onClick={closeAll}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '11px 18px', fontSize: 15, color: '#1a1a1a',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--light)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: 17 }}>{s.icon}</span>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/deals" style={({ isActive }) => linkStyle(isActive)}>Latest Deals</NavLink>
          <NavLink to="/contact" style={({ isActive }) => linkStyle(isActive)}>Contact Us</NavLink>
        </nav>

        {/* Right — icons + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="desktop-nav">
          <a href="tel:0800477123" title="Call us" style={{ color: '#000', display: 'flex', transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <PhoneIcon />
          </a>
          <a href="mailto:office@dekkergroup.co.nz" title="Email us" style={{ color: '#000', display: 'flex', transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <MailIcon />
          </a>
          <Link to="/contact" style={{
            padding: '11px 24px', border: '1px solid #1a1a1a', borderRadius: 4,
            fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#1a1a1a', transition: 'all 0.15s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a' }}
          >Get a Quote</Link>
          <a href="https://app.dekkerair.co.nz" target="_blank" rel="noreferrer" style={{
            padding: '11px 24px', background: '#1a1a1a', borderRadius: 4,
            fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'white', transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#444'}
          onMouseLeave={e => e.currentTarget.style.background = '#1a1a1a'}
          >Portal</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(m => !m)} className="hamburger"
          aria-label="Menu" aria-expanded={menuOpen}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 26, color: '#1a1a1a' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid var(--border)',
          padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 16,
          maxHeight: 'calc(100vh - 120px)', overflowY: 'auto',
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--muted)',
          }}>Our Services</div>
          {services.map(s => (
            <Link key={s.slug} to={`/${s.slug}`} onClick={closeAll}
              style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a', paddingLeft: 4 }}>
              {s.icon}&nbsp;&nbsp;{s.title}
            </Link>
          ))}

          <div style={{ height: 1, background: 'var(--border)' }} />

          <Link to="/deals" onClick={closeAll} style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a' }}>Latest Deals</Link>
          <Link to="/contact" onClick={closeAll} style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a' }}>Contact Us</Link>

          <Link to="/contact" onClick={closeAll}
            style={{ padding: '12px', border: '1px solid #1a1a1a', borderRadius: 4, textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Get a Quote
          </Link>
          <a href="https://app.dekkerair.co.nz" target="_blank" rel="noreferrer"
            style={{ padding: '12px', background: '#1a1a1a', color: 'white', borderRadius: 4, textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Portal
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
