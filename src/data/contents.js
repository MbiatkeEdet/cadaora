export const venueCategories = [
  'Hotels & Resorts', 'Private Villas & Estates', 'Historic & Heritage Properties', 'Châteaux',
  'Beachfront & Coastal Venues', 'Private Islands', 'Restaurants & Dining Spaces', 'Vineyards',
  'Gardens & Outdoor Venues', 'Mountain & Countryside Properties', 'Contemporary Spaces',
  'Retreat & Wellness Properties', 'Unique & Unconventional Venues'
]

export const discoveries = [
  { title: 'Coastal hideaways', type: 'Beachfront & Coastal Venues', note: 'Where the landscape becomes part of the occasion.', image: 'photo-1499793983690-e29da59ef1c2' },
  { title: 'Private estates', type: 'Private Villas & Estates', note: 'A sense of privacy, character and possibility.', image: 'photo-1613977257363-707ba9348227' },
  { title: 'Historic places', type: 'Historic & Heritage Properties', note: 'Spaces with stories written into their walls.', image: 'photo-1600210492486-724fe5c67fb0' },
  { title: 'Garden settings', type: 'Gardens & Outdoor Venues', note: 'Open-air spaces shaped by nature.', image: 'photo-1470252649378-9c29740c9fa8' },
  { title: 'Remarkable stays', type: 'Hotels & Resorts', note: 'Hospitality, atmosphere and a place to gather.', image: 'photo-1571896349842-33c89424de2d' },
  { title: 'Vineyard landscapes', type: 'Vineyards', note: 'A slower pace and a distinctive sense of place.', image: 'photo-1510812431401-41d2bd2722f3' }
]

export const journalStories = [
  { category: 'FIELD NOTES', title: 'The details that make a place memorable', excerpt: 'Beyond the first photograph, it is often the smallest details that reveal the character of a setting.', image: 'photo-1600210492486-724fe5c67fb0', read: 'A perspective from the road' },
  { category: 'DESTINATION GUIDES', title: 'When the landscape becomes the occasion', excerpt: 'A destination can shape the rhythm, atmosphere and experience of a gathering.', image: 'photo-1470252649378-9c29740c9fa8', read: 'A way of looking at place' },
  { category: 'EVENT POSSIBILITIES', title: 'Imagining an experience beyond the obvious', excerpt: 'Looking at a property through the possibilities of the people who may one day gather there.', image: 'photo-1499793983690-e29da59ef1c2', read: 'Ideas for considered celebrations' }
]

export const photo = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
