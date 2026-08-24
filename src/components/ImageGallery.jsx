import { useState } from 'react'

// A grid of product and system images, with a lightbox on click.
//
// Everything here is a supplier render or diagram on a white background, so the
// tiles use `contain` and a light backing rather than cropping — cutting the
// edges off a labelled diagram would lose the labels.
export default function ImageGallery({ images, title = 'Systems we install', intro }) {
  const [open, setOpen] = useState(null)
  if (!images?.length) return null

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div className="section-label">Have a look</div>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-subtitle" style={{ marginBottom: 36 }}>{intro}</p>}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 20,
          marginTop: intro ? 0 : 36,
        }}>
          {images.map(img => (
            <button key={img.src} onClick={() => setOpen(img)} style={{
              background: 'white', border: '1px solid var(--border)', borderRadius: 12,
              overflow: 'hidden', padding: 0, textAlign: 'left', width: '100%',
              cursor: 'zoom-in', fontFamily: 'inherit', transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#1a1a1a'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                background: 'var(--light)', height: 190,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={img.src} alt={img.alt || img.caption || ''} loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 14 }} />
              </div>
              {img.caption && (
                <div style={{ padding: '13px 15px', fontSize: 14, lineHeight: 1.5 }}>{img.caption}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(null)} style={{
          position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(15,23,42,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28,
          cursor: 'zoom-out',
        }}>
          <figure style={{ maxWidth: 1000, width: '100%', textAlign: 'center' }}>
            <img src={open.src} alt={open.alt || open.caption || ''}
              style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', background: 'white', borderRadius: 12, padding: 16 }} />
            {open.caption && (
              <figcaption style={{ color: 'white', fontSize: 15, marginTop: 14 }}>{open.caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  )
}
