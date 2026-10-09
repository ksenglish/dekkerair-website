// Banner at the top of every page except the home page. The generous top
// padding clears the fixed 120px header.
//
// Pass `images` instead of `image` for a slideshow that holds on each photo
// then slides to the next, rather than one still banner (used on the
// Highwall page). `paddingBottom` can be raised on pages with no label/logo
// above the title, whose banner would otherwise sit shorter than the
// single-brand pages. Each entry can be a plain image path, or an
// { src, position } object to override the shared top crop for that one
// photo. The track repeats the list twice and animates to -50% so
// the loop is seamless; the keyframes are generated per image count since
// each slide needs its own hold. Each photo also fades in as it slides into
// frame and fades out as it slides clear, rather than cutting straight from
// one to the next — the fade is given its own per-slide keyframes (reusing
// the same hold/transition timing) since opacity has to animate on the
// individual slide, not the track.
const HOLD_SECONDS = 4.5
const TRANSITION_SECONDS = 1.5

function heroSlideKeyframes(count) {
  const segmentSeconds = HOLD_SECONDS + TRANSITION_SECONDS
  const totalSeconds = count * segmentSeconds
  const posAt = i => -((i / (2 * count)) * 100)
  const bounds = i => ({
    segStart: (i * segmentSeconds / totalSeconds) * 100,
    holdEnd: ((i * segmentSeconds + HOLD_SECONDS) / totalSeconds) * 100,
    segEnd: ((i + 1) * segmentSeconds / totalSeconds) * 100,
  })

  const slideFrames = []
  for (let i = 0; i < count; i++) {
    const { segStart, holdEnd, segEnd } = bounds(i)
    slideFrames.push(`${segStart}% { transform: translateX(${posAt(i)}%); }`)
    slideFrames.push(`${holdEnd}% { transform: translateX(${posAt(i)}%); }`)
    slideFrames.push(`${segEnd}% { transform: translateX(${posAt(i + 1)}%); }`)
  }

  const fadeRules = []
  if (count < 2) {
    fadeRules.push(`@keyframes hero-fade-${count}-0 { 0% { opacity: 1; } 100% { opacity: 1; } }`)
  } else {
    for (let i = 0; i < count; i++) {
      const { holdEnd: fadeInStart, segEnd: fadeInEnd } = bounds((i - 1 + count) % count)
      const { holdEnd: fadeOutStart, segEnd: fadeOutEnd } = bounds(i)
      const points = i === 0
        ? [[0, 1], [fadeOutStart, 1], [fadeOutEnd, 0], [fadeInStart, 0], [fadeInEnd, 1]]
        : [[0, 0], [fadeInStart, 0], [fadeInEnd, 1], [fadeOutStart, 1], [fadeOutEnd, 0], [100, 0]]
      const frames = points.map(([p, o]) => `${p}% { opacity: ${o}; }`).join(' ')
      fadeRules.push(`@keyframes hero-fade-${count}-${i} { ${frames} }`)
    }
  }

  return {
    name: `hero-slide-${count}`,
    fadeName: i => `hero-fade-${count}-${i}`,
    css: `@keyframes hero-slide-${count} { ${slideFrames.join(' ')} } ${fadeRules.join(' ')}`,
    totalSeconds,
  }
}

export default function PageHero({ label, labelImage, title, subtitle, image = '/hero-bg.jpg', images, imagePosition = 'center', paddingBottom = 72 }) {
  const slideshow = images && images.length > 0 ? heroSlideKeyframes(images.length) : null

  return (
    <section style={{
      position: 'relative',
      padding: `184px 0 ${paddingBottom}px`,
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
            {[...images, ...images].map((img, i) => {
              const src = typeof img === 'string' ? img : img.src
              const position = typeof img === 'string' ? undefined : img.position
              return (
                <div key={i} className="hero-slider-slide" style={{
                  backgroundImage: `url(${src})`,
                  ...(position ? { backgroundPosition: position } : {}),
                  animationName: slideshow.fadeName(i % images.length),
                  animationDuration: `${slideshow.totalSeconds}s`,
                }} />
              )
            })}
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
