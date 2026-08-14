import { useEffect } from 'react'

const SITE_NAME = 'Dekker Air'
const HOME_TITLE = 'Dekker Air | Heating, Cooling & Ventilation'

// Sets the document title and meta description for a page. Vite serves a single
// index.html, so without this every route would inherit the home page's tags.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : HOME_TITLE

    if (!description) return
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])
}
