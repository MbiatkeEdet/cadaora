import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { photo } from '../data/contents.js'

export function SectionIntro({ eyebrow, title, text, link, to = '/venues', centered = false }) {
  return <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
    {eyebrow && <p className="eyebrow text-olive">{eyebrow}</p>}
    <h2 className="display-title mt-5 text-4xl sm:text-5xl md:text-[58px]">{title}</h2>
    {text && <p className="mt-6 max-w-xl text-sm leading-7 text-muted">{text}</p>}
    {link && <Link to={to} className="text-link mt-8">{link} <ArrowUpRight size={14}/></Link>}
  </div>
}

export function ImageCard({ item, index = 0, to = '/venues' }) {
  return <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay: index * .06 }}>
    <Link to={to} className="group block">
      <div className="image-reveal relative aspect-[4/5] bg-sand"><img src={photo(item.image)} alt={item.title} className="h-full w-full object-cover"/><span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-paper text-ink transition group-hover:bg-olive group-hover:text-white"><ArrowUpRight size={16}/></span></div>
      <div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow text-muted">{item.type || item.category}</p><h3 className="mt-2 font-serif text-2xl tracking-tight">{item.title}</h3>{item.note && <p className="mt-2 max-w-xs text-xs leading-6 text-muted">{item.note}</p>}</div></div>
    </Link>
  </motion.article>
}

export function PageHero({ eyebrow, title, text, image, compact = false }) {
  return <section className={`relative flex items-end overflow-hidden ${compact ? 'min-h-[580px]' : 'min-h-[680px]'} bg-ink text-white`}>
    <img src={photo(image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55"/><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25"/>
    <div className="container-wide relative z-10 pb-20 pt-40 md:pb-24"><p className="eyebrow text-white/75">{eyebrow}</p><h1 className="display-title mt-6 max-w-4xl text-5xl sm:text-6xl md:text-[86px]">{title}</h1>{text && <p className="mt-7 max-w-xl text-sm leading-7 text-white/80">{text}</p>}</div>
  </section>
}

export function MarqueeLine() { return <div className="overflow-hidden border-y border-line py-5"><p className="whitespace-nowrap text-center font-serif text-lg italic text-olive">We travel. We discover. We experience. We share. &nbsp; ✳ &nbsp; We travel. We discover. We experience. We share.</p></div> }
