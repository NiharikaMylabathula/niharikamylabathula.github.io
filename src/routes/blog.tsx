import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Niharika Mylabathula" },
      { name: "description", content: "Writing ideas on causal machine learning, promotion optimization, and decision-aware churn modelling." },
      { property: "og:title", content: "Writing — Niharika Mylabathula" },
      { property: "og:description", content: "Writing ideas on causal machine learning, promotion optimization, and decision-aware churn modelling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Writing</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Ideas in progress</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical notes on moving from accurate predictions to better decisions with causal machine learning.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-secondary/50">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={post.image} alt="" width={1008} height={656} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-primary">Article idea</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  {
    id: 1,
    title: "Your Best Customers Might Be the Worst People to Target: Using Causal ML for Promotion Optimization",
    excerpt: "Why high purchase propensity is not the same as incremental lift—and how uplift modelling can separate persuadable customers from those who would buy anyway.",
    tags: ["Causal ML", "Uplift Modelling", "Marketing"],
    image: "/images/blog-causal-promotion.jpg",
  },
  {
    id: 2,
    title: "My Churn Model Had 90% AUC—and Targeted the Wrong Customers",
    excerpt: "A strong ranking metric can still produce a poor retention strategy when predictions ignore treatment response, intervention cost, and customers who cannot be persuaded.",
    tags: ["Churn", "Model Evaluation", "Decision Science"],
    image: "/images/blog-churn-targeting.jpg",
  },
];