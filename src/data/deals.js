// Deals themselves now live in Dekker App (Website -> Latest Deals) and reach
// the site through the public API, so they can be edited and published without
// a code change. What's left here is the presentation logic that goes with them.

// A deal is live if it has no expiry, or its expiry is today or later.
// Built from local date parts rather than toISOString(), which is UTC — that
// would keep NZ deals visible for the first half of the day after they expire.
export const activeDeals = (deals = [], today = new Date()) => {
  const cutoff = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')
  return deals.filter((d) => !d.expires || d.expires >= cutoff)
}

export const formatExpiry = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
