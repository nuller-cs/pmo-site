import PageTitle from "@/components/PageTitle";
import { jobs } from "@/lib/data";

export const metadata = { title: "採用情報 | PMO" };

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="採用情報" sub="募集職種" />
      <div className="space-y-4">
        {jobs.map((j) => (
          <div
            key={j.name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-pmo">{j.name}</h2>
            <p className="mt-1 text-xs text-slate-500">仕事内容</p>
            <p className="mt-1 leading-7">{j.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl bg-pmo text-white p-5">
        <h2 className="font-bold">応募条件</h2>
        <p className="mt-2 text-lg">ペンギンであること</p>
      </div>
    </div>
  );
}
