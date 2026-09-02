import { useState } from "react";
import CTABand from "../components/CTABand";
import { BeforeIllustration, DuringIllustration, AfterIllustration } from "../components/illustrations/UIIllustrations";

const faqs = [
  {
    q: "What permissions does Mitra need on my computer?",
    a: "Mitra needs access to your microphone (for transcription) and your calendar (to detect meetings). It never accesses your camera or screen unless you explicitly share. Permissions can be revoked at any time from your system settings.",
  },
  {
    q: "What happens if I forget to start Mitra before a meeting?",
    a: "If you have auto-detection enabled, Mitra starts automatically when your calendar event begins. If you do miss it, you can share a recording or transcript after the fact and Mitra will still generate summaries and action items.",
  },
  {
    q: "Does it work with in-person meetings?",
    a: "Yes. On mobile and desktop, Mitra can transcribe in-person conversations using your device microphone. Speaker identification works in rooms with up to 8 speakers.",
  },
  {
    q: "Does a bot join my Zoom or Teams call?",
    a: "No. Mitra transcribes audio locally on your device — no bot joins the call, no recording notification is shown to other participants. This is a deliberate design decision, not an afterthought.",
  },
  {
    q: "How does it handle poor internet connectivity?",
    a: "Mitra queues transcription jobs locally and syncs when connectivity returns. Core note-taking functionality works fully offline; AI-enhanced summaries and follow-ups sync once you're back online.",
  },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(27,20,15,0.08)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[16px] font-semibold text-[#1B140F] pr-4">{q}</span>
        <span className={`text-[#1B2A4A] text-[20px] font-light transition-transform shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-[15px] text-[rgba(27,20,15,0.65)] leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

const stages = [
  {
    num: "01",
    stage: "Before",
    color: "#1B2A4A",
    textColor: "#FDF9F4",
    tagline: "Walks into every meeting already briefed",
    desc: "Mitra syncs with Google Calendar and Outlook to understand your schedule. Before each meeting, it surfaces relevant context — past decisions, unresolved action items, who you'll be speaking with, and what was last discussed.",
    points: [
      "Calendar sync with Google and Outlook",
      "Past meeting context automatically surfaced",
      "Attendee intelligence from previous interactions",
      "Pre-meeting brief delivered 10 minutes before start",
    ],
    Illustration: BeforeIllustration,
  },
  {
    num: "02",
    stage: "During",
    color: "#88E788",
    textColor: "#1B140F",
    tagline: "Present with you, not instead of you",
    desc: "No recording bot joins your call. Mitra runs locally on your device, capturing audio through your microphone and producing a live, structured transcript — decisions, action items, and key moments flagged in real time.",
    points: [
      "No bot visible to other call participants",
      "Live structured transcription with speaker IDs",
      "Real-time tagging of decisions and action items",
      "Works on Zoom, Teams, Meet, and in-person",
    ],
    Illustration: DuringIllustration,
  },
  {
    num: "03",
    stage: "After",
    color: "#E8A94C",
    textColor: "#7a5010",
    tagline: "Does the admin so you don't have to",
    desc: "The moment the call ends, Mitra produces a clean summary, a list of action items with owners and deadlines, and a draft follow-up email — ready to send, or to edit and send. Meeting notes are searchable, linkable, and synced across your devices.",
    points: [
      "One-click meeting summary",
      "Action items with owners and deadlines",
      "Draft follow-up email, ready to send",
      "Full searchable transcript archive",
    ],
    Illustration: AfterIllustration,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#FAF6F0]">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">How Mitra works</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight max-w-[800px] mx-auto mb-6">
          Your assistant is already in the room.
        </h1>
        <p className="text-[18px] text-[rgba(27,20,15,0.6)] max-w-[560px] mx-auto leading-relaxed">
          Three stages. Zero effort. Mitra handles everything from calendar detection to the follow-up email.
        </p>
      </section>

      {/* Three stages — with illustrations */}
      {stages.map((s, i) => (
        <section key={s.stage} className={`py-20 px-6 ${i === 1 ? "bg-[#FDF9F4]" : ""}`}>
          <div className={`max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <div
                className="inline-block px-3 py-1.5 rounded-lg text-[12px] font-bold uppercase tracking-wider mb-6"
                style={{
                  color: s.textColor,
                  background: s.color === "#88E788" ? "rgba(136,231,136,0.2)" : s.color === "#E8A94C" ? "rgba(232,169,76,0.18)" : s.color,
                }}
              >
                {s.stage}
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-5">
                {s.tagline}
              </h2>
              <p className="text-[16px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-7">{s.desc}</p>
              <ul className="flex flex-col gap-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full shrink-0 mt-0.5 bg-[rgba(136,231,136,0.2)] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[15px] text-[#1B140F]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <s.Illustration />
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold text-[#1B140F] mb-10 tracking-tight">
            Common questions.
          </h2>
          {faqs.map((f) => <Accordion key={f.q} {...f} />)}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
