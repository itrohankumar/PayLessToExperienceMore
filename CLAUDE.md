# CLAUDE.md

Purpose, conventions, and session log for Claude Code working on this project.
This file is auto-loaded as context at the start of every Claude Code session — keep it tight and current.

---

## 1. Purpose

**PayLessToExperienceMore** is a travel deals affiliate website. It surfaces hand-picked flight and hotel deals and earns revenue through Travelpayouts affiliate widgets (`tpemb.com`).

**Goal:** provide a clean, modern, mobile-responsive site that drives clicks into the affiliate widgets — ideally users finding genuine deals via the curated content and converting through the widgets.

**Non-goals:**
- Not building a real booking engine. Search forms outside the affiliate widgets are decorative.
- Not a CMS-backed blog. Posts are hand-authored React components.
- Not multi-tenant. Single-site project.

---

## 2. Tech stack & conventions

- **Framework:** Next.js 14 (App Router, JavaScript — no TypeScript)
- **Styling:** Tailwind CSS 3 with a custom `brand-{50…900}` blue palette in `tailwind.config.js`
- **Path alias:** `@/*` resolves to project root (`jsconfig.json`)
- **Components:** server components by default; mark `"use client"` only when needed (forms with `onSubmit`, `useEffect`, `useState`)
- **Form handlers:** any `onSubmit` lives in a small dedicated client component (`SearchForm`, `SubscribeForm`) so the page itself can stay a server component
- **No comments in code** unless WHY is non-obvious. Identifiers should carry the meaning.
- **Brand wordmark:** in the navbar, `PayLess<To>ExperienceMore` with `To` wrapped in `<span className="text-brand-600">`

---

## 3. Travelpayouts widget pattern

Travelpayouts widgets are `<script async src="https://tpemb.com/content?...">` loaders that inject HTML at the script's DOM location. Since `next/script` doesn't preserve inline placement, **always render them via `components/TravelpayoutsWidget.jsx`**, which is a `"use client"` component that imperatively appends the script tag inside a ref'd `<div>` on mount.

When adding a new widget:
1. Wrap in `<WidgetCard title="..." subtitle="...">` for consistent styling
2. Pass the full `tpemb.com` URL as the `src` prop
3. Test in a non-blocked browser — ad-blockers commonly hide `tpemb.com`

Active widgets:
- Homepage (`app/page.js`) — flight deals, `promo_id=4497`
- `/flights` — flight search, `promo_id=2082`
- `/hotels` — hotel + flight search, `promo_id=3414`

The `shmarker=722999` and `trs=523271` query params are the affiliate IDs — preserve them on any new widget URLs.

---

## 4. Visual / UX patterns

- **Page heroes:** gradient backgrounds (`from-brand-700 to-brand-500` or themed variants), white text, optional decorative SVG
- **Cards:** rounded-2xl, white bg, slate-100 border, hover:shadow-lg, group hover for interior color shifts
- **CTAs:** primary = `bg-brand-600 hover:bg-brand-700` rounded-full; on colorful gradients, switch to `bg-white text-slate-900` for contrast
- **Mobile:** every page is responsive; navbar collapses to hamburger via `useState` toggle
- **The blog post `/blog/cheap-flights-hacks`** has heavy visual treatment (animated airplane, gradient tip cards per emoji theme, sunrise CTA banner) — use it as the reference for "marketing landing page" styling vs. the cleaner deal pages

---

## 5. SEO baseline

Every route exports `metadata` (title, description). The blog post additionally:
- Sets `keywords`, `alternates.canonical`, `openGraph`, `twitter` meta
- Inlines a JSON-LD `Article` schema via `<script type="application/ld+json">`
- Uses semantic HTML: single `<h1>`, `<h2>` per tip, `<article>`, `<header>`, breadcrumb `<nav>`

When adding new posts, follow the same pattern.

---

## 6. Session log

Reverse chronological. Append a new entry per session.

### 2026-04-27 — Initial build + branding rename

- Bootstrapped Next.js 14 + Tailwind manually (no `create-next-app`); installed `next 14.2.15`, `react 18`, `tailwindcss 3`, `autoprefixer`, `postcss`
- Built shared layout: `Navbar` (sticky, mobile hamburger), `Footer` (4-col, newsletter), `DealCard`
- Built homepage with hero, decorative search form, stats strip, featured deals (3 cards), trending destinations (4 cards), value props (3), CTA banner
- Built `/flights` and `/hotels` pages — gradient hero, filter chips, 6 deal cards each
- Built `/blog` index — featured post + 5-card grid with category filters
- Wired three Travelpayouts widgets via `TravelpayoutsWidget` + `WidgetCard`:
  - Homepage flight deals (`promo_id=4497`)
  - `/flights` search (`promo_id=2082`)
  - `/hotels` search w/ `show_hotels=true` (`promo_id=3414`)
- Created sample blog post `/blog/cheap-flights-hacks`:
  - 7 tips, each with a "Search Flights Now" CTA → `/flights`
  - Full SEO metadata + JSON-LD Article schema
  - Visual layers added on top: deep blue-to-purple hero with animated white airplane SVG (16s `fly-across` keyframe in `globals.css`, respects `prefers-reduced-motion`), 4-card destination row (Bali/Dubai/Paris/Tokyo with hover lift), gradient cards per tip (each with custom emoji + color theme), sunrise gradient bottom banner with yellow CTA
- Renamed brand from `PayLessButExperienceMore` → `PayLessToExperienceMore` (14 references across 8 files via sed); navbar accent moved from "But" to "To"
- Renamed project directory accordingly
- Initialized git repo, pushed to GitHub remote

---

## 7. Open TODOs / next moves

- [ ] Real blog post pages for the other 6 entries on `/blog` (currently `href="#"`)
- [ ] Replace decorative homepage search form with a real Travelpayouts search widget, or wire it to the affiliate destination
- [ ] Add an `/about` and `/contact` page (footer links currently go to `#`)
- [ ] Hook the newsletter forms (`SubscribeForm`, `Footer`) up to a real provider (ConvertKit, Mailchimp, or Resend)
- [ ] Add `next/image` + real photography for hero/destinations (currently CSS gradients)
- [ ] Add `robots.txt`, `sitemap.xml`, and `next-sitemap` for proper indexing
- [ ] Add basic analytics (Plausible / GA4)
- [ ] Set up Vercel deployment with the connected GitHub repo
- [ ] Consider introducing a `lib/posts.js` or MDX-based blog source if more posts are added

When picking up work, scan this list and ask which item to tackle, or propose the highest-leverage one.
