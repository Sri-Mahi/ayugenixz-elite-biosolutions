import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayugenixz" },
      { name: "description", content: "Reach Ayugenixz via WhatsApp, email, website, and YouTube." },
      { property: "og:title", content: "Contact — Ayugenixz" },
      { property: "og:description", content: "Get in touch with the Ayugenixz team." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><Contact /></Reveal>
    </div>
  ),
});
