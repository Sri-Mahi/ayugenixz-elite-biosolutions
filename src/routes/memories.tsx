import { createFileRoute } from "@tanstack/react-router";
import { Memories } from "@/components/Memories";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories Gallery — Ayugenixz" },
      { name: "description", content: "Conferences, lab moments, and milestones." },
      { property: "og:title", content: "Memories — Ayugenixz" },
      { property: "og:description", content: "Visual journey through Ayugenixz milestones." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Memories /></Reveal>
    </div>
  ),
});