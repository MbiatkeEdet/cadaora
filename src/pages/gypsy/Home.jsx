import { Link } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import ContourArt from '../../components/ContourArt.jsx'
import { venues } from '../../data/gypsy/venues.js'
import { destinations } from '../../data/gypsy/destinations.js'
import { VenueCard, DestinationCard } from './cards.jsx'

const entryPoints = [
  { to: '/venue-gypsy/venues', title: 'Venues', copy: 'Explore remarkable properties and event spaces.' },
  {
    to: '/venue-gypsy/destinations',
    title: 'Destinations',
    copy: 'Discover places worth travelling to and the experiences around them.',
  },
  {
    to: '/venue-gypsy/journal',
    title: 'The Journal',
    copy: 'Read field notes, venue stories, destination guides and inspiration.',
  },
]

export default function Home() {
  const featured = venues.slice(0, 3)
  const places = destinations.slice(0, 4)

  return (
    <div>
      <Seo
        title="The Venue Gypsy | Discover Event Venues & Destinations"
        description="Discover remarkable venues and destinations around the world for celebrations, events and experiences. Explore venue discoveries, destination guides and stories from The Venue Gypsy."
      />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] w-full flex-col justify-end overflow-hidden bg-coffee text-white">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=80"
          alt="Poolside cabanas overlooking the ocean at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/20" />
        <ContourArt seed={19} color="#ffffff" className="absolute inset-0 h-full w-full opacity-20" lines={9} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow text-white/80">A global venue discovery &amp; destination platform</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1] sm:text-6xl md:text-7xl">
              Discover Places
              <br />
              <em>Worth Celebrating In.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              A world of remarkable venues and destinations, discovered through first-hand experience and shared with an
              understanding of events, hospitality and the possibilities of a place.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/venue-gypsy/venues" variant="accent">
                Explore Venues
              </Button>
              <Button to="/venue-gypsy/destinations" variant="light">
                Explore Destinations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introductory statement */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
            A venue is more than a place. <em>It is the beginning of an experience.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-coffee/80 sm:text-lg">
          <p>
            Some places stay with you. It might be the architecture, the landscape, the atmosphere, the welcome — or
            simply the feeling that something extraordinary could happen there.
          </p>
          <p>
            The Venue Gypsy travels in search of these places. Through venue visits, destination scouting and first-hand
            discovery, we bring together a considered collection of settings for celebrations, gatherings and
            experiences around the world.
          </p>
          <p>
            We look beyond the photographs to explore what makes each place special, what it could make possible and
            who might find it just right.
          </p>
        </Reveal>
      </section>

      {/* Explore the world */}
      <section className="border-y border-linen-line bg-linen-deep">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">Explore the world</h2>
            <p className="mt-6 text-base leading-relaxed text-coffee/75 sm:text-lg">
              From coastal hideaways and private estates to historic properties, contemporary spaces and remarkable
              hotels, discover places with character, atmosphere and a story to tell.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {entryPoints.map((e, i) => (
              <Reveal key={e.to} delay={i * 80}>
                <Link
                  to={e.to}
                  className="group relative block overflow-hidden rounded-sm border border-linen-line bg-linen p-8 transition-colors hover:border-sun-orange"
                >
                  <ContourArt seed={40 + i * 7} color="#088dac" className="absolute inset-0 h-full w-full opacity-20" />
                  <div className="relative">
                    <p className="eyebrow text-deep-blue">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-3xl italic">{e.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-coffee/70">{e.copy}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs text-coffee/60 transition-all group-hover:gap-3 group-hover:text-sun-orange">
                      Explore <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured venues */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-deep-blue">Venues</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">Find a place that feels like the one.</h2>
          </div>
          <Link to="/venue-gypsy/venues" className="eyebrow flex items-center gap-2 text-deep-blue hover:text-sun-orange">
            All venues <Arrow />
          </Link>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v, i) => (
            <Reveal key={v.slug} delay={i * 80}>
              <VenueCard venue={v} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Destinations strip */}
      <section className="border-t border-linen-line">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-deep-blue">Destinations</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">The place is part of the experience.</h2>
            </div>
            <Link to="/venue-gypsy/destinations" className="eyebrow flex items-center gap-2 text-deep-blue hover:text-sun-orange">
              Discover a Destination <Arrow />
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DestinationCard destination={d} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gypsy perspective */}
      <section className="bg-coffee text-linen">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-sun-orange">The Gypsy perspective</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              <em>A venue cannot be understood through photographs alone.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-linen/80 sm:text-lg">
              We want to know how it feels to arrive, what the spaces make possible, how guests might experience the
              property and what someone should know before considering it.
            </p>
            <Button to="/venue-gypsy/journal" variant="accent" className="mt-8">
              See the World Through Our Lens <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
