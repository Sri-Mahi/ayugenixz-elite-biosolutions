import { FileLock, FileSignature, ScrollText, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Founder";

const shields = [
  { icon: <FileLock />, title: "Encryption Vault", desc: "Private backend-ready storage for workflows, datasets, and technical artifacts — locked end-to-end." },
  { icon: <ShieldCheck />, title: "Dynamic Watermarking", desc: "Every preview is stamped with the student name and UDYAM ID — visible, traceable, tamper-resistant." },
  { icon: <FileSignature />, title: "NDA Gatekeeping", desc: "Full research access requires acceptance of a binding NDA before any sensitive content unlocks." },
  { icon: <ScrollText />, title: "Patent Documentation", desc: "Structured templates that help students prepare findings for formal patent filings — privately." },
];

export function Shield() {
  return (
    <section id="shield" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Innovator's Shield" title="Built to protect student innovation" subtitle="Four layers of confidentiality guarding the research of every Ayugenixz student." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shields.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl glass-strong border-gradient p-6 transition hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-40" style={{ background: "var(--gradient-primary)" }} />
              <div className="grid h-12 w-12 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
