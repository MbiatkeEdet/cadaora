// import { useEffect, useState } from "react";
// import { NavLink, Outlet, Link } from "react-router-dom";

// export default function GypsyLayout() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-ink text-ivory">
//       <nav
//         className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
//           scrolled
//             ? "border-ink-line bg-ink/90 backdrop-blur"
//             : "border-transparent bg-transparent"
//         }`}
//       >
//         <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-3 px-6 py-4 md:flex md:justify-between">
//           <Link to="/gypsy" aria-label="Venue Gypsy home" className="inline-flex shrink-0 items-center justify-self-start rounded-sm bg-white p-2">
//             <img src="/media/gallery/gypsy-logo2.jpg" alt="The Venue Gypsy" className="w-24 object-contain sm:w-32" />
//           </Link>
//           <Link
//             to="/gypsy"
//             className="justify-self-end font-display text-xl italic tracking-wide text-sand-soft"
//           >
//             Venue <span className="text-ivory">Gypsy</span>
//           </Link>

//           <div className="hidden items-center gap-8 md:flex">
//             <NavLink
//               to="/gypsy"
//               end
//               className={({ isActive }) =>
//                 `eyebrow text-[0.65rem] ${isActive ? "text-jade-soft" : "text-ivory/60 hover:text-ivory"}`
//               }
//             >
//               The Atlas
//             </NavLink>
//             <a
//               href="#philosophy"
//               className="eyebrow text-[0.65rem] text-ivory/60 hover:text-ivory"
//             >
//               Philosophy
//             </a>
//           </div>

//           <div className="col-span-2 flex justify-end">
//             <Link
//               to="/cadora/enquire"
//               className="rounded-none border border-jade-soft/60 px-4 py-2 eyebrow text-[0.65rem] text-sand-soft transition-colors hover:bg-jade-soft hover:text-ink"
//             >
//               Plan with Cadora
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <main>
//         <Outlet />
//       </main>

//       <GypsyFooter />
//     </div>
//   );
// }

// function GypsyFooter() {
//   return (
//     <footer className="border-t border-ink-line bg-ink-soft">
//       <div className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-10 sm:grid-cols-3">
//           <div>
//             <p className="font-display text-2xl italic text-sand-soft">
//               Venue Gypsy
//             </p>
//             <p className="mt-3 max-w-xs text-sm text-ivory/60">
//               A running atlas of the world's most quietly extraordinary places
//               to gather — scouted, vetted, and held to one standard: nowhere
//               else will do.
//             </p>
//           </div>
//           <div>
//             <p className="eyebrow text-ivory/40">The Atlas</p>
//             <ul className="mt-4 space-y-2 text-sm text-ivory/70">
//               <li>
//                 <Link to="/gypsy" className="hover:text-jade-soft">
//                   All destinations
//                 </Link>
//               </li>
//               <li>
//                 <a href="/gypsy#philosophy" className="hover:text-jade-soft">
//                   Our philosophy
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <p className="eyebrow text-ivory/40">Elsewhere</p>
//             <ul className="mt-4 space-y-2 text-sm text-ivory/70">
//               <li>
//                 <Link to="/cadora" className="hover:text-gold-soft">
//                   Cadora Events — the house
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="hover:text-ivory">
//                   Back to the entrance
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cadora/enquire" className="hover:text-gold-soft">
//                   Start an enquiry
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="hairline mt-12 text-ivory/40" />
//         <div className="mt-29 text-xs text-ivory/35">
//           <p>Venue Gypsy — a house of Cadora &amp; Gypsy Collective.</p>
//           <div className="mt-15 flex items-end justify-between gap-4">
//             <Link to="/gypsy" aria-label="Venue Gypsy home" className="inline-flex shrink-0 items-center rounded-sm bg-white p-2">
//               <img src="/media/gallery/gypsy-logo2.jpg" alt="The Venue Gypsy" className="w-24 object-contain sm:w-32" />
//             </Link>
//             <div className="text-right">
//               <a
//                 href="https://lemtechweb.netlify.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mb-1 block transition-colors duration-300 hover:text-ivory"
//               >
//                 Built by Lemtech Hub
//               </a>

//               <a
//                 href="tel:+2348036265605"
//                 className="transition-colors duration-300 hover:text-ivory"
//               >
//                 +2348036265605
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { useState } from 'react'
// import { Link, NavLink, Outlet } from 'react-router-dom'
// import { ArrowUpRight, Menu, X } from 'lucide-react'

// const links = [
//   ['Discover Venues', '/venues'], ['Destinations', '/destinations'], ['The Journal', '/journal'], ['About', '/about']
// ]

// export function Header() {
//   const [open, setOpen] = useState(false)
//   return <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
//     <div className="container-wide flex h-[82px] items-center justify-between">
//       <Link to="/" onClick={() => setOpen(false)} className="group leading-none">
//         <span className="block font-serif text-[25px] tracking-[-.06em]">the venue gypsy</span>
//         <span className="mt-2 block text-[8px] uppercase tracking-[.25em] text-white/65">Discovering places worth celebrating in</span>
//       </Link>
//       <nav className="hidden items-center gap-8 lg:flex">
//         {links.map(([label, to]) => <NavLink key={to} to={to} className={({ isActive }) => `text-[10px] uppercase tracking-[.15em] transition hover:text-white/65 ${isActive ? 'text-white' : 'text-white/80'}`}>{label}</NavLink>)}
//         <Link to="/contact" className="inline-flex items-center gap-2 border border-white/65 px-5 py-3 text-[9px] uppercase tracking-[.16em] transition hover:bg-white hover:text-ink">Make an enquiry <ArrowUpRight size={13}/></Link>
//       </nav>
//       <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X/> : <Menu/>}</button>
//     </div>
//     {open && <div className="absolute inset-x-0 top-[82px] bg-ink px-8 py-8 lg:hidden">
//       <nav className="flex flex-col gap-6">{links.map(([label, to]) => <Link key={to} onClick={() => setOpen(false)} to={to} className="font-serif text-2xl">{label}</Link>)}<Link onClick={() => setOpen(false)} to="/contact" className="text-xs uppercase tracking-widest">Make an enquiry ↗</Link></nav>
//     </div>}
//   </header>
// }

// export function Footer() {
//   return <footer className="bg-[#252821] text-white">
//     <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
//       <div><p className="font-serif text-3xl tracking-tight">the venue gypsy</p><p className="mt-4 max-w-sm text-sm leading-7 text-white/55">Discovering places worth celebrating in. A global venue discovery and destination platform.</p></div>
//       <div><p className="eyebrow text-white/45">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/75">{links.map(([label, to]) => <Link key={to} to={to} className="hover:text-white">{label}</Link>)}</div></div>
//       <div><p className="eyebrow text-white/45">Start a conversation</p><p className="mt-5 max-w-xs text-sm leading-7 text-white/65">Looking for a remarkable place, or curious about a destination? Tell us what you have in mind.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em]">Get in touch <ArrowUpRight size={14}/></Link></div>
//     </div>
//     <div className="container-wide flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-[9px] uppercase tracking-[.15em] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} The Venue Gypsy</span><span>Travel · Discover · Experience · Share</span></div>
//   </footer>
// }

// export default function Layout() { return <><Header/><Outlet/><Footer/></> }





import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['Discover Venues', '/gypsy'],
  ['Destinations', '/gypsy/destinations'],
  ['About', '/gypsy/about/our-story'],
  ['The Journal', '/gypsy/journal'],
  ['Contact', '/gypsy/contact']
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
      <div className="container-wide flex h-[82px] items-center justify-between">

        <Link
          to="/gypsy"
          onClick={() => setOpen(false)}
          className="group leading-none"
        >
          <span className="block font-serif text-[25px] tracking-[-.06em]">
            the venue gypsy
          </span>

          <span className="mt-2 block text-[8px] uppercase tracking-[.25em] text-white/65">
            Discovering places worth celebrating in
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/gypsy'}
              className={({ isActive }) =>
                `text-[10px] uppercase tracking-[.15em] transition hover:text-white/65 ${
                  isActive ? 'text-white' : 'text-white/80'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/gypsy/enquire"
            className="inline-flex items-center gap-2 border border-white/65 px-5 py-3 text-[9px] uppercase tracking-[.16em] transition hover:bg-white hover:text-ink"
          >
            Make an enquiry <ArrowUpRight size={13} />
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-[82px] bg-ink px-8 py-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {links.map(([label, to]) => (
              <Link
                key={to}
                onClick={() => setOpen(false)}
                to={to}
                className="font-serif text-2xl"
              >
                {label}
              </Link>
            ))}

            <Link
              onClick={() => setOpen(false)}
              to="/gypsy/enquire"
              className="text-xs uppercase tracking-widest"
            >
              Make an enquiry ↗
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#252821] text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">

        <div>
          <p className="font-serif text-3xl tracking-tight">
            the venue gypsy
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            Discovering places worth celebrating in. A global venue discovery and destination platform.
          </p>
        </div>

        <div>
          <p className="eyebrow text-white/45">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/45">Start a conversation</p>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Looking for a remarkable place, or curious about a destination? Tell us what you have in mind.
          </p>

          <Link
            to="/gypsy/enquire"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em]"
          >
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="container-wide flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-[9px] uppercase tracking-[.15em] text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} The Venue Gypsy</span>
        <span>Travel · Discover · Experience · Share</span>
      </div>
    </footer>
  )
}

export default function GypsyLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
