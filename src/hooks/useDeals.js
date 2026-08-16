import { useEffect, useState } from 'react'
import { DEALS_ENDPOINT } from '../config'

// A preview token in the URL switches the site to showing unpublished drafts.
// It's kept for the rest of the tab session so moving between pages doesn't
// drop back to the live content halfway through a review.
const PREVIEW_KEY = 'dekkerair-preview-token'

export function getPreviewToken() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('preview')
    if (fromUrl) {
      sessionStorage.setItem(PREVIEW_KEY, fromUrl)
      return fromUrl
    }
    return sessionStorage.getItem(PREVIEW_KEY)
  } catch {
    return null // private browsing with storage disabled
  }
}

export function clearPreviewToken() {
  try { sessionStorage.removeItem(PREVIEW_KEY) } catch { /* nothing to do */ }
}

export default function useDeals() {
  const [state, setState] = useState({ deals: [], loading: true, failed: false, preview: false })

  useEffect(() => {
    let cancelled = false
    const token = getPreviewToken()
    const url = token ? `${DEALS_ENDPOINT}?preview=${encodeURIComponent(token)}` : DEALS_ENDPOINT

    fetch(url)
      .then(r => { if (!r.ok) throw new Error('bad response'); return r.json() })
      .then(data => {
        if (cancelled) return
        setState({ deals: data.deals || [], loading: false, failed: false, preview: !!data.preview })
      })
      .catch(() => {
        if (cancelled) return
        setState({ deals: [], loading: false, failed: true, preview: false })
      })

    return () => { cancelled = true }
  }, [])

  return state
}
