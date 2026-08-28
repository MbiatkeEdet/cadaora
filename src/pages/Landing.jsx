// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Landing() {
//   const [hover, setHover] = useState(null) // 'cadora' | 'gypsy' | null

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-ink text-ivory">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src="/media/hero.mp4"
//         poster="/media/hero-poster.jpg"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//       <div className="absolute inset-0 bg-ink/55" />
//       <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" />

//       {/* Color spotlight reacting to hover */}
//       <div
//         className="pointer-events-none absolute inset-y-0 left-0 w-1/2 transition-opacity duration-700"
//         style={{
//           background: 'radial-gradient(circle at 30% 50%, rgba(201,162,78,0.35), transparent 60%)',
//           opacity: hover === 'cadora' ? 1 : hover === 'gypsy' ? 0 : 0.35,
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-y-0 right-0 w-1/2 transition-opacity duration-700"
//         style={{
//           background: 'radial-gradient(circle at 70% 50%, rgba(76,125,110,0.4), transparent 60%)',
//           opacity: hover === 'gypsy' ? 1 : hover === 'cadora' ? 0 : 0.35,
//         }}
//       />

//       {/* Top mark */}
//       <header className="relative z-10 flex items-center justify-center pt-10">
//         <p className="eyebrow text-ivory/70">Two houses · One standard of craft</p>
//       </header>

//       <div className="relative z-10 mx-auto flex h-[calc(100%-6rem)] max-w-7xl flex-col items-center justify-center px-6 text-center">
//         <h1 className="font-display text-4xl italic leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
//           Where the occasion
//           <br className="hidden sm:block" /> meets its setting
//         </h1>
//         <p className="mt-5 max-w-xl text-sm text-ivory/70 sm:text-base">
//           Choose your door: bespoke celebrations, or the exquisite corners of the world built to hold them.
//         </p>
//       </div>

//       {/* Split doors */}
//       <div className="relative z-10 mx-auto grid h-[42vh] max-w-6xl grid-cols-1 gap-4 px-6 pb-10 sm:h-[38vh] sm:grid-cols-2 sm:gap-0">
//         <Link
//           to="/cadora"
//           onMouseEnter={() => setHover('cadora')}
//           onMouseLeave={() => setHover(null)}
//           className="group relative flex flex-col items-center justify-center gap-4 border border-ivory/15 p-8 backdrop-blur-[2px] transition-colors duration-500 hover:border-gold/60 sm:border-r-0"
//         >
//           <span className="inline-block -rotate-1 bg-ivory px-5 py-2 font-display text-lg italic text-ink shadow-lg transition-transform duration-500 group-hover:rotate-0">
//             Cadora Events
//           </span>
//           <p className="eyebrow text-gold-soft">Weddings · Parties · Destinations</p>
//           <span className="mt-2 flex items-center gap-2 text-xs text-ivory/60 transition-all duration-500 group-hover:gap-3 group-hover:text-ivory">
//             Enter the house <ArrowRight />
//           </span>
//         </Link>

//         <Link
//           to="/gypsy"
//           onMouseEnter={() => setHover('gypsy')}
//           onMouseLeave={() => setHover(null)}
//           className="group relative flex flex-col items-center justify-center gap-4 border border-ivory/15 border-t-0 p-8 backdrop-blur-[2px] transition-colors duration-500 hover:border-jade-soft/70 sm:border-t sm:border-l-0"
//         >
//           <span className="inline-block rotate-1 bg-ivory px-5 py-2 font-display text-lg italic text-ink shadow-lg transition-transform duration-500 group-hover:rotate-0">
//             Venue Gypsy
//           </span>
//           <p className="eyebrow text-sand-soft">An Atlas of Exquisite Destinations</p>
//           <span className="mt-2 flex items-center gap-2 text-xs text-ivory/60 transition-all duration-500 group-hover:gap-3 group-hover:text-ivory">
//             Explore the atlas <ArrowRight />
//           </span>
//         </Link>

//         {/* center seam, desktop only */}
//         <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block" />
//       </div>
//     </div>
//   )
// }

// function ArrowRight() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  const [hover, setHover] = useState(null)
  const [introVisible, setIntroVisible] = useState(true)
  const [introLeaving, setIntroLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIntroLeaving(true), 2200)
    const removeTimer = window.setTimeout(() => setIntroVisible(false), 3400)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ink text-ivory">
      {introVisible && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-parchment px-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            introLeaving ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
          aria-hidden="true"
        >
          <img
            src="/media/gallery/cadaora%20logo.jpg"
            alt="Cadora Events"
            className={`w-full max-w-sm object-contain mix-blend-multiply transition-all duration-[1200ms] ease-out ${
              introLeaving ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
        </div>
      )}

      {/* Background video */}
      <video
        className="fixed inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-ink/55" />

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" />

      {/* Color spotlight — Cadora */}
      <div
        className="pointer-events-none fixed inset-y-0 left-0 w-1/2 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(201,162,78,0.35), transparent 60%)',
          opacity:
            hover === 'cadora'
              ? 1
              : hover === 'gypsy'
                ? 0
                : 0.35,
        }}
      />

      {/* Color spotlight — Gypsy */}
      <div
        className="pointer-events-none fixed inset-y-0 right-0 w-1/2 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, rgba(76,125,110,0.4), transparent 60%)',
          opacity:
            hover === 'gypsy'
              ? 1
              : hover === 'cadora'
                ? 0
                : 0.35,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top mark */}
        <header className="flex items-center justify-center px-6 pt-8 sm:pt-10">
          <p className="eyebrow text-center text-xs text-ivory/70 sm:text-sm">
            Two houses · One standard of craft
          </p>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col justify-center px-6 py-14 text-center sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-light text-4xl text-uppercase leading-[0.98] tracking-[-0.04em] text-ivory sm:text-6xl md:text-7xl lg:text-7xl text-uppercase">
              Where the occasion
              <br className="hidden sm:block" />
              meets its setting
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              Choose your door: bespoke celebrations, or the exquisite
              corners of the world built to hold them.
            </p>
          </div>
        </main>

        {/* Split doors */}
        <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 sm:pb-10">
          <div className="grid min-h-[360px] grid-cols-1 gap-4 sm:min-h-[300px] sm:grid-cols-2 sm:gap-0">
            {/* Cadora */}
            <Link
              to="/cadora"
              onMouseEnter={() => setHover('cadora')}
              onMouseLeave={() => setHover(null)}
              onTouchStart={() => setHover('cadora')}
              className="group relative flex min-h-[220px] flex-col items-center justify-center gap-4 border border-ivory/15 p-8 backdrop-blur-[2px] transition-all duration-500 hover:border-gold/60 hover:bg-ink/10 sm:min-h-0 sm:border-r-0"
              aria-label="Enter Cadora Events"
            >
              <span className="inline-block -rotate-1 bg-ivory px-5 py-2 font-display text-lg italic text-ink shadow-lg transition-transform duration-500 group-hover:rotate-0">
                Cadora Events
              </span>

              <p className="eyebrow text-gold-soft">
                Weddings · Parties · Destinations
              </p>

              <span className="mt-2 flex items-center gap-2 text-xs text-ivory/60 transition-all duration-500 group-hover:gap-3 group-hover:text-ivory">
                Enter the house
                <ArrowRight />
              </span>
            </Link>

            {/* Venue Gypsy */}
            <Link
              to="/gypsy"
              onMouseEnter={() => setHover('gypsy')}
              onMouseLeave={() => setHover(null)}
              onTouchStart={() => setHover('gypsy')}
              className="group relative flex min-h-[220px] flex-col items-center justify-center gap-4 border border-ivory/15 p-8 backdrop-blur-[2px] transition-all duration-500 hover:border-jade-soft/70 hover:bg-ink/10 sm:min-h-0 sm:border-l-0"
              aria-label="Explore Venue Gypsy"
            >
              <span className="inline-block rotate-1 bg-ivory px-5 py-2 font-display text-lg italic text-ink shadow-lg transition-transform duration-500 group-hover:rotate-0">
                Venue Gypsy
              </span>

              <p className="eyebrow text-sand-soft">
                An Atlas of Exquisite Destinations
              </p>

              <span className="mt-2 flex items-center gap-2 text-xs text-ivory/60 transition-all duration-500 group-hover:gap-3 group-hover:text-ivory">
                Explore the atlas
                <ArrowRight />
              </span>
            </Link>

            {/* Center seam — desktop only */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:block" />
          </div>
        </section>
      </div>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}