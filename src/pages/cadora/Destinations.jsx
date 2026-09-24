import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { destinations } from '../../data/destinations.js'

export default function Destinations() {
  const featured = destinations.slice(0, 3)

  return (
    <div>
      <PageHero
        eyebrow="Destinations"
        title="We travel. So can your celebration."
        subtitle="Full production abroad — guest logistics, local permits, and a team on the ground before you land."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="eyebrow text-gold-soft">How it works</p>
            <h2 className="mt-4 font-display text-3xl italic text-ivory">One team, wherever you land</h2>
          </div>
          <p className="text-md leading-relaxed text-ivory/70">
            Destination events fail in the gaps — a florist who's never met the venue, a timeline built in the
            wrong timezone. Cadora sends its own team ahead: scouting the site, briefing local craftspeople, and
            running the same production standard you'd get at home, wherever "home" isn't.
          </p>
        </div>
      </section>

      {/* Cross-link to Venue Gypsy atlas */}
      <section className="border-y border-ink-line bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-jade-soft">From the Venue Gypsy atlas</p>
              <h2 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
                Haven't picked a setting yet?
              </h2>
            </div>
            <Link
              to="/gypsy"
              className="eyebrow text-[0.65rem] text-sand-soft underline decoration-jade-soft/50 underline-offset-4 hover:text-ivory"
            >
              View the full atlas →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {featured.map((d) => (
              <Link
                key={d.slug}
                to={`/gypsy/destinations/${d.slug}`}
                className="group relative overflow-hidden border border-ink-line bg-ink p-6"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="relative z-10 flex h-40 flex-col justify-end">
                  <p className="eyebrow text-sand-soft">{d.country}</p>
                  <h3 className="mt-1 font-display text-xl italic text-ivory">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl italic text-ivory sm:text-4xl">Somewhere in mind already?</h2>
        <p className="mt-4 text-sm text-ivory/65">Tell us the place, the date, and the guest count.</p>
        <Link
          to="/cadora/enquire"
          className="mt-8 inline-block border border-gold bg-gold px-8 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          Enquire about a destination event
        </Link>
      </section>
    </div>
  )
}
