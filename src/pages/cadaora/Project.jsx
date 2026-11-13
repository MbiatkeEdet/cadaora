import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { projects, getProject } from '../../data/cadaora/projects.js'
import { ProjectCard } from './Work.jsx'
import { FadeUp, ParallaxImage, ShrinkHero, SplitHeading } from '../../components/Motion.jsx'

export default function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/cadaora/work" replace />

  const chapters = [
    { title: 'The brief', copy: project.brief },
    { title: 'The concept', copy: project.concept },
    { title: 'The experience', copy: project.experience },
    { title: 'The delivery', copy: project.delivery },
  ]
  const more = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div>
      <Seo title={`${project.title} | Cadaora Exquisite Events`} description={project.intro} />

      <ShrinkHero
        key={slug}
        className="text-white"
        media={
          <>
            <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10" />
          </>
        }
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-14 sm:pb-20">
          <FadeUp waitForIntro>
            <Link to="/cadaora/work" className="eyebrow inline-flex items-center gap-2 text-white/70 hover:text-white">
              <Arrow className="rotate-180" /> Our work
            </Link>
            <p className="eyebrow mt-8 text-white/80">
              {project.type} · {project.destination}
            </p>
          </FadeUp>
          <SplitHeading as="h1" waitForIntro delay={120} className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] sm:text-6xl md:text-7xl">
            {project.title}
          </SplitHeading>
        </div>
      </ShrinkHero>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-display text-2xl leading-snug sm:text-3xl">{project.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="space-y-12">
            {chapters.map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="border-t border-pearl-line pt-6">
                <p className="eyebrow text-aqua-deep">{c.title}</p>
                <p className="mt-3 text-base leading-relaxed text-midnight/75 sm:text-lg">{c.copy}</p>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-4 self-start sm:grid-cols-2 lg:sticky lg:top-24">
            {project.gallery.map((src, i) => (
              <ParallaxImage
                key={src}
                src={src}
                className={i === 0 ? 'aspect-[16/10] sm:col-span-2' : 'aspect-[4/5]'}
              />
            ))}
          </div>
        </div>

        {project.illustrative && (
          <p className="mt-10 text-xs text-midnight/40">Illustrative case study — to be replaced with an approved project.</p>
        )}
      </section>

      <section className="border-t border-pearl-line bg-pearl-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SplitHeading className="font-display text-3xl sm:text-5xl">More stories</SplitHeading>
            <Button to="/cadaora/contact">
              Discuss a Project With Us <Arrow />
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
