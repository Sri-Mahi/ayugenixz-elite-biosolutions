import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "@/components/Shield";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/shield")({
  head: () => ({
    meta: [
      { title: "Innovator's Shield — Ayugenixz" },
      { name: "description", content: "Encryption vaults, watermarking, NDA, and patent documentation." },
      { property: "og:title", content: "Innovator's Shield — Ayugenixz" },
      { property: "og:description", content: "Protecting innovators end-to-end." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Shield /></Reveal>
    </div>
  ),
});
