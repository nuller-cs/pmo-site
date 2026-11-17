import PageTitle from "@/components/PageTitle";

export const metadata = { title: "ペンギン運営機構とは | PMO" };

const duties = [
  "地球管理",
  "季節制御",
  "運命調整",
  "記憶管理",
  "デジャヴ発生",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="ペンギン運営機構とは" />
      <p className="leading-8">
        ペンギン運営機構は、宇宙の安定稼働を目的として、超古代より運営を続けています。
      </p>
      <h2 className="mt-8 mb-3 text-lg font-bold text-pmo">主な業務</h2>
      <ul className="space-y-2">
        {duties.map((d) => (
          <li
            key={d}
            className="rounded-lg bg-white border border-slate-200 px-4 py-3"
          >
            🐧 {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
