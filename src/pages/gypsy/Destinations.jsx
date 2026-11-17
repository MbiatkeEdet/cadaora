import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero, SectionIntro } from '../../components/Shared'
import { photo } from '../../data/contents'

const destinationThemes = [
  {name:'Coastlines & islands',line:'The pull of the water and the freedom of open horizons.',image:'photo-1500375592092-40eb2168fd21'},
  {name:'Countryside & gardens',line:'Slower rhythms, open landscapes and room to gather.',image:'photo-1470252649378-9c29740c9fa8'},
  {name:'Historic settings',line:'Architecture, heritage and a strong sense of place.',image:'photo-1511818966892-d7d671e672a2'},
  {name:'Mountain escapes',line:'A change of pace framed by extraordinary scenery.',image:'photo-1470770841072-f978cf4d019e'}
]
export default function Destinations(){return <main><PageHero eyebrow="The world, considered" title={<>The place is part<br/><em>of the experience.</em></>} text="Some destinations shape an occasion before the first guest arrives. Discover the character, atmosphere and possibilities that make a place worth travelling to." image="photo-1470770841072-f978cf4d019e"/>
  <section className="container-wide py-20 md:py-28"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><SectionIntro eyebrow="A sense of place" title="Every destination tells a different story."/><div className="max-w-xl self-end text-sm leading-8 text-muted"><p>Landscape, culture, architecture, pace and surrounding experiences all contribute to the story of a destination.</p><p className="mt-5">Our destination features bring together places worth discovering and the venues that make them compelling for celebrations, gatherings and experiences. Explore the character of a destination and begin to imagine what could happen there.</p></div></div>
    <div className="mt-16 grid gap-8 sm:grid-cols-2">{destinationThemes.map((item,i)=><article key={item.name} className={i%2?'sm:mt-20':''}><div className="image-reveal aspect-[5/4]"><img src={photo(item.image)} alt={item.name} className="h-full w-full object-cover"/></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow text-olive">Destination inspiration</p><h3 className="mt-2 font-serif text-3xl">{item.name}</h3><p className="mt-2 max-w-sm text-xs leading-6 text-muted">{item.line}</p></div><ArrowUpRight className="mt-2 shrink-0 text-olive"/></div></article>)}</div>
  </section>
  <section className="bg-[#e9e7df] py-24"><div className="container-wide grid gap-10 md:grid-cols-2"><div><p className="eyebrow text-olive">A destination guide</p><h2 className="display-title mt-5 text-5xl">A little more than a pin on the map.</h2></div><ul className="space-y-4 self-end text-sm leading-7 text-muted">{['An introduction to the destination and its character','Why it may be worth considering for an event or experience','Featured venues and distinctive properties','Landscape, culture and local atmosphere','Nearby experiences, hospitality and practical considerations'].map(x=><li key={x} className="border-b border-[#d4d1c7] pb-3">{x}</li>)}</ul></div></section>
  <section className="container-wide py-20 text-center"><p className="eyebrow text-olive">Have somewhere in mind?</p><h2 className="display-title mx-auto mt-5 max-w-2xl text-5xl">Let the search begin.</h2><Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[10px] uppercase tracking-widest text-white">Tell us what you are looking for <ArrowUpRight size={14}/></Link></section>
</main>}
