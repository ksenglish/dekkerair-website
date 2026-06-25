import { useState } from 'react'
import logo from '/dekkerair-logo.jpg'

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Latest Deals', href: '#deals' },
    { label: 'Our Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'white',
      boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 120 }}>

        {/* Logo */}
        <a href="#" style={{ flexShrink: 0 }}>
          <img src={logo} alt="Dekker Air" style={{ height: 100, width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop nav — centred */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 48 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 17, fontWeight: 500, color: '#1a1a1a',
              letterSpacing: '0.02em', transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.target.style.color = '#555'}
            onMouseLeave={e => e.target.style.color = '#1a1a1a'}
            >{l.label}</a>
          ))}
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
          <a href="#contact" style={{
            padding: '11px 24px', border: '1px solid #1a1a1a', borderRadius: 4,
            fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#1a1a1a', transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a' }}
          >Get a Quote</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(m => !m)} className="hamburger"
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 26, color: '#1a1a1a' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #e5e7eb', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a' }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ padding: '12px', border: '1px solid #1a1a1a', borderRadius: 4, textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
