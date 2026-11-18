import { useRef } from 'react'
import { afterIntro, gsap, prefersReducedMotion, SplitText, useGSAP } from '../lib/motion.js'

/**
 * Scroll trigger for a reveal: plays as the element comes up into view and
 * plays backwards (a little quicker) when you scroll back up past it, so it
 * reveals again on the next pass down.
 */
function revealOnScroll(trigger, start = 'top 90%') {
  return {
    trigger,
    start,
    toggleActions: 'none none none none',
    onEnter: (self) => self.animation.timeScale(1).play(),
    onLeaveBack: (self) => self.animation.timeScale(1.8).reverse(),
  }
}

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
          scrollTrigger: trigger ? revealOnScroll(el) : undefined,
        })

      if (!waitForIntro) {
        SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true, onSplit: (self) => animate(self.lines, true) })
        return undefined
      }

      gsap.set(el, { autoAlpha: 0 })
      let cancelled = false
      const play = contextSafe(() => {
        if (cancelled) return
        const split = SplitText.create(el, { type: 'lines', mask: 'lines' })
        gsap.set(el, { autoAlpha: 1 })
        animate(split.lines, false)
      })
      // split only once the web fonts are in, so the line breaks are the real ones
      const offIntro = afterIntro(() => document.fonts.ready.then(play))
      return () => {
        cancelled = true
        offIntro()
      }
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/** Fades/rises a block as it comes into view, and back out when you scroll up past it. */
export function FadeUp({ as: Tag = 'div', className = '', children, delay = 0, waitForIntro = false, ...rest }) {
  const ref = useRef(null)
  useGSAP(
    (_, contextSafe) => {
      if (prefersReducedMotion()) return undefined
      const vars = { y: 28, autoAlpha: 0, duration: 1, ease: 'power3.out', delay: delay / 1000 }
      if (!waitForIntro) {
        gsap.from(ref.current, { ...vars, scrollTrigger: revealOnScroll(ref.current, 'top 92%') })
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
      <div data-card className="absolute inset-0 overflow-hidden bg-black will-change-[clip-path]">
        <div data-media className="absolute inset-0">
          {media}
        </div>
        {children}
      </div>
    </section>
  )
}

const STACK_TOP_VH = 10
const STACK_STEP_PX = 14

/**
 * Full-width rounded image cards that stick in turn. As each card slides in it
 * brightens into place while the one beneath recedes, softly dims and blurs out
 * of focus (sharpening again when uncovered) — animated only with transform and
 * opacity (GPU-friendly), smoothed behind the scroll rather than locked to every wheel tick.
 */
export function StackCards({ items, renderCard, getImage = (item) => item.image, className = '' }) {
  const ref = useRef(null)
  const still = prefersReducedMotion()
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const cards = gsap.utils.toArray('[data-stack-card]', ref.current)
      cards.forEach((card, i) => {
        const next = cards[i + 1]
        if (!next) return
        const settle = () => `top ${(window.innerHeight * STACK_TOP_VH) / 100 + (i + 1) * STACK_STEP_PX}px`
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: next, start: 'top bottom', end: settle, scrub: 0.9, invalidateOnRefresh: true },
          })
          // outgoing card recedes, dims a little and slips out of focus (crossfade to its pre-blurred twin)
          .fromTo(card.querySelector('[data-stack-inner]'), { scale: 1 }, { scale: 0.95, force3D: true }, 0)
          .fromTo(card.querySelector('[data-stack-blur]'), { opacity: 0 }, { opacity: 1 }, 0)
          .fromTo(card.querySelector('[data-stack-shade]'), { opacity: 0 }, { opacity: 0.28 }, 0)
          // incoming card arrives slightly dim and brightens as it settles
          .fromTo(next.querySelector('[data-stack-shade]'), { opacity: 0.3 }, { opacity: 0 }, 0)
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
          style={{ top: `calc(${STACK_TOP_VH}vh + ${i * STACK_STEP_PX}px)` }}
        >
          <div data-stack-inner className="relative origin-top will-change-transform">
            {renderCard(item, i)}
            {!still && getImage(item) && (
              // drawn blurred once; scrolling only fades it in and out
              <div
                data-stack-blur
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem] opacity-0 will-change-[opacity]"
              >
                <img
                  src={getImage(item)}
                  alt=""
                  decoding="async"
                  className="h-full w-full scale-[1.08] object-cover blur-[18px]"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            )}
            <div
              data-stack-shade
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-black opacity-0 will-change-[opacity]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/** Image in a rounded frame: unveils on entry (re-veils when you scroll back up), and drifts gently against the scroll. */
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
          scrollTrigger: revealOnScroll(ref.current, 'top 92%'),
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
    <div ref={ref} className={`relative overflow-hidden rounded-2xl bg-black/5 ${className}`}>
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
