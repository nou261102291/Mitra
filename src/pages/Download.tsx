export default function Download() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-24 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">Download</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[68px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
          Mitra is ready when you are.
        </h1>
        <p className="text-[18px] text-[rgba(27,20,15,0.6)] max-w-[500px] mx-auto mb-14 leading-relaxed">
          Free to download. Free to start. No credit card required.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-left mb-16">
          {[
            { platform: "macOS", version: "v1.2.0", req: "macOS 12+, Apple Silicon & Intel", icon: "⌘", href: "#" },
            { platform: "Windows", version: "v1.2.0", req: "Windows 10/11, 64-bit", icon: "⊞", href: "#" },
            { platform: "Linux", version: "v1.2.0", req: "Ubuntu 20.04+, Debian, Fedora", icon: "🐧", href: "#" },
          ].map((p) => (
            <div key={p.platform} className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl p-7 flex flex-col">
              <div className="text-[32px] mb-4">{p.icon}</div>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-1">{p.platform}</h2>
              <p className="text-[12px] text-[rgba(27,20,15,0.4)] mb-1">{p.version}</p>
              <p className="text-[13px] text-[rgba(27,20,15,0.5)] mb-6 flex-1">{p.req}</p>
              <a
                href={p.href}
                className="w-full text-center py-3 bg-[#88E788] text-[#1B140F] font-semibold rounded-xl hover:bg-[#72d672] transition-colors text-[14px]"
              >
                Download for {p.platform}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-8">
          <p className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-3">What happens next?</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { step: "01", title: "Install Mitra", desc: "Download and open the installer. Takes less than a minute." },
              { step: "02", title: "Connect your calendar", desc: "Link Google or Outlook to let Mitra see your meeting schedule." },
              { step: "03", title: "Join your next meeting", desc: "Mitra detects it automatically and starts capturing. You just show up." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <span className="text-[28px] font-black text-[rgba(27,20,15,0.08)] font-[family-name:var(--font-display)] leading-none">{s.step}</span>
                <div>
                  <p className="text-[15px] font-semibold text-[#1B140F] mb-1">{s.title}</p>
                  <p className="text-[13px] text-[rgba(27,20,15,0.55)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
