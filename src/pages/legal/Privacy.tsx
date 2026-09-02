export default function Privacy() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[780px] mx-auto px-6 pt-20 pb-24">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Legal</p>
        <h1 className="font-[family-name:var(--font-display)] text-[42px] font-bold text-[#1B140F] tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-[14px] text-[rgba(27,20,15,0.45)] mb-12">Last updated: November 1, 2024</p>

        <div className="flex flex-col gap-8">
          {[
            {
              title: "What data we collect",
              body: "We collect your name, email address, and payment information when you sign up. We collect meeting transcripts and notes produced by Mitra. We collect usage analytics (e.g. features used, error logs) to improve the product. We do not collect meeting audio after transcription is complete.",
            },
            {
              title: "How we use your data",
              body: "We use your data to provide and improve the Mitra service, process payments, and send you product communications. We do not sell your data. We do not use your meeting content to train AI models. We do not share your data with third parties except as necessary to operate the service (see sub-processors).",
            },
            {
              title: "Data storage and security",
              body: "Transcripts and notes are encrypted at rest (AES-256) and in transit (TLS 1.3). Data is stored in data centres in the EU and US. We are evaluating African data residency options and will update this policy when available.",
            },
            {
              title: "Your rights",
              body: "You may access, export, or delete your data at any time from your account settings. Deletion is permanent and processed within 24 hours. You may also contact us at privacy@usemitra.com to exercise these rights.",
            },
            {
              title: "Sub-processors",
              body: "We use AWS and Google Cloud Platform for infrastructure, Anthropic for AI summarisation, Paystack and Flutterwave for payments, and Postmark for transactional email. A complete list is available on request.",
            },
            {
              title: "Contact",
              body: "For privacy questions, contact our Data Protection Officer at privacy@usemitra.com. Our registered address is Mitra Technologies Ltd, Victoria Island, Lagos, Nigeria.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-3">{s.title}</h2>
              <p className="text-[16px] text-[rgba(27,20,15,0.7)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
