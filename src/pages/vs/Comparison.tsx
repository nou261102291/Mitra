import CTABand from "../../components/CTABand";

interface ComparisonConfig {
  competitor: string;
  tagline: string;
  fairNote: string;
  rows: { feature: string; mitra: string | boolean; them: string | boolean }[];
}

const configs: Record<string, ComparisonConfig> = {
  granola: {
    competitor: "Granola",
    tagline: "The honest comparison.",
    fairNote: "Granola is a genuinely well-designed product — minimal, fast, and with thoughtful 'no bot in the call' privacy. We respect the craft. Where Mitra differs is in being built specifically for African professionals: local payment rails, African business context, connectivity resilience, and Linux support. If you're based in the US and price in USD, Granola is excellent. If you're based in Lagos, Accra, or Nairobi — Mitra was built for you.",
    rows: [
      { feature: "Price in local currency", mitra: true, them: false },
      { feature: "Pay via Paystack / Flutterwave", mitra: true, them: false },
      { feature: "No bot in the meeting", mitra: true, them: true },
      { feature: "Works on patchy 3G connections", mitra: true, them: false },
      { feature: "Auto pre-meeting brief", mitra: true, them: false },
      { feature: "One-click follow-up emails", mitra: true, them: true },
      { feature: "Linux support", mitra: true, them: false },
      { feature: "WhatsApp-friendly exports", mitra: true, them: false },
      { feature: "Free plan available", mitra: true, them: true },
      { feature: "Clean, minimal UI", mitra: true, them: true },
    ],
  },
  otter: {
    competitor: "Otter.ai",
    tagline: "The honest comparison.",
    fairNote: "Otter.ai is a genuinely capable transcription product — one of the most accurate in the market, with a solid mobile app and a long track record. It excels at bulk transcription and real-time captions. Where Mitra differs is in what happens before and after the transcript: pre-meeting briefs, structured action items, and follow-up email drafts are Mitra-native features, not add-ons. And critically, Otter sends a visible recording bot into your calls — Mitra doesn't. For African professionals, the biggest practical difference is local payment support and pricing in local currency.",
    rows: [
      { feature: "Price in local currency", mitra: true, them: false },
      { feature: "No bot joining the call", mitra: true, them: false },
      { feature: "Auto pre-meeting brief", mitra: true, them: false },
      { feature: "One-click follow-up emails", mitra: true, them: false },
      { feature: "Action item tracking", mitra: true, them: true },
      { feature: "Real-time live captions", mitra: false, them: true },
      { feature: "Mobile app (iOS/Android)", mitra: false, them: true },
      { feature: "Works on patchy connectivity", mitra: true, them: false },
      { feature: "Paystack / Flutterwave billing", mitra: true, them: false },
      { feature: "Free plan", mitra: true, them: true },
      { feature: "High-accuracy transcription", mitra: true, them: true },
    ],
  },
};

export default function Comparison({ competitor }: { competitor: string }) {
  const config = configs[competitor] ?? configs.granola;

  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">
          Mitra vs. {config.competitor}
        </p>
        <h1 className="text-[48px] md:text-[58px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
          {config.tagline}
        </h1>
      </section>

      {/* Fair note */}
      <section className="px-6 pb-10">
        <div className="max-w-[760px] mx-auto bg-[rgba(136,231,136,0.07)] border border-[rgba(136,231,136,0.25)] rounded-2xl p-7">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">Our honest take on {config.competitor}</p>
          <p className="text-[16px] text-[rgba(27,20,15,0.75)] leading-relaxed">{config.fairNote}</p>
        </div>
      </section>

      <section className="py-6 px-6 pb-16">
        <div className="max-w-[760px] mx-auto">
          <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[rgba(27,20,15,0.08)] px-6 py-4 bg-[rgba(27,20,15,0.02)]">
              <div />
              <div className="text-center text-[13px] font-bold text-[#1B2A4A] font-[family-name:var(--font-display)]">Mitra</div>
              <div className="text-center text-[13px] font-bold text-[rgba(27,20,15,0.4)] font-[family-name:var(--font-display)]">{config.competitor}</div>
            </div>

            {config.rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 items-center border-b border-[rgba(27,20,15,0.05)] last:border-0 ${i % 2 === 0 ? "" : "bg-[rgba(27,20,15,0.015)]"}`}
              >
                <span className="text-[14px] text-[#1B140F]">{row.feature}</span>
                {[row.mitra, row.them].map((val, j) => (
                  <div key={j} className="flex justify-center">
                    {val === true ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill={j === 0 ? "#88E788" : "rgba(27,42,74,0.2)"}/>
                        <path d="M6 10l3 3 5-5" stroke={j === 0 ? "#1B140F" : "#1B2A4A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="rgba(27,20,15,0.06)"/>
                        <path d="M7.5 12.5l5-5M12.5 12.5l-5-5" stroke="rgba(27,20,15,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-[rgba(27,20,15,0.4)] mt-5">
            Information accurate as of September 2026. We update this page regularly — if anything here is wrong, <a href="/contact" className="underline">let us know</a>.
          </p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
