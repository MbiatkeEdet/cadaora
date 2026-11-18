import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import ContourArt from '../../components/ContourArt.jsx'
import { smooth, useSmoothScroll } from '../../lib/motion.js'

const links = [
  { to: '/venue-gypsy', label: 'Home', end: true },
  { to: '/venue-gypsy/venues', label: 'Discover Venues' },
  { to: '/venue-gypsy/destinations', label: 'Destinations' },
  { to: '/venue-gypsy/journal', label: 'Journal' },
  { to: '/venue-gypsy/about', label: 'About' },
  { to: '/venue-gypsy/contact', label: 'Contact' },
]

export function GypsyWordmark({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-[1.35rem] italic leading-none ${className}`}>
      <span className="inline-block h-2 w-2 rounded-full bg-deep-blue" aria-hidden="true" />
      The Venue Gypsy
    </span>
  )
}

export default function GypsyLayout() {
  useSmoothScroll()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const toggleRef = useRef(null)
  const firstLinkRef = useRef(null)

  // solid once past the top; tucked away while scrolling down, back on the way up
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 160)
        lastY = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // menu open: freeze the page, move focus in, close on Escape, hand focus back afterwards
  useEffect(() => {
    if (!open) return undefined
    const toggle = toggleRef.current
    document.body.style.overflow = 'hidden'
    smooth.lenis?.stop()
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 350)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      smooth.lenis?.start()
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  const { pathname } = useLocation()
  // journal articles open on linen, not on a dark photo, so the header starts dark there
  const lightTop = /^\/venue-gypsy\/journal\/[^/]+$/.test(pathname)
  const close = () => setOpen(false)
  const solid = scrolled && !open
  const tone = open || scrolled || lightTop ? 'text-coffee' : 'text-white'

  return (
    <div className="brand-gypsy min-h-screen bg-linen-deep">
      <header
        className={`fixed inset-x-0 top-0 transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'z-[70]' : 'z-50'
        } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'} ${
          solid ? 'bg-linen/92 shadow-[0_1px_0_0_var(--color-linen-line)] backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto grid max-w-[96rem] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-10 ${tone}`}>
          <div>
            <Link
              to="/venue-gypsy/contact"
              onClick={close}
              className="eyebrow inline-block border-b border-current/40 pb-0.5 transition-colors hover:border-sun-orange hover:text-sun-orange"
            >
              Enquire
            </Link>
          </div>

          <Link to="/venue-gypsy" onClick={close} aria-label="The Venue Gypsy home">
            <GypsyWordmark className="text-[1.15rem] sm:text-[1.35rem]" />
          </Link>

          <div className="flex justify-end">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="gypsy-menu"
              className="group relative flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`absolute h-px w-8 bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? 'rotate-45' : '-translate-y-[4px] group-hover:-translate-y-[5px]'
                }`}
              />
              <span
                className={`absolute h-px w-8 bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? '-rotate-45' : 'translate-y-[4px] group-hover:translate-y-[5px]'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="gypsy-menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-linen text-coffee transition-[clip-path,visibility] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
      >
        <ContourArt seed={31} color="#088dac" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" lines={12} />
        <nav className="relative flex flex-1 flex-col items-center justify-center px-6 pt-20" aria-label="Primary">
          <ul className="flex flex-col items-center gap-1 sm:gap-2">
            {links.map((l, i) => (
              <li key={l.to} className="overflow-hidden">
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={l.to}
                  end={l.end}
                  tabIndex={open ? 0 : -1}
                  onClick={close}
                  className={({ isActive }) =>
                    `group flex items-baseline gap-3 py-1 transition-[transform,color] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-5 ${
                      open ? 'translate-y-0' : 'translate-y-[110%]'
                    } ${isActive ? 'text-deep-blue' : 'text-coffee hover:text-sun-orange'}`
                  }
                  style={{ transitionDelay: open ? `${180 + i * 70}ms` : '0ms' }}
                >
                  <span className="font-display text-sm text-coffee/40 sm:text-base">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[clamp(2.4rem,7.4vw,5.6rem)] italic leading-[1.05] tracking-tight">{l.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p
          className={`relative px-6 pb-10 text-center font-display text-lg italic text-coffee/60 transition-opacity duration-700 ${
            open ? 'opacity-100 delay-700' : 'opacity-0'
          }`}
        >
          Discovering places worth celebrating in.
        </p>
      </div>

      {/* the page lifts away to reveal the footer beneath it */}
      <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-linen shadow-[0_30px_60px_-30px_rgba(90,62,41,0.3)]">
        <Outlet />
      </main>

      <GypsyFooter />
    </div>
  )
}

function GypsyFooter() {
  return (
    <footer className="relative z-0 bg-linen-deep lg:sticky lg:bottom-0">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <GypsyWordmark className="text-coffee" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-coffee/70">
              Discovering places worth celebrating in.
              <br />A global venue discovery and destination platform.
            </p>
          </div>
          <div>
            <p className="eyebrow text-coffee/40">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-coffee/75">
              {links.slice(1).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-deep-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-coffee/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-coffee/75">
              <li>
                <Link to="/cadaora" className="hover:text-deep-blue">
                  Cadaora Exquisite Events
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-deep-blue">
                  Back to the entrance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12 text-coffee/40" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-coffee/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} The Venue Gypsy. All rights reserved.</p>
          <p>Built by Lemtech Hub · 08036265605</p>
        </div>
      </div>
    </footer>
  )
}
