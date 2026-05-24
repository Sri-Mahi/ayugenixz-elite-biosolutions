import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DiscoveryReel } from "@/components/DiscoveryReel";
import { Reveal } from "@/components/Reveal";
import { FlaskConical, Globe2, GraduationCap, Microscope, Network, ShieldCheck, Sparkles } from "lucide-react";

type Cat = "student" | "intern" | "international";

const data: Record<Cat, {
  eyebrow: string;
  title: string;
  blurb: string;
  icon: React.ReactNode;
  items: { t: string; d: string; tag: string }[];
}> = {
  student: {
    eyebrow: "Student Research",
    title: "UG / PG academic & mentored research",
    blurb: "Guided dissertations and capstones across bioinformatics, biotechnology and environmental microbiology — built for publishable academic outputs.",
    icon: <GraduationCap />,
    items: [
      { t: "UG/PG Mini-Projects", d: "Semester-aligned mini-projects with mentorship and reproducible reports.", tag: "Academic" },
      { t: "Bioinformatics Dissertations", d: "Sequence analysis, motif discovery, phylogeny and conservation studies.", tag: "Dry Lab" },
      { t: "Biotechnology Projects", d: "Molecular biology, recombinant DNA and cell-culture aligned investigations.", tag: "Wet Lab" },
      { t: "Environmental Microbiology", d: "Soil isolates, bioactivity screening, MIC and antimicrobial profiling.", tag: "Microbiology" },
      { t: "Guided Academic Research", d: "Hypothesis → design → execution → defense, with weekly checkpoints.", tag: "Mentored" },
      { t: "Research Mentorship", d: "1:1 reviews, literature deep-dives, writing & figure preparation support.", tag: "1:1" },
    ],
  },
  intern: {
    eyebrow: "Intern Research",
    title: "Industry-style internship research",
    blurb: "Project-based internships that simulate working-lab pipelines — molecular docking, NGS analysis and reproducible analytics.",
    icon: <FlaskConical />,
    items: [
      { t: "Internship Projects", d: "Defined scope, clear deliverables and weekly review of intern output.", tag: "Project" },
      { t: "Training Outputs", d: "Capstones from training modules turned into publishable mini-reports.", tag: "Training" },
      { t: "Molecular Docking", d: "Target preparation, ligand library docking, scoring & ADMET filtering.", tag: "Drug Design" },
      { t: "NGS Analysis", d: "Alignment, variant calling, annotation and oncoplot summarisation.", tag: "Genomics" },
      { t: "Skill-Development Research", d: "Tool-driven mini-research bridging coursework and real workflows.", tag: "Skills" },
      { t: "Industry-Style Simulations", d: "Mock CRO-style projects with documentation, QC and handover.", tag: "Industry" },
    ],
  },
  international: {
    eyebrow: "International Research",
    title: "Global-standard biotechnology themes",
    blurb: "International-grade research themes, analytics and presentation style — preparing scientists for global collaborations.",
    icon: <Globe2 />,
    items: [
      { t: "International Collaboration", d: "Showcase-grade projects styled for cross-border collaboration & publication.", tag: "Global" },
      { t: "Advanced Analytics", d: "Multi-omics analysis, ML-augmented pipelines, reproducible notebooks.", tag: "AI + Bio" },
      { t: "Worldwide Life-Science", d: "Themes drawn from international biotech innovation and translational science.", tag: "Innovation" },
      { t: "International Presentation", d: "Conference-grade decks, posters and figure-quality science visuals.", tag: "Comms" },
      { t: "Computational Biology", d: "Protein language models, structure prediction & sequence embeddings.", tag: "Comp Bio" },
      { t: "Global Inspiration", d: "Curated case studies from leading global biotech research efforts.", tag: "Inspiration" },
    ],
  },
};

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — AYUGENIXZ" },
      { name: "description", content: "Student, intern, and international-grade research at AYUGENIXZ — bioinformatics, NGS, docking, microbiology and AI for biology." },
      { property: "og:title", content: "Research — AYUGENIXZ" },
      { property: "og:description", content: "Three premium research tracks with NDA-protected portfolio previews." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const [cat, setCat] = useState<Cat>("student");
  const current = data[cat];

  return (
    <div className="pt-32 sm:pt-40">
      <section className="relative pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                <Network className="h-3 w-3" /> Research Tracks
              </div>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Three pillars of <span className="text-gradient">live-science research</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                Choose your track — academic, internship or international-grade. Every project is
                NDA-protected, watermarked and stored in the Innovator's Shield.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex flex-wrap gap-1 rounded-full glass-strong p-1">
                {(Object.keys(data) as Cat[]).map((k) => {
                  const active = cat === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setCat(k)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition ${
                        active ? "text-background" : "text-foreground/80 hover:bg-white/5"
                      }`}
                      style={active ? { background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" } : undefined}
                    >
                      {data[k].icon} {data[k].eyebrow}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <div className="glass-strong border-gradient rounded-3xl p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)" }}>
                  {current.icon}
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-primary">{current.eyebrow}</div>
                <h2 className="mt-2 font-display text-2xl font-semibold">{current.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{current.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px]"><ShieldCheck className="h-3 w-3 text-primary" /> NDA-gated previews</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px]"><Sparkles className="h-3 w-3 text-primary" /> Watermarked</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px]"><Microscope className="h-3 w-3 text-primary" /> Mentored</span>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {current.items.map((it, i) => (
                <Reveal key={it.t} delay={i * 50}>
                  <div className="glass border-gradient rounded-2xl p-5 h-full">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{it.tag}</div>
                      <ShieldCheck className="h-3.5 w-3.5 text-primary/70" />
                    </div>
                    <div className="mt-2 font-display text-base font-semibold">{it.t}</div>
                    <div className="mt-1.5 text-sm text-muted-foreground">{it.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Reveal><DiscoveryReel /></Reveal>
    </div>
  );
}
