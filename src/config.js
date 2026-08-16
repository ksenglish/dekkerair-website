// Dekker App — serves the lead intake webhook, public pricing, and the
// editable website content.
// Override with VITE_API_BASE in .env.local to point at a local app instance.
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://app.dekkerair.co.nz'

export const LEAD_WEBHOOK = `${API_BASE}/api/leads/webhook`
export const HEAT_PUMPS_ENDPOINT = `${API_BASE}/api/public/heat-pumps`
export const DEALS_ENDPOINT = `${API_BASE}/api/public/website/deals`

// Deal artwork is either a file in this repo (/deals/…) or an image uploaded
// through the app, which is served from the app's own origin.
export const resolveImage = (src) =>
  src && src.startsWith('/api/') ? `${API_BASE}${src}` : src

export const nzd = (cents) =>
  (cents / 100).toLocaleString('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 2,
  })
