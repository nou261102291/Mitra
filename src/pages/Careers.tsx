import CTABand from "../components/CTABand";

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
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Careers</p>
          <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[62px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-6">
            Build the tool the continent uses to run its meetings.
          </h1>
          <p className="text-[17px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8">
            We're a small, opinionated team building something that genuinely matters — from Lagos, for Africa. We care about craft, context, and shipping things that work in the real world.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Remote-friendly", "Equity included", "Local salaries", "Work from Lagos or Accra"].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full border border-[rgba(27,20,15,0.15)] text-[13px] text-[rgba(27,20,15,0.7)]">
                {b}
              </span>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=640&h=440&fit=crop&auto=format"
          alt="Team working together"
          className="rounded-2xl w-full object-cover aspect-[4/3] bg-[rgba(27,20,15,0.05)]"
        />
      </section>

      {/* Open roles */}
      <section className="py-16 px-6 bg-[#FDF9F4]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-bold text-[#1B140F] mb-8 tracking-tight">Open roles</h2>
          <div className="flex flex-col gap-3">
            {openRoles.map((r) => (
              <div key={r.title} className="bg-[#FAF6F0] border border-[rgba(27,20,15,0.08)] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 hover:border-[rgba(201,84,44,0.25)] transition-colors group cursor-pointer">
                <div>
                  <p className="text-[16px] font-semibold text-[#1B140F] group-hover:text-[#C9542C] transition-colors">{r.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.dept}</span>
                    <span className="text-[rgba(27,20,15,0.2)]">·</span>
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.location}</span>
                    <span className="text-[rgba(27,20,15,0.2)]">·</span>
                    <span className="text-[12px] text-[rgba(27,20,15,0.45)]">{r.type}</span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-[rgba(27,20,15,0.3)] group-hover:text-[#C9542C] transition-colors">
                  <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[rgba(27,20,15,0.45)] mt-8">
            Don't see your role? Send us a note at <span className="text-[#C9542C]">careers@usemitra.com</span>
          </p>
        </div>
      </section>
    </div>
  );
}
