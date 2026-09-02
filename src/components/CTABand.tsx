import { Link } from "react-router";

export default function CTABand() {
  return (
    <section className="bg-[#88E788] py-24 px-6 relative overflow-hidden">
      {/* Subtle geometric texture */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="30" height="30" fill="none" stroke="#1B140F" strokeWidth="0.5"/>
              <line x1="0" y1="30" x2="30" y2="0" stroke="#1B140F" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)"/>
        </svg>
      </div>

      <div className="max-w-[780px] mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(27,20,15,0.2)] bg-[rgba(27,20,15,0.06)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B140F] animate-pulse" />
          <span className="text-[12px] font-medium text-[#1B140F] uppercase tracking-widest">Free to start</span>
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-[48px] md:text-[64px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
          Download Mitra.<br />
          <span className="text-[#1B2A4A]">Show up sharper.</span>
        </h2>
        <p className="text-[17px] text-[rgba(27,20,15,0.65)] max-w-[520px] mx-auto mb-10 leading-relaxed">
          Join professionals across Africa who walk into every room better prepared than the person next to them.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/download"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1B2A4A] text-[#FDF9F4] font-semibold rounded-xl hover:bg-[#162236] transition-colors shadow-md shadow-[rgba(27,42,74,0.2)]"
          >
            Download for free
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(27,20,15,0.2)] text-[#1B140F] font-medium rounded-xl hover:bg-[rgba(27,20,15,0.06)] transition-colors"
          >
            See how it works
          </Link>
        </div>

        {/* Platform icons */}
        <div className="flex items-center justify-center gap-6 text-[13px] text-[rgba(27,20,15,0.5)]">
          {[
            { icon: "⌘", label: "macOS" },
            { icon: "⊞", label: "Windows" },
            { icon: "🐧", label: "Linux" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-1.5">
              <span>{p.icon}</span>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
