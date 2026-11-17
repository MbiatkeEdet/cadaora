import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Menu, X,} from 'lucide-react'
import { motion } from 'framer-motion'

const links = [['Home','/'],['About','/about'],['Services','/services'],['Our Approach','/approach'],['Our Work','/work'],['Contact','/contact']]
export function Header(){
  const [open,setOpen]=useState(false)
  return <header className="relative z-50 border-b border-line/80 bg-paper">
    <div className="container-shell flex h-[86px] items-center justify-between">
      <Link to="/" className="leading-none" onClick={()=>setOpen(false)}><span className="display text-[27px] tracking-[.13em]">CADAORA</span><span className="mt-1 block text-[7px] tracking-[.42em] text-muted">EXQUISITE EVENTS</span></Link>
      <nav className="hidden items-center gap-8 lg:flex">{links.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>`nav-link eyebrow text-[8px] text-ink/75 ${isActive?'active':''}`}>{label}</NavLink>)}</nav>
      <Link to="/contact" className="hidden items-center gap-3 text-[9px] uppercase tracking-[.16em] lg:flex">Start a conversation <ArrowUpRight size={14}/></Link>
      <button onClick={()=>setOpen(!open)} className="lg:hidden" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav className="absolute left-0 right-0 top-full border-t border-line bg-paper px-6 py-7 shadow-soft lg:hidden">{links.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)} className="block border-b border-line py-4 font-display text-2xl">{label}</NavLink>)}</nav>}
  </header>
}
export function Footer(){return <footer className="bg-ink text-paper">
  <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
    <div><p className="display text-4xl tracking-[.12em]">CADAORA</p><p className="eyebrow mt-2 text-paper/45">Exquisite Events</p><p className="mt-8 max-w-sm font-display text-2xl leading-snug text-paper/80">Experiences shaped by story, design and thoughtful hospitality.</p></div>
    <div><p className="eyebrow text-gold">Explore</p><div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">{links.slice(1).map(([label,path])=><Link key={path} to={path} className="text-sm text-paper/70 transition hover:text-white">{label}</Link>)}</div></div>
    <div><p className="eyebrow text-gold">Find us</p><p className="mt-6 text-sm leading-7 text-paper/70">Lagos, Nigeria<br/>Working across destinations</p><p className="mt-5 text-xs leading-6 text-paper/45">Approved email, telephone and social links can be added before launch.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-3 text-[9px] uppercase tracking-[.16em] text-paper">Make an enquiry <ArrowUpRight size={14}/></Link></div>
  </div>
  <div className="container-shell flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-[9px] uppercase tracking-[.15em] text-paper/40 sm:flex-row"><span>© {new Date().getFullYear()} Cadaora Exquisite Events</span><span>Destination Events & Experiential Design</span></div>
</footer>}
export function PageIntro({title,description}){return <section className="container-shell pb-14 pt-16 md:pb-20 md:pt-24"><p className="eyebrow text-gold"></p><h1 className=" mt-7 max-w-2xl text-5xl text-center md:text-5xl">{title}</h1>{description&&<p className="mt-5 max-w-2xl text-lg leading-7 md:ml-[10%]">{description}</p>}</section>}
export function SectionLabel({children}){return <p className="eyebrow text-gold">{children}</p>}
export function ArtFrame({src,alt='',className='',caption}){return <div className={`image-placeholder ${className}`}><img src={src||''} alt={alt} onError={e=>{e.currentTarget.style.display='none'}}/>{caption&&<span className="absolute bottom-5 left-5 z-10 text-[8px] uppercase tracking-[.18em] text-white/80">{caption}</span>}</div>}
export function Reveal({children,className='',delay=0}){return <motion.div initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-70px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>}
export function CTA({title='Have an occasion in mind?',copy='Tell us what you are envisioning. We would love to hear about it.',button='Enquire about your event'}){return <section className="bg-[#eae5da] py-20 md:py-28"><div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><SectionLabel>Begin with a conversation</SectionLabel><h2 className="display mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted">{copy}</p></div><Link to="/contact" className="btn-dark w-fit">{button}<ArrowUpRight size={15}/></Link></div></section>}
