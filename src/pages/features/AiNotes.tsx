import { Link } from "react-router";
import CTABand from "../../components/CTABand";

export default function AiNotes() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">AI Notes & Follow-ups</p>
          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[62px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            The follow-up email is already written.
          </h1>
          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">
            Before you close your laptop, Mitra has a polished summary, action item list, and draft follow-up email waiting for you — one click from your inbox.
          </p>
          <Link to="/download" className="inline-flex items-center px-6 py-3.5 bg-[#C9542C] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#b84a24] transition-colors">
            Try it free
          </Link>
        </div>
        <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] p-6">
          {/* Mock notes card */}
          <div className="flex flex-col gap-3">
            {[
              { tag: "Summary", color: "#1B2A4A", text: "Agreed on Q1 expansion to Abuja. Budget approved at ₦12M. Pilot launch targeting Feb." },
              { tag: "Action item", color: "#C9542C", text: "Chidi → revised financial model by Friday 15 Nov" },
              { tag: "Action item", color: "#C9542C", text: "Amara → schedule Interswitch call this week" },
              { tag: "Follow-up", color: "#E8A94C", text: "Draft intro email to GTBank partnership lead (Mitra has written a draft)" },
            ].map((n) => (
              <div key={n.tag + n.text} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0]">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5" style={{ color: n.color, background: `${n.color}18` }}>
                  {n.tag}
                </span>
                <span className="text-[13px] text-[#1B140F] leading-snug">{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Smart summaries", desc: "Not a transcript dump. A structured, scannable summary that gets to the point." },
            { title: "Owned action items", desc: "Every action item comes with a person and a deadline — automatically extracted from conversation." },
            { title: "Follow-up emails", desc: "Contextual, professional drafts ready to edit and send. Mitra knows the tone the conversation set." },
            { title: "WhatsApp-ready", desc: "Export a clean text summary perfect for WhatsApp group threads — no formatting weirdness." },
          ].map((b) => (
            <div key={b.title} className="bg-[#FAF6F0] rounded-2xl p-6 border border-[rgba(27,20,15,0.08)]">
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
          <div className="w-8 h-px bg-[#C9542C] mx-auto mb-4" />
          <p className="text-[14px] font-semibold text-[#1B140F]">Zainab Ibrahim</p>
          <p className="text-[13px] text-[rgba(27,20,15,0.5)]">Founder, Zara Capital · Abuja, Nigeria</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
