
import React from 'react'
import Footer from '../../components/Footer'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import {
  ArtFrame,
  CTA,
  PageIntro,
  Reveal,
  SectionLabel
} from '../../components/Site'
import { steps } from '../../data/content'

export default function Approach() {
  return (
    <>
      {/* Page Introduction */}
      <PageIntro
        number="03"
        kicker="The Cadaora approach"
        title="Thoughtful by design. Considered at every stage."
        description="No two events should begin with the same template. Our process gives every project a clear structure while leaving room for its individual story to emerge."
      />

      {/* Process Section */}
      <section className="container-shell grid gap-14 pb-24 md:grid-cols-[.85fr_1.15fr] md:gap-20 md:pb-36">

        {/* Image */}
        <div className="relative">
          <div className="md:sticky md:top-10">
            <ArtFrame
              src="/images/approach-process.jpg"
              alt="Thoughtfully curated event planning details"
              className="h-[460px] md:h-[680px]"
              caption="The art of considered planning"
            />

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="eyebrow text-muted">
                THE PROCESS
              </span>
              <span className="eyebrow text-gold">
                01 — 04
              </span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <div className="mb-12 max-w-lg">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="display mt-5 text-4xl leading-tight md:text-5xl">
              From the first conversation to the final detail.
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted">
              Every meaningful experience begins with understanding.
              We take the time to listen, imagine and thoughtfully
              translate your vision into something extraordinary.
            </p>
          </div>

          <div>
            {steps.map(([n, title, desc], i) => (
              <Reveal
                key={n}
                className="group border-t border-line py-9 transition-all duration-500 md:py-12"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-gold">
                    {n} / 04
                  </span>

                  {i !== 3 && (
                    <ArrowDown
                      size={17}
                      className="text-muted transition-transform duration-500 group-hover:translate-y-1 group-hover:text-gold"
                    />
                  )}

                  {i === 3 && (
                    <Sparkles
                      size={17}
                      className="text-gold"
                    />
                  )}
                </div>

                <h3 className="display mt-7 text-3xl transition-colors duration-500 group-hover:text-gold md:text-5xl">
                  {title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-8 text-muted">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative overflow-hidden bg-[#eae5da] py-24 md:py-36">
        <div className="container-shell grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">

          <div>
            <SectionLabel>Working together</SectionLabel>

            <p className="mt-6 eyebrow text-[#8b7654]">
              THE ART OF COLLABORATION
            </p>
          </div>

          <div>
            <Reveal>
              <h2 className="display max-w-3xl text-4xl leading-tight md:text-6xl">
                A shared vision, carried through with care.
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-[#777064] md:text-base">
                We work closely with clients, venues, creative
                collaborators and specialist suppliers. Clear
                communication and shared expectations help us
                maintain consistency from the first idea through
                to delivery.
              </p>

              <div className="mt-12 flex items-center gap-4 border-t border-[#c9c1b3] pt-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b7a88f]">
                  <ArrowUpRight size={17} className="text-[#8b7654]" />
                </span>

                <span className="eyebrow text-[#777064]">
                  ONE VISION. EVERY DETAIL.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Let’s shape something with meaning."
      />
      <Footer />
    </>
  )
}
