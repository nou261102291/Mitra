import { Link } from "react-router";
import CTABand from "../../components/CTABand";
import { AfterIllustration } from "../../components/illustrations/UIIllustrations";

export default function AiNotes() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">AI Notes & Follow-ups</p>
          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[62px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            The follow-up email is already written.
          </h1>
          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">
            Before you close your laptop, Mitra has a polished summary, action item list, and draft follow-up email waiting for you — one click from your inbox.
          </p>
          <Link to="/download" className="inline-flex items-center px-6 py-3.5 bg-[#88E788] text-[#1B140F] font-semibold rounded-xl hover:bg-[#72d672] transition-colors">
            Try it free
          </Link>
        </div>
        <AfterIllustration />
      </section>

      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Smart summaries", desc: "Not a transcript dump. A structured, scannable summary that gets to the point." },
            { title: "Owned action items", desc: "Every action item comes with a person and a deadline — automatically extracted from conversation." },
            { title: "Follow-up emails", desc: "Contextual, professional drafts ready to edit and send. Mitra knows the tone the conversation set." },
            { title: "WhatsApp-ready", desc: "Export a clean text summary perfect for WhatsApp group threads — no formatting weirdness." },
          ].map((b) => (
            <div key={b.title} className="bg-[#FAF6F0] rounded-2xl p-6 border border-[rgba(27,20,15,0.08)] hover:border-[rgba(136,231,136,0.3)] transition-colors">
              <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1B140F] mb-2">{b.title}</h3>
              <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-[family-name:var(--font-serif)] text-[22px] italic text-[#1B140F] leading-relaxed mb-6">
            "Mitra's follow-up emails are better than what I'd write myself — and they're ready in 30 seconds."
          </p>
          <div className="w-8 h-px bg-[#88E788] mx-auto mb-4" />
          <p className="text-[14px] font-semibold text-[#1B140F]">Zainab Ibrahim</p>
          <p className="text-[13px] text-[rgba(27,20,15,0.5)]">Founder, Zara Capital · Abuja, Nigeria</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
