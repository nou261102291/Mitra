import { useState } from "react";
import CTABand from "../../components/CTABand";
import ChatIllustration from "../../components/illustrations/ChatIllustration";

const SCOPE_CHIPS = [
  { id: "during", label: "During a meeting" },
  { id: "folder", label: "In a folder" },
  { id: "all",    label: "Across all meetings" },
];

const DEMOS: Record<string, { query: string; lang: string; result: React.ReactNode }[]> = {
  during: [
    {
      query: "make we push am to Q1",
      lang: "Nigerian Pidgin",
      result: (
        <div className="flex flex-col gap-3">
          <ResultRow label="Decision" value="Abuja expansion pushed to Q1 2025" tag="confirmed" />
          <ResultRow label="Owner" value="Emeka Obi (CFO)" />
          <ResultRow label="From" value="Series A Update Call · 14 Nov · 38 min in" />
          <p className="text-[12px] text-[rgba(27,20,15,0.45)] mt-1 italic">Mitra understood "make we push am" as a collective agreement to defer — not a tentative suggestion.</p>
        </div>
      ),
    },
    {
      query: "wetin be the oga's final decision on the budget",
      lang: "Nigerian Pidgin",
      result: (
        <div className="flex flex-col gap-3">
          <ResultRow label="Final decision" value="₦18M approved for Q1 expansion — non-negotiable per MD" tag="final" />
          <ResultRow label="Said by" value="Chukwuemeka Okonkwo (MD) · timestamp 22:14" />
          <ResultRow label="Meeting" value="Budget Review · 8 Nov · Zoom" />
          <p className="text-[12px] text-[rgba(27,20,15,0.45)] mt-1 italic">"Oga" identified as MD Okonkwo — Mitra maps role shorthand from context.</p>
        </div>
      ),
    },
  ],
  folder: [
    {
      query: "abeg confirm if the PO don sign",
      lang: "Nigerian Pidgin",
      result: (
        <div className="flex flex-col gap-3">
          <ResultRow label="Status" value="PO #2024-118 signed — confirmed by Procurement" tag="done" />
          <ResultRow label="Confirmed by" value="Adaeze Nwosu · Procurement lead" />
          <ResultRow label="Mentioned in" value="Vendor Onboarding Call · 6 Nov · 14 min in" />
          <p className="text-[12px] text-[rgba(27,20,15,0.45)] mt-1 italic">"Don sign" parsed as completed past action — status marked closed.</p>
        </div>
      ),
    },
    {
      query: "dem say yes to the pilot or dem still dey think?",
      lang: "Nigerian Pidgin",
      result: (
        <div className="flex flex-col gap-3">
          <ResultRow label="Decision" value="Pilot approved — Interswitch confirmed verbal yes" tag="confirmed" />
          <ResultRow label="Next step" value="Formal sign-off from Head of Digital · Due Nov 20" tag="open" />
          <ResultRow label="From" value="BD Sync · Amara Osei · 12 Nov" />
          <p className="text-[12px] text-[rgba(27,20,15,0.45)] mt-1 italic">Mitra distinguished the verbal confirmation from the pending formal step.</p>
        </div>
      ),
    },
  ],
  all: [
    {
      query: "find me everywhere Kofi raised concerns — any meeting",
      lang: "English (cross-meeting search)",
      result: (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold text-[rgba(27,20,15,0.5)] uppercase tracking-wide">3 flagged moments across 2 months</p>
          <ResultRow label="Nov 14" value="GTM timeline concern — unresolved · Series A Update Call" tag="open" />
          <ResultRow label="Oct 28" value="Runway burn rate questioned · Investor Check-in" tag="resolved" />
          <ResultRow label="Sep 15" value="Market sizing methodology challenged · Deck Review" tag="resolved" />
        </div>
      ),
    },
    {
      query: "which action items from Q3 never got done?",
      lang: "English (cross-meeting search)",
      result: (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-semibold text-[rgba(27,20,15,0.5)] uppercase tracking-wide">4 overdue items — Q3 2024</p>
          <ResultRow label="Aug 2" value="Yewande → Updated roadmap doc · never sent" tag="overdue" />
          <ResultRow label="Aug 19" value="Emeka → Board memo draft · still pending" tag="overdue" />
          <ResultRow label="Sep 3" value="Tunde → Signed NDA to Flutterwave · no confirmation" tag="overdue" />
          <ResultRow label="Sep 30" value="Chidi → Q3 P&L to investors · not logged as sent" tag="overdue" />
        </div>
      ),
    },
  ],
};

function ResultRow({ label, value, tag }: { label: string; value: string; tag?: string }) {
  const tagColor =
    tag === "confirmed" ? { bg: "rgba(136,231,136,0.18)", text: "#1a6e1a" } :
    tag === "done"      ? { bg: "rgba(136,231,136,0.18)", text: "#1a6e1a" } :
    tag === "final"     ? { bg: "rgba(27,42,74,0.12)", text: "#1B2A4A" } :
    tag === "open"      ? { bg: "rgba(232,169,76,0.18)", text: "#7a5010" } :
    tag === "overdue"   ? { bg: "rgba(220,80,60,0.12)", text: "#8a2010" } :
    tag === "resolved"  ? { bg: "rgba(136,231,136,0.18)", text: "#1a6e1a" } :
    null;

  return (
    <div className="flex items-start gap-2.5">
      <span className="text-[11px] font-semibold text-[rgba(27,20,15,0.4)] w-20 shrink-0 pt-0.5">{label}</span>
      <span className="text-[13px] text-[#1B140F] leading-snug flex-1">{value}</span>
      {tag && tagColor && (
        <span
          className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md"
          style={{ background: tagColor.bg, color: tagColor.text }}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

export default function MitraChat() {
  const [scope, setScope] = useState("during");
  const [demoIdx, setDemoIdx] = useState(0);

  const demos = DEMOS[scope] ?? DEMOS.during;
  const activeDemo = demos[demoIdx] ?? demos[0];

  function handleScope(id: string) {
    setScope(id);
    setDemoIdx(0);
  }

  return (
    <div className="bg-[#FAF6F0]">

      {/* ── Hero ── */}
      <section className="max-w-[1000px] mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(27,42,74,0.2)] bg-[rgba(27,42,74,0.06)] mb-8">
          <span className="text-[12px] font-medium text-[#1B2A4A] uppercase tracking-widest">New · Mitra Chat</span>
        </div>

        <h1
          className="text-[52px] md:text-[72px] font-bold text-[#1B140F] leading-[1.04] tracking-tight mb-6"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Ask Mitra anything.<br />
          <span className="italic" style={{ color: "#1B2A4A" }}>In the way you actually said it.</span>
        </h1>

        <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed max-w-[620px] mx-auto mb-4">
          Mitra Chat doesn't just search your notes — it understands Nigerian Pidgin, Yoruba/Igbo/Hausa-accented English, Kenyan Sheng, and South African code-switching. The shorthand your team actually uses on calls.
        </p>
        <p className="text-[14px] text-[rgba(27,20,15,0.4)] max-w-[560px] mx-auto">
          "Make we push am to Q1." "Wetin be the oga's final decision?" "Abeg confirm if the PO don sign." — Mitra gets it.
        </p>
      </section>

      {/* ── Animated preview ── */}
      <section className="px-6 pb-12">
        <div className="max-w-[560px] mx-auto">
          <ChatIllustration />
        </div>
      </section>

      {/* ── Interactive demo ── */}
      <section className="px-6 pb-24">
        <div className="max-w-[840px] mx-auto">

          {/* Scope chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {SCOPE_CHIPS.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleScope(chip.id)}
                className="px-4 py-2 rounded-full text-[13px] font-semibold transition-all"
                style={{
                  background: scope === chip.id ? "#1B2A4A" : "rgba(27,20,15,0.07)",
                  color: scope === chip.id ? "#88E788" : "rgba(27,20,15,0.6)",
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Demo panel */}
          <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] shadow-lg shadow-[rgba(27,20,15,0.06)] overflow-hidden">
            {/* Query tabs */}
            <div className="flex border-b border-[rgba(27,20,15,0.08)] overflow-x-auto no-scrollbar">
              {demos.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDemoIdx(i)}
                  className="shrink-0 px-4 py-3.5 text-left transition-all border-b-2"
                  style={{
                    borderBottomColor: demoIdx === i ? "#88E788" : "transparent",
                    background: demoIdx === i ? "rgba(136,231,136,0.06)" : "transparent",
                  }}
                >
                  <p className="text-[10px] font-semibold text-[rgba(27,20,15,0.4)] uppercase tracking-wide mb-0.5">{d.lang}</p>
                  <p className="text-[13px] font-semibold text-[#1B140F] leading-snug max-w-[220px]">"{d.query}"</p>
                </button>
              ))}
            </div>

            {/* Input row */}
            <div className="px-5 py-4 border-b border-[rgba(27,20,15,0.06)] flex items-center gap-3 bg-[rgba(27,20,15,0.01)]">
              <div className="flex-1 flex items-center gap-2 bg-white border border-[rgba(27,20,15,0.1)] rounded-xl px-4 py-2.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-40">
                  <circle cx="6" cy="6" r="4.5" stroke="#1B140F" strokeWidth="1.5"/>
                  <path d="M9.5 9.5L12 12" stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-[13px] text-[#1B140F] flex-1">"{activeDemo.query}"</span>
                <span className="text-[10px] text-[rgba(27,20,15,0.3)] shrink-0 font-mono">↵</span>
              </div>
              <div className="w-8 h-8 bg-[#1B2A4A] rounded-xl flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 4l4 3-4 3" stroke="#88E788" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Result */}
            <div className="px-5 py-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#88E788] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-[rgba(27,20,15,0.5)]">Mitra found it</span>
              </div>
              {activeDemo.result}
            </div>
          </div>

          {/* Closing moat claim */}
          <p className="text-center text-[14px] text-[rgba(27,20,15,0.45)] mt-6 max-w-[600px] mx-auto leading-relaxed">
            Built to understand how Africa actually talks in meetings — not just how Silicon Valley does.
          </p>
        </div>
      </section>

      {/* ── Supporting features ── */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[900px] mx-auto">
          <h2
            className="text-[32px] md:text-[40px] font-bold text-[#1B140F] tracking-tight text-center mb-10"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            More than search.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Vernacular-aware",
                desc: "Mitra's language model is fine-tuned on African business English, Pidgin, and code-switching patterns common across Lagos, Nairobi, Accra, and Johannesburg.",
              },
              {
                title: "Scoped search",
                desc: "Query a single meeting, a folder of related calls, or your entire history. Mitra surfaces the exact moment — with timestamp, speaker, and context.",
              },
              {
                title: "Structured answers",
                desc: "Not just a quote pull. Mitra returns decisions, owners, dates, and status — structured so you can act on it immediately.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#FAF6F0] border border-[rgba(27,20,15,0.08)] rounded-2xl p-6">
                <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1B140F] mb-2">{f.title}</h3>
                <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-20 px-6 bg-[#1B2A4A]">
        <div className="max-w-[700px] mx-auto text-center">
          <p
            className="text-[24px] md:text-[30px] italic font-medium text-[#FDF9F4] leading-[1.4] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            "I typed exactly how I speak in our calls — and Mitra found it. No reformatting, no English-only search bar."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#88E788] flex items-center justify-center text-[13px] font-bold text-[#1B140F]">AO</div>
            <div className="text-left">
              <p className="text-[13px] font-semibold text-[#FDF9F4]">Amara Osei</p>
              <p className="text-[12px] text-[rgba(253,249,244,0.5)]">VP Sales, Prosper Finance · Accra</p>
            </div>
          </div>
          <p className="text-[11px] text-[rgba(253,249,244,0.3)] mt-4 italic">Quote from our private pilot programme.</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
