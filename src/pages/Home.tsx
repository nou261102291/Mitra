import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CTABand from "../components/CTABand";

// Animated product mockup card
function HeroMockup() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => (t + 1) % 7);
    }, 700);
    return () => clearInterval(id);
  }, []);

  const lines = [
    { label: "Key decision", text: "Expand to Abuja Q1 2025 — budget approved" },
    { label: "Action item", text: "Chidi to send revised deck by Friday" },
    { label: "Action item", text: "Amara schedules pilot call with Interswitch team" },
    { label: "Follow-up", text: "Draft intro email to GTB partnership lead" },
    { label: "Key decision", text: "Monthly billing preferred over annual for SME tier" },
    { label: "Next meeting", text: "Board review — 14 Nov, 10:00 WAT" },
  ];

  const labelColors: Record<string, string> = {
    "Key decision": "#C9542C",
    "Action item": "#1B2A4A",
    "Follow-up": "#E8A94C",
    "Next meeting": "#6B7280",
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-[#C9542C]/8 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] shadow-2xl shadow-[rgba(27,20,15,0.12)] overflow-hidden">
        {/* Card header */}
        <div className="px-5 py-4 border-b border-[rgba(27,20,15,0.08)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#E8A94C] animate-pulse" />
            <span className="text-[13px] font-semibold text-[#1B140F] font-[family-name:var(--font-display)]">Mitra — Live</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[rgba(27,20,15,0.4)] bg-[rgba(27,20,15,0.06)] px-2 py-0.5 rounded-full">
              Investor Call · 38 min
            </span>
          </div>
        </div>

        {/* Notes content */}
        <div className="px-5 py-5 min-h-[240px]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)] mb-4">
            Mitra is taking notes
          </p>
          <div className="flex flex-col gap-3">
            {lines.slice(0, Math.max(tick, 1)).map((line, i) => (
              <div
                key={i}
                className="note-line flex items-start gap-3"
                style={{ animationDelay: `${i * 0.1}s`, opacity: i < tick ? 1 : 0 }}
              >
                <span
                  className="mt-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-md shrink-0"
                  style={{
                    color: labelColors[line.label] ?? "#6B7280",
                    background: `${labelColors[line.label] ?? "#6B7280"}18`,
                  }}
                >
                  {line.label}
                </span>
                <span className="text-[13px] text-[#1B140F] leading-snug">{line.text}</span>
              </div>
            ))}
            {/* Cursor blink */}
            {tick < lines.length && (
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[rgba(27,20,15,0.25)] italic">Writing...</span>
                <span className="w-1.5 h-4 bg-[#C9542C]/60 rounded-sm animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Card footer */}
        <div className="px-5 py-3 border-t border-[rgba(27,20,15,0.06)] bg-[rgba(27,20,15,0.02)] flex items-center justify-between">
          <span className="text-[11px] text-[rgba(27,20,15,0.35)]">No bot in the room · Private by default</span>
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded bg-[rgba(27,20,15,0.08)]" />
            <div className="w-5 h-5 rounded bg-[rgba(27,20,15,0.08)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#C9542C" strokeWidth="1.5"/>
        <path d="M11 7v4l2.5 2.5" stroke="#C9542C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Auto meeting detection",
    desc: "Mitra watches your calendar and joins automatically — no buttons to press, no setup per call.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="3" stroke="#C9542C" strokeWidth="1.5"/>
        <path d="M7 9h8M7 13h5" stroke="#C9542C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "One-click notes & follow-ups",
    desc: "Summaries, action items, and follow-up emails — polished and ready before the call even ends.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="#C9542C" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="2" stroke="#C9542C" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="2" stroke="#C9542C" strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="2" stroke="#C9542C" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Calendar sync",
    desc: "Google and Outlook calendars. Knows who's on the call, what was decided last time, and what's pending.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="12" rx="2.5" stroke="#C9542C" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3" stroke="#C9542C" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Cross-platform",
    desc: "Mac, Windows, and Linux. Works wherever you work — office, home, or coworking.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l1.5 4.5H17l-3.7 2.7 1.4 4.5L11 12l-3.7 2.7 1.4-4.5L5 7.5h4.5L11 3z" stroke="#C9542C" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Private by default",
    desc: "No recording bot joins your call. Transcription runs locally or in a secure, encrypted cloud — your choice.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v4M11 16v4M2 11h4M16 11h4" stroke="#C9542C" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="5" stroke="#C9542C" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Local billing",
    desc: "Pay in Naira, Cedis, or Shillings via Paystack or Flutterwave. No USD card required.",
  },
];

const testimonials = [
  {
    quote: "I used to spend 30 minutes after every investor call writing notes and drafting follow-ups. Now Mitra has the email ready before I've even closed my laptop.",
    name: "Tunde Adeyemi",
    role: "Co-founder, Recurra",
    location: "Lagos, Nigeria",
  },
  {
    quote: "The thing that surprised me is how it understands African business context — it knows the difference between a decision and a 'we'll consider it.' That nuance matters.",
    name: "Amara Osei",
    role: "VP Sales, Prosper Finance",
    location: "Accra, Ghana",
  },
  {
    quote: "My team is in three time zones across Nigeria, Kenya, and South Africa. Mitra is the one thread that makes sure nobody misses a ball across all our calls.",
    name: "Nkechi Okafor",
    role: "Head of Operations, BuildRight Africa",
    location: "Nairobi, Kenya",
  },
];

const comparisonData = [
  { feature: "Price in local currency", mitra: true, granola: false, generic: false },
  { feature: "Paystack / Flutterwave billing", mitra: true, granola: false, generic: false },
  { feature: "No bot joining the call", mitra: true, granola: true, generic: false },
  { feature: "Works on patchy connectivity", mitra: true, granola: false, generic: false },
  { feature: "Auto pre-meeting briefing", mitra: true, granola: false, generic: false },
  { feature: "One-click follow-up emails", mitra: true, granola: true, generic: false },
  { feature: "Mac / Windows / Linux", mitra: true, granola: false, generic: false },
  { feature: "Built for African business context", mitra: true, granola: false, generic: false },
];

export default function Home() {
  return (
    <div className="bg-[#FAF6F0]">
      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(201,84,44,0.25)] bg-[rgba(201,84,44,0.06)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9542C] animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="text-[12px] font-medium text-[#C9542C] uppercase tracking-widest">Built for Africa</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[68px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            The colleague who's always one step ahead of&nbsp;the&nbsp;room.
          </h1>
          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-10 max-w-[480px]">
            Mitra joins your meetings, remembers everything, and follows up before you have to — built and priced for how business runs across Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/download"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C9542C] text-[#FDF9F4] font-semibold text-[16px] rounded-xl hover:bg-[#b84a24] transition-colors shadow-md shadow-[rgba(201,84,44,0.25)]"
            >
              Download for free
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(27,20,15,0.18)] text-[#1B140F] font-medium text-[16px] rounded-xl hover:bg-[rgba(27,20,15,0.04)] transition-colors"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-[13px] text-[rgba(27,20,15,0.4)]">
            Free forever · No credit card · Pay locally when you upgrade
          </p>
        </div>

        <HeroMockup />
      </section>

      {/* ── Trust bar ── */}
      <section className="border-y border-[rgba(27,20,15,0.08)] bg-[#FDF9F4] py-10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)] text-center mb-8">
            Built on proven, MIT-licensed technology · Trusted by teams across Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["Paystack", "Flutterwave", "Interswitch", "GTBank", "Andela", "Cowrywise"].map((name) => (
              <span
                key={name}
                className="text-[15px] font-semibold text-[rgba(27,20,15,0.25)] tracking-tight font-[family-name:var(--font-display)]"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="text-[28px] font-bold font-[family-name:var(--font-display)] text-[#1B140F]">12,400+</span>
            <span className="text-[15px] text-[rgba(27,20,15,0.5)] ml-2">hours of meeting time given back to professionals this month</span>
          </div>
        </div>
      </section>

      {/* ── Before / During / After ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <RevealSection className="text-center mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-3">How Mitra works</p>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] md:text-[48px] font-bold text-[#1B140F] tracking-tight">
              Before, during, after — <br className="hidden md:block" />
              Mitra has you covered.
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "Before",
                tagline: "Walks into every meeting already briefed",
                desc: "Mitra reads your calendar, pulls relevant context from past meetings, and surfaces what you need to know — before you say hello.",
                detail: "Calendar sync · Context recall · Auto-prep briefs",
                color: "#C9542C",
                num: "01",
              },
              {
                stage: "During",
                tagline: "Present with you, not instead of you",
                desc: "No bot joining the call. Mitra runs locally, transcribes without being in the room, and tracks decisions and action items in real time.",
                detail: "Live transcription · No bot · Decision tracking",
                color: "#1B2A4A",
                num: "02",
              },
              {
                stage: "After",
                tagline: "Does the admin so you don't have to",
                desc: "Summaries, action items, and follow-up emails — polished and ready one click after the meeting ends. Your next call prep starts here too.",
                detail: "One-click summaries · Follow-up emails · Action items",
                color: "#E8A94C",
                num: "03",
              },
            ].map((s) => (
              <RevealSection key={s.stage}>
                <div className="bg-[#FDF9F4] rounded-2xl p-8 h-full border border-[rgba(27,20,15,0.08)] hover:border-[rgba(27,20,15,0.15)] transition-colors relative overflow-hidden group">
                  {/* Number watermark */}
                  <span className="absolute top-6 right-6 text-[48px] font-black text-[rgba(27,20,15,0.04)] font-[family-name:var(--font-display)] select-none">
                    {s.num}
                  </span>
                  <div
                    className="inline-block px-2.5 py-1 rounded-lg text-[12px] font-bold uppercase tracking-wider mb-5"
                    style={{ color: s.color, background: `${s.color}15` }}
                  >
                    {s.stage}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1B140F] mb-3 leading-snug">
                    {s.tagline}
                  </h3>
                  <p className="text-[15px] text-[rgba(27,20,15,0.6)] leading-relaxed mb-6">{s.desc}</p>
                  <div className="text-[12px] text-[rgba(27,20,15,0.4)] font-medium">{s.detail}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Africa ── */}
      <section className="py-24 px-6 bg-[#1B2A4A] relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="kente" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="20" fill="none" stroke="#FDF9F4" strokeWidth="0.5"/>
                <rect x="20" y="20" width="20" height="20" fill="none" stroke="#FDF9F4" strokeWidth="0.5"/>
                <circle cx="20" cy="20" r="4" fill="none" stroke="#FDF9F4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kente)"/>
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto relative">
          <RevealSection className="max-w-[600px] mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#E8A94C] mb-3">Built here, not adapted here</p>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] md:text-[48px] font-bold text-[#FDF9F4] tracking-tight leading-[1.1]">
              Built for how Africa does business.
            </h2>
            <p className="mt-5 text-[16px] text-[rgba(253,249,244,0.6)] leading-relaxed">
              Not a US tool with Naira bolted on. Mitra was designed from the ground up for multi-currency teams, local payment rails, and the realities of connectivity across African markets.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Local payments",
                desc: "Pay via Paystack or Flutterwave in Naira, Cedis, Shillings, or Rand. No USD card required.",
                icon: "₦",
              },
              {
                title: "Connectivity resilience",
                desc: "Works on intermittent connections. If your internet drops mid-call, Mitra catches up when you're back.",
                icon: "⚡",
              },
              {
                title: "Multi-currency teams",
                desc: "Teams billed in different currencies, one admin dashboard. Common in pan-African companies.",
                icon: "🌍",
              },
              {
                title: "WhatsApp-friendly exports",
                desc: "Send meeting summaries as clean, formatted text that works in WhatsApp group chats.",
                icon: "💬",
              },
            ].map((item) => (
              <RevealSection key={item.title}>
                <div className="bg-[rgba(253,249,244,0.05)] border border-[rgba(253,249,244,0.1)] rounded-2xl p-6 hover:bg-[rgba(253,249,244,0.08)] transition-colors">
                  <div className="text-[28px] mb-4">{item.icon}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#FDF9F4] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[rgba(253,249,244,0.55)] leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Payment logos */}
          <RevealSection className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-[12px] text-[rgba(253,249,244,0.35)] uppercase tracking-widest mr-2">Pay with</span>
            {["Paystack", "Flutterwave", "Cards"].map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-lg border border-[rgba(253,249,244,0.15)] text-[13px] font-medium text-[rgba(253,249,244,0.7)]">
                {p}
              </span>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* ── Feature grid ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <RevealSection className="text-center mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-3">What Mitra does</p>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] md:text-[48px] font-bold text-[#1B140F] tracking-tight">
              Everything your EA would do,<br className="hidden md:block" /> at a fraction of the cost.
            </h2>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <RevealSection key={f.title}>
                <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-7 hover:border-[rgba(201,84,44,0.25)] hover:shadow-md hover:shadow-[rgba(201,84,44,0.06)] transition-all">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1B140F] mb-2">{f.title}</h3>
                  <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{f.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto">
          <RevealSection className="text-center mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-3">From our users</p>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] font-bold text-[#1B140F] tracking-tight">
              The memo before everyone else has it.
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <RevealSection key={t.name}>
                <div className="bg-[#FAF6F0] border border-[rgba(27,20,15,0.08)] rounded-2xl p-8 flex flex-col justify-between h-full">
                  <p className="font-[family-name:var(--font-serif)] text-[17px] italic text-[#1B140F] leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="w-8 h-px bg-[#C9542C] mb-4" />
                    <p className="text-[14px] font-semibold text-[#1B140F]">{t.name}</p>
                    <p className="text-[13px] text-[rgba(27,20,15,0.5)]">{t.role}</p>
                    <p className="text-[12px] text-[rgba(27,20,15,0.35)] mt-0.5">{t.location}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison teaser ── */}
      <section className="py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <RevealSection className="text-center mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-3">The honest comparison</p>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] font-bold text-[#1B140F] tracking-tight">
              Mitra vs. the rest.
            </h2>
            <p className="mt-4 text-[16px] text-[rgba(27,20,15,0.55)] max-w-[480px] mx-auto">
              We'll say the quiet part out loud.
            </p>
          </RevealSection>

          <RevealSection>
            <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-[rgba(27,20,15,0.08)] px-6 py-4">
                <div className="col-span-1" />
                {["Mitra", "Granola", "Generic tools"].map((h, i) => (
                  <div
                    key={h}
                    className={`text-center text-[13px] font-bold font-[family-name:var(--font-display)] ${i === 0 ? "text-[#C9542C]" : "text-[rgba(27,20,15,0.4)]"}`}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {comparisonData.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 px-6 py-4 items-center ${i % 2 === 0 ? "" : "bg-[rgba(27,20,15,0.02)]"} border-b border-[rgba(27,20,15,0.05)] last:border-0`}
                >
                  <span className="text-[14px] text-[#1B140F]">{row.feature}</span>
                  {[row.mitra, row.granola, row.generic].map((val, j) => (
                    <div key={j} className="flex justify-center">
                      {val ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" fill={j === 0 ? "#C9542C" : "#1B2A4A"} fillOpacity={j === 0 ? 1 : 0.3}/>
                          <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" fill="rgba(27,20,15,0.06)"/>
                          <path d="M7.5 12.5l5-5M12.5 12.5l-5-5" stroke="rgba(27,20,15,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link to="/vs/granola" className="text-[14px] font-medium text-[#C9542C] hover:underline">
                See the full comparison →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTABand />
    </div>
  );
}
