import Link from "next/link";

export default function DealCard({
  title,
  subtitle,
  price,
  oldPrice,
  badge,
  gradient = "from-brand-500 to-brand-700",
  cta = "Book now",
  href = "#",
  meta,
}) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <div className={`relative h-44 bg-gradient-to-br ${gradient}`}>
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 text-brand-700 text-xs font-semibold px-3 py-1">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 flex items-end p-4">
          <h3 className="text-white text-xl font-bold drop-shadow-sm">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        {subtitle && <p className="text-sm text-slate-500 mb-3">{subtitle}</p>}
        {meta && (
          <ul className="text-xs text-slate-500 mb-3 flex flex-wrap gap-x-3 gap-y-1">
            {meta.map((m) => (
              <li key={m} className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {m}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-end justify-between">
          <div>
            {oldPrice && (
              <span className="text-xs text-slate-400 line-through mr-2">
                ${oldPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-slate-900">${price}</span>
          </div>
          <Link
            href={href}
            className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
