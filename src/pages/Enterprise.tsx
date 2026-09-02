import { useState } from "react";
import CTABand from "../components/CTABand";

export default function Enterprise() {
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Enterprise</p>
          <h1 className="font-[family-name:var(--font-display)] text-[48px] md:text-[58px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
            Built for teams that run Africa's biggest decisions.
          </h1>
          <p className="text-[17px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-10">
            Admin controls, local invoicing, dedicated support, and security posture that meets the bar for financial services, telecoms, and enterprise organisations.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {[
              { title: "Admin dashboard", desc: "Add, remove, and manage seats. Set permissions and review usage across your team." },
              { title: "SSO & SAML", desc: "Connect your identity provider — Okta, Azure AD, Google Workspace — and manage access centrally." },
              { title: "Local invoicing", desc: "Receive invoices in Naira, Cedis, Rand, or Shillings. Payable via Paystack, Flutterwave, or bank transfer." },
              { title: "Dedicated support", desc: "Named account manager, SLA-backed response times, and onboarding assistance for your team." },
              { title: "Data retention controls", desc: "Set custom retention periods. Delete any meeting data on demand. Full audit log." },
              { title: "Security posture", desc: "End-to-end encryption, SOC 2 Type II (in progress), and transparent sub-processor disclosure." },
            ].map((f) => (
              <div key={f.title} className="bg-[#FDF9F4] rounded-2xl p-5 border border-[rgba(27,20,15,0.08)]">
                <h3 className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[#1B140F] mb-1.5">{f.title}</h3>
                <p className="text-[13px] text-[rgba(27,20,15,0.6)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] p-8 sticky top-24">
          <h2 className="font-[family-name:var(--font-display)] text-[24px] font-bold text-[#1B140F] mb-6">Talk to sales</h2>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,84,44,0.1)] flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L19 7" stroke="#C9542C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-semibold text-[#1B140F]">Message received</p>
              <p className="text-[14px] text-[rgba(27,20,15,0.55)] mt-1">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { id: "name", label: "Your name", type: "text", placeholder: "Amaka Okafor" },
                { id: "email", label: "Work email", type: "email", placeholder: "amaka@company.com" },
                { id: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
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
                <label className="block text-[13px] font-medium text-[#1B140F] mb-1.5">Team size</label>
                <select
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,20,15,0.15)] bg-[#FAF6F0] text-[#1B140F] text-[14px] focus:outline-none focus:border-[#C9542C] transition-colors"
                  required
                >
                  <option value="">Select size</option>
                  <option>10–50</option>
                  <option>50–200</option>
                  <option>200–1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#1B140F] mb-1.5">What are you looking for?</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your team's needs..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,20,15,0.15)] bg-[#FAF6F0] text-[#1B140F] text-[14px] placeholder:text-[rgba(27,20,15,0.3)] focus:outline-none focus:border-[#C9542C] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#C9542C] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#b84a24] transition-colors mt-1"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
