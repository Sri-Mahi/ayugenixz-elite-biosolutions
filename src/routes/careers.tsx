import { createFileRoute } from "@tanstack/react-router";
import { Careers } from "@/components/CareersInternships";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Ayugenixz" },
      { name: "description", content: "Open roles for researchers, builders, and educators." },
      { property: "og:title", content: "Careers — Ayugenixz" },
      { property: "og:description", content: "Build the future of life-science with us." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Careers /></Reveal>
    </div>
  ),
});
