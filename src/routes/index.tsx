import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Data Scientist & ML Engineer" },
      { name: "description", content: "Data science and ML engineering portfolio: production models, RAG pipelines, and MLOps case studies." },
      { property: "og:title", content: "Portfolio — Data Scientist & ML Engineer" },
      { property: "og:description", content: "Data science and ML engineering portfolio: production models, RAG pipelines, and MLOps case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Data Scientist & ML Engineer
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Turning messy data into models that ship.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                I build end-to-end ML systems — from feature pipelines and model training to evaluation, deployment, and monitoring. Focused on measurable impact and reliable production behavior.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View projects
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-secondary">
                <img
                  src="/images/hero.jpg"
                  alt="Neural network graph visualization on a dark grid"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding border-t border-border bg-secondary/30">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Selected work
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary sm:inline-block"
            >
              See all projects
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="text-sm font-medium text-foreground underline underline-offset-4"
            >
              See all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="section-padding border-t border-border">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                From the blog
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Recent writing
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary sm:inline-block"
            >
              Read all posts
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: (typeof featuredProjects)[number] }) {
  return (
    <Link to="/projects" className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        <img
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${project.imageFit === "contain" ? "object-contain p-3" : "object-cover"}`}
        />
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: (typeof recentPosts)[number] }) {
  return (
    <Link to="/blog" className="group flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted sm:aspect-square sm:w-40 sm:shrink-0">
        <img
          src={post.image}
          alt={post.title}
          width={800}
          height={512}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          {post.date}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

const featuredProjects = [
  {
    id: 1,
    title: "Causal Impact of Buy Now, Pay Later",
    category: "Causal Inference / Policy",
    description: "AIPW, IPW, and Causal Forest estimates of BNPL’s effects on debt, late payments, and liquidity using the Survey of Consumer Finances.",
    image: "/images/project-bnpl.jpg",
  },
  {
    id: 2,
    title: "Statistical Arbitrage via Pairs Trading",
    category: "Quantitative Finance",
    description: "A market-neutral energy-equities strategy achieving a 1.38 Sharpe ratio with 4.2% maximum drawdown after transaction costs.",
    image: "/images/pairs-trading.png",
    imageFit: "contain" as const,
  },
  {
    id: 3,
    title: "Hallucination-Resistant RAG QA Assistant",
    category: "NLP / LLM",
    description: "Hybrid retrieval and a fine-tuned DeBERTa verification layer that checks cited claims before answers reach users.",
    image: "/images/project-1.jpg",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Your Best Customers Might Be the Worst People to Target",
    date: "Article idea",
    excerpt: "Using causal ML to distinguish likely buyers from customers whose decisions a promotion can actually change.",
    image: "/images/blog-causal-promotion.jpg",
  },
  {
    id: 2,
    title: "My Churn Model Had 90% AUC—and Targeted the Wrong Customers",
    date: "Article idea",
    excerpt: "Why predictive accuracy alone cannot tell you which customers will respond to a retention intervention.",
    image: "/images/blog-churn-targeting.jpg",
  },
];
