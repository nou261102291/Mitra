import CTABand from "../components/CTABand";

const team = [
  {
    name: "Emeka Okafor",
    role: "Co-founder & CEO",
    bio: "Former product lead at Paystack. Spent a decade building tools for African businesses and got tired of US SaaS products that didn't understand how we work.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Yewande Balogun",
    role: "Co-founder & CTO",
    bio: "AI researcher and engineer. Built ML infrastructure at Flutterwave. Believes Africa should build the AI tools it uses, not just consume them.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Kofi Mensah",
    role: "Head of Design",
    bio: "Designed products at Cowrywise and Moniepoint. Obsessed with interfaces that feel warm and human, not sterile and foreign.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format",
  },
];

export default function About() {
  return (
    <div className="bg-[#FAF6F0]">
      {/* Hero */}
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-16">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Our story</p>
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

      {/* Photo */}
      <section className="px-6 py-6">
        <div className="max-w-[1280px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1280&h=500&fit=crop&auto=format"
            alt="Mitra team at work in Lagos"
            className="w-full rounded-2xl object-cover h-[320px] md:h-[460px] bg-[rgba(27,20,15,0.05)]"
          />
        </div>
      </section>

      {/* Mission */}
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
            <div className="w-6 h-px bg-[#E8A94C] mt-6 mb-3" />
            <p className="text-[13px] font-semibold text-[rgba(253,249,244,0.7)]">Emeka Okafor, Co-founder</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold text-[#1B140F] mb-10 tracking-tight">The team.</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full rounded-2xl aspect-square object-cover mb-5 bg-[rgba(27,20,15,0.05)]"
                />
                <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1B140F]">{member.name}</h3>
                <p className="text-[13px] text-[#C9542C] font-medium mb-3">{member.role}</p>
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
