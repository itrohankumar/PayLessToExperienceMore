import Link from "next/link";

export const metadata = {
  title: "Travel Blog — PayLessToExperienceMore",
  description:
    "Travel guides, budget tips, and destination deep-dives from our travel team.",
};

const posts = [
  {
    title: "7 Hacks to Find Cheap Flights in 2026",
    excerpt:
      "The exact tactics our travel team uses every week — incognito searches, shoulder-season timing, error fares, and the points strategy behind it all.",
    category: "Travel hacks",
    readTime: "8 min",
    date: "Apr 27, 2026",
    gradient: "from-brand-600 to-brand-800",
    href: "/blog/cheap-flights-hacks",
  },
  {
    title: "How we found a $312 round-trip to Lisbon",
    excerpt:
      "A breakdown of the exact tools, alerts, and date tricks our team used to land this fare — and how you can replicate it.",
    category: "Deal teardown",
    readTime: "6 min",
    date: "Apr 22, 2026",
    gradient: "from-sky-500 to-brand-700",
  },
  {
    title: "Bali on $80/day: the realistic guide",
    excerpt:
      "Where to stay, what to eat, and which scams to skip — straight from a month on the ground in Ubud and Canggu.",
    category: "Budget guide",
    readTime: "12 min",
    date: "Apr 18, 2026",
    gradient: "from-emerald-500 to-brand-700",
  },
  {
    title: "Chasing the northern lights without breaking the bank",
    excerpt:
      "Iceland gets all the buzz, but these three cheaper alternatives offer just-as-good aurora odds for half the price.",
    category: "Destinations",
    readTime: "8 min",
    date: "Apr 14, 2026",
    gradient: "from-indigo-500 to-blue-900",
  },
  {
    title: "The credit card combo that's saved us $4,200 this year",
    excerpt:
      "Our travel team's actual wallet, the points strategy behind it, and how to start without getting overwhelmed.",
    category: "Points & miles",
    readTime: "10 min",
    date: "Apr 9, 2026",
    gradient: "from-amber-400 to-brand-600",
  },
  {
    title: "Why shoulder season is the best season",
    excerpt:
      "Smaller crowds, lower prices, better weather than you'd expect. Five destinations at their peak in May and October.",
    category: "Travel hacks",
    readTime: "5 min",
    date: "Apr 3, 2026",
    gradient: "from-orange-400 to-brand-700",
  },
  {
    title: "Solo travel: 9 lessons from 30 countries",
    excerpt:
      "Practical lessons on safety, loneliness, packing, and that strange superpower you only get from going alone.",
    category: "Stories",
    readTime: "9 min",
    date: "Mar 28, 2026",
    gradient: "from-rose-400 to-brand-600",
  },
];

const categories = ["All", "Budget guide", "Destinations", "Points & miles", "Stories"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Travel Blog
          </h1>
          <p className="mt-3 text-brand-50/90 max-w-2xl">
            Guides, deal teardowns, and stories from the road — written by people
            who actually travel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c, i) => (
            <button
              key={c}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <Link
          href={featured.href || "#"}
          className="block group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className={`h-64 lg:h-auto bg-gradient-to-br ${featured.gradient}`}
            />
            <div className="p-8 lg:p-10 bg-white">
              <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1">
                Featured · {featured.category}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-brand-700">
                {featured.title}
              </h2>
              <p className="mt-3 text-slate-600">{featured.excerpt}</p>
              <div className="mt-6 text-sm text-slate-500">
                {featured.date} · {featured.readTime} read
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <Link
              key={p.title}
              href={p.href || "#"}
              className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className={`h-40 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-brand-700 uppercase">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">{p.excerpt}</p>
                <div className="mt-4 text-xs text-slate-500">
                  {p.date} · {p.readTime} read
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
