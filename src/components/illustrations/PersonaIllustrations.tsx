// Animated illustrations for Use Case persona pages
import { useAnimLoop, sh } from "./animUtils";

// ── Founders ─────────────────────────────────────────────────────────────────
// 7 steps × 550 ms = 3.85 s play, 7 s hold → ~10.85 s loop
const FOUNDERS_NOTES = [
  { tag: "Flagged", text: "Kofi concerned\nabout GTM",       color: "#E8A94C" },
  { tag: "Open",    text: "Cap table not\nsent yet",          color: "#88E788" },
  { tag: "Quote",   text: '"What\'s the\nburn rate?"',        color: "rgba(255,255,255,0.5)" },
  { tag: "Action",  text: "Follow up on\nrunway question",    color: "#88E788" },
  { tag: "Brief",   text: "Next: board\nupdate call",         color: "rgba(255,255,255,0.3)" },
];

const CHART_BARS = [
  { x: 60,  h: 40,  y: 172, op: 0.5 },
  { x: 90,  h: 57,  y: 155, op: 0.6 },
  { x: 120, h: 72,  y: 140, op: 0.7 },
  { x: 150, h: 92,  y: 120, op: 1   },
  { x: 180, h: 82,  y: 130, op: 0.6 },
  { x: 210, h: 102, y: 110, op: 1   },
  { x: 240, h: 112, y: 100, op: 1   },
];

export function FoundersIllustration() {
  const { ref, step } = useAnimLoop(7, 550, 7000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="360" rx="20" fill="#1B2A4A"/>

        {/* Slide backdrop — always */}
        <rect x="24" y="24" width="294" height="312" rx="12" fill="rgba(255,255,255,0.05)"/>
        <rect x="40" y="44" width="260" height="150" rx="8" fill="rgba(255,255,255,0.08)"/>
        <text x="170" y="86" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="white" textAnchor="middle">Series A Deck</text>
        <text x="170" y="104" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(255,255,255,0.45)" textAnchor="middle">Confidential · November 2024</text>

        {/* Chart bars — step 1 */}
        <g style={sh(step, 1)}>
          {CHART_BARS.map((b, i) => (
            <rect key={i} x={b.x} y={b.y} width="20" height={b.h} rx="3"
              fill="#88E788" opacity={b.op}/>
          ))}
          <rect x="40" y="212" width="260" height="0.5" fill="rgba(255,255,255,0.15)"/>
        </g>

        {/* Slide 2 — step 2 */}
        <g style={sh(step, 2)}>
          <rect x="40" y="228" width="124" height="88" rx="8" fill="rgba(255,255,255,0.06)"/>
          <rect x="56" y="248" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
          <rect x="56" y="260" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
          <rect x="56" y="272" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
          <circle cx="130" cy="282" r="18" fill="rgba(136,231,136,0.2)"/>
          <text x="130" y="287" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#88E788" textAnchor="middle">₦18M</text>
        </g>

        {/* Slide 3 — step 3 */}
        <g style={sh(step, 3)}>
          <rect x="174" y="228" width="126" height="88" rx="8" fill="rgba(255,255,255,0.06)"/>
          <rect x="188" y="248" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
          <rect x="188" y="268" width="50" height="30" rx="6" fill="rgba(136,231,136,0.3)"/>
          <rect x="248" y="268" width="40" height="30" rx="6" fill="rgba(255,255,255,0.1)"/>
          <text x="275" y="288" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.5)" textAnchor="middle">TAM</text>
          <text x="213" y="288" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#88E788" textAnchor="middle">SAM</text>
        </g>

        {/* Mitra panel frame — step 4 */}
        <g style={sh(step, 4)}>
          <rect x="334" y="24" width="122" height="312" rx="12" fill="rgba(253,249,244,0.08)"/>
          <rect x="334" y="24" width="122" height="312" rx="12" stroke="rgba(136,231,136,0.3)" strokeWidth="1"/>
          <circle cx="358" cy="48" r="6" fill="#88E788"/>
          <text x="372" y="52" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="rgba(253,249,244,0.9)">Mitra</text>
        </g>

        {/* Mitra notes — steps 5–7 */}
        {FOUNDERS_NOTES.map((n, i) => {
          const noteStep = i < 2 ? 5 : i < 4 ? 6 : 7;
          const noteY = 72 + i * 58;
          return (
            <g key={i} style={sh(step, noteStep)}>
              <rect x="346" y={noteY} width="108" height="46" rx="6" fill="rgba(255,255,255,0.06)"/>
              <rect x="346" y={noteY} width="3" height="46" rx="1.5" fill={n.color}/>
              <text x="356" y={noteY + 14} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700" fill={n.color}>{n.tag}</text>
              {n.text.split("\n").map((line, li) => (
                <text key={li} x="356" y={noteY + 26 + li * 12} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(253,249,244,0.7)">{line}</text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Sales ─────────────────────────────────────────────────────────────────────
// 6 steps × 650 ms = 3.9 s play, 6 s hold → ~9.9 s loop
const DEALS = [
  { label: "Interswitch", value: "₦4.2M", stage: 28 },
  { label: "Zenith Bank", value: "₦8.5M", stage: 124 },
  { label: "ProcureNG",   value: "₦2.1M", stage: 220 },
  { label: "Cowrywise",   value: "₦6.0M", stage: 316 },
];

const SALES_NOTES = [
  { tag: "Objection", text: "Pricing concern — wants annual option",         color: "#E8A94C" },
  { tag: "Signal",    text: "Champion confirmed: Head of Ops loves the demo", color: "#88E788" },
  { tag: "Action",    text: "Send annual pricing sheet — Tobi to follow up Mon", color: "#1B2A4A" },
];

export function SalesIllustration() {
  const { ref, step } = useAnimLoop(6, 650, 6000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="360" rx="20" fill="#FAF6F0"/>
        <rect width="480" height="360" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Pipeline header — always */}
        <text x="28" y="52" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="700" fill="#1B140F">Deal Pipeline</text>
        <circle cx="320" cy="44" r="6" fill="#88E788"/>
        <text x="334" y="49" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#1B140F">Call active</text>

        {/* Stage labels — always */}
        {[
          { label: "Prospect",    x: 28  },
          { label: "Qualified",   x: 124 },
          { label: "Proposal",    x: 220 },
          { label: "Negotiation", x: 316 },
          { label: "Won",         x: 400 },
        ].map((s, i) => (
          <g key={i}>
            <text x={s.x} y="82" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(27,20,15,0.4)">
              {s.label}
            </text>
            {i < 4 && (
              <path d={`M${s.x + 84} 72 L${s.x + 94} 76 L${s.x + 84} 80`} stroke="rgba(27,20,15,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </g>
        ))}

        {/* Deal cards — step 1; Zenith turns active at step 2 */}
        {DEALS.map((deal, i) => {
          const isZenith = deal.label === "Zenith Bank";
          const isActive = isZenith && step >= 2;
          return (
            <g key={i} style={sh(step, 1)}>
              <rect x={deal.stage} y={100} width={88} height={54} rx="8"
                stroke={isActive ? "none" : "rgba(27,20,15,0.1)"} strokeWidth="1"
                style={{ fill: isActive ? "#88E788" : "white", transition: "fill 0.45s ease" }}
              />
              <text x={deal.stage + 44} y={122} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700"
                fill="#1B140F" textAnchor="middle">{deal.label}</text>
              <text x={deal.stage + 44} y={138} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="800"
                fill={isActive ? "#1B140F" : "#88E788"} textAnchor="middle">{deal.value}</text>
              {isActive && (
                <text x={deal.stage + 44} y={149} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="600"
                  fill="rgba(27,20,15,0.6)" textAnchor="middle">ON CALL NOW</text>
              )}
            </g>
          );
        })}

        {/* Call panel — step 3 */}
        <g style={sh(step, 3)}>
          <rect x="28" y="174" width="424" height="162" rx="12" fill="white"/>
          <rect x="28" y="174" width="424" height="162" rx="12" stroke="rgba(27,20,15,0.08)" strokeWidth="1"/>
          <rect x="28" y="174" width="424" height="40" rx="12" fill="rgba(27,20,15,0.02)"/>
          <rect x="28" y="194" width="424" height="20" fill="rgba(27,20,15,0.02)"/>
          <circle cx="50" cy="194" r="6" fill="#88E788"/>
          <text x="64" y="198" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">Zenith Bank · Sales Call · 22 min</text>
          <rect x="368" y="182" width="68" height="22" rx="6" fill="#1B2A4A"/>
          <text x="402" y="197" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Mitra active</text>
        </g>

        {/* Live notes — steps 4–6 */}
        {SALES_NOTES.map((n, i) => (
          <g key={i} style={sh(step, 4 + i)}>
            <rect x={44} y={228 + i * 30} width={48} height={15} rx="4"
              fill={n.color === "#88E788" ? "rgba(136,231,136,0.18)" : n.color === "#1B2A4A" ? "rgba(27,42,74,0.1)" : "rgba(232,169,76,0.18)"}/>
            <text x={50} y={228 + i * 30 + 10} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700"
              fill={n.color === "#88E788" ? "#1a6e1a" : n.color === "#1B2A4A" ? "#1B2A4A" : "#7a5010"}>{n.tag}</text>
            <text x={100} y={228 + i * 30 + 10} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.75)">{n.text}</text>
          </g>
        ))}

        {/* Cursor — step 6 */}
        {step >= 6 && (
          <rect x="44" y="318" width="2" height="13" rx="1" className="cursor-blink" style={{ fill: "#88E788" }}/>
        )}
      </svg>
    </div>
  );
}

// ── Consultants ───────────────────────────────────────────────────────────────
// 6 steps × 600 ms = 3.6 s play, 6 s hold → ~9.6 s loop
const DOC_SECTIONS = [
  { header: "Executive Summary",  y: 100 },
  { header: "Key Findings",       y: 168 },
  { header: "Recommendations",    y: 236 },
];

const CONSULTANT_NOTES = [
  { tag: "Approved",   text: "Exec summary\n—no changes",  color: "#88E788" },
  { tag: "Change req", text: "Finding 3 — add\ndata source", color: "#E8A94C" },
  { tag: "Approved",   text: "All recs\naccepted",          color: "#88E788" },
  { tag: "Action",     text: "Emeka sends v4\nby Tuesday",  color: "#1B2A4A" },
];

export function ConsultantsIllustration() {
  const { ref, step } = useAnimLoop(6, 600, 6000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="360" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="360" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Document frame — always */}
        <rect x="28" y="28" width="260" height="304" rx="12" fill="white"/>
        <rect x="28" y="28" width="260" height="304" rx="12" stroke="rgba(27,20,15,0.1)" strokeWidth="1"/>
        <rect x="28" y="28" width="260" height="52" rx="12" fill="#1B2A4A"/>
        <rect x="28" y="52" width="260" height="28" fill="#1B2A4A"/>
        <text x="48" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="white">Strategic Review</text>
        <text x="48" y="65" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.5)">Q4 2024 · Acme Corp · Draft v3</text>

        {/* Document sections — steps 1–3 */}
        {DOC_SECTIONS.map((s, i) => (
          <g key={s.header} style={sh(step, i + 1)}>
            <rect x="44" y={s.y - 14} width="3" height="14" rx="1.5" fill="#88E788"/>
            <text x="54" y={s.y - 3} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">{s.header}</text>
            <rect x="44" y={s.y + 8}  width="220" height="5" rx="2.5" fill="rgba(27,20,15,0.08)"/>
            <rect x="44" y={s.y + 20} width="200" height="5" rx="2.5" fill="rgba(27,20,15,0.06)"/>
            <rect x="44" y={s.y + 32} width="190" height="5" rx="2.5" fill="rgba(27,20,15,0.06)"/>
            <rect x="44" y={s.y + 44} width="170" height="5" rx="2.5" fill="rgba(27,20,15,0.04)"/>
          </g>
        ))}

        {/* Annotation bubbles — step 4 */}
        <g style={sh(step, 4)}>
          <rect x="200" y="100" width="72" height="28" rx="6" fill="rgba(232,169,76,0.2)"/>
          <rect x="200" y="100" width="72" height="28" rx="6" stroke="rgba(232,169,76,0.5)" strokeWidth="1"/>
          <text x="236" y="117" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fill="#7a5010" textAnchor="middle">Client queried</text>
          <line x1="224" y1="95" x2="216" y2="86" stroke="rgba(232,169,76,0.6)" strokeWidth="1.5"/>

          <rect x="180" y="180" width="80" height="28" rx="6" fill="rgba(136,231,136,0.15)"/>
          <rect x="180" y="180" width="80" height="28" rx="6" stroke="rgba(136,231,136,0.4)" strokeWidth="1"/>
          <text x="220" y="197" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fill="#1a6e1a" textAnchor="middle">Approved ✓</text>
        </g>

        {/* Mitra panel frame — step 5 */}
        <g style={sh(step, 5)}>
          <rect x="308" y="28" width="144" height="304" rx="12" fill="rgba(27,42,74,0.04)"/>
          <rect x="308" y="28" width="144" height="304" rx="12" stroke="rgba(27,42,74,0.12)" strokeWidth="1"/>
          <circle cx="328" cy="52" r="5" fill="#88E788"/>
          <text x="340" y="56" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="#1B2A4A">Mitra Notes</text>
          <text x="316" y="72" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.4)">Client review call · 45 min</text>
          <rect x="316" y="78" width="128" height="0.5" fill="rgba(27,20,15,0.1)"/>
        </g>

        {/* Mitra notes — step 6 */}
        {CONSULTANT_NOTES.map((n, i) => (
          <g key={i} style={sh(step, 6)}>
            <rect x="316" y={94 + i * 58} width="126" height="48" rx="7" fill="rgba(255,255,255,0.7)"/>
            <rect x="316" y={94 + i * 58} width="3" height="48" rx="1.5"
              fill={n.color === "#88E788" ? "#88E788" : n.color === "#E8A94C" ? "#E8A94C" : "#1B2A4A"}/>
            <text x="326" y={94 + i * 58 + 14} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700"
              fill={n.color === "#88E788" ? "#1a6e1a" : n.color === "#E8A94C" ? "#7a5010" : "#1B2A4A"}>{n.tag}</text>
            {n.text.split("\n").map((line, li) => (
              <text key={li} x="326" y={94 + i * 58 + 26 + li * 12} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">{line}</text>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

// ── NGO ───────────────────────────────────────────────────────────────────────
// 7 steps × 550 ms = 3.85 s play, 7 s hold → ~10.85 s loop
const NGO_STAKEHOLDERS = [
  { label: "Donor\nAgency",        cx: 80,  cy: 100, color: "#88E788" },
  { label: "Gov\nPartner",         cx: 400, cy: 100, color: "#E8A94C" },
  { label: "Community\nLead",      cx: 80,  cy: 260, color: "#1B2A4A" },
  { label: "Field\nTeam",          cx: 400, cy: 260, color: "#88E788" },
  { label: "Programme\nDirector",  cx: 240, cy: 50,  color: "#E8A94C" },
];

const NGO_BUBBLES = [
  { x: 28,  y: 28,  col: "#88E788", label: "Commitment", sub: "₦12M approved" },
  { x: 352, y: 28,  col: "#E8A94C", label: "Action",     sub: "MOU by Dec 1" },
  { x: 28,  y: 288, col: "#1B2A4A", label: "Field note", sub: "Site visit Jan" },
  { x: 352, y: 288, col: "#88E788", label: "Approved",   sub: "Q1 expansion" },
];

export function NGOIllustration() {
  const { ref, step } = useAnimLoop(7, 550, 7000);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="360" rx="20" fill="#FAF6F0"/>
        <rect width="480" height="360" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Central node — always */}
        <circle cx="240" cy="180" r="52" fill="#1B2A4A"/>
        <text x="240" y="174" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Stakeholder</text>
        <text x="240" y="188" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Review</text>
        <circle cx="240" cy="198" r="4" fill="#88E788"/>
        <text x="252" y="202" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fill="rgba(255,255,255,0.7)">Mitra active</text>

        {/* Stakeholder nodes — steps 1–5 */}
        {NGO_STAKEHOLDERS.map((node, i) => (
          <g key={i} style={sh(step, i + 1)}>
            <line x1={node.cx} y1={node.cy} x2="240" y2="180" stroke="rgba(27,20,15,0.12)" strokeWidth="1.5" strokeDasharray="4,4"/>
            <circle cx={node.cx} cy={node.cy} r="32" fill="white" stroke={node.color} strokeWidth="1.5"/>
            {node.label.split("\n").map((line, li) => (
              <text key={li} x={node.cx} y={node.cy - 4 + li * 14}
                fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="#1B140F" textAnchor="middle">{line}</text>
            ))}
          </g>
        ))}

        {/* Commitment bubbles — step 6 */}
        <g style={sh(step, 6)}>
          {NGO_BUBBLES.map((b, i) => {
            const isGreen = b.col === "#88E788";
            const isOchre = b.col === "#E8A94C";
            return (
              <g key={i}>
                <rect x={b.x} y={b.y} width="100" height="44" rx="8"
                  fill={isGreen ? "rgba(136,231,136,0.12)" : isOchre ? "rgba(232,169,76,0.12)" : "rgba(27,42,74,0.08)"}
                  stroke={isGreen ? "rgba(136,231,136,0.35)" : isOchre ? "rgba(232,169,76,0.35)" : "rgba(27,42,74,0.2)"}
                  strokeWidth="1"
                />
                <text x={b.x + 50} y={b.y + 18} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600"
                  fill={isGreen ? "#1a6e1a" : isOchre ? "#7a5010" : "#1B2A4A"} textAnchor="middle">{b.label}</text>
                <text x={b.x + 50} y={b.y + 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8"
                  fill="rgba(27,20,15,0.6)" textAnchor="middle">{b.sub}</text>
              </g>
            );
          })}
        </g>

        {/* Summary badge — step 7 */}
        <g style={sh(step, 7)}>
          <rect x="192" y="248" width="96" height="26" rx="8" fill="rgba(136,231,136,0.15)" stroke="rgba(136,231,136,0.4)" strokeWidth="1"/>
          <text x="240" y="264" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="#1a6e1a" textAnchor="middle">6 commitments logged</text>
        </g>
      </svg>
    </div>
  );
}
