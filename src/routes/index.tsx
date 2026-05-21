import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Founder } from "@/components/Founder";
import { Services } from "@/components/Services";
import { DiscoveryReel } from "@/components/DiscoveryReel";
import { Shield } from "@/components/Shield";
import { Memories } from "@/components/Memories";
import { Careers, Internships } from "@/components/CareersInternships";
import { SignUp } from "@/components/SignUp";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayugenixz Elite All-in-One — Smart Solutions for Complex Biology" },
      { name: "description", content: "Premium biotech & bioinformatics services, internships, and training. Drug design, NGS, CRISPR, protein analysis. Registered: UDYAM-TS-09-0181603." },
      { property: "og:title", content: "Ayugenixz Elite All-in-One" },
      { property: "og:description", content: "Smart Solutions for Complex Biology — genomics, bioinformatics, training & research internships." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Services />
        <DiscoveryReel />
        <Shield />
        <Memories />
        <Internships />
        <Careers />
        <SignUp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
