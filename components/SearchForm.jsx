"use client";

export default function SearchForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
    >
      <label className="block">
        <span className="text-xs font-semibold text-slate-500 uppercase">From</span>
        <input
          type="text"
          defaultValue="New York"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold text-slate-500 uppercase">To</span>
        <input
          type="text"
          placeholder="Anywhere"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold text-slate-500 uppercase">Depart</span>
        <input
          type="date"
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </label>
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-600 px-4 py-2.5 font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          Search Deals
        </button>
      </div>
    </form>
  );
}
