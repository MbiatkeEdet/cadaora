import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import Reveal from '../../components/Reveal.jsx'
import { Arrow } from '../../components/Button.jsx'
import { articles, getArticle } from '../../data/gypsy/journal.js'
import { getVenue } from '../../data/gypsy/venues.js'
import { getDestination } from '../../data/gypsy/destinations.js'
import { VenueCard, DestinationCard, ArticleCard } from './cards.jsx'

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/venue-gypsy/journal" replace />

  const date = new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const relatedVenues = article.related.venues.map(getVenue).filter(Boolean)
  const relatedDestinations = article.related.destinations.map(getDestination).filter(Boolean)
  const more = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <div>
      <Seo title={`${article.title} | The Venue Gypsy Journal`} description={article.dek} />

      <section className="mx-auto max-w-3xl px-6 pb-10 pt-36 sm:pt-44">
        <Reveal>
          <Link to="/venue-gypsy/journal" className="eyebrow inline-flex items-center gap-2 text-coffee/60 hover:text-deep-blue">
            <Arrow className="rotate-180" /> The Journal
          </Link>
          <p className="eyebrow mt-8 text-deep-blue">{article.category}</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-coffee/75">{article.dek}</p>
          <p className="mt-5 text-xs text-coffee/45">
            {date} · {article.readTime} read
          </p>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-5xl px-6">
        <div className="aspect-[16/9] overflow-hidden rounded-sm bg-linen-deep">
          <img src={article.image} alt="" className="h-full w-full object-cover" />
        </div>
        {article.imageCredit && <p className="mt-2 text-right text-[0.6rem] uppercase tracking-widest text-coffee/40">{article.imageCredit}</p>}
      </Reveal>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-coffee/85">
          {article.body.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 40} className={i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-deep-blue' : ''}>
              {p}
            </Reveal>
          ))}
        </div>
      </section>

      {(relatedVenues.length > 0 || relatedDestinations.length > 0) && (
        <section className="border-t border-linen-line bg-linen-deep">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <Reveal>
              <p className="eyebrow text-deep-blue">Mentioned in this story</p>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedVenues.map((v) => (
                <Reveal key={v.slug}>
                  <VenueCard venue={v} />
                </Reveal>
              ))}
              {relatedDestinations.map((d) => (
                <Reveal key={d.slug}>
                  <DestinationCard destination={d} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">More from the Journal</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((a, i) => (
            <Reveal key={a.slug} delay={i * 70}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
