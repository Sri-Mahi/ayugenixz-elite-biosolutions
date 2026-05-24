import { Atom, Brain, Dna, FlaskConical, Globe2, GraduationCap, Microscope, Network, Rocket, ShieldCheck, Sparkles, Telescope } from "lucide-react";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

const stands = [
  { icon: <Dna />, t: "Live-Science Research", d: "Hands-on bioinformatics, NGS, docking, and wet-lab integrated into every project." },
  { icon: <ShieldCheck />, t: "Innovator's Shield", d: "Watermarking, NDA gates, vaults and patent-aware documentation." },
  { icon: <Network />, t: "Computational Backbone", d: "Pipelines for variant calling, structural biology, QSAR and protein analysis." },
  { icon: <GraduationCap />, t: "Mentorship-Driven", d: "8+ years guiding UG / PG / interns to publishable scientific outputs." },
  { icon: <Globe2 />, t: "Global Standards", d: "Workflows aligned with international research and reporting practices." },
  { icon: <Sparkles />, t: "Future-Ready Skills", d: "AI-assisted biology, cloud genomics and reproducible analytics." },
];

const journey = [
  { k: "01", t: "Discover", d: "Choose a domain — genomics, bioinformatics, docking, microbiology." },
  { k: "02", t: "Train", d: "Tool-driven modules: Python, R, AutoDock, GATK, Biopython." },
  { k: "03", t: "Build", d: "Real project under mentorship — from hypothesis to results." },
  { k: "04", t: "Publish", d: "Reports, posters and dissertations of publishable quality." },
  { k: "05", t: "Innovate", d: "Translate findings into IP, prototypes or extended research." },
];

const eco = [
  { icon: <Microscope />, t: "Wet Lab", d: "Microbial isolation, screening, MIC, basic molecular work." },
  { icon: <FlaskConical />, t: "Dry Lab", d: "Sequence analysis, docking, modelling, QSAR, simulations." },
  { icon: <Brain />, t: "AI + Biology", d: "ML models on omics data, predictive screening, embeddings." },
  { icon: <Telescope />, t: "Frontier Topics", d: "CRISPR design, single-cell, protein language models." },
];

export function WhyStandsOut() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal><SectionTitle eyebrow="Why AYUGENIXZ Stands Out" title="A live-science platform, not a course portal" sub="Every track is built on real research practice — tools, datasets and mentorship used in working laboratories." /></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stands.map((s, i) => (
            <Reveal key={s.t} delay={i * 50}>
              <div className="group glass border-gradient rounded-3xl p-6 transition hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GlobalVision() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div>
              <Eyebrow>Global Research Vision</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                Building India's <span className="text-gradient">next-gen bioinformatics</span> ecosystem
              </h2>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                AYUGENIXZ bridges classroom biology and frontier life-science research — preparing
                students, interns and early scientists to contribute to genomics, computational biology
                and translational medicine at international standards.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Genomics", "Bioinformatics", "AI for Biology", "Drug Discovery", "Translational Research"].map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/80">{t}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/programs" className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  Explore Programs
                </Link>
                <Link to="/research" className="inline-flex h-11 items-center justify-center rounded-full glass px-5 text-sm font-medium">
                  See Research Tracks
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl" style={{ background: "var(--gradient-aurora)" }} />
              <div className="relative glass-strong border-gradient rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary">Pipeline Console</div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                  </div>
                </div>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-black/60 p-4 font-mono text-[11px] leading-relaxed" style={{ color: "oklch(0.88 0.13 165)" }}>
{`> ngs-pipeline --sample S07 --ref GRCh38
  [ok] trim_galore         (12.3s)
  [ok] bwa-mem align       (1m04)
  [ok] mark_duplicates     (18.2s)
  [ok] mutect2 call        (2m11)
  [ok] vep annotate        (44.7s)
> docking --target EGFR --library phyto.smi
  [ok] prepare ligands     (8.9s)
  [ok] vina dock x256      (3m02)
  [hit] ΔG = -9.41 kcal/mol  scaffold:#A12`}
                </pre>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "12", v: "Pipelines" },
                    { k: "200+", v: "Datasets" },
                    { k: "24/7", v: "Mentorship" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-xl bg-white/5 py-3">
                      <div className="text-gradient font-display text-xl font-bold">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function StudentToScientist() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal><SectionTitle eyebrow="Student → Scientist Journey" title="From your first script to your first paper" sub="A guided 5-step path from curiosity to original scientific contribution." /></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {journey.map((s, i) => (
            <Reveal key={s.k} delay={i * 70}>
              <div className="glass border-gradient rounded-3xl p-5 h-full">
                <div className="font-mono text-xs tracking-widest text-primary">{s.k}</div>
                <div className="mt-2 font-display text-lg font-semibold">{s.t}</div>
                <div className="mt-1.5 text-xs text-muted-foreground">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchEcosystem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal><SectionTitle eyebrow="Scientific Research Ecosystem" title="Wet lab + dry lab + AI, in one place" sub="Cross-train across disciplines instead of being locked into one bench." /></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {eco.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div className="glass border-gradient rounded-3xl p-6 h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)" }}>
                  {s.icon}
                </div>
                <div className="mt-5 font-display text-lg font-semibold">{s.t}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FutureOfCompBio() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong border-gradient p-8 sm:p-14" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <Eyebrow>Future of Computational Biology</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                  Where <span className="text-gradient">code</span>, <span className="text-gradient">cells</span> and <span className="text-gradient">AI</span> converge
                </h2>
                <p className="mt-5 text-base text-muted-foreground sm:text-lg max-w-xl">
                  AYUGENIXZ is built for the era where every biologist writes code, every dataset is
                  multi-omics, and every discovery is reproducible by design.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/signup" className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                    Join the Movement
                  </Link>
                  <Link to="/history" className="inline-flex h-11 items-center justify-center rounded-full glass px-5 text-sm font-medium">
                    Our Story
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { i: <Atom />, t: "Multi-omics" },
                  { i: <Rocket />, t: "Reproducible" },
                  { i: <Brain />, t: "AI-native" },
                  { i: <Dna />, t: "Open Science" },
                ].map((b) => (
                  <div key={b.t} className="glass rounded-2xl p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-lg text-background" style={{ background: "var(--gradient-primary)" }}>{b.i}</div>
                    <div className="mt-3 font-display text-base font-semibold">{b.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
