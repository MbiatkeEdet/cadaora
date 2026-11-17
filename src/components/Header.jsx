import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Our Work', '/our-work'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <Link to="/" onClick={close} className="leading-none">
          {/* <span className="font-display block text-[31px] tracking-[.12em]">CADAORA</span>
          <span className="mt-1 block text-center text-[8px] tracking-[.52em]">EVENTS</span> */}
        </Link>
        {/* <nav className="hidden items-center gap-9 text-[10px] uppercase tracking-[.18em] lg:flex">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
        </nav> */}
        {/* <Link to="/contact" className="hidden border border-white/65 px-6 py-3 text-[9px] uppercase tracking-[.18em] transition hover:bg-white hover:text-[#24221f] lg:block">Make an enquiry</Link> */}
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-6 bg-[#24221f] px-7 py-8 text-xs uppercase tracking-[.2em] lg:hidden">
        {links.map(([label, path]) => <NavLink onClick={close} to={path} key={path}>{label}</NavLink>)}
        <Link onClick={close} to="/contact">Make an enquiry</Link>
      </nav>}
    </header>
  )
}
