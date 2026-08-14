// Dekker App — serves the lead intake webhook and the public pricing endpoint.
// Override with VITE_API_BASE in .env.local to point at a local app instance.
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://app.dekkerair.co.nz'

export const LEAD_WEBHOOK = `${API_BASE}/api/leads/webhook`
export const HEAT_PUMPS_ENDPOINT = `${API_BASE}/api/public/heat-pumps`

export const nzd = (cents) =>
  (cents / 100).toLocaleString('en-NZ', {
    style: 'currency',
    currency: 'NZD',
    minimumFractionDigits: 2,
  })
