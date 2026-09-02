export default function Terms() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[780px] mx-auto px-6 pt-20 pb-24">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">Legal</p>
        <h1 className="font-[family-name:var(--font-display)] text-[42px] font-bold text-[#1B140F] tracking-tight mb-3">Terms of Service</h1>
        <p className="text-[14px] text-[rgba(27,20,15,0.45)] mb-12">Last updated: 2 September 2026</p>

        <div className="flex flex-col gap-10">

          <Section title="1. Who these terms are between">
            <p>These Terms of Service ("<strong>Terms</strong>") are a legal agreement between you ("<strong>you</strong>," "<strong>User</strong>") and <strong>Mitra Technologies Ltd</strong> ("<strong>Mitra</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"), a company incorporated in Nigeria, regarding your access to and use of the Mitra desktop application, website, and related services (together, the "<strong>Service</strong>").</p>
            <p>By creating an account, downloading the app, or using the Service in any way, you agree to these Terms and to our <a href="/legal/privacy" className="text-[#1B2A4A] underline underline-offset-2">Privacy Policy</a>, which is incorporated by reference. If you are using Mitra on behalf of an organisation, you are confirming you have authority to bind that organisation, and "you" includes that organisation.</p>
            <p>If you do not agree, do not use the Service.</p>
          </Section>

          <Section title="2. Eligibility">
            <p>You must be at least 18 years old (or the age of legal majority in your jurisdiction) and able to form a binding contract to use Mitra. Mitra is intended for business/professional use and is not directed at children. See Section 15 (Children).</p>
          </Section>

          <Section title="3. What Mitra does">
            <p>Mitra is an AI meeting assistant that, once you connect it to a supported calendar and meeting platform, can detect when a meeting starts, record and transcribe the meeting audio, and generate notes, summaries, action items, and draft follow-up communications from the transcript. Mitra also offers optional "advanced/bring-your-own-key" functionality that lets you connect your own third-party AI provider credentials instead of using Mitra's default processing.</p>
            <p>Mitra is a tool that assists you — it does not replace your own judgement. See Section 9 (AI Output Disclaimer).</p>
          </Section>

          <Section title="4. Your account">
            <ul>
              <li>You are responsible for maintaining accurate account information and for all activity that happens under your account.</li>
              <li>You are responsible for keeping your sign-in credentials (including any Google/Microsoft-linked sign-in) secure. Notify us immediately at <a href="mailto:support@usemitra.com" className="text-[#1B2A4A]">support@usemitra.com</a> if you suspect unauthorised access.</li>
              <li>One account is intended for one individual user unless you have purchased a Team/Enterprise plan that explicitly permits multiple seats under one organisational account.</li>
            </ul>
          </Section>

          <Section title="5. Recording meetings — your obligations (please read carefully)">
            <p><strong>Recording other people's voices carries legal obligations that are yours, not Mitra's, to meet.</strong> Laws on recording conversations vary significantly by country, and in some places, by state or region — some require the consent of only one party to a conversation, others require the consent of every participant. By using Mitra's recording/transcription features, you represent and agree that:</p>
            <ul>
              <li>You will only record meetings you are legally entitled to record, and you are solely responsible for determining what consent is required in your jurisdiction and the jurisdictions of other participants.</li>
              <li>You will obtain any consent required from other meeting participants before or at the start of recording, in whatever form the applicable law requires (verbal announcement, visible in-meeting notice, etc.).</li>
              <li>You will not use Mitra to record meetings where recording is prohibited by law, by the terms of the meeting platform, by your employer's policies, or by an agreement with the other participants (e.g., confidential negotiations, privileged legal conversations, or meetings explicitly marked "no recording").</li>
              <li>You will not use Mitra to surveil, harass, or covertly capture anyone in a way that violates their legal rights.</li>
            </ul>
            <p>Mitra is <strong>not</strong> a "meeting bot" that visibly joins the call and announces itself to all participants — this is a deliberate product choice for a smoother experience, but it also means the responsibility for disclosure/consent sits with you as the person initiating the recording. We may, where technically able, provide in-app reminders about local consent norms, but these are a convenience, not a substitute for your own legal judgement.</p>
            <p><strong>Mitra disclaims all liability for your failure to obtain required consent or otherwise comply with recording laws</strong>, and you agree to indemnify us for claims arising from your failure to do so (see Section 14).</p>
          </Section>

          <Section title="6. Acceptable use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service to violate any law, regulation, or third party's rights (including privacy, IP, or confidentiality rights);</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of the Service, except to the extent applicable open-source licences (see Section 8) expressly permit this;</li>
              <li>Use the Service to build a directly competing product using data or output obtained through your use of Mitra;</li>
              <li>Attempt to circumvent usage limits, billing, or access controls;</li>
              <li>Upload or process content you do not have the right to share (e.g., recordings made by someone else, without their permission, where required);</li>
              <li>Use the Service to generate or distribute spam, malware, or deceptive content;</li>
              <li>Use automated means to access the Service outside of our published APIs, if any.</li>
            </ul>
            <p>We may suspend or terminate accounts that violate this section, with or without notice depending on severity (see Section 12).</p>
          </Section>

          <Section title="7. Subscription plans, billing, and payments">
            <ul>
              <li><strong>Free plan:</strong> unlimited notes, meeting history limited to 30 days.</li>
              <li><strong>Pro plan:</strong> billed at ₦15,000/month (or applicable local-currency equivalent), auto-renewing monthly or annually unless cancelled.</li>
              <li><strong>Enterprise plan:</strong> custom pricing, governed by a separate order form/agreement that takes precedence over these Terms where inconsistent.</li>
              <li>Third-party payment processors process payments. We do not store your full card or bank details ourselves — see our Privacy Policy for how payment processors handle your data.</li>
              <li>Subscriptions renew automatically at the then-current price unless cancelled before the renewal date. You can cancel anytime from account settings; cancellation takes effect at the end of the current billing period.</li>
              <li><strong>Refunds:</strong> pro-rated refunds are available within 15 days of a new subscription.</li>
              <li>We may change pricing with at least 10 days' notice to active subscribers; continued use after the price change takes effect constitutes acceptance.</li>
              <li>Failure to pay may result in downgrade to the Free plan or suspension of paid features.</li>
            </ul>
          </Section>

          <Section title="8. Open-source foundation and licensing">
            <p>Mitra is built in part on open-source software released under the MIT Licence. Your use of Mitra is governed by these Terms, not the underlying open-source licence, for anything Mitra provides as a hosted/cloud service (accounts, cloud transcription, billing, etc.). Attribution and licence text for third-party open-source components are available <a href="https://github.com/OpenWhispr/openwhispr/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-[#1B2A4A] underline underline-offset-2">here</a>.</p>
          </Section>

          <Section title="9. AI output disclaimer">
            <p>Notes, summaries, action items, transcripts, and draft follow-up emails generated by Mitra are produced by automated speech-to-text and AI language models. <strong>They may contain errors, omissions, mischaracterisations, or hallucinated content that was not actually said in the meeting.</strong> You are responsible for reviewing AI-generated output before relying on it, sharing it, or acting on it — especially for anything involving commitments, figures, legal or medical content, or decisions with material consequences. Mitra is a productivity aid, not a source of record, and should not be treated as a verified transcript or legal record of a meeting without your own review.</p>
          </Section>

          <Section title="10. Intellectual property">
            <ul>
              <li><strong>Our IP:</strong> The Mitra application, website, branding, and underlying technology (excluding open-source components licensed to us and excluding your content) are owned by us or our licensors and protected by intellectual property law. These Terms do not grant you any rights to our trademarks or branding beyond what is needed to use the Service normally.</li>
              <li><strong>Your content:</strong> You retain ownership of the meeting recordings, transcripts, and notes you generate through Mitra ("<strong>Your Content</strong>"). You grant us a limited licence to process, store, and transmit Your Content solely to provide and improve the Service to you, as described in our Privacy Policy. We do not claim ownership of Your Content, and — unless you opt in separately — we do not use Your Content to train AI models for other customers.</li>
            </ul>
          </Section>

          <Section title="11. Third-party integrations">
            <p>Mitra integrates with third-party services (e.g., Google Calendar, Microsoft 365/Outlook, Zoom, Microsoft Teams, Google Meet, and payment processors). Your use of those integrations is also subject to those third parties' own terms and privacy policies, which we do not control. We are not responsible for the availability, accuracy, or conduct of third-party services, and integrations may break or change if a third party changes their platform.</p>
          </Section>

          <Section title="12. Suspension and termination">
            <ul>
              <li><strong>By you:</strong> You may stop using the Service and delete your account at any time from account settings, or by contacting <a href="mailto:support@usemitra.com" className="text-[#1B2A4A]">support@usemitra.com</a>.</li>
              <li><strong>By us:</strong> We may suspend or terminate your access if you materially breach these Terms, if required by law, or if we discontinue the Service (with reasonable notice where practical, except in cases of security risk, fraud, or serious misconduct where immediate action is necessary).</li>
              <li>On termination, your right to use the Service ends immediately. We will handle your stored data as described in our Privacy Policy's retention/deletion section.</li>
            </ul>
          </Section>

          <Section title="13. Disclaimers and limitation of liability">
            <p className="text-[14px] italic text-[rgba(27,20,15,0.55)]">This section limits our liability to you. Read it carefully; local consumer protection law may override parts of it depending on your jurisdiction.</p>
            <ul>
              <li>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT, EXCEPT WHERE SUCH DISCLAIMERS ARE NOT PERMITTED BY LAW.</li>
              <li>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MITRA AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICE.</li>
              <li>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF ₦50,000 OR THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM.</li>
              <li>Nothing in these Terms limits liability that cannot be limited under applicable law (e.g., liability for our own gross negligence, wilful misconduct, or fraud, where the law prohibits limiting such liability).</li>
            </ul>
          </Section>

          <Section title="14. Indemnification">
            <p>You agree to indemnify and hold Mitra harmless from claims, damages, and expenses (including reasonable legal fees) arising from: (a) your breach of these Terms; (b) your violation of any law, including recording-consent laws (Section 5); (c) content you record, upload, or generate through the Service; or (d) your violation of a third party's rights.</p>
          </Section>

          <Section title="15. Children">
            <p>The Service is not directed at, and should not be used by, anyone under 18. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact us at <a href="mailto:privacy@usemitra.com" className="text-[#1B2A4A]">privacy@usemitra.com</a> and we will take appropriate steps to delete it.</p>
          </Section>

          <Section title="16. Changes to these Terms">
            <p>We may update these Terms from time to time. For material changes, we will provide notice (e.g., in-app notice or email) at least 14 days before they take effect. Continued use of the Service after changes take effect means you accept the updated Terms. If you do not agree, you should stop using the Service before the changes take effect.</p>
          </Section>

          <Section title="17. Governing law and disputes">
            <p>These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>, without regard to conflict-of-law principles, unless applicable local law in your country of residence requires otherwise for consumer protection purposes. Any dispute will first be attempted to be resolved informally by contacting <a href="mailto:support@usemitra.com" className="text-[#1B2A4A]">support@usemitra.com</a>; if unresolved after 30 days, disputes will be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria, except where mandatory local law provides you a different forum.</p>
          </Section>

          <Section title="18. General">
            <ul>
              <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and any order form (for Enterprise customers), form the entire agreement between you and Mitra regarding the Service.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the rest of the Terms remain in effect.</li>
              <li><strong>No waiver:</strong> Our failure to enforce a provision is not a waiver of our right to do so later.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </Section>

          <Section title="19. Contact">
            <p><strong>Mitra Technologies Ltd</strong>, 60a Oshogbo Street, Surulere, Lagos, Nigeria.</p>
            <p>Privacy inquiries: <a href="mailto:privacy@usemitra.com" className="text-[#1B2A4A]">privacy@usemitra.com</a></p>
            <p>General support: <a href="mailto:support@usemitra.com" className="text-[#1B2A4A]">support@usemitra.com</a></p>
          </Section>

        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-4">{title}</h2>
      <div className="flex flex-col gap-3 text-[16px] text-[rgba(27,20,15,0.7)] leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:leading-relaxed [&_strong]:text-[rgba(27,20,15,0.9)] [&_strong]:font-semibold [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  );
}
