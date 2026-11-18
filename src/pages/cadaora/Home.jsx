import { Link } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import CadaoraEmblem from '../../components/CadaoraEmblem.jsx'
import { projects } from '../../data/cadaora/projects.js'
import { ProjectCard } from './Work.jsx'
import { FadeUp, ShrinkHero, SplitHeading, StackCards } from '../../components/Motion.jsx'

const services = [
  {
    title: 'Social Celebrations',
    copy: 'Weddings, milestone celebrations and meaningful personal gatherings.',
    image: '/media/gallery/gold-hall.jpg',
  },
  {
    title: 'Corporate Experiences',
    copy: 'Events and gatherings designed around people, purpose and brand.',
    image: '/media/gallery/candelabra.jpg',
  },
  {
    title: 'Destination Events',
    copy: 'Celebrations conceived with a sense of place and coordinated across locations.',
    image: '/media/gallery/bride-card.jpg',
  },
  {
    title: 'Experiential Design & Production',
    copy: 'Creative direction, spatial storytelling and the details that shape how an event is experienced.',
    image: '/media/gallery/balloon-party.jpg',
  },
]

export default function Home() {
  const selected = projects.slice(0, 3)

  return (
    <div>
      <Seo
        title="Cadaora Exquisite Events | Destination Events & Experiential Design"
        description="Cadaora Exquisite Events is a Lagos-based destination events and experiential design house creating distinctive celebrations and experiences through creative direction, thoughtful design, hospitality and considered execution."
      />

      {/* Hero: full-bleed video that shrinks into a card as you scroll */}
      <ShrinkHero
        className="text-white"
        media={
          <>
            <video
              src="/media/hero.mp4"
              poster="/media/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="A Cadaora reception hall dressed in warm light, with a long illuminated walkway between the tables"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/25" />
          </>
        }
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-16 sm:pb-24">
          <FadeUp waitForIntro>
            <p className="eyebrow text-white/80">Destination Events &amp; Experiential Design</p>
          </FadeUp>
          <SplitHeading as="h1" waitForIntro delay={120} className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            More Than an Event.
            <br />
            An Experience With Meaning.
          </SplitHeading>
          <FadeUp waitForIntro delay={450}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Cadaora Exquisite Events is a destination events and experiential design house creating distinctive
              celebrations and experiences through creative direction, thoughtful design, exceptional hospitality and
              considered execution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/cadaora/work" variant="lightSolid">
                Explore Our Work
              </Button>
              <Button to="/cadaora/contact" variant="light">
                Tell Us What You’re Envisioning
              </Button>
            </div>
          </FadeUp>
        </div>
      </ShrinkHero>

      {/* Story */}
      <section className="relative overflow-hidden bg-pearl">
        <CadaoraEmblem
          size={520}
          className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 text-midnight opacity-[0.05] lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 sm:py-40 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">Every experience begins with a story.</SplitHeading>
          <FadeUp delay={150} className="space-y-6 text-base leading-relaxed text-midnight/75 sm:text-lg">
            <p>
              A celebration is never just a date on the calendar or a beautiful setting. It is a gathering of people, a
              reflection of relationships, a moment in time and, often, a story that deserves to be told with care.
            </p>
            <p>
              At Cadaora, we bring those stories into focus. We combine concept development, experiential design,
              destination knowledge and thoughtful planning to create occasions that feel personal, considered and
              unmistakably their own.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What we do: stacked sticky cards */}
      <section className="bg-pearl">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 sm:pt-16">
          <div className="max-w-2xl">
            <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">What we do</SplitHeading>
            <FadeUp delay={150}>
              <p className="mt-6 text-base leading-relaxed text-midnight/70 sm:text-lg">
                From intimate celebrations to large-scale gatherings and destination occasions, we shape the thinking,
                design and delivery behind experiences that bring people together.
              </p>
            </FadeUp>
          </div>
        </div>
        <StackCards
          className="mx-auto max-w-[96rem] px-3 pb-28 sm:px-10 sm:pb-40"
          items={services}
          renderCard={(s, i) => (
            <Link
              to="/cadaora/services"
              className="group relative flex h-[72vh] min-h-[420px] items-end overflow-hidden rounded-[1.5rem] bg-midnight text-white sm:h-[78vh]"
            >
              <img src={s.image} alt="" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/10" />
              <div className="relative z-10 w-full p-7 sm:p-14">
                <p className="eyebrow text-white/70">0{i + 1}</p>
                <h3 className="mt-3 max-w-3xl font-display text-4xl leading-[1.02] sm:text-6xl">{s.title}</h3>
                <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">{s.copy}</p>
              </div>
            </Link>
          )}
        />
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-aqua-deep">Our work</p>
            <SplitHeading className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">A collection of stories, brought to life.</SplitHeading>
          </div>
          <Link to="/cadaora/work" className="eyebrow flex items-center gap-2 text-aqua-deep hover:text-moss">
            Explore all projects <Arrow />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-moss text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">A considered approach</SplitHeading>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              We believe the strongest experiences are not assembled from trends or templates. They are developed through
              listening, asking better questions and making deliberate choices — from the first conversation to the final
              guest departure.
            </p>
            <Button to="/cadaora/approach" variant="lightSolid" className="mt-8">
              Discover the Cadaora Approach <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Enquiry band */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
        <SplitHeading className="font-display text-3xl leading-tight sm:text-5xl">
          Have an occasion in mind?
          <br />
          Let’s start with a conversation.
        </SplitHeading>
        <FadeUp delay={200}>
          <Button to="/cadaora/contact" className="mt-10">
            Enquire About Your Event <Arrow />
          </Button>
        </FadeUp>
      </section>
    </div>
  )
}
