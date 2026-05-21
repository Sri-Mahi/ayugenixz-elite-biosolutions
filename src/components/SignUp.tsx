import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SectionHeader } from "./Founder";

export function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="signup" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader eyebrow="Sign Up" title="Start your Ayugenixz journey" subtitle="Tell us your area of interest — we'll get back within 24 hours." />

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mt-12 glass-strong border-gradient rounded-3xl p-6 sm:p-10"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <CheckCircle2 className="h-7 w-7 text-background" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Thank you!</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Your submission has been received. Our team will reach out within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-white/5 px-5 py-2 text-sm hover:bg-white/10">
                Submit another
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" />
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Area of Interest</label>
                <select required className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm focus:border-primary focus:outline-none">
                  <option className="bg-background">Select...</option>
                  <option className="bg-background">Internship</option>
                  <option className="bg-background">Training</option>
                  <option className="bg-background">Service</option>
                  <option className="bg-background">Research Project</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm focus:border-primary focus:outline-none" placeholder="Tell us about your interest..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-background" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  <Send className="h-4 w-4" /> Submit Application
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
