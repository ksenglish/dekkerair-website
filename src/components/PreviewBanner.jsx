import { clearPreviewToken } from '../hooks/useDeals'

// Shown whenever the site is rendering unpublished drafts, so a preview can
// never be mistaken for what the public is seeing. Sits above the fixed header.
export default function PreviewBanner() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: '#b45309', color: 'white',
      padding: '8px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 16, flexWrap: 'wrap',
      fontSize: 13, fontWeight: 600, letterSpacing: '0.02em',
    }}>
      <span>Preview — showing unpublished changes. This is not what visitors see.</span>
      <button
        onClick={() => { clearPreviewToken(); window.location.href = window.location.pathname }}
        style={{
          background: 'rgba(255,255,255,0.15)', color: 'white',
          border: '1px solid rgba(255,255,255,0.5)', borderRadius: 4,
          padding: '4px 12px', fontSize: 12, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}
      >
        Exit preview
      </button>
    </div>
  )
}
