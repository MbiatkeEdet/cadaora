import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

export default function GypsyLayout() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ink text-ivory">
      <nav
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled ? 'border-ink-line bg-ink/90 backdrop-blur' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/gypsy" className="font-display text-xl italic tracking-wide text-sand-soft">
            Venue <span className="text-ivory">Gypsy</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/gypsy"
              end
              className={({ isActive }) =>
                `eyebrow text-[0.65rem] ${isActive ? 'text-jade-soft' : 'text-ivory/60 hover:text-ivory'}`
              }
            >
              The Atlas
            </NavLink>
            <a href="#philosophy" className="eyebrow text-[0.65rem] text-ivory/60 hover:text-ivory">
              Philosophy
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/cadora/enquire"
              className="rounded-none border border-jade-soft/60 px-4 py-2 eyebrow text-[0.65rem] text-sand-soft transition-colors hover:bg-jade-soft hover:text-ink"
            >
              Plan with Cadora
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <GypsyFooter />
    </div>
  )
}

function GypsyFooter() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl italic text-sand-soft">Venue Gypsy</p>
            <p className="mt-3 max-w-xs text-sm text-ivory/60">
              A running atlas of the world's most quietly extraordinary places to gather — scouted, vetted, and
              held to one standard: nowhere else will do.
            </p>
          </div>
          <div>
            <p className="eyebrow text-ivory/40">The Atlas</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><Link to="/gypsy" className="hover:text-jade-soft">All destinations</Link></li>
              <li><a href="/gypsy#philosophy" className="hover:text-jade-soft">Our philosophy</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-ivory/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><Link to="/cadora" className="hover:text-gold-soft">Cadora Events — the house</Link></li>
              <li><Link to="/" className="hover:text-ivory">Back to the entrance</Link></li>
              <li><Link to="/cadora/enquire" className="hover:text-gold-soft">Start an enquiry</Link></li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12 text-ivory/40" />
        <p className="mt-6 text-xs text-ivory/35">Venue Gypsy — a house of Cadora &amp; Gypsy Collective.</p>
      </div>
    </footer>
  )
}
