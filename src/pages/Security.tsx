import CTABand from "../components/CTABand";

export default function Security() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[900px] mx-auto px-6 pt-20 pb-16">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Security & Privacy</p>
        <h1 className="font-[family-name:var(--font-display)] text-[48px] md:text-[60px] font-bold text-[#1B140F] leading-[1.1] tracking-tight mb-6">
          Your meetings. Your data.
        </h1>
        <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed max-w-[600px]">
          Meeting audio is sensitive. We take that seriously and want to be transparent about exactly what happens to it.
        </p>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5">
          {[
            {
              q: "Where does my audio go?",
              a: "Audio is processed locally on your device when possible. For AI-enhanced summaries and follow-ups, audio is sent to our secure cloud infrastructure over TLS encryption. Audio is not stored after transcription is complete — only the transcript is retained, and only for the duration of your retention setting.",
            },
            {
              q: "What's encrypted?",
              a: "Transcripts, notes, and all meeting data are encrypted at rest (AES-256) and in transit (TLS 1.3). Encryption keys are managed per-account and never accessible to Mitra employees.",
            },
            {
              q: "What's stored locally vs. in the cloud?",
              a: "Audio processing for basic transcription is local by default. Transcript text, AI summaries, and action items are synced to our encrypted cloud to enable cross-device access. You can opt for local-only mode (Pro and Enterprise) to prevent any cloud sync.",
            },
            {
              q: "How long is my data retained?",
              a: "Free accounts retain transcripts for 30 days. Pro accounts retain indefinitely. Enterprise accounts can set custom retention windows. You can delete any meeting or your entire account at any time from your settings — deletion is permanent and immediate.",
            },
            {
              q: "Does Mitra train AI models on my data?",
              a: "No. Your meeting data is never used to train our AI models or any third-party AI models. Your conversations stay yours.",
            },
            {
              q: "Who are your sub-processors?",
              a: "We use a small set of sub-processors for infrastructure (AWS / GCP), AI inference (Anthropic), and payments (Paystack, Flutterwave). A complete, up-to-date list is maintained at our DPA page.",
            },
            {
              q: "Is Mitra SOC 2 compliant?",
              a: "SOC 2 Type II audit is currently in progress (targeting Q2 2025). ISO 27001 assessment is on the roadmap. We're happy to share our current security documentation and questionnaire responses for enterprise prospects.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#FDF9F4] rounded-2xl p-7 border border-[rgba(27,20,15,0.08)]">
              <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1B140F] mb-3">{item.q}</h3>
              <p className="text-[15px] text-[rgba(27,20,15,0.65)] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: "AES-256", sublabel: "Encryption at rest" },
            { label: "TLS 1.3", sublabel: "Encryption in transit" },
            { label: "No audio storage", sublabel: "After transcription" },
            { label: "Instant deletion", sublabel: "On request" },
          ].map((t) => (
            <div key={t.label} className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B2A4A] mb-1">{t.label}</p>
              <p className="text-[13px] text-[rgba(27,20,15,0.5)]">{t.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
