import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

const links = [
  { to: '/cadora', label: 'Home', end: true },
  { to: '/cadora/weddings', label: 'Weddings' },
  { to: '/cadora/parties', label: 'Parties' },
  { to: '/cadora/destinations', label: 'Destinations' },
  { to: '/cadora/about', label: 'About' },
  { to: '/cadora/media', label: 'Media' },
]

export default function CadoraLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink text-ivory">
      <button
        className={`fixed right-6 top-6 z-[60] p-4 transition-colors ${open ? 'text-ink hover:text-wine' : 'text-gold-soft hover:text-gold'}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-parchment px-6 text-ink transition-all duration-700 ease-out ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'
        }`}
        aria-hidden={!open}
      >
          <nav className="flex w-full max-w-md flex-col items-center gap-5 text-center">
            {links.map((l, index) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `font-display text-3xl italic transition-all duration-500 sm:text-4xl ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } ${isActive ? 'text-wine' : 'text-ink/70 hover:text-ink'}`
                }
                style={{ transitionDelay: open ? `${index * 60 + 100}ms` : '0ms' }}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/cadora/enquire"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`mt-4 border-t border-ink/20 px-10 pt-5 eyebrow text-sm text-wine transition-all duration-500 hover:text-wine-soft ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? '460ms' : '0ms' }}
            >
              Enquire
            </NavLink>
          </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <CadoraFooter />
    </div>
  )
}

function CadoraFooter() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl italic text-gold-soft">Cadora Events</p>
          </div>
          <div>
            <p className="eyebrow text-ivory/40">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><Link to="/cadora/weddings" className="hover:text-gold">Weddings</Link></li>
              <li><Link to="/cadora/parties" className="hover:text-gold">Parties</Link></li>
              <li><Link to="/cadora/destinations" className="hover:text-gold">Destinations</Link></li>
              <li><Link to="/cadora/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/cadora/media" className="hover:text-gold">Media</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-ivory/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><Link to="/gypsy" className="hover:text-jade-soft">Venue Gypsy — the atlas</Link></li>
              <li><Link to="/" className="hover:text-ivory">Back to the entrance</Link></li>
              <li><Link to="/cadora/enquire" className="hover:text-gold">Start an enquiry</Link></li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12 text-ivory/40" />
        <p className="mt-6 text-xs text-ivory/35">Built By Lemtech Hub</p>
        <p className="mt-2 text-xs text-ivory/35">08036265605</p>

      </div>
    </footer>
  )
}
