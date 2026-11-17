export default function PageTitle({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-8 border-b border-slate-200 pb-4">
      <h1 className="text-2xl md:text-3xl font-bold text-pmo">{title}</h1>
      {sub && <p className="mt-2 text-slate-500 text-sm">{sub}</p>}
    </div>
  );
}
