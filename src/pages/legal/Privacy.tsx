export default function Privacy() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="max-w-[780px] mx-auto px-6 pt-20 pb-24">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-4">Legal</p>
        <h1 className="font-[family-name:var(--font-display)] text-[42px] font-bold text-[#1B140F] tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-[14px] text-[rgba(27,20,15,0.45)] mb-12">Last updated: 2 September 2026</p>

        <div className="flex flex-col gap-10">

          <Sec title="1. Who we are">
            <p><strong>Mitra Technologies Ltd</strong> ("Mitra," "we," "us") is the data controller responsible for the personal data described in this Privacy Policy, for the Mitra desktop application, website, and related services (the "<strong>Service</strong>"). If you have questions about this policy or want to exercise your data rights, contact us at <a href="mailto:hey@usemitra.com">hey@usemitra.com</a>.</p>
          </Sec>

          <Sec title="2. Scope of this policy">
            <p>This policy covers personal data we process about:</p>
            <ul>
              <li><strong>Users</strong> — people who create a Mitra account and use the Service directly;</li>
              <li><strong>Meeting participants</strong> — other people who appear in recordings/transcripts made by a Mitra user, who themselves may not be Mitra account holders (see Section 8 — this group has different, more limited rights and protections you should understand).</li>
            </ul>
          </Sec>

          <Sec title="3. What data we collect">
            <h3>From you directly</h3>
            <ul>
              <li><strong>Account data:</strong> name, email address, and authentication data when you sign in via Google or Microsoft (we receive limited profile information from these providers per their consent screens — we do not receive your Google/Microsoft password).</li>
              <li><strong>Payment data:</strong> billing name, plan selection, and transaction history. Full card/bank details are collected and processed directly by our payment processors; we receive only confirmation of payment status and limited billing metadata, not full card numbers.</li>
              <li><strong>Support communications:</strong> anything you send us via email or support channels.</li>
            </ul>
            <h3>Generated through your use of the Service</h3>
            <ul>
              <li><strong>Meeting audio and/or video</strong> captured during recording sessions you initiate.</li>
              <li><strong>Transcripts</strong> generated from that audio.</li>
              <li><strong>AI-generated notes, summaries, action items, and draft follow-up content</strong> derived from transcripts.</li>
              <li><strong>Calendar data</strong>, if you connect Google Calendar or Microsoft 365 — meeting titles, times, and attendee lists, used to detect meetings and prepare briefs.</li>
              <li><strong>Usage/device data:</strong> app version, operating system, crash logs, and feature-usage analytics, collected to maintain and improve the Service.</li>
            </ul>
            <h3>From meeting participants (who may not be Mitra users)</h3>
            <p>When a Mitra user records a meeting, we may process the voice, likeness (if video is captured), and spoken content of other participants in that meeting, even though they have not created a Mitra account or agreed to this policy directly. See Section 8 for how we handle this.</p>
          </Sec>

          <Sec title="4. How we use your data">
            <p>We use the data above to:</p>
            <ul>
              <li>Provide the core Service (meeting detection, recording, transcription, note generation, calendar sync);</li>
              <li>Process payments and manage your subscription;</li>
              <li>Provide customer support;</li>
              <li>Maintain security, detect fraud/abuse, and enforce our Terms of Service;</li>
              <li>Improve and debug the Service (using aggregated or de-identified data where feasible);</li>
              <li>Send you Service-related communications (billing notices, security alerts, material policy changes); with your separate opt-in consent, product updates or marketing.</li>
            </ul>
            <p><strong>We do not sell your personal data.</strong> We do not use your meeting content to train AI models for the benefit of other customers unless you explicitly opt in to such a programme.</p>
          </Sec>

          <Sec title="5. Legal basis for processing (NDPA / GDPR-style basis)">
            <p>Depending on the processing activity, our legal basis includes:</p>
            <ul>
              <li><strong>Consent</strong> — for recording your meetings, connecting third-party integrations, and any optional marketing communications;</li>
              <li><strong>Performance of a contract</strong> — for account creation, billing, and providing the core Service you have signed up for;</li>
              <li><strong>Legitimate interest</strong> — for security, fraud prevention, and Service improvement, balanced against your rights;</li>
              <li><strong>Legal obligation</strong> — where we must retain or disclose data to comply with law (e.g., tax/financial recordkeeping for payments).</li>
            </ul>
          </Sec>

          <Sec title="6. Who we share data with (subprocessors)">
            <p>We share data with the following categories of third-party service providers, solely to operate the Service. We require these providers to protect your data under written agreements:</p>
            <div className="overflow-x-auto rounded-xl border border-[rgba(27,20,15,0.08)] mt-1">
              <table className="w-full text-[15px] border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(27,20,15,0.08)] bg-[rgba(27,20,15,0.02)]">
                    <th className="text-left px-4 py-3 font-semibold text-[rgba(27,20,15,0.7)]">Category</th>
                    <th className="text-left px-4 py-3 font-semibold text-[rgba(27,20,15,0.7)]">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cloud hosting & database", "Storing account, meeting, and note data"],
                    ["Speech-to-text / AI processing", "Transcription and note/summary generation"],
                    ["Sign-in / calendar", "Authentication and calendar sync"],
                    ["Payments", "Billing and subscription processing"],
                    ["Meeting platforms", "Detecting and capturing meeting audio"],
                  ].map(([cat, purpose], i, arr) => (
                    <tr key={cat} className={i < arr.length - 1 ? "border-b border-[rgba(27,20,15,0.06)]" : ""}>
                      <td className="px-4 py-3 text-[rgba(27,20,15,0.7)]">{cat}</td>
                      <td className="px-4 py-3 text-[rgba(27,20,15,0.7)]">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>We may also disclose data where required by law, to respond to valid legal process, to protect our rights or the safety of users, or in connection with a merger, acquisition, or sale of assets (with notice to affected users where required).</p>
          </Sec>

          <Sec title="7. Advanced / bring-your-own-key (BYOK) mode">
            <p>If you enable Mitra's optional advanced setting to connect your own AI provider API key or run a local model, transcripts you process this way are sent directly to the provider you configured, under <strong>their</strong> privacy terms, not ours. We are not able to see or control that data once it leaves the Service through a BYOK connection you have configured.</p>
          </Sec>

          <Sec title="8. A note on meeting participants who are not Mitra users">
            <p>When you use Mitra to record a meeting, other participants' voices, words, and (if video is captured) likeness become part of the data we process — even though they never created an account or agreed to this policy. <strong>This is why Section 5 of our Terms of Service makes you, the user initiating the recording, responsible for obtaining any consent required by law before recording.</strong> From our side:</p>
            <ul>
              <li>We process this data as your data processor/controller for the purpose of providing the transcription/notes feature you requested.</li>
              <li>We retain it under the same retention rules as your other meeting data (Section 9).</li>
              <li>A non-user participant who wants to exercise a data-subject right (e.g., request deletion of their voice data from a specific recording) can contact us at <a href="mailto:privacy@usemitra.com">privacy@usemitra.com</a>, and we will work with the Mitra user who made the recording to address the request, consistent with our obligations under applicable law.</li>
            </ul>
          </Sec>

          <Sec title="9. Data retention">
            <ul>
              <li><strong>Free plan:</strong> meeting notes and transcripts are retained for 30 days, after which older content is deleted unless you upgrade.</li>
              <li><strong>Pro/Enterprise plans:</strong> retained for the duration of your active subscription, plus 30 days after cancellation, after which data is deleted unless you request earlier deletion.</li>
              <li><strong>Account data:</strong> retained while your account is active; deleted or anonymised within 30 days of account closure, except where we must retain limited records for legal/tax/dispute-resolution purposes.</li>
              <li><strong>Raw audio:</strong> raw audio is deleted after transcription completes; only the text transcript is retained.</li>
            </ul>
          </Sec>

          <Sec title="10. Your rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you;</li>
              <li><strong>Correct</strong> inaccurate data;</li>
              <li><strong>Delete</strong> your data ("right to erasure");</li>
              <li><strong>Withdraw consent</strong> at any time, where processing is based on consent (e.g., disconnecting a calendar integration, or deleting recorded meetings);</li>
              <li><strong>Port</strong> your data to another service in a structured format;</li>
              <li><strong>Object</strong> to certain processing, including for marketing;</li>
              <li><strong>Lodge a complaint</strong> with your local data protection authority — in Nigeria, the <strong>Nigeria Data Protection Commission (NDPC)</strong>.</li>
            </ul>
            <p>To exercise any of these rights, contact <a href="mailto:privacy@usemitra.com">privacy@usemitra.com</a>. We will respond within the timeframe required by applicable law.</p>
          </Sec>

          <Sec title="11. International data transfers">
            <p>Some of our subprocessors (e.g., cloud hosting or AI providers) may process data outside Nigeria. Where we transfer personal data internationally, we take steps required under NDPA and, where applicable, other regimes (such as standard contractual clauses or equivalent safeguards) to ensure your data remains protected to a comparable standard.</p>
          </Sec>

          <Sec title="12. Security">
            <p>We use technical and organisational measures to protect your data, including encryption in transit, access controls, and secure credential storage (session credentials are stored in your device's OS keychain rather than in plain text). No system is 100% secure, and we cannot guarantee absolute security, but we maintain a data breach response process and will notify affected users and, where legally required, the NDPC, within the timeframe required by law if a breach affecting your data occurs.</p>
          </Sec>

          <Sec title="13. Cookies and website analytics">
            <p>Our marketing website may use cookies or similar technologies for essential site functionality and, where you consent, analytics. We currently use PostHog for product analytics. You can contact us to request information about specific cookies in use.</p>
          </Sec>

          <Sec title="14. Children">
            <p>The Service is not directed at children under 18, and we do not knowingly collect data from them. See Section 15 of our Terms of Service.</p>
          </Sec>

          <Sec title="15. Changes to this policy">
            <p>We may update this policy from time to time. We will post the updated version here with a new "Last updated" date, and for material changes, we will provide additional notice (e.g., in-app or by email) before the changes take effect.</p>
          </Sec>

          <Sec title="16. Contact us">
            <p><strong>Mitra Technologies Ltd</strong>, 60a Oshogbo Street, Surulere, Lagos, Nigeria.</p>
            <p>Privacy inquiries: <a href="mailto:privacy@usemitra.com">privacy@usemitra.com</a></p>
            <p>General support: <a href="mailto:support@usemitra.com">support@usemitra.com</a></p>
          </Sec>

        </div>
      </section>
    </div>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1B140F] mb-4">{title}</h2>
      <div className="flex flex-col gap-3 text-[16px] text-[rgba(27,20,15,0.7)] leading-relaxed [&_h3]:text-[11px] [&_h3]:font-semibold [&_h3]:text-[rgba(27,20,15,0.4)] [&_h3]:uppercase [&_h3]:tracking-widest [&_h3]:mt-2 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-[rgba(27,20,15,0.9)] [&_a]:text-[#1B2A4A] [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  );
}
