import PageHero from '../../components/PageHero.jsx'

const values = [
  { title: 'Restraint', copy: 'We add until it feels finished, then we take one thing away.' },
  { title: 'Discretion', copy: 'The best measure of our work is how little of it you can see on the day.' },
  { title: 'Craft', copy: 'We work with makers, not vendors — people who care as much as we do.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Cadora"
        title="A small studio, on purpose"
        subtitle="We plan a limited number of events each season so that each one gets the whole team."
        image="/media/gallery/bride-card.jpg"
        height="h-[56vh]"
      />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="eyebrow text-gold-soft text-center">Our story</p>
        <h2 className="mt-4 text-center font-display text-3xl italic text-ivory sm:text-4xl">
          Started at a kitchen table, still run that way
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ivory/70 sm:text-base">
          <p>
            Cadora began as a favor — a friend's wedding, planned over several months of notebooks and site
            visits, that turned into a request from the next friend, and the one after that. What didn't change as
            the studio grew was the way we start every project: at the table, with the people hosting, before a
            single vendor enters the conversation.
          </p>
          <p>
            Today the team is larger, the productions bigger, and the passports well-used — but the brief is the
            same one it always was. Design the room. Direct the evening. Disappear into it.
          </p>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center sm:text-left">
              <h3 className="font-display text-xl italic text-gold-soft">{v.title}</h3>
              <p className="mt-3 text-sm text-ivory/65">{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="eyebrow text-gold-soft">By the numbers</p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Stat number="14" label="Years in practice" />
          <Stat number="310+" label="Celebrations designed" />
          <Stat number="22" label="Countries worked in" />
          <Stat number="18" label="Events taken per season" />
        </div>
      </section>
    </div>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-display text-4xl italic text-ivory">{number}</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-ivory/50">{label}</p>
    </div>
  )
}
