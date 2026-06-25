export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d0003 50%, #d1000a 100%)',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Decorative circle */}
      <div style={{
        position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'rgba(209,0,10,0.15)',
        border: '1px solid rgba(209,0,10,0.3)',
      }} />
      <div style={{
        position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(209,0,10,0.1)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(209,0,10,0.2)',
            border: '1px solid rgba(209,0,10,0.4)',
            borderRadius: 100,
            padding: '6px 18px',
            fontSize: 13,
            fontWeight: 600,
            color: '#ff6b6b',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Heating · Cooling · Ventilation
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            Comfort Starts<br />
            <span style={{ color: '#d1000a' }}>at Home</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 520,
          }}>
            Dekker Air delivers professional heat pump installation, air conditioning,
            ventilation, and HVAC servicing across the Bay of Plenty and surrounding regions.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
              Get a Free Quote
            </a>
            <a href="#services" className="btn btn-outline" style={{ fontSize: 16, padding: '16px 36px' }}>
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 64, flexWrap: 'wrap' }}>
            {[
              { num: '0800 477 123', label: 'Free call us' },
              { num: 'Mon–Fri', label: '9am – 5pm' },
              { num: 'BOP', label: '& surrounding regions' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
