import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Without this, navigating from the bottom of one page lands you at the bottom
// of the next one. Anchor links (#contact) keep their own scroll behaviour.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
