import PageTitle from "@/components/PageTitle";
import { teachings } from "@/lib/data";

export const metadata = { title: "教えと活動 | PMO" };

const duties = ["地球管理", "季節制御", "運命調整", "記憶管理", "デジャヴ発生"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="教えと活動" sub="ペンギン運営機構の理念" />
      <p className="leading-9">
        ペンギン運営機構は、宇宙の安定稼働を祈念し、超古代よりフー（通称フッさん）のもとで活動を続けています。
        私たちは、日々の小さな不運や不便を「運営上の都合」として受け止め、穏やかに暮らすことを目指します。
      </p>
      <h2 className="mt-10 mb-3 text-lg font-bold text-pmo">主な活動</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {duties.map((d) => (
          <li key={d} className="rounded-lg bg-white border border-amber-200 px-4 py-3">🐧 {d}</li>
        ))}
      </ul>
      <h2 className="mt-10 mb-3 text-lg font-bold text-pmo">教え</h2>
      <div className="space-y-3">
        {teachings.map((t) => (
          <div key={t.title} className="rounded-xl bg-white border border-slate-200 p-4">
            <h3 className="font-bold text-pmo">{t.title}</h3>
            <p className="mt-1 text-sm leading-7">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
