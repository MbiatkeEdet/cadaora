import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import CadaoraEmblem, { CadaoraLogo, CadaoraWordmark } from '../../components/CadaoraEmblem.jsx'
import IntroLoader from '../../components/IntroLoader.jsx'
import { smooth, useSmoothScroll } from '../../lib/motion.js'

const links = [
  { to: '/cadaora', label: 'Home', end: true },
  { to: '/cadaora/about', label: 'About' },
  { to: '/cadaora/services', label: 'Services' },
  { to: '/cadaora/approach', label: 'Our Approach' },
  { to: '/cadaora/work', label: 'Our Work' },
  { to: '/cadaora/contact', label: 'Contact' },
]

export default function CadaoraLayout() {
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

  const close = () => setOpen(false)
  const solid = scrolled && !open
  const tone = open || scrolled ? 'text-midnight' : 'text-white'

  return (
    <div className="brand-cadaora min-h-screen bg-pearl-soft">
      <IntroLoader />

      <header
        className={`fixed inset-x-0 top-0 transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'z-[70]' : 'z-50'
        } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'} ${
          solid ? 'bg-pearl/90 shadow-[0_1px_0_0_var(--color-pearl-line)] backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto grid max-w-[96rem] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-10 ${tone}`}>
          <div>
            <Link
              to="/cadaora/contact"
              onClick={close}
              className="eyebrow inline-block border-b border-current/40 pb-0.5 transition-colors hover:border-aqua hover:text-aqua"
            >
              Enquire
            </Link>
          </div>

          <Link to="/cadaora" onClick={close} className="flex items-center gap-3" aria-label="Cadaora Exquisite Events home">
            <CadaoraEmblem size={28} />
            <CadaoraWordmark size={18} sub={false} className="hidden sm:block" />
          </Link>

          <div className="flex justify-end">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="cadaora-menu"
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
        id="cadaora-menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-pearl text-midnight transition-[clip-path,visibility] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!open}
      >
        <CadaoraEmblem
          size={520}
          className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 text-midnight opacity-[0.04] md:block"
        />
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
                    } ${isActive ? 'text-aqua-deep' : 'text-midnight hover:text-aqua-deep'}`
                  }
                  style={{ transitionDelay: open ? `${180 + i * 70}ms` : '0ms' }}
                >
                  <span className="font-display text-sm text-midnight/40 sm:text-base">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[clamp(2.2rem,7.2vw,5.4rem)] uppercase leading-[1.02] tracking-tight">
                    {l.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p
          className={`eyebrow relative px-6 pb-10 text-center leading-relaxed text-midnight/50 transition-opacity duration-700 ${
            open ? 'opacity-100 delay-700' : 'opacity-0'
          }`}
        >
          Lagos, Nigeria · Working Across Destinations
        </p>
      </div>

      {/* the page lifts away to reveal the footer beneath it */}
      <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-pearl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
        <Outlet />
      </main>

      <CadaoraFooter />
    </div>
  )
}

function CadaoraFooter() {
  return (
    <footer className="relative z-0 bg-pearl-soft lg:sticky lg:bottom-0">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <CadaoraLogo height={52} className="text-midnight" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-midnight/60">
              Cadaora Exquisite Events
              <br />
              Destination Events &amp; Experiential Design
              <br />
              Lagos, Nigeria · Working Across Destinations
            </p>
          </div>
          <div>
            <p className="eyebrow text-midnight/40">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-midnight/70">
              {links.slice(1).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-aqua-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-midnight/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-midnight/70">
              <li>
                <Link to="/venue-gypsy" className="hover:text-deep-blue">
                  The Venue Gypsy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-aqua-deep">
                  Back to the entrance
                </Link>
              </li>
              <li>
                <Link to="/cadaora/contact" className="hover:text-aqua-deep">
                  Enquire about your event
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12 text-midnight/40" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-midnight/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cadaora Exquisite Events. All rights reserved.</p>
          <p>Built by Lemtech Hub · 08036265605</p>
        </div>
      </div>
    </footer>
  )
}
