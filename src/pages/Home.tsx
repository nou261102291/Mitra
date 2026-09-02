import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CTABand from "../components/CTABand";
import { BeforeIllustration, DuringIllustration, AfterIllustration } from "../components/illustrations/UIIllustrations";
import { PaymentIllustration } from "../components/illustrations/AfricaIllustrations";

// ── Cinematic hero mockup ─────────────────────────────────────────────────────
// 4 stages: Calendar brief → Live transcript → Summary → Email draft
// 9 steps × 750 ms = 6.75 s play, 3 s hold → ~10 s loop
const STAGES = [
  { id: "calendar", label: "Before · Calendar brief", step: 0 },
  { id: "live",     label: "During · Live transcript", step: 3 },
  { id: "summary",  label: "After · Summary ready",    step: 6 },
  { id: "email",    label: "After · Email drafted",    step: 8 },
];

const TRANSCRIPT_LINES = [
  { tag: "Decision", color: "#1B2A4A", text: "Expand to Abuja in Q1 — budget approved at ₦18M" },
  { tag: "Action",   color: "#88E788", text: "Chidi → revised financial model by Friday 15 Nov" },
  { tag: "Flagged",  color: "#E8A94C", text: "Kofi: GTM timeline concern — needs addressing next call" },
  { tag: "Action",   color: "#88E788", text: "Amara → schedule pilot call, Interswitch team" },
];

function sh(step: number, n: number, translate = true): React.CSSProperties {
  return {
    opacity: step >= n ? 1 : 0,
    transform: translate ? (step >= n ? "translateY(0)" : "translateY(6px)") : undefined,
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };
}

function HeroMockup() {
  const [step, setStep] = useState(9);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function go(s: number) {
      if (s < 9) {
        timer.current = setTimeout(() => { setStep(s + 1); go(s + 1); }, 750);
      } else {
        timer.current = setTimeout(() => { setStep(0); go(0); }, 3000);
      }
    }
    setStep(0);
    go(0);
    return () => clearTimeout(timer.current);
  }, []);

  const activeStage = [...STAGES].reverse().find((s) => step >= s.step)?.id ?? "calendar";

  return (
    <div className="relative w-full">
      {/* Warm glow */}
      <div className="absolute -inset-6 bg-gradient-radial from-[#E8A94C]/10 via-[#88E788]/5 to-transparent rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] shadow-2xl shadow-[rgba(27,20,15,0.15)] overflow-hidden">

        {/* Chrome bar */}
        <div className="px-4 py-3 border-b border-[rgba(27,20,15,0.07)] bg-[rgba(27,20,15,0.02)] flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(27,20,15,0.12)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(27,20,15,0.12)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[rgba(27,20,15,0.12)]" />
          </div>
          {/* Stage tabs */}
          <div className="flex gap-1 ml-2 overflow-x-auto no-scrollbar">
            {STAGES.map((s) => (
              <span
                key={s.id}
                className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-md transition-all"
                style={{
                  background: activeStage === s.id ? "#1B2A4A" : "transparent",
                  color: activeStage === s.id ? "#88E788" : "rgba(27,20,15,0.35)",
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stage 1: Calendar brief */}
        <div style={{ display: activeStage === "calendar" ? "block" : "none" }}>
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)]">Today — Thursday 14 Nov</p>
              <span className="text-[11px] bg-[rgba(136,231,136,0.18)] text-[#1a6e1a] font-semibold px-2 py-0.5 rounded-full">Mitra Brief ready</span>
            </div>
            {/* Calendar event */}
            <div style={sh(step, 1)} className="bg-white border border-[rgba(136,231,136,0.5)] rounded-xl p-3.5 mb-3 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[13px] font-bold text-[#1B140F]">Series A Update Call</p>
                  <p className="text-[11px] text-[rgba(27,20,15,0.5)] mt-0.5">10:00 WAT · Zoom · Kofi Mensah, Yewande Adeyemi +3</p>
                </div>
                <span className="text-[11px] bg-[#1B2A4A] text-[#88E788] font-semibold px-2.5 py-1 rounded-lg shrink-0 ml-3">Join →</span>
              </div>
            </div>
            {/* Brief bullets */}
            <div style={sh(step, 2)} className="bg-[rgba(136,231,136,0.06)] border border-[rgba(136,231,136,0.2)] rounded-xl p-3.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[rgba(27,20,15,0.4)] mb-2.5">Mitra's pre-call brief</p>
              {[
                "Last call (Oct 28): Runway extended to 18 months. Team hiring Q1.",
                "Open item: Revised cap table from Yewande — not sent yet.",
                "Investor flag (Kofi): Concern about GTM timeline raised but unresolved.",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5 last:mb-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#88E788] mt-1.5 shrink-0" />
                  <p className="text-[12px] text-[rgba(27,20,15,0.7)] leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-2.5 border-t border-[rgba(27,20,15,0.06)] text-[11px] text-[rgba(27,20,15,0.35)]">No bot joins the call · Mitra runs on your device</div>
        </div>

        {/* Stage 2: Live transcript */}
        <div style={{ display: activeStage === "live" ? "block" : "none" }}>
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#88E788] animate-pulse" />
                <p className="text-[11px] font-semibold text-[#1B140F]">Series A Update Call · 38 min</p>
              </div>
              <span className="text-[10px] text-[rgba(27,20,15,0.4)]">Transcribing...</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {TRANSCRIPT_LINES.map((line, i) => (
                <div key={i} style={sh(step, 4 + (i > 1 ? 1 : 0), true)} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-md"
                    style={{
                      background: line.color === "#88E788" ? "rgba(136,231,136,0.18)" : line.color === "#1B2A4A" ? "rgba(27,42,74,0.12)" : "rgba(232,169,76,0.18)",
                      color: line.color === "#88E788" ? "#1a6e1a" : line.color === "#1B2A4A" ? "#1B2A4A" : "#7a5010",
                    }}
                  >
                    {line.tag}
                  </span>
                  <span className="text-[12px] text-[#1B140F] leading-snug">{line.text}</span>
                </div>
              ))}
              {step >= 3 && step < 6 && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[12px] text-[rgba(27,20,15,0.3)] italic">Mitra is listening...</span>
                  <span className="w-1.5 h-4 bg-[#88E788]/60 rounded-sm animate-pulse" />
                </div>
              )}
            </div>
          </div>
          <div className="px-5 py-2.5 border-t border-[rgba(27,20,15,0.06)] text-[11px] text-[rgba(27,20,15,0.35)]">4 items captured · Private · No recording bot</div>
        </div>

        {/* Stage 3: Summary */}
        <div style={{ display: activeStage === "summary" ? "block" : "none" }}>
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)]">Meeting ended · 52 min</p>
              <span className="text-[11px] bg-[rgba(136,231,136,0.18)] text-[#1a6e1a] font-semibold px-2 py-0.5 rounded-full">Summary ready</span>
            </div>
            <div style={sh(step, 6)} className="mb-3">
              <p className="text-[12px] font-bold text-[#1B140F] mb-1.5">Action Items</p>
              {[
                { owner: "Chidi", task: "Send revised financial model", done: true },
                { owner: "Amara", task: "Schedule Interswitch pilot call", done: true },
                { owner: "Emeka", task: "Prepare board memo draft", done: false },
                { owner: "Yewande", task: "Share updated roadmap doc", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[rgba(27,20,15,0.05)] last:border-0">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-[#88E788]" : "border border-[rgba(27,20,15,0.2)]"}`}>
                    {item.done && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4l2 2 3-3" stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span className="text-[12px] font-semibold text-[#1B140F]">{item.owner}</span>
                  <span className="text-[11px] text-[rgba(27,20,15,0.55)]">{item.task}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-2.5 border-t border-[rgba(27,20,15,0.06)] text-[11px] text-[rgba(27,20,15,0.35)]">4 action items · 1 decision · 1 flag</div>
        </div>

        {/* Stage 4: Email */}
        <div style={{ display: activeStage === "email" ? "block" : "none" }}>
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.35)]">Follow-up drafted</p>
              <span className="text-[11px] bg-[#E8A94C]/20 text-[#7a5010] font-semibold px-2 py-0.5 rounded-full">28 sec to send</span>
            </div>
            <div style={sh(step, 8)} className="bg-white border border-[rgba(27,20,15,0.08)] rounded-xl p-3.5 shadow-sm">
              <div className="flex justify-between items-start mb-2.5">
                <div>
                  <p className="text-[10px] text-[rgba(27,20,15,0.4)]">To: kofi.mensah@accelpartners.com</p>
                  <p className="text-[12px] font-bold text-[#1B140F] mt-0.5">Re: Series A — Next Steps & Action Items</p>
                </div>
                <span className="text-[9px] bg-[#88E788] text-[#1B140F] font-bold px-1.5 py-0.5 rounded-md">Draft</span>
              </div>
              <p className="text-[12px] text-[rgba(27,20,15,0.7)] leading-relaxed">Hi Kofi, great call today. Confirming the key outcomes: the ₦18M Abuja expansion is approved for Q1 2025. Chidi will send the updated financial model by Friday...</p>
              <div className="mt-3 flex items-center gap-2">
                <button className="px-3 py-1.5 bg-[#1B2A4A] text-white text-[11px] font-semibold rounded-lg">Send →</button>
                <button className="px-3 py-1.5 border border-[rgba(27,20,15,0.15)] text-[rgba(27,20,15,0.5)] text-[11px] rounded-lg">Edit first</button>
              </div>
            </div>
          </div>
          <div className="px-5 py-2.5 border-t border-[rgba(27,20,15,0.06)] text-[11px] text-[rgba(27,20,15,0.35)]">Auto-drafted from your notes · Edit before sending</div>
        </div>
      </div>
    </div>
  );
}

// ── Utilities ─────────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
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

// ── Static data ────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#1B2A4A" strokeWidth="1.5"/><path d="M11 7v4l2.5 2.5" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Auto meeting detection",
    desc: "Mitra watches your calendar and joins automatically — no buttons to press, no setup per call.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="4" width="16" height="14" rx="3" stroke="#1B2A4A" strokeWidth="1.5"/><path d="M7 9h8M7 13h5" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "One-click notes & follow-ups",
    desc: "Summaries, action items, and follow-up emails — polished and ready before the call even ends.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" stroke="#1B2A4A" strokeWidth="1.5"/><rect x="12" y="3" width="7" height="7" rx="2" stroke="#1B2A4A" strokeWidth="1.5"/><rect x="3" y="12" width="7" height="7" rx="2" stroke="#1B2A4A" strokeWidth="1.5"/><rect x="12" y="12" width="7" height="7" rx="2" stroke="#1B2A4A" strokeWidth="1.5"/></svg>,
    title: "Calendar sync",
    desc: "Google and Outlook calendars. Knows who's on the call, what was decided last time, and what's pending.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="5" width="18" height="12" rx="2.5" stroke="#1B2A4A" strokeWidth="1.5"/><circle cx="11" cy="11" r="3" stroke="#1B2A4A" strokeWidth="1.5"/></svg>,
    title: "Cross-platform",
    desc: "Mac, Windows, and Linux. Works wherever you work — office, home, or coworking.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l1.5 4.5H17l-3.7 2.7 1.4 4.5L11 12l-3.7 2.7 1.4-4.5L5 7.5h4.5L11 3z" stroke="#1B2A4A" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    title: "Private by default",
    desc: "No recording bot joins your call. Transcription runs locally or in a secure, encrypted cloud — your choice.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2v4M11 16v4M2 11h4M16 11h4" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="5" stroke="#1B2A4A" strokeWidth="1.5"/></svg>,
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
    initials: "TA",
    color: "#1B2A4A",
  },
  {
    quote: "The thing that surprised me is how it understands African business context — it knows the difference between a decision and a 'we'll consider it.' That nuance matters.",
    name: "Amara Osei",
    role: "VP Sales, Prosper Finance",
    location: "Accra, Ghana",
    initials: "AO",
    color: "#E8A94C",
  },
  {
    quote: "My team is in three time zones across Nigeria, Kenya, and South Africa. Mitra is the one thread that makes sure nobody misses a ball across all our calls.",
    name: "Nkechi Okafor",
    role: "Head of Operations, BuildRight Africa",
    location: "Nairobi, Kenya",
    initials: "NO",
    color: "#88E788",
  },
];

// Fixed: narrowed to "Linux support" only — Granola supports Mac + Windows
const comparisonData = [
  { feature: "Price in local currency",        mitra: true,  granola: false, generic: false },
  { feature: "Paystack / Flutterwave billing", mitra: true,  granola: false, generic: false },
  { feature: "No bot joining the call",        mitra: true,  granola: true,  generic: false },
  { feature: "Works on patchy connectivity",   mitra: true,  granola: false, generic: false },
  { feature: "Auto pre-meeting briefing",      mitra: true,  granola: false, generic: false },
  { feature: "One-click follow-up emails",     mitra: true,  granola: true,  generic: false },
  { feature: "Linux support",                  mitra: true,  granola: false, generic: false },
  { feature: "Built for African business context", mitra: true, granola: false, generic: false },
];

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center shadow-lg transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transform: visible ? "translateY(0)" : "translateY(8px)" }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M4 8l4-4 4 4" stroke="#88E788" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(27,42,74,0.2)] bg-[rgba(27,42,74,0.06)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#88E788] animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="text-[12px] font-medium text-[#1B2A4A] uppercase tracking-widest">Built for Africa</span>
          </div>

          {/* Serif display headline */}
          <h1
            className="text-[52px] md:text-[66px] font-bold text-[#1B140F] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            The colleague who's always one step ahead of&nbsp;the&nbsp;room.
          </h1>

          {/* African context pulled into subheadline */}
          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-10 max-w-[480px]">
            Mitra joins your meetings, catches decisions in Pidgin or code-switched English, and follows up before you have to — built and priced for how business actually runs across Africa.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/download"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#88E788] text-[#1B140F] font-semibold text-[16px] rounded-xl hover:bg-[#72d672] transition-colors shadow-sm"
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

      {/* ── Early access bar (replaces blank logo strip) ── */}
      <section className="border-y border-[rgba(27,20,15,0.08)] bg-[#FDF9F4] py-8 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-[15px] font-semibold text-[#1B140F] font-[family-name:var(--font-display)]">Private pilot — Lagos, Accra & Nairobi</p>
            <p className="text-[13px] text-[rgba(27,20,15,0.5)] mt-0.5">Mitra is in early access with founding teams across West and East Africa.</p>
          </div>
          <Link
            to="/download"
            className="shrink-0 px-5 py-2.5 bg-[#1B2A4A] text-[#88E788] text-[13px] font-semibold rounded-xl hover:bg-[#263d6a] transition-colors"
          >
            Join the waitlist →
          </Link>
        </div>
      </section>

      {/* ── Before / During / After (with animated illustrations) ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <RevealSection className="text-center mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">How Mitra works</p>
            <h2
              className="text-[40px] md:text-[50px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Before, during, after —<br className="hidden md:block" />
              Mitra has you covered.
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {(
              [
                {
                  stage: "Before",
                  tagline: "Walks into every meeting already briefed",
                  desc: "Mitra reads your calendar, pulls relevant context from past meetings, and surfaces what you need to know — before you say hello.",
                  detail: "Calendar sync · Context recall · Auto-prep briefs",
                  color: "#1B2A4A",
                  num: "01",
                  Illustration: BeforeIllustration,
                },
                {
                  stage: "During",
                  tagline: "Present with you, not instead of you",
                  desc: "No bot joining the call. Mitra runs locally, transcribes without being in the room, and tracks decisions and action items in real time.",
                  detail: "Live transcription · No bot · Decision tracking",
                  color: "#88E788",
                  textColor: "#1a6e1a",
                  num: "02",
                  Illustration: DuringIllustration,
                },
                {
                  stage: "After",
                  tagline: "Does the admin so you don't have to",
                  desc: "Summaries, action items, and follow-up emails — polished and ready one click after the meeting ends. Your next call prep starts here too.",
                  detail: "One-click summaries · Follow-up emails · Action items",
                  color: "#E8A94C",
                  textColor: "#7a5010",
                  num: "03",
                  Illustration: AfterIllustration,
                },
              ] as const
            ).map((s) => (
              <RevealSection key={s.stage}>
                <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.08)] hover:border-[rgba(27,20,15,0.15)] transition-colors relative overflow-hidden flex flex-col">
                  {/* Live animated illustration */}
                  <div className="p-4 pb-0">
                    <s.Illustration />
                  </div>
                  {/* Text content */}
                  <div className="p-6 pt-5 relative flex flex-col flex-1">
                    <span className="absolute top-4 right-5 text-[40px] font-black text-[rgba(27,20,15,0.04)] select-none" style={{ fontFamily: "'Fraunces', serif" }}>
                      {s.num}
                    </span>
                    <div
                      className="inline-block px-2.5 py-1 rounded-lg text-[12px] font-bold uppercase tracking-wider mb-4"
                      style={{ color: ("textColor" in s ? s.textColor : undefined) ?? "#FDF9F4", background: s.color === "#88E788" ? "rgba(136,231,136,0.2)" : s.color === "#E8A94C" ? "rgba(232,169,76,0.15)" : s.color }}
                    >
                      <span style={{ color: ("textColor" in s ? s.textColor : undefined) ?? (s.color === "#1B2A4A" ? "#FDF9F4" : "#1B140F") }}>{s.stage}</span>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#1B140F] mb-2.5 leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>
                      {s.tagline}
                    </h3>
                    <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed mb-5">{s.desc}</p>
                    <div className="text-[12px] text-[rgba(27,20,15,0.4)] font-medium mt-auto">{s.detail}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-8 text-center">
            <Link to="/how-it-works" className="text-[14px] font-medium text-[#1B2A4A] hover:underline">
              See the full walkthrough →
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Built for Africa ── */}
      <section className="py-24 px-6 bg-[#1B2A4A] relative overflow-hidden">
        {/* Kente-inspired pattern */}
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
        {/* Warm ochre accent blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8A94C]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative">
          <RevealSection className="max-w-[600px] mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#88E788] mb-3">Built here, not adapted here</p>
            <h2
              className="text-[40px] md:text-[50px] font-bold text-[#FDF9F4] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Built for how Africa does business.
            </h2>
            <p className="mt-5 text-[16px] text-[rgba(253,249,244,0.6)] leading-relaxed">
              Not a US tool with Naira bolted on. Mitra was designed from the ground up for multi-currency teams, local payment rails, and the realities of connectivity across African markets.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
            {/* Left: four feature tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Local payments", desc: "Pay via Paystack or Flutterwave in Naira, Cedis, Shillings, or Rand. No USD card required.", icon: "₦" },
                { title: "Connectivity resilience", desc: "Works on intermittent connections. If your internet drops mid-call, Mitra catches up when you're back.", icon: "⚡" },
                { title: "Multi-currency teams", desc: "Teams billed in different currencies, one admin dashboard. Common in pan-African companies.", icon: "🌍" },
                { title: "WhatsApp-friendly exports", desc: "Send meeting summaries as clean, formatted text that works in WhatsApp group chats.", icon: "💬" },
              ].map((item) => (
                <RevealSection key={item.title}>
                  <div className="bg-[rgba(253,249,244,0.05)] border border-[rgba(253,249,244,0.1)] rounded-2xl p-5 hover:bg-[rgba(253,249,244,0.08)] transition-colors h-full">
                    <div className="text-[24px] mb-3">{item.icon}</div>
                    <h3 className="text-[16px] font-bold text-[#FDF9F4] mb-1.5" style={{ fontFamily: "'Fraunces', serif" }}>{item.title}</h3>
                    <p className="text-[13px] text-[rgba(253,249,244,0.55)] leading-relaxed">{item.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
            {/* Right: animated Paystack payment illustration */}
            <RevealSection>
              <PaymentIllustration />
            </RevealSection>
          </div>

          <RevealSection className="flex flex-wrap items-center gap-4">
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
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">What Mitra does</p>
            <h2
              className="text-[40px] md:text-[50px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Everything your EA would do,<br className="hidden md:block" /> at a fraction of the cost.
            </h2>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <RevealSection key={f.title}>
                <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-7 hover:border-[rgba(136,231,136,0.4)] hover:shadow-md hover:shadow-[rgba(136,231,136,0.08)] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(136,231,136,0.15)] flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
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
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">From our pilot</p>
            <h2
              className="text-[40px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
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
                    <div className="w-8 h-px bg-[#88E788] mb-4" />
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                        style={{ background: t.color, color: t.color === "#88E788" ? "#1B140F" : t.color === "#E8A94C" ? "#1B140F" : "#FDF9F4" }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#1B140F]">{t.name}</p>
                        <p className="text-[13px] text-[rgba(27,20,15,0.5)]">{t.role}</p>
                        <p className="text-[12px] text-[rgba(27,20,15,0.35)]">{t.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-[11px] text-[rgba(27,20,15,0.3)] italic">Quote from our private pilot programme.</p>
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
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">The honest comparison</p>
            <h2
              className="text-[40px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Mitra vs. the rest.
            </h2>
            <p className="mt-4 text-[16px] text-[rgba(27,20,15,0.55)] max-w-[480px] mx-auto">
              We'll say the quiet part out loud.
            </p>
          </RevealSection>

          <RevealSection>
            <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 border-b border-[rgba(27,20,15,0.08)] px-6 py-4">
                <div className="col-span-1" />
                {["Mitra", "Granola", "Generic tools"].map((h, i) => (
                  <div
                    key={h}
                    className={`text-center text-[13px] font-bold font-[family-name:var(--font-display)] ${i === 0 ? "text-[#1B2A4A]" : "text-[rgba(27,20,15,0.4)]"}`}
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
                          <circle cx="10" cy="10" r="9" fill={j === 0 ? "#88E788" : "rgba(27,42,74,0.2)"}/>
                          <path d="M6 10l3 3 5-5" stroke={j === 0 ? "#1B140F" : "#1B2A4A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
              <Link to="/vs/granola" className="text-[14px] font-medium text-[#1B2A4A] hover:text-[#88E788] transition-colors hover:underline">
                See the full comparison →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <CTABand />
      <ScrollTopButton />
    </div>
  );
}
