import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger, smooth } from '../lib/motion.js'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (smooth.lenis) smooth.lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    // new page content: recompute scroll-trigger positions once layout settles
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(id)
  }, [pathname])
  return null
}
