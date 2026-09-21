import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Writing — Niharika Mylabathula" },
      {
        name: "description",
        content:
          "Explorations in data science, machine learning, causal inference, economics, markets, and decision-making.",
      },
      {
        property: "og:title",
        content: "Writing — Niharika Mylabathula",
      },
      {
        property: "og:description",
        content:
          "Explorations in data science, machine learning, causal inference, economics, markets, and decision-making.",
      },
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
        {/* Page introduction */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Explorations
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Questions I can't stop thinking about.
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Exploring ideas at the intersection of data, economics, machine
            learning, and decision-making—sometimes through models, sometimes
            through markets, and usually by asking one more question.
          </p>
        </div>

        {/* Articles */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-secondary/50"
            >
              {/* Article image */}
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  width={1008}
                  height={656}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </div>

              {/* Article content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  Article
                </p>

                <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {post.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Kahana link */}
                <p className="mt-5 text-sm font-medium text-primary transition-opacity group-hover:opacity-80">
                  Read on Kahana →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  {
    id: 1,
    title:
      "Your Best Customers Might Be the Worst People to Target: Using Causal ML for Promotion Optimization",
    excerpt:
      "Why high purchase propensity is not the same as incremental lift—and how uplift modelling can separate persuadable customers from those who would buy anyway.",
    tags: ["Causal ML", "Uplift Modelling", "Marketing"],
    image: "/images/blog-causal-promotion.jpg",
    url: "https://kahana.io/hub/causally-curious",
  },
  {
    id: 2,
    title: "The Economics of Sports Betting",
    excerpt:
      "Exploring how odds, probabilities, market efficiency, and incentives shape sports betting—and what these markets can teach us about prediction and decision-making under uncertainty.",
    tags: [
      "Sports Analytics",
      "Economics",
      "Prediction Markets",
      "Data Science",
    ],
    image: "/econ_sports.png",
    url: "https://kahana.io/hub/edge-cases",
  },
];