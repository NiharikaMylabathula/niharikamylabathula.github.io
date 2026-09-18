import { Github, Linkedin, BarChart3, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/NiharikaMylabathula", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niharika-mylabathula-2aa249205/",
    icon: Linkedin,
  },
  {
    label: "Tableau Public",
    href: "https://public.tableau.com/app/profile/niharika.mylabathula/vizzes",
    icon: BarChart3,
  },
  { label: "Email", href: "mailto:niharikamylabathula@gmail.com", icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Niharika Mylabathula. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
