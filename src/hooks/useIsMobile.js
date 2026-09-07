import { useEffect, useState } from 'react'

// Most of the site handles its own breakpoints in CSS. This is for the places
// where a phone needs different markup rather than different styling — where a
// media query has nothing to act on.
export default function useIsMobile(query = '(max-width: 760px)') {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const sync = () => setIsMobile(mq.matches)
    sync()
    // resize as well as the query's own event: turning a phone sideways is a
    // resize that some browsers don't report as a media query change, and the
    // layout has to follow it either way.
    mq.addEventListener('change', sync)
    window.addEventListener('resize', sync)
    return () => {
      mq.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [query])

  return isMobile
}
