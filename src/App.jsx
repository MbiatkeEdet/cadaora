import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Landing from './pages/Landing.jsx'

import CadoraLayout from './pages/cadora/CadoraLayout.jsx'
import CadoraHome from './pages/cadora/Home.jsx'
import Weddings from './pages/cadora/Weddings.jsx'
import Parties from './pages/cadora/Parties.jsx'
import CadoraDestinations from './pages/cadora/Destinations.jsx'
import About from './pages/cadora/About.jsx'
import Media from './pages/cadora/Media.jsx'
import Enquire from './pages/cadora/Enquire.jsx'

import GypsyLayout from './pages/gypsy/GypsyLayout.jsx'
import GypsyHome from './pages/gypsy/Home.jsx'
import DestinationDetail from './pages/gypsy/DestinationDetail.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/cadora" element={<CadoraLayout />}>
          <Route index element={<CadoraHome />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="parties" element={<Parties />} />
          <Route path="destinations" element={<CadoraDestinations />} />
          <Route path="about" element={<About />} />
          <Route path="media" element={<Media />} />
          <Route path="enquire" element={<Enquire />} />
        </Route>

        <Route path="/gypsy" element={<GypsyLayout />}>
          <Route index element={<GypsyHome />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
        </Route>
      </Routes>
    </>
  )
}
