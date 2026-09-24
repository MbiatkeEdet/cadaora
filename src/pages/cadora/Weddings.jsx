import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'

const steps = [
  { n: '01', title: 'Listen', copy: 'A long, unhurried conversation about how you want the day to feel, not just look.' },
  { n: '02', title: 'Design', copy: 'A full concept — palette, flow, tablescape, lighting — presented before a single vendor is booked.' },
  { n: '03', title: 'Build', copy: 'Florists, chefs, musicians and craftspeople assembled and briefed against one vision.' },
  { n: '04', title: 'Direct', copy: 'On the day, a run-of-show timed to the minute, and a team that keeps it invisible.' },
]

export default function Weddings() {
  return (
    <div>
      <PageHero
        eyebrow="Weddings"
        title="A day built around you, not a template"
        subtitle="Full planning, partial planning, or design-only — Cadora scales to how much of the process you want to hold."
        image="/media/gallery/bride-card.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="eyebrow text-gold-soft">The approach</p>
            <h2 className="mt-4 font-display text-3xl italic text-ivory">Considered, not conventional</h2>
          </div>
          <p className="text-sm leading-relaxed text-ivory/70">
            We start from the two of you — how you host, what you collect, what music plays in your kitchen — and
            build outward. The result rarely looks like a "wedding style." It looks like a very good party that two
            people happen to be getting married at.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-ink p-6">
              <span className="font-display text-2xl italic text-gold-soft">{s.n}</span>
              <h3 className="mt-3 text-sm font-semibold tracking-wide text-ivory">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ivory/60">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-1 sm:grid-cols-2">
        <img src="/media/gallery/bride-card.jpg" alt="A place card reading The Bride at a wedding reception table" className="h-[420px] w-full object-cover" />
        <img src="/media/gallery/gold-hall.jpg" alt="A wedding reception hall with gold chairs and floral centrepieces" className="h-[420px] w-full object-cover" />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="eyebrow text-gold-soft">Ready when you are</p>
        <h2 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">Let's talk about your date</h2>
        <p className="mt-4 text-sm text-ivory/65">
          Tell us your date, your guest count, and the feeling you're after — we'll take it from there.
        </p>
        <Link
          to="/cadora/enquire"
          className="mt-8 inline-block border border-gold bg-gold px-8 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          Enquire about your wedding
        </Link>
      </section>
    </div>
  )
}
