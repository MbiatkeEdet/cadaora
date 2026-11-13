import { useRef } from 'react'
import { afterIntro, gsap, prefersReducedMotion, SplitText, useGSAP } from '../lib/motion.js'

// Scroll-led motion primitives (after the Sarah Haywood reference): masked line
// reveals, a hero that shrinks into a card, stacked sticky cards, and framed
// parallax images. Every one renders static content under reduced motion.

/** Heading whose lines rise out of masks — on scroll, or (waitForIntro) once the intro panel leaves. */
export function SplitHeading({ as: Tag = 'h2', className = '', children, waitForIntro = false, delay = 0, ...rest }) {
  const ref = useRef(null)

  useGSAP(
    (_, contextSafe) => {
      if (prefersReducedMotion()) return undefined
      const el = ref.current
      const animate = (lines, trigger) =>
        gsap.from(lines, {
          yPercent: 115,
          duration: 1.15,
          ease: 'power4.out',
          stagger: 0.09,
          delay: delay / 1000,
          scrollTrigger: trigger ? { trigger: el, start: 'top 90%', once: true } : undefined,
        })

      if (!waitForIntro) {
        SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true, onSplit: (self) => animate(self.lines, true) })
        return undefined
      }

      gsap.set(el, { autoAlpha: 0 })
      const play = contextSafe(() => {
        const split = SplitText.create(el, { type: 'lines', mask: 'lines' })
        gsap.set(el, { autoAlpha: 1 })
        animate(split.lines, false)
      })
      return afterIntro(play)
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/** Fades/rises a block once in view (GSAP version of Reveal, for use inside animated sections). */
export function FadeUp({ as: Tag = 'div', className = '', children, delay = 0, waitForIntro = false, ...rest }) {
  const ref = useRef(null)
  useGSAP(
    (_, contextSafe) => {
      if (prefersReducedMotion()) return undefined
      const vars = { y: 28, autoAlpha: 0, duration: 1, ease: 'power3.out', delay: delay / 1000 }
      if (!waitForIntro) {
        gsap.from(ref.current, { ...vars, scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true } })
        return undefined
      }
      gsap.set(ref.current, { autoAlpha: 0 })
      return afterIntro(contextSafe(() => gsap.fromTo(ref.current, { y: 28, autoAlpha: 0 }, { ...vars, y: 0, autoAlpha: 1 })))
    },
    { scope: ref },
  )
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/**
 * Full-viewport hero whose media (and overlaid content) shrinks into an inset,
 * rounded card as the visitor scrolls past it.
 */
export function ShrinkHero({ className = '', media, children }) {
  const ref = useRef(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const card = ref.current.querySelector('[data-card]')
      const inner = ref.current.querySelector('[data-media]')
      const inset = window.innerWidth < 640 ? '0.75rem' : '2.5rem'
      gsap
        .timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
        .fromTo(
          card,
          { clipPath: 'inset(0rem 0rem 0rem 0rem round 0rem)' },
          { clipPath: `inset(${inset} ${inset} ${inset} ${inset} round 1.5rem)`, ease: 'none' },
          0,
        )
        .fromTo(inner, { scale: 1 }, { scale: 1.12, ease: 'none' }, 0)
    },
    { scope: ref },
  )
  return (
    <section ref={ref} className={`relative h-[100svh] w-full ${className}`}>
      <div data-card className="absolute inset-0 overflow-hidden bg-midnight will-change-[clip-path]">
        <div data-media className="absolute inset-0">
          {media}
        </div>
        {children}
      </div>
    </section>
  )
}

/**
 * Full-width rounded image cards that stick in turn; each card scales back and
 * dims as the next one slides over it.
 */
export function StackCards({ items, renderCard, className = '' }) {
  const ref = useRef(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const cards = gsap.utils.toArray('[data-stack-card]', ref.current)
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        gsap.to(card.querySelector('[data-stack-inner]'), {
          scale: 0.92,
          filter: 'brightness(0.55)',
          ease: 'none',
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 12%', scrub: true },
        })
      })
    },
    { scope: ref },
  )
  return (
    <div ref={ref} className={className}>
      {items.map((item, i) => (
        <div
          key={i}
          data-stack-card
          className="sticky mb-[8vh] last:mb-0"
          style={{ top: `calc(10vh + ${i * 14}px)` }}
        >
          <div data-stack-inner className="origin-top will-change-transform">
            {renderCard(item, i)}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Image in a rounded frame: unveils once on entry, then drifts gently against the scroll. */
export function ParallaxImage({ src, alt = '', className = '', imgClassName = '', strength = 7, priority = false }) {
  const ref = useRef(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const img = ref.current.querySelector('img')
      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(10% 5% 0% 5%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
        },
      )
      gsap.fromTo(
        img,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    },
    { scope: ref },
  )
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl bg-pearl-soft ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`absolute left-0 top-[-10%] h-[120%] w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}

/** Vertical rule that draws itself as its container scrolls through the viewport. */
export function DrawLine({ className = '' }) {
  const ref = useRef(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        ref.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: ref.current.parentElement, start: 'top 70%', end: 'bottom 70%', scrub: true },
        },
      )
    },
    { scope: ref },
  )
  return <span ref={ref} aria-hidden="true" className={`origin-top ${className}`} />
}
