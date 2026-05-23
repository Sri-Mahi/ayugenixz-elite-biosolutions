/**
 * Lightweight ambient science background for non-hero pages.
 * SVG-only, fixed full-viewport, behind all content. No canvas — cheap on perf.
 */
export function AmbientScience() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* aurora gradient */}
      <div className="absolute inset-0 animate-aurora" style={{ background: "var(--gradient-aurora)", mixBlendMode: "screen", opacity: 0.55 }} />
      {/* science grid */}
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* floating helix top-right */}
      <svg viewBox="0 0 200 600" className="absolute -right-10 top-24 h-[520px] opacity-30 animate-spin-slow hidden md:block">
        {Array.from({ length: 22 }).map((_, i) => {
          const y = i * 26 + 10;
          const phase = (i / 22) * Math.PI * 4;
          const x1 = 100 + Math.sin(phase) * 50;
          const x2 = 100 - Math.sin(phase) * 50;
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="oklch(0.55 0.08 220)" strokeWidth="0.8" opacity="0.5" />
              <circle cx={x1} cy={y} r="2.5" fill="oklch(0.72 0.17 165)" />
              <circle cx={x2} cy={y} r="2.5" fill="oklch(0.70 0.13 210)" />
            </g>
          );
        })}
      </svg>

      {/* molecule bottom-left */}
      <svg viewBox="0 0 300 300" className="absolute -left-12 bottom-10 h-[260px] w-[260px] opacity-40 hidden md:block">
        <g className="animate-spin-slower" style={{ transformOrigin: "150px 150px" }}>
          <circle cx="150" cy="150" r="100" fill="none" stroke="oklch(0.70 0.13 210 / 0.4)" strokeWidth="1" strokeDasharray="3 7" />
          <circle cx="150" cy="150" r="65" fill="none" stroke="oklch(0.72 0.17 165 / 0.4)" strokeWidth="1" strokeDasharray="3 7" />
        </g>
        <circle cx="150" cy="150" r="10" fill="oklch(0.72 0.17 165)" />
        <circle cx="250" cy="150" r="5" fill="oklch(0.70 0.13 210)" />
        <circle cx="150" cy="50" r="5" fill="oklch(0.78 0.10 285)" />
        <circle cx="85" cy="215" r="4" fill="oklch(0.72 0.17 165)" />
      </svg>

      {/* data flow lines */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ambflow" x1="0" x2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="oklch(0.70 0.13 210)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[20, 50, 85].map((y, i) => (
          <path
            key={i}
            d={`M -50 ${y}% Q 30% ${y - 6}% 60% ${y}% T 110% ${y}%`}
            stroke="url(#ambflow)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 10"
            className="animate-data-flow"
            style={{ animationDelay: `${i * 1.6}s`, opacity: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
}
