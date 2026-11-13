import { useEffect, useState } from 'react'
import CadaoraEmblem, { CadaoraWordmark } from './CadaoraEmblem.jsx'

// Plays on every full page load (including refresh). Module state resets on reload,
// so only in-app navigation back to the entrance skips it.
let playedThisLoad = false

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Pearl intro panel: the official emblem fans open blade by blade, the wordmark
 * wipes in, then the panel slides up and unmounts. Plays on every page load.
 */
export default function IntroLoader() {
  const [phase, setPhase] = useState(() => (playedThisLoad ? 'done' : 'draw'))

  useEffect(() => {
    if (phase !== 'draw') return undefined

    const leaveAt = reducedMotion() ? 600 : 2700
    const t = window.setTimeout(() => setPhase('leave'), leaveAt)
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'done') return null

  const leaving = phase === 'leave'

  return (
    <div
      className={`brand-cadaora fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pearl px-8 transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? '-translate-y-full' : 'translate-y-0'
      }`}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && leaving) {
          playedThisLoad = true
          window.__cadaoraIntroDone = true
          window.dispatchEvent(new Event('cadaora:intro-done'))
          document.body.style.overflow = ''
          setPhase('done')
        }
      }}
      aria-hidden="true"
      data-intro-loader
    >
      <div
        className={`transition-all duration-700 ease-out ${
          leaving ? 'scale-[0.92] opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-7 text-midnight sm:flex-row sm:gap-10">
          <CadaoraEmblem size={112} animate className="sm:hidden" />
          <CadaoraEmblem size={150} animate className="hidden sm:block" />
          <CadaoraWordmark size={58} animate delay={1050} className="sm:hidden" />
          <CadaoraWordmark size="xl" animate delay={1050} className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
