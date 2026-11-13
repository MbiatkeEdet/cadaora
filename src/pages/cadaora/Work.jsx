import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { projects, PROJECT_TYPES } from '../../data/cadaora/projects.js'
import { ParallaxImage, SplitHeading } from '../../components/Motion.jsx'
import { ScrollTrigger } from '../../lib/motion.js'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.type === filter)

  // the grid changed height: recompute every scroll trigger below it
  useEffect(() => {
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [filter])

  return (
    <div>
      <Seo
        title="Our Work | Cadaora Exquisite Events"
        description="A collection of stories, brought to life. Explore a selection of Cadaora's work across celebrations, corporate experiences and destination events."
      />
      <PageHero
        motion
        eyebrow="Our work"
        title="A collection of stories, brought to life."
        subtitle="Every project begins with a different brief, a different set of people and a different reason to gather. Explore a selection of our work across celebrations, corporate experiences and destination events."
        image="/media/gallery/gold-hall.jpg"
        imageAlt="A reception hall with gold chairs and rose centrepieces"
        height="min-h-[60vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {['All', ...PROJECT_TYPES].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
              className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
                filter === t
                  ? 'border-aqua bg-aqua text-white'
                  : 'border-pearl-line text-midnight/60 hover:border-aqua hover:text-aqua-deep'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        {shown.length === 0 && <p className="mt-12 text-midnight/60">No projects in this category yet.</p>}
      </section>

      <section className="border-t border-pearl-line bg-pearl-soft">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
          <SplitHeading className="font-display text-3xl leading-tight sm:text-5xl">Discuss a project with us</SplitHeading>
          <Reveal>
            <p className="mx-auto mt-5 max-w-xl text-base text-midnight/65 sm:text-lg">
              Whether you have a clear vision or are still exploring possibilities, we would love to hear about the
              occasion you have in mind.
            </p>
            <Button to="/cadaora/contact" className="mt-10">
              Discuss a Project With Us <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export function ProjectCard({ project }) {
  return (
    <Link to={`/cadaora/work/${project.slug}`} className="group block">
      <ParallaxImage src={project.cover} alt={project.title} className="aspect-[4/5]" />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-aqua-deep">{project.type}</p>
          <h3 className="mt-2 font-display text-xl leading-tight sm:text-2xl">{project.title}</h3>
          <p className="mt-1 text-sm text-midnight/55">{project.destination}</p>
        </div>
        <span className="mt-1 text-midnight/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-aqua-deep">
          <Arrow />
        </span>
      </div>
    </Link>
  )
}
