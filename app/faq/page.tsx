import PageTitle from "@/components/PageTitle";
import { faqs } from "@/lib/data";

export const metadata = { title: "FAQ | PMO" };

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageTitle title="よくある質問" />
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <summary className="cursor-pointer font-bold text-pmo">
              Q. {f.q}
            </summary>
            <p className="mt-3 whitespace-pre-line leading-7">A. {f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
