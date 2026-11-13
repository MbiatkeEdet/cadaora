import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import { destinations } from '../../data/gypsy/destinations.js'
import { DestinationCard } from './cards.jsx'

export default function Destinations() {
  return (
    <div>
      <Seo
        title="Destinations | The Venue Gypsy"
        description="Some destinations have a way of shaping an occasion before the first guest arrives. Explore places worth discovering and the venues that make them compelling."
      />
      <PageHero
        eyebrow="Destinations"
        title="The place is part of the experience."
        subtitle="Some destinations have a way of shaping an occasion before the first guest arrives. The landscape, culture, architecture, pace and surrounding experiences all contribute to the story."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A turquoise cove seen from the cliffs above"
        height="min-h-[60vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-coffee/80 sm:text-lg">
            Our destination features bring together places worth discovering and the venues that make them compelling
            for celebrations, gatherings and experiences. Explore the character of a destination, understand what it
            offers and begin to imagine what could happen there.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 70}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
