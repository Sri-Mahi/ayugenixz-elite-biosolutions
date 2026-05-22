import { useState } from "react";
import { Lock, ShieldCheck, X } from "lucide-react";
import { SectionHeader } from "./Founder";

const UDYAM = "UDYAM-TS-09-0181603";

type Card = {
  id: string;
  name: string;
  domain: string;
  title: string;
  problem: string;
  methods: string;
  tools: string[];
  results: string;
  code: string;
};

const cards: Card[] = [
  {
    id: "r1",
    name: "Student A.",
    domain: "Computational Drug Design",
    title: "Virtual screening of phytochemicals against EGFR kinase",
    problem: "Identify candidate inhibitors for EGFR in non-small cell lung cancer using natural compound libraries.",
    methods: "Ligand preparation, AutoDock Vina docking, binding-affinity ranking, ADMET filtering.",
    tools: ["Python", "AutoDock Vina", "RDKit", "PyMOL"],
    results: "Top 5 hits with ΔG < -8.4 kcal/mol; lead scaffold flagged for QSAR follow-up.",
    code: "for lig in library:\n    score = dock(ligand=lig, receptor=egfr)\n    if score < -8.0:\n        leads.append(lig)",
  },
  {
    id: "r2",
    name: "Student B.",
    domain: "NGS Variant Analysis",
    title: "Somatic variant calling pipeline for breast tumor exomes",
    problem: "Detect actionable somatic SNVs across paired tumor-normal samples.",
    methods: "BWA-MEM alignment, Mutect2 calling, VEP annotation, oncoplot summary.",
    tools: ["R", "Bioconductor", "Mutect2", "VEP"],
    results: "Recurrent TP53 and PIK3CA mutations recovered across 80% of test samples.",
    code: "gatk Mutect2 -I tumor.bam -I normal.bam \\\n  --tumor TUMOR --normal NORMAL \\\n  -O somatic.vcf.gz",
  },
  {
    id: "r3",
    name: "Student C.",
    domain: "Protein Sequence Analysis",
    title: "Motif discovery across kinase superfamily orthologs",
    problem: "Map conserved motifs governing ATP-binding across 200+ kinase orthologs.",
    methods: "MSA via MUSCLE, MEME motif discovery, conservation scoring.",
    tools: ["Python", "Biopython", "MEME", "MUSCLE"],
    results: "Two novel sub-family-specific motifs identified with E-value < 1e-12.",
    code: "from Bio import AlignIO\naln = AlignIO.read('kinases.fasta','fasta')\nconservation = score(aln)",
  },
  {
    id: "r4",
    name: "Student D.",
    domain: "Genome Editing",
    title: "CRISPR-Cas9 gRNA design for BRCA1 functional knockout",
    problem: "Design high-specificity gRNAs minimizing off-target effects in a model cell line.",
    methods: "CRISPOR scoring, Doench efficiency model, off-target enumeration.",
    tools: ["CRISPOR", "Python", "Bowtie", "R"],
    results: "Three gRNAs selected with efficiency > 0.78 and off-target score > 92.",
    code: "guides = design_guides(target='BRCA1_exon11')\nguides = filter(off_target<3, guides)",
  },
  {
    id: "r5",
    name: "Student E.",
    domain: "Microbial Studies",
    title: "Antimicrobial activity of soil actinomycetes isolates",
    problem: "Screen isolates for antibacterial activity against MDR pathogens.",
    methods: "Cross-streak assay, well-diffusion, MIC determination, 16S rDNA ID.",
    tools: ["Wet-lab", "HPLC", "16S Sanger", "Microbiology"],
    results: "Isolate SA-07 showed broad-spectrum inhibition; pending compound elucidation.",
    code: "Isolate: SA-07\nZone of inhibition: 22 mm (S. aureus)\nMIC: 12 µg/mL",
  },
  {
    id: "r6",
    name: "Student F.",
    domain: "QSAR Modeling",
    title: "QSAR model for anti-inflammatory chalcone derivatives",
    problem: "Predict IC50 of 60 chalcones against COX-2 enzyme.",
    methods: "Descriptor calculation (PaDEL), feature selection, multivariate regression.",
    tools: ["R", "PaDEL", "Caret", "RDKit"],
    results: "Model R² = 0.84; identified electronic descriptors as key contributors.",
    code: "model <- train(pIC50 ~ ., data = desc, method='rf')\nvarImp(model)",
  },
];

export function DiscoveryReel() {
  const [active, setActive] = useState<Card | null>(null);
  const [ndaOpen, setNdaOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [agree, setAgree] = useState(false);
  const [warn, setWarn] = useState(false);

  const loop = [...cards, ...cards];

  return (
    <section id="discovery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Discovery Reel"
          title="Student Research, Showcased"
          subtitle="A curated reel of ongoing and demo research portfolios — protected by dynamic watermarking and NDA-based access."
        />
      </div>

      <div className="group/reel relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max gap-5 px-6 animate-marquee group-hover/reel:[animation-play-state:paused]"
          style={{ animationDuration: "70s" }}
        >
          {loop.map((c, i) => (
            <button
              key={`${c.id}-${i}`}
              onClick={() => { setActive(c); setAccepted(false); }}
              className="group relative w-[320px] shrink-0 overflow-hidden rounded-2xl glass border-gradient p-5 text-left transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full font-display text-sm font-bold text-background" style={{ background: "var(--gradient-primary)" }}>
                  {c.name.replace("Student ", "").trim()[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary">{c.domain}</div>
                </div>
              </div>
              <div className="mt-4 line-clamp-2 text-sm text-foreground/85">{c.title}</div>
              <pre className="mt-3 max-h-24 overflow-hidden rounded-lg bg-black/40 p-3 font-mono text-[10px] leading-snug text-emerald/90" style={{ color: "oklch(0.85 0.15 165)" }}>
                {c.code}
              </pre>
              {/* Watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rotate-[-18deg] text-center opacity-25">
                  <div className="font-display text-xs font-semibold text-primary">{c.name}</div>
                  <div className="font-mono text-[9px] text-cyan" style={{ color: "oklch(0.85 0.12 200)" }}>{UDYAM}</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-primary">
                <Lock className="h-3 w-3" /> NDA Required to View
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {active && (
        <Modal onClose={() => setActive(null)}>
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary">{active.domain}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold">{active.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">By {active.name}</div>
              </div>
              <button onClick={() => setActive(null)} className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            {!accepted ? (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Info label="Problem Statement" value={active.problem} />
                  <Info label="Methods" value={active.methods} />
                </div>
                <div className="mt-4">
                  <Info label="Tools" value={active.tools.join(" · ")} />
                </div>
                <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-100">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldCheck className="h-4 w-4" /> NDA Notice
                  </div>
                  <p className="mt-1 text-xs text-amber-100/80">
                    Full research access — including results, raw data, and methodology details —
                    requires acceptance of a Non-Disclosure Agreement. Demo previews are watermarked
                    with the student name and {UDYAM}.
                  </p>
                </div>
                <button
                  onClick={() => setNdaOpen(true)}
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium text-background sm:w-auto sm:px-7"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  <Lock className="h-4 w-4" /> Accept NDA to View Full Research
                </button>
              </>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Info label="Problem Statement" value={active.problem} />
                  <Info label="Methods" value={active.methods} />
                  <Info label="Tools" value={active.tools.join(" · ")} />
                  <Info label="Results Preview" value={active.results} />
                </div>
                <div className="mt-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary">Demo Code</div>
                  <pre className="mt-2 overflow-x-auto rounded-xl bg-black/50 p-4 font-mono text-xs" style={{ color: "oklch(0.85 0.15 165)" }}>
                    {active.code}
                  </pre>
                </div>
                <div className="mt-5 rounded-xl bg-emerald/10 px-4 py-3 text-xs text-primary" style={{ background: "oklch(0.78 0.18 165 / 0.1)" }}>
                  Access granted (demo only). Real research data is never exposed in this preview.
                </div>
              </>
            )}
          </div>
        </Modal>
      )}

      {/* NDA modal */}
      {ndaOpen && (
        <Modal onClose={() => setNdaOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <ShieldCheck className="h-5 w-5 text-background" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold">Non-Disclosure Agreement</div>
              <div className="text-xs text-muted-foreground">Ayugenixz Elite · {UDYAM}</div>
            </div>
          </div>
          <div className="mt-5 max-h-56 overflow-auto rounded-xl bg-black/30 p-4 text-xs leading-relaxed text-foreground/85">
            <p>By accepting this agreement, you acknowledge that the research content shown is the
            intellectual property of the student researcher and Ayugenixz Elite. You agree not to copy,
            reproduce, redistribute, share, screenshot, or commercially use any portion of this research
            without explicit written consent.</p>
            <p className="mt-3">Violation of this NDA may result in legal action under applicable
            intellectual property and confidentiality laws. This is a demonstration preview only —
            no proprietary or sensitive data is exposed.</p>
          </div>
          <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => { setAgree(e.target.checked); if (e.target.checked) setWarn(false); }}
              className="mt-1 h-4 w-4 accent-emerald-400"
            />
            <span className="text-foreground/85">I agree not to copy, misuse, or redistribute student research content.</span>
          </label>
          {warn && (
            <div className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive-foreground">
              Please tick the checkbox to confirm before continuing.
            </div>
          )}
          <button
            onClick={() => {
              if (!agree) { setWarn(true); return; }
              setAccepted(true); setNdaOpen(false); setAgree(false); setWarn(false);
            }}
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium text-background"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Accept & Continue
          </button>
        </Modal>
      )}
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-primary">{label}</div>
      <div className="mt-1.5 text-sm text-foreground/90">{value}</div>
    </div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6 animate-fade-up" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        className="glass-strong border-gradient relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-elegant)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
