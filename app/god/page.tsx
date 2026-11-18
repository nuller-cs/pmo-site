import PageTitle from "@/components/PageTitle";

export const metadata = { title: "フッさんについて | PMO" };

export default function GodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="フッさんについて" sub="フー（通称：フッさん）／ 代表" />
      <div className="rounded-2xl bg-white border border-amber-200 p-8 text-center shadow-sm">
        <div className="text-8xl">🐧</div>
        <h2 className="mt-4 text-2xl font-bold text-pmo">フー（通称 フッさん）</h2>
        <p className="mt-1 text-xs text-slate-500">宇宙運営の最高責任者</p>
        <p className="mt-6 leading-9 text-left">
          超古代より宇宙を見守り続けるペンギンの神。
          会員のあいだでは親しみを込めて「フッさん」と呼ばれています。
          月曜日の仕様を決定したとされますが、本人は「会議で決まった」と述べています。
        </p>
        <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-y-2 text-left text-sm">
          <dt className="text-slate-500">好きなもの</dt><dd>氷、魚、定時退社</dd>
          <dt className="text-slate-500">苦手なもの</dt><dd>月曜の朝（自分で決めたのに）</dd>
          <dt className="text-slate-500">ご挨拶</dt><dd>「フー」</dd>
        </dl>
        <p className="mt-6 text-xs text-slate-500">取材・面会のご依頼は受け付けておりません。（ペンギンなので）</p>
      </div>
    </div>
  );
}
