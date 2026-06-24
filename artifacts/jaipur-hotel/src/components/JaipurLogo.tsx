export function JaipurLogo() {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Jharokha emblem */}
      <svg
        viewBox="0 0 56 72"
        width="38"
        height="49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Three-spire crown */}
        <path
          d="M16 20 L18 13 L20 17 L28 8 L36 17 L38 13 L40 20 Z"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="28" cy="8"  r="1.6" fill="#D4AF37" />
        <circle cx="18" cy="13" r="1.1" fill="#D4AF37" />
        <circle cx="38" cy="13" r="1.1" fill="#D4AF37" />

        {/* Crown base rule */}
        <line x1="14" y1="20" x2="42" y2="20" stroke="#D4AF37" strokeWidth="1.1" />

        {/* Outer pointed arch (Mughal/Rajput form) */}
        <path
          d="M10 40 C10 26 19 20 28 20 C37 20 46 26 46 40"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Left pillar */}
        <rect x="10" y="40" width="5" height="20" fill="#D4AF37" />
        {/* Right pillar */}
        <rect x="41" y="40" width="5" height="20" fill="#D4AF37" />

        {/* Pillar capitals */}
        <rect x="8"  y="38" width="9" height="2.5" fill="#D4AF37" />
        <rect x="39" y="38" width="9" height="2.5" fill="#D4AF37" />

        {/* Pillar bases */}
        <rect x="8"  y="60" width="9" height="2.5" fill="#D4AF37" />
        <rect x="39" y="60" width="9" height="2.5" fill="#D4AF37" />

        {/* Inner decorative arch */}
        <path
          d="M17 42 C17 32 22 26 28 26 C34 26 39 32 39 42"
          stroke="#D4AF37"
          strokeWidth="0.8"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Central diamond medallion */}
        <path
          d="M28 30 L31.5 34 L28 38 L24.5 34 Z"
          stroke="#D4AF37"
          strokeWidth="0.9"
          fill="none"
          strokeOpacity="0.8"
        />
        <circle cx="28" cy="34" r="1.4" fill="#D4AF37" opacity="0.85" />

        {/* Base cornice bar */}
        <rect x="6" y="62" width="44" height="2" fill="#D4AF37" />

        {/* Bracket corbel curves */}
        <path
          d="M6 64 Q3 70 9 70 L47 70 Q53 70 50 64"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeOpacity="0.55"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.45rem",
            letterSpacing: "0.22em",
            color: "#D4AF37",
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          JAIPUR HOTEL
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.38em",
            color: "#D4AF37",
            opacity: 0.65,
            textTransform: "uppercase",
            marginTop: "5px",
          }}
        >
          A Heritage Hotel
        </span>
        <div
          className="group-hover:scale-x-150 transition-transform duration-300 origin-left"
          style={{ height: "1px", background: "#D4AF37", opacity: 0.4, marginTop: "5px" }}
        />
      </div>
    </div>
  );
}
