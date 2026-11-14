/** Inline vector identity stays sharp and visible before JavaScript loads. */
export default function HeroLogo() {
  return (
    <div className="brand-stage" role="img" aria-label="VRK Solutions logo">
      <div className="hero-logo-lockup" aria-hidden="true">
        <svg className="hero-logo-mark" viewBox="0 0 86 72" fill="none">
          <path
            className="hero-logo-v"
            fill="#E85D24"
            d="M3 8h12l12 32L39 8h12L27 62z"
          />
          <path
            className="hero-logo-k"
            fill="#202322"
            d="M43 8h13v20L69 8h14L64 35l19 27H68L56 43v19H43V41l8-21z"
          />
        </svg>
        <span className="hero-logo-name">VRK</span>
        <span className="hero-logo-descriptor">SOLUTIONS</span>
      </div>
      <span className="object-label">
        BUILT WITH INTENT. READY FOR WHAT’S NEXT.
      </span>
    </div>
  );
}
