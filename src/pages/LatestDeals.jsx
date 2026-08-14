import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { activeDeals, formatExpiry } from '../data/deals'
import { getService } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'

function DealCard({ deal }) {
  const service = deal.service && getService(deal.service)

  return (
    <article style={{
      border: '1px solid var(--border)',
      borderRadius: 16,
      overflow: 'hidden',
      background: 'white',
      boxShadow: 'var(--shadow)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <img
        src={deal.image}
        alt={deal.imageAlt}
        loading="lazy"
        decoding="async"
        width={1000}
        height={1000}
        // height:auto is needed so the height attribute above (which is there to
        // reserve space and avoid layout shift) doesn't override aspect-ratio.
        style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover' }}
      />

      <div style={{ padding: 30, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 14 }}>
          <span style={{
            background: '#1a1a1a', color: 'white',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4,
          }}>{deal.badge}</span>

          {deal.expires && (
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>
              Ends {formatExpiry(deal.expires)}
            </span>
          )}
        </div>

        <h2 style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.3, marginBottom: 10 }}>{deal.title}</h2>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.01em' }}>{deal.price}</span>
          {deal.priceNote && (
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--muted)',
            }}>{deal.priceNote}</span>
          )}
        </div>

        <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>{deal.hook}</p>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>{deal.body}</p>

        {deal.terms && (
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 14, fontStyle: 'italic' }}>{deal.terms}</p>
        )}

        {/* Pushes the buttons to the bottom so cards in a row line up */}
        <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Get a free quote</Link>
          {service && (
            <Link to={`/${service.slug}`} style={{
              fontSize: 14, color: '#1a1a1a', fontWeight: 500,
              borderBottom: '1px solid #1a1a1a', paddingBottom: 1,
            }}>About {service.title.toLowerCase()}</Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default function LatestDeals() {
  usePageMeta(
    'Latest Deals',
    'Current Dekker Air deals on heat pump installation, ducted heating, SmartVent home ventilation and heat pump servicing across the Bay of Plenty.',
  )

  const live = activeDeals()

  return (
    <>
      <PageHero
        label="Promotions"
        title="Latest Deals"
        subtitle="What we've got running at the moment. Deals come and go with the seasons, so it's worth checking back."
      />

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          {live.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '48px 24px',
              background: 'var(--light)', border: '1px solid var(--border)', borderRadius: 16,
            }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🗓️</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>No promotions running right now</h2>
              <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.7 }}>
                We price every job competitively whether there's a deal on or not. Get in touch
                and we'll put a free, no-obligation quote in front of you.
              </p>
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            </div>
          ) : (
            <div className="deals-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 32,
            }}>
              {live.map(deal => <DealCard key={deal.id} deal={deal} />)}
            </div>
          )}

          <p style={{
            fontSize: 14, color: 'var(--muted)', lineHeight: 1.7,
            marginTop: 40, textAlign: 'center', maxWidth: 640, marginInline: 'auto',
          }}>
            Prices shown are for standard installations. Every home is different, so we
            confirm the final price with you in writing after we've seen the job.
          </p>
        </div>
      </section>

      <CTABand
        title="Not sure which deal fits?"
        subtitle="Give us a call or send an enquiry. We'll work out what your place actually needs and tell you which offer applies."
      />

      <style>{`
        @media (max-width: 800px) {
          .deals-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
