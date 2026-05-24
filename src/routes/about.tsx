import { createFileRoute } from "@tanstack/react-router";
import { Founder } from "@/components/Founder";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2, Microscope, BookOpen, GraduationCap, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayugenixz BioSolutions" },
      { name: "description", content: "Empowering Discovery Through Data-Driven Science." },
      { property: "og:title", content: "About — Ayugenixz" },
      { property: "og:description", content: "Empowering Discovery Through Data-Driven Science." },
    ],
  }),
  component: () => (
    <div className="pt-24 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mb-24">
        {/* Moto */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] glass border-gradient p-10 sm:p-20 text-center mb-20 shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 blur-3xl" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6 shadow-sm border border-white/5">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" /> Our Moto
              </div>
              <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 mb-8 leading-tight drop-shadow-sm">
                Empowering Discovery Through <span className="text-gradient">Data-Driven</span> Science
              </h1>
              <div className="mx-auto max-w-3xl space-y-6 text-base text-muted-foreground/90 sm:text-lg leading-relaxed text-center font-medium">
                <p>
                  Ayugenixz BioSolutions harnesses biotechnology and bioinformatics to drive the future of life sciences, simplifying complex biological data and empowering research with precision-driven tools and insights.
                </p>
                <p>
                  From in silico analysis to molecular biology research, we provide reliable, innovative, and affordable services to academic institutions, researchers, and biotech companies. Whether you're decoding genetic sequences or analyzing phytochemicals, we're your scientific partner at every step.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why choose us? */}
        <Reveal delay={100}>
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-semibold sm:text-5xl tracking-tight">Why Choose Us?</h2>
              <p className="text-primary mt-4 uppercase tracking-[0.25em] text-sm font-bold flex items-center justify-center gap-3">
                <span className="h-[1px] w-8 bg-primary/50" />
                Decoding Life, Delivering Insight
                <span className="h-[1px] w-8 bg-primary/50" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group glass border-gradient rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.03]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary shadow-inner">
                    <Microscope className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Research & Solutions</h3>
                </div>
                <ul className="space-y-4 text-sm text-muted-foreground/90 font-medium">
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Bioinformatics data analysis & interpretation</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Customized in silico drug designing research service</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Molecular biology research & consultancy</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Genomics and proteomics solutions</span></li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="group glass border-gradient rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.03]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary shadow-inner">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Academic Support</h3>
                </div>
                <ul className="space-y-4 text-sm text-muted-foreground/90 font-medium">
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Guidance to UG, PG, and PhD research project works</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Assistance with thesis and dissertation writing</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Scientific paper writing and publication support</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Statistical data analysis for bioinformatics, genomics, and molecular biology</span></li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="group glass border-gradient rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.03]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary shadow-inner">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Skill Development</h3>
                </div>
                <ul className="space-y-4 text-sm text-muted-foreground/90 font-medium">
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Educational training programs</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Live and recorded online bioinformatics classes</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Hands-on workshops with real datasets and tools</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Certification programs</span></li>
                  <li className="flex gap-3 items-start"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 opacity-80" /> <span>Personalized mentorship</span></li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why We Stand Out */}
        <Reveal delay={200}>
          <div className="glass-strong border-gradient rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl font-semibold sm:text-5xl mb-4 tracking-tight">Why We Stand Out</h2>
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-14">
                Because We Empower Every Step of Your Scientific Journey.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 text-left">
                {[
                  "Affordable, reliable, and plagiarism-free work",
                  "Domain experts with academic experience",
                  "On-time delivery with documentation support",
                  "Commitment to quality, innovation, and student success"
                ].map((text, i) => (
                  <div key={i} className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/[0.08] hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Star className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground/90 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              <div className="inline-block rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-4 border border-primary/20 shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)] backdrop-blur-md mt-6">
                <p className="text-base sm:text-lg font-semibold text-foreground/90 tracking-wide">
                  From classroom to laboratory to publication — Ayugenixz BioSolutions is your trusted partner in life science research and education.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal delay={300}>
        <Founder />
      </Reveal>

    </div>
  ),
});