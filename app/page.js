import Link from "next/link";
import DealCard from "@/components/DealCard";
import SearchForm from "@/components/SearchForm";
import SubscribeForm from "@/components/SubscribeForm";
import WidgetCard from "@/components/WidgetCard";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

const featuredDeals = [
  {
    title: "Lisbon, Portugal",
    subtitle: "5-night stay + flights from NYC",
    price: 689,
    oldPrice: 1120,
    badge: "Save 38%",
    gradient: "from-sky-500 to-brand-700",
    meta: ["Direct flights", "4★ hotel", "Apr–Jun"],
  },
  {
    title: "Bali, Indonesia",
    subtitle: "7 nights overwater bungalow",
    price: 1199,
    oldPrice: 2050,
    badge: "Editor's pick",
    gradient: "from-cyan-500 to-blue-700",
    meta: ["Breakfast included", "Free spa day"],
  },
  {
    title: "Reykjavík, Iceland",
    subtitle: "Northern lights + glacier tour",
    price: 949,
    oldPrice: 1399,
    badge: "Limited",
    gradient: "from-indigo-500 to-blue-900",
    meta: ["3 nights", "Tour included"],
  },
];

const destinations = [
  { name: "Tokyo", price: "from $612", gradient: "from-rose-400 to-brand-600" },
  { name: "Barcelona", price: "from $389", gradient: "from-amber-400 to-brand-600" },
  { name: "Cape Town", price: "from $749", gradient: "from-emerald-400 to-brand-700" },
  { name: "Mexico City", price: "from $229", gradient: "from-orange-400 to-brand-700" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/30">
              ✈️ New deals dropped today
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Pay less.<br />
              <span className="text-brand-100">Experience more.</span>
            </h1>
            <p className="mt-5 text-lg text-brand-50/90 max-w-xl">
              Hand-picked flight and hotel deals from around the world — saving
              you up to 60% on your next adventure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/flights"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50 transition-colors"
              >
                Browse Flights
              </Link>
              <Link
                href="/hotels"
                className="inline-flex items-center rounded-full bg-brand-800/40 ring-1 ring-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800/60 transition-colors"
              >
                Browse Hotels
              </Link>
            </div>
          </div>

          {/* Search card */}
          <div className="mt-12 rounded-2xl bg-white p-4 sm:p-5 shadow-xl text-slate-900 max-w-4xl">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: "60%", label: "Avg. savings" },
            { stat: "1.2M+", label: "Happy travelers" },
            { stat: "180+", label: "Destinations" },
            { stat: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-brand-700">{s.stat}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Travelpayouts flight widget */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <WidgetCard
          title="Live Flight Deals"
          subtitle="Real-time fares from our partner network — book directly with the airline."
        >
          <TravelpayoutsWidget src="https://tpemb.com/content?currency=USD&trs=523271&shmarker=722999&locale=en&category=4&amount=3&powered_by=true&campaign_id=137&promo_id=4497" />
        </WidgetCard>
      </section>

      {/* Featured deals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Deals</h2>
            <p className="mt-2 text-slate-600">
              Our team's favorite picks this week — gone when they're gone.
            </p>
          </div>
          <Link
            href="/flights"
            className="hidden sm:inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDeals.map((d) => (
            <DealCard key={d.title} {...d} />
          ))}
        </div>
      </section>

      {/* Top destinations */}
      <section className="bg-brand-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Trending Destinations</h2>
          <p className="mt-2 text-slate-600">
            Where everyone is going right now.
          </p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((d) => (
              <Link
                key={d.name}
                href="/flights"
                className={`group relative h-40 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-br ${d.gradient} text-white p-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                  Flights
                </div>
                <div>
                  <div className="text-xl font-bold">{d.name}</div>
                  <div className="text-sm opacity-90">{d.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real deals, no fluff",
              body: "Every offer is verified by humans. If it's listed, it's bookable at the price you see.",
            },
            {
              title: "Lowest price guarantee",
              body: "Find it cheaper within 24 hours? We'll refund the difference, no questions asked.",
            },
            {
              title: "Travel concierge",
              body: "Free trip-planning help from our travel team — itineraries, swaps, and extras.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 p-6 hover:border-brand-200 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center font-bold mb-4">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Get tomorrow's deals tonight.
            </h3>
            <p className="mt-2 text-brand-50/90">
              Join 250k+ travelers getting hand-picked deals before they go live.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </section>
    </>
  );
}
