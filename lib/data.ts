export const incidents = [
  {
    id: "PMO-2026-001",
    title: "月曜日",
    scope: "全世界",
    cause: "仕様",
    status: "対応予定なし",
    level: "info",
  },
  {
    id: "PMO-2026-002",
    title: "人の名前が出てこない",
    scope: "30歳以上",
    cause: "記憶管理課にて調査中",
    status: "調査中",
    level: "warn",
  },
  {
    id: "PMO-2026-003",
    title: "ダイエット開始翌日の暴食",
    scope: "全ユーザー",
    cause: "意志力モジュール不足",
    status: "恒久対応は未定",
    level: "error",
  },
] as const;

export const faqs = [
  {
    q: "物忘れしました",
    a: "記憶管理課にて再インデックス処理を実施しております。\n数秒お待ちください。",
  },
  {
    q: "デジャヴはなぜ起きるのですか？",
    a: "バックアップ復元作業によるものです。",
  },
  { q: "なぜ月曜日があるのですか？", a: "仕様です。" },
  {
    q: "恋人ができません",
    a: "運命調整課が対応中です。\n現在 4,231,992 人待ちです。",
  },
  {
    q: "ペンギンアレルギーはありますか？",
    a: "運営上の都合により実装されておりません。",
  },
];

export const statusCards = [
  { name: "地球", value: "✅ 稼働中", tone: "ok" },
  { name: "月", value: "✅ 軌道正常", tone: "ok" },
  { name: "人類", value: "⚠ 一部ユーザーでやる気低下", tone: "warn" },
  { name: "恋愛イベント", value: "❌ 未発生", tone: "error" },
] as const;

export const jobs = [
  {
    name: "記憶管理課",
    desc: "ユーザーが「何を取りに来たんだっけ？」となった際のサポート",
  },
  {
    name: "運命調整課",
    desc: "偶然の再会／運命的な出会い／財布紛失イベント　などの実施",
  },
];
