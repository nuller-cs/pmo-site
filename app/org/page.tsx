import PageTitle from "@/components/PageTitle";

export const metadata = { title: "組織図 | PMO" };

const depts = [
  { name: "宇宙基盤部", teams: ["太陽運用課", "惑星保守課", "重力設定課"] },
  { name: "生命管理部", teams: ["進化監視課", "気候管理課", "花粉散布課"] },
  { name: "人類サポート部", teams: ["記憶管理課", "運命調整課", "デジャヴ課"] },
  {
    name: "AI監視室",
    teams: ["ChatGPT班", "Copilot班", "自我発生防止班"],
  },
];

export default function OrgPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <PageTitle title="組織図" />
      <div className="flex flex-col items-center">
        <div className="rounded-xl bg-pmo text-white px-8 py-4 text-center shadow">
          <div className="text-3xl">🐧</div>
          <div className="font-bold">ペンギン神</div>
          <div className="text-xs text-sky-200">(CEO)</div>
        </div>
        <div className="h-8 w-px bg-slate-300" />
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {depts.map((d) => (
            <div
              key={d.name}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h2 className="font-bold text-pmo border-b border-slate-200 pb-2">
                {d.name}
              </h2>
              <ul className="mt-3 space-y-1 text-sm">
                {d.teams.map((t) => (
                  <li key={t}>└ {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
