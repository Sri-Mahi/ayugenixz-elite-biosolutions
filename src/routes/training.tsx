import { createFileRoute } from "@tanstack/react-router";
import { Training } from "@/components/Services";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — Ayugenixz" },
      { name: "description", content: "Two flagship learning tracks in biotech and advanced research." },
      { property: "og:title", content: "Training — Ayugenixz" },
      { property: "og:description", content: "Specialized biotech and advanced research modules." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Training /></Reveal>
    </div>
  ),
});
