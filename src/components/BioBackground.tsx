import { useEffect, useRef } from "react";

/**
 * Animated life-science background:
 * - SVG rotating DNA helix
 * - Canvas floating molecule particles + protein network
 * - SVG genomics data-flow lines
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
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: P[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(60, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const alpha = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(110, 231, 183, ${alpha * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        g.addColorStop(0, "rgba(125, 211, 252, 0.9)");
        g.addColorStop(1, "rgba(125, 211, 252, 0)");
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
      {/* gradient wash */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* rotating DNA helix */}
      <svg
        viewBox="0 0 200 600"
        className="absolute right-[-40px] top-1/2 hidden h-[700px] -translate-y-1/2 opacity-50 animate-spin-slow md:block"
        style={{ filter: "drop-shadow(0 0 12px var(--emerald))" }}
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const y = i * 25 + 10;
          const phase = (i / 24) * Math.PI * 4;
          const x1 = 100 + Math.sin(phase) * 50;
          const x2 = 100 - Math.sin(phase) * 50;
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="oklch(0.78 0.15 200)" strokeWidth="1.2" opacity="0.5" />
              <circle cx={x1} cy={y} r="3" fill="oklch(0.78 0.18 165)" />
              <circle cx={x2} cy={y} r="3" fill="oklch(0.82 0.15 200)" />
            </g>
          );
        })}
      </svg>
      {/* genomics data flow */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="oklch(0.82 0.15 200)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[15, 35, 60, 80].map((y, i) => (
          <path
            key={i}
            d={`M -50 ${y}% Q 25% ${y - 10}% 50% ${y}% T 110% ${y}%`}
            stroke="url(#flow)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 8"
            className="animate-data-flow"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
