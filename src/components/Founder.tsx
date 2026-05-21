import { Award, BookOpen, FlaskConical, GraduationCap, Microscope, Users } from "lucide-react";

export function Founder() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Founder & Director" title="Dr. J. Saraswathi" subtitle="A research-driven leader bridging academic biology with applied life-science innovation." />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Portrait card */}
          <div className="glass-strong border-gradient relative overflow-hidden rounded-3xl p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative mx-auto grid h-44 w-44 place-items-center overflow-hidden rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              <span className="font-display text-5xl font-semibold text-background">JS</span>
            </div>
            <div className="relative mt-6 text-center">
              <div className="font-display text-2xl font-semibold">Dr. J. Saraswathi</div>
              <div className="mt-1 text-sm text-primary">Founder & Director</div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                <Award className="h-3.5 w-3.5 text-primary" /> Ph.D. · Genetics
              </div>
            </div>
            <div className="relative mt-6 space-y-2 text-sm text-foreground/85">
              <Cred icon={<GraduationCap className="h-4 w-4" />} text="Ph.D. in Genetics" />
              <Cred icon={<BookOpen className="h-4 w-4" />} text="Advanced PG Diploma in Bioinformatics" />
              <Cred icon={<Microscope className="h-4 w-4" />} text="M.Sc. Biotechnology · Osmania University" />
            </div>
          </div>

          {/* Expertise */}
          <div>
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              With over 8 years of multidisciplinary experience in <span className="text-primary">genomics</span>,
              <span className="text-primary"> NGS analysis</span>, and computational biology, Dr. Saraswathi
              leads Ayugenixz with a deep commitment to mentorship, scientific integrity, and translational
              research that empowers the next generation of life-science innovators.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: <FlaskConical />, t: "Genomics & NGS Analysis", d: "8+ years interpreting variants and computational pipelines." },
                { icon: <Microscope />, t: "Molecular Docking & QSAR", d: "Structure-based drug discovery & ligand modeling." },
                { icon: <BookOpen />, t: "Python & R Workflows", d: "Custom bioinformatics automation and analysis." },
                { icon: <Users />, t: "Mentor & Reviewer", d: "Assistant Professor, peer reviewer, conference speaker." },
                { icon: <FlaskConical />, t: "Chromatography & Spectroscopy", d: "Analytical chemistry & instrumentation expertise." },
                { icon: <Microscope />, t: "Animal Cell Culture", d: "Wet-lab molecular biology & cell-line research." },
              ].map((c) => (
                <div key={c.t} className="glass rounded-2xl p-4 transition hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald/10" style={{ background: "oklch(0.78 0.18 165 / 0.12)" }}>
                      {c.icon}
                    </span>
                    <div className="font-display text-sm font-semibold text-foreground">{c.t}</div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cred({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
