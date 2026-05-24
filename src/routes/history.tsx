import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, BookOpen, FlaskConical, GraduationCap, Microscope, Rocket, Sparkles, Users } from "lucide-react";

const timeline = [
  { y: "2017", icon: <Sparkles />, t: "The Spark", d: "Dr. J. Saraswathi begins mentoring students in computational biology and bioinformatics." },
  { y: "2018", icon: <BookOpen />, t: "First Workshops", d: "Hands-on workshops on Python, R and sequence analysis for UG/PG students." },
  { y: "2019", icon: <Users />, t: "Research Mentorship", d: "First cohort of guided dissertations across genomics and molecular docking." },
  { y: "2020", icon: <Microscope />, t: "Online Pivot", d: "Remote pipelines, virtual labs and online research tracks scale globally." },
  { y: "2021", icon: <FlaskConical />, t: "Wet + Dry Integration", d: "Microbiology and NGS analysis brought under a single mentorship umbrella." },
  { y: "2022", icon: <Award />, t: "AYUGENIXZ Founded", d: "Formally registered as a Telangana establishment — UDYAM-TS-09-0181603." },
  { y: "2023", icon: <GraduationCap />, t: "Internship Programs", d: "Structured internships in drug design, NGS, CRISPR and protein analysis." },
  { y: "2024", icon: <Rocket />, t: "Innovator's Shield", d: "NDA-protected research vault, watermarking and patent-aware documentation." },
  { y: "2025", icon: <Sparkles />, t: "Global Vision", d: "International-grade research showcase and AI-for-biology programs launched." },
];

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — AYUGENIXZ" },
      { name: "description", content: "The AYUGENIXZ story — foundation, milestones, mentorship and the journey toward a global biotech ecosystem." },
      { property: "og:title", content: "History — AYUGENIXZ" },
      { property: "og:description", content: "Foundation, milestones and mentorship journey." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" /> Our Story
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              A journey of <span className="text-gradient">mentorship & discovery</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              From a single classroom to a registered biotechnology establishment — these are the milestones
              that shaped AYUGENIXZ.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
               style={{ background: "linear-gradient(180deg, transparent, oklch(0.78 0.18 165 / 0.5), oklch(0.78 0.10 285 / 0.5), transparent)" }} />
          <ul className="space-y-10">
            {timeline.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.y} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <span className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary animate-pulse-glow md:left-1/2" />
                  <Reveal delay={i * 70}>
                    <div className={`pl-10 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                      <div className="font-mono text-xs tracking-widest text-primary">{m.y}</div>
                      <div className="mt-2 inline-flex items-center gap-3 glass border-gradient rounded-2xl px-5 py-4">
                        <div className="grid h-9 w-9 place-items-center rounded-lg text-background" style={{ background: "var(--gradient-primary)" }}>
                          {m.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-display text-base font-semibold">{m.t}</div>
                          <div className="mt-1 text-xs text-muted-foreground max-w-sm">{m.d}</div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
