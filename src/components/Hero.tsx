import { BioBackground } from "./BioBackground";
import { ArrowRight, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <BioBackground />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-foreground/80 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Registered Establishment · Telangana · UDYAM-TS-09-0181603</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Smart Solutions for
            <br />
            <span className="text-gradient">Complex Biology</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transforming academic learning into hands-on research experiences and real-world life science
            innovation — genomics, bioinformatics, molecular biology, and beyond.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/services"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-background transition hover:opacity-90"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Explore Services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/internships"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full glass px-6 text-sm font-medium hover:bg-white/5"
            >
              <GraduationCap className="h-4 w-4 text-primary" /> Join Internship
            </Link>
            <a
              href="https://wa.me/919391259003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-6 text-sm font-medium text-primary hover:bg-emerald/20"
              style={{ borderColor: "oklch(0.78 0.18 165 / 0.35)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { k: "8+", v: "Years Research" },
              { k: "50+", v: "Student Projects" },
              { k: "12", v: "Research Domains" },
              { k: "100%", v: "Confidential" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-4 py-4">
                <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
