import Link from "next/link";

const links = [
  { href: "/status/", label: "稼働状況" },
  { href: "/about/", label: "運営機構とは" },
  { href: "/org/", label: "組織図" },
  { href: "/incidents/", label: "障害情報" },
  { href: "/faq/", label: "FAQ" },
  { href: "/god/", label: "ペンギン神" },
  { href: "/careers/", label: "採用情報" },
  { href: "/contact/", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="bg-pmo text-white">
      <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link href="/" className="font-bold text-lg">
          🐧 PMO
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-100">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-pmo-accent">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
