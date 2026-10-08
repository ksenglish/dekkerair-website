// Banner at the top of every page except the home page. The generous top
// padding clears the fixed 120px header.
//
// Pass `images` instead of `image` for a slideshow that holds on each photo
// then slides to the next, rather than one still banner (used on the
// Highwall page). The track repeats the list twice and animates to -50% so
// the loop is seamless; the keyframes are generated per image count since
// each slide needs its own hold.
const HOLD_SECONDS = 4.5
const TRANSITION_SECONDS = 1.5

function heroSlideKeyframes(count) {
  const segmentSeconds = HOLD_SECONDS + TRANSITION_SECONDS
  const totalSeconds = count * segmentSeconds
  const posAt = i => -((i / (2 * count)) * 100)
  const frames = []
  for (let i = 0; i < count; i++) {
    const segStart = (i * segmentSeconds / totalSeconds) * 100
    const holdEnd = ((i * segmentSeconds + HOLD_SECONDS) / totalSeconds) * 100
    const segEnd = ((i + 1) * segmentSeconds / totalSeconds) * 100
    frames.push(`${segStart}% { transform: translateX(${posAt(i)}%); }`)
    frames.push(`${holdEnd}% { transform: translateX(${posAt(i)}%); }`)
    frames.push(`${segEnd}% { transform: translateX(${posAt(i + 1)}%); }`)
  }
  return { name: `hero-slide-${count}`, css: `@keyframes hero-slide-${count} { ${frames.join(' ')} }`, totalSeconds }
}

export default function PageHero({ label, labelImage, title, subtitle, image = '/hero-bg.jpg', images, imagePosition = 'center' }) {
  const slideshow = images && images.length > 0 ? heroSlideKeyframes(images.length) : null

  return (
    <section style={{
      position: 'relative',
      padding: '184px 0 72px',
      ...(slideshow ? {} : {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: imagePosition,
      }),
      overflow: 'hidden',
    }}>
      {slideshow && (
        <>
          <style>{slideshow.css}</style>
          <div className="hero-slider-track" style={{ animationName: slideshow.name, animationDuration: `${slideshow.totalSeconds}s` }}>
            {[...images, ...images].map((src, i) => (
              <div key={i} className="hero-slider-slide" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
        </>
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
