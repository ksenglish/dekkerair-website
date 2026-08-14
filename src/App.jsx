import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import LatestDeals from './pages/LatestDeals'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import { services } from './data/services'
import './index.css'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* One route per service, e.g. /heating — driven by src/data/services.js */}
          {services.map(s => (
            <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
          ))}

          <Route path="/deals" element={<LatestDeals />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
