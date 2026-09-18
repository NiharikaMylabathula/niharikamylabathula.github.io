import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Data Science & ML Engineering" },
      { name: "description", content: "A mix of quantitative methods, machine learning, and tools I use to turn data into decisions." },
      { property: "og:title", content: "Skills — Data Science & ML Engineering" },
      { property: "og:description", content: "A mix of quantitative methods, machine learning, and tools I use to turn data into decisions." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Skills
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A mix of quantitative methods, machine learning, and tools I use to turn data into decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
            >
              <h2 className="font-display text-lg font-semibold text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    title: "Programming & Data",
    items: ["Python", "SQL", "R", "Stata"],
  },
  {
    title: "Machine Learning",
    items: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "Deep Learning", "NLP & LLMs"],
  },
  {
    title: "Causal Inference & Experimentation",
    items: ["A/B Testing", "Propensity Score", "DiD", "Causal Forests", "Uplift Modeling", "HTE"],
  },
  {
    title: "Statistics & Quant Methods",
    items: ["Regression", "Probability", "Time Series", "Panel Data", "Risk Modeling", "Optimization"],
  },
  {
    title: "Analytics & Visualization",
    items: ["Pandas & NumPy", "Tableau", "Looker", "Matplotlib", "Excel", "Streamlit"],
  },
  {
    title: "Data Engineering",
    items: ["Snowflake", "Git & GitHub", "ETL Pipelines"],
  },
];
