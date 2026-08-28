import { Link } from 'react-router-dom'
import ContourArt from '../../components/ContourArt.jsx'
import { destinations } from '../../data/destinations.js'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[86vh] min-h-[560px] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
        <ContourArt seed={5} lines={11} color="#4c7d6e" className="absolute inset-0 h-full w-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/40 to-ivory/60" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="eyebrow text-sand-soft">The Atlas</p>
          <h1 className="mt-5 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
            Exquisite corners
            <br /> of the world
          </h1>
          <p className="mt-6 text-sm text-ivory/70 sm:text-base">
            Every destination here has been scouted, vetted, and held to one rule — it has to be worth crossing an
            ocean for.
          </p>
        </div>
      </section>

      {/* Atlas grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-jade-soft">{destinations.length} destinations, and counting</p>
            <h2 className="mt-3 font-display text-3xl italic text-ivory sm:text-4xl">Choose your coordinates</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              to={`/gypsy/destinations/${d.slug}`}
              className="group relative flex h-72 flex-col justify-end overflow-hidden border border-ink-line bg-ink-soft p-6"
            >
              <ContourArt
                seed={d.seed}
                color="#4c7d6e"
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
              <div className="relative z-10">
                <p className="eyebrow text-sand-soft">{d.coords}</p>
                <h3 className="mt-2 font-display text-2xl italic text-ivory">{d.name}</h3>
                <p className="mt-1 text-xs text-ivory/50">{d.country}</p>
                <p className="mt-3 text-sm text-ivory/65">{d.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs text-ivory/50 transition-all group-hover:gap-3 group-hover:text-jade-soft">
                  View venue →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="scroll-mt-24 border-y border-ink-line bg-ink-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="eyebrow text-jade-soft">Why an atlas</p>
            <h2 className="mt-4 font-display text-3xl italic leading-tight text-ivory sm:text-4xl">
              A place changes
              <br /> what a celebration means.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ivory/70 sm:text-base">
            Venue Gypsy exists because the right setting does half the work of hosting. We spend our time finding
            the villa with the one perfect terrace, the palace with the working orchard, the coastline with the
            light that arrives on cue at seven — so that by the time you arrive, all that's left to do is gather
            your people.
          </p>
        </div>
      </section>

      {/* Cross-brand CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 border border-ink-line p-10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-14">
          <div>
            <p className="eyebrow text-gold-soft">Sister house</p>
            <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
              Found your setting? Let's design what happens in it.
            </h3>
            <p className="mt-3 max-w-lg text-sm text-ivory/60">
              Cadora Events plans and produces the celebration itself — anywhere on this atlas, or closer to home.
            </p>
          </div>
          <Link
            to="/cadora"
            className="whitespace-nowrap border border-gold/60 px-7 py-3 eyebrow text-[0.65rem] text-gold-soft transition-colors hover:bg-gold hover:text-ink"
          >
            Meet Cadora Events
          </Link>
        </div>
      </section>
    </div>
  )
}
