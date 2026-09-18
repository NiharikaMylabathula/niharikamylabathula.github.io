import { createFileRoute } from "@tanstack/react-router";
import { FileText, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Niharika Mylabathula" },
      { name: "description", content: "Causal inference, quantitative finance, NLP, risk modelling, and machine learning projects by Niharika Mylabathula." },
      { property: "og:title", content: "Projects — Niharika Mylabathula" },
      { property: "og:description", content: "Causal inference, quantitative finance, NLP, risk modelling, and machine learning projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

type ProjectLink = { label: string; href: string; icon: "github" | "paper" };

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageFit?: "cover" | "contain";
  links: ProjectLink[];
};

function ProjectsPage() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Selected work</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of things I've built, tested, and explored across machine learning, causal inference, finance, and beyond.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-secondary/50">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt=""
          width={1008}
          height={752}
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 motion-safe:group-hover:scale-105 ${project.imageFit === "contain" ? "object-contain p-3" : "object-cover"}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">{project.category}</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-foreground">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.icon === "github" ? <Github className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Causal Impact of Buy Now, Pay Later on Household Financial Outcomes",
    category: "Causal Inference / Policy",
    description: "Estimated BNPL’s causal impact using doubly robust AIPW on the 2022 Survey of Consumer Finances. Compared AIPW, IPW, and Causal Forests for heterogeneous effects—strongest among adults under 35—while handling survey weights and multiple imputation with Rubin’s rules across debt, late-payment, and liquidity outcomes.",
    tags: ["AIPW", "Causal Forests", "Survey Weights", "Multiple Imputation"],
    image: "/images/project-bnpl.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/NiharikaMylabathula/ECON-690-Project", icon: "github" },
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 2,
    title: "Statistical Arbitrage via Pairs Trading",
    category: "Quantitative Finance",
    description: "Built and backtested a market-neutral strategy for energy equities, using clustering and cointegration to identify 50+ mean-reverting pairs per rebalance window from 2019–2025. With transaction costs, sector neutrality, and leverage capped at 2×, the strategy achieved a 1.38 Sharpe ratio and 4.2% maximum drawdown.",
    tags: ["Pairs Trading", "Cointegration", "Backtesting", "Regime Analysis"],
    image: "/images/pairs-trading.png",
    imageFit: "contain",
    links: [
      { label: "GitHub", href: "https://github.com/NiharikaMylabathula/MTH-585-Project", icon: "github" },
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 3,
    title: "Predicting Transfer Value of Football Players",
    category: "Sports Analytics",
    description: "Scraped and engineered performance and demographic features from Europe’s top leagues, then built L1/L2 regression models reaching roughly 65% out-of-sample accuracy. A K-means and value-performance framework identified high-potential players and assembled cost-efficient squads for recruitment decisions.",
    tags: ["Web Scraping", "L1/L2 Regression", "K-means", "Optimization"],
    image: "/images/football-market-value.png",
    imageFit: "contain",
    links: [
      { label: "GitHub", href: "https://github.com/NiharikaMylabathula/Player-Market-Value-Prediction", icon: "github" },
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 4,
    title: "Causal Analysis in High-Dimensional Settings",
    category: "Experimental Causal ML",
    description: "Designed a synthetic-data benchmark of six causal inference and matching methods: PSM, IPW, MALTS, Genetic Matching, Lasso Coefficient Matching, and Causal Forests. Evaluated accuracy, bias, robustness, and computational scalability across sample sizes, feature dimensions, and heterogeneous treatment effects.",
    tags: ["PSM", "MALTS", "Genetic Matching", "Causal Forests"],
    image: "/images/causal-high-dimensional.png",
    imageFit: "contain",
    links: [
      { label: "GitHub", href: "https://github.com/NiharikaMylabathula/COMPSCI590-Project", icon: "github" },
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 5,
    title: "Hallucination-Resistant RAG QA Assistant",
    category: "NLP / LLM",
    description: "Architected hybrid retrieval over policy and economics papers with BGE embeddings, BM25, Reciprocal Rank Fusion, cross-encoder reranking, and Qdrant. Fine-tuned DeBERTa-v3-base with QLoRA on 185K FEVER pairs to classify cited claims as supported, refuted, or inconclusive before answers reach users.",
    tags: ["RAG", "Qdrant", "DeBERTa", "QLoRA", "FastAPI"],
    image: "/images/project-1.jpg",
    links: [
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 6,
    title: "Multilingual Clinical Trial Summarizer",
    category: "NLP / Healthcare",
    description: "Engineered a pipeline that turns ClinicalTrials.gov records into plain-language summaries and translates them for multilingual access. Automated sentence segmentation, medical terminology normalization, ROUGE, and BERTScore evaluation across 100 clinical trials and 10 languages.",
    tags: ["Text Simplification", "Machine Translation", "ROUGE", "BERTScore"],
    image: "/images/clinical-trial-summarizer.png",
    imageFit: "contain",
    links: [],
  },
  {
    id: 7,
    title: "Interpretable Uplift Modelling for Digital Advertising",
    category: "Causal ML",
    description: "Applied Uplift Random Forests to 13.9M Criteo ad exposures, improving AUUC by 29% over propensity targeting. A rule-based targeting policy, validated on a randomized holdout with bootstrapped confidence intervals, reduced audience size by 80% while retaining approximately 97% of incremental conversions.",
    tags: ["causalml", "Uplift Modelling", "AUUC", "Bootstrapping"],
    image: "/images/project-3.jpg",
    links: [
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
  {
    id: 8,
    title: "Credit Risk Modelling with LendingClub Data",
    category: "Credit Risk",
    description: "Built a framework for probability of default, loss given default, and expected credit loss using LendingClub loans from 2007–2015 and FRED macroeconomic indicators. Validated calibration and population stability, then stress-tested portfolio losses under adverse macroeconomic scenarios.",
    tags: ["PD / LGD / ECL", "XGBoost", "Calibration", "Stress Testing"],
    image: "/images/credit-risk.png",
    imageFit: "contain",
    links: [],
  },
  {
    id: 9,
    title: "LSTM-Augmented Market Risk Modelling",
    category: "Market Risk / Deep Learning",
    description: "Built a stacked LSTM with 0.954 out-of-sample volatility forecast correlation across seven asset classes and estimated VaR and Expected Shortfall for a $1M portfolio. Benchmarked against GARCH variants with Basel III backtests and measured 3.88× COVID and 10.08× hypothetical-crash VaR uplifts.",
    tags: ["LSTM", "VaR", "Expected Shortfall", "GARCH", "Basel III"],
    image: "/images/volatility-forecasting.png",
    links: [
      { label: "GitHub", href: "https://github.com/NiharikaMylabathula/market_risk_modelling_with_LSTM", icon: "github" },
      { label: "Paper", href: "https://drive.google.com/drive/folders/1C8oOfDomcEC8gUVDS8QgyprEAA61MAqP", icon: "paper" },
    ],
  },
];