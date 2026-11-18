import { useEffect, useMemo, useState } from 'react'
import { ScrollTrigger } from '../../lib/motion.js'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import { venues, VENUE_TYPES, REGIONS } from '../../data/gypsy/venues.js'
import { VenueCard } from './cards.jsx'

export default function Venues() {
  const [type, setType] = useState('All')
  const [region, setRegion] = useState('All')

  // the grid changed height: recompute every scroll trigger below it
  useEffect(() => {
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [type, region])

  const availableTypes = useMemo(() => VENUE_TYPES.filter((t) => venues.some((v) => v.type === t)), [])
  const availableRegions = useMemo(() => REGIONS.filter((r) => venues.some((v) => v.region === r)), [])

  const shown = venues.filter((v) => (type === 'All' || v.type === type) && (region === 'All' || v.region === region))

  return (
    <div>
      <Seo
        title="Discover Venues | The Venue Gypsy"
        description="Explore a curated collection of venues with the character, setting and possibilities to host something special."
      />
      <PageHero
        motion
        eyebrow="Discover venues"
        title="Find a place that feels like the one."
        subtitle="Explore a curated collection of venues with the character, setting and possibilities to host something special. Each feature is designed to help you look beyond the address and imagine the experience."
        image="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A coastal town stacked above the sea at golden hour"
        height="min-h-[60vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="space-y-5">
          <FilterRow label="Venue type" value={type} onChange={setType} options={availableTypes} />
          <FilterRow label="Region" value={region} onChange={setRegion} options={availableRegions} />
        </div>

        <p className="mt-10 text-sm text-coffee/55">
          {shown.length} {shown.length === 1 ? 'venue' : 'venues'}
        </p>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 3) * 70}>
              <VenueCard venue={v} />
            </Reveal>
          ))}
        </div>
        {shown.length === 0 && (
          <p className="mt-10 text-coffee/65">Nothing in this combination yet — try another type or region.</p>
        )}

        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-coffee/45">
          Venue features are editorial. Capacities, event permissions, accommodation and access should be confirmed
          directly with each property.
        </p>
      </section>
    </div>
  )
}

function FilterRow({ label, value, onChange, options }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <span className="eyebrow mr-2 w-full text-coffee/45 sm:w-auto">{label}</span>
      {['All', ...options].map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
            value === o
              ? 'border-sun-orange bg-sun-orange text-coffee'
              : 'border-linen-line text-coffee/60 hover:border-deep-blue hover:text-deep-blue'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
