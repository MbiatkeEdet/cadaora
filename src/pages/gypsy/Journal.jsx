import { useState } from 'react'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import { articles, JOURNAL_CATEGORIES } from '../../data/gypsy/journal.js'
import { ArticleCard } from './cards.jsx'

const descriptions = {
  'Venue Discoveries': 'Features on properties that deserve to be known.',
  'Destination Guides': 'Places to explore and what makes them distinctive.',
  'Field Notes': 'Observations and discoveries from venue visits and scouting trips.',
  'Event Possibilities': 'Ideas for how a place could host a celebration, gathering or experience.',
  'Travel & Hospitality': 'Interesting stays, dining, local experiences and hospitality discoveries.',
}

export default function Journal() {
  const [category, setCategory] = useState('All')
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))
  const shown = category === 'All' ? sorted : sorted.filter((a) => a.category === category)
  const [lead, ...rest] = shown

  return (
    <div>
      <Seo
        title="The Journal | The Venue Gypsy"
        description="Stories from the places we discover: field notes, venue features, destination guides and observations from the road."
      />
      <PageHero
        eyebrow="The Journal"
        title="Stories from the places we discover."
        subtitle="The Journal is where discovery becomes a story. Through field notes, venue features, destination guides and observations from the road, we share the places, details and ideas that make us curious."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Mountains at sunrise"
        height="min-h-[56vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {['All', ...JOURNAL_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
                category === c
                  ? 'border-sun-orange bg-sun-orange text-coffee'
                  : 'border-linen-line text-coffee/60 hover:border-deep-blue hover:text-deep-blue'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {category !== 'All' && <p className="mt-5 text-sm text-coffee/60">{descriptions[category]}</p>}

        {lead && (
          <Reveal className="mt-12">
            <ArticleCard article={lead} featured />
          </Reveal>
        )}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 70}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
        {shown.length === 0 && <p className="mt-10 text-coffee/65">Nothing in this category yet.</p>}

        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-coffee/45">
          Every story should offer more than attractive imagery. It should help the reader understand why a place
          matters, what it makes possible and what is useful to know before exploring it further.
        </p>
      </section>
    </div>
  )
}
