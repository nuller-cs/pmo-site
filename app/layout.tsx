import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ペンギン運営機構（PMO）｜フッさんの教えに基づく宇宙運営",
  description: "あなたは、見守られています。フー（通称フッさん）のもと、宇宙の安定稼働を祈念する団体です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-serif min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
