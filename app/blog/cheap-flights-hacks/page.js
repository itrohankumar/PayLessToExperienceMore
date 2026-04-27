import Link from "next/link";

export const metadata = {
  title: "7 Hacks to Find Cheap Flights in 2026 — PayLessToExperienceMore",
  description:
    "Seven proven tactics to find cheap flights in 2026 — from incognito searches and shoulder-season timing to error fares and award sweet spots. Updated for 2026.",
  keywords: [
    "cheap flights 2026",
    "flight deals",
    "how to find cheap flights",
    "travel hacks",
    "budget travel",
    "error fares",
    "shoulder season travel",
  ],
  alternates: {
    canonical: "/blog/cheap-flights-hacks",
  },
  openGraph: {
    title: "7 Hacks to Find Cheap Flights in 2026",
    description:
      "Proven tactics for finding cheap flights in 2026, from a team that books them every week.",
    type: "article",
    url: "/blog/cheap-flights-hacks",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Hacks to Find Cheap Flights in 2026",
    description:
      "Seven proven tactics to find cheap flights in 2026, from a team that books them every week.",
  },
};

const tips = [
  {
    emoji: "✈️",
    gradient: "from-orange-500 to-red-600",
    title: "Search in incognito mode",
    body: "Booking sites use cookies and price-shaping algorithms that quietly nudge fares upward as you re-search the same route. Open a private window (or clear your cookies between searches) and you'll often see fares drop $30–$80 on the same flight. It's the lowest-effort, highest-leverage hack on this list.",
  },
  {
    emoji: "🗓️",
    gradient: "from-blue-500 to-teal-500",
    title: "Be flexible with dates — and use the right tools",
    body: "Tuesday and Wednesday departures are typically 10–25% cheaper than Friday or Sunday. Use Google Flights' calendar view and the 'flexible dates' grid on Skyscanner to spot the cheapest day in a 30-day window. Shifting your trip by a single day is the single highest-ROI tradeoff in travel.",
  },
  {
    emoji: "🔔",
    gradient: "from-green-600 to-lime-500",
    title: "Fly shoulder season, not peak",
    body: "Shoulder season — roughly late April–May and September–early November for most of Europe — gives you smaller crowds, better weather than you'd expect, and prices that can be 40% below peak summer. The same is true for late-October Japan, May Bali, and February Caribbean.",
  },
  {
    emoji: "🛑",
    gradient: "from-rose-400 to-pink-600",
    title: "Book the right number of weeks ahead",
    body: "Domestic US flights bottom out around 1–3 months before departure. International flights generally hit their lowest price 2–8 months out. Booking too early or too late both cost you — set a price alert as soon as you know the route, and pull the trigger when the fare hits the median for that lane.",
  },
  {
    emoji: "🌍",
    gradient: "from-purple-700 to-indigo-700",
    title: "Use error fares and mistake pricing",
    body: "A handful of times each month, an airline misprices a route by 50–80%. Services like Going (formerly Scott's Cheap Flights) and Jack's Flight Club specialize in surfacing these within minutes. Book first, ask questions later — the fare often gets pulled within hours.",
  },
  {
    emoji: "💳",
    gradient: "from-yellow-400 to-amber-600",
    title: "Mix airlines and hidden-city fares carefully",
    body: "Booking two one-ways on different carriers is frequently cheaper than a round-trip on one. Hidden-city ticketing (booking A→B→C and skipping the last leg) can save you hundreds — but only on one-way trips with no checked bags, and never on your return. Skiplagged is the canonical tool here.",
  },
  {
    emoji: "🕐",
    gradient: "from-blue-900 to-blue-600",
    title: "Stack points, miles, and a good travel card",
    body: "A single mid-tier travel rewards card with a strong sign-up bonus typically yields 60,000–80,000 points — enough for a round-trip to Europe in economy or a domestic flight in business. Pair it with airline alliance award sweet spots (Avios for short-haul, Aeroplan for long-haul) and you're effectively flying for the cost of taxes.",
  },
];

const destinations = [
  { name: "Bali", emoji: "🌴", best: "April", gradient: "from-teal-400 to-green-500" },
  { name: "Dubai", emoji: "🏙️", best: "November", gradient: "from-yellow-400 to-orange-500" },
  { name: "Paris", emoji: "🗼", best: "September", gradient: "from-pink-400 to-purple-600" },
  { name: "Tokyo", emoji: "🗾", best: "March", gradient: "from-red-500 to-rose-400" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Hacks to Find Cheap Flights in 2026",
  description:
    "Seven proven tactics to find cheap flights in 2026 — from incognito searches and shoulder-season timing to error fares and award sweet spots.",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: {
    "@type": "Organization",
    name: "PayLessToExperienceMore",
  },
  publisher: {
    "@type": "Organization",
    name: "PayLessToExperienceMore",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "/blog/cheap-flights-hacks",
  },
};

export default function CheapFlightsHacksPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 text-white">
        {/* Animated airplane */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-6 left-0 w-full"
        >
          <svg
            className="animate-fly-across h-8 w-8 text-white drop-shadow-lg"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/blog" className="hover:text-white">Blog</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">Cheap Flights Hacks</li>
            </ol>
          </nav>
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/30 text-white">
            Travel hacks · 8 min read
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            7 Hacks to Find Cheap Flights in 2026
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            The exact tactics our travel team uses every week — refreshed for the
            current state of airfare in 2026.
          </p>
          <p className="mt-4 text-sm text-white/80">
            Published April 27, 2026 · By the PayLessToExperienceMore team
          </p>
        </div>
      </header>

      {/* Trending destinations */}
      <section
        aria-label="Featured destinations"
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((d) => (
            <div
              key={d.name}
              className={`rounded-2xl bg-gradient-to-br ${d.gradient} text-white p-5 shadow-md hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[140px]`}
            >
              <div className="text-3xl">{d.emoji}</div>
              <div>
                <div className="text-xl font-bold">{d.name}</div>
                <div className="text-sm text-white/90 mt-1">
                  Best in: {d.best}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-slate-700 leading-relaxed">
          Cheap flights aren't an accident. The travelers who consistently pay
          half what their seatmates paid aren't lucky — they just know where to
          look and when to click. Here are the seven hacks we lean on most, in
          rough order of effort-to-payoff.
        </p>

        <hr className="my-10 border-slate-200" />

        {tips.map((tip, i) => (
          <section
            key={tip.title}
            aria-labelledby={`tip-${i + 1}`}
            className={`mb-8 rounded-2xl bg-gradient-to-br ${tip.gradient} p-6 sm:p-8 shadow-lg`}
          >
            <div className="text-4xl mb-3" aria-hidden>
              {tip.emoji}
            </div>
            <h2
              id={`tip-${i + 1}`}
              className="text-2xl sm:text-3xl font-bold text-white scroll-mt-20"
            >
              <span className="text-white/80 mr-2">{i + 1}.</span>
              {tip.title}
            </h2>
            <p className="mt-4 text-white/95 leading-relaxed text-[1.05rem]">
              {tip.body}
            </p>
            <div className="mt-5">
              <Link
                href="/flights"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Search Flights Now
                <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* Sunrise CTA banner */}
      <section
        aria-label="Search flights now"
        className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-500 text-white"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-sm">
            Ready to Fly for Less? ✈️
          </h2>
          <p className="text-white/95 text-lg max-w-xl">
            Put these hacks to work right now — the deals page is updated daily.
          </p>
          <Link
            href="/flights"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all"
          >
            Search Flights Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <section aria-labelledby="conclusion">
          <h2 id="conclusion" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Putting it all together
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed text-[1.05rem]">
            You don't need to use all seven hacks for every trip. Pick two or
            three that fit your style — for most travelers, incognito search +
            flexible dates + a single good travel card is enough to consistently
            beat the average fare by 30%. Layer in error fares and shoulder
            season when you're feeling ambitious.
          </p>
          <div className="mt-8 rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Ready to put these to work?
              </h3>
              <p className="mt-1 text-slate-600 text-sm">
                Browse this week's hand-picked flight deals — most are already
                priced below the median.
              </p>
            </div>
            <Link
              href="/flights"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Search Flights Now →
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
