import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { SplitHeading } from '../../components/Motion.jsx'
import CadaoraEmblem from '../../components/CadaoraEmblem.jsx'

const philosophy = [
  'Every celebration is an experience.',
  'Every detail should have intention.',
  'Every destination should contribute something.',
  'Every client should feel cared for.',
  'Every project should strengthen the Cadaora name.',
]

const guides = [
  { title: 'Story before styling.', copy: 'We look for the idea that gives an experience its character.' },
  { title: 'Intention in every detail.', copy: 'Choices should serve the story, setting or guest.' },
  { title: 'Hospitality at the centre.', copy: 'The way people are welcomed, guided and cared for matters.' },
  {
    title: 'Ownership from start to finish.',
    copy: 'We value clear communication, sound judgement and disciplined execution.',
  },
  { title: 'Respect for place.', copy: 'A destination is more than a backdrop; it can shape the experience.' },
]

const facts = [
  { value: '2016', label: 'Founded' },
  { value: '10+', label: 'Years of experience' },
  { value: '200+', label: 'Social events delivered' },
  { value: 'Lagos', label: 'Nigeria · Working across destinations' },
]

export default function About() {
  return (
    <div>
      <Seo
        title="About | Cadaora Exquisite Events"
        description="Founded in 2016, Cadaora Exquisite Events has grown from an event planning company into a destination events and experiential design house based in Lagos, Nigeria."
      />
      <PageHero
        motion
        eyebrow="About Cadaora"
        title="A little more about us"
        image="/media/gallery/bride-card.jpg"
        imageAlt="A place card at a Cadaora table setting"
        height="min-h-[56vh]"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Reveal className="space-y-6 text-lg leading-relaxed text-midnight/75 sm:text-xl">
          <p>
            Founded in 2016, Cadaora Exquisite Events has grown from an event planning company into a destination
            events and experiential design house. With more than a decade of experience and over 200 social events
            delivered at home and internationally, our work is shaped by a belief that the most memorable occasions
            are created through a thoughtful meeting of story, design, place and hospitality.
          </p>
          <p>
            We approach each project with curiosity and intention. We want to understand not only what a client wants
            an event to look like, but what it should communicate, how it should feel and what guests should take away
            from being part of it.
          </p>
          <p>
            Our work brings together creative development, design, planning, destination coordination and execution.
            The result is an experience in which the elements feel connected — not simply beautiful in isolation, but
            meaningful as a whole.
          </p>
        </Reveal>
      </section>

      {/* Facts */}
      <section className="border-y border-pearl-line bg-pearl-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 60}>
              <p className="font-display text-4xl text-aqua-deep sm:text-5xl">{f.value}</p>
              <p className="eyebrow mt-3 text-midnight/50">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-azure-tint">
        <CadaoraEmblem
          size={560}
          className="pointer-events-none absolute -left-40 top-1/2 hidden -translate-y-1/2 -scale-x-100 text-midnight opacity-[0.05] lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-aqua-deep">Our philosophy</p>
          </Reveal>
          <ol className="mt-8 divide-y divide-midnight/10">
            {philosophy.map((line, i) => (
              <li key={line} className="flex items-baseline gap-6 py-7 sm:gap-10 sm:py-9">
                <span className="eyebrow w-8 shrink-0 text-aqua-deep">0{i + 1}</span>
                <SplitHeading as="span" className="block font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
                  {line}
                </SplitHeading>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What guides us */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <SplitHeading className="max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">What guides us</SplitHeading>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.title} delay={i * 70} className="border-t border-pearl-line pt-6">
              <h3 className="font-display text-xl">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-midnight/65 sm:text-base">{g.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Global outlook */}
      <section className="bg-moss text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">A global outlook</SplitHeading>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Based in Lagos, Nigeria, Cadaora works across destinations, bringing local understanding, creative
              perspective and structured coordination to projects in different locations. We collaborate with clients
              and trusted local partners to deliver experiences grounded in their setting and connected by one clear
              vision.
            </p>
            <Button to="/cadaora/contact" variant="lightSolid" className="mt-8">
              Enquire About Your Event <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
