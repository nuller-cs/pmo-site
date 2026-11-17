"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-6 leading-8">
        <p className="font-bold">お問い合わせありがとうございます。</p>
        <p>内容は担当ペンギンが確認します。</p>
        <p className="mt-2 text-sm text-slate-600">返信予定: 未定</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <label className="block">
        <span className="text-sm font-bold">件名</span>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block">
        <span className="text-sm font-bold">内容</span>
        <textarea
          required
          rows={6}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-pmo px-6 py-2.5 font-bold text-white hover:bg-pmo-light"
      >
        送信
      </button>
    </form>
  );
}
