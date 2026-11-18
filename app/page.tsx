import Link from "next/link";
import StatusCards from "@/components/StatusCards";
import { teachings, testimonials, events } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-pmo via-pmo-light to-[#2b4f86] text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <div className="text-7xl mb-6">🐧</div>
          <p className="text-amber-200 tracking-[0.4em] text-xs">PENGUIN MANAGEMENT ORGANIZATION</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-snug">
            あなたは、
            <br className="md:hidden" />
            見守られています。
          </h1>
          <p className="mt-6 text-sky-100 leading-8 max-w-2xl mx-auto">
            朝起きられない日も、名前が思い出せない日も、月曜日も。
            <br />
            それらはすべて、宇宙の安定稼働のため。
            <br />
            フー（通称フッさん）は、今日もあなたを見守っています。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/careers/" className="rounded-full bg-amber-300 px-8 py-3 font-bold text-pmo hover:brightness-105">
              入会のご案内（無料）
            </Link>
            <Link href="/about/" className="rounded-full border border-white/60 px-8 py-3 hover:bg-white/10">
              教えを知る
            </Link>
          </div>
          <p className="mt-6 text-xs text-sky-200">
            宇宙は正常に稼働しています（最終確認 2026/11/17 09:00 JST）　現在の障害：月曜日
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-pmo">こんなお悩みはありませんか？</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm">
          {[
            "月曜日が来るたびに気持ちが沈む",
            "人の名前がどうしても出てこない",
            "ダイエットを始めた翌日に暴食してしまう",
            "なぜか財布をなくす・恋人ができない",
          ].map((t) => (
            <li key={t} className="rounded-xl border border-amber-200 bg-white px-5 py-4 shadow-sm">
              ☑ {t}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center leading-8">
          それは、あなたのせいではありません。
          <br />
          <strong className="text-pmo">すべて「仕様」です。</strong>
        </p>
      </section>

      <section className="bg-white border-y border-amber-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-pmo">フッさんの四つの教え</h2>
          <div className="mt-8 space-y-4">
            {teachings.map((t) => (
              <div key={t.title} className="rounded-xl bg-[#fbf8f1] border border-amber-100 p-5">
                <h3 className="font-bold text-pmo">{t.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-pmo">会員の声</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
              <blockquote className="text-sm leading-7">「{t.body}」</blockquote>
              <figcaption className="mt-3 text-xs text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">※ 個人の感想です。効果には宇宙規模の個人差があります。</p>
      </section>

      <section className="bg-white border-y border-amber-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-pmo">集会のご案内</h2>
          <ul className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
            {events.map((e) => (
              <li key={e.name} className="p-4 flex flex-wrap gap-x-6 gap-y-1">
                <span className="w-36 text-sm text-amber-700">{e.date}</span>
                <span className="font-bold text-pmo">{e.name}</span>
                <span className="text-sm text-slate-500">{e.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-xl font-bold text-pmo mb-4 text-center">現在の宇宙のご様子</h2>
        <StatusCards />
      </section>
    </>
  );
}
