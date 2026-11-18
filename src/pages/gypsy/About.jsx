import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { SplitHeading } from '../../components/Motion.jsx'
import ContourArt from '../../components/ContourArt.jsx'

const audiences = [
  'Couples searching for destination wedding venues and places for celebrations.',
  'Event planners and designers looking for fresh venue and destination possibilities for their clients.',
  'Private clients considering locations for birthdays, anniversaries, family gatherings and milestones.',
  'Corporate teams and brands looking for settings for retreats, dinners, launches, incentives and private experiences.',
  'Travel and hospitality enthusiasts who enjoy discovering remarkable places around the world.',
]

const personality = ['Curious', 'Adventurous', 'Discerning', 'Knowledgeable', 'Well-travelled', 'Open-minded', 'Warm and confident']

export default function About() {
  return (
    <div>
      <Seo
        title="About | The Venue Gypsy"
        description="A curiosity for places. A perspective on possibility. The Venue Gypsy was born from a love of discovering remarkable places and a professional life shaped by destination events, travel and venue scouting."
      />
      <PageHero
        motion
        eyebrow="About The Venue Gypsy"
        title={
          <>
            A curiosity for places.
            <br />
            <em>A perspective on possibility.</em>
          </>
        }
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A road winding through mountains"
        height="min-h-[60vh]"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <Reveal className="space-y-6 text-lg leading-relaxed text-coffee/80 sm:text-xl">
          <p>
            The Venue Gypsy was born from a love of discovering remarkable places and a professional life shaped by
            destination events, travel and venue scouting.
          </p>
          <p>
            Over time, one thing became clear: extraordinary venues exist all over the world, but finding the right one
            — and understanding what it could offer — is not always easy. A beautiful photograph can catch your
            attention, but it rarely tells you how a property feels, how its spaces work or what kind of experience it
            could hold.
          </p>
          <p>
            The Venue Gypsy brings a different perspective to venue discovery. We visit, observe and explore places with
            an understanding of events and hospitality. We look at the setting, the spaces, the guest experience and the
            possibilities — then share those discoveries with people looking for somewhere remarkable.
          </p>
          <p>We are interested in more than traditional luxury. We look for character, beauty, atmosphere, possibility and a story to tell.</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {personality.map((p) => (
              <li key={p} className="eyebrow rounded-full border border-linen-line px-3 py-1.5 text-coffee/60">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-coffee text-linen">
        <ContourArt seed={88} color="#f28c40" className="absolute inset-0 h-full w-full opacity-25" lines={10} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
          <SplitHeading as="p" className="font-display text-4xl italic leading-tight sm:text-6xl md:text-7xl">
            We travel. We discover.
            <br />
            We experience. We share.
          </SplitHeading>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <SplitHeading className="max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">Who we are for</SplitHeading>
        <ol className="mt-12 divide-y divide-linen-line">
          {audiences.map((a, i) => (
            <li key={a} className="flex items-baseline gap-6 py-7 sm:gap-10 sm:py-8">
              <span className="eyebrow w-8 shrink-0 text-deep-blue">0{i + 1}</span>
              <SplitHeading as="span" className="block font-display text-2xl italic leading-snug text-coffee/90 sm:text-3xl">
                {a}
              </SplitHeading>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-linen-line bg-linen-deep">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-6xl">Our long-term ambition</SplitHeading>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-coffee/80 sm:text-lg">
              To become a trusted global resource for discovering where extraordinary events and experiences can happen
              — a growing world of venues, destinations, stories and useful insight.
            </p>
            <Button to="/venue-gypsy/contact" variant="accent" className="mt-8">
              Get in touch <Arrow />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
