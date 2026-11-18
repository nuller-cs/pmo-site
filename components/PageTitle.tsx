export default function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      <div className="text-amber-500 text-sm tracking-[0.3em]">— 🐧 —</div>
      <h1 className="mt-2 text-2xl md:text-3xl font-bold text-pmo">{title}</h1>
      {sub && <p className="mt-3 text-slate-500 text-sm">{sub}</p>}
    </div>
  );
}
