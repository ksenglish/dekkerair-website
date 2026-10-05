import { useEffect, useRef } from 'react'

// Takes over the whole screen so the Lossnay app is being used rather than
// looked at — the way Mitsubishi's own demo behaves when you open it on a phone.
//
// A fixed overlay rather than the Fullscreen API: Safari on iPhone won't put an
// arbitrary element into real fullscreen, and an overlay behaves the same on
// every phone without asking permission.
export default function DemoFullScreen({ url, title, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    // The page behind must not scroll while this is up, or a swipe that misses
    // the app drags the article around underneath it.
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)

    // Focus lands on Close, so the way out is the first thing a screen reader
    // or a keyboard reaches.
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: '#000', display: 'flex', flexDirection: 'column',
        // dvh, not vh: on a phone vh is the height with the browser's address
        // bar hidden, so the bottom of the app sits under it until you scroll.
        height: '100dvh',
        // Keeps the bar clear of a notch or a home indicator.
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 12, padding: '10px 8px 10px 16px', flexShrink: 0,
      }}>
        <span style={{
          fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          Lossnay Wi-Fi Control — demo
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close the demo"
          style={{
            background: 'rgba(255,255,255,0.12)', color: 'white',
            borderRadius: 8, padding: '9px 16px', fontSize: 14, fontWeight: 600,
            flexShrink: 0,
          }}
        >
          ✕ Close
        </button>
      </div>

      <iframe
        src={url}
        title={title}
        // flex:1 with minHeight:0 so the frame takes the rest of the screen and
        // no more — without the minHeight it refuses to shrink below its content.
        style={{ flex: 1, minHeight: 0, width: '100%', border: 0, display: 'block' }}
      />
    </div>
  )
}
