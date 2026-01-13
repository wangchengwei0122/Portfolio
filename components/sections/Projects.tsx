"use client"
import { motion } from "motion/react"
import { ExternalLink, Github, Layers } from "lucide-react"
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion"
import { useLanguage } from "@/components/providers/LanguageProvider"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * PROJECTS SECTION — Content-First Card List
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Visual Style: Linear / Raycast card list — calm, scannable, premium
 * - Subtle glass in default state (no strong glow)
 * - Gentle accent hint on hover only
 * - Content-first hierarchy, not competing with Hero
 */

const projectsData: Array<{
  key: "dex" | "fundr" | "enterprise"
  techStack: string[]
  links?: { live?: string; github?: string }
  media?: React.ReactNode
}> = [
  {
    key: "dex",
    techStack: ["Next.js", "TypeScript", "Tailwind", "RainbowKit", "wagmi", "viem"],
    links: {
      live: "https://dex-frontend-bice.vercel.app/",
      github: "https://github.com/wangchengwei0122/dex-frontend",
    },
  },
  {
    key: "fundr",
    techStack: ["Next.js", "TypeScript", "Solidity", "Fastify", "Drizzle ORM", "PostgreSQL", "Cloudflare Workers"],
    links: {
      github: "https://github.com/wangchengwei0122/fundr",
    },
  },
  {
    key: "enterprise",
    techStack: ["Nuxt.js", "Vue.js", "Node.js", "Monorepo", "AI Integration"],
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-12">
      {/* ═══ Background Glow (very subtle) ═══ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.15, once: true }}
      >
        {/* ═══ Section Header ═══ */}
        <motion.header variants={sectionItem} className="mb-16 space-y-4">
          {/* Eyebrow with icon - matches Hero's system feel */}
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10">
              <Layers className="size-4 text-accent" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {t.projects.eyebrow}
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{t.projects.title}</h2>

          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground md:text-lg">
            {t.projects.description}
          </p>
        </motion.header>

        {/* ═══ Project Cards Grid ═══ */}
        <motion.div variants={listStagger} className="flex flex-col gap-8">
          {projectsData.map((project) => {
            const item = t.projects.items[project.key]
            return (
              <motion.article
                key={project.key}
                variants={sectionItem}
                /* ─── Card Container ───
                 * Default: subtle bg + border, no strong glow
                 * Hover: gentle lift + accent border hint + slightly stronger shadow
                 */
                className="group rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-card/80 hover:shadow-md md:p-8"
              >
                {/* Card Header */}
                <header className="mb-4">
                  {/* Title - primary emphasis */}
                  <h3 className="text-lg font-semibold text-primary md:text-xl">{item.title}</h3>
                  {/* Subtitle - secondary level */}
                  <p className="mt-1 text-sm font-medium text-secondary-foreground">
                    {item.subtitle}
                  </p>
                </header>

                {/* Media slot: renders only when project.media is defined */}
                {project.media}

                {/* Description - muted for hierarchy */}
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Footer: Tech Stack + Links */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  {/* ─── Tech Stack Badges ───
                   * Semi-transparent background
                   * Border for definition
                   * Small rounded corners
                   */}
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border/50 bg-muted/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm transition-colors hover:border-accent/30 hover:text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* ─── Links ───
                   * Accent colored with icons
                   * Hover glow effect
                   */}
                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:text-brand-strong"
                        >
                          <ExternalLink className="size-4" />
                          <span className="underline-offset-4 group-hover/link:underline">
                            {t.projects.viewLive}
                          </span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all hover:text-brand-strong"
                        >
                          <Github className="size-4" />
                          <span className="underline-offset-4 group-hover/link:underline">
                            {t.projects.github}
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * DESIGN DECISIONS (Refactored for Content-First)
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 1. Card Default State (Calm & Readable)
 *    - bg-card/50 + backdrop-blur-sm: very subtle glass, not attention-grabbing
 *    - border-border/40: light definition without heaviness
 *    - No elevated shadow in default — cleaner scanning
 *
 * 2. Card Hover State (Gentle Accent Hint)
 *    - hover:-translate-y-0.5: minimal lift (not -1)
 *    - hover:border-accent/20: subtle accent border fade-in
 *    - hover:bg-card/80: slightly more opaque
 *    - hover:shadow-md: gentle shadow increase (not elevated-lg)
 *
 * 3. Background Glow
 *    - Reduced from two orbs to one
 *    - Opacity dropped from /5 to /[0.03]
 *    - Doesn't compete with Hero's dramatic glow
 *
 * 4. Visual Hierarchy vs Hero
 *    - Hero: marketing-level impact with strong glow + glass-highlight
 *    - Projects: list-level browsing, cards support content not dominate
 *    - Think "Linear sidebar" not "Stripe hero"
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
