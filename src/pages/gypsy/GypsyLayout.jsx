import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link } from "react-router-dom"

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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const tone = solid ? 'text-coffee' : 'text-white'

  return (
    <div className="brand-gypsy min-h-screen">
      <header
        className={`fixed inset-x-0 top-0 transition-colors duration-500 ${open ? 'z-[70]' : 'z-50'} ${
          scrolled && !open ? 'bg-linen/92 shadow-[0_1px_0_0_var(--color-linen-line)] backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/venue-gypsy" className={tone} aria-label="The Venue Gypsy home">
            <GypsyWordmark />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `eyebrow border-b pb-1 transition-colors ${
                    isActive
                      ? `border-sun-orange ${solid ? 'text-coffee' : 'text-white'}`
                      : `border-transparent ${solid ? 'text-coffee/60 hover:text-coffee' : 'text-white/70 hover:text-white'}`
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/venue-gypsy/contact"
              className="eyebrow rounded-full bg-sun-orange px-5 py-2.5 text-coffee transition hover:brightness-95"
            >
              Enquire
            </Link>
          </nav>

          <button
            type="button"
            className={`relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden ${open ? 'text-coffee' : tone}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-linen px-6 text-coffee transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex w-full max-w-md flex-col items-center gap-5 text-center" aria-label="Mobile">
          {links.map((l, index) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-3xl italic transition-all duration-500 sm:text-4xl ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${isActive ? 'text-deep-blue' : 'text-coffee/70 hover:text-coffee'}`
              }
              style={{ transitionDelay: open ? `${index * 60 + 100}ms` : '0ms' }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/venue-gypsy/contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className={`eyebrow mt-4 rounded-full bg-sun-orange px-8 py-3.5 text-coffee transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: open ? '500ms' : '0ms' }}
          >
            Enquire
          </Link>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <GypsyFooter />
    </div>
  )
}

function GypsyFooter() {
  return (
    <footer className="border-t border-linen-line bg-linen-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
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
