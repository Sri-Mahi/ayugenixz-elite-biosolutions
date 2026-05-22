import { SectionHeader } from "./Founder";
import {
  Atom, Beaker, Dna, FlaskConical, Microscope, Network, Pill, Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    id: "service-drug",
    icon: <Pill className="h-6 w-6" />,
    title: "Drug Design Services",
    tag: "Computational Discovery",
    desc: "Molecular docking, QSAR modeling, ligand screening, pharmacophore design, and therapeutic compound identification using cutting-edge in-silico pipelines.",
    bullets: ["Molecular Docking", "QSAR Modeling", "Virtual Screening", "ADMET Profiling"],
  },
  {
    id: "service-protein",
    icon: <Atom className="h-6 w-6" />,
    title: "Protein Sequence Analysis",
    tag: "Structural Biology",
    desc: "Motif analysis, sequence alignment, secondary/tertiary structure prediction, and structure–function relationship interpretation.",
    bullets: ["Motif Discovery", "BLAST & Alignment", "Structure Prediction", "Function Annotation"],
  },
  {
    id: "service-genome",
    icon: <Dna className="h-6 w-6" />,
    title: "Genome Editing",
    tag: "CRISPR Workflows",
    desc: "CRISPR-Cas concepts, guide RNA design, gene-editing workflow consulting, and molecular biology support for academic projects.",
    bullets: ["gRNA Design", "CRISPR Workflows", "Knock-in / Knock-out", "Edit Validation"],
  },
  {
    id: "service-ngs",
    icon: <Network className="h-6 w-6" />,
    title: "NGS Variant Analysis",
    tag: "Next-Gen Sequencing",
    desc: "End-to-end variant calling, annotation, and interpretation across genomic and proteomic datasets with publication-ready reports.",
    bullets: ["Variant Calling", "SNV / Indel", "Functional Annotation", "Mutation Insights"],
  },
  {
    id: "service-cellular",
    icon: <Microscope className="h-6 w-6" />,
    title: "Cellular, Microbial & Molecular",
    tag: "Wet Lab",
    desc: "Animal cell culture, phytochemistry, chromatography, spectroscopy, microbial studies, and integrated molecular techniques.",
    bullets: ["Animal Cell Culture", "Phytochemistry", "HPLC / GC", "Microbial Assays"],
  },
  {
    id: "service-special",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Special Research Platforms",
    tag: "Advanced",
    desc: "Custom analytics, patent-focused research structuring, private project documentation, and translational research enablement.",
    bullets: ["Patent Structuring", "Analytics", "Private Docs", "Translational"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Our Services" title="A full-stack life science platform" subtitle="From in-silico drug discovery to molecular wet-lab — six integrated services designed for academic depth and industrial rigor." />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              id={s.id}
              key={s.id}
              className="group relative overflow-hidden rounded-3xl glass border-gradient p-6 transition hover:-translate-y-1 scroll-mt-32"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-40"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  {s.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary">{s.tag}</span>
              </div>
              <h3 className="relative mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="relative mt-4 flex flex-wrap gap-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Training() {
  return (
    <section id="training" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Training Programs" title="Two flagship learning tracks" subtitle="Foundational to advanced — structured curricula designed by working scientists." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            { id: "course-1", title: "Specialized Biotech / Bioinformatics Module", tag: "Course 1", desc: "Foundational hands-on training in sequence analysis, biological databases, molecular biology techniques, and core bioinformatics tools.", topics: ["Sequence Analysis", "Biological Databases", "Python for Biology", "Mol-Bio Techniques"] },
            { id: "course-2", title: "Advanced Research Module", tag: "Course 2", desc: "Project-based advanced training in NGS, drug design, structural bioinformatics, and publication-grade research execution.", topics: ["NGS Pipelines", "Docking & QSAR", "R for Genomics", "Manuscript Writing"] },
          ].map((c) => (
            <article key={c.id} id={c.id} className="glass-strong border-gradient relative overflow-hidden rounded-3xl p-7 scroll-mt-32">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">{c.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.topics.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/85">
                    <Beaker className="h-3 w-3 text-primary" /> {t}
                  </span>
                ))}
              </div>
              <Link to="/signup" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Enroll Now <FlaskConical className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
