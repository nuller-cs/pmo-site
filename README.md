# ペンギン運営機構（PMO）公式サイト

この宇宙はペンギン運用チームによって管理されています。（ネタサイト）

- Next.js 14 (App Router) / TypeScript / Tailwind CSS
- 静的書き出し (`output: "export"`) → Vercel で 0 円運用

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ に静的ファイルを生成
```

## Vercel へのデプロイ

GitHub に push して Vercel で Import するだけ（Framework Preset: Next.js）。

## ページ構成

`/` `/status` `/about` `/org` `/incidents` `/faq` `/god` `/careers` `/contact` `/secret`（隠しページ・サイトマップ非掲載）

ネタ文言は `lib/data.ts` にまとめてあります。
