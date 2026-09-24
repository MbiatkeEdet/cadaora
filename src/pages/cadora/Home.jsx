import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section>
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="A couple bathed in golden-hour sunlight, holding a bouquet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="eyebrow absolute inset-x-0 bottom-8 z-10 px-6 text-center text-gold-soft">
          Full-Service Event Design
        </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:py-20">
          <h1 className="font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
            Celebrations, staged
            <br /> like theatre
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm text-ivory/70 sm:text-base">
            Cadora designs weddings and parties for people who notice detail — from the fold of a napkin to the
            last light cue.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/cadora/enquire"
              className="border border-gold bg-gold px-7 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
            >
              Begin an enquiry
            </Link>
            <Link
              to="/cadora/weddings"
              className="border border-ivory/30 px-7 py-3 eyebrow text-[0.65rem] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="eyebrow text-gold-soft">What we design</p>
          <h2 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">Three disciplines, one standard</h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
          <ServiceCard
            to="/cadora/weddings"
            image="/media/gallery/candelabra.jpg"
            eyebrow="01"
            title="Weddings"
            copy="From the first sketch to the final dance, a wedding built around how you actually want to feel."
          />
          <ServiceCard
            to="/cadora/parties"
            image="/media/gallery/balloon-party.jpg"
            eyebrow="02"
            title="Parties"
            copy="Milestone birthdays, launches, and private celebrations with a point of view — never a template."
          />
          <ServiceCard
            to="/cadora/destinations"
            image="/media/gallery/bride-card.jpg"
            eyebrow="03"
            title="Destinations"
            copy="Full production for celebrations abroad — logistics, guest travel, and permits handled quietly."
          />
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="border-y border-ink-line bg-ink-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="eyebrow text-gold-soft">Our Philosophy</p>
            <h2 className="mt-4 font-display text-3xl italic leading-tight text-ivory sm:text-4xl">
              We design the room,
              <br /> then we disappear into it.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ivory/70 sm:text-base">
            The best-run events are the ones no one notices being run. Cadora's team works ahead of the moment —
            timing the light, the music, the courses — so that what your guests remember is the feeling of the
            evening, not the machinery behind it. We take on a limited number of celebrations each season, by
            design.
          </p>
        </div>
      </section>

      {/* Cross-brand CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 border border-ink-line p-10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-14">
          <div>
            <p className="eyebrow text-jade-soft">Sister house</p>
            <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
              Haven't chosen a setting yet?
            </h3>
            <p className="mt-3 max-w-lg text-sm text-ivory/60">
              Venue Gypsy curates the world's most exquisite places to gather — we design just as fluently on a
              clifftop in Amalfi as we do at home.
            </p>
          </div>
          <Link
            to="/gypsy"
            className="whitespace-nowrap border border-jade-soft/60 px-7 py-3 eyebrow text-[0.65rem] text-sand-soft transition-colors hover:bg-jade-soft hover:text-ink"
          >
            Open the atlas
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ to, image, eyebrow, title, copy }) {
  return (
    <Link to={to} className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-ink p-8">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
      <div className="relative z-10">
        <span className="eyebrow text-gold-soft">{eyebrow}</span>
        <h3 className="mt-2 font-display text-2xl italic text-ivory">{title}</h3>
        <p className="mt-3 text-sm text-ivory/65">{copy}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs text-ivory/50 transition-all group-hover:gap-3 group-hover:text-gold-soft">
          Explore →
        </span>
      </div>
    </Link>
  )
}
