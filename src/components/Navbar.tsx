import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Dna } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Drug Design Services", href: "#service-drug" },
  { label: "Protein Sequence Analysis", href: "#service-protein" },
  { label: "Genome Editing", href: "#service-genome" },
  { label: "NGS Variant Analysis", href: "#service-ngs" },
  { label: "Cellular, Microbial & Molecular", href: "#service-cellular" },
  { label: "Special Research Platforms", href: "#service-special" },
];

const trainings = [
  { label: "Course 1: Specialized Biotech/Bioinformatics", href: "#course-1" },
  { label: "Course 2: Advanced Research Module", href: "#course-2" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "training">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
          scrolled && "glass-strong rounded-full px-4 sm:px-6"
        )}
        style={scrolled ? { boxShadow: "var(--shadow-elegant)" } : undefined}
      >
        <a href="#home" className="flex items-center gap-2 py-2">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <Dna className="h-5 w-5 text-background" />
            <div className="absolute inset-0 rounded-lg blur-md opacity-60" style={{ background: "var(--gradient-primary)" }} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight">Ayugenixz</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Elite All-in-One</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#internships">Internships</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#about">About</NavLink>
          <Dropdown
            label="Services"
            items={services}
            open={openMenu === "services"}
            onOpen={() => setOpenMenu("services")}
            onClose={() => setOpenMenu((m) => (m === "services" ? null : m))}
          />
          <Dropdown
            label="Training"
            items={trainings}
            open={openMenu === "training"}
            onOpen={() => setOpenMenu("training")}
            onClose={() => setOpenMenu((m) => (m === "training" ? null : m))}
          />
          <NavLink href="#signup">Sign Up</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#signup"
            className="inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium text-background transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-4 mt-3 lg:hidden">
          <div className="glass-strong rounded-2xl p-4">
            <MobileLink href="#home" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="#internships" onClick={() => setMobileOpen(false)}>Internships</MobileLink>
            <MobileLink href="#careers" onClick={() => setMobileOpen(false)}>Careers</MobileLink>
            <MobileLink href="#about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            <MobileGroup label="Services" items={services} onPick={() => setMobileOpen(false)} />
            <MobileGroup label="Training" items={trainings} onPick={() => setMobileOpen(false)} />
            <MobileLink href="#signup" onClick={() => setMobileOpen(false)}>Sign Up</MobileLink>
            <MobileLink href="#contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function Dropdown({
  label,
  items,
  open,
  onOpen,
  onClose,
}: {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        onClick={() => (open ? onClose() : onOpen())}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
      >
        {label} <ChevronDown className={cn("h-3.5 w-3.5 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
          <div className="glass-strong w-72 rounded-2xl p-2 border-gradient" style={{ boxShadow: "var(--shadow-elegant)" }}>
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-2 text-sm text-foreground/85 transition hover:bg-white/5 hover:text-primary"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a href={href} onClick={onClick} className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-white/5">
      {children}
    </a>
  );
}

function MobileGroup({
  label,
  items,
  onPick,
}: {
  label: string;
  items: { label: string; href: string }[];
  onPick: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-white/5"
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div className="ml-3 border-l border-white/10 pl-3">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={onPick}
              className="block rounded-lg px-3 py-2 text-xs text-foreground/75 hover:text-primary"
            >
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
