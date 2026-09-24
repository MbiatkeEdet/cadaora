// Image URLs point at fixed Unsplash photo IDs (images.unsplash.com/photo-<id>) —
// static assets, not the deprecated source.unsplash.com randomizer.
export const destinations = [
  {
    slug: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    coords: '40.63° N, 14.60° E',
    season: 'May – Oct',
    capacity: 'Up to 220 guests',
    tagline: 'Cliffside terraces above a lemon-scented sea.',
    blurb:
      'Limestone villas cut into the cliffs, terraces stacked like amphitheatres above the Tyrrhenian Sea. Ceremonies are staged at the edge of the rock, dinners beneath centuries-old pergolas strung with citrus and candlelight.',
    experience: 'Sunset vow renewal on a private cliffside terrace, followed by a torch-lit descent to a cove dinner.',
    seed: 3,
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    coords: '31.63° N, 8.01° W',
    season: 'Mar – May, Sep – Nov',
    capacity: 'Up to 400 guests',
    tagline: 'Riad courtyards, copper lanterns, desert dusk.',
    blurb:
      'A restored 19th-century riad opens onto orange-tree courtyards and rooftop terraces facing the Atlas Mountains. Zellige tilework and hand-loomed textiles frame every gathering, day into lantern-lit night.',
    experience: 'A caravan procession by camel and drum into a Agafay Desert reception beneath a constellation of lanterns.',
    seed: 11,
    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'lake-como',
    name: 'Lake Como',
    country: 'Italy',
    coords: '45.98° N, 9.26° E',
    season: 'Apr – Sep',
    capacity: 'Up to 180 guests',
    tagline: 'A private villa lawn meeting still alpine water.',
    blurb:
      'A 17th-century lakefront villa with formal gardens descending to a private jetty. Guests arrive by wooden launch, dinners are set beneath cypress allées with the water lit gold at dusk.',
    experience: 'Guest arrival by classic Riva launch, fireworks reflected across the lake to close the evening.',
    seed: 21,
    image: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'bali-uluwatu',
    name: 'Uluwatu',
    country: 'Bali, Indonesia',
    coords: '8.83° S, 115.09° E',
    season: 'Apr – Oct',
    capacity: 'Up to 150 guests',
    tagline: 'Limestone cliffs suspended above the Indian Ocean.',
    blurb:
      'A glass-edged clifftop pavilion sits sixty metres above the surf. Traditional Balinese blessing ceremonies open the day; the reception unfolds as the horizon turns copper and the waves take over the soundtrack.',
    experience: 'A traditional Melukat water-blessing at dawn, reception staged at the cliff edge for sunset.',
    seed: 34,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'scottish-highlands',
    name: 'The Highlands',
    country: 'Scotland',
    coords: '57.15° N, 4.71° W',
    season: 'Jun – Sep',
    capacity: 'Up to 120 guests',
    tagline: 'A private castle estate, loch-still and heather-lit.',
    blurb:
      'A restored keep with its own loch, glen, and stone-walled walled garden. Bagpipers lead the procession across the lawn; the great hall is dressed by firelight for a ceilidh that runs past midnight.',
    experience: 'A piper-led procession along the loch shore into a candlelit great hall ceilidh.',
    seed: 42,
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    coords: '36.39° N, 25.46° E',
    season: 'May – Oct',
    capacity: 'Up to 130 guests',
    tagline: 'Whitewashed caldera villas above a volcanic sea.',
    blurb:
      'A caldera-edge estate with infinity terraces facing the volcano. Ceremonies are set against the drop to the sea, and the famous Santorini sunset does most of the decorating.',
    experience: 'Caldera-edge ceremony timed to the sunset, followed by a private yacht dinner cruise.',
    seed: 55,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'french-riviera',
    name: 'French Riviera',
    country: 'France',
    coords: '43.55° N, 7.02° E',
    season: 'May – Sep',
    capacity: 'Up to 260 guests',
    tagline: 'Belle-Époque gardens along the Mediterranean.',
    blurb:
      'A Belle-Époque villa estate with terraced gardens running to the sea wall. Old-world glamour, jazz on the lawn, and a coastline that has hosted a century of grand celebrations.',
    experience: 'A garden ceremony beneath century-old pines, followed by a live jazz quartet on the terrace.',
    seed: 67,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'rajasthan',
    name: 'Udaipur',
    country: 'Rajasthan, India',
    coords: '24.58° N, 73.68° E',
    season: 'Oct – Mar',
    capacity: 'Up to 500 guests',
    tagline: 'A marble palace afloat on a mirrored lake.',
    blurb:
      'A maharaja-era palace with courtyards of carved marble and a lake that doubles every archway. Elephant processions, folk drummers, and a fireworks display over the water close the celebration.',
    experience: 'A royal baraat procession with drummers and dancers, closing in a lakeside fireworks display.',
    seed: 78,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
  },
]

export function getDestination(slug) {
  return destinations.find((d) => d.slug === slug)
}
