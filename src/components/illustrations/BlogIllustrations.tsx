// Editorial illustrations for blog post thumbnails — hover-interactive
import { useState } from "react";

export function BlogIllustration1() {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect width="600" height="360" fill="#1B2A4A"/>

      {/* Broken notepad — left */}
      <g transform="rotate(-8, 160, 180)">
        <rect x="60" y="80" width="200" height="240" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        {[0,1,2,3,4,5,6,7].map(i => (
          <circle key={i} cx="60" cy={105 + i * 28} r="7" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
        ))}
        <rect x="82" y="104" width="130" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="82" y="120" width="80" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
        <rect x="110" y="138" width="120" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
        <path d="M82 156 L100 174 M100 156 L82 174" stroke="rgba(220,80,80,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="110" y="158" width="100" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <path d="M82 190 L96 204 M96 190 L82 204" stroke="rgba(220,80,80,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="100" y="194" width="120" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
        <path d="M60 260 L140 250 L120 270 L210 258 L220 278" stroke="rgba(220,80,80,0.5)" strokeWidth="1.5"/>
      </g>

      {/* Arrow */}
      <path d="M270 180 L330 180" stroke="#88E788" strokeWidth="3" strokeLinecap="round"/>
      <path d="M322 172 L330 180 L322 188" stroke="#88E788" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="300" y="165" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(136,231,136,0.7)" textAnchor="middle">Mitra</text>

      {/* Fixed notepad — right; lifts on hover */}
      <g style={{ transform: hovered ? "translateY(-4px)" : "translateY(0)", transition: "transform 0.3s ease" }}>
        <rect x="340" y="70" width="220" height="250" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(136,231,136,0.3)" strokeWidth="1.5"/>
        <rect x="340" y="70" width="220" height="40" rx="12" fill="rgba(136,231,136,0.15)"/>
        <rect x="340" y="88" width="220" height="22" fill="rgba(136,231,136,0.15)"/>
        <text x="440" y="95" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#88E788" textAnchor="middle">Meeting Summary</text>

        {[
          { tag: "Decision", line: "Expand to Abuja Q1", col: "#88E788" },
          { tag: "Action", line: "Chidi → deck by Fri", col: "#E8A94C" },
          { tag: "Action", line: "Amara → Interswitch", col: "#E8A94C" },
          { tag: "Follow-up", line: "Draft intro → GTBank", col: "rgba(255,255,255,0.6)" },
        ].map((n, i) => (
          <g key={i}>
            <circle cx="358" cy={136 + i * 44} r="8" fill={n.col === "#88E788" ? "rgba(136,231,136,0.25)" : n.col === "#E8A94C" ? "rgba(232,169,76,0.25)" : "rgba(255,255,255,0.1)"}/>
            <path d={`M354 ${136 + i * 44} l3 3 6-6`} stroke={n.col === "#88E788" ? "#88E788" : n.col === "#E8A94C" ? "#E8A94C" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="376" y={128 + i * 44} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700" fill={n.col}>{n.tag}</text>
            <text x="376" y={142 + i * 44} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">{n.line}</text>
          </g>
        ))}
      </g>

      <text x="300" y="345" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.25)" textAnchor="middle">
        Why meeting notes fail African professionals
      </text>
    </svg>
  );
}

export function BlogIllustration2() {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect width="600" height="360" fill="#FAF6F0"/>

      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={30 + i * 14} y1={40 + i * 8} x2={180 + i * 8} y2={40 + i * 8} stroke="rgba(27,42,74,0.06)" strokeWidth="1.5"/>
      ))}

      <rect x="140" y="80" width="320" height="220" rx="16" fill="white" stroke="rgba(27,20,15,0.1)" strokeWidth="1.5"/>
      <path d="M140 80 L300 170 L460 80Z" fill="rgba(27,42,74,0.06)"/>
      <path d="M140 80 L300 170 L460 80" stroke="rgba(27,20,15,0.1)" strokeWidth="1"/>
      <text x="300" y="200" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B140F" textAnchor="middle">Re: Partnership proposal</text>
      <rect x="180" y="214" width="240" height="5" rx="2.5" fill="rgba(27,20,15,0.08)"/>
      <rect x="180" y="226" width="200" height="5" rx="2.5" fill="rgba(27,20,15,0.06)"/>
      <rect x="180" y="238" width="220" height="5" rx="2.5" fill="rgba(27,20,15,0.06)"/>
      <rect x="230" y="260" width="140" height="32" rx="10" fill="#88E788"/>
      <text x="300" y="281" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="#1B140F" textAnchor="middle">Send → 28 sec</text>

      <rect x="420" y="90" width="80" height="36" rx="10" fill="#1B2A4A"/>
      <text x="460" y="107" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.7)" textAnchor="middle">Ready in</text>
      <text x="460" y="121" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="800" fill="#88E788" textAnchor="middle">28 sec</text>

      {/* Deal won card — lifts and brightens on hover */}
      <g style={{ transform: hovered ? "translateY(-5px) scale(1.03)" : "translateY(0) scale(1)", transformOrigin: "500px 218px", transition: "transform 0.3s ease" }}>
        <rect x="430" y="168" width="140" height="100" rx="12"
          style={{ fill: hovered ? "rgba(136,231,136,0.22)" : "rgba(136,231,136,0.12)", stroke: hovered ? "rgba(136,231,136,0.6)" : "rgba(136,231,136,0.4)", transition: "fill 0.3s ease, stroke 0.3s ease" }}
          strokeWidth="1.5"/>
        <text x="500" y="198" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1a6e1a" textAnchor="middle">Deal Won ✓</text>
        <text x="500" y="216" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="20" fontWeight="800" fill="#1B140F" textAnchor="middle">₦8.5M</text>
        <rect x="452" y="228" width="96" height="5" rx="2.5" fill="rgba(136,231,136,0.4)"/>
        <text x="500" y="252" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.5)" textAnchor="middle">Zenith Bank · Closed</text>
      </g>

      <rect x="30" y="168" width="130" height="90" rx="10" fill="rgba(27,20,15,0.04)" stroke="rgba(27,20,15,0.1)" strokeWidth="1"/>
      <text x="95" y="196" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="rgba(27,20,15,0.5)" textAnchor="middle">Without Mitra</text>
      <text x="95" y="216" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fill="rgba(27,20,15,0.4)" textAnchor="middle">Follow-up sent</text>
      <text x="95" y="232" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700" fill="rgba(220,80,80,0.7)" textAnchor="middle">2 days later</text>
      <text x="95" y="248" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.35)" textAnchor="middle">Deal lost to faster rival</text>

      <text x="300" y="345" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="rgba(27,20,15,0.2)" textAnchor="middle">
        The follow-up email that closes deals
      </text>
    </svg>
  );
}

export function BlogIllustration3() {
  const [hovered, setHovered] = useState(false);

  const CARDS = [
    { currency: "₦", label: "Naira",       country: "Nigeria",      x: 60,  y: 80,  delay: "0ms" },
    { currency: "GH₵", label: "Cedi",      country: "Ghana",        x: 220, y: 50,  delay: "40ms" },
    { currency: "KSh", label: "Shilling",  country: "Kenya",        x: 370, y: 80,  delay: "80ms" },
    { currency: "R",   label: "Rand",      country: "South Africa", x: 490, y: 60,  delay: "120ms" },
  ];

  return (
    <svg
      viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect width="600" height="360" fill="#88E788"/>

      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} stroke="rgba(27,20,15,0.05)" strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => (
        <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="360" stroke="rgba(27,20,15,0.05)" strokeWidth="0.5"/>
      ))}

      <text x="300" y="260" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="240" fontWeight="900" fill="rgba(27,20,15,0.08)" textAnchor="middle">₦</text>

      {/* Currency cards — each lifts slightly on hover with staggered delay */}
      {CARDS.map((c, i) => (
        <g key={i} style={{
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          transition: `transform 0.3s ease ${c.delay}`,
        }}>
          <rect x={c.x} y={c.y} width={90} height={64} rx="10"
            style={{ fill: hovered ? "rgba(27,20,15,0.18)" : "rgba(27,20,15,0.1)", transition: "fill 0.3s ease" }}/>
          <text x={c.x + 45} y={c.y + 28} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="20" fontWeight="800" fill="#1B140F" textAnchor="middle">{c.currency}</text>
          <text x={c.x + 45} y={c.y + 44} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="rgba(27,20,15,0.6)" textAnchor="middle">{c.label}</text>
          <text x={c.x + 45} y={c.y + 58} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fill="rgba(27,20,15,0.4)" textAnchor="middle">{c.country}</text>
        </g>
      ))}

      <circle cx="300" cy="200" r="60" fill="rgba(27,20,15,0.07)"/>
      <circle cx="300" cy="200" r="40" fill="rgba(27,20,15,0.07)"/>
      <circle cx="300" cy="200" r="20" fill="rgba(27,20,15,0.12)"/>
      <text x="300" y="205" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700" fill="#1B140F" textAnchor="middle">Mitra</text>

      {[
        {x2: 105, y2: 144},
        {x2: 265, y2: 114},
        {x2: 415, y2: 144},
        {x2: 535, y2: 124},
      ].map((line, i) => (
        <line key={i} x1="300" y1="200" x2={line.x2} y2={line.y2} stroke="rgba(27,20,15,0.2)" strokeWidth="1.5" strokeDasharray="5,4"/>
      ))}

      <rect x="100" y="280" width="120" height="40" rx="8" fill="rgba(27,20,15,0.1)"/>
      <text x="160" y="296" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F" textAnchor="middle">Paystack</text>
      <text x="160" y="312" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.55)" textAnchor="middle">Local rails</text>

      <rect x="380" y="280" width="120" height="40" rx="8" fill="rgba(27,20,15,0.1)"/>
      <text x="440" y="296" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#1B140F" textAnchor="middle">Flutterwave</text>
      <text x="440" y="312" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="rgba(27,20,15,0.55)" textAnchor="middle">Pan-African</text>

      <text x="300" y="345" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="700" fill="rgba(27,20,15,0.35)" textAnchor="middle">
        Why local payments are a statement, not a feature
      </text>
    </svg>
  );
}
