import CTABand from "../../components/CTABand";

const integrations = [
  { name: "Google Meet", status: "live" },
  { name: "Zoom", status: "live" },
  { name: "Microsoft Teams", status: "live" },
  { name: "Google Calendar", status: "live" },
  { name: "Outlook Calendar", status: "live" },
  { name: "Slack", status: "coming" },
  { name: "Salesforce", status: "coming" },
  { name: "HubSpot", status: "coming" },
  { name: "Notion", status: "coming" },
  { name: "WhatsApp Business", status: "coming" },
];

export default function Integrations() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Integrations</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6 max-w-[800px] mx-auto">
          Works where you already work.
        </h1>
        <p className="text-[18px] text-[rgba(27,20,15,0.6)] max-w-[520px] mx-auto leading-relaxed">
          Mitra plugs into your calendar, meeting tools, and (soon) your CRM and messaging apps.
        </p>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-5 flex flex-col items-center gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(27,20,15,0.06)] flex items-center justify-center text-[18px]">
                ⬡
              </div>
              <p className="text-[13px] font-semibold text-[#1B140F] leading-snug">{int.name}</p>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={
                  int.status === "live"
                    ? { color: "#C9542C", background: "rgba(201,84,44,0.1)" }
                    : { color: "rgba(27,20,15,0.4)", background: "rgba(27,20,15,0.06)" }
                }
              >
                {int.status === "live" ? "Live" : "Coming soon"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Calendar-first detection", desc: "Mitra reads your calendar and knows when meetings start — no manual triggers." },
            { title: "In-meeting platform support", desc: "Zoom, Teams, and Google Meet are all supported out of the box, with no extra plugins." },
            { title: "API access (Enterprise)", desc: "Build Mitra into your own workflows with our REST API. Enterprise plan includes full API access." },
          ].map((b) => (
            <div key={b.title} className="bg-[#FAF6F0] rounded-2xl p-7 border border-[rgba(27,20,15,0.08)]">
              <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1B140F] mb-2">{b.title}</h3>
              <p className="text-[15px] text-[rgba(27,20,15,0.6)] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
