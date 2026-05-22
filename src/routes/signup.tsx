import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "@/components/SignUp";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Ayugenixz" },
      { name: "description", content: "Start your Ayugenixz journey — internships, training, services." },
      { property: "og:title", content: "Sign Up — Ayugenixz" },
      { property: "og:description", content: "Apply for internships, training, or services." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Reveal><SignUp /></Reveal>
    </div>
  ),
});
