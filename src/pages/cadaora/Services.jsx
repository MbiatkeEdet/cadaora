import { useRef, useState } from 'react'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { FadeUp, ParallaxImage, SplitHeading } from '../../components/Motion.jsx'
import { prefersReducedMotion, ScrollTrigger, useGSAP } from '../../lib/motion.js'

const services = [
  {
    n: '01',
    title: 'Social celebrations',
    copy: 'We create personal celebrations that bring people together and give meaningful moments their own character. From weddings and anniversaries to milestone birthdays and private gatherings, we develop each occasion around the people, story and atmosphere at its heart.',
    image: '/media/gallery/gold-hall.jpg',
    alt: 'A reception hall with gold chairs and rose centrepieces',
  },
  {
    n: '02',
    title: 'Corporate experiences',
    copy: 'We design and deliver corporate events that bring people, ideas and brands together with purpose. From business gatherings and launches to client experiences and company celebrations, we consider both the message an event needs to communicate and the experience people will have within it.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    alt: 'A softly lit dinner room prepared for a corporate gathering',
  },
  {
    n: '03',
    title: 'Destination events',
    copy: 'A destination should do more than provide a location. It should contribute to the character of the occasion. We help clients explore and shape destination experiences, bringing together creative direction, venue and local-partner coordination, planning and on-ground execution.',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1600&q=80',
    alt: 'A coastal town stacked above the sea at golden hour',
  },
  {
    n: '04',
    title: 'Experiential design & production',
    copy: 'We develop the creative framework that gives an event its identity — from concept narrative and spatial direction to guest touchpoints, atmosphere and production details. Our focus is on creating a coherent experience, where each element has a reason to be there and contributes to the whole.',
    image: '/media/gallery/candelabra.jpg',
    alt: 'A crystal candelabra centrepiece under stage lighting',
  },
]

export default function Services() {
  return (
    <div>
      <Seo
        title="Services | Cadaora Exquisite Events"
        description="Social celebrations, corporate experiences, destination events and experiential design & production — connected by one purpose: experiences thoughtfully conceived and carefully delivered."
      />
      <PageHero
        motion
        eyebrow="Services"
        title="What we create"
        subtitle="Our services are connected by one purpose: to create experiences that are thoughtfully conceived and carefully delivered. Each project is shaped around its brief, scale, destination and needs."
        image="/media/hero-poster.jpg"
        imageAlt="A Cadaora reception hall dressed in warm light"
        height="min-h-[60vh]"
      />

      <ServiceScroller />

      <section className="border-t border-pearl-line bg-pearl-soft">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
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
        </div>
      </section>
    </div>
  )
}

/** Text blocks scroll on the left while one image frame holds on the right and changes with them. */
function ServiceScroller() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      ref.current.querySelectorAll('[data-service]').forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          {services.map((s) => (
            <div key={s.n} data-service className="flex flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0">
              <ParallaxImage src={s.image} alt={s.alt} className="mb-8 aspect-[5/4] lg:hidden" />
              <p className="eyebrow text-aqua-deep">{s.n}</p>
              <SplitHeading className="mt-3 font-display text-3xl leading-tight sm:text-5xl">{s.title}</SplitHeading>
              <FadeUp delay={120}>
                <p className="mt-6 text-base leading-relaxed text-midnight/75 sm:text-lg">{s.copy}</p>
              </FadeUp>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-[11vh] h-[78vh] overflow-hidden rounded-[1.5rem] bg-pearl-soft">
            {services.map((s, i) => (
              <img
                key={s.n}
                src={s.image}
                alt={i === active ? s.alt : ''}
                aria-hidden={i !== active}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === active ? 'scale-100 opacity-100' : 'scale-[1.06] opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {services.map((s, i) => (
                <span
                  key={s.n}
                  className={`h-1 rounded-full bg-white transition-all duration-500 ${i === active ? 'w-8 opacity-100' : 'w-3 opacity-50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
