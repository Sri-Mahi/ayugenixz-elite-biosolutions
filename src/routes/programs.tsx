import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, BadgeCheck, BookOpen, Brain, Cpu, Dna, FlaskConical, GraduationCap, Microscope, Network } from "lucide-react";

type Program = {
  id: string;
  icon: React.ReactNode;
  title: string;
  duration: string;
  eligibility: string;
  tools: string[];
  outcomes: string[];
  cert: string;
};

const programs: Program[] = [
  {
    id: "p-research", icon: <Microscope />, title: "Research Programs",
    duration: "3–6 months", eligibility: "UG / PG · Life Sciences, Biotech, Bioinformatics",
    tools: ["Python", "R", "Biopython", "Linux"],
    outcomes: ["Original mini-project", "Mentored dissertation", "Publishable report"],
    cert: "Research Completion Certificate",
  },
  {
    id: "p-internship", icon: <GraduationCap />, title: "Internship Programs",
    duration: "1–3 months", eligibility: "UG / PG students & fresh graduates",
    tools: ["AutoDock", "GATK", "VEP", "MEGA"],
    outcomes: ["Hands-on project", "Industry-style workflow", "LOR + certificate"],
    cert: "Internship Certificate",
  },
  {
    id: "p-bioinfo", icon: <Network />, title: "Bioinformatics Training",
    duration: "4–8 weeks", eligibility: "Anyone with biology basics",
    tools: ["Python", "BLAST", "Biopython", "Bash"],
    outcomes: ["Sequence analysis pipelines", "Custom scripts", "Mini portfolio"],
    cert: "Bioinformatics Training Certificate",
  },
  {
    id: "p-biotech", icon: <FlaskConical />, title: "Biotechnology Skill Dev.",
    duration: "4–6 weeks", eligibility: "UG students in biology/biotech",
    tools: ["MEGA", "ImageJ", "Primer3", "SnapGene"],
    outcomes: ["Molecular biology skills", "Lab protocols", "Project notebook"],
    cert: "Skill Development Certificate",
  },
  {
    id: "p-docking", icon: <Dna />, title: "Molecular Docking",
    duration: "3–5 weeks", eligibility: "PG / final-year UG",
    tools: ["AutoDock Vina", "PyMOL", "RDKit", "Discovery Studio"],
    outcomes: ["Docking workflow", "Hit identification", "Mini drug-design report"],
    cert: "Computational Drug Design Certificate",
  },
  {
    id: "p-ngs", icon: <Cpu />, title: "Genomics & NGS",
    duration: "6–8 weeks", eligibility: "PG students / research aspirants",
    tools: ["BWA", "GATK", "Mutect2", "VEP", "samtools"],
    outcomes: ["Variant calling pipeline", "Annotation reports", "Reproducible notebook"],
    cert: "NGS Analyst Certificate",
  },
  {
    id: "p-mentor", icon: <BookOpen />, title: "Research Mentorship",
    duration: "Ongoing", eligibility: "Students working on dissertations",
    tools: ["1:1 sessions", "Literature reviews", "Reproducible workflows"],
    outcomes: ["Research design", "Mentored execution", "Defense preparation"],
    cert: "Mentorship Acknowledgement",
  },
  {
    id: "p-cert", icon: <BadgeCheck />, title: "Certification Programs",
    duration: "2–4 weeks", eligibility: "Open to all students",
    tools: ["Curated modules", "Quizzes", "Mini-project"],
    outcomes: ["Verified skill badge", "Portfolio artifact", "Career boost"],
    cert: "Verified Certificate",
  },
];

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — AYUGENIXZ" },
      { name: "description", content: "Research, internships, bioinformatics training, NGS, molecular docking and mentorship programs at AYUGENIXZ." },
      { property: "og:title", content: "Programs — AYUGENIXZ" },
      { property: "og:description", content: "Structured programs from internship to research mentorship." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
              <Brain className="h-3 w-3" /> Programs
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Structured paths into <span className="text-gradient">real biology research</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Eight programs covering research, internships, training and certifications — each with
              defined outcomes, tools and certification.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 50}>
              <div className="group glass border-gradient rounded-3xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">{p.title}</div>
                    <div className="text-[11px] uppercase tracking-wider text-primary">{p.duration}</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <Row label="Eligibility" value={p.eligibility} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Tools</div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {p.tools.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-foreground/85">{t}</span>)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Outcomes</div>
                    <ul className="mt-1.5 space-y-1 text-[13px] text-foreground/85">
                      {p.outcomes.map((o) => <li key={o} className="flex gap-2"><Award className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" /> {o}</li>)}
                    </ul>
                  </div>
                  <Row label="Certification" value={p.cert} />
                </div>
                <div className="mt-5 flex gap-2 pt-2">
                  <Link to="/signup" className="inline-flex h-9 flex-1 items-center justify-center rounded-full px-4 text-xs font-medium text-background" style={{ background: "var(--gradient-primary)" }}>
                    Enroll
                  </Link>
                  <Link to="/contact" className="inline-flex h-9 items-center justify-center rounded-full glass px-4 text-xs font-medium">
                    Ask
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{label}</div>
      <div className="mt-1 text-[13px] text-foreground/85">{value}</div>
    </div>
  );
}
