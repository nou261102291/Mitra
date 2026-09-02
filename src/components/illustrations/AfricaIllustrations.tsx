// Animated product illustrations for the "Built for Africa" section
import { useAnimLoop, sh } from "./animUtils";

// ── PaymentIllustration ──────────────────────────────────────────────────────
// Shows a Paystack-style local payment being completed
// 7 steps × 600 ms = 4.2 s play, 4 s hold → ~8.2 s loop
export function PaymentIllustration() {
  const { ref, step } = useAnimLoop(7, 600, 4000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="320" rx="20" fill="#1B2A4A"/>
        {/* Subtle grid */}
        <rect width="480" height="320" rx="20" fill="url(#pg)" opacity="0.03"/>
        <defs>
          <pattern id="pg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0M0 32V0" stroke="#FDF9F4" strokeWidth="0.5"/>
          </pattern>
        </defs>

        {/* Mitra upgrade prompt — always */}
        <rect x="40" y="28" width="400" height="52" rx="12" fill="rgba(253,249,244,0.06)"/>
        <circle cx="64" cy="54" r="8" fill="#88E788"/>
        <text x="80" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FDF9F4">Upgrade to Mitra Pro</text>
        <text x="80" y="66" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(253,249,244,0.5)">Unlimited history · Follow-up emails · ₦15,000/mo</text>
        <rect x="376" y="40" width="52" height="28" rx="7" fill="#88E788" style={{ opacity: step < 6 ? 1 : 0, transition: "opacity 0.3s ease" }}/>
        <text x="402" y="58" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F" textAnchor="middle" style={{ opacity: step < 6 ? 1 : 0, transition: "opacity 0.3s ease" }}>Pay</text>

        {/* Payment modal — step 1 */}
        <g style={sh(step, 1)}>
          <rect x="120" y="92" width="240" height="208" rx="16" fill="white" filter="url(#pshadow)"/>
          <defs>
            <filter id="pshadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#1B140F" floodOpacity="0.2"/>
            </filter>
          </defs>
          {/* Paystack header */}
          <rect x="120" y="92" width="240" height="48" rx="16" fill="#01C3A7"/>
          <rect x="120" y="116" width="240" height="24" fill="#01C3A7"/>
          <text x="240" y="122" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Paystack</text>
        </g>

        {/* Merchant info — step 2 */}
        <g style={sh(step, 2)}>
          <text x="240" y="160" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.5)" textAnchor="middle">Mitra Technologies Ltd</text>
          <text x="240" y="178" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="800" fill="#1B140F" textAnchor="middle">₦15,000</text>
          <text x="240" y="194" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.4)" textAnchor="middle">Monthly · Pro Plan</text>
        </g>

        {/* Card input — step 3 */}
        <g style={sh(step, 3)}>
          <rect x="140" y="204" width="200" height="34" rx="8" fill="#F5F5F5" stroke="rgba(27,20,15,0.12)" strokeWidth="1"/>
          <text x="156" y="225" fontFamily="monospace" fontSize="12" fill="rgba(27,20,15,0.5)">5399 •••• •••• 7741</text>
          <text x="312" y="225" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="#01C3A7" fontWeight="600">GTB</text>
        </g>

        {/* OTP row — step 4 */}
        <g style={sh(step, 4)}>
          <text x="240" y="256" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.45)" textAnchor="middle">Enter OTP sent to +234 •••• 7891</text>
          <rect x="172" y="262" width="32" height="28" rx="6" fill="#F5F5F5" stroke="rgba(27,20,15,0.12)" strokeWidth="1"/>
          <rect x="212" y="262" width="32" height="28" rx="6" fill="#F5F5F5" stroke="rgba(27,20,15,0.12)" strokeWidth="1"/>
          <rect x="252" y="262" width="32" height="28" rx="6" fill="#F5F5F5" stroke="rgba(27,20,15,0.12)" strokeWidth="1"/>
          <rect x="292" y="262" width="32" height="28" rx="6" fill="#F5F5F5" stroke="rgba(1,195,167,0.5)" strokeWidth="1.5"/>
          <text x="188" y="281" fontFamily="monospace" fontSize="14" fill="#1B140F" textAnchor="middle">4</text>
          <text x="228" y="281" fontFamily="monospace" fontSize="14" fill="#1B140F" textAnchor="middle">8</text>
          <text x="268" y="281" fontFamily="monospace" fontSize="14" fill="#1B140F" textAnchor="middle">3</text>
          <rect x="302" y="269" width="2" height="14" rx="1" fill="#01C3A7" className="cursor-blink"/>
        </g>

        {/* Pay button — step 5 */}
        <g style={sh(step, 5)}>
          <rect x="140" y="296" width="200" height="0" rx="0"/>
        </g>

        {/* Success state — step 6 */}
        <g style={sh(step, 6)}>
          <rect x="120" y="92" width="240" height="208" rx="16" fill="white"/>
          <circle cx="240" cy="168" r="36" fill="rgba(136,231,136,0.15)"/>
          <circle cx="240" cy="168" r="24" fill="#88E788"/>
          <path d="M228 168l8 8 16-16" stroke="#1B140F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="240" y="218" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="#1B140F" textAnchor="middle">Payment successful</text>
          <text x="240" y="234" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.5)" textAnchor="middle">₦15,000 · Mitra Pro · Ref: MTR-2024-8813</text>
        </g>

        {/* Step 7: Pro badge appears on Mitra UI */}
        <g style={sh(step, 7)}>
          <rect x="376" y="40" width="52" height="28" rx="7" fill="rgba(253,249,244,0.15)"/>
          <text x="402" y="52" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700" fill="#88E788" textAnchor="middle">PRO</text>
          <text x="402" y="63" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fill="rgba(136,231,136,0.7)" textAnchor="middle">Active</text>
        </g>
      </svg>
    </div>
  );
}

// ── WhatsAppIllustration ─────────────────────────────────────────────────────
// Shows a Mitra summary being exported and received in WhatsApp
// 6 steps × 650 ms = 3.9 s play, 5 s hold → ~8.9 s loop
const WA_LINES = [
  "📋 *Series A Update — 14 Nov 2024*",
  "*Key Decision:* Abuja expansion Q1 approved (₦18M)",
  "*Action Items:*",
  "→ Chidi: revised model by Fri",
  "→ Amara: schedule Interswitch call",
  "→ Emeka: board memo (pending)",
  "_Generated by Mitra · usemitra.com_",
];

export function WhatsAppIllustration() {
  const { ref, step } = useAnimLoop(6, 650, 5000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="320" rx="20" fill="#ECE5DD"/>

        {/* WA header */}
        <rect width="480" height="56" rx="0" fill="#075E54"/>
        <rect width="480" height="56" rx="20" fill="#075E54"/>
        <rect x="0" y="36" width="480" height="20" fill="#075E54"/>
        <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.15)"/>
        <text x="40" y="33" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">TA</text>
        <text x="62" y="22" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="white">Tunde Adeyemi</text>
        <text x="62" y="37" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">online</text>

        {/* Previous chat bubbles — always */}
        <rect x="24" y="68" width="160" height="28" rx="10" fill="white"/>
        <text x="36" y="86" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">GM guys, quick update 👋</text>
        <rect x="296" y="68" width="160" height="28" rx="10" fill="#DCF8C6"/>
        <text x="308" y="86" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">Ready when you are 🙌</text>

        {/* Mitra export button — step 1 */}
        <g style={sh(step, 1)}>
          <rect x="300" y="108" width="156" height="36" rx="10" fill="#1B2A4A"/>
          <text x="378" y="122" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#88E788" textAnchor="middle">Mitra</text>
          <text x="378" y="136" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(136,231,136,0.7)" textAnchor="middle">Export to WhatsApp</text>
        </g>

        {/* WhatsApp message bubble — full size, lines fade in one by one */}
        <g style={sh(step, 2)}>
          <rect x="24" y="108" width="280" height="148" rx="12" fill="white"/>
          {WA_LINES.map((line, i) => {
            const isBold = line.startsWith("*") || line.startsWith("📋");
            const isItalic = line.startsWith("_");
            const cleanLine = line.replace(/\*/g, "").replace(/_/g, "");
            return (
              <text
                key={i}
                x="36"
                y={124 + i * 20}
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize={i === 0 ? 11 : 10}
                fontWeight={isBold ? "700" : "400"}
                fontStyle={isItalic ? "italic" : "normal"}
                fill={isItalic ? "rgba(27,20,15,0.4)" : "rgba(27,20,15,0.85)"}
                style={sh(step, i + 2)}
              >
                {cleanLine}
              </text>
            );
          })}
          {/* Checkmarks + timestamp */}
          <text x="298" y="254" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="#4FC3F7" style={sh(step, 7)}>✓✓</text>
          <text x="36" y="268" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.35)" style={sh(step, 7)}>09:47</text>
        </g>
      </svg>
    </div>
  );
}
