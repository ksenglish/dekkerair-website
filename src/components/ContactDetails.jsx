const details = [
  { icon: '📞', label: 'Call Us', value: '0800 477 123', href: 'tel:0800477123' },
  { icon: '✉️', label: 'Email', value: 'office@dekkergroup.co.nz', href: 'mailto:office@dekkergroup.co.nz' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–5pm' },
]

export default function ContactDetails() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {details.map(c => (
        <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: 'var(--light)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, flexShrink: 0,
          }}>{c.icon}</div>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 600, color: 'var(--muted)',
              textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2,
            }}>{c.label}</div>
            {c.href
              ? <a href={c.href} style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a' }}>{c.value}</a>
              : <div style={{ fontSize: 15, fontWeight: 500 }}>{c.value}</div>
            }
          </div>
        </div>
      ))}
    </div>
  )
}
