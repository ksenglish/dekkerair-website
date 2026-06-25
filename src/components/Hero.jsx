export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundImage: 'url(/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 700 }}>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontWeight: 300,
          color: 'white',
          lineHeight: 1.25,
          letterSpacing: '0.02em',
          marginBottom: 32,
          textShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}>
          Comfort Starts at Home<br />
          with <span style={{ fontWeight: 700 }}>DEKKER AIR</span>
        </h1>

        <a href="#contact" style={{
          display: 'inline-block',
          padding: '14px 40px',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: 4,
          color: 'white',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'all 0.2s',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1a1a1a' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white' }}
        >Contact Us</a>
      </div>
    </section>
  )
}
