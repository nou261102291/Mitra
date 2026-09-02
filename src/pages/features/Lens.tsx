import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CTABand from "../../components/CTABand";

// ── Aperture icon ─────────────────────────────────────────────────────────────
// Camera iris visual language used consistently across the page
function ApertureIcon({
  size = 28,
  color = "#1B2A4A",
  fill = "none",
}: {
  size?: number;
  color?: string;
  fill?: string;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.4;
  const blades = 6;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r + size * 0.08} stroke={color} strokeWidth={size * 0.045} opacity="0.25"/>
      {/* Iris blades */}
      {Array.from({ length: blades }).map((_, i) => {
        const angle = (i * 360) / blades;
        const a1 = ((angle - 30) * Math.PI) / 180;
        const a2 = ((angle + 10) * Math.PI) / 180;
        const ir = r * 0.3;
        const or = r;
        const x1 = cx + ir * Math.cos(a1);
        const y1 = cy + ir * Math.sin(a1);
        const x2 = cx + or * Math.cos(a1);
        const y2 = cy + or * Math.sin(a1);
        const x3 = cx + or * Math.cos(a2);
        const y3 = cy + or * Math.sin(a2);
        const x4 = cx + ir * Math.cos(a2);
        const y4 = cy + ir * Math.sin(a2);
        return (
          <path
            key={i}
            d={`M${x1} ${y1} L${x2} ${y2} A${or} ${or} 0 0 1 ${x3} ${y3} L${x4} ${y4} A${ir} ${ir} 0 0 0 ${x1} ${y1}Z`}
            fill={fill !== "none" ? fill : color}
            opacity={fill !== "none" ? 0.85 : 0.7}
          />
        );
      })}
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={size * 0.07} fill={color} opacity="0.6"/>
    </svg>
  );
}

// ── Animation helpers ─────────────────────────────────────────────────────────
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

  return { ref, step };
}

function sh(step: number, n: number): React.CSSProperties {
  return {
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? "translateY(0)" : "translateY(5px)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  };
}

// ── Hero Lens illustration ────────────────────────────────────────────────────
// 10 steps × 650 ms = 6.5 s play, 4 s hold → ~10.5 s loop
// Phase 1 (steps 1-2): raw meeting notes appear
// Phase 2 (steps 3-4): "/lens board" typed in chat bar
// Phase 5: iris closes (dark circle overlay expands)
// Phase 6: iris held closed
// Phase 7: iris opens to reveal new Board Lens view
// Phase 8-10: formatted Board Lens output assembles

const QUERY_PHASES = ["", "/len", "/lens board", "/lens board"];

const BEFORE_LINES = [
  { tag: "Spoke", text: "MD confirmed ₦18M Abuja expansion — Q1 approved" },
  { tag: "Spoke", text: "Kofi raised GTM timeline concern — unresolved" },
  { tag: "Spoke", text: "Chidi will send revised model by Friday" },
  { tag: "Spoke", text: "Yewande: updated cap table still pending" },
];

const AFTER_LINES = [
  { label: "Expansion", value: "₦18M Abuja expansion approved — Q1 2025. Capital allocated." },
  { label: "Outstanding", value: "Revised cap table (Yewande) — no confirmation received." },
  { label: "Risk", value: "GTM timeline raised by Kofi — unresolved, flag for board deck." },
  { label: "Next step", value: "Chidi financial model due Fri 15 Nov — follow up if not received." },
];

function LensHeroIllustration() {
  const { ref, step } = useAnimLoop(10, 650, 4000);

  const irisClosing = step === 5 || step === 6;
  const irisOpen = step <= 4 || step >= 7;
  const showBefore = step <= 4;
  const showAfter = step >= 7;

  const queryText = QUERY_PHASES[Math.min(step <= 4 ? Math.max(step - 2, 0) : step - 2, QUERY_PHASES.length - 1)] ?? "";
  const showCursor = step >= 3 && step <= 4;

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox="0 0 520 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rounded-2xl shadow-2xl shadow-[rgba(27,20,15,0.18)]"
      >
        <rect width="520" height="340" rx="20" fill="#FDF9F4"/>

        {/* Chrome */}
        <rect width="520" height="44" rx="20" fill="rgba(27,20,15,0.03)"/>
        <rect y="30" width="520" height="14" fill="rgba(27,20,15,0.03)"/>
        <rect x="0" y="44" width="520" height="1" fill="rgba(27,20,15,0.07)"/>
        <circle cx="20" cy="22" r="5" fill="rgba(27,20,15,0.08)"/>
        <circle cx="36" cy="22" r="5" fill="rgba(27,20,15,0.08)"/>
        <circle cx="52" cy="22" r="5" fill="rgba(27,20,15,0.08)"/>

        {/* Tab bar */}
        <rect x="72" y="13" width="120" height="18" rx="5" fill="rgba(27,20,15,0.05)"/>
        <text x="132" y="26" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.4)" textAnchor="middle">
          Series A Update · 52 min
        </text>
        {/* Active lens indicator */}
        <g style={sh(step, 7)}>
          <rect x="202" y="13" width="90" height="18" rx="5" fill="rgba(27,20,15,0.05)"/>
          <text x="247" y="26" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#1B2A4A" textAnchor="middle" fontWeight="600">
            Board Lens
          </text>
        </g>

        {/* ── BEFORE content (raw transcript) ── */}
        <g style={{ opacity: showBefore ? 1 : 0, transition: "opacity 0.3s ease" }}>
          {/* Header */}
          <g style={sh(step, 1)}>
            <text x="20" y="70" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="rgba(27,20,15,0.35)" letterSpacing="0.08em">RAW TRANSCRIPT — 14 NOV</text>
          </g>
          {BEFORE_LINES.map((line, i) => (
            <g key={i} style={sh(step, 2)}>
              <rect x="20" y={82 + i * 36} width="32" height="14" rx="4"
                fill="rgba(27,20,15,0.07)"/>
              <text x="36" y={93 + i * 36} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8"
                fontWeight="600" fill="rgba(27,20,15,0.4)" textAnchor="middle">
                {line.tag}
              </text>
              <text x="60" y={93 + i * 36} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12"
                fill="rgba(27,20,15,0.7)">
                {line.text}
              </text>
            </g>
          ))}
        </g>

        {/* ── /lens command bar ── */}
        <g style={sh(step, 3)}>
          <rect x="20" y="262" width="448" height="36" rx="10"
            fill="rgba(27,42,74,0.06)" stroke="rgba(27,42,74,0.2)" strokeWidth="1.2"/>
          <text x="34" y="284" fontFamily="monospace" fontSize="12"
            fill="#1B2A4A" fontWeight="600">
            {queryText}
          </text>
          {showCursor && (
            <rect
              x={34 + queryText.length * 7.2}
              y="270"
              width="2"
              height="16"
              rx="1"
              fill="#1B2A4A"
              className="cursor-blink"
            />
          )}
          {/* Lens picker suggestion */}
          <g style={sh(step, 4)}>
            <rect x="20" y="216" width="200" height="42" rx="10"
              fill="#1B2A4A" filter="url(#lpop)"/>
            <defs>
              <filter id="lpop" x="-10%" y="-20%" width="120%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1B140F" floodOpacity="0.18"/>
              </filter>
            </defs>
            <text x="38" y="231" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8"
              fill="rgba(136,231,136,0.5)" fontWeight="600" letterSpacing="0.08em">LENS</text>
            <text x="38" y="248" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12"
              fill="#FDF9F4" fontWeight="700">Board Lens</text>
            <text x="156" y="248" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10"
              fill="rgba(136,231,136,0.7)">↵</text>
          </g>
        </g>

        {/* ── Iris overlay (aperture close) ── */}
        <circle
          cx="260"
          cy="170"
          r="260"
          fill="#1B140F"
          style={{
            transform: irisClosing ? "scale(1)" : "scale(0)",
            transformOrigin: "260px 170px",
            transition: irisClosing ? "transform 0.45s ease-in" : "transform 0.4s ease-out",
          }}
        />
        {/* Aperture rings visible during close */}
        {[80, 120, 160].map((r, i) => (
          <circle
            key={r}
            cx="260"
            cy="170"
            r={r}
            stroke="#88E788"
            strokeWidth="1"
            fill="none"
            style={{
              opacity: irisClosing ? (0.08 + i * 0.04) : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        ))}
        {/* Center aperture text */}
        {irisClosing && (
          <g>
            <text x="260" y="164" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11"
              fontWeight="600" fill="#88E788" textAnchor="middle" opacity="0.7">Applying</text>
            <text x="260" y="180" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13"
              fontWeight="800" fill="#FDF9F4" textAnchor="middle">Board Lens</text>
          </g>
        )}

        {/* ── AFTER content (Board Lens output) ── */}
        <g style={{ opacity: showAfter ? 1 : 0, transition: "opacity 0.35s ease" }}>
          {/* Board Lens badge */}
          <g style={sh(step, 8)}>
            <rect x="20" y="56" width="100" height="18" rx="5" fill="rgba(27,42,74,0.08)"/>
            <text x="30" y="69" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9"
              fontWeight="700" fill="#1B2A4A">Board Lens</text>
            <text x="84" y="69" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9"
              fill="rgba(136,231,136,0.9)">■</text>
            <text x="20" y="88" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11"
              fontWeight="700" fill="rgba(27,20,15,0.35)" letterSpacing="0.08em">INVESTOR UPDATE — 14 NOV</text>
          </g>

          {/* Board Lens output rows */}
          {AFTER_LINES.map((row, i) => (
            <g key={i} style={sh(step, 8 + Math.min(i, 2))}>
              <rect x="20" y={100 + i * 44} width="480" height="36" rx="10"
                fill={i === 0 ? "rgba(136,231,136,0.08)" : i === 2 ? "rgba(232,169,76,0.07)" : "rgba(27,20,15,0.03)"}
                stroke={i === 0 ? "rgba(136,231,136,0.25)" : i === 2 ? "rgba(232,169,76,0.2)" : "rgba(27,20,15,0.06)"}
                strokeWidth="1"
              />
              <text x="32" y={114 + i * 44} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9"
                fontWeight="700" fill={i === 2 ? "#7a5010" : "rgba(27,20,15,0.4)"} letterSpacing="0.06em">
                {row.label.toUpperCase()}
              </text>
              <text x="32" y={127 + i * 44} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5"
                fill="rgba(27,20,15,0.8)">
                {row.value}
              </text>
            </g>
          ))}

          {/* Chat bar (passive) */}
          <g style={sh(step, 8)}>
            <rect x="20" y="282" width="448" height="36" rx="10"
              fill="rgba(27,42,74,0.04)" stroke="rgba(27,42,74,0.1)" strokeWidth="1"/>
            <text x="34" y="304" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11"
              fill="rgba(27,20,15,0.3)">Board Lens active — /lens to switch...</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

// ── Featured Lenses data ──────────────────────────────────────────────────────
const LENSES = [
  {
    name: "Board Lens",
    tag: "Mitra",
    desc: "Turns the week's calls into an investor-ready update with figures normalized to one currency.",
    preview: {
      label: "From last week's calls",
      lines: [
        { k: "Decision", v: "₦18M Abuja expansion approved — Q1 2025" },
        { k: "Outstanding", v: "Cap table update from Yewande pending" },
        { k: "Risk flag", v: "GTM timeline concern — unresolved" },
      ],
    },
    accent: "#1B2A4A",
    accentText: "#FDF9F4",
  },
  {
    name: "Oga Lens",
    tag: "Mitra · Pidgin-aware",
    desc: "Recaps the call in plain language, the register you'd use briefing a senior stakeholder informally. Understands Pidgin.",
    preview: {
      label: "Same meeting, different lens",
      lines: [
        { k: "Short take", v: "MD approved the Abuja move — ₦18M, Q1" },
        { k: "What dey pending", v: "Chidi's model (Friday), Yewande's table" },
        { k: "One wahala", v: "Kofi still no satisfied with the GTM plan" },
      ],
    },
    accent: "#88E788",
    accentText: "#1B140F",
  },
  {
    name: "Vendor Lens",
    tag: "Mitra",
    desc: "Tracks payment terms, commitments, and delivery dates across supplier and distributor calls.",
    preview: {
      label: "Extracted from 3 vendor calls",
      lines: [
        { k: "Term agreed", v: "Zenith Logistics: net-30, 15% deposit on order" },
        { k: "Commitment", v: "First delivery — 6 Dec 2024" },
        { k: "Pending", v: "Signed SLA from vendor — not received" },
      ],
    },
    accent: "#E8A94C",
    accentText: "#7a5010",
  },
  {
    name: "WhatsApp Lens",
    tag: "Mitra",
    desc: "Formats action items as a clean, WhatsApp-ready message your team can forward directly.",
    preview: {
      label: "Ready to paste",
      lines: [
        { k: "📋 Action items", v: "Series A Update · 14 Nov" },
        { k: "→ Chidi", v: "Revised model by Friday" },
        { k: "→ Amara", v: "Schedule Interswitch call" },
      ],
    },
    accent: "#1B2A4A",
    accentText: "#FDF9F4",
  },
  {
    name: "Deal Health Lens",
    tag: "Mitra",
    desc: "Pulls patterns across sales calls to flag stalling deals — objections raised, follow-up gaps, sentiment shifts.",
    preview: {
      label: "Across 6 sales calls",
      lines: [
        { k: "Stalling", v: "Nexta Corp — 3 calls, no decision maker on last two" },
        { k: "Warm", v: "Interswitch — verbal yes, formal sign-off pending" },
        { k: "Cold", v: "ABF Holdings — no response since Oct 28" },
      ],
    },
    accent: "#88E788",
    accentText: "#1B140F",
  },
  {
    name: "Prep Lens",
    tag: "Mitra",
    desc: "Briefs you before a call using context from prior meetings with that person or account.",
    preview: {
      label: "Before your call with Kofi",
      lines: [
        { k: "Last call", v: "Oct 28 — Runway extended; GTM concern unresolved" },
        { k: "His asks", v: "Updated cap table + clearer GTM milestones" },
        { k: "Bring", v: "Answer on GTM — he raised it twice last session" },
      ],
    },
    accent: "#E8A94C",
    accentText: "#7a5010",
  },
];

// ── Lens card ─────────────────────────────────────────────────────────────────
function LensCard({ lens }: { lens: typeof LENSES[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:border-[rgba(27,20,15,0.16)] hover:shadow-md hover:shadow-[rgba(27,20,15,0.06)] transition-all"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Top bar with aperture + name */}
      <div className="px-5 pt-5 pb-4 flex items-start gap-3">
        <div className="mt-0.5 shrink-0">
          <ApertureIcon
            size={32}
            color={lens.accent}
            fill={flipped ? lens.accent : "none"}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-[16px] font-bold text-[#1B140F]" style={{ fontFamily: "'Fraunces', serif" }}>
              {lens.name}
            </h3>
            {lens.tag.includes("Pidgin") && (
              <span className="text-[9px] font-bold bg-[#88E788]/20 text-[#1a6e1a] px-1.5 py-0.5 rounded-md uppercase tracking-wide">
                Pidgin
              </span>
            )}
          </div>
          <p className="text-[11px] text-[rgba(27,20,15,0.4)] font-medium">{lens.tag.replace(" · Pidgin-aware", "")}</p>
        </div>
      </div>

      {/* Description */}
      <p className="px-5 pb-4 text-[14px] text-[rgba(27,20,15,0.65)] leading-relaxed">{lens.desc}</p>

      {/* Preview output — always visible, highlighted on hover */}
      <div
        className="mx-5 mb-5 rounded-xl p-4 transition-colors"
        style={{
          background: flipped ? `${lens.accent}12` : "rgba(27,20,15,0.03)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: flipped ? `${lens.accent}30` : "rgba(27,20,15,0.06)",
        }}
      >
        <p className="text-[10px] font-semibold text-[rgba(27,20,15,0.35)] uppercase tracking-widest mb-2">
          {lens.preview.label}
        </p>
        {lens.preview.lines.map((line, i) => (
          <div key={i} className="flex items-start gap-2 mb-1.5 last:mb-0">
            <span className="text-[10px] font-bold text-[rgba(27,20,15,0.35)] w-20 shrink-0 pt-px">{line.k}</span>
            <span className="text-[12px] text-[#1B140F] leading-snug flex-1">{line.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Scope + visibility options ────────────────────────────────────────────────
const SCOPES = ["This meeting", "A folder", "All meetings"];
const VISIBILITY = ["Private", "Team", "Shared publicly"];

function BuildLens() {
  const [scope, setScope] = useState("All meetings");
  const [vis, setVis] = useState("Private");
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2800);
  }

  return (
    <div className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.1)] rounded-2xl p-8 max-w-[680px] mx-auto shadow-lg shadow-[rgba(27,20,15,0.05)]">
      {saved ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 rounded-full bg-[rgba(136,231,136,0.18)] flex items-center justify-center mx-auto mb-4">
            <ApertureIcon size={28} color="#1B2A4A" fill="#88E788" />
          </div>
          <p className="text-[18px] font-bold text-[#1B140F]" style={{ fontFamily: "'Fraunces', serif" }}>
            Lens saved.
          </p>
          <p className="text-[14px] text-[rgba(27,20,15,0.5)] mt-1">
            Type <span className="font-mono font-semibold">/lens {name || "your-lens"}</span> in Mitra Chat to apply it.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div>
            <label className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] mb-1.5 block">
              Lens name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Fundraise Lens"
              className="w-full px-4 py-3 rounded-xl border border-[rgba(27,20,15,0.12)] bg-[#FAF6F0] text-[15px] text-[#1B140F] placeholder-[rgba(27,20,15,0.3)] focus:outline-none focus:border-[#1B2A4A]"
            />
          </div>

          <div>
            <label className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] mb-1.5 block">
              Instruction
            </label>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="Describe how you want your meetings read. Example: 'Summarise this call the way I would brief a Lagos-based angel investor — focus on traction, financial runway, and the one risk they'll ask about. Output in three short paragraphs, figures in Naira.'"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[rgba(27,20,15,0.12)] bg-[#FAF6F0] text-[14px] text-[#1B140F] placeholder-[rgba(27,20,15,0.3)] leading-relaxed resize-none focus:outline-none focus:border-[#1B2A4A]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Scope */}
            <div>
              <label className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] mb-1.5 block">
                Scope
              </label>
              <div className="flex flex-wrap gap-2">
                {SCOPES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setScope(s)}
                    className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all"
                    style={{
                      background: scope === s ? "#1B2A4A" : "rgba(27,20,15,0.06)",
                      color: scope === s ? "#88E788" : "rgba(27,20,15,0.6)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="text-[12px] font-semibold uppercase tracking-widest text-[rgba(27,20,15,0.4)] mb-1.5 block">
                Visibility
              </label>
              <div className="flex flex-wrap gap-2">
                {VISIBILITY.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVis(v)}
                    className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all"
                    style={{
                      background: vis === v ? "#1B2A4A" : "rgba(27,20,15,0.06)",
                      color: vis === v ? "#88E788" : "rgba(27,20,15,0.6)",
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              type="submit"
              className="px-6 py-3 bg-[#88E788] text-[#1B140F] text-[15px] font-semibold rounded-xl hover:bg-[#72d672] transition-colors flex items-center gap-2"
            >
              <ApertureIcon size={16} color="#1B140F" />
              Save Lens
            </button>
            <span className="text-[13px] text-[rgba(27,20,15,0.4)]">
              Invoke with <span className="font-mono font-semibold text-[#1B2A4A]">/lens {name || "[name]"}</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Community Lenses teaser data ──────────────────────────────────────────────
const COMMUNITY = [
  { name: "Series A Investor Memo", author: "Tunde A.", loc: "Lagos", uses: "124", tag: "Fundraising" },
  { name: "Distribution Partner Recap", author: "Bola O.", loc: "Ibadan", uses: "89", tag: "Ops" },
  { name: "Grant Report Writer", author: "Dr. Fatima S.", loc: "Abuja", uses: "67", tag: "NGO" },
  { name: "Nairobi BD Summary", author: "Wanjiku M.", loc: "Nairobi", uses: "55", tag: "Sales" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Lens() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[rgba(27,42,74,0.2)] bg-[rgba(27,42,74,0.06)] mb-8">
            <ApertureIcon size={14} color="#1B2A4A" />
            <span className="text-[12px] font-medium text-[#1B2A4A] uppercase tracking-widest">Mitra Lens</span>
          </div>

          <h1
            className="text-[52px] md:text-[64px] font-bold text-[#1B140F] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Same meetings.<br />
            <span className="italic">Different lens.</span>
          </h1>

          <p className="text-[18px] text-[rgba(27,20,15,0.65)] leading-relaxed mb-8 max-w-[480px]">
            A Lens is a saved, reusable way of reading your meeting data — type <span className="font-mono font-semibold text-[#1B2A4A]">/lens</span> in Mitra Chat and your entire meeting history gets re-read through that expert-shaped filter.
          </p>

          <div className="bg-[rgba(27,20,15,0.04)] border border-[rgba(27,20,15,0.08)] rounded-xl px-5 py-4 mb-8 max-w-[420px]">
            <p className="text-[13px] font-semibold text-[rgba(27,20,15,0.5)] mb-2">The same Series A call — two Lenses</p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-[#1B2A4A] text-[#88E788] px-1.5 py-0.5 rounded-md">Board Lens</span>
                <span className="text-[12px] text-[rgba(27,20,15,0.65)]">₦18M approved. Cap table pending. GTM risk.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-[rgba(136,231,136,0.2)] text-[#1a6e1a] px-1.5 py-0.5 rounded-md">Oga Lens</span>
                <span className="text-[12px] text-[rgba(27,20,15,0.65)]">MD approved Abuja move. Kofi still no satisfied with GTM.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#88E788] text-[#1B140F] font-semibold text-[16px] rounded-xl hover:bg-[#72d672] transition-colors"
            >
              Download for free
            </Link>
            <Link
              to="/features/mitra-chat"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[rgba(27,20,15,0.18)] text-[#1B140F] font-medium text-[16px] rounded-xl hover:bg-[rgba(27,20,15,0.04)] transition-colors"
            >
              See Mitra Chat →
            </Link>
          </div>
        </div>

        <LensHeroIllustration />
      </section>

      {/* ── What is a Lens ── */}
      <section className="py-20 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">How it works</p>
            <h2
              className="text-[36px] md:text-[44px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Three steps to a different view.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Type /lens",
                desc: 'In Mitra Chat, type "/lens" alone to browse your saved Lenses, or "/lens [name]" to jump straight to one. The command works in any meeting, folder, or across your full history.',
                icon: (
                  <div className="text-[15px] font-mono font-bold text-[#1B2A4A] bg-[rgba(27,42,74,0.07)] px-3 py-1.5 rounded-lg inline-block">
                    /lens board
                  </div>
                ),
              },
              {
                num: "02",
                title: "Pick or write one",
                desc: "Choose from Mitra's built-in Lenses — written for how African business actually runs — or write your own instruction in plain English. Name it, set scope and visibility, save.",
                icon: <ApertureIcon size={36} color="#1B2A4A" />,
              },
              {
                num: "03",
                title: "Your history gets re-read",
                desc: "Every relevant meeting is reprocessed through that expert-shaped filter and returned in the Lens format. Same data, completely different read.",
                icon: (
                  <div className="flex gap-1.5 items-center">
                    <span className="text-[10px] font-bold bg-[#1B2A4A] text-[#88E788] px-1.5 py-0.5 rounded-md">Board</span>
                    <span className="text-[rgba(27,20,15,0.3)]">→</span>
                    <span className="text-[10px] font-bold bg-[rgba(136,231,136,0.2)] text-[#1a6e1a] px-1.5 py-0.5 rounded-md">Oga</span>
                    <span className="text-[rgba(27,20,15,0.3)]">→</span>
                    <span className="text-[10px] font-bold bg-[rgba(232,169,76,0.2)] text-[#7a5010] px-1.5 py-0.5 rounded-md">Vendor</span>
                  </div>
                ),
              },
            ].map((s) => (
              <div key={s.num} className="bg-[#FAF6F0] border border-[rgba(27,20,15,0.07)] rounded-2xl p-7 relative overflow-hidden">
                <span
                  className="absolute top-5 right-5 text-[40px] font-black text-[rgba(27,20,15,0.04)] select-none"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {s.num}
                </span>
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-[18px] font-bold text-[#1B140F] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                  {s.title}
                </h3>
                <p className="text-[14px] text-[rgba(27,20,15,0.6)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Mitra's Lenses are different ── */}
      <section className="py-16 px-6 bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="kl" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#FDF9F4" strokeWidth="0.5"/>
                <circle cx="20" cy="20" r="8" fill="none" stroke="#FDF9F4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kl)"/>
          </svg>
        </div>
        <div className="max-w-[900px] mx-auto relative text-center">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#88E788] mb-3">Not generic prompt templates</p>
          <h2
            className="text-[32px] md:text-[40px] font-bold text-[#FDF9F4] tracking-tight mb-5"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Written for how African business actually runs.
          </h2>
          <p className="text-[16px] text-[rgba(253,249,244,0.6)] leading-relaxed mb-10 max-w-[640px] mx-auto">
            Lenses understand multi-currency reporting, distributor negotiation recaps, board updates in Naira or Cedis, WhatsApp-ready formats, and vendor payment-term tracking. And Lenses like Oga Lens correctly parse Pidgin, code-switched, and accented phrasing in the source transcript.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "Lexicon-aware", desc: "Oga Lens knows 'make we push am' is a collective decision. Board Lens knows that same line is a deferred capital commitment." },
              { title: "Currency-native", desc: "Figures normalized to your preferred currency — ₦, GHS, KES, ZAR. Not converted after the fact, formatted from the start." },
              { title: "Format-first", desc: "WhatsApp Lens produces WhatsApp-ready text, not a summary. Board Lens produces investor-memo structure, not bullet points." },
            ].map((f) => (
              <div key={f.title} className="bg-[rgba(253,249,244,0.06)] border border-[rgba(253,249,244,0.1)] rounded-2xl p-5">
                <h3 className="text-[15px] font-bold text-[#FDF9F4] mb-2">{f.title}</h3>
                <p className="text-[13px] text-[rgba(253,249,244,0.55)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Lenses grid ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">Included with Mitra</p>
            <h2
              className="text-[36px] md:text-[44px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Six Lenses, ready to apply.
            </h2>
            <p className="mt-4 text-[16px] text-[rgba(27,20,15,0.5)] max-w-[480px] mx-auto">
              Hover to see a sample output. Invoke any of them with <span className="font-mono font-semibold text-[#1B2A4A]">/lens [name]</span> in Mitra Chat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LENSES.map((lens) => (
              <LensCard key={lens.name} lens={lens} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Build your own ── */}
      <section className="py-24 px-6 bg-[#FDF9F4]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">Custom Lenses</p>
            <h2
              className="text-[36px] md:text-[44px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Build your own Lens.
            </h2>
            <p className="mt-4 text-[16px] text-[rgba(27,20,15,0.5)] max-w-[520px] mx-auto">
              Name it, write the instruction in plain language, set scope and visibility. Your Lens applies the same way as Mitra's built-in ones — via <span className="font-mono font-semibold text-[#1B2A4A]">/lens [your-name]</span>.
            </p>
          </div>
          <BuildLens />
        </div>
      </section>

      {/* ── Community Lenses ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#1B2A4A] mb-3">Shared by the community</p>
            <h2
              className="text-[36px] md:text-[44px] font-bold text-[#1B140F] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Lenses built by operators across Africa.
            </h2>
            <p className="mt-4 text-[16px] text-[rgba(27,20,15,0.5)] max-w-[520px] mx-auto">
              When you set a Lens to "Shared publicly," other Mitra users can discover, copy, and remix it. The best ones get surfaced here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {COMMUNITY.map((l) => (
              <div
                key={l.name}
                className="bg-[#FDF9F4] border border-[rgba(27,20,15,0.08)] rounded-2xl p-5 hover:border-[rgba(27,20,15,0.15)] hover:shadow-md hover:shadow-[rgba(27,20,15,0.05)] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <ApertureIcon size={22} color="#1B2A4A" />
                  <span className="text-[10px] font-bold bg-[rgba(27,42,74,0.08)] text-[#1B2A4A] px-2 py-0.5 rounded-md">
                    {l.tag}
                  </span>
                </div>
                <h3 className="text-[14px] font-bold text-[#1B140F] mb-1 leading-snug">{l.name}</h3>
                <p className="text-[12px] text-[rgba(27,20,15,0.45)]">
                  by {l.author} · {l.loc}
                </p>
                <p className="text-[11px] text-[rgba(27,20,15,0.35)] mt-2">{l.uses} users</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 border border-[rgba(27,20,15,0.12)] rounded-xl text-[14px] text-[rgba(27,20,15,0.5)]">
              <ApertureIcon size={14} color="rgba(27,20,15,0.4)" />
              Community Lens library — coming with Mitra Pro
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
