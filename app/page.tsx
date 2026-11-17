import Link from "next/link";
import StatusCards from "@/components/StatusCards";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-pmo to-pmo-light text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <div className="text-6xl mb-4">🐧</div>
          <p className="text-sky-200 tracking-widest text-sm">
            ペンギン運営機構
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            🐧 宇宙は正常に稼働しています。
          </h1>
          <p className="mt-5 text-sky-100 max-w-2xl mx-auto">
            一部ユーザーで月曜日障害を確認しています。現在、対応予定はありません。仕様です。🐧
          </p>

          <dl className="mt-8 inline-grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-left text-sm bg-white/10 rounded-lg px-6 py-4">
            <dt className="text-sky-200">最終確認</dt>
            <dd>2026/11/17 09:00 JST</dd>
            <dt className="text-sky-200">現在の障害</dt>
            <dd>月曜日</dd>
          </dl>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/incidents/"
              className="rounded-lg bg-pmo-accent px-5 py-2.5 font-bold text-pmo hover:brightness-110"
            >
              障害情報を見る
            </Link>
            <Link
              href="/org/"
              className="rounded-lg border border-white/50 px-5 py-2.5 hover:bg-white/10"
            >
              組織図を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-xl font-bold text-pmo mb-4">現在の稼働状況</h2>
        <StatusCards />
        <p className="mt-4 text-sm">
          <Link href="/status/" className="text-sky-700 underline">
            詳細な稼働状況はこちら
          </Link>
        </p>
      </section>
    </>
  );
}
