import PageTitle from "@/components/PageTitle";

export const metadata = { title: "ペンギン神 | PMO" };

export default function GodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="ペンギン神" sub="Chief Executive Officer" />
      <div className="rounded-2xl bg-white border border-slate-200 p-8 text-center shadow-sm">
        <div className="text-7xl">🐧</div>
        <h2 className="mt-4 text-xl font-bold text-pmo">ペンギン神（CEO）</h2>
        <p className="mt-4 leading-8 text-slate-700">
          宇宙の全工程を統括する最高責任者。
          <br />
          月曜日の仕様を決定した張本人とされるが、本人は「会議で決まった」と述べている。
        </p>
        <p className="mt-4 text-sm text-slate-500">
          取材のご依頼は受け付けておりません。（ペンギンなので）
        </p>
      </div>
    </div>
  );
}
