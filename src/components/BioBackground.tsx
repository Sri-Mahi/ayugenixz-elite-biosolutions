import { useEffect, useRef } from "react";

/**
 * Premium live-science background for light biotech theme.
 * Layered:
 *  - soft aurora gradient wash
 *  - subtle grid + holographic noise
 *  - canvas: floating cells + protein interaction network
 *  - SVG: rotating DNA double helix + orbiting molecule + genomics data flow
 */
export function BioBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = 1;
    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: number };
    type Cell = { x: number; y: number; vx: number; vy: number; r: number; phase: number };
    let nodes: P[] = [];
    let cells: Cell[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 20000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 2,
        hue: Math.random() < 0.5 ? 165 : 210, // emerald / cyan
      }));
      const cellCount = Math.min(14, Math.floor(w / 120));
      cells = Array.from({ length: cellCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 18 + Math.random() * 28,
        phase: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // floating cells (microscope-inspired)
      for (const c of cells) {
        c.x += c.vx; c.y += c.vy;
        if (c.x < -50 || c.x > w + 50) c.vx *= -1;
        if (c.y < -50 || c.y > h + 50) c.vy *= -1;
        const pulse = 0.85 + Math.sin(t / 900 + c.phase) * 0.15;
        const g = ctx.createRadialGradient(c.x, c.y, c.r * 0.2, c.x, c.y, c.r * pulse);
        g.addColorStop(0, "rgba(125, 211, 192, 0.35)");
        g.addColorStop(0.5, "rgba(125, 200, 220, 0.18)");
        g.addColorStop(1, "rgba(200, 220, 255, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * pulse, 0, Math.PI * 2);
        ctx.fill();
        // nucleus
        ctx.fillStyle = "rgba(80, 160, 170, 0.18)";
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * 0.22, 0, Math.PI * 2);
        ctx.fill();
      }

      // protein network links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150) {
            const alpha = (1 - Math.sqrt(d2) / 150) * 0.35;
            ctx.strokeStyle = `rgba(60, 150, 170, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // node glow
      for (const n of nodes) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        const c = n.hue === 165 ? "16, 185, 129" : "14, 165, 200";
        g.addColorStop(0, `rgba(${c}, 0.85)`);
        g.addColorStop(1, `rgba(${c}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* aurora gradient wash */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 animate-aurora" style={{ background: "var(--gradient-aurora)", mixBlendMode: "screen", opacity: 0.7 }} />

      {/* science grid */}
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* particle / cell canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* rotating DNA double helix */}
      <svg
        viewBox="0 0 220 640"
        className="absolute right-[-30px] top-1/2 hidden h-[680px] -translate-y-1/2 opacity-80 animate-spin-slow md:block"
        style={{ filter: "drop-shadow(0 0 16px rgba(16,185,129,0.35))" }}
      >
        <defs>
          <linearGradient id="strandA" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.17 165)" />
            <stop offset="100%" stopColor="oklch(0.78 0.12 210)" />
          </linearGradient>
          <linearGradient id="strandB" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.10 285)" />
            <stop offset="100%" stopColor="oklch(0.72 0.17 165)" />
          </linearGradient>
        </defs>
        {(() => {
          const pts = Array.from({ length: 28 }, (_, i) => {
            const y = i * 22 + 10;
            const phase = (i / 28) * Math.PI * 4.5;
            return { y, x1: 110 + Math.sin(phase) * 60, x2: 110 - Math.sin(phase) * 60, d: Math.cos(phase) };
          });
          return (
            <>
              <path d={`M ${pts.map(p => `${p.x1} ${p.y}`).join(" L ")}`} stroke="url(#strandA)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d={`M ${pts.map(p => `${p.x2} ${p.y}`).join(" L ")}`} stroke="url(#strandB)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {pts.map((p, i) => (
                <g key={i} opacity={0.35 + p.d * 0.3}>
                  <line x1={p.x1} y1={p.y} x2={p.x2} y2={p.y} stroke="oklch(0.55 0.08 220)" strokeWidth="1" />
                  <circle cx={p.x1} cy={p.y} r="3.2" fill="oklch(0.72 0.17 165)" />
                  <circle cx={p.x2} cy={p.y} r="3.2" fill="oklch(0.78 0.12 210)" />
                </g>
              ))}
            </>
          );
        })()}
      </svg>

      {/* orbiting molecule (top-left) */}
      <svg
        viewBox="0 0 300 300"
        className="absolute -left-10 top-16 hidden h-[280px] w-[280px] opacity-70 md:block"
        style={{ filter: "drop-shadow(0 0 18px rgba(125, 200, 220, 0.4))" }}
      >
        <g style={{ transformOrigin: "150px 150px" }} className="animate-spin-slower">
          <circle cx="150" cy="150" r="110" fill="none" stroke="oklch(0.70 0.13 210 / 0.35)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="150" cy="150" r="80" fill="none" stroke="oklch(0.72 0.17 165 / 0.35)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="150" cy="150" r="50" fill="none" stroke="oklch(0.78 0.10 285 / 0.35)" strokeWidth="1" strokeDasharray="3 6" />
        </g>
        <g className="animate-orbit" style={{ transformOrigin: "150px 150px" }}>
          <circle cx="260" cy="150" r="7" fill="oklch(0.72 0.17 165)" />
        </g>
        <g className="animate-orbit" style={{ transformOrigin: "150px 150px", animationDuration: "10s", animationDirection: "reverse" }}>
          <circle cx="230" cy="150" r="5" fill="oklch(0.70 0.13 210)" />
        </g>
        <g className="animate-orbit" style={{ transformOrigin: "150px 150px", animationDuration: "14s" }}>
          <circle cx="200" cy="150" r="4" fill="oklch(0.78 0.10 285)" />
        </g>
        <circle cx="150" cy="150" r="12" fill="oklch(0.72 0.17 165)" />
        <circle cx="150" cy="150" r="22" fill="none" stroke="oklch(0.72 0.17 165 / 0.4)" strokeWidth="1.5" className="animate-pulse-glow" />
      </svg>

      {/* genomics data flow */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="oklch(0.70 0.13 210)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[12, 32, 55, 78].map((y, i) => (
          <path
            key={i}
            d={`M -50 ${y}% Q 25% ${y - 8}% 50% ${y}% T 110% ${y}%`}
            stroke="url(#flow)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="6 10"
            className="animate-data-flow"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </svg>

      {/* holographic top-bottom fade */}
      <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(0deg, rgba(255,255,255,0.7), transparent)" }} />
    </div>
  );
}
