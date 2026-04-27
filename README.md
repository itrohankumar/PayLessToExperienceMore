# PayLessToExperienceMore

Travel deals website — curated flight, hotel, and getaway deals with Travelpayouts affiliate widgets.

Built with Next.js 14 (App Router) + Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js' built-in ESLint |

## Routes

| Path | Description |
|---|---|
| `/` | Homepage — hero, search card, live flight widget, featured deals, trending destinations |
| `/flights` | Flight deals page — Travelpayouts flight search widget + 6 deal cards |
| `/hotels` | Hotel deals page — Travelpayouts hotel search widget + 6 deal cards |
| `/blog` | Blog index — featured post + post grid |
| `/blog/cheap-flights-hacks` | Sample post: "7 Hacks to Find Cheap Flights in 2026" with full visual treatment |

## Project layout

```
app/
  layout.js              Root layout (Navbar + Footer + globals.css)
  page.js                Homepage
  globals.css            Tailwind directives + airplane keyframe
  flights/page.js
  hotels/page.js
  blog/page.js
  blog/cheap-flights-hacks/page.js
components/
  Navbar.jsx             Sticky nav with mobile hamburger
  Footer.jsx             4-column footer with newsletter signup
  DealCard.jsx           Reusable deal card (flights & hotels)
  WidgetCard.jsx         Container with heading for affiliate widgets
  TravelpayoutsWidget.jsx  Client component that injects widget script inline
  SearchForm.jsx         Homepage hero search form (client)
  SubscribeForm.jsx      CTA newsletter form (client)
tailwind.config.js       Custom `brand` color palette
next.config.js
```

## Travelpayouts widgets

Widgets are script-based loaders from `tpemb.com/content?...`. They inject HTML at the location of the `<script>` tag, so they need to render inline (not appended to `<head>`).

`components/TravelpayoutsWidget.jsx` handles this — it's a `"use client"` component that creates the script element on mount and appends it inside its ref'd container. Cleanup on unmount is included to play nicely with React Strict Mode's double-invoke in development.

To add another widget, drop a `<TravelpayoutsWidget src="..." />` inside a `<WidgetCard>`:

```jsx
<WidgetCard title="Search Flights" subtitle="Compare hundreds of airlines">
  <TravelpayoutsWidget src="https://tpemb.com/content?..." />
</WidgetCard>
```

If a widget appears blank in the browser, the most likely cause is an ad-blocker or privacy extension blocking the `tpemb.com` domain.

## Branding

- **Primary palette:** custom `brand-{50…900}` blues defined in `tailwind.config.js`
- **Accent treatment:** the brand name in the navbar splits as `PayLess<To>ExperienceMore` with `To` highlighted in `text-brand-600`

## Deployment

This is a stock Next.js 14 App Router project — deploys cleanly to Vercel without configuration. Connect the GitHub repo at vercel.com and accept the defaults.

For other hosts: `npm run build` produces a standalone `.next/` directory; serve it with `npm start` behind any reverse proxy.

## License

Private project. All rights reserved.
