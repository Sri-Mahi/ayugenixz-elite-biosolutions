import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/Services";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ayugenixz" },
      { name: "description", content: "Drug design, protein analysis, genome editing, NGS, wet lab and special platforms." },
      { property: "og:title", content: "Services — Ayugenixz" },
      { property: "og:description", content: "A full-stack life science platform." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Services /></Reveal>
    </div>
  ),
});
