import { Globe, Mail, MessageCircle, Star, Youtube } from "lucide-react";
import { SectionHeader } from "./Founder";

const links = [
  { icon: <MessageCircle />, label: "Chat on WhatsApp", value: "+91 93912 59003", href: "https://wa.me/919391259003" },
  { icon: <Mail />, label: "Send Email", value: "ayugenixzbiosolutions@gmail.com", href: "mailto:ayugenixzbiosolutions@gmail.com" },
  { icon: <Globe />, label: "Visit Website", value: "www.ayugenixzbiosolutions.com", href: "https://www.ayugenixzbiosolutions.com" },
  { icon: <Youtube />, label: "Open YouTube", value: "@Ayugenixz", href: "https://youtube.com/@Ayugenixz" },
  { icon: <Star />, label: "Reviews on Trustpilot", value: "Verified reviews", href: "https://www.trustpilot.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something scientific" subtitle="Reach the Ayugenixz team across your preferred channel." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-strong border-gradient flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                {l.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary">{l.label}</div>
                <div className="mt-0.5 truncate text-sm font-medium text-foreground">{l.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
