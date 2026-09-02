import CTABand from "../components/CTABand";

function CareersHeroIllustration() {
  return (
    <svg viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
      <rect width="560" height="380" rx="20" fill="#1B2A4A"/>
      <div/>
      {/* Ambient grid */}
      <rect x="0" y="0" width="560" height="380" fill="url(#cg)" opacity="0.03"/>
      <defs>
        <pattern id="cg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
      </defs>

      {/* Screens */}
      <rect x="40" y="60" width="220" height="140" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <rect x="40" y="60" width="220" height="32" rx="10" fill="rgba(136,231,136,0.15)"/>
      <rect x="40" y="74" width="220" height="18" fill="rgba(136,231,136,0.15)"/>
      <circle cx="60" cy="78" r="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="74" cy="78" r="4" fill="rgba(255,255,255,0.1)"/>
      <circle cx="88" cy="78" r="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="56" y="105" width="170" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="56" y="118" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="56" y="131" width="155" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="56" y="154" width="80" height="22" rx="6" fill="rgba(136,231,136,0.3)"/>
      <text x="96" y="169" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="700" fill="#1B140F" textAnchor="middle">Build with us</text>

      <rect x="300" y="40" width="220" height="160" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <rect x="300" y="40" width="220" height="32" rx="10" fill="rgba(232,169,76,0.15)"/>
      <rect x="300" y="54" width="220" height="18" fill="rgba(232,169,76,0.15)"/>
      <rect x="316" y="86" width="170" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="316" y="99" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="316" y="122" width="60" height="60" rx="6" fill="rgba(255,255,255,0.06)"/>
      <text x="346" y="155" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.4)" textAnchor="middle">Eng</text>
      <rect x="386" y="122" width="88" height="28" rx="6" fill="rgba(136,231,136,0.2)"/>
      <text x="430" y="140" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(136,231,136,0.9)" textAnchor="middle">Remote-friendly</text>
      <rect x="386" y="155" width="88" height="22" rx="6" fill="rgba(255,255,255,0.08)"/>
      <text x="430" y="170" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.5)" textAnchor="middle">Equity included</text>

      {/* City dots */}
      {[
        { label: "Lagos", x: 160, y: 280, size: 10, color: "#88E788" },
        { label: "Accra", x: 260, y: 300, size: 7, color: "#E8A94C" },
        { label: "Nairobi", x: 380, y: 290, size: 7, color: "#88E788" },
        { label: "Remote", x: 460, y: 270, size: 6, color: "rgba(255,255,255,0.4)" },
      ].map((city) => (
        <g key={city.label}>
          <circle cx={city.x} cy={city.y} r={city.size} fill={city.color} opacity="0.5"/>
          <circle cx={city.x} cy={city.y} r={city.size / 2} fill={city.color}/>
          <text x={city.x} y={city.y + city.size + 12} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">{city.label}</text>
        </g>
      ))}
      {/* Connection lines */}
      <line x1="160" y1="280" x2="260" y2="300" stroke="rgba(136,231,136,0.2)" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="260" y1="300" x2="380" y2="290" stroke="rgba(136,231,136,0.2)" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="380" y1="290" x2="460" y2="270" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Tagline */}
      <text x="280" y="355" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.25)" textAnchor="middle">
        Building Africa's operating layer for professional work
      </text>
    </svg>
  );
}

const openRoles = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Lagos · Remote-friendly", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "Lagos · Accra · Remote", type: "Full-time" },
  { title: "AI/ML Engineer", dept: "Engineering", location: "Remote (Africa)", type: "Full-time" },
  { title: "Sales Development Representative", dept: "Sales", location: "Lagos · Nairobi", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Operations", location: "Remote (Africa)", type: "Full-time" },
];

export default function Careers() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">Careers</p>
          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[62px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            Build the tool the continent uses to run its meetings.
          </h1>
          <p className="text-[17px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">
            We're a small, opinionated team building something that genuinely matters — from Lagos, for Africa. We care about craft, context, and shipping things that work in the real world.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Remote-friendly", "Equity included", "Local salaries", "Lagos or Accra"].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full border border-[rgba(27,20,15,0.15)] text-[13px] text-[rgba(27,20,15,0.7)]">
                {b}
              </span>
            ))}
          </div>
        </div>
        <CareersHeroIllustration />
      </section>

      <section className="py-16 px-6 bg-[#FDF9F4]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-bold text-[#1B140F] mb-8 tracking-tight">Open roles</h2>
          <div className="flex flex-col gap-3">
            {openRoles.map((r) => (
              <div key={r.title} className="bg-[#FAF6F0] border border-[rgba(27,20,15,0.08)] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 hover:border-[rgba(136,231,136,0.4)] transition-colors group cursor-pointer">
                <div>
                  <p className="text-[16px] font-semibold text-[#1B140F] group-hover:text-[#1B2A4A] transition-colors">{r.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.dept}</span>
                    <span className="text-[rgba(27,20,15,0.2)]">·</span>
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.location}</span>
                    <span className="text-[rgba(27,20,15,0.2)]">·</span>
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.type}</span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-[rgba(27,20,15,0.3)] group-hover:text-[#1B2A4A] transition-colors">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[rgba(27,20,15,0.45)] mt-8">
            Don't see your role? Send us a note at <span className="text-[#1B2A4A] font-medium">careers@usemitra.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
