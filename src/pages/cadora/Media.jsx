import PageHero from '../../components/PageHero.jsx'

const gallery = [
  { src: '/media/gallery/gold-hall.jpg', alt: 'Reception hall with gold chiavari chairs and rose centrepieces' },
  { src: '/media/gallery/candelabra.jpg', alt: 'Crystal candelabra centrepiece under stage lighting' },
  { src: '/media/gallery/balloon-party.jpg', alt: 'Pastel table setting with silver balloon arches' },
  { src: '/media/gallery/bride-card.jpg', alt: 'Place card reading The Bride on a gold charger plate' },
]

const press = [
  'Luxury Weddings Quarterly',
  'The Occasion Journal',
  'Domaine & Table',
  'Grand Affairs Review',
]

export default function Media() {
  return (
    <div>
      <PageHero
        eyebrow="Media"
        title="A closer look at the work"
        subtitle="Selected moments from recent celebrations."
        image="/media/gallery/candelabra.jpg"
        height="h-[52vh]"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {gallery.map((g) => (
            <div key={g.src} className="group overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="eyebrow text-ivory/40">As featured in</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {press.map((p) => (
              <span key={p} className="font-display text-lg italic text-ivory/50">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
