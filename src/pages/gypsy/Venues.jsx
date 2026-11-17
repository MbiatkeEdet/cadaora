import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { venueCategories, discoveries } from '../data/content'
import { PageHero, SectionIntro, ImageCard } from '../components/Shared'

export default function Venues() {
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState('All places')
  const filtered = useMemo(()=>discoveries.filter(item => (category==='All places'||item.type===category) && `${item.title} ${item.type} ${item.note}`.toLowerCase().includes(query.toLowerCase())),[query,category])
  return <main><PageHero eyebrow="The venue collection" title={<>Find a place<br/><em>that feels like the one.</em></>} text="Explore a considered collection of venue types, settings and possibilities. Look beyond the address and begin to imagine the experience." image="photo-1600607687939-ce8a6c25118c"/>
    <section className="container-wide py-20 md:py-28"><SectionIntro eyebrow="Explore by character" title="Every place has its own story." text="From intimate hideaways to expansive estates, discover the kinds of places that could hold something special."/>
      <div className="mt-12 grid gap-4 border-y border-line py-6 md:grid-cols-[1fr_260px] md:items-center"><label className="flex items-center gap-3"><Search size={17} className="text-muted"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search venue types or settings" className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted/70"/></label><label className="flex items-center gap-3 border-t border-line pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><SlidersHorizontal size={16} className="text-muted"/><select value={category} onChange={e=>setCategory(e.target.value)} className="w-full bg-transparent py-2 text-xs outline-none"><option>All places</option>{venueCategories.map(c=><option key={c}>{c}</option>)}</select></label></div>
      <div className="mb-8 mt-7 flex items-center justify-between"><p className="eyebrow text-muted">A glimpse of the collection</p><p className="text-xs text-muted">{filtered.length} discovery categories</p></div>
      {filtered.length ? <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item,i)=><ImageCard key={item.title} item={item} index={i}/>)}</div> : <p className="py-20 text-center font-serif text-2xl">No categories match that search.</p>}
      <p className="mt-16 border-t border-line pt-6 text-xs leading-6 text-muted">This is an introductory discovery collection. Individual venue profiles and property-specific details will be added as information and image permissions are confirmed.</p>
    </section>
    <section className="bg-[#e9e7df] py-20"><div className="container-wide grid gap-10 md:grid-cols-2"><div><p className="eyebrow text-olive">A closer look</p><h2 className="display-title mt-5 text-5xl">More than a beautiful photograph.</h2></div><p className="max-w-xl self-end text-sm leading-8 text-muted">Every place has its own character. A considered venue feature looks at the setting, the property, its spaces and possibilities, guest experience and practical notes — helping you understand whether it could be right for the experience you have in mind.</p></div></section>
  </main>
}
