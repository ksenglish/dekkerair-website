import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'
import { activeDeals } from '../data/deals'
import usePageMeta from '../hooks/usePageMeta'
import useDeals from '../hooks/useDeals'
import PreviewBanner from '../components/PreviewBanner'

function DealsBanner() {
  const { deals, loading, failed } = useDeals()
  const count = activeDeals(deals).length
  // Stay out of the way until we know there's something to shout about.
  if (loading || failed || count === 0) return null

  return (
    <section style={{ background: '#1a1a1a', color: 'white', padding: '40px 0' }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 6,
          }}>Latest Deals</div>
          <p style={{ fontSize: 20, fontWeight: 300 }}>
            {count} {count === 1 ? 'offer' : 'offers'} running right now — worth a look before you book.
          </p>
        </div>

        <Link to="/deals" style={{
          padding: '13px 30px', background: 'white', color: '#1a1a1a', borderRadius: 4,
          fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          transition: 'opacity 0.15s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >See the deals</Link>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta(
    null,
    'Dekker Air provides professional heat pump installation, air conditioning, ventilation, and HVAC servicing across the Bay of Plenty and surrounding regions.',
  )

  const { preview } = useDeals()

  return (
    <>
      {preview && <PreviewBanner />}
      <Hero />
      <Services />
      <WhyUs />
      <DealsBanner />
      <Contact />
    </>
  )
}
