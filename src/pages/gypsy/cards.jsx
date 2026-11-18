import { Link } from 'react-router-dom'
import ContourArt from '../../components/ContourArt.jsx'
import { Arrow } from '../../components/Button.jsx'
import { ParallaxImage } from '../../components/Motion.jsx'

export function VenueCard({ venue }) {
  return (
    <Link to={`/venue-gypsy/venues/${venue.slug}`} className="group block">
      <div className="relative">
        <ParallaxImage src={venue.images[0]} alt={venue.name} className="aspect-[4/5]" />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-linen/90 px-3 py-1.5 text-coffee backdrop-blur">
          {venue.type}
        </span>
      </div>
      <div className="mt-5">
        <p className="eyebrow text-deep-blue">
          {venue.location} · {venue.country}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight">{venue.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-coffee/65">{venue.intro}</p>
        <span className="eyebrow mt-4 inline-flex items-center gap-2 text-coffee/60 transition-colors duration-300 group-hover:text-sun-orange">
          Explore This Venue
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <Arrow />
          </span>
        </span>
      </div>
    </Link>
  )
}

export function DestinationCard({ destination, compact = false }) {
  return (
    <Link
      to={`/venue-gypsy/destinations/${destination.slug}`}
      className={`group relative flex ${compact ? 'h-64' : 'h-80'} flex-col justify-end overflow-hidden rounded-2xl bg-coffee p-6 text-white`}
    >
      <ParallaxImage src={destination.image} alt={destination.name} className="!absolute inset-0 !rounded-none" />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
      <ContourArt seed={destination.seed} color="#ffffff" className="absolute inset-0 h-full w-full opacity-30" />
      <div className="relative z-10">
        <p className="eyebrow text-white/70">{destination.coords}</p>
        <h3 className="mt-2 font-display text-2xl italic leading-tight sm:text-3xl">{destination.name}</h3>
        <p className="mt-1 text-xs text-white/70">{destination.country}</p>
        {!compact && <p className="mt-3 text-sm text-white/80">{destination.tagline}</p>}
      </div>
    </Link>
  )
}

export function ArticleCard({ article, featured = false }) {
  const date = new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <Link to={`/venue-gypsy/journal/${article.slug}`} className="group block">
      <ParallaxImage src={article.image} className={featured ? 'aspect-[16/9]' : 'aspect-[3/2]'} />
      <p className="eyebrow mt-5 text-deep-blue">{article.category}</p>
      <h3 className={`mt-2 font-display leading-tight ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{article.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-coffee/65">{article.dek}</p>
      <p className="mt-3 text-xs text-coffee/45">
        {date} · {article.readTime} read
      </p>
    </Link>
  )
}
