const reasons = [
  { icon: '🏆', title: 'Experienced Team', desc: 'Our certified technicians bring years of hands-on experience to every installation and service job.' },
  { icon: '⚡', title: 'Fast Response', desc: 'We understand when your heating or cooling fails it\'s urgent. We aim to respond quickly and get you sorted.' },
  { icon: '💰', title: 'Honest Pricing', desc: 'No hidden fees, no surprises. We provide clear upfront quotes so you know exactly what you\'re paying.' },
  { icon: '🛡️', title: 'Quality Guarantee', desc: 'All our work and installations are backed by manufacturer warranties and our own quality guarantee.' },
  { icon: '🌿', title: 'Energy Efficient', desc: 'We recommend the most energy-efficient solutions to reduce your power bills while keeping you comfortable.' },
  { icon: '📞', title: 'Local & Reliable', desc: 'Bay of Plenty based and proud of it. We\'re your local team — easy to reach and always accountable.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{ padding: '96px 0', background: 'var(--light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">The Dekker Air Difference</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              We're not just another HVAC company. We're a local team that genuinely cares
              about your comfort, your home, and your energy bills.
            </p>
            <a href="#contact" className="btn btn-primary">Talk to Our Team</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {reasons.map(r => (
              <div key={r.title} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '20px 18px',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{r.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{r.title}</h4>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why-us .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
