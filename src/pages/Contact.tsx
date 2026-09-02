import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Contact</p>
          <h1 className="font-[family-name:var(--font-display)] text-[48px] md:text-[58px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
            We're based in Lagos.<br />We respond quickly.
          </h1>
          <p className="text-[17px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-10">
            Questions about the product, enterprise inquiries, press, or just want to share feedback — we read everything.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { label: "General enquiries", value: "hello@usemitra.com" },
              { label: "Enterprise sales", value: "sales@usemitra.com" },
              { label: "Press", value: "press@usemitra.com" },
              { label: "Location", value: "Victoria Island, Lagos, Nigeria" },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)] mb-1">{c.label}</p>
                <p className="text-[15px] text-[#1B140F]">{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] p-8">
          {sent ? (
            <div className="text-center py-14">
              <div className="w-14 h-14 rounded-full bg-[rgba(201,84,44,0.1)] flex items-center justify-center mx-auto mb-4">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M5 13l6 6L21 7" stroke="#C9542C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-2">Message sent</p>
              <p className="text-[14px] text-[rgba(27,20,15,0.55)]">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1B140F] mb-1">Send us a message</h2>
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Ngozi Williams" },
                { id: "email", label: "Email", type: "email", placeholder: "ngozi@company.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-[13px] font-medium text-[#1B140F] mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,20,15,0.15)] bg-[#FAF6F0] text-[#1B140F] text-[14px] placeholder:text-[rgba(27,20,15,0.3)] focus:outline-none focus:border-[#C9542C] transition-colors"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-[13px] font-medium text-[#1B140F] mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,20,15,0.15)] bg-[#FAF6F0] text-[#1B140F] text-[14px] placeholder:text-[rgba(27,20,15,0.3)] focus:outline-none focus:border-[#C9542C] transition-colors resize-none"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 bg-[#C9542C] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#b84a24] transition-colors">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
