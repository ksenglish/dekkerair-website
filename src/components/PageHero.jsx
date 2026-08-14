// Banner at the top of every page except the home page. The generous top
// padding clears the fixed 120px header.
export default function PageHero({ label, title, subtitle }) {
  return (
    <section style={{
      position: 'relative',
      padding: '184px 0 72px',
      backgroundImage: 'url(/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {label && (
          <div style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
            marginBottom: 12,
          }}>{label}</div>
        )}

        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 54px)',
          fontWeight: 300,
          color: 'white',
          lineHeight: 1.2,
          letterSpacing: '0.01em',
          textShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}>{title}</h1>

        {subtitle && (
          <p style={{
            marginTop: 18,
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 620,
            lineHeight: 1.6,
          }}>{subtitle}</p>
        )}
      </div>
    </section>
  )
}
