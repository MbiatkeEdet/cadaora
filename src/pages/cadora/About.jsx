// import PageHero from '../../components/PageHero.jsx'

// const values = [
//   { title: 'Restraint', copy: 'We add until it feels finished, then we take one thing away.' },
//   { title: 'Discretion', copy: 'The best measure of our work is how little of it you can see on the day.' },
//   { title: 'Craft', copy: 'We work with makers, not vendors — people who care as much as we do.' },
// ]

// export default function About() {
//   return (
//     <div>
//       <PageHero
//         eyebrow="About Cadora"
//         title="A small studio, on purpose"
//         subtitle="We plan a limited number of events each season so that each one gets the whole team."
//         image="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=2000&q=85"
//         height="h-[56vh]"
//       />

//       <section className="mx-auto max-w-3xl px-6 py-24">
//         <p className="eyebrow text-gold-soft text-center">Our story</p>
//         <h2 className="mt-4 text-center font-display text-3xl italic text-ivory sm:text-4xl">
//           Started at a kitchen table, still run that way
//         </h2>
//         <div className="mt-8 space-y-5 text-sm leading-relaxed text-ivory/70 sm:text-base">
//           <p>
//             Cadora began as a favor — a friend's wedding, planned over several months of notebooks and site
//             visits, that turned into a request from the next friend, and the one after that. What didn't change as
//             the studio grew was the way we start every project: at the table, with the people hosting, before a
//             single vendor enters the conversation.
//           </p>
//           <p>
//             Today the team is larger, the productions bigger, and the passports well-used — but the brief is the
//             same one it always was. Design the room. Direct the evening. Disappear into it.
//           </p>
//         </div>
//       </section>

//       <section className="border-y border-ink-line bg-ink-soft">
//         <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-3">
//           {values.map((v) => (
//             <div key={v.title} className="text-center sm:text-left">
//               <h3 className="font-display text-xl italic text-gold-soft">{v.title}</h3>
//               <p className="mt-3 text-sm text-ivory/65">{v.copy}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="mx-auto max-w-5xl px-6 py-24 text-center">
//         <p className="eyebrow text-gold-soft">By the numbers</p>
//         <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
//           <Stat number="14" label="Years in practice" />
//           <Stat number="310+" label="Celebrations designed" />
//           <Stat number="22" label="Countries worked in" />
//           <Stat number="18" label="Events taken per season" />
//         </div>
//       </section>
//     </div>
//   )
// }

// function Stat({ number, label }) {
//   return (
//     <div>
//       <p className="font-display text-4xl italic text-ivory">{number}</p>
//       <p className="mt-2 text-xs uppercase tracking-widest text-ivory/50">{label}</p>
//     </div>
//   )
// }

import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { images } from '../../data/site'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import Reveal from '../../components/Reveal'
import SectionIntro from '../../components/SectionIntro'

const values = [
  ['Intentional creativity', 'We do not design for spectacle alone. We look for the idea that gives an event its identity, then develop it with care and consistency.'],
  ['Thoughtful hospitality', 'The guest experience matters at every stage. We consider how people arrive, connect, participate and remember the occasion.'],
  ['Quiet precision', 'Beautiful experiences are supported by careful preparation. We plan thoroughly, communicate clearly and pay attention to the details guests may never see.'],
  ['Personal partnership', 'We believe the best outcomes come from listening. Your priorities guide our decisions, and your trust shapes the way we work.'],
]

export default function About() {
  return <>
    <PageHero image={images.about} eyebrow="The people and purpose behind the occasion" title={<>Considered by design. <em className="text-[#e6d5c1]">Remembered</em> for how it feels.</>} subtitle="An event management and creative planning studio built around the belief that the most meaningful celebrations are the ones that feel entirely your own."/>
    <section className="bg-[#f5f0e8] px-6 py-24 md:px-12 md:py-32 lg:px-16"><div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-24">
      <Reveal><p className="section-kicker">Our story</p><p className="font-display mt-5 text-3xl leading-[.98] md:text-6xl">We believe every occasion has a story worth telling.</p></Reveal>
      <Reveal><p className="text-2xl leading-8 font-candara font-bold text-[#716c63]">Cadaora Events was shaped by a simple idea: an exceptional event should feel considered from the very first interaction to the final goodbye. The atmosphere, the rhythm of the day, the way guests are welcomed and the details that bring a vision together all contribute to the memory people carry home.</p><p className="mt-6 text-2xl font-candara font-bold leading-8 text-[#716c63]">We approach event management as both a creative discipline and a commitment to thoughtful service. It requires imagination to see what an occasion could become, structure to make it possible, and care to ensure that every part works in harmony. Our work brings these qualities together through planning, creative direction, coordination and considered design.</p><p className="mt-6 text-2xl font-candara font-boldleading-8 text-[#716c63]">Whether we are shaping a wedding, a private celebration or a corporate gathering, we begin by understanding what matters most to the people behind it. From there, we build a clear plan, assemble the right creative and production partners, and guide the process with calm attention. The result is not simply an event that looks beautiful, but an experience that feels natural, welcoming and meaningful.</p><p className="mt-6 text-2xl leading-8 text-[#716c63]">At Cadaora, excellence is not a finishing touch. It is the standard that informs every decision along the way.</p></Reveal>
    </div></section>
    <section className="grid bg-[#e9e1d6] md:grid-cols-2"><div className="image-zoom min-h-[420px] overflow-hidden"><img src={images.detail} alt="Elegant event setting with thoughtful styling" className="h-full w-full object-cover"/></div><div className="flex items-center px-7 py-20 md:px-14 lg:px-20"><Reveal><p className="section-kicker font-candara font-bold">Our point of view</p><h2 className="font-candara font-bold mt-5 text-3xl leading-[.98] md:text-6xl">Luxury is a feeling, carefully <em className="text-[#a58a6a]">created.</em></h2><p className="mt-7 text-2xl leading-8 text-[#716c63]">It is the ease of knowing that the details have been considered. It is a room that feels right, a programme that flows, a welcome that feels personal and a celebration that gives you the freedom to be present. We believe refinement lives in the relationship between all these things.</p></Reveal></div></section>
    <section className="bg-[#f5f0e8] px-6 py-24 md:px-12 md:py-32 lg:px-16"><div className="mx-auto max-w-[1240px]"><Reveal><SectionIntro kicker="What guides us" title={<>The values behind every <em className="text-[#a58a6a]">detail.</em></>} text="Our principles are practical, not ornamental. They shape the way we listen, plan, collaborate and deliver."/></Reveal><div className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">{values.map(([title,text],i)=><Reveal key={title} delay={i*.05} className="border-t border-[#d8cec0] pt-6"><div className="flex items-center justify-between"><span className="font-candara font-bold text-4xl text-[#b69a75]">0{i+1}</span><Check size={17} className="text-[#a58a6a]"/></div><h3 className="font-display mt-5 text-3xl">{title}</h3><p className="mt-3 max-w-lg text-md leading-7 text-[#777168]">{text}</p></Reveal>)}</div></div></section>
    <section className="bg-[#282621] px-6 py-24 text-white md:px-12 md:py-32"><Reveal className="mx-auto max-w-4xl text-center"><p className="section-kicker !text-[#c5aa87]">A considered partnership</p><h2 className="font-candara font-bold mt-5 text-5xl leading-none md:text-7xl">The best celebrations begin with a <em className="text-[#c5aa87]">conversation.</em></h2><p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/60">Tell us what you are imagining, what matters to you and how you would like your guests to feel. We will bring curiosity, experience and a thoughtful approach to the possibilities.</p><Link to="/contact" className="mt-9 inline-flex items-center gap-3 border-b border-[#c5aa87] pb-3 text-[10px] uppercase tracking-[.2em]">Start a conversation <ArrowUpRight size={14}/></Link></Reveal></section>
    <Footer/>
  </>
}
