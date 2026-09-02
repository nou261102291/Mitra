// Illustrative UI graphics for How It Works sections

export function BeforeIllustration() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Outer card */}
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Calendar header */}
        <rect x="24" y="24" width="432" height="44" rx="10" fill="#1B2A4A"/>
        <text x="44" y="51" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#FDF9F4">
          November 2024
        </text>
        <rect x="390" y="36" width="20" height="20" rx="5" fill="rgba(255,255,255,0.12)"/>
        <rect x="420" y="36" width="20" height="20" rx="5" fill="rgba(255,255,255,0.12)"/>
        <text x="395" y="50" fontFamily="sans-serif" fontSize="10" fill="rgba(253,249,244,0.7)">‹</text>
        <text x="425" y="50" fontFamily="sans-serif" fontSize="10" fill="rgba(253,249,244,0.7)">›</text>

        {/* Meeting card */}
        <rect x="24" y="84" width="432" height="108" rx="12" fill="white"/>
        <rect x="24" y="84" width="432" height="108" rx="12" stroke="#88E788" strokeWidth="1.5"/>
        <rect x="24" y="84" width="4" height="108" rx="2" fill="#88E788"/>

        {/* Meeting title */}
        <text x="44" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="700" fill="#1B140F">
          Series A Update Call
        </text>
        <text x="44" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fill="rgba(27,20,15,0.5)">
          Thursday 14 Nov · 10:00 WAT · Zoom
        </text>

        {/* Attendee avatars */}
        <circle cx="44" cy="155" r="14" fill="#1B2A4A"/>
        <text x="44" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">EO</text>
        <circle cx="74" cy="155" r="14" fill="#88E788"/>
        <text x="74" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#1B140F" textAnchor="middle">YB</text>
        <circle cx="104" cy="155" r="14" fill="#E8A94C"/>
        <text x="104" y="160" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#1B140F" textAnchor="middle">KM</text>
        <circle cx="134" cy="155" r="14" fill="rgba(27,20,15,0.1)"/>
        <text x="134" y="160" fontFamily="sans-serif" fontSize="10" fill="rgba(27,20,15,0.5)" textAnchor="middle">+4</text>

        {/* Mitra Brief panel */}
        <rect x="24" y="208" width="432" height="108" rx="12" fill="rgba(136,231,136,0.07)"/>
        <rect x="24" y="208" width="432" height="108" rx="12" stroke="rgba(136,231,136,0.4)" strokeWidth="1"/>

        {/* Brief header */}
        <circle cx="44" cy="228" r="6" fill="#88E788"/>
        <text x="58" y="232" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B140F">
          Mitra Brief
        </text>
        <text x="388" y="232" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.35)">
          Ready 10 min before
        </text>

        {/* Brief bullets */}
        <circle cx="40" cy="254" r="2.5" fill="#88E788"/>
        <text x="52" y="258" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
          Last call (Oct 28): Runway extended to 18 months, team hiring Q1
        </text>
        <circle cx="40" cy="276" r="2.5" fill="#88E788"/>
        <text x="52" y="280" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
          Open action: Revised cap table from Yewande — not sent yet
        </text>
        <circle cx="40" cy="298" r="2.5" fill="#88E788"/>
        <text x="52" y="302" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.7)">
          Lead investor flag: Kofi was concerned about GTM timeline
        </text>
      </svg>
    </div>
  );
}

export function DuringIllustration() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Left: video call grid */}
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

        {/* Audio waves - animated feel */}
        <rect x="36" y="190" width="180" height="48" rx="8" fill="rgba(255,255,255,0.06)"/>
        <rect x="52" y="210" width="3" height="8" rx="1.5" fill="#88E788" opacity="0.9"/>
        <rect x="60" y="204" width="3" height="20" rx="1.5" fill="#88E788" opacity="0.9"/>
        <rect x="68" y="208" width="3" height="12" rx="1.5" fill="#88E788" opacity="0.9"/>
        <rect x="76" y="201" width="3" height="26" rx="1.5" fill="#88E788" opacity="0.9"/>
        <rect x="84" y="207" width="3" height="14" rx="1.5" fill="#88E788" opacity="0.7"/>
        <rect x="92" y="212" width="3" height="4" rx="1.5" fill="#88E788" opacity="0.5"/>
        <rect x="100" y="205" width="3" height="18" rx="1.5" fill="#88E788" opacity="0.9"/>
        <rect x="108" y="210" width="3" height="8" rx="1.5" fill="#88E788" opacity="0.7"/>
        <rect x="116" y="203" width="3" height="22" rx="1.5" fill="#88E788" opacity="0.9"/>
        <text x="36" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(136,231,136,0.8)">● LIVE</text>
        <text x="144" y="255" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(255,255,255,0.35)">No bot in room</text>

        {/* Bottom call controls */}
        <rect x="36" y="274" width="40" height="28" rx="14" fill="rgba(255,255,255,0.1)"/>
        <rect x="86" y="274" width="40" height="28" rx="14" fill="rgba(255,255,255,0.1)"/>
        <rect x="136" y="274" width="40" height="28" rx="14" fill="#C9542C"/>
        <text x="156" y="293" fontFamily="sans-serif" fontSize="14" fill="white" textAnchor="middle">×</text>

        {/* Right: Notes panel */}
        <rect x="240" y="24" width="216" height="292" rx="12" fill="white"/>
        <rect x="240" y="24" width="216" height="292" rx="12" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Notes header */}
        <rect x="240" y="24" width="216" height="40" rx="12" fill="rgba(27,20,15,0.03)"/>
        <rect x="240" y="44" width="216" height="20" fill="rgba(27,20,15,0.03)"/>
        <circle cx="260" cy="44" r="5" fill="#88E788"/>
        <text x="274" y="48" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">
          Notes · 14 min
        </text>

        {/* Note lines */}
        {[
          { y: 84, tag: "Decision", tagW: 52, color: "#1B2A4A", line1: "Expand to Abuja in Q1 —", line2: "budget approved", opacity: 1 },
          { y: 130, tag: "Action", tagW: 38, color: "#88E788", line1: "Chidi → revised deck", line2: "by Friday", opacity: 1 },
          { y: 174, tag: "Flagged", tagW: 44, color: "#E8A94C", line1: "GTM timeline concern", line2: "from Kofi — to address", opacity: 1 },
          { y: 218, tag: "Action", tagW: 38, color: "#88E788", line1: "Amara schedules pilot", line2: "call — Interswitch", opacity: 0.85 },
          { y: 262, tag: "Writing", tagW: 44, color: "rgba(27,20,15,0.25)", line1: "Monthly billing preferred", line2: "", opacity: 0.5 },
        ].map((n, i) => (
          <g key={i} opacity={n.opacity}>
            <rect x="254" y={n.y} width={n.tagW} height="16" rx="4"
              fill={n.color === "#88E788" ? "rgba(136,231,136,0.18)" : n.color === "#1B2A4A" ? "rgba(27,42,74,0.12)" : n.color === "#E8A94C" ? "rgba(232,169,76,0.18)" : "rgba(27,20,15,0.06)"}
            />
            <text x="260" y={n.y + 11} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700"
              fill={n.color === "#88E788" ? "#2a7a2a" : n.color === "#1B2A4A" ? "#1B2A4A" : n.color === "#E8A94C" ? "#8a6020" : "rgba(27,20,15,0.4)"}>
              {n.tag}
            </text>
            <text x="254" y={n.y + 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.8)">{n.line1}</text>
            {n.line2 && <text x="254" y={n.y + 46} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(27,20,15,0.8)">{n.line2}</text>}
          </g>
        ))}
        {/* Cursor */}
        <rect x="254" y="278" width="2" height="14" rx="1" fill="#88E788" opacity="0.8"/>
      </svg>
    </div>
  );
}

export function AfterIllustration() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="480" height="340" rx="20" fill="#FDF9F4"/>
        <rect width="480" height="340" rx="20" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Summary card - main */}
        <rect x="24" y="24" width="268" height="292" rx="12" fill="white"/>
        <rect x="24" y="24" width="268" height="292" rx="12" stroke="#1B140F" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Summary header */}
        <rect x="24" y="24" width="268" height="42" rx="12" fill="rgba(27,20,15,0.03)"/>
        <rect x="24" y="44" width="268" height="22" fill="rgba(27,20,15,0.03)"/>
        <text x="42" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="#1B140F">Meeting Summary</text>
        <text x="200" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.4)">14 Nov · 52 min</text>

        {/* Summary paragraph lines */}
        <rect x="40" y="76" width="230" height="7" rx="3.5" fill="rgba(27,20,15,0.1)"/>
        <rect x="40" y="90" width="210" height="7" rx="3.5" fill="rgba(27,20,15,0.07)"/>
        <rect x="40" y="104" width="180" height="7" rx="3.5" fill="rgba(27,20,15,0.07)"/>

        {/* Action items header */}
        <text x="40" y="135" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F">Action Items</text>
        <rect x="40" y="140" width="200" height="0.5" fill="rgba(27,20,15,0.1)"/>

        {/* Action items */}
        {[
          { owner: "Chidi", task: "Send revised financial model", done: true },
          { owner: "Amara", task: "Schedule Interswitch call", done: true },
          { owner: "Emeka", task: "Prepare board memo", done: false },
          { owner: "Yewande", task: "Share updated roadmap", done: false },
        ].map((item, i) => (
          <g key={i}>
            <circle cx="52" cy={163 + i * 32} r="8"
              fill={item.done ? "#88E788" : "rgba(27,20,15,0.06)"}
              stroke={item.done ? "none" : "rgba(27,20,15,0.15)"}
              strokeWidth="1"
            />
            {item.done && (
              <path d={`M${46} ${163 + i * 32} l4 4 6-7`} stroke="#1B140F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            )}
            <text x="68" y={160 + i * 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#1B140F">{item.owner}</text>
            <text x="68" y={173 + i * 32} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.55)">{item.task}</text>
          </g>
        ))}

        {/* One-click button */}
        <rect x="40" y="294" width="200" height="8" rx="0" fill="rgba(27,20,15,0.03)"/>
        <rect x="40" y="286" width="234" height="30" rx="8" fill="#88E788"/>
        <text x="157" y="305" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F" textAnchor="middle">
          Send follow-up email →
        </text>

        {/* Email draft card - offset */}
        <rect x="204" y="48" width="252" height="268" rx="12" fill="#FDF9F4"/>
        <rect x="204" y="48" width="252" height="268" rx="12" stroke="#1B140F" strokeOpacity="0.1" strokeWidth="1"/>

        {/* Email header */}
        <rect x="204" y="48" width="252" height="42" rx="12" fill="rgba(27,42,74,0.06)"/>
        <rect x="204" y="68" width="252" height="22" fill="rgba(27,42,74,0.06)"/>
        <text x="222" y="74" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B2A4A">Draft follow-up</text>
        <rect x="408" y="57" width="36" height="18" rx="5" fill="#88E788"/>
        <text x="426" y="70" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="700" fill="#1B140F" textAnchor="middle">Draft</text>

        {/* To / Subject */}
        <text x="220" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(27,20,15,0.35)">TO</text>
        <text x="240" y="108" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="#1B140F">kofi.mensah@example.com</text>
        <rect x="220" y="114" width="220" height="0.5" fill="rgba(27,20,15,0.08)"/>
        <text x="220" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="rgba(27,20,15,0.35)">RE</text>
        <text x="240" y="128" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="#1B140F">Series A Update — Next Steps</text>
        <rect x="220" y="134" width="220" height="0.5" fill="rgba(27,20,15,0.08)"/>

        {/* Email body lines */}
        <text x="220" y="158" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Hi Kofi,</text>
        <rect x="220" y="166" width="215" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
        <rect x="220" y="178" width="200" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
        <rect x="220" y="190" width="185" height="6" rx="3" fill="rgba(27,20,15,0.08)"/>
        <rect x="220" y="208" width="215" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>
        <rect x="220" y="220" width="170" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>
        <rect x="220" y="232" width="190" height="6" rx="3" fill="rgba(27,20,15,0.06)"/>

        <text x="220" y="262" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Best,</text>
        <text x="220" y="278" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.7)">Emeka</text>

        {/* Send button */}
        <rect x="338" y="286" width="100" height="26" rx="7" fill="#1B2A4A"/>
        <text x="388" y="303" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">Send →</text>
      </svg>
    </div>
  );
}
