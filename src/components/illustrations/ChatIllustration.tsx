// Animated illustration for the Mitra Chat page
// Shows a Pidgin query being typed, then a structured answer assembling
import { useAnimLoop, sh } from "./animUtils";

// Query types in 4 partial steps, then 4 answer rows appear one by one
// 8 steps × 550 ms = 4.4 s play, 4 s hold → ~8.4 s loop
const QUERY_PARTS = [
  "wetin be",
  "wetin be the oga's",
  "wetin be the oga's final decision",
  "wetin be the oga's final decision on budget?",
];

const ANSWER_ROWS = [
  { label: "Decision", value: "₦18M approved for Q1 expansion — final per MD", tag: "final", tagBg: "rgba(27,42,74,0.14)", tagCol: "#1B2A4A" },
  { label: "Said by", value: "Chukwuemeka Okonkwo (MD) · timestamp 22:14", tag: null },
  { label: "Meeting", value: "Budget Review · 8 Nov · Zoom", tag: null },
  { label: "Note", value: '"Oga" identified as MD Okonkwo from context', tag: null, italic: true },
];

export default function ChatIllustration() {
  const { ref, step } = useAnimLoop(8, 550, 4000);

  const queryText = step === 0 ? "" : QUERY_PARTS[Math.min(step - 1, QUERY_PARTS.length - 1)];
  const showCursor = step >= 1 && step <= 4;
  const showSend = step >= 4;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
        <rect width="480" height="300" rx="20" fill="#1B2A4A"/>

        {/* Top bar */}
        <rect x="0" y="0" width="480" height="48" rx="20" fill="rgba(253,249,244,0.06)"/>
        <rect x="0" y="30" width="480" height="18" fill="rgba(253,249,244,0.06)"/>
        <circle cx="24" cy="24" r="8" fill="#88E788"/>
        <text x="38" y="21" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#FDF9F4">Mitra</text>
        <text x="38" y="35" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(253,249,244,0.4)">Chat · Across all meetings</text>

        {/* Previous exchange (always visible) */}
        <rect x="72" y="60" width="220" height="28" rx="10" fill="rgba(253,249,244,0.08)"/>
        <text x="82" y="78" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(253,249,244,0.65)">find me all open action items</text>
        <rect x="24" y="60" width="28" height="28" rx="10" fill="rgba(136,231,136,0.15)"/>
        <text x="38" y="78" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fill="#88E788" textAnchor="middle">↵</text>

        {/* Mitra reply bubble */}
        <rect x="24" y="96" width="260" height="28" rx="10" fill="rgba(253,249,244,0.05)"/>
        <text x="34" y="114" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(253,249,244,0.5)">Found 4 open items across 3 meetings</text>

        {/* Divider */}
        <line x1="24" y1="140" x2="456" y2="140" stroke="rgba(253,249,244,0.08)" strokeWidth="1"/>

        {/* Input area — typing query */}
        <rect x="24" y="152" width="392" height="38" rx="12" fill="rgba(253,249,244,0.07)" stroke="rgba(136,231,136,0.3)" strokeWidth="1"/>
        <text x="38" y="176" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fill="rgba(253,249,244,0.8)">{queryText}</text>
        {showCursor && (
          <rect
            x={38 + queryText.length * 6.4}
            y="163"
            width="2"
            height="14"
            rx="1"
            fill="#88E788"
            className="cursor-blink"
          />
        )}
        {/* Send button */}
        <g style={{ opacity: showSend ? 1 : 0.25, transition: "opacity 0.3s ease" }}>
          <rect x="432" y="156" width="30" height="30" rx="9" fill="#88E788"/>
          <path d="M441 171h12M448 167l5 4-5 4" stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* Answer assembling */}
        <g style={sh(step, 5)}>
          <rect x="24" y="204" width="432" height="80" rx="14" fill="rgba(253,249,244,0.05)"/>
        </g>

        {/* "Mitra found it" header */}
        <g style={sh(step, 5)}>
          <circle cx="40" cy="216" r="7" fill="#88E788"/>
          <path d="M36 216l2.5 2.5 4.5-4.5" stroke="#1B140F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="52" y="220" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="rgba(253,249,244,0.5)">Mitra found it</text>
        </g>

        {/* Answer rows */}
        {ANSWER_ROWS.map((row, i) => (
          <g key={i} style={sh(step, 5 + i)}>
            <text
              x="40"
              y={238 + i * 16}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="9"
              fontWeight="600"
              fill="rgba(253,249,244,0.3)"
              textAnchor="start"
            >
              {row.label.toUpperCase()}
            </text>
            <text
              x="104"
              y={238 + i * 16}
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize={i === 3 ? 9 : 10}
              fontStyle={row.italic ? "italic" : "normal"}
              fill={row.italic ? "rgba(253,249,244,0.35)" : "rgba(253,249,244,0.8)"}
            >
              {row.value}
            </text>
            {row.tag && (
              <rect x="424" y={226 + i * 16} width={row.tag.length * 7 + 8} height="14" rx="4"
                fill={row.tagBg ?? "rgba(27,42,74,0.3)"}/>
            )}
            {row.tag && (
              <text x="428" y={237 + i * 16} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8"
                fontWeight="700" fill={row.tagCol ?? "#FDF9F4"}>
                {row.tag}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
