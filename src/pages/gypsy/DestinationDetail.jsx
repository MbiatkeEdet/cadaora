import { Link, useParams, Navigate } from 'react-router-dom'
import { destinations, getDestination } from '../../data/destinations.js'

export default function DestinationDetail() {
  const { slug } = useParams()
  const destination = getDestination(slug)

  if (!destination) return <Navigate to="/gypsy" replace />

  const others = destinations.filter((d) => d.slug !== slug).slice(0, 3)

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[480px] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="relative z-10">
          <p className="eyebrow text-sand-soft">{destination.coords}</p>
          <h1 className="mt-4 font-display text-5xl italic text-ivory sm:text-6xl">{destination.name}</h1>
          <p className="mt-2 text-sm text-ivory/60">{destination.country}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-center font-display text-2xl italic text-ivory sm:text-3xl">{destination.tagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-ivory/70 sm:text-base">
          {destination.blurb}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
          <Stat label="Best season" value={destination.season} />
          <Stat label="Capacity" value={destination.capacity} />
          <Stat label="Coordinates" value={destination.coords} />
        </div>

        <div className="mt-14 border border-ink-line p-8 sm:p-10">
          <p className="eyebrow text-jade-soft">Signature experience</p>
          <p className="mt-4 font-display text-xl italic text-ivory sm:text-2xl">{destination.experience}</p>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-soft py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-soft">Plan it with Cadora</p>
          <h2 className="mt-4 font-display text-2xl italic text-ivory sm:text-3xl">
            Bring Cadora Events to {destination.name}
          </h2>
          <p className="mt-4 text-sm text-ivory/65">
            Our sister house handles design and production for celebrations anywhere on the atlas — including here.
          </p>
          <Link
            to="/cadora/enquire"
            className="mt-8 inline-block border border-gold bg-gold px-8 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Enquire about {destination.name}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow text-jade-soft">More from the atlas</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((d) => (
            <Link
              key={d.slug}
              to={`/gypsy/destinations/${d.slug}`}
              className="group relative flex h-56 flex-col justify-end overflow-hidden border border-ink-line p-6"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative z-10">
                <p className="eyebrow text-sand-soft">{d.country}</p>
                <h3 className="mt-1 font-display text-xl italic text-ivory">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-ink p-6 text-center">
      <p className="eyebrow text-ivory/40">{label}</p>
      <p className="mt-2 font-display text-lg italic text-ivory">{value}</p>
    </div>
  )
}
