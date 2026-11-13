import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { DrawLine, SplitHeading } from '../../components/Motion.jsx'

const steps = [
  {
    n: '01',
    title: 'Consultation',
    copy: 'We begin by listening. Through an in-depth conversation, we explore your vision, priorities, occasion, guests, destination and expectations. This is where we establish the brief and begin to shape the possibilities.',
  },
  {
    n: '02',
    title: 'Design & Experience',
    copy: 'We translate the brief into a considered creative direction. This stage may include the concept narrative, design direction, mood boards, spatial thinking and guest-experience considerations — creating a shared vision for the event before detailed planning begins.',
  },
  {
    n: '03',
    title: 'Planning',
    copy: 'With the direction agreed, we develop the practical framework. This includes budget analysis, planning schedules, venue and vendor coordination, proposals, contracts, approvals and the management of key project details.',
  },
  {
    n: '04',
    title: 'Coordination & Execution',
    copy: 'We bring the plan to life, coordinating the moving parts and overseeing delivery. Our role is to protect the agreed vision, anticipate needs, manage details and help ensure that the experience comes together as intended.',
  },
]

export default function Approach() {
  return (
    <div>
      <Seo
        title="Our Approach | Cadaora Exquisite Events"
        description="Thoughtful by design. Considered at every stage. Consultation, design & experience, planning, and coordination & execution — the Cadaora approach."
      />
      <PageHero
        motion
        eyebrow="The Cadaora approach"
        title={
          <>
            Thoughtful by design.
            <br />
            Considered at every stage.
          </>
        }
        subtitle="No two events should begin with the same template. Our process gives every project a clear structure while leaving room for its individual story to emerge."
        image="/media/gallery/balloon-party.jpg"
        imageAlt="A pastel table setting with silver balloon arches"
        height="min-h-[60vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <ol className="relative pl-8 sm:pl-14">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-aqua/20" />
          <DrawLine className="absolute inset-y-0 left-0 block w-px bg-aqua" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="relative pb-20 last:pb-0 sm:pb-28">
              <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-aqua ring-4 ring-pearl sm:-left-[3.55rem]" />
              <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-12">
                <div>
                  <p className="eyebrow text-aqua-deep">Stage {s.n}</p>
                  <SplitHeading className="mt-2 font-display text-2xl sm:text-4xl">{s.title}</SplitHeading>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-midnight/75 sm:text-lg">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-aqua-tint">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">Working together</SplitHeading>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-midnight/75 sm:text-lg">
              We work closely with clients, venues, creative collaborators and specialist suppliers. Clear communication
              and shared expectations help us maintain consistency from the first idea through to delivery.
            </p>
            <Button to="/cadaora/contact" className="mt-8">
              Enquire About Your Event <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
