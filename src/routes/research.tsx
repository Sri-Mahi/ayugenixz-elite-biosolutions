import { createFileRoute } from "@tanstack/react-router";
import { DiscoveryReel } from "@/components/DiscoveryReel";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Showcase — Ayugenixz" },
      { name: "description", content: "Student research reel, NDA-gated previews, dynamic watermarking." },
      { property: "og:title", content: "Research Showcase — Ayugenixz" },
      { property: "og:description", content: "Discovery reel of student research portfolios." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><DiscoveryReel /></Reveal>
    </div>
  ),
});
