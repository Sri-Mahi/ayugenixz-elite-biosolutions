import { createFileRoute } from "@tanstack/react-router";
import { Internships } from "@/components/CareersInternships";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — Ayugenixz" },
      { name: "description", content: "Structured research internship tracks across life-science domains." },
      { property: "og:title", content: "Internships — Ayugenixz" },
      { property: "og:description", content: "Step into real research with mentored programs." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Internships /></Reveal>
    </div>
  ),
});
