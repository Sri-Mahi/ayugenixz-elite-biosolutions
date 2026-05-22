import { Dna, ShieldCheck, BadgeCheck, FlaskConical, GraduationCap, Microscope } from "lucide-react";

const badges = [
  { icon: <BadgeCheck className="h-3.5 w-3.5" />, label: "Registered Establishment – Telangana" },
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "UDYAM-TS-09-0181603" },
  { icon: <FlaskConical className="h-3.5 w-3.5" />, label: "Bioinformatics" },
  { icon: <Microscope className="h-3.5 w-3.5" />, label: "Genomics" },
  { icon: <GraduationCap className="h-3.5 w-3.5" />, label: "Student Innovation" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
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
          </div>

          <FooterCol title="Explore" items={[
            { l: "Home", h: "#home" },
            { l: "About", h: "#about" },
            { l: "Services", h: "#services" },
            { l: "Training", h: "#training" },
            { l: "Discovery Reel", h: "#discovery" },
          ]} />
          <FooterCol title="Engage" items={[
            { l: "Internships", h: "#internships" },
            { l: "Careers", h: "#careers" },
            { l: "Sign Up", h: "#signup" },
            { l: "Contact", h: "#contact" },
            { l: "Innovator's Shield", h: "#shield" },
          ]} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-foreground/85"
            >
              <span className="text-primary">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Ayugenixz Bio Solutions. All rights reserved.</div>
          <div className="font-mono text-[11px] text-primary/80">Built with science · Crafted with care</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-primary">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.h}><a href={i.h} className="text-foreground/80 transition hover:text-primary">{i.l}</a></li>
        ))}
      </ul>
    </div>
  );
}
