import { SectionHeader } from "./Founder";
import {
  ArrowUpRight,
  Atom,
  Beaker,
  Dna,
  FlaskConical,
  Microscope,
  Network,
  Pill,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    id: "service-drug",
    icon: <Pill className="h-6 w-6" />,
    title: "Drug Design Services",
    content: [
      "Drug Design Services",
      "At Ayugenixz BioSolutions, our Drug Design Services leverage cutting-edge computational techniques to accelerate drug discovery and development. We offer a comprehensive suite of services designed to identify, design, and optimize therapeutic compounds with high precision and efficiency.",
      "Our offerings include:",
      "\t Target Prediction Service",
      "Identification of potential biological targets through in-silico analysis to guide the early stages of drug discovery.",
      "\t Structure-based Drug Design (SBDD)",
      " Designing drug candidates based on the 3D structure of biological targets to ensure optimal binding and therapeutic effect.",
      "\t Fragment-based Drug Design (FBDD)",
      "Building drug molecules from small, low molecular weight fragments that bind to target sites, improving specificity and lead optimization.",
      "\t De Novo Design",
      "Generation of entirely new molecular structures using computational algorithms to fit specific binding sites and functional requirements.",
      "\t Multiple Targeting Drug Design Services",
      "Designing compounds capable of interacting with multiple disease-related targets, ideal for treating complex or multifactorial conditions.",
      "\t Pharmacophore Model Construction Service",
      "Developing 3D Pharmacophore models to identify and screen compounds with desired biological activity.",
      "\t Computer-Aided Drug Design (CADD) Service",
      "Comprehensive in silicon modeling and simulation tools to support every stage of the drug design pipeline from target validation to lead optimization.",
      "Through these integrated services, Ayugenixz Bio Solutions aims to streamline the drug discovery process, reduce costs, and support the development of innovative and personalized therapeutic solutions.",
    ].join("\n"),
    span: "lg:col-span-3",
    gradient: "linear-gradient(135deg, oklch(0.70 0.17 165), oklch(0.72 0.13 205))",
  },
  {
    id: "service-protein",
    icon: <Atom className="h-6 w-6" />,
    title: "Protein Sequence Analysis",
    content: [
      "Protein Sequence Analysis Services",
      "Our Protein Sequence Analysis Services provide in-depth bioinformatics solutions for analyzing and interpreting protein sequences. By applying advanced computational tools, we help researchers uncover the structure, function, and evolutionary relationships of proteins, key elements in understanding biological processes and discovering novel therapeutic targets.",
      "Our service supports research across genomics, drug development, and molecular biology by delivering high-accuracy predictions and comprehensive insights into proteins.",
      "Our Protein Sequence Analysis covers the following areas:",
      "\t Amino Acid Composition Analysis Service",
      "Determines the frequency and distribution of amino acids, offering insights into protein characteristics and classification.",
      "\t Protein Structural Feature Analysis",
      "Predicts secondary structures, domains, and other structural features essential for understanding protein functionality.",
      "\t Conserved Sequences Analysis Service",
      "Identifies evolutionarily conserved regions that are critical for protein stability and function.",
      "\t Repeated Sequence Predictions Service",
      "Detects repeated motifs or segments that may influence protein folding or function.",
      "\t Ligand Binding Site Prediction",
      "Predicts potential binding regions for ligands or small molecules, aiding drug discovery efforts.",
      "\t Motif Discovery Services in Protein Sequences",
      " Identifies known and novel motifs that may have functional or regulatory significance.",
      "\t Signal Peptide Prediction Services",
      "Detects N-terminal signal peptides involved in protein secretion and localization.",
      "\t Transmembrane Prediction Services",
      "Predicts transmembrane helices to understand membrane protein structure and topology.",
      "\t Protein Evolution Analysis",
      "Traces evolutionary relationships and divergence patterns to understand the origins and adaptations of proteins.",
      "With these services, Ayugenixz Bio Solutions empowers scientists and researchers to unravel complex protein data, paving the way for breakthroughs in biotechnology, precision medicine, and molecular research.",
    ].join("\n"),
    span: "lg:col-span-3",
    gradient: "linear-gradient(135deg, oklch(0.72 0.13 210), oklch(0.76 0.10 285))",
  },
  {
    id: "service-genome",
    icon: <Dna className="h-6 w-6" />,
    title: "Genome Editing Bioinformatics Tools",
    content: [
      "Genome Editing Bioinformatics Tools",
      "We provide specialized Genome Editing Bioinformatics Tools that support the design, analysis, and optimization of genome editing experiments. These tools are essential for enhancing the precision, efficiency, and safety of genetic modifications across various organisms.",
      "Our bioinformatics platforms are tailored for use with advanced genome editing technologies such as CRISPR/Cas, TALENs, and ZFNs, are invaluable in fields like gene therapy, functional genomics, agriculture, and synthetic biology.",
      "Our Genome Editing Bioinformatics Capabilities Include:",
      "\t Guide RNA (gRNA) Design and Optimization",
      "Accurate design of guide RNAs with high on-target activity and minimal off-target effects for CRISPR applications.",
      "\t Off-Target Prediction and Analysis",
      "Genome-wide prediction of potential off-target sites to minimize unintended edits and improve specificity.",
      "\t CRISPR/Cas Variant Selection Tools",
      "Tools to choose the optimal Cas variant (e.g., Cas9, Cas12a) based on target sequence, delivery method, and editing goal.",
      "\t Gene Knockout/Knock-in Strategy Design",
      "Computational planning for precise gene disruption or insertion using homology-directed repair (HDR) or non-homologous end joining (NHEJ).",
      "\t Primer Design for Validation Experiments",
      "Automated primer generation for PCR validation of genome edits, including Sanger sequencing or NGS workflows.",
      "\t Genome-Wide Target Screening",
      "Identification of potential editing targets across the genome based on user-defined criteria.",
      "\t Functional Impact Prediction",
      "Analysis of how genome edits may affect gene function, protein structure, or regulatory regions.",
      "\t Visualization Tools",
      "Interactive genome browsers and editing maps to visualize gRNA positions, off-targets, and editing outcomes.",
      "With our integrated bioinformatics support, Ayugenixz Bio Solutions helps researchers streamline genome editing projects, reduce trial-and-error, and accelerate the development of genetically engineered models and therapeutic interventions",
    ].join("\n"),
    span: "lg:col-span-2",
    gradient: "linear-gradient(135deg, oklch(0.70 0.16 145), oklch(0.78 0.12 210))",
  },
  {
    id: "service-ngs",
    icon: <Network className="h-6 w-6" />,
    title: "NGS Variant Calling",
    content: [
      "NGS Variant Calling Services",
      "At Ayugenixz, our NGS Variant Calling Services provide accurate and high-throughput identification of genetic variations from next-generation sequencing (NGS) data. We utilize advanced bioinformatics pipelines to detect SNPs (Single Nucleotide Polymorphisms), insertions/deletions (indels), and structural variants, enabling deep insights into genetic makeup, disease mechanisms, and therapeutic targets.",
      "Our services are essential for clinical research, cancer genomics, rare disease diagnostics, pharmacogenomics, and population genetics.",
      "Key Features of Our NGS Variant Calling Services:",
      "\t Raw Data Preprocessing",
      "High-quality filtering, adapter trimming, and quality control checks using tools like Fast QC and Trimmomatic.",
      "\t Sequence Alignment",
      "Accurate mapping of reads to reference genomes (e.g., GRCh38, mm10) using trusted aligners like BWA-MEM, Bowtie2, or STAR.",
      "\t Variant Calling",
      "Detection of variants using industry-standard tools such as GATK, Free Bayes, or Sam tools, with support for both germ line and somatic mutation calling.",
      "\t Variant Annotation",
      "Functional interpretation of variants using tools like ANNOVAR, SnpEff, or VEP, providing information on gene impact, clinical relevance, and population frequency.",
      "\t Filtering and Prioritization",
      "Application of customizable filters to prioritize high-confidence variants based on read depth, quality scores, allele frequency, and known pathogenicity.",
      "\t Visualization and Reporting",
      "Generation of user-friendly reports with variant summaries, genome browser visualizations (e.g., IGV), and interactive tables.",
      "\t Custom Panel or Whole Genome/ Support",
      "Compatible with targeted panels, or whole genome sequencing (WGS) data.",
      "\t Optional Downstream Analysis",
      "Including pathway enrichment, variant effect prediction, and disease association studies. With our robust bioinformatics expertise, Ayugenixz ensures high sensitivity and specificity in variant detection, supporting researchers and clinicians in understanding genetic variations and advancing precision medicine.",
    ].join("\n"),
    span: "lg:col-span-2",
    gradient: "linear-gradient(135deg, oklch(0.68 0.14 230), oklch(0.70 0.13 280))",
  },
  {
    id: "service-cellular",
    icon: <Microscope className="h-6 w-6" />,
    title: "Cellular, Microbial & Molecular Services",
    content: [
      "Cellular, Microbial &Molecular Services",
      "\t Cell and Molecular Biology Services",
      " Customized in vitro cell culture, gene expression analysis, and molecular assays to support drug testing, cytotoxicity studies, and mechanistic research.",
      "\tMicrobiological Services",
      " Microbial identification, antimicrobial susceptibility testing, and environmental monitoring for pharmaceutical, healthcare, and industrial needs.",
      "\t Phytochemistry Services",
      " Extraction, isolation, and structural analysis of plant-based bioactive compounds for pharmaceutical, nutraceutical, and herbal product development.",
      "\t LC-MS (Liquid Chromatography–Mass Spectrometry) Analysis",
      " Analyze complex biological mixtures to identify and quantify compounds with high sensitivity and precision, crucial for drug discovery, metabolomics, and biomarker validation.",
      "\t GC-MS (Gas Chromatography–Mass Spectrometry) Analysis",
      " Separate and analyze volatile and semi-volatile compounds for environmental, food, forensic, and pharmaceutical applications.",
      "\tHPLC (High-Performance Liquid Chromatography) Analysis",
      " Accurate separation, identification, and quantification of complex mixture components, supporting purity analysis, formulation, and pharmacokinetics.",
      "\t FTIR (Fourier-Transform Infrared Spectroscopy)",
      " Identify functional groups and chemical bonds in compounds, aiding in molecular fingerprinting, material testing, and compound validation.",
      "\tNMR (Nuclear Magnetic Resonance)",
      " Determine detailed molecular structure and dynamics, providing insights into chemical environments, conformations, and interactions.",
      "\tColumn Chromatography",
      " Efficient purification and isolation of specific compounds for further chemical, biological, or pharmacological studies.",
      "\t Flow Cytometer Services",
      " High-throughput analysis and cell sorting based on surface markers, size, and granularity—ideal for immunology, cancer, and stem cell research.",
    ].join("\n"),
    span: "lg:col-span-2",
    gradient: "linear-gradient(135deg, oklch(0.68 0.14 170), oklch(0.77 0.12 110))",
  },
  {
    id: "service-special",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Specialized Research Platforms",
    content: [
      "Specialized Research Platforms",
      "\t Disease-Specific Research Services",
      " Tailored experimental designs targeting specific diseases, integrating molecular insights, pathway analysis, and therapeutic screening.",
      "\t Nanotechnology Services",
      " Design, synthesis, and characterization of nanoparticles for drug delivery, biosensing, diagnostics, and nano-enabled therapeutics.",
    ].join("\n"),
    span: "lg:col-span-6",
    gradient:
      "linear-gradient(135deg, oklch(0.76 0.10 285), oklch(0.76 0.12 205), oklch(0.72 0.16 165))",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="Services"
          subtitle="Select a service to read the complete provided content."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {services.map((s, i) => (
            <Dialog key={s.id}>
              <article
                id={s.id}
                className={`group relative isolate flex min-h-[390px] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/[0.76] p-6 shadow-[0_18px_70px_-38px_oklch(0.30_0.10_240_/_0.55)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.88] hover:shadow-[0_28px_90px_-44px_oklch(0.30_0.10_240_/_0.72)] scroll-mt-32 sm:p-7 ${s.span}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: s.gradient }} />
                <div className="absolute inset-0 -z-10 opacity-[0.045] [background-image:linear-gradient(90deg,oklch(0.35_0.06_235)_1px,transparent_1px),linear-gradient(180deg,oklch(0.35_0.06_235)_1px,transparent_1px)] [background-size:34px_34px]" />

                <div className="relative flex h-full w-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex min-w-0 items-start gap-4">
                      <div
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-primary-foreground shadow-[0_16px_42px_-22px_oklch(0.25_0.10_220_/_0.8)] transition duration-300 group-hover:scale-105"
                        style={{ background: s.gradient }}
                      >
                        {s.icon}
                      </div>
                      <h3 className="min-w-0 font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                        {s.title}
                      </h3>
                    </div>
                    <span className="hidden font-mono text-xs font-semibold tracking-[0.2em] text-muted-foreground/55 sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-6 min-h-0 flex-1 overflow-hidden">
                    <div className="max-h-52 whitespace-pre-wrap break-words font-body text-sm leading-7 text-muted-foreground sm:text-[15px]">
                      {s.content}
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 to-transparent" />
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      Read full content
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                </div>
              </article>

              <DialogContent
                aria-describedby={undefined}
                className="max-h-[88vh] w-[calc(100vw-2rem)] max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 p-0 shadow-[0_28px_110px_-40px_oklch(0.25_0.12_230_/_0.75)] backdrop-blur-2xl sm:rounded-[1.75rem]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: s.gradient }}
                />
                <div className="grid max-h-[88vh] grid-rows-[auto_1fr]">
                  <DialogHeader className="border-b border-border/70 px-6 py-5 pr-14 text-left sm:px-8">
                    <div className="flex items-center gap-4">
                      <div
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                        style={{ background: s.gradient }}
                      >
                        {s.icon}
                      </div>
                      <DialogTitle className="font-display text-2xl leading-tight sm:text-3xl">
                        {s.title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>

                  <div className="min-h-0 overflow-y-auto px-6 py-6 sm:px-8">
                    <div className="whitespace-pre-wrap break-words rounded-2xl border border-border/70 bg-white/70 p-5 font-body text-sm leading-7 text-foreground/85 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.8)] sm:p-6 sm:text-[15px]">
                      {s.content}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Training() {
  return (
    <section id="training" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Training Programs" title="Two flagship learning tracks" subtitle="Foundational to advanced — structured curricula designed by working scientists." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            { id: "course-1", title: "Specialized Biotech / Bioinformatics Module", tag: "Course 1", desc: "Foundational hands-on training in sequence analysis, biological databases, molecular biology techniques, and core bioinformatics tools.", topics: ["Sequence Analysis", "Biological Databases", "Python for Biology", "Mol-Bio Techniques"] },
            { id: "course-2", title: "Advanced Research Module", tag: "Course 2", desc: "Project-based advanced training in NGS, drug design, structural bioinformatics, and publication-grade research execution.", topics: ["NGS Pipelines", "Docking & QSAR", "R for Genomics", "Manuscript Writing"] },
          ].map((c) => (
            <article key={c.id} id={c.id} className="glass-strong border-gradient relative overflow-hidden rounded-3xl p-7 scroll-mt-32">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">{c.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.topics.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/85">
                    <Beaker className="h-3 w-3 text-primary" /> {t}
                  </span>
                ))}
              </div>
              <Link to="/signup" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Enroll Now <FlaskConical className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
