// import PageHero from '../../components/PageHero.jsx'
// import Footer from '../../components/Footer.jsx'
// import { Link } from 'react-router-dom'
// export default function Home() {
//   return (
//     <div>
//       {/* Hero */}
//       <section>
//         <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
//           alt="A couple bathed in golden-hour sunlight, holding a bouquet"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <p className="eyebrow absolute inset-x-0 bottom-8 z-10 px-6 text-center text-gold-soft">
//           Full-Service Event Design
//         </p>
//         </div>

//         <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:py-20">
//           <h1 className="font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
//             Celebrations, staged
//             <br /> like theatre
//           </h1>
//           <p className="mx-auto mt-6 max-w-lg text-sm text-ivory/70 sm:text-base">
//             Cadora designs weddings and parties for people who notice detail — from the fold of a napkin to the
//             last light cue.
//           </p>
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//             <Link
//               to="/cadora/enquire"
//               className="border border-gold bg-gold px-7 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
//             >
//               Begin an enquiry
//             </Link>
//             <Link
//               to="/cadora/weddings"
//               className="border border-ivory/30 px-7 py-3 eyebrow text-[0.65rem] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
//             >
//               See our work
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="mb-14 text-center">
//           <p className="eyebrow text-gold-soft">What we design</p>
//           <h2 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">Three disciplines, one standard</h2>
//         </div>

//         <div className="grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
//           <ServiceCard
//             to="/cadora/weddings"
//             image="/media/gallery/candelabra.jpg"
//             eyebrow="01"
//             title="Weddings"
//             copy="From the first sketch to the final dance, a wedding built around how you actually want to feel."
//           />
//           <ServiceCard
//             to="/cadora/parties"
//             image="/media/gallery/balloon-party.jpg"
//             eyebrow="02"
//             title="Parties"
//             copy="Milestone birthdays, launches, and private celebrations with a point of view — never a template."
//           />
//           <ServiceCard
//             to="/cadora/destinations"
//             image="/media/gallery/bride-card.jpg"
//             eyebrow="03"
//             title="Destinations"
//             copy="Full production for celebrations abroad — logistics, guest travel, and permits handled quietly."
//           />
//         </div>
//       </section>

//       {/* Philosophy strip */}
//       <section className="border-y border-ink-line bg-ink-soft">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 sm:items-center">
//           <div>
//             <p className="eyebrow text-gold-soft">Our Philosophy</p>
//             <h2 className="mt-4 font-display text-3xl italic leading-tight text-ivory sm:text-4xl">
//               We design the room,
//               <br /> then we disappear into it.
//             </h2>
//           </div>
//           <p className="text-sm leading-relaxed text-ivory/70 sm:text-base">
//             The best-run events are the ones no one notices being run. Cadora's team works ahead of the moment —
//             timing the light, the music, the courses — so that what your guests remember is the feeling of the
//             evening, not the machinery behind it. We take on a limited number of celebrations each season, by
//             design.
//           </p>
//         </div>
//       </section>

//       {/* Cross-brand CTA */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid gap-8 border border-ink-line p-10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-14">
//           <div>
//             <p className="eyebrow text-jade-soft">Sister house</p>
//             <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
//               Haven't chosen a setting/venue yet?
//             </h3>
//             <p className="mt-3 max-w-lg text-sm text-ivory/60">
//               Venue Gypsy curates the world's most exquisite places to gather — we design just as fluently on a
//               clifftop in Amalfi as we do at home.
//             </p>
//           </div>
//           <Link
//             to="/gypsy"
//             className="whitespace-nowrap border border-jade-soft/60 px-7 py-3 eyebrow text-[0.65rem] text-sand-soft transition-colors hover:bg-jade-soft hover:text-ink"
//           >
//             Open the atlas
//           </Link>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   )
// }

// function ServiceCard({ to, image, eyebrow, title, copy }) {
//   return (
//     <Link to={to} className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-ink p-8">
//       <img
//         src={image}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
//       <div className="relative z-10">
//         <span className="eyebrow text-gold-soft">{eyebrow}</span>
//         <h3 className="mt-2 font-display text-2xl italic text-ivory">{title}</h3>
//         <p className="mt-3 text-sm text-ivory/65">{copy}</p>
//         <span className="mt-4 inline-flex items-center gap-2 text-xs text-ivory/50 transition-all group-hover:gap-3 group-hover:text-gold-soft">
//           Explore →
//         </span>
//       </div>
//     </Link>
    
//   )
// }



import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ArtFrame, CTA, Reveal, SectionLabel } from '../../components/Site'
import { services, projects } from '../../data/content'
import Footer from '../../components/Footer'

export default function Home(){return <>
  <section className="relative min-h-[690px] overflow-hidden bg-[#777363] text-paper md:min-h-[790px]">
    <ArtFrame src="/images/home-hero.jpg" alt="Cadaora event setting" className="absolute inset-0 h-full w-full opacity-60"/>
    <div className="absolute inset-0 bg-gradient-to-r from-[#171713]/70 via-[#171713]/30 to-transparent"/>
    <div className="container-shell relative flex min-h-[690px] flex-col justify-center py-24 md:min-h-[790px]">
      <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[.22,1,.36,1]}} className="max-w-4xl">
        <p className="eyebrow text-[#e1c9a2]">Destination events & experiential design</p>
        <h1 className="display mt-8 text-6xl leading-[1.02] md:text-[100px]">More Than an Event.<br/><em className="font-normal">An Experience</em><br/>With Meaning.</h1>
        <p className="mt-8 max-w-xl text-sm leading-7 text-white/75 md:text-base">Cadaora Exquisite Events is a destination events and experiential design house creating distinctive celebrations through creative direction, thoughtful design, exceptional hospitality and considered execution.</p>
        <div className="mt-10 flex flex-wrap items-center gap-7"><Link to="/work" className="btn-dark bg-paper !text-ink hover:!bg-[#e1c9a2]">Explore our work <ArrowUpRight size={15}/></Link><Link to="/contact" className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[.16em] text-white">Tell us what you’re envisioning <ArrowRight size={14}/></Link></div>
      </motion.div>
      <div className="absolute bottom-8 right-0 hidden text-right md:block"><p className="eyebrow text-white/60">01 — 05</p><p className="mt-2 font-display text-lg italic text-white/80">Considered from the very first detail.</p></div>
    </div>
  </section>
  <section className="container-shell grid gap-10 py-24 md:grid-cols-[.8fr_1.2fr] md:py-32"><Reveal><SectionLabel>The Cadaora point of view</SectionLabel><p className="mt-5 max-w-xs font-display text-3xl leading-snug">Every experience begins with a story.</p></Reveal><Reveal delay={.12}><p className="font-display text-3xl leading-[1.35] md:text-[42px]">A celebration is never just a date on the calendar or a beautiful setting. It is a gathering of people, a reflection of relationships, a moment in time and, often, a story that deserves to be told with care.</p><p className="mt-7 max-w-2xl text-sm leading-7 text-muted">At Cadaora, we bring those stories into focus. We combine concept development, experiential design, destination knowledge and thoughtful planning to create occasions that feel personal, considered and unmistakably their own.</p><Link to="/about" className="btn-line mt-7">Discover Cadaora <ArrowUpRight size={14}/></Link></Reveal></section>
  <section className="bg-[#eae5da] py-20 md:py-28"><div className="container-shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>What we do</SectionLabel><h2 className="display mt-5 max-w-2xl text-5xl leading-tight md:text-6xl">A thoughtful meeting of story, place and people.</h2></div><Link to="/services" className="btn-line w-fit">Explore our services <ArrowUpRight size={14}/></Link></div><div className="mt-14 grid border-t border-line md:grid-cols-2">{services.map((s,i)=><Reveal key={s.n} delay={i*.06} className="border-b border-line py-8 md:px-8 md:py-10"><div className="flex gap-8"><span className="eyebrow pt-2 text-gold">{s.n}</span><div><h3 className="display text-3xl">{s.title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted">{s.desc}</p><Link to="/services" className="mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[.15em]">Discover more <ArrowRight size={13}/></Link></div></div></Reveal>)}</div></div></section>
  <section className="container-shell py-24 md:py-32"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>Selected stories</SectionLabel><h2 className="display mt-5 text-5xl md:text-6xl">A collection of moments.</h2></div><Link to="/work" className="btn-line w-fit">View our work <ArrowUpRight size={14}/></Link></div><div className="mt-12 grid gap-5 md:grid-cols-3"><Reveal className="md:col-span-2"><ArtFrame src={projects[0].image} alt="Wedding celebration portfolio placeholder" className="h-[360px] md:h-[520px]" caption="Replace with approved project photography"/><p className="mt-5 font-display text-2xl">{projects[0].title}</p><p className="eyebrow mt-2 text-muted">{projects[0].type}</p></Reveal><Reveal delay={.12} className="md:mt-32"><ArtFrame src={projects[1].image} alt="Milestone celebration portfolio placeholder" className="h-[300px] md:h-[390px]" caption="Approved imagery to be added"/><p className="mt-5 font-display text-2xl">{projects[1].title}</p><p className="eyebrow mt-2 text-muted">{projects[1].type}</p></Reveal></div></section>
  <section className="bg-ink py-20 text-paper md:py-28"><div className="container-shell grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>Our approach</SectionLabel><p className="mt-5 font-display text-4xl leading-tight">Thoughtful by design. Considered at every stage.</p></div><div><p className="max-w-2xl text-sm leading-8 text-paper/65">No two events should begin with the same template. Our process gives every project a clear structure while leaving room for its individual story to emerge. From the first conversation to the final guest departure, we make deliberate choices and stay close to the details.</p><Link to="/approach" className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-3 text-[9px] uppercase tracking-[.16em]">Explore our approach <ArrowUpRight size={14}/></Link></div></div></section>
  <section className="container-shell grid gap-8 py-20 md:grid-cols-3 md:py-24"><Reveal><SectionLabel>Our experience</SectionLabel><p className="display mt-4 text-6xl">2016</p><p className="mt-2 text-xs text-muted">Founded with a point of view</p></Reveal><Reveal delay={.1}><p className="display text-6xl">200+</p><p className="mt-2 text-xs text-muted">Social events delivered</p></Reveal><Reveal delay={.2}><p className="display text-4xl">Across destinations</p><p className="mt-3 text-xs leading-6 text-muted">Lagos-based, working with clients and trusted local partners in different locations.</p></Reveal></section>
  <CTA title="An occasion worth remembering begins with a conversation."/>
  <Footer />
</>}
