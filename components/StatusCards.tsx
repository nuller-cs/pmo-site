import { statusCards } from "@/lib/data";

const tone = {
  ok: "border-emerald-300 bg-emerald-50",
  warn: "border-amber-300 bg-amber-50",
  error: "border-red-300 bg-red-50",
} as const;

export default function StatusCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statusCards.map((c) => (
        <div
          key={c.name}
          className={`rounded-xl border p-5 shadow-sm ${tone[c.tone]}`}
        >
          <div className="text-sm text-slate-500">{c.name}</div>
          <div className="mt-2 font-bold text-slate-800">{c.value}</div>
        </div>
      ))}
    </div>
  );
}
