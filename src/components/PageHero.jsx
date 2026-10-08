// Banner at the top of every page except the home page. The generous top
// padding clears the fixed 120px header.
//
// Pass `images` instead of `image` to slide slowly through several photos
// rather than show one still banner (used on the Highwall page). The track
// repeats the list twice and animates to -50% so the loop is seamless.
export default function PageHero({ label, labelImage, title, subtitle, image = '/hero-bg.jpg', images, imagePosition = 'center' }) {
  return (
    <section style={{
      position: 'relative',
      padding: '184px 0 72px',
      ...(images && images.length > 0 ? {} : {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: imagePosition,
      }),
      overflow: 'hidden',
    }}>
      {images && images.length > 0 && (
        <div className="hero-slider-track" style={{ animationDuration: `${images.length * 12}s` }}>
          {[...images, ...images].map((src, i) => (
            <div key={i} className="hero-slider-slide" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      )}

      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {labelImage ? (
          <img src={labelImage} alt={label} style={{ height: 59, marginTop: 10, marginBottom: 18, marginLeft: -4 }} />
        ) : label && (
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
