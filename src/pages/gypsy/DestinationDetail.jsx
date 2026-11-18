import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import { FadeUp, ShrinkHero, SplitHeading } from '../../components/Motion.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import ContourArt from '../../components/ContourArt.jsx'
import { destinations, getDestination } from '../../data/gypsy/destinations.js'
import { venues } from '../../data/gypsy/venues.js'
import { articles } from '../../data/gypsy/journal.js'
import { VenueCard, DestinationCard, ArticleCard } from './cards.jsx'

export default function DestinationDetail() {
  const { slug } = useParams()
  const destination = getDestination(slug)

  if (!destination) return <Navigate to="/venue-gypsy/destinations" replace />

  const featuredVenues = venues.filter((v) => v.destinationSlug === slug)
  const related = articles.filter((a) => a.related.destinations.includes(slug)).slice(0, 2)
  const others = destinations.filter((d) => d.slug !== slug).slice(0, 3)

  const guide = [
    { title: 'Why consider it', copy: destination.whyConsider },
    { title: 'Landscape, culture & atmosphere', copy: destination.landscape },
    { title: 'Nearby experiences', copy: destination.nearby },
    { title: 'Practical considerations', copy: destination.practical },
  ]

  return (
    <div>
      <Seo title={`${destination.name}, ${destination.country} | The Venue Gypsy`} description={destination.intro} />

      <ShrinkHero
        key={slug}
        className="text-white"
        media={
          <>
            <img src={destination.image} alt={destination.name} className="h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10" />
            <ContourArt seed={destination.seed} color="#ffffff" className="absolute inset-0 h-full w-full opacity-20" />
          </>
        }
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-14 sm:pb-20">
          <FadeUp waitForIntro>
            <Link to="/venue-gypsy/destinations" className="eyebrow inline-flex items-center gap-2 text-white/70 hover:text-white">
              <Arrow className="rotate-180" /> All destinations
            </Link>
            <p className="eyebrow mt-8 text-white/80">
              {destination.coords} · {destination.country}
            </p>
          </FadeUp>
          <SplitHeading as="h1" waitForIntro delay={120} className="mt-4 font-display text-5xl italic leading-[1.02] sm:text-6xl md:text-7xl">
            {destination.name}
          </SplitHeading>
          <FadeUp waitForIntro delay={400}>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{destination.tagline}</p>
          </FadeUp>
        </div>
      </ShrinkHero>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-display text-2xl leading-snug sm:text-3xl">{destination.intro}</p>
            </Reveal>
            <div className="mt-12 divide-y divide-linen-line">
              {guide.map((g, i) => (
                <Reveal key={g.title} delay={i * 50} className="grid gap-3 py-8 sm:grid-cols-[220px_1fr] sm:gap-8">
                  <SplitHeading className="font-display text-xl italic sm:text-2xl">{g.title}</SplitHeading>
                  <p className="text-base leading-relaxed text-coffee/80">{g.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="self-start rounded-2xl bg-linen-deep p-8 lg:sticky lg:top-28">
            <p className="eyebrow text-deep-blue">At a glance</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-coffee/50">Best season</dt>
                <dd className="mt-1 font-display text-lg italic">{destination.season}</dd>
              </div>
              <div>
                <dt className="text-coffee/50">Region</dt>
                <dd className="mt-1 font-display text-lg italic">{destination.region}</dd>
              </div>
              <div>
                <dt className="text-coffee/50">Coordinates</dt>
                <dd className="mt-1 font-display text-lg italic">{destination.coords}</dd>
              </div>
            </dl>
            <Button to={`/venue-gypsy/contact?destination=${encodeURIComponent(destination.name)}`} variant="accent" className="mt-8 w-full">
              Ask About {destination.name} <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>

      {featuredVenues.length > 0 && (
        <section className="border-t border-linen-line bg-linen-deep">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <SplitHeading className="font-display text-3xl sm:text-5xl">Featured venues</SplitHeading>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredVenues.map((v, i) => (
                <Reveal key={v.slug} delay={i * 70}>
                  <VenueCard venue={v} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-deep-blue">From the Journal</p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-linen-line">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <SplitHeading className="font-display text-3xl sm:text-5xl">More destinations</SplitHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DestinationCard destination={d} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
