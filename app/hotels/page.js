import DealCard from "@/components/DealCard";
import WidgetCard from "@/components/WidgetCard";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

export const metadata = {
  title: "Hotel Deals — PayLessToExperienceMore",
  description:
    "Boutique stays, all-inclusive resorts, and city escapes at exclusive rates.",
};

const hotels = [
  {
    title: "Hotel Tivoli",
    subtitle: "Lisbon, Portugal · 4★",
    price: 89,
    oldPrice: 165,
    badge: "Save 46%",
    gradient: "from-sky-500 to-brand-700",
    meta: ["Free breakfast", "Rooftop pool"],
  },
  {
    title: "Aman Villa",
    subtitle: "Ubud, Bali · 5★",
    price: 220,
    oldPrice: 410,
    badge: "Editor's pick",
    gradient: "from-emerald-500 to-brand-700",
    meta: ["Private pool", "Spa credit"],
  },
  {
    title: "Ion Adventure",
    subtitle: "Þingvellir, Iceland · 4★",
    price: 178,
    oldPrice: 295,
    gradient: "from-indigo-500 to-blue-900",
    meta: ["Northern lights", "Geothermal spa"],
  },
  {
    title: "Park Hyatt Tokyo",
    subtitle: "Shinjuku, Japan · 5★",
    price: 312,
    oldPrice: 540,
    badge: "Limited",
    gradient: "from-rose-400 to-brand-600",
    meta: ["City views", "Club lounge access"],
  },
  {
    title: "Hotel Casa Bonay",
    subtitle: "Barcelona, Spain · 4★",
    price: 142,
    oldPrice: 240,
    gradient: "from-amber-400 to-brand-600",
    meta: ["Boutique", "Walk to La Rambla"],
  },
  {
    title: "One&Only Cape Town",
    subtitle: "V&A Waterfront · 5★",
    price: 389,
    oldPrice: 690,
    badge: "Save 44%",
    gradient: "from-emerald-400 to-brand-700",
    meta: ["Marina view", "Spa included"],
  },
];

const types = ["All", "Boutique", "All-inclusive", "Family-friendly", "Adults only"];

export default function HotelsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-600 to-brand-400 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hotel Deals
          </h1>
          <p className="mt-3 text-brand-50/90 max-w-2xl">
            From boutique city stays to far-flung resorts — exclusive rates
            negotiated by our team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <WidgetCard
          title="Search Hotels"
          subtitle="Compare rates across booking sites and lock in the lowest price."
        >
          <TravelpayoutsWidget src="https://tpemb.com/content?currency=usd&trs=523271&shmarker=722999&locale=en&stops=any&show_hotels=true&powered_by=true&border_radius=0&plain=true&color_button=%2300A991&color_button_text=%23ffffff&promo_id=3414&campaign_id=111" />
        </WidgetCard>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((t, i) => (
            <button
              key={t}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((d) => (
            <DealCard key={d.title} {...d} cta="View hotel" />
          ))}
        </div>
      </section>
    </>
  );
}
