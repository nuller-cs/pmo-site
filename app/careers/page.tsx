import PageTitle from "@/components/PageTitle";
import { jobs } from "@/lib/data";

export const metadata = { title: "入会のご案内 | PMO" };

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="入会のご案内" sub="あなたも、見守る側になりませんか？（ペンギン限定の職員募集）" />
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
        <h2 className="font-bold">入会条件</h2>
        <p className="mt-2 text-lg">ペンギンであること</p>
        <p className="mt-2 text-sm text-sky-200">会費0円・壺なし・寄付なし。一般の方は見守られるだけで十分です。</p>
      </div>
    </div>
  );
}
