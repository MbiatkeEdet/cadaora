// ILLUSTRATIVE SEED CONTENT for The Venue Gypsy Journal (website copy §05).
// Editorial categories are fixed by the brand; the articles are placeholders to
// be replaced with first-hand features. Image URLs are fixed Unsplash IDs.

export const JOURNAL_CATEGORIES = [
  'Venue Discoveries',
  'Destination Guides',
  'Field Notes',
  'Event Possibilities',
  'Travel & Hospitality',
]

export const articles = [
  {
    slug: 'what-a-photograph-cannot-tell-you',
    title: 'What a photograph cannot tell you about a venue',
    category: 'Field Notes',
    date: '2026-09-14',
    readTime: '4 min',
    dek: 'The five things we look for on a visit that never make it into the brochure.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Unsplash (placeholder)',
    body: [
      'A venue’s photographs are taken on its best day, from its best angle, usually at the best hour. They are not lying; they are simply incomplete. On a visit, we are looking for the rest.',
      'First, the arrival. What do guests see in the thirty seconds between the car door and the first drink? Second, the thresholds: how spaces connect, and whether a hundred people can move between them without a bottleneck. Third, the light at the hour you will actually be using the space, not the hour the photographer chose.',
      'Fourth, the sounds — a road, a neighbouring restaurant, the hum of a kitchen. And fifth, the people: how the staff greet you when they do not yet know why you are there.',
      'None of this fits in a listing. All of it decides whether a place will hold the experience you have in mind.',
    ],
    related: { venues: ['villa-serenella'], destinations: ['lake-como'] },
  },
  {
    slug: 'marrakech-in-three-evenings',
    title: 'Marrakech in three evenings',
    category: 'Destination Guides',
    date: '2026-08-02',
    readTime: '6 min',
    dek: 'How a multi-day celebration can use the city, the riads and the desert without exhausting anyone.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Riad_Maroc_031.JPG?width=1600',
    imageCredit: 'Wikimedia Commons (placeholder)',
    body: [
      'Marrakech works best as a sequence. The city is too rich to be used all at once, and guests who try to see everything in a day arrive at the main event already tired.',
      'The first evening belongs to a riad: small, cool, lantern-lit, with dinner in the courtyard and the call to prayer somewhere over the wall. Keep it short and let people find their feet.',
      'The second evening is the city’s — a rooftop in the medina with the Koutoubia lit and the square below, a long dinner and nothing scheduled afterwards.',
      'The third is the desert. Forty minutes out, the Agafay turns the colour of a lion at dusk, and a camp beneath lanterns can hold anything from a dinner for twenty to a celebration for three hundred.',
    ],
    related: { venues: ['riad-al-zahra'], destinations: ['marrakech'] },
  },
  {
    slug: 'a-castle-with-its-own-weather',
    title: 'A castle with its own weather',
    category: 'Venue Discoveries',
    date: '2026-07-19',
    readTime: '5 min',
    dek: 'Glenmorrow, in the central Highlands, and the case for celebrating somewhere the sky is part of the story.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eilean_Donan_at_Dusk.jpg?width=1600',
    imageCredit: 'Wikimedia Commons (placeholder)',
    body: [
      'Most venues sell certainty: the sunset will happen at this time, the terrace will look like this. The Highlands sell something else — a sky that changes four times in an afternoon and a house built to be glorious when it does.',
      'Glenmorrow is a keep with a Victorian wing, a loch at the foot of the lawn and a glen behind. The great hall has a fire you can stand in. The rooms look out over the water.',
      'A celebration here is a weekend, not an evening. Guests arrive on Friday and leave on Sunday, and in between the estate belongs to them.',
    ],
    related: { venues: ['glenmorrow-castle'], destinations: ['scottish-highlands'] },
  },
  {
    slug: 'one-table-one-terrace',
    title: 'One table, one terrace: the case for the single-evening wedding',
    category: 'Event Possibilities',
    date: '2026-06-28',
    readTime: '4 min',
    dek: 'Not every destination celebration needs a programme. Sometimes the best idea is to stay put.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Unsplash (placeholder)',
    body: [
      'There is a kind of destination wedding that moves its guests from boat to chapel to villa to beach club and back, and ends with everyone wondering where the day went.',
      'There is another kind: one place, one long table, one terrace, and nothing to do but be there. A ceremony at the end of the garden, drinks as the light goes, dinner that runs until it ends.',
      'Lake Como does this better than almost anywhere. The villas were built for exactly this — an evening with the water doing the decorating.',
    ],
    related: { venues: ['villa-serenella'], destinations: ['lake-como'] },
  },
  {
    slug: 'the-winelands-for-the-undecided',
    title: 'The Winelands, for the undecided',
    category: 'Travel & Hospitality',
    date: '2026-05-10',
    readTime: '5 min',
    dek: 'Food, wine, mountains and value: why the valleys outside Cape Town keep coming up in our conversations.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Unsplash (placeholder)',
    body: [
      'When a client cannot decide between a beach, a city and the countryside, we often suggest the Cape Winelands, because it quietly offers all three within an hour.',
      'The estates are three centuries old and extremely good at hospitality. The food is among the best in the southern hemisphere. The mountains make every photograph.',
      'And for the quality of what is on offer, it remains better value than most of Europe. Plan for the southern summer, December to February, and give guests a few days in Cape Town either side.',
    ],
    related: { venues: ['boschendal-valley-estate'], destinations: ['cape-winelands'] },
  },
  {
    slug: 'daylight-in-lagos',
    title: 'Daylight in Lagos',
    category: 'Venue Discoveries',
    date: '2026-04-21',
    readTime: '3 min',
    dek: 'A glasshouse in Ikoyi, and why a room with windows is a rare thing worth knowing about.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    imageCredit: 'Unsplash (placeholder)',
    body: [
      'Lagos has halls for a thousand people and ballrooms without windows. What it has very little of is daylight, and the Glasshouse in Ikoyi has it in abundance.',
      'A double-height pavilion, a planted terrace and trees around the building — for a brunch, a launch or a celebration that wants a lighter touch, it is the space we find ourselves recommending most.',
    ],
    related: { venues: ['the-glasshouse-lagos'], destinations: [] },
  },
]

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug)
}
