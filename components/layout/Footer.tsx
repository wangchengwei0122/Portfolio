import { Github, Linkedin, MapPin } from "lucide-react"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * FOOTER — Identity & Trust Closure
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Purpose: Low-weight closing element, not a CTA
 * Content: Name, role, social links, location
 * Visual: Subdued, minimal, clearly "end of page"
 */

const FOOTER = {
  name: "Your Name",
  role: "Frontend Systems Engineer",
  location: "San Francisco, CA",
  remote: "Remote-friendly",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  year: new Date().getFullYear(),
}

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left: Identity */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-primary">{FOOTER.name}</p>
            <p className="text-xs text-muted-foreground">{FOOTER.role}</p>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={FOOTER.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={FOOTER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
            <span className="inline-flex items-center gap-1 text-xs">
              <MapPin className="size-3" />
              {FOOTER.location}
            </span>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-muted-foreground">
            © {FOOTER.year}
          </p>
        </div>
      </div>
    </footer>
  )
}
