import CTABand from "../components/CTABand";

function TeamMemberPlaceholder({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="w-full aspect-square rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden" style={{ background: color }}>
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="tp" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="8" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tp)"/>
        </svg>
      </div>
      <span className="font-[family-name:var(--font-display)] text-[52px] font-black text-white/30 select-none">
        {initials}
      </span>
    </div>
  );
}

function TeamWidePlaceholder() {
  return (
    <div className="w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden relative bg-[#1B2A4A] flex items-end">
      <div className="absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="wp" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="30" height="30" fill="none" stroke="white" strokeWidth="0.5"/>
              <rect x="30" y="30" width="30" height="30" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wp)"/>
        </svg>
      </div>
      {/* Abstract office scene */}
      <svg viewBox="0 0 1280 460" fill="none" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* Desk silhouettes */}
        <rect x="0" y="300" width="1280" height="160" fill="rgba(255,255,255,0.04)"/>
        <rect x="80" y="240" width="300" height="10" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="460" y="220" width="360" height="10" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="900" y="255" width="280" height="10" rx="3" fill="rgba(255,255,255,0.08)"/>
        {/* Laptop screens glow */}
        <rect x="120" y="170" width="200" height="130" rx="8" fill="rgba(136,231,136,0.08)" stroke="rgba(136,231,136,0.15)" strokeWidth="1"/>
        <rect x="530" y="140" width="220" height="140" rx="8" fill="rgba(136,231,136,0.06)" stroke="rgba(136,231,136,0.12)" strokeWidth="1"/>
        <rect x="930" y="175" width="180" height="120" rx="8" fill="rgba(136,231,136,0.08)" stroke="rgba(136,231,136,0.15)" strokeWidth="1"/>
        {/* Person silhouettes */}
        <ellipse cx="220" cy="230" rx="28" ry="40" fill="rgba(255,255,255,0.1)"/>
        <circle cx="220" cy="178" r="22" fill="rgba(255,255,255,0.1)"/>
        <ellipse cx="640" cy="208" rx="30" ry="44" fill="rgba(255,255,255,0.1)"/>
        <circle cx="640" cy="152" r="24" fill="rgba(255,255,255,0.1)"/>
        <ellipse cx="1020" cy="220" rx="26" ry="38" fill="rgba(255,255,255,0.1)"/>
        <circle cx="1020" cy="172" r="20" fill="rgba(255,255,255,0.1)"/>
      </svg>
      <div className="relative px-8 pb-8">
        <span className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.35)]">Mitra HQ · Victoria Island, Lagos</span>
      </div>
    </div>
  );
}

const team = [
  { name: "Emeka Okafor", role: "Co-founder & CEO", bio: "Former product lead at Paystack. Spent a decade building tools for African businesses and got tired of US SaaS products that didn't understand how we work.", initials: "EO", color: "#1B2A4A" },
  { name: "Yewande Balogun", role: "Co-founder & CTO", bio: "AI researcher and engineer. Built ML infrastructure at Flutterwave. Believes Africa should build the AI tools it uses, not just consume them.", initials: "YB", color: "#2a4a1b" },
  { name: "Kofi Mensah", role: "Head of Design", bio: "Designed products at Cowrywise and Moniepoint. Obsessed with interfaces that feel warm and human, not sterile and foreign.", initials: "KM", color: "#4a3a1b" },
];

export default function About() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-16">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">Our story</p>
        <h1 className="font-[family-name:var(--font-display)] text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.08] tracking-tight mb-8">
          Built here,<br />for here.
        </h1>
        <p className="text-[18px] text-[rgba(27,20,15,0.7)] leading-relaxed mb-6 max-w-[680px]">
          Mitra started in a boardroom in Lagos, after a pitch meeting where two of us spent the first hour arguing about what was actually agreed in the last call — because neither of us had good notes.
        </p>
        <p className="text-[18px] text-[rgba(27,20,15,0.7)] leading-relaxed max-w-[680px]">
          We tried every meeting assistant on the market. They were good at transcription. Bad at everything else. None of them understood African business context — the WhatsApp follow-up culture, the multi-currency teams, the 3G connectivity, the Naira pricing. So we built Mitra.
        </p>
      </section>

      <section className="px-6 py-6">
        <div className="max-w-[1280px] mx-auto">
          <TeamWidePlaceholder />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold text-[#1B140F] mb-5 tracking-tight">Our mission</h2>
            <p className="text-[17px] text-[rgba(27,20,15,0.7)] leading-relaxed mb-5">
              Give every professional in Africa the executive assistant that used to be reserved for the C-suite. Not a notetaker. A genuine career multiplier — built on local rails, priced for local reality.
            </p>
            <p className="text-[17px] text-[rgba(27,20,15,0.7)] leading-relaxed">
              Mitra is built on open-source foundations (MIT licensed) and we're committed to transparency about how it works and what it does with your data.
            </p>
          </div>
          <div className="bg-[#1B2A4A] rounded-2xl p-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] italic text-[#FDF9F4] leading-relaxed">
              "People who use Mitra walk into rooms more prepared than the person next to them. That's the product. That's the mission."
            </p>
            <div className="w-6 h-px bg-[#88E788] mt-6 mb-3" />
            <p className="text-[13px] font-semibold text-[rgba(253,249,244,0.7)]">Emeka Okafor, Co-founder</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold text-[#1B140F] mb-10 tracking-tight">The team.</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <TeamMemberPlaceholder initials={member.initials} color={member.color} />
                <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1B140F]">{member.name}</h3>
                <p className="text-[13px] text-[#1B2A4A] font-medium mb-3">{member.role}</p>
                <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
