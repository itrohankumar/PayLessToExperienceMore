"use client";

export default function SubscribeForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full md:w-auto gap-2"
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 md:w-72 rounded-full bg-white/95 text-slate-900 px-5 py-3 outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
      >
        Subscribe
      </button>
    </form>
  );
}
