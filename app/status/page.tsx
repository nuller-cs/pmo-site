import PageTitle from "@/components/PageTitle";
import StatusCards from "@/components/StatusCards";

export const metadata = { title: "宇宙稼働状況 | PMO" };

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <PageTitle
        title="宇宙稼働状況"
        sub="最終確認: 2026/11/17 09:00 JST"
      />
      <StatusCards />
      <p className="mt-6 text-sm text-slate-500">
        ※ 稼働状況は担当ペンギンが目視で確認しています。
      </p>
    </div>
  );
}
