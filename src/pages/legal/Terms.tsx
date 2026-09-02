export default function Terms() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[780px] mx-auto px-6 pt-20 pb-24">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#C9542C] mb-4">Legal</p>
        <h1 className="font-[family-name:var(--font-display)] text-[42px] font-bold text-[#1B140F] tracking-tight mb-3">Terms of Service</h1>
        <p className="text-[14px] text-[rgba(27,20,15,0.45)] mb-12">Last updated: November 1, 2024</p>

        <div className="prose max-w-none">
          {[
            {
              title: "1. Acceptance of terms",
              body: "By downloading, installing, or using Mitra, you agree to these Terms of Service. If you are using Mitra on behalf of an organisation, you represent that you have authority to bind that organisation to these terms.",
            },
            {
              title: "2. Use of the service",
              body: "Mitra is provided for legitimate business use. You may not use Mitra to record conversations in jurisdictions where recording requires consent of all parties without obtaining that consent. You are responsible for compliance with applicable laws in your jurisdiction.",
            },
            {
              title: "3. Data and privacy",
              body: "Your data is governed by our Privacy Policy, which is incorporated into these terms by reference. Meeting transcripts and notes are your property. We do not sell your data or use it to train AI models.",
            },
            {
              title: "4. Subscriptions and billing",
              body: "Free plans are provided at no charge. Pro plans are billed monthly or annually in your selected currency. Enterprise plans are governed by a separate order form. We accept payments via Paystack, Flutterwave, and major credit cards.",
            },
            {
              title: "5. Intellectual property",
              body: "Mitra's software is built on MIT-licensed open-source technology. Your notes, transcripts, and meeting outputs belong to you. The Mitra brand, name, and unique features are the property of Mitra Technologies Ltd.",
            },
            {
              title: "6. Limitation of liability",
              body: "Mitra is provided 'as is.' We are not liable for transcription inaccuracies, missed meetings, or data loss beyond what is caused by our gross negligence. Our liability is limited to the amount you paid for the service in the prior three months.",
            },
            {
              title: "7. Governing law",
              body: "These terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be resolved through arbitration in Lagos, Nigeria, under the rules of the Lagos Court of Arbitration.",
            },
          ].map((s) => (
            <div key={s.title} className="mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-3">{s.title}</h2>
              <p className="text-[16px] text-[rgba(27,20,15,0.7)] leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="mt-10 pt-8 border-t border-[rgba(27,20,15,0.08)]">
            <p className="text-[14px] text-[rgba(27,20,15,0.5)]">
              Questions about these terms? Contact us at{" "}
              <a href="mailto:legal@usemitra.com" className="text-[#C9542C]">legal@usemitra.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
