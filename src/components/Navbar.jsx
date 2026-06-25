import { useState } from 'react'
import logo from '/dekkerair-logo.jpg'

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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>

        {/* Logo */}
        <a href="#" style={{ flexShrink: 0 }}>
          <img src={logo} alt="Dekker Air" style={{ height: 52, width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop nav — centred */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 48 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 15, fontWeight: 500, color: '#1a1a1a',
              letterSpacing: '0.02em', transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.target.style.color = '#d1000a'}
            onMouseLeave={e => e.target.style.color = '#1a1a1a'}
            >{l.label}</a>
          ))}
        </nav>

        {/* Right — icons + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="desktop-nav">
          <a href="tel:0800477123" title="Call us" style={{ color: '#404040', fontSize: 20, transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = '#d1000a'}
            onMouseLeave={e => e.target.style.color = '#404040'}>📞</a>
          <a href="mailto:office@dekkergroup.co.nz" title="Email us" style={{ color: '#404040', fontSize: 20, transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = '#d1000a'}
            onMouseLeave={e => e.target.style.color = '#404040'}>✉️</a>
          <a href="#contact" style={{
            padding: '10px 22px', border: '1px solid #1a1a1a', borderRadius: 4,
            fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
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
