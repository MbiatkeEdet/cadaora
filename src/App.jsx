import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Landing from './pages/Landing.jsx'

import CadoraLayout from './pages/cadora/CadoraLayout.jsx'
import CadoraHome from './pages/cadora/Home.jsx'
import About from './pages/cadora/About.jsx'
import Services from './pages/cadora/Services.jsx'
import Approach from './pages/cadora/Approach.jsx'
import Work from './pages/cadora/Work.jsx'
import Contact from './pages/cadora/Contact.jsx'

import GypsyLayout from './pages/gypsy/GypsyLayout.jsx'
import GypsyHome from './pages/gypsy/Home.jsx'
import GypsyAbout from './pages/gypsy/About.jsx'
import GypsyJournal from './pages/gypsy/Journal.jsx'
import GypsyContact from './pages/gypsy/Contact.jsx'
import GypsyDestinations from './pages/gypsy/Destinations.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/cadora" element={<CadoraLayout />}>
          <Route index element={<CadoraHome />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="approach" element={<Approach />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/gypsy" element={<GypsyLayout />}>
          <Route index element={<GypsyHome />} />
          <Route path="about/:slug" element={<GypsyAbout />} />
          <Route path="destinations" element={<GypsyDestinations />} />
          <Route path="journal" element={<GypsyJournal />} />
          <Route path="contact" element={<GypsyContact />} />
        </Route>
      </Routes>
    </>
  )
}
