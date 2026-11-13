import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export { gsap, ScrollTrigger, SplitText, useGSAP }

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// The active Lenis instance (null when smooth scrolling is off), shared with
// ScrollToTop and the header so they can scroll / read direction through it.
export const smooth = { lenis: null }

/** Inertial smooth scrolling (Lenis) driven by the GSAP ticker, for as long as the caller is mounted. */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    smooth.lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    // hold the page still while the intro panel covers it
    lenis.stop()
    const offIntro = afterIntro(() => lenis.start())
    return () => {
      offIntro()
      gsap.ticker.remove(tick)
      lenis.destroy()
      smooth.lenis = null
    }
  }, [])
}

/** Resolves once the Cadaora intro loader has left (immediately if it already has, or isn't showing). */
export function afterIntro(cb) {
  if (typeof window === 'undefined') return () => {}
  if (window.__cadaoraIntroDone || !document.querySelector('[data-intro-loader]')) {
    cb()
    return () => {}
  }
  const on = () => cb()
  window.addEventListener('cadaora:intro-done', on, { once: true })
  return () => window.removeEventListener('cadaora:intro-done', on)
}
