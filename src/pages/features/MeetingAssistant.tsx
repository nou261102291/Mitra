import { Link } from "react-router";
import CTABand from "../../components/CTABand";

export default function MeetingAssistant() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Meeting Assistant</p>
          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[62px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            In the room with you. Invisible to everyone else.
          </h1>
          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">
            Mitra transcribes your meetings without sending a bot into the call. It listens through your device, identifies speakers, and structures everything in real time.
          </p>
          <Link to="/download" className="inline-flex items-center px-6 py-3.5 bg-[#C9542C] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#b84a24] transition-colors">
            Try it free
          </Link>
        </div>
        <div className="bg-[#FDF9F4] rounded-2xl border border-[rgba(27,20,15,0.1)] p-8">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=560&h=380&fit=crop&auto=format"
            alt="Business meeting in Africa"
            className="rounded-xl w-full object-cover aspect-video bg-[rgba(27,20,15,0.05)]"
          />
        </div>
      </section>

      {/* Detail blocks */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "No bot in the room", desc: "Other participants never see a recording notification. Mitra runs entirely on your device." },
            { title: "Speaker identification", desc: "Automatically labels who said what — up to 8 speakers in a single session." },
            { title: "Works everywhere", desc: "Zoom, Teams, Meet, in-person, phone calls. If you can hear it, Mitra can transcribe it." },
            { title: "Low data mode", desc: "Optimized for Africa's connectivity realities. Works on 3G and syncs fully when you're back on WiFi." },
          ].map((b) => (
            <div key={b.title} className="bg-[#FAF6F0] rounded-2xl p-6 border border-[rgba(27,20,15,0.08)]">
              <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[#1B140F] mb-2">{b.title}</h3>
              <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-[family-name:var(--font-serif)] text-[22px] italic text-[#1B140F] leading-relaxed mb-6">
            "My clients have asked me what tool I use to stay so sharp in client calls. The answer is Mitra — and I'm not telling anyone."
          </p>
          <div className="w-8 h-px bg-[#C9542C] mx-auto mb-4" />
          <p className="text-[14px] font-semibold text-[#1B140F]">Kwame Mensah</p>
          <p className="text-[13px] text-[rgba(27,20,15,0.5)]">Management Consultant, Accra</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
