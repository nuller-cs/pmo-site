import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "お問い合わせ | PMO" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <PageTitle title="お問い合わせ" />
      <ContactForm />
      <p className="mt-6 text-xs text-slate-500">
        ※ 送信内容はどこにも送信されません（サーバーがないため）。
      </p>
    </div>
  );
}
