import { nzd } from '../config'

// A calculator price, with the discount shown when one is running.
//
// The API sends the payable price already discounted, plus the price it was
// before, so this only has to decide whether there's a saving worth showing —
// there's no discount arithmetic on the site.
export function saving(price, listPrice) {
  if (price == null || listPrice == null) return 0
  return Math.max(0, listPrice - price)
}

export function DiscountBadge({ discount, price, listPrice, style }) {
  const off = saving(price, listPrice)
  if (!off) return null

  const text = discount?.percent
    ? `${discount.percent}% off`
    : `Save ${nzd(off)}`

  return (
    <span style={{
      display: 'inline-block', background: '#b91c1c', color: 'white',
      fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase', padding: '4px 9px', borderRadius: 4,
      ...style,
    }}>
      {discount?.label ? `${discount.label} · ${text}` : text}
    </span>
  )
}

// The price itself: the discounted figure, with what it was struck through
// beside it. `size` is the font size of the payable price.
export default function DiscountedPrice({ price, listPrice, discount, size = 34, prefix = '' }) {
  const off = saving(price, listPrice)

  if (price == null) {
    return <div style={{ fontSize: size, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}>On request</div>
  }

  return (
    <div>
      {off > 0 && (
        <DiscountBadge discount={discount} price={price} listPrice={listPrice}
          style={{ marginBottom: 8 }} />
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontSize: size, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          {prefix}{nzd(price)}
        </span>
        {off > 0 && (
          <span style={{
            fontSize: Math.round(size * 0.5), color: 'var(--muted)',
            textDecoration: 'line-through',
          }}>
            {nzd(listPrice)}
          </span>
        )}
      </div>
    </div>
  )
}
