import { useState } from 'react'
import { Link } from 'react-router-dom'
import IntroLoader from '../components/IntroLoader.jsx'
import { CadaoraLogo } from '../components/CadaoraEmblem.jsx'
import ContourArt from '../components/ContourArt.jsx'
import Seo from '../components/Seo.jsx'
import { Arrow } from '../components/Button.jsx'

export default function Landing() {
  const [hover, setHover] = useState(null)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Seo
        title="Cadaora Exquisite Events & The Venue Gypsy"
        description="Cadaora plans, designs and delivers destination events. The Venue Gypsy discovers the places worth celebrating in."
      />
      <IntroLoader />

      {/* Hero video */}
      <video
        className="fixed inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 bg-linear-to-t from-black via-black/20 to-black/60" />

      {/* Spotlights that answer the two doors */}
      <div
        className="pointer-events-none fixed inset-y-0 left-0 w-1/2 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle at 30% 60%, rgba(81,170,161,0.38), transparent 60%)',
          opacity: hover === 'cadaora' ? 1 : hover === 'gypsy' ? 0 : 0.3,
        }}
      />
      <div
        className="pointer-events-none fixed inset-y-0 right-0 w-1/2 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle at 70% 60%, rgba(242,140,64,0.34), transparent 60%)',
          opacity: hover === 'gypsy' ? 1 : hover === 'cadaora' ? 0 : 0.3,
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-center px-6 pt-8 sm:pt-10">
          <p className="eyebrow text-center text-white/70">Cadaora Exquisite Events · The Venue Gypsy</p>
        </header>

        <main className="flex flex-1 flex-col justify-center px-6 py-12 text-center sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-cad-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Two houses. One perspective
              <br className="hidden sm:block" /> on remarkable experiences.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Cadaora plans, designs and delivers destination events. The Venue Gypsy discovers the places worth
              celebrating in.
            </p>
          </div>
        </main>

        <section className="mx-auto w-full max-w-6xl px-6 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Door
              to="/cadaora"
              brand="cadaora"
              onHover={setHover}
              label="Enter Cadaora"
              line="Destination Events & Experiential Design"
              panel="bg-white text-black"
              ring="hover:border-aqua"
            >
              <CadaoraLogo height={50} className="text-midnight" />
            </Door>

            <Door
              to="/venue-gypsy"
              brand="gypsy"
              onHover={setHover}
              label="Explore The Venue Gypsy"
              line="Discovering places worth celebrating in"
              panel="bg-linen text-coffee"
              ring="hover:border-sun-orange"
            >
              <ContourArt seed={7} color="#088dac" className="absolute inset-0 h-full w-full opacity-40" />
              <span className="relative font-gyp-display text-[1.7rem] italic leading-none tracking-tight">
                The Venue Gypsy
              </span>
            </Door>
          </div>
        </section>
      </div>
    </div>
  )
}

function Door({ to, brand, onHover, label, line, panel, ring, children }) {
  return (
    <Link
      to={to}
      onMouseEnter={() => onHover(brand)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(brand)}
      onBlur={() => onHover(null)}
      className={`group flex flex-col items-center gap-5 border border-white/15 bg-black/20 p-6 text-center backdrop-blur-[3px] transition-all duration-500 hover:bg-black/30 sm:p-8 ${ring}`}
      aria-label={label}
    >
      <span
        className={`relative flex h-28 w-full items-center justify-center gap-4 overflow-hidden rounded-sm ${panel}`}
      >
        {children}
      </span>
      <span className="eyebrow text-white/70">{line}</span>
      <span className="flex items-center gap-2 text-xs text-white/70 transition-all duration-500 group-hover:gap-3 group-hover:text-white">
        {label}
        <Arrow />
      </span>
    </Link>
  )
}
