export default function SectionIntro({ kicker, title, text, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="font-display mt-4 text-5xl leading-[.98] tracking-[-.025em] text-[#292621] sm:text-6xl md:text-7xl">{title}</h2>
      {text && <p className="mt-6 max-w-2xl text-sm leading-8 text-[#777168]">{text}</p>}
    </div>
  )
}
