# Cadaora Exquisite Events & The Venue Gypsy

Two brand sites in one React + Vite + Tailwind v4 app, built to the Studio Areca brand direction.

- `/` — shared entrance (hero video, animated Cadaora emblem intro, two doors)
- `/cadaora` — Cadaora Exquisite Events: Home, About, Services, Our Approach, Our Work, Contact
- `/venue-gypsy` — The Venue Gypsy: Home, Discover Venues, Destinations, Journal, About, Contact

Legacy `/cadora/*` and `/gypsy/*` URLs redirect to the new paths.

## Scripts

```
npm run dev      # local dev server
npm run build    # production build
npm run lint     # oxlint
```

## Where things live

- `src/index.css` — brand tokens (colours, fonts) and the `.brand-cadaora` / `.brand-gypsy` scopes
- `src/components/CadaoraEmblem.jsx` — SVG emblem + wordmark (replace with the official vector when supplied)
- `src/components/IntroLoader.jsx` — the slide-up intro on the entrance page (plays once per session)
- `src/data/cadaora/projects.js` — case studies (illustrative seed content)
- `src/data/gypsy/{venues,destinations,journal}.js` — Venue Gypsy content (illustrative seed content)
- `public/media/` — Cadaora's own photography and the hero video

## Before launch

- Replace seed projects, venues, destinations and journal entries with approved content; both brand copy
  documents require real, permission-cleared imagery.
- Confirm contact email/phone (search for `TODO approved contact`).
- Wire the enquiry forms to a real endpoint (search for `TODO: replace with a real submission`).
- Candara renders where installed (Windows); elsewhere the site falls back to Nunito Sans. Axiforma falls
  back to Outfit. Self-host licensed files if purchased.
