import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Data Scientist & ML Engineer" },
      { name: "description", content: "Get in touch about ML consulting, collaborations, or new roles." },
      { property: "og:title", content: "Contact — Data Scientist & ML Engineer" },
      { property: "og:description", content: "Get in touch about ML consulting, collaborations, or new roles." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate a brief submission. In a real app, connect to a backend.
    setTimeout(() => setStatus("success"), 800);
  };

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Working on an ML project, hiring, or want a second pair of eyes on an evaluation? I'd love to hear from you.
          </p>

          {status === "success" ? (
            <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Message sent
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}

          <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                Email
              </h2>
              <a
                href="mailto:niharikamylabathula@gmail.com"
                className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                niharikamylabathula@gmail.com
              </a>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                Social
              </h2>
              <div className="mt-1 flex flex-wrap gap-4">
                <a
                  href="https://github.com/NiharikaMylabathula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/niharika-mylabathula-2aa249205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href="https://public.tableau.com/app/profile/niharika.mylabathula/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Tableau Public
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
