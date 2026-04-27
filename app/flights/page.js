import DealCard from "@/components/DealCard";
import WidgetCard from "@/components/WidgetCard";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

export const metadata = {
  title: "Flight Deals — PayLessToExperienceMore",
  description:
    "Cheap flights, business class deals, and error fares — updated daily.",
};

const flights = [
  {
    title: "NYC → Lisbon",
    subtitle: "TAP Air Portugal · Nonstop · 7h 10m",
    price: 312,
    oldPrice: 580,
    badge: "Save 46%",
    gradient: "from-sky-500 to-brand-700",
    meta: ["May 6 – May 13", "Round-trip"],
  },
  {
    title: "LAX → Tokyo",
    subtitle: "ANA · Nonstop · 11h 45m",
    price: 612,
    oldPrice: 980,
    badge: "Hot",
    gradient: "from-rose-400 to-brand-600",
    meta: ["Jun 2 – Jun 14", "Round-trip"],
  },
  {
    title: "MIA → Mexico City",
    subtitle: "Aeromexico · Nonstop · 3h 50m",
    price: 189,
    oldPrice: 320,
    gradient: "from-orange-400 to-brand-700",
    meta: ["Apr 30 – May 5", "Round-trip"],
  },
  {
    title: "ORD → Reykjavík",
    subtitle: "Icelandair · Nonstop · 6h 25m",
    price: 398,
    oldPrice: 720,
    badge: "Northern lights",
    gradient: "from-indigo-500 to-blue-900",
    meta: ["Sep 10 – Sep 17", "Round-trip"],
  },
  {
    title: "SFO → Barcelona",
    subtitle: "Iberia · 1 stop · 14h 30m",
    price: 489,
    oldPrice: 860,
    gradient: "from-amber-400 to-brand-600",
    meta: ["May 18 – May 28", "Round-trip"],
  },
  {
    title: "ATL → Cape Town",
    subtitle: "Delta + KLM · 1 stop · 19h",
    price: 749,
    oldPrice: 1310,
    badge: "Bucket list",
    gradient: "from-emerald-400 to-brand-700",
    meta: ["Aug 5 – Aug 18", "Round-trip"],
  },
];

const filters = ["All", "Under $300", "Nonstop", "Round-trip", "Business class"];

export default function FlightsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Flight Deals
          </h1>
          <p className="mt-3 text-brand-50/90 max-w-2xl">
            Hand-picked airfare from major US gateways. Mistake fares, sale
            prices, and award sweet spots — all in one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <WidgetCard
          title="Search Flights"
          subtitle="Compare hundreds of airlines and agencies in one search."
        >
          <TravelpayoutsWidget src="https://tpemb.com/content?trs=523271&shmarker=722999&locale=en&width=100&height=100&powered_by=true&campaign_id=10&promo_id=2082" />
        </WidgetCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((d) => (
            <DealCard key={d.title} {...d} cta="View flight" />
          ))}
        </div>
      </section>
    </>
  );
}
