import { SectionHeader } from "./Founder";

const items = [
  { title: "National Conference", tag: "Bangalore 2024", h: 280, hue: "165" },
  { title: "International Symposium", tag: "Singapore", h: 220, hue: "200" },
  { title: "Bioinformatics Workshop", tag: "Hyderabad", h: 320, hue: "260" },
  { title: "Lab Collaboration", tag: "Osmania Univ.", h: 200, hue: "165" },
  { title: "Student Project Demo", tag: "On Campus", h: 260, hue: "200" },
  { title: "NGS Training", tag: "Hands-on", h: 300, hue: "165" },
  { title: "Poster Presentation", tag: "Intl. Genetics", h: 240, hue: "200" },
  { title: "Wet Lab Session", tag: "Cell Culture", h: 280, hue: "260" },
];

export function Memories() {
  return (
    <section id="memories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Memories Gallery" title="Conferences, workshops, and lab life" subtitle="Moments from our journey across national & international stages and inside the laboratory." />
        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
          {items.map((it, i) => (
            <div
              key={i}
              className="relative mb-4 break-inside-avoid overflow-hidden rounded-2xl glass border-gradient"
              style={{ height: it.h }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, oklch(0.78 0.18 ${it.hue} / 0.55), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.55 0.2 ${Number(it.hue) + 30} / 0.45), transparent 60%), linear-gradient(135deg, oklch(0.22 0.04 250), oklch(0.16 0.03 250))`,
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary">{it.tag}</div>
                <div className="mt-1 font-display text-sm font-semibold">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
