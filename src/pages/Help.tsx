import { useState } from "react";

const categories = [
  {
    title: "Getting started",
    icon: "🚀",
    articles: ["Download and install Mitra", "Connect your calendar", "Your first meeting", "Understanding your dashboard"],
  },
  {
    title: "Meeting transcription",
    icon: "🎙️",
    articles: ["How Mitra captures audio", "Speaker identification", "In-person meetings", "Improving transcription accuracy"],
  },
  {
    title: "Notes & follow-ups",
    icon: "📋",
    articles: ["Understanding your meeting summary", "Editing action items", "Sending follow-up emails", "WhatsApp export"],
  },
  {
    title: "Billing & account",
    icon: "💳",
    articles: ["How to upgrade to Pro", "Paying with Paystack or Flutterwave", "Managing your subscription", "Deleting your account"],
  },
  {
    title: "Privacy & data",
    icon: "🔒",
    articles: ["Where is my data stored?", "Deleting meeting transcripts", "Data export", "Enterprise data controls"],
  },
  {
    title: "Troubleshooting",
    icon: "🔧",
    articles: ["Mitra isn't detecting my meetings", "Audio quality issues", "Sync problems", "Reinstalling Mitra"],
  },
];

export default function Help() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#FAF6F0]">
      {/* Header */}
      <section className="bg-[#1B2A4A] py-20 px-6 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-[42px] md:text-[52px] font-bold text-[#FDF9F4] tracking-tight mb-4">
          How can we help?
        </h1>
        <p className="text-[16px] text-[rgba(253,249,244,0.6)] mb-8">Search or browse the help centre below.</p>
        <div className="max-w-[480px] mx-auto relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(27,20,15,0.35)]" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M13 13l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FDF9F4] text-[#1B140F] text-[15px] placeholder:text-[rgba(27,20,15,0.35)] focus:outline-none"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-6">
              <div className="text-[28px] mb-3">{cat.icon}</div>
              <h2 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1B140F] mb-4">{cat.title}</h2>
              <ul className="flex flex-col gap-2">
                {cat.articles.map((a) => (
                  <li key={a}>
                    <a href="#" className="text-[14px] text-[rgba(27,20,15,0.7)] hover:text-[#C9542C] transition-colors">{a}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl py-10 px-6">
          <p className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-2">Still need help?</p>
          <p className="text-[15px] text-[rgba(27,20,15,0.55)] mb-6">Our support team responds within 4 hours on business days.</p>
          <a href="/contact" className="inline-flex px-5 py-2.5 bg-[#C9542C] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#b84a24] transition-colors text-[14px]">
            Contact support
          </a>
        </div>
      </section>
    </div>
  );
}
