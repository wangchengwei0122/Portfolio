import { Github, Linkedin, Send } from "lucide-react"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * FOOTER — Rational Closure
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Style: Stripe / Vercel / Supabase engineering site
 * Purpose: Identity closure, not a CTA
 * Content: Name, role, brief statement, tech stack, links
 */

const FOOTER = {
  name: "Chengwei Wang",
  role: "Frontend Systems Engineer",
  github: "https://github.com/wangchengwei0122",
  linkedin: "https://www.linkedin.com/in/chengwei-wang-060852381",
  telegram: "https://t.me/chengwei0122",
  year: new Date().getFullYear(),
}

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 lg:px-12">
        {/* Main Content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left: Identity & Statement */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-primary">{FOOTER.name}</p>
              <p className="text-sm text-muted-foreground">{FOOTER.role}</p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Building production-ready Web3 and data-intensive interfaces.
              <br />
              Focused on clarity, performance, and long-term maintainability.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href={FOOTER.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <Github className="size-[18px]" />
            </a>
            <a
              href={FOOTER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="size-[18px]" />
            </a>
            <a
              href={FOOTER.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="transition-colors hover:text-primary"
            >
              <Send className="size-[18px]" />
            </a>
          </div>
        </div>

        {/* Bottom: Meta */}
        <div className="mt-8 border-t border-border/30 pt-6">
          <p className="text-xs text-muted-foreground/70">
            © {FOOTER.year} · Built with Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
