import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "./Founder";

const internships = [
  { title: "Research Internship Programs", desc: "End-to-end mentored research immersion across life-science domains." },
  { title: "Bioinformatics Projects", desc: "Hands-on Python/R pipelines, NGS, and structural bioinformatics." },
  { title: "Biotechnology Projects", desc: "Wet-lab biotech experiments and translational case studies." },
  { title: "Environmental Microbiology", desc: "Soil, water and microbial diversity research projects." },
  { title: "Student Mentorship", desc: "1:1 guidance from senior researchers and domain experts." },
];

const careers = [
  { title: "Research Associate", level: "Full-time" },
  { title: "Bioinformatics Intern", level: "Internship" },
  { title: "Content / Training Coordinator", level: "Hybrid" },
  { title: "Web & Data Support Intern", level: "Internship" },
];

export function Internships() {
  return (
    <section id="internships" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Internships" title="Step into real research" subtitle="Structured internship tracks designed to convert classroom theory into publishable, project-grade experience." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((i) => (
            <div key={i.title} className="group glass border-gradient rounded-2xl p-6 transition hover:-translate-y-1">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/signup" className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Apply for Internship <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Careers() {
  return (
    <section id="careers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Careers" title="Build the future of life-science with us" subtitle="Open roles for researchers, builders, and educators passionate about the science of impact." />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {careers.map((c) => (
            <div key={c.title} className="glass-strong border-gradient flex items-center justify-between rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <Briefcase className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <div className="mt-1 text-xs uppercase tracking-wider text-primary">{c.level}</div>
                </div>
              </div>
              <Link to="/signup" className="hidden rounded-full bg-white/5 px-4 py-2 text-sm hover:bg-white/10 sm:inline-flex">Apply</Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/signup" className="inline-flex h-12 items-center justify-center gap-2 rounded-full glass px-7 text-sm font-medium">
            Submit Interest <ArrowRight className="h-4 w-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
