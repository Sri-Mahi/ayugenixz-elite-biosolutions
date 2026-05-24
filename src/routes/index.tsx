import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { GlobalVision, StudentToScientist, WhyStandsOut } from "@/components/HomeSections";
import { ArrowRight, Atom, Dna, FlaskConical, Microscope, ShieldCheck, Sparkles, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AYUGENIXZ — Smart Solutions for Complex Biology" },
      { name: "description", content: "AYUGENIXZ — premium biotech & bioinformatics platform: programs, research, internships and training." },
      { property: "og:title", content: "AYUGENIXZ" },
      { property: "og:description", content: "Smart Solutions for Complex Biology" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { to: "/research", icon: <Dna />, t: "Genomics", d: "Study of an organism's complete set of DNA." },
  { to: "/services", icon: <Microscope />, t: "NGS Analysis", d: "High-throughput sequencing data analysis." },
  { to: "/services", icon: <FlaskConical />, t: "Drug Discovery", d: "Identification of potential therapeutic agents." },
  { to: "/services", icon: <Atom />, t: "Protein Analysis", d: "Characterization of protein structure and function." },
  { to: "/training", icon: <GraduationCap />, t: "Bioinformatics Training", d: "Skill development in computational biology." },
  { to: "/services", icon: <Sparkles />, t: "Biotechnology Services", d: "Diverse solutions leveraging biological systems." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee direction="left" />

      <WhyStandsOut />
      <GlobalVision />

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" /> Explore the platform
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Advanced bioinformatics, one ecosystem</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Navigate the entire AYUGENIXZ platform — pick a track and dive into real science.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.to} delay={i * 60}>
                <Link to={h.to} className="group block glass border-gradient rounded-3xl p-6 transition hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                      {h.icon}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{h.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StudentToScientist />
    </>
  );
}

