const services = [
  {
    icon: '🔥',
    title: 'Heating',
    description: 'Efficient heating solutions designed to keep your home warm, comfortable and energy efficient all winter long.',
    features: ['Heat pump installation', 'Underfloor heating', 'Energy-efficient systems', 'Brand consultation'],
  },
  {
    icon: '❄️',
    title: 'Cooling',
    description: 'Professional air conditioning systems tailored to deliver reliable cooling and year-round comfort in any space.',
    features: ['Split system A/C', 'Multi-room solutions', 'Commercial cooling', 'Smart controls'],
  },
  {
    icon: '💨',
    title: 'Ventilation',
    description: 'Fresh air ventilation systems that help reduce moisture, condensation and stale air — creating a healthier home.',
    features: ['HRV systems', 'Positive pressure', 'Moisture control', 'Air quality monitoring'],
  },
  {
    icon: '🔧',
    title: 'HVAC Servicing',
    description: 'Comprehensive servicing and maintenance to keep your heat pump and ventilation systems running at peak efficiency.',
    features: ['Annual servicing', 'Filter cleaning', 'Performance checks', 'Emergency repairs'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">What We Do</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Our Services</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From installation to ongoing maintenance, we handle every aspect of your
            home and commercial climate control needs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {services.map(s => (
            <div key={s.title} style={{
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '32px 28px',
              background: 'white',
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              e.currentTarget.style.borderColor = '#d1000a'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = 'var(--shadow)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                background: '#fff0f0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, marginBottom: 20,
              }}>{s.icon}</div>

              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>{s.description}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                    <span style={{ color: '#d1000a', fontWeight: 700, fontSize: 16 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
        </div>
      </div>
    </section>
  )
}
