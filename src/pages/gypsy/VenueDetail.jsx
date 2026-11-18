import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import { FadeUp, ParallaxImage, ShrinkHero, SplitHeading } from '../../components/Motion.jsx'
import { Arrow } from '../../components/Button.jsx'
import { venues, getVenue } from '../../data/gypsy/venues.js'
import { getDestination } from '../../data/gypsy/destinations.js'
import { articles } from '../../data/gypsy/journal.js'
import { VenueCard, DestinationCard, ArticleCard } from './cards.jsx'

export default function VenueDetail() {
  const { slug } = useParams()
  const venue = getVenue(slug)

  if (!venue) return <Navigate to="/venue-gypsy/venues" replace />

  const destination = venue.destinationSlug ? getDestination(venue.destinationSlug) : null
  const related = articles.filter((a) => a.related.venues.includes(slug)).slice(0, 2)
  const more = venues.filter((v) => v.slug !== slug && (v.region === venue.region || v.type === venue.type)).slice(0, 3)

  const sections = [
    { title: 'The setting', copy: venue.setting },
    { title: 'The property', copy: venue.property },
    { title: 'Spaces & possibilities', copy: venue.spaces },
    { title: 'Stay', copy: venue.stay },
    { title: 'Food & hospitality', copy: venue.food },
    { title: 'Guest experience', copy: venue.guestExperience },
    { title: 'Practical notes', copy: venue.practical },
    { title: 'Nearby discoveries', copy: venue.nearby },
  ]

  const basisLine =
    venue.basis === 'first-hand'
      ? `Based on a first-hand visit${venue.basisDate ? `, ${venue.basisDate}` : ''}.`
      : venue.basis === 'supplied'
        ? 'Information supplied by the property.'
        : 'Illustrative feature — to be replaced with a first-hand or property-supplied profile.'

  return (
    <div>
      <Seo title={`${venue.name}, ${venue.location} | The Venue Gypsy`} description={venue.intro} />

      <ShrinkHero
        key={slug}
        className="text-white"
        media={
          <>
            <img src={venue.images[0]} alt={venue.name} className="h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10" />
          </>
        }
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-14 sm:pb-20">
          <FadeUp waitForIntro>
            <Link to="/venue-gypsy/venues" className="eyebrow inline-flex items-center gap-2 text-white/70 hover:text-white">
              <Arrow className="rotate-180" /> All venues
            </Link>
            <p className="eyebrow mt-8 text-white/80">
              {venue.type} · {venue.location}, {venue.country}
            </p>
          </FadeUp>
          <SplitHeading as="h1" waitForIntro delay={120} className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] sm:text-6xl md:text-7xl">
            {venue.name}
          </SplitHeading>
          <FadeUp waitForIntro delay={400}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{venue.intro}</p>
          </FadeUp>
        </div>
        {venue.imageCredit && (
          <p className="absolute bottom-3 right-4 z-10 text-[0.6rem] uppercase tracking-widest text-white/50">{venue.imageCredit}</p>
        )}
      </ShrinkHero>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-deep-blue">At a glance</p>
          <p className="mt-4 text-base leading-relaxed text-coffee/80 sm:text-lg">
            Every place has its own character. Explore the details, discover the possibilities and get a better sense of
            whether this venue could be right for the experience you have in mind.
          </p>
          <p className="mt-4 text-xs text-coffee/45">{basisLine}</p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="divide-y divide-linen-line">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 40} className="grid gap-3 py-8 first:pt-0 sm:grid-cols-[200px_1fr] sm:gap-8">
                <SplitHeading className="font-display text-xl italic sm:text-2xl">{s.title}</SplitHeading>
                <p className="text-base leading-relaxed text-coffee/80">{s.copy}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8 self-start lg:sticky lg:top-28">
            <Reveal className="rounded-2xl bg-deep-blue-tint p-8">
              <p className="eyebrow text-deep-blue">The Gypsy perspective</p>
              <p className="mt-4 font-display text-xl italic leading-snug sm:text-2xl">“{venue.perspective}”</p>
            </Reveal>
            {venue.images.slice(1).map((src) => (
              <ParallaxImage key={src} src={src} className="aspect-[4/3]" />
            ))}
            {/* TODO: restore the "Ask About This Venue" button (→ /venue-gypsy/contact?venue=<name>, already
                prefilled by Contact.jsx) once the enquiry form posts to a real backend. The copy doc allows
                an enquiry action only when a working enquiry route exists. */}
          </div>
        </div>
      </section>

      {(destination || related.length > 0) && (
        <section className="border-t border-linen-line bg-linen-deep">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <Reveal>
              <p className="eyebrow text-deep-blue">Around this venue</p>
            </Reveal>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {destination && (
                <Reveal>
                  <DestinationCard destination={destination} />
                </Reveal>
              )}
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={(i + 1) * 70}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <SplitHeading className="font-display text-3xl sm:text-5xl">More places to consider</SplitHeading>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((v, i) => (
              <Reveal key={v.slug} delay={i * 70}>
                <VenueCard venue={v} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
