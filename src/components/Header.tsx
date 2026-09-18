import { Link } from "@tanstack/react-router";
import { Download, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          <span className="text-primary">/</span>portfolio
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <MobileNav />
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            aria-label="Download resume"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary [&::-webkit-details-marker]:hidden">
        <Menu className="h-4 w-4" />
        <span className="sr-only">Open navigation</span>
      </summary>
      <nav className="absolute right-0 top-12 z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover p-1 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
