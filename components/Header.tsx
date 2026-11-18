import Link from "next/link";

const links = [
  { href: "/about/", label: "教えと活動" },
  { href: "/god/", label: "フッさんについて" },
  { href: "/org/", label: "教団組織" },
  { href: "/status/", label: "宇宙のご様子" },
  { href: "/incidents/", label: "お知らせ" },
  { href: "/faq/", label: "よくある質問" },
  { href: "/careers/", label: "入会のご案内" },
  { href: "/contact/", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="bg-pmo text-white border-b-4 border-amber-300/70">
      <div className="mx-auto max-w-5xl px-4 py-4 flex flex-wrap items-center gap-x-8 gap-y-2">
        <Link href="/" className="leading-tight">
          <span className="block text-xs text-amber-200 tracking-widest">宇宙安定稼働祈念</span>
          <span className="text-xl font-bold">🐧 ペンギン運営機構</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-100">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-amber-200">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
