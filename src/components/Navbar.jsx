import { useState, useEffect } from 'react'
import logo from '/dekkerair-logo.jpg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="Dekker Air" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 15, fontWeight: 500,
              color: scrolled ? '#1a1a1a' : 'white',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#d1000a'}
            onMouseLeave={e => e.target.style.color = scrolled ? '#1a1a1a' : 'white'}
            >{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Get a Quote
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(m => !m)}
          style={{ display: 'none', background: 'none', border: 'none', fontSize: 26, color: scrolled ? '#1a1a1a' : 'white', lineHeight: 1 }}
          className="hamburger"
          aria-label="Menu"
        >☰</button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #e5e7eb', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: '#1a1a1a' }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center', padding: '12px 24px' }}>Get a Quote</a>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
