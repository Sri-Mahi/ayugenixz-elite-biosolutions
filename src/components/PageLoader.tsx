import { useEffect, useState } from "react";
import { Dna } from "lucide-react";

export function PageLoader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 750);
    const t2 = setTimeout(() => setGone(true), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] grid place-items-center transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.99 0.005 220) 0%, oklch(0.94 0.03 210) 70%)",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <div
          className="relative grid h-16 w-16 place-items-center rounded-2xl animate-pulse-glow"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Dna className="h-8 w-8 text-background animate-spin-slow" />
        </div>
        <div className="font-display text-sm tracking-[0.3em] text-primary uppercase">
          Ayugenixz
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full w-1/3 rounded-full"
            style={{
              background: "var(--gradient-primary)",
              animation: "marquee 1.1s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
