interface MitraIconProps {
  size?: number;
  className?: string;
}

export function MitraIcon({ size = 32, className = "" }: MitraIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mitra"
    >
      <rect width="32" height="32" rx="8" fill="#88E788" />
      {/* Pen nib — scribe · consigliere · concierge */}
      <path
        d="M16 5 C10 5 5 8 5 14 L16 28 L27 14 C27 8 22 5 16 5 Z"
        fill="#1B2A4A"
      />
      {/* Vent hole */}
      <ellipse cx="16" cy="12.5" rx="1.8" ry="2.2" fill="#88E788" />
      {/* Center slit (tine split) */}
      <line
        x1="16"
        y1="14.7"
        x2="16"
        y2="28"
        stroke="#88E788"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface MitraMarkProps {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}

export function MitraMark({
  size = 24,
  color = "#1B2A4A",
  accentColor = "#88E788",
  className = "",
}: MitraMarkProps) {
  const h = Math.round(size * 1.15);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mitra"
    >
      <path
        d="M12 2 C7.5 2 3 5 3 11 L12 26 L21 11 C21 5 16.5 2 12 2 Z"
        fill={color}
      />
      <ellipse cx="12" cy="10" rx="1.7" ry="2" fill={accentColor} />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="26"
        stroke={accentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
