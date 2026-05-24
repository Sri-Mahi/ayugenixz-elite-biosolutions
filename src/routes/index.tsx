import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { FutureOfCompBio, GlobalVision, ResearchEcosystem, StudentToScientist, WhyStandsOut } from "@/components/HomeSections";
import { ArrowRight, Atom, Dna, FlaskConical, Microscope, ShieldCheck, Sparkles } from "lucide-react";

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
  { to: "/services", icon: <FlaskConical />, t: "Services", d: "Drug design, NGS, CRISPR, protein analysis." },
  { to: "/about", icon: <Atom />, t: "Founder", d: "Dr. J. Saraswathi — Ph.D. Genetics, 8+ yrs research." },
  { to: "/research", icon: <Dna />, t: "Research Reel", d: "Student research showcase with NDA gate." },
  { to: "/shield", icon: <ShieldCheck />, t: "Innovator's Shield", d: "Watermarking, vaults, patent docs." },
  { to: "/internships", icon: <Microscope />, t: "Internships", d: "Real-world bioinformatics & wet lab tracks." },
  { to: "/memories", icon: <Sparkles />, t: "Memories", d: "Conferences, labs and milestones." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee direction="left" />
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" /> Explore the platform
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">One platform · Six disciplines</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Navigate the entire Ayugenixz ecosystem — pick a track and dive in.
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
    </>
  );
}
