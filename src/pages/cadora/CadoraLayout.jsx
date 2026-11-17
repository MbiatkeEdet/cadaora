import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const links = [
  { to: "/cadora", label: "Home", end: true },
   { to: "/cadora/about", label: "About" },
    { to: "/cadora/services", label: "Services" },
  { to: "/cadora/approach", label: "Our Approach" },
  { to: "/cadora/work", label: "Our Work" },
  { to: "/cadora/contact", label: "Contact" },

];

export default function CadoraLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-ivory">
      {!open && (
        <Link to="/cadora" aria-label="Cadaora Events home" className="absolute left-6 top-6 z-40 inline-flex shrink-0 items-center rounded-sm bg-white p-2">
          <img src="/media/gallery/cadaora-image.jpg" alt="Cadaora Events" className="w-24 object-contain invert mix-blend-multiply sm:w-32" />
        </Link>
      )}
      <button
        className={`fixed right-6 top-6 z-[60] p-4 transition-colors ${open ? "text-ink hover:text-wine" : "text-gold-soft hover:text-gold"}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-parchment px-6 text-ink transition-all duration-700 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-full opacity-0"
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
                `font-candara font-bold text-3xl transition-all duration-700 sm:text-6xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${isActive ? "text-wine" : "text-ink hover:text-ink"}`
              }
              style={{
                transitionDelay: open ? `${index * 60 + 100}ms` : "0ms",
              }}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/cadora/enquire"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className={`mt-4 border-t border-ink/20 px-10 pt-5 eyebrow text-3xl text-3xl transition-all duration-500 hover:text-wine-soft ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "460ms" : "0ms" }}
          >
            Enquire
          </NavLink>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      {/* <CadoraFooter /> */}
    </div>
  );
}

function CadoraFooter() {
  return (
    <footer className="border-t border-ink-line bg-[#A9C6E8]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            {/* <p className=" text-2xl candara font-bold text-white">
              Cadaora Events
            </p> */}
          </div>
          <div>
            <p className="eyebrow text-2xl text-white candara font-bold">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm  candara font-bold text-white">
              <li>
                <Link to="/cadora/weddings" className="hover:text-white">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/cadora/parties" className="hover:text-white">
                  Parties
                </Link>
              </li>
              <li>
                <Link to="/cadora/destinations" className="hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/cadora/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cadora/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/cadora/media" className="hover:text-white">
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-2xl text-white candara font-bold">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm  candara font-bold text-white">
              <li>
                <Link to="/gypsy" className="">
                  Venue Gypsy — the atlas
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  Back to the entrance
                </Link>
              </li>
              <li>
                <Link to="/cadora/enquire" className="hover:text-white">
                  Start an enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12 text-ivory/40" />

        <div className="mt-[120px] flex items-end justify-between gap-4">
          <Link to="/cadora" aria-label="Cadaora Events home" className="inline-flex shrink-0 items-center rounded-sm bg-white p-2">
            <img src="/media/gallery/cadaora-image.jpg" alt="Cadaora Events" className="w-24 object-contain invert mix-blend-multiply sm:w-32" />
          </Link>
          <div className="text-right text-xs text-ivory/35">
            <a
              href="https://lemtechweb.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" block transition-colors duration-300 hover:text-ivory"
            >
              Built by Lemtech Hub
            </a>

            <a
              href="tel:+2348036265605"
              className="transition-colors duration-300 hover:text-ivory"
            >
              +2348036265605
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
