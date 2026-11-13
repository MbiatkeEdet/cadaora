// ILLUSTRATIVE SEED CONTENT.
// The Cadaora website copy (§08) requires real project imagery and verified
// details only — no stock imagery that could be mistaken for Cadaora's work.
// Replace every entry below with approved projects before launch. Images under
// /media are Cadaora's own shots; Unsplash URLs are placeholders.

export const PROJECT_TYPES = [
  'Weddings',
  'Milestone Celebrations',
  'Corporate Experiences',
  'Destination Events',
  'Experiential Design',
]

export const projects = [
  {
    slug: 'a-garden-in-the-city',
    title: 'A Garden in the City',
    destination: 'Lagos, Nigeria',
    type: 'Weddings',
    intro:
      'A two-day wedding for a couple who wanted their guests to feel they had left the city without ever leaving it.',
    brief:
      'Six hundred guests, a family with deep roots in Lagos, and a wish for something greener and calmer than the ballroom weddings they had attended all year.',
    concept:
      'A walled garden built indoors. A single, continuous canopy of foliage and warm light stood in for the ceiling; tables sat beneath it in loose groupings rather than rows, so the room read as a landscape rather than a hall.',
    experience:
      'Guests arrived through a corridor of scent and sound before the room opened up. Dinner moved at an unhurried pace, and the reveal of the dance floor was timed to the first song rather than announced.',
    delivery:
      'Full planning, design and production over eleven months, with a dedicated guest-experience team on the day.',
    cover: '/media/hero-poster.jpg',
    gallery: ['/media/hero-poster.jpg', '/media/gallery/gold-hall.jpg', '/media/gallery/candelabra.jpg'],
    illustrative: true,
  },
  {
    slug: 'the-long-table',
    title: 'The Long Table',
    destination: 'Lake Como, Italy',
    type: 'Destination Events',
    intro: 'An intimate destination wedding on the lake, planned across three countries and delivered on a single terrace.',
    brief:
      'Eighty guests from Lagos, London and New York, a villa the couple had fallen for on holiday, and a desire for one unbroken evening together rather than a programme of events.',
    concept:
      'One table, one terrace, one sunset. Everything else — ceremony, music, dinner — was arranged so that guests never needed to move far from the water.',
    experience:
      'Arrival by boat, a ceremony timed to the softening light, and a dinner that ran into the night without a single formal cue.',
    delivery:
      'Destination coordination with local partners for logistics, catering and permissions; creative direction and planning from Lagos.',
    cover: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vista_dal_lago_su_Villa_del_Balbianello%2C_Bene_FAI_sul_Lago_di_Como.jpg?width=1600',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Vista_dal_lago_su_Villa_del_Balbianello%2C_Bene_FAI_sul_Lago_di_Como.jpg?width=1600',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80',
    ],
    illustrative: true,
  },
  {
    slug: 'sixty-years-of-grace',
    title: 'Sixty Years of Grace',
    destination: 'Abuja, Nigeria',
    type: 'Milestone Celebrations',
    intro: 'A sixtieth birthday designed around one woman’s life, told through the people and places that shaped it.',
    brief:
      'The family wanted a celebration that felt personal rather than grand — a room their mother would recognise herself in.',
    concept:
      'Six chapters, six tables. Each table was dressed for a decade of her life, with objects, colours and music drawn from her own story, so guests moved through the room as through a memoir.',
    experience:
      'A quiet arrival, a toast that doubled as a narration of the room, and a closing moment with her grandchildren that the family still talks about.',
    delivery: 'Concept, design, planning and on-the-day coordination over four months.',
    cover: '/media/gallery/candelabra.jpg',
    gallery: ['/media/gallery/candelabra.jpg', '/media/gallery/bride-card.jpg'],
    illustrative: true,
  },
  {
    slug: 'a-launch-with-a-point-of-view',
    title: 'A Launch With a Point of View',
    destination: 'Lagos, Nigeria',
    type: 'Corporate Experiences',
    intro: 'A product launch that treated two hundred guests as people to be hosted, not an audience to be presented to.',
    brief:
      'A brand entering a crowded category needed a launch that would be talked about for its experience, not its slides.',
    concept:
      'No stage. The product was placed at the centre of a series of rooms, each designed around one of its qualities, and guests discovered it at their own pace with a host at every threshold.',
    experience:
      'A sequence of small rooms rather than one large one, a dinner that doubled as the demonstration, and a send-off designed to be photographed.',
    delivery: 'Creative direction, spatial design, production and guest management.',
    cover: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1600&q=80',
    ],
    illustrative: true,
  },
  {
    slug: 'the-courtyard-at-dusk',
    title: 'The Courtyard at Dusk',
    destination: 'Marrakech, Morocco',
    type: 'Destination Events',
    intro: 'A three-day celebration in a restored riad, built around the city’s rhythm rather than against it.',
    brief:
      'A couple with roots in two countries wanted a destination that belonged to neither — a neutral, beautiful place that would be new to everyone.',
    concept:
      'Let the city set the pace. Mornings open, afternoons slow, evenings long. The design leaned on the riad’s own tilework and courtyards, adding only light, textile and scent.',
    experience:
      'A welcome dinner on the rooftop, a ceremony in the courtyard at dusk, and a final night in the desert beneath lanterns.',
    delivery:
      'Destination scouting, local-partner coordination, guest travel and on-ground execution for one hundred and twenty guests.',
    cover: 'https://commons.wikimedia.org/wiki/Special:FilePath/Riad_Maroc_031.JPG?width=1600',
    gallery: ['https://commons.wikimedia.org/wiki/Special:FilePath/Riad_Maroc_031.JPG?width=1600'],
    illustrative: true,
  },
  {
    slug: 'a-room-made-of-light',
    title: 'A Room Made of Light',
    destination: 'Lagos, Nigeria',
    type: 'Experiential Design',
    intro: 'An experiential design commission for an anniversary dinner: the brief was a single word — glow.',
    brief:
      'The hosts had the venue and the caterer. What they wanted from Cadaora was the idea, and a room that would carry it.',
    concept:
      'Light as the only material. Hundreds of warm points suspended at different heights, dimming and rising through the evening, with pastel colour introduced only at the table.',
    experience:
      'Guests walked beneath the installation to reach their seats; the lighting cues followed the courses, and the last dim was the signal for dessert.',
    delivery: 'Concept narrative, spatial direction, lighting design and production supervision.',
    cover: '/media/gallery/balloon-party.jpg',
    gallery: ['/media/gallery/balloon-party.jpg', '/media/gallery/gold-hall.jpg'],
    illustrative: true,
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
