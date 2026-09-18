import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Data Scientist & ML Engineer" },
      { name: "description", content: "Economics and CS background; machine learning, causal inference, and quantitative modelling on messy, real-world data." },
      { property: "og:title", content: "About — Data Scientist & ML Engineer" },
      { property: "og:description", content: "Economics and CS background; machine learning, causal inference, and quantitative modelling on messy, real-world data." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            I like turning messy problems into something we can actually solve.
          </h1>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground">
            <p>
              I'm someone who enjoys working with data, building models, and figuring out why things behave the way they do. My background is in economics and computer science, which means I tend to approach problems from both a quantitative and computational perspective.
            </p>
            <p>
              I've worked on problems across industry and research — from understanding customer behavior and measuring the impact of interventions to building predictive models and working with financial and economic data. Depending on the problem, that might mean statistics, machine learning, causal inference, or simply finding a clever way to work with the data.
            </p>
            <p>
              What I enjoy most is the process: starting with a question that isn't particularly well-defined, breaking it down, testing ideas, and eventually getting to an answer that's both rigorous and useful.
            </p>
            <p>
              Lately, I've been spending a lot of time exploring machine learning, AI, quantitative methods, and how they can be applied to real-world problems.
            </p>
            <p>
              Outside of work, I'm usually learning something new, reading about an idea I came across, or building something just because I wanted to see if it would work.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download resume (PDF)
            </a>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Approach</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary">—</span>I like starting with why before jumping into the data.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Keep it simple when simple works.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Question assumptions and let the data surprise you.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Build things that are useful, not just technically interesting.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">What I Work On</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary">—</span>Predictive modeling, forecasting, and machine learning.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Causal inference, experimentation, and impact measurement.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Customer behavior, growth, and decision analytics.</li>
                <li className="flex gap-3"><span className="text-primary">—</span>Financial, economic, and quantitative modeling.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
