import PageTitle from "@/components/PageTitle";
import { incidents } from "@/lib/data";

export const metadata = { title: "お知らせ | PMO" };

const badge = {
  info: "bg-sky-100 text-sky-800",
  warn: "bg-amber-100 text-amber-800",
  error: "bg-red-100 text-red-800",
} as const;

export default function IncidentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="お知らせ（障害情報）" sub="現在、試練として確認されている事象の一覧です。" />
      <ul className="space-y-4">
        {incidents.map((i) => (
          <li
            key={i.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm text-slate-500">{i.id}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${badge[i.level]}`}
              >
                {i.status}
              </span>
            </div>
            <h2 className="mt-2 text-lg font-bold text-pmo">{i.title}</h2>
            <dl className="mt-3 grid grid-cols-[5rem_1fr] gap-y-1 text-sm">
              <dt className="text-slate-500">影響範囲</dt>
              <dd>{i.scope}</dd>
              <dt className="text-slate-500">原因</dt>
              <dd>{i.cause}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
