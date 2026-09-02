// Animated UI illustrations for How It Works sections
import { useEffect, useRef, useState } from "react";

function useAnimLoop(steps: number, stepMs: number, holdMs: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(steps);
  const [active, setActive] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(steps);
      return;
    }
    function go(s: number) {
      if (s < steps) {
        timer.current = setTimeout(() => { setStep(s + 1); go(s + 1); }, stepMs);
      } else {
        timer.current = setTimeout(() => { setStep(0); go(0); }, holdMs);
      }
    }
    go(0);
    return () => clearTimeout(timer.current);
  }, [active]);

  return { ref, step, active };
}

function sh(step: number, n: number): React.CSSProperties {
  return { opacity: step >= n ? 1 : 0, transition: "opacity 0.45s ease" };
}

// ── Before ──────────────────────────────────────────────────────────────────
// 9 steps × 490 ms = 4.4 s play, 6 s hold → ~10.4 s loop
export function BeforeIllustration() {
  const { ref, step } = useAnimLoop(9, 490, 6000);

  return (
    <div ref={ref} className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Outer card */}
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Calendar header — always */}
        <rect x="24" y="24" width="432" height="44" rx="10" fill="#1B2A4A"/>
        <text x="44" y="51" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FDF9F4">
          November 2024
        </text>
        <rect x="390" y="36" width="20" height="20" rx="5" fill="rgba(255,255,255,0.12)"/>
        <rect x="420" y="36" width="20" height="20" rx="5" fill="rgba(255,255,255,0.12)"/>
        <text x="395" y="50" fontFamily="sans-serif" fontSize="10" fill="rgba(253,249,244,0.7)">‹</text>
        <text x="425" y="50" fontFamily="sans-serif" fontSize="10" fill="rgba(253,249,244,0.7)">›</text>

        {/* Meeting card — always */}
        <rect x="24" y="84" width="432" height="108" rx="12" fill="white"/>
        <rect x="24" y="84" width="432" height="108" rx="12" stroke="#88E788" strokeWidth="1.5"/>
        <rect x="24" y="84" width="4" height="108" rx="2" fill="#88E788"/>
        <text x="44" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="#1B140F">
          Series A Update Call
        </text>
        <text x="44" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fill="rgba(27,20,15,0.5)">
          Thursday 14 Nov · 10:00 WAT · Zoom
        </text>

        {/* Join button — ghost initially, green at step 9 */}
        <g style={sh(step, 1)}>
          <rect x="370" y="143" width="74" height="28" rx="8"
            style={{
              fill: step >= 9 ? "#88E788" : "rgba(27,20,15,0.07)",
              transition: "fill 0.55s ease",
            }}
          />
          <text x="407" y="161" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700"
            textAnchor="middle"
            style={{
              fill: step >= 9 ? "#1B140F" : "rgba(27,20,15,0.28)",
              transition: "fill 0.55s ease",
            }}
          >
            Join →
          </text>
        </g>

        {/* Attendee avatars — steps 1–4 */}
        <g style={sh(step, 1)}>
          <circle cx="44" cy="155" r="14" fill="#1B2A4A"/>
          <text x="44" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">EO</text>
        </g>
        <g style={sh(step, 2)}>
          <circle cx="74" cy="155" r="14" fill="#88E788"/>
          <text x="74" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#1B140F" textAnchor="middle">YB</text>
        </g>
        <g style={sh(step, 3)}>
          <circle cx="104" cy="155" r="14" fill="#E8A94C"/>
          <text x="104" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#1B140F" textAnchor="middle">KM</text>
        </g>
        <g style={sh(step, 4)}>
          <circle cx="134" cy="155" r="14" fill="rgba(27,20,15,0.1)"/>
          <text x="134" y="160" fontFamily="sans-serif" fontSize="10" fill="rgba(27,20,15,0.5)" textAnchor="middle">+4</text>
        </g>

        {/* Mitra Brief panel — step 5 */}
        <g style={sh(step, 5)}>
          <rect x="24" y="208" width="432" height="108" rx="12" fill="rgba(136,231,136,0.07)"/>
          <rect x="24" y="208" width="432" height="108" rx="12" stroke="rgba(136,231,136,0.4)" strokeWidth="1"/>
          <circle cx="44" cy="228" r="6" fill="#88E788"/>
          <text x="58" y="232" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B140F">
            Mitra Brief
          </text>
          <text x="388" y="232" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.35)">
            Ready 10 min before
          </text>
        </g>

        {/* Brief bullets — steps 6–8 */}
        <g style={{ ...sh(step, 6), transform: step >= 6 ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.45s ease, transform 0.45s ease" }}>
          <circle cx="40" cy="254" r="2.5" fill="#88E788"/>
          <text x="52" y="258" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
            Last call (Oct 28): Runway extended to 18 months, team hiring Q1
          </text>
        </g>
        <g style={{ ...sh(step, 7), transform: step >= 7 ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.45s ease, transform 0.45s ease" }}>
          <circle cx="40" cy="276" r="2.5" fill="#88E788"/>
          <text x="52" y="280" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
            Open action: Revised cap table from Yewande — not sent yet
          </text>
        </g>
        <g style={{ ...sh(step, 8), transform: step >= 8 ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.45s ease, transform 0.45s ease" }}>
          <circle cx="40" cy="298" r="2.5" fill="#88E788"/>
          <text x="52" y="302" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
            Lead investor flag: Kofi was concerned about GTM timeline
          </text>
        </g>
      </svg>
    </div>
  );
}

// ── During ───────────────────────────────────────────────────────────────────
// 5 steps × 700 ms = 3.5 s play (same cadence as hero), 5 s hold → ~8.5 s loop
const DURING_NOTES = [
  { tag: "Decision", tagW: 52, color: "#1B2A4A", line1: "Expand to Abuja in Q1 —", line2: "budget approved" },
  { tag: "Action",   tagW: 38, color: "#88E788",  line1: "Chidi → revised deck",   line2: "by Friday" },
  { tag: "Flagged",  tagW: 44, color: "#E8A94C",  line1: "GTM timeline concern",   line2: "from Kofi — to address" },
  { tag: "Action",   tagW: 38, color: "#88E788",  line1: "Amara schedules pilot",  line2: "call — Interswitch" },
];
const NOTE_YS = [84, 130, 174, 218];

const WAVE_BARS = [
  { x: 52, y: 210, h: 8,  delay: 0    },
  { x: 60, y: 204, h: 20, delay: 0.1  },
  { x: 68, y: 208, h: 12, delay: 0.2  },
  { x: 76, y: 201, h: 26, delay: 0.05 },
  { x: 84, y: 207, h: 14, delay: 0.15 },
  { x: 92, y: 212, h: 4,  delay: 0.25 },
  { x: 100, y: 205, h: 18, delay: 0.08 },
  { x: 108, y: 210, h: 8,  delay: 0.18 },
  { x: 116, y: 203, h: 22, delay: 0.12 },
];

export function DuringIllustration() {
  const { ref, step, active } = useAnimLoop(5, 700, 5000);

  return (
    <div ref={ref} className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Left: video call — always */}
        <rect x="24" y="24" width="204" height="292" rx="12" fill="#1B2A4A"/>

        {/* Video tiles */}
        <rect x="36" y="36" width="90" height="65" rx="8" fill="rgba(255,255,255,0.08)"/>
        <ellipse cx="81" cy="58" rx="14" ry="14" fill="rgba(255,255,255,0.15)"/>
        <text x="81" y="63" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">EO</text>
        <text x="81" y="92" fontFamily="sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)" textAnchor="middle">You</text>

        <rect x="138" y="36" width="78" height="65" rx="8" fill="rgba(255,255,255,0.08)"/>
        <ellipse cx="177" cy="58" rx="13" ry="13" fill="rgba(136,231,136,0.3)"/>
        <text x="177" y="63" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="white" textAnchor="middle">KM</text>

        <rect x="36" y="113" width="90" height="65" rx="8" fill="rgba(255,255,255,0.08)"/>
        <ellipse cx="81" cy="135" rx="13" ry="13" fill="rgba(255,255,255,0.15)"/>
        <text x="81" y="140" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="white" textAnchor="middle">YB</text>

        <rect x="138" y="113" width="78" height="65" rx="8" fill="rgba(255,255,255,0.08)"/>
        <ellipse cx="177" cy="135" rx="13" ry="13" fill="rgba(232,169,76,0.3)"/>
        <text x="177" y="140" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="white" textAnchor="middle">AB</text>

        {/* Audio wave */}
        <rect x="36" y="190" width="180" height="48" rx="8" fill="rgba(255,255,255,0.06)"/>
        {WAVE_BARS.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width="3" height={b.h} rx="1.5"
            className={active ? "wave-bar" : ""}
            style={{ fill: "#88E788", animationDelay: `${b.delay}s` }}
          />
        ))}
        <text x="36" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(136,231,136,0.8)">● LIVE</text>
        <text x="144" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">No bot in room</text>

        {/* Call controls */}
        <rect x="36" y="274" width="40" height="28" rx="14" fill="rgba(255,255,255,0.1)"/>
        <rect x="86" y="274" width="40" height="28" rx="14" fill="rgba(255,255,255,0.1)"/>
        <rect x="136" y="274" width="40" height="28" rx="14" fill="rgba(201,84,44,0.8)"/>
        <text x="156" y="293" fontFamily="sans-serif" fontSize="14" fill="white" textAnchor="middle">×</text>

        {/* Right: Notes panel frame — always */}
        <rect x="240" y="24" width="216" height="292" rx="12" fill="white"/>
        <rect x="240" y="24" width="216" height="292" rx="12" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>
        <rect x="240" y="24" width="216" height="40" rx="12" fill="rgba(27,20,15,0.03)"/>
        <rect x="240" y="44" width="216" height="20" fill="rgba(27,20,15,0.03)"/>
        <circle cx="260" cy="44" r="5" fill="#88E788"/>
        <text x="274" y="48" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">
          Notes · 14 min
        </text>

        {/* Status label — right-aligned to panel edge */}
        <g style={sh(step, 1)}>
          <text x="450" y="48" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.35)" textAnchor="end">
            {step >= 5 ? "Enhancing..." : "Transcribing..."}
          </text>
        </g>

        {/* Note lines — steps 1–4 */}
        {DURING_NOTES.map((n, i) => (
          <g key={i} style={{ ...sh(step, i + 1), transform: step >= i + 1 ? "translateY(0)" : "translateY(5px)", transition: "opacity 0.4s ease, transform 0.4s ease" }}>
            <rect x="254" y={NOTE_YS[i]} width={n.tagW} height="16" rx="4"
              fill={n.color === "#88E788" ? "rgba(136,231,136,0.18)" : n.color === "#1B2A4A" ? "rgba(27,42,74,0.12)" : "rgba(232,169,76,0.18)"}
            />
            <text x="260" y={NOTE_YS[i] + 11} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700"
              fill={n.color === "#88E788" ? "#2a7a2a" : n.color === "#1B2A4A" ? "#1B2A4A" : "#8a6020"}>
              {n.tag}
            </text>
            <text x="254" y={NOTE_YS[i] + 27} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.8)">{n.line1}</text>
            <text x="254" y={NOTE_YS[i] + 40} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.8)">{n.line2}</text>
          </g>
        ))}

        {/* Cursor tracks writing position */}
        {step > 0 && step < 5 && (
          <rect x="254" y={NOTE_YS[Math.min(step - 1, 3)] + 48} width="2" height="14" rx="1"
            className="cursor-blink" style={{ fill: "#88E788" }}/>
        )}

        {/* Writing indicator — step 5 */}
        <g style={sh(step, 5)}>
          <text x="254" y="285" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13"
            fill="rgba(27,20,15,0.25)" fontStyle="italic">Writing...</text>
          <rect x="306" y="272" width="2" height="14" rx="1" className="cursor-blink" style={{ fill: "#88E788" }}/>
        </g>
      </svg>
    </div>
  );
}

// ── After ────────────────────────────────────────────────────────────────────
// 7 steps × 600 ms = 4.2 s play, 6.5 s hold → ~10.7 s loop
const AFTER_ITEMS = [
  { owner: "Chidi",   task: "Send revised financial model", done: true,  showAt: 3 },
  { owner: "Amara",   task: "Schedule Interswitch call",    done: true,  showAt: 3 },
  { owner: "Emeka",   task: "Prepare board memo",           done: false, showAt: 4 },
  { owner: "Yewande", task: "Share updated roadmap",        done: false, showAt: 4 },
];

export function AfterIllustration() {
  const { ref, step } = useAnimLoop(7, 600, 6500);

  return (
    <div ref={ref} className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Summary card — always */}
        <rect x="24" y="24" width="268" height="292" rx="12" fill="white"/>
        <rect x="24" y="24" width="268" height="292" rx="12" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>
        <rect x="24" y="24" width="268" height="42" rx="12" fill="rgba(27,20,15,0.03)"/>
        <rect x="24" y="44" width="268" height="22" fill="rgba(27,20,15,0.03)"/>
        <text x="42" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#1B140F">Meeting Summary</text>
        <text x="200" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.4)">14 Nov · 52 min</text>

        {/* Summary paragraph lines — step 1 */}
        <g style={sh(step, 1)}>
          <rect x="40" y="76" width="230" height="7" rx="3.5" fill="rgba(27,20,15,0.1)"/>
          <rect x="40" y="90" width="210" height="7" rx="3.5" fill="rgba(27,20,15,0.07)"/>
          <rect x="40" y="104" width="180" height="7" rx="3.5" fill="rgba(27,20,15,0.07)"/>
        </g>

        {/* Action items header — step 2 */}
        <g style={sh(step, 2)}>
          <text x="40" y="135" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">Action Items</text>
          <rect x="40" y="140" width="210" height="0.5" fill="rgba(27,20,15,0.1)"/>
        </g>

        {/* Action item rows */}
        {AFTER_ITEMS.map((item, i) => (
          <g key={item.owner} style={{ ...sh(step, item.showAt), transform: step >= item.showAt ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.45s ease, transform 0.45s ease" }}>
            <circle cx="52" cy={163 + i * 32} r="8"
              fill={item.done ? "#88E788" : "rgba(27,20,15,0.06)"}
              stroke={item.done ? "none" : "rgba(27,20,15,0.15)"}
              strokeWidth="1"
            />
            {item.done && (
              <path d={`M46 ${163 + i * 32} l4 4 6-7`} stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            )}
            <text x="68" y={160 + i * 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#1B140F">{item.owner}</text>
            <text x="68" y={173 + i * 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.55)">{item.task}</text>
          </g>
        ))}

        {/* "Send follow-up email" CTA — step 7 */}
        <g style={sh(step, 7)}>
          <rect x="40" y="286" width="234" height="30" rx="8" fill="#88E788"/>
          <text x="157" y="305" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F" textAnchor="middle">
            Send follow-up email →
          </text>
        </g>

        {/* Email draft card — slides in at step 5 */}
        <g style={{
          opacity: step >= 5 ? 1 : 0,
          transform: step >= 5 ? "translateX(0)" : "translateX(18px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}>
          <rect x="204" y="48" width="252" height="268" rx="12" fill="#FDF9F4"/>
          <rect x="204" y="48" width="252" height="268" rx="12" stroke="#1B140F" strokeOpacity="0.1" strokeWidth="1"/>
          <rect x="204" y="48" width="252" height="42" rx="12" fill="rgba(27,42,74,0.06)"/>
          <rect x="204" y="68" width="252" height="22" fill="rgba(27,42,74,0.06)"/>
          <text x="222" y="74" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B2A4A">Draft follow-up</text>
          <rect x="408" y="57" width="36" height="18" rx="5" fill="#88E788"/>
          <text x="426" y="70" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="700" fill="#1B140F" textAnchor="middle">Draft</text>

          {/* Email header — step 5 */}
          <text x="220" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(27,20,15,0.35)">TO</text>
          <text x="240" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="#1B140F">kofi.mensah@example.com</text>
          <rect x="220" y="114" width="220" height="0.5" fill="rgba(27,20,15,0.08)"/>
          <text x="220" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(27,20,15,0.35)">RE</text>
          <text x="240" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="#1B140F">Series A Update — Next Steps</text>
          <rect x="220" y="134" width="220" height="0.5" fill="rgba(27,20,15,0.08)"/>

          {/* Email body — step 6 */}
          <g style={sh(step, 6)}>
            <text x="220" y="158" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Hi Kofi,</text>
            <rect x="220" y="166" width="215" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
            <rect x="220" y="178" width="200" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
            <rect x="220" y="190" width="185" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
            <rect x="220" y="208" width="215" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>
            <rect x="220" y="220" width="170" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>
            <rect x="220" y="232" width="190" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>
            <text x="220" y="262" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Best,</text>
            <text x="220" y="278" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Emeka</text>
          </g>

          {/* Send button — step 7 */}
          <g style={sh(step, 7)}>
            <rect x="338" y="286" width="100" height="26" rx="7" fill="#1B2A4A"/>
            <text x="388" y="303" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">Send →</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
