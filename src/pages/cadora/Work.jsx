
import React, { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtFrame, CTA, PageIntro, Reveal } from '../../components/Site'
import Footer from '../../components/Footer'
import { projects } from '../../data/content'

const filters = [
  'All',
  'Weddings',
  'Milestone Celebrations',
  'Corporate Experiences',
  'Destination Events',
  'Experiential Design'
]

export default function Work() {
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.type === active),
    [active]
  )

  return (
    <>
      <PageIntro
        number="04"
        kicker="Our work"
        title="A collection of stories, brought to life."
        description="Every project begins with a different brief, a different set of people and a different reason to gather. Explore a selection of our work across celebrations, corporate experiences and destination events."
      />

      <section className="container-shell pb-24 md:pb-32">

        {/* Portfolio Filters */}
        <div className="flex flex-wrap gap-x-7 gap-y-4 border-y border-line py-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`relative pb-2 text-[9px] uppercase tracking-[.16em] transition-colors duration-300 ${
                active === filter
                  ? 'text-gold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {filter}

              {active === filter && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 h-px w-full bg-gold"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-x-7 gap-y-16 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05
                }}
                className={`group ${
                  i % 3 === 1 ? 'md:mt-24' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <ArtFrame
                    src={p.image}
                    alt={`${p.type} portfolio image`}
                    className="h-[320px] md:h-[440px] transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="eyebrow text-gold">
                      {p.type}
                    </p>

                    <h2 className="display mt-3 text-2xl transition-colors duration-300 group-hover:text-gold md:text-3xl">
                      {p.title}
                    </h2>

                    <p className="mt-3 text-xs tracking-wide text-muted">
                      {p.place}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Note */}
        <p className="mt-20 border-t border-line pt-7 text-xs leading-7 text-muted">
          Portfolio entries are illustrative placeholders. Replace with
          approved project titles, destinations, photography and case-study
          details before publishing.
        </p>
      </section>

      <CTA
        title="Have a project you would like to discuss?"
        button="Discuss a project"
      />
      <Footer />
    </>
  )
}
