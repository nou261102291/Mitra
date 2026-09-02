import CTABand from "../../components/CTABand";

interface ComparisonConfig {
  competitor: string;
  tagline: string;
  rows: { feature: string; mitra: string | boolean; them: string | boolean }[];
}

const configs: Record<string, ComparisonConfig> = {
  granola: {
    competitor: "Granola",
    tagline: "Granola is a great product — built for SF founders. Mitra is built for Africa.",
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
      { feature: "Priced in USD only", mitra: false, them: true },
    ],
  },
  otter: {
    competitor: "Otter.ai",
    tagline: "Otter is a solid transcription tool. Mitra is your executive assistant.",
    rows: [
      { feature: "Price in local currency", mitra: true, them: false },
      { feature: "No bot joining the call", mitra: true, them: false },
      { feature: "Auto pre-meeting brief", mitra: true, them: false },
      { feature: "One-click follow-up emails", mitra: true, them: false },
      { feature: "Action item tracking", mitra: true, them: true },
      { feature: "Works on patchy connectivity", mitra: true, them: false },
      { feature: "Linux support", mitra: true, them: false },
      { feature: "Paystack / Flutterwave billing", mitra: true, them: false },
      { feature: "Free plan", mitra: true, them: true },
      { feature: "Sends recording bot to calls", mitra: false, them: true },
    ],
  },
};

export default function Comparison({ competitor }: { competitor: string }) {
  const config = configs[competitor] ?? configs.granola;

  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">
          Mitra vs. {config.competitor}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[48px] md:text-[58px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
          The honest comparison.
        </h1>
        <p className="text-[17px] text-[rgba(27,20,15,0.6)] max-w-[500px] mx-auto">
          {config.tagline}
        </p>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[rgba(27,20,15,0.08)] px-6 py-4 bg-[rgba(27,20,15,0.02)]">
              <div />
              <div className="text-center text-[13px] font-bold text-[#C9542C] font-[family-name:var(--font-display)]">Mitra</div>
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
                        <circle cx="10" cy="10" r="9" fill={j === 0 ? "#C9542C" : "rgba(27,42,74,0.3)"}/>
                        <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : val === false ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="rgba(27,20,15,0.06)"/>
                        <path d="M7.5 12.5l5-5M12.5 12.5l-5-5" stroke="rgba(27,20,15,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <span className="text-[13px] text-[#1B140F]">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-[rgba(27,20,15,0.4)] mt-5">
            Information accurate as of November 2024. We update this page regularly.
          </p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
