import { Dna } from "lucide-react";

const ITEMS = [
  "AYUGENIXZ",
  "Smart Solutions for Complex Biology",
  "Registered Establishment – Telangana",
  "UDYAM-TS-09-0181603",
  "Genomics",
  "Bioinformatics",
  "NGS",
  "Molecular Docking",
  "QSAR",
  "Protein Analysis",
  "Student Research",
];

export function BrandMarquee({
  direction = "left",
  className = "",
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className={`relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] ${className}`}
    >
      <div
        className="flex w-max gap-10 animate-marquee whitespace-nowrap"
        style={direction === "right" ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-[0.22em] text-foreground/70"
          >
            <Dna className="h-4 w-4 text-primary animate-pulse-glow" />
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
