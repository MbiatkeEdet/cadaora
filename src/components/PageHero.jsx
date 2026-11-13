import { useRef } from 'react'
import Reveal from './Reveal.jsx'
import { FadeUp, SplitHeading } from './Motion.jsx'
import { gsap, prefersReducedMotion, useGSAP } from '../lib/motion.js'

/**
 * Full-bleed page opener shared by both brands. Reads the brand variables set
 * by .brand-cadaora / .brand-gypsy, so it needs no brand props.
 * `motion` (Cadaora) splits the headline into rising lines and drifts the image as the page scrolls.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  credit,
  height = 'min-h-[64vh]',
  align = 'left',
  motion = false,
  children,
}) {
  const ref = useRef(null)
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  useGSAP(
    () => {
      if (!motion || prefersReducedMotion()) return
      const img = ref.current.querySelector('[data-hero-img]')
      if (!img) return
      gsap.fromTo(
        img,
        { yPercent: 0, scale: 1.08 },
        {
          yPercent: 14,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        },
      )
    },
    { scope: ref, dependencies: [motion] },
  )

  const heading = 'mt-4 max-w-4xl font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl'

  return (
    <section
      ref={ref}
      className={`relative flex ${height} w-full flex-col justify-end overflow-hidden bg-[var(--brand-secondary)] text-white`}
    >
      {image && (
        <img
          data-hero-img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/10" />

      <div className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col ${alignment} px-6 pb-14 pt-40 sm:pb-20`}>
        {motion ? (
          <div className={`flex flex-col ${alignment}`}>
            {eyebrow && (
              <FadeUp waitForIntro>
                <p className="eyebrow text-white/80">{eyebrow}</p>
              </FadeUp>
            )}
            <SplitHeading as="h1" waitForIntro delay={100} className={heading}>
              {title}
            </SplitHeading>
            {(subtitle || children) && (
              <FadeUp waitForIntro delay={400}>
                {subtitle && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>}
                {children}
              </FadeUp>
            )}
          </div>
        ) : (
          <Reveal className={`flex flex-col ${alignment}`}>
            {eyebrow && <p className="eyebrow text-white/80">{eyebrow}</p>}
            <h1 className={heading}>{title}</h1>
            {subtitle && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>}
            {children}
          </Reveal>
        )}
      </div>

      {credit && (
        <p className="absolute bottom-3 right-4 z-10 text-[0.6rem] uppercase tracking-widest text-white/50">{credit}</p>
      )}
    </section>
  )
}
