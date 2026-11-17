export const metadata = {
  title: "🐧",
  robots: { index: false, follow: false },
};

export default function SecretPage() {
  return (
    <div className="bg-black text-green-400 min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center leading-9">
        <div className="text-7xl mb-6">🐧</div>
        <p className="text-xl font-bold">おめでとうございます。</p>
        <p className="mt-4">あなたは真実に近づきました。</p>
        <p className="mt-4">
          しかしこれ以上の情報は
          <br />
          公開できません。
        </p>
        <p className="mt-6 font-bold text-red-400">
          監視対象に追加します。
        </p>
      </div>
    </div>
  );
}
