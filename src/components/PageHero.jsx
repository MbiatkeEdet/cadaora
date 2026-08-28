export default function PageHero({ eyebrow, title, subtitle, image, accentClass = 'text-gold-soft', height = 'h-[62vh]' }) {
  return (
    <section>
      <div className={`relative ${height} min-h-[420px] w-full overflow-hidden`}>
        {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
        {eyebrow && (
          <p className={`eyebrow absolute inset-x-0 bottom-8 z-10 text-center ${accentClass}`}>
            {eyebrow}
          </p>
        )}
      </div>

      <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-20">
        <h1 className="font-display text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-xl text-sm text-ivory/70 sm:text-base">{subtitle}</p>}
      </div>
    </section>
  )
}
