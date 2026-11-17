// export default function PageHero({ eyebrow, title, subtitle, image, accentClass = 'text-gold-soft', height = 'h-[62vh]' }) {
//   return (
//     <section>
//       <div className={`relative ${height} min-h-[420px] w-full overflow-hidden`}>
//         {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
//         {eyebrow && (
//           <p className={`eyebrow absolute inset-x-0 bottom-8 z-10 text-center ${accentClass}`}>
//             {eyebrow}
//           </p>
//         )}
//       </div>

//       <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
//         <h1 className="font-display text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl">
//           {title}
//         </h1>
//         {subtitle && <p className="mx-auto mt-5 max-w-xl text-sm text-ivory/70 sm:text-base">{subtitle}</p>}
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import Header from './Header'

export default function PageHero({ image, eyebrow, title, subtitle, compact = false }) {
  return (
    <section className={`page-hero relative flex ${compact ? 'min-h-[500px]' : 'min-h-[620px]'} items-end overflow-hidden bg-[#292621] text-white`}>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"/>
      <Header />
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="relative z-10 mx-auto w-full max-w-[1240px] px-6 pb-20 pt-40 md:px-12 md:pb-24 lg:px-16">
        <p className="mb-6 text-[9px] font-semibold uppercase tracking-[.3em] text-[#e2c9a8]">{eyebrow}</p>
        <h1 className="font-display max-w-5xl text-[clamp(2rem,6vw,6.5rem)] leading-[.82] tracking-[-.04em]">{title}</h1>
        {subtitle && <p className="mt-8 max-w-xl text-sm leading-7 text-white/75 md:text-base">{subtitle}</p>}
      </motion.div>
    </section>
  )
}
