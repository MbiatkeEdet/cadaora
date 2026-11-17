// import { Link } from 'react-router-dom'
// import { destinations } from '../../data/destinations.js'

// export default function Home() {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative flex h-[86vh] min-h-[560px] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
//         <img
//           src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=80"
//           alt="Luxury poolside cabanas overlooking the ocean at dusk"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
//         <div className="relative z-10 mx-auto max-w-3xl">
//           <p className="eyebrow text-sand-soft">The Atlas</p>
//           <h1 className="mt-5 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
//             Exquisite corners
//             <br /> of the world
//           </h1>
//           <p className="mt-6 text-sm text-ivory/70 sm:text-base">
//             Every destination here has been scouted, vetted, and held to one rule — it has to be worth crossing an
//             ocean for.
//           </p>
//         </div>
//       </section>

//       {/* Atlas grid */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
//           <div>
//             <p className="eyebrow text-jade-soft">{destinations.length} destinations, and counting</p>
//             <h2 className="mt-3 font-display text-3xl italic text-ivory sm:text-4xl">Choose your coordinates</h2>
//           </div>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {destinations.map((d) => (
//             <Link
//               key={d.slug}
//               to={`/gypsy/destinations/${d.slug}`}
//               className="group relative flex h-72 flex-col justify-end overflow-hidden border border-ink-line bg-ink-soft p-6"
//             >
//               <img
//                 src={d.image}
//                 alt={d.name}
//                 loading="lazy"
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
//               <div className="relative z-10">
//                 <p className="eyebrow text-sand-soft">{d.coords}</p>
//                 <h3 className="mt-2 font-display text-2xl italic text-ivory">{d.name}</h3>
//                 <p className="mt-1 text-xs text-ivory/50">{d.country}</p>
//                 <p className="mt-3 text-sm text-ivory/65">{d.tagline}</p>
//                 <span className="mt-4 inline-flex items-center gap-2 text-xs text-ivory/50 transition-all group-hover:gap-3 group-hover:text-jade-soft">
//                   View venue →
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Philosophy */}
//       <section id="philosophy" className="scroll-mt-24 border-y border-ink-line bg-ink-soft">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
//           <div>
//             <p className="eyebrow text-jade-soft">Why an atlas</p>
//             <h2 className="mt-4 font-display text-3xl italic leading-tight text-ivory sm:text-4xl">
//               A place changes
//               <br /> what a celebration means.
//             </h2>
//           </div>
//           <p className="text-sm leading-relaxed text-ivory/70 sm:text-base">
//             Venue Gypsy exists because the right setting does half the work of hosting. We spend our time finding
//             the villa with the one perfect terrace, the palace with the working orchard, the coastline with the
//             light that arrives on cue at seven — so that by the time you arrive, all that's left to do is gather
//             your people.
//           </p>
//         </div>
//       </section>

//       {/* Cross-brand CTA */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid gap-8 border border-ink-line p-10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-14">
//           <div>
//             <p className="eyebrow text-gold-soft">Sister house</p>
//             <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
//               Found your setting? Let's design what happens in it.
//             </h3>
//             <p className="mt-3 max-w-lg text-sm text-ivory/60">
//               Cadora Events plans and produces the celebration itself — anywhere on this atlas, or closer to home.
//             </p>
//           </div>
//           <Link
//             to="/cadora"
//             className="whitespace-nowrap border border-gold/60 px-7 py-3 eyebrow text-[0.65rem] text-gold-soft transition-colors hover:bg-gold hover:text-ink"
//           >
//             Meet Cadora Events
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }


import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { discoveries, journalStories, photo } from '../../data/contents.js'
import { ImageCard, MarqueeLine, SectionIntro } from '../../components/Shared'

export default function Home() {
  return <main>
    <section className="relative flex min-h-[760px] items-end overflow-hidden bg-ink text-white md:min-h-[850px]">
      <img src={photo('photo-1511818966892-d7d671e672a2')} alt="Sculptural architecture overlooking a dramatic landscape" className="absolute inset-0 h-full w-full object-cover opacity-65"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/10"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20"/>
      <div className="container-wide relative z-10 pb-24 pt-48 md:pb-28">
        <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="eyebrow text-white/75">A world of remarkable places</motion.p>
        <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.12}} className="display-title mt-7 max-w-4xl text-[58px] sm:text-7xl md:text-[104px]">Discover places<br/><em className="font-normal">worth celebrating in.</em></motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,duration:1}} className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-lg text-sm leading-7 text-white/80">A world of remarkable venues and destinations, discovered through first-hand experience and shared with an understanding of events, hospitality and the possibilities of a place.</p>
          <div className="flex flex-wrap gap-3"><Link to="/venues" className="inline-flex items-center gap-3 bg-paper px-6 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-ink transition hover:bg-white">Explore venues <ArrowUpRight size={15}/></Link><Link to="/destinations" className="inline-flex items-center gap-3 border border-white/60 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition hover:bg-white hover:text-ink">Explore destinations <ArrowUpRight size={15}/></Link></div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.2em] text-white/65 md:flex"><ArrowDown size={14}/> Scroll to discover</div>
    </section>

    <section className="container-wide grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:gap-24 md:py-32">
      <div><p className="eyebrow text-olive">The art of discovery</p><h2 className="display-title mt-6 text-5xl md:text-[64px]">A venue is more than a place.</h2><p className="mt-5 font-serif text-2xl italic text-olive">It is the beginning of an experience.</p></div>
      <div className="max-w-xl self-end text-sm leading-8 text-muted"><p>Some places stay with you. It might be the architecture, the landscape, the atmosphere, the welcome — or simply the feeling that something extraordinary could happen there.</p><p className="mt-5">The Venue Gypsy travels in search of these places. Through venue visits, destination scouting and first-hand discovery, we bring together a considered collection of settings for celebrations, gatherings and experiences around the world.</p><p className="mt-5">We look beyond the photographs to explore what makes each place special, what it could make possible and who might find it just right.</p><Link to="/about" className="text-link mt-8">Our perspective <ArrowUpRight size={14}/></Link></div>
    </section>

    <MarqueeLine/>

    <section className="container-wide py-24 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionIntro eyebrow="A considered collection" title="Explore the world" text="From coastal hideaways and private estates to historic properties, contemporary spaces and remarkable hotels, discover places with character, atmosphere and a story to tell."/><Link to="/venues" className="text-link mb-2 shrink-0">Discover all venues <ArrowUpRight size={14}/></Link></div>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{discoveries.slice(0,3).map((item,i)=><ImageCard key={item.title} item={item} index={i}/>)}</div>
    </section>

    <section className="bg-[#e9e7df] py-24 md:py-32"><div className="container-wide grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className="image-reveal aspect-[4/5] max-h-[680px]"><img src={photo('photo-1470770841072-f978cf4d019e')} alt="A quiet destination surrounded by mountains and water" className="h-full w-full object-cover"/></div>
      <div className="max-w-xl"><p className="eyebrow text-olive">The Gypsy perspective</p><h2 className="display-title mt-6 text-5xl md:text-[66px]">See the world through a different lens.</h2><p className="mt-7 text-sm leading-8 text-muted">A venue cannot be understood through photographs alone. We want to know how it feels to arrive, what the spaces make possible, how guests might experience the property and what someone should know before considering it.</p><p className="mt-5 text-sm leading-8 text-muted">Our perspective is shaped by travel, venue visits and an understanding of the details that turn a setting into an experience.</p><Link to="/about" className="text-link mt-9">See how we see it <ArrowUpRight size={14}/></Link></div>
    </div></section>

    <section className="container-wide py-24 md:py-32"><div className="mb-12 flex items-end justify-between gap-5"><SectionIntro eyebrow="Notes from the road" title="The Journal" text="Stories from the places we discover — observations, inspiration and ideas for seeing a destination differently."/><Link to="/journal" className="text-link mb-2 hidden shrink-0 sm:inline-flex">Read the journal <ArrowUpRight size={14}/></Link></div>
      <div className="grid gap-8 md:grid-cols-3">{journalStories.map((story,i)=><article key={story.title}><Link to="/journal" className="group block"><div className="image-reveal aspect-[5/4]"><img src={photo(story.image)} alt="" className="h-full w-full object-cover"/></div><p className="eyebrow mt-5 text-olive">{story.category}</p><h3 className="mt-3 font-serif text-2xl leading-snug">{story.title}</h3><p className="mt-3 text-xs leading-6 text-muted">{story.excerpt}</p><span className="text-link mt-5">Explore story <ArrowUpRight size={13}/></span></Link></article>)}</div>
    </section>

    <section className="relative overflow-hidden bg-olive py-24 text-white md:py-32"><div className="container-wide relative z-10 text-center"><p className="eyebrow text-white/65">Your next discovery begins here</p><h2 className="display-title mx-auto mt-6 max-w-3xl text-5xl md:text-[76px]">Where are you dreaming of going?</h2><p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/75">Tell us what kind of place you are looking for, or get in touch about a venue or destination featured on The Venue Gypsy.</p><Link to="/contact" className="mt-9 inline-flex items-center gap-3 bg-paper px-7 py-4 text-[10px] font-semibold uppercase tracking-[.16em] text-ink transition hover:bg-white">Start a conversation <ArrowUpRight size={15}/></Link></div></section>
  </main>
}
