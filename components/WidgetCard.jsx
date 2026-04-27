export default function WidgetCard({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-3 sm:p-4">
        {children}
      </div>
    </div>
  );
}
