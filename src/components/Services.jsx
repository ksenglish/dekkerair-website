const services = [
  {
    icon: '☀️',
    title: 'HEATING',
    description: 'Efficient heating solutions designed to keep your home warm, comfortable and energy efficient through every season.',
  },
  {
    icon: '❄️',
    title: 'COOLING',
    description: 'Professional air conditioning systems tailored to deliver reliable cooling and year-round comfort for your home or business.',
  },
  {
    icon: '💨',
    title: 'VENTILATION',
    description: 'Fresh air ventilation systems that help reduce moisture, condensation and stale air while improving indoor air quality.',
  },
  {
    icon: '🔧',
    title: 'HVAC SERVICING',
    description: 'Comprehensive servicing and maintenance to keep your heat pump and ventilation systems running efficiently, reliably and performing at their best.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '72px 0', background: 'white' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}>
          {services.map(s => (
            <div key={s.title} style={{ textAlign: 'center', padding: '8px 8px 0' }}>
              {/* Icon box matching Wix style */}
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
                color: '#1a1a1a',
                marginBottom: 12,
              }}>{s.title}</h3>

              <p style={{
                fontSize: 14, color: '#555',
                lineHeight: 1.7, marginBottom: 16,
              }}>{s.description}</p>

              <a href="#contact" style={{
                fontSize: 13, color: '#1a1a1a', fontWeight: 500,
                borderBottom: '1px solid #1a1a1a',
                paddingBottom: 1,
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.borderColor = '#1a1a1a' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.borderColor = '#1a1a1a' }}
              >Learn More &gt;</a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services .container > div { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          #services .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
