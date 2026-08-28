import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'

const types = [
  { title: 'Milestone Birthdays', copy: 'Thirtieths, fiftieths, and every number that deserves a proper send-off.' },
  { title: 'Private Celebrations', copy: 'Anniversaries, engagements, homecomings — held with the same rigor as a wedding.' },
  { title: 'Brand & Launch Events', copy: 'Product moments and gatherings designed to feel like an occasion, not a booth.' },
  { title: 'Seasonal Gatherings', copy: 'Annual dinners and holiday parties people start asking about a year in advance.' },
]

export default function Parties() {
  return (
    <div>
      <PageHero
        eyebrow="Parties"
        title="Every gathering, given a point of view"
        subtitle="Balloons or candlelight, rooftop or riverside — the brief changes, the standard doesn't."
        image="/media/gallery/balloon-party.jpg"
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {types.map((t) => (
            <div key={t.title} className="border border-ink-line p-8 transition-colors hover:border-gold/50">
              <h3 className="font-display text-xl italic text-ivory">{t.title}</h3>
              <p className="mt-3 text-sm text-ivory/60">{t.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
          <img src="/media/gallery/balloon-party.jpg" alt="A pastel table setting with silver balloon arches for a private celebration" className="h-[380px] w-full object-cover" />
          <div>
            <p className="eyebrow text-gold-soft">A note on scale</p>
            <h2 className="mt-4 font-display text-2xl italic text-ivory sm:text-3xl">
              Twelve guests or twelve hundred
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              The size of the guest list changes the logistics, never the level of care. An intimate dinner gets
              the same run-of-show discipline as a full production — because the host feels every gap in planning
              regardless of headcount.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="font-display text-3xl italic text-ivory sm:text-4xl">Planning something?</h2>
        <p className="mt-4 text-sm text-ivory/65">Tell us the occasion — we'll tell you what's possible.</p>
        <Link
          to="/cadora/enquire"
          className="mt-8 inline-block border border-gold bg-gold px-8 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          Start the conversation
        </Link>
      </section>
    </div>
  )
}
