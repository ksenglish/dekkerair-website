import { Link } from 'react-router-dom'

// Points at the Lossnay page from the ventilation pages a customer is likely to
// land on first. Without it the page is only reachable by knowing the URL.
export default function LossnayPromo({ background = 'white' }) {
  return (
    <section style={{ padding: '0 0 80px', background }}>
      <div className="container">
        <Link to="/ventilation/lossnay" className="lossnay-promo" style={{
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
          background: '#1a1a1a', color: 'white', borderRadius: 16,
          padding: 'clamp(28px, 4vw, 44px)',
        }}>
          <div>
            <div style={{
              fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 12,
            }}>
              Now a Mitsubishi Electric dealer
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, lineHeight: 1.25 }}>
              Lossnay heat recovery ventilation
            </h2>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75, marginTop: 14, maxWidth: 560,
            }}>
              Recovers the warmth from the air leaving your house and puts it back into the
              fresh air coming in. Try the Wi-Fi Control app for yourself on our Lossnay page.
            </p>
          </div>

          <span style={{
            background: 'white', color: '#1a1a1a', borderRadius: 8,
            padding: '14px 28px', fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap',
          }}>
            See Lossnay →
          </span>
        </Link>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .lossnay-promo { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
