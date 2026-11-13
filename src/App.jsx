import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Landing from './pages/Landing.jsx'

import CadaoraLayout from './pages/cadaora/CadaoraLayout.jsx'
import CadaoraHome from './pages/cadaora/Home.jsx'
import CadaoraAbout from './pages/cadaora/About.jsx'
import Services from './pages/cadaora/Services.jsx'
import Approach from './pages/cadaora/Approach.jsx'
import Work from './pages/cadaora/Work.jsx'
import Project from './pages/cadaora/Project.jsx'
import CadaoraContact from './pages/cadaora/Contact.jsx'

import GypsyLayout from './pages/gypsy/GypsyLayout.jsx'
import GypsyHome from './pages/gypsy/Home.jsx'
import Venues from './pages/gypsy/Venues.jsx'
import VenueDetail from './pages/gypsy/VenueDetail.jsx'
import Destinations from './pages/gypsy/Destinations.jsx'
import DestinationDetail from './pages/gypsy/DestinationDetail.jsx'
import Journal from './pages/gypsy/Journal.jsx'
import Article from './pages/gypsy/Article.jsx'
import GypsyAbout from './pages/gypsy/About.jsx'
import GypsyContact from './pages/gypsy/Contact.jsx'

/** Redirects a legacy /gypsy/destinations/:slug link to the new path. */
function LegacyDestination() {
  const { slug } = useParams()
  return <Navigate to={`/venue-gypsy/destinations/${slug}`} replace />
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/cadaora" element={<CadaoraLayout />}>
          <Route index element={<CadaoraHome />} />
          <Route path="about" element={<CadaoraAbout />} />
          <Route path="services" element={<Services />} />
          <Route path="approach" element={<Approach />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<Project />} />
          <Route path="contact" element={<CadaoraContact />} />
          <Route path="enquire" element={<Navigate to="/cadaora/contact" replace />} />
          <Route path="*" element={<Navigate to="/cadaora" replace />} />
        </Route>

        <Route path="/venue-gypsy" element={<GypsyLayout />}>
          <Route index element={<GypsyHome />} />
          <Route path="venues" element={<Venues />} />
          <Route path="venues/:slug" element={<VenueDetail />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:slug" element={<Article />} />
          <Route path="about" element={<GypsyAbout />} />
          <Route path="contact" element={<GypsyContact />} />
          <Route path="*" element={<Navigate to="/venue-gypsy" replace />} />
        </Route>

        {/* Legacy paths from before the rebrand */}
        <Route path="/cadora" element={<Navigate to="/cadaora" replace />} />
        <Route path="/cadora/about" element={<Navigate to="/cadaora/about" replace />} />
        <Route path="/cadora/weddings" element={<Navigate to="/cadaora/services" replace />} />
        <Route path="/cadora/parties" element={<Navigate to="/cadaora/services" replace />} />
        <Route path="/cadora/destinations" element={<Navigate to="/cadaora/services" replace />} />
        <Route path="/cadora/media" element={<Navigate to="/cadaora/work" replace />} />
        <Route path="/cadora/enquire" element={<Navigate to="/cadaora/contact" replace />} />
        <Route path="/cadora/*" element={<Navigate to="/cadaora" replace />} />
        <Route path="/gypsy" element={<Navigate to="/venue-gypsy" replace />} />
        <Route path="/gypsy/destinations/:slug" element={<LegacyDestination />} />
        <Route path="/gypsy/*" element={<Navigate to="/venue-gypsy" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
