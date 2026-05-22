import { Dna, ShieldCheck, BadgeCheck, FlaskConical, GraduationCap, Microscope, Mail, MessageCircle, Globe, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandMarquee } from "./Marquee";

const badges = [
  { icon: <BadgeCheck className="h-3.5 w-3.5" />, label: "Registered Establishment – Telangana" },
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "UDYAM-TS-09-0181603" },
  { icon: <FlaskConical className="h-3.5 w-3.5" />, label: "Bioinformatics" },
  { icon: <Microscope className="h-3.5 w-3.5" />, label: "Genomics" },
  { icon: <GraduationCap className="h-3.5 w-3.5" />, label: "Student Innovation" },
];

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/5">
      <BrandMarquee direction="right" className="mb-12 border-y-white/5" />
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <Dna className="h-5 w-5 text-background" />
              </div>
              <div>
                <div className="font-display text-base font-semibold">Ayugenixz Elite All-in-One</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Smart Solutions for Complex Biology</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Registered Establishment — Telangana.<br />
              <span className="font-mono text-xs text-primary">UDYAM-TS-09-0181603</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="https://wa.me/919391259003" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full glass px-3 text-xs hover:bg-white/10"><MessageCircle className="h-3.5 w-3.5 text-primary" /> WhatsApp</a>
              <a href="mailto:ayugenixzbiosolutions@gmail.com" className="inline-flex h-9 items-center gap-2 rounded-full glass px-3 text-xs hover:bg-white/10"><Mail className="h-3.5 w-3.5 text-primary" /> Email</a>
              <a href="https://www.ayugenixzbiosolutions.com" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full glass px-3 text-xs hover:bg-white/10"><Globe className="h-3.5 w-3.5 text-primary" /> Website</a>
              <a href="https://www.youtube.com/@Ayugenixz" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-full glass px-3 text-xs hover:bg-white/10"><Youtube className="h-3.5 w-3.5 text-primary" /> YouTube</a>
            </div>
          </div>

          <FooterCol title="Explore" items={[
            { l: "Home", to: "/" },
            { l: "About", to: "/about" },
            { l: "Services", to: "/services" },
            { l: "Training", to: "/training" },
            { l: "Research", to: "/research" },
          ]} />
          <FooterCol title="Engage" items={[
            { l: "Internships", to: "/internships" },
            { l: "Careers", to: "/careers" },
            { l: "Sign Up", to: "/signup" },
            { l: "Contact", to: "/contact" },
            { l: "Innovator's Shield", to: "/shield" },
          ]} />
          <FooterCol title="More" items={[
            { l: "Memories", to: "/memories" },
          ]} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] text-foreground/80">
              <span className="text-primary">{b.icon}</span> {b.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Ayugenixz Biosolutions. All rights reserved.</div>
          <div className="font-mono">Crafted with science · Built for innovators</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; to: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-primary">{title}</div>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-sm text-foreground/80 hover:text-primary">{i.l}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
