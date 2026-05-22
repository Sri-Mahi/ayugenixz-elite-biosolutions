import { createFileRoute } from "@tanstack/react-router";
import { Founder } from "@/components/Founder";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. J. Saraswathi · Ayugenixz" },
      { name: "description", content: "Founder profile, expertise, and credentials of Dr. J. Saraswathi." },
      { property: "og:title", content: "About — Ayugenixz" },
      { property: "og:description", content: "Founder Dr. J. Saraswathi — Ph.D. Genetics, 8+ years research." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Founder /></Reveal>
    </div>
  ),
});
