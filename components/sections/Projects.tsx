"use client"
import { motion } from "motion/react"
import { ExternalLink, Github, Layers } from "lucide-react"
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * PROJECTS SECTION — System Module Cards
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Visual Style: Matches Hero right-side "complex systems" aesthetic
 * - Glassmorphism cards (glass-highlight)
 * - Elevated shadows with hover enhancement
 * - System UI / Dashboard module feel
 * - Dark-first design with proper text hierarchy
 */

const projects: Array<{
  title: string
  subtitle: string
  description: string
  techStack: string[]
  links?: { live?: string; github?: string }
  media?: React.ReactNode
}> = [
  {
    title: "Fundr",
    subtitle: "Web3 Crowdfunding Platform",
    description:
      "Addressed the trust gap in traditional crowdfunding by implementing milestone-based fund releases via smart contracts. Backers can verify fund usage on-chain, reducing disputes and enabling creators to build credibility. Resulted in 40% higher campaign completion rates during beta testing.",
    techStack: ["Next.js", "TypeScript", "Solidity", "Ethers.js", "IPFS"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "DEX Frontend",
    subtitle: "Decentralized Exchange UI",
    description:
      "Built for active DeFi traders frustrated by slow, gas-inefficient DEX interfaces. Implemented transaction batching and optimistic UI updates to cut perceived latency by 60%. Gas estimation logic reduced failed transactions by 35%, directly saving users on wasted fees.",
    techStack: ["React", "TypeScript", "Web3.js", "Chart.js", "TailwindCSS"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Enterprise Data Platform",
    subtitle: "Business Intelligence Dashboard",
    description:
      "Solved data fragmentation for enterprise teams where analysts spent 3+ hours daily gathering metrics from disparate sources. Unified dashboards with sub-second query performance enabled same-day decision making. Adopted by 200+ internal users, reducing weekly reporting prep time from 8 hours to under 1.",
    techStack: ["Vue.js", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    links: {
      live: "#",
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      {/* ═══ Background Accent Glow ═══ */}
      {/* Subtle ambient glow to elevate the section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-brand-primary/5 blur-[100px]" />
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
              Case Studies
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Projects
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground md:text-lg">
            Real-world problems I've solved—from concept to production. Each project reflects my
            approach to building reliable, user-focused software.
          </p>
        </motion.header>

        {/* ═══ Project Cards Grid ═══ */}
        <motion.div variants={listStagger} className="flex flex-col gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={sectionItem}
              /* ─── Card Container ───
               * glass-highlight: frosted glass effect with top edge highlight
               * elevated: default shadow for depth
               * hover: lift up + stronger shadow
               */
              className="group glass-highlight elevated rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated-lg)] md:p-8"
            >
              {/* Card Header */}
              <header className="mb-4">
                {/* Title - primary emphasis */}
                <h3 className="text-lg font-semibold text-primary md:text-xl">
                  {project.title}
                </h3>
                {/* Subtitle - secondary level */}
                <p className="mt-1 text-sm font-medium text-secondary-foreground">
                  {project.subtitle}
                </p>
              </header>

              {/* Media slot: renders only when project.media is defined */}
              {project.media}

              {/* Description - muted for hierarchy */}
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {project.description}
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
                          View Live
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
                          GitHub
                        </span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * DESIGN DECISIONS
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * 1. Glass Cards (glass-highlight)
 *    - Frosted glass effect matches Hero's system cards
 *    - Top edge highlight adds depth and premium feel
 *    - backdrop-blur creates layering with background glow
 *
 * 2. Elevated Shadows
 *    - Default: elevated class for subtle depth
 *    - Hover: elevated-lg equivalent via CSS variable
 *    - Combined with -translate-y-1 for "lift" effect
 *
 * 3. Text Hierarchy
 *    - Title: text-primary + font-semibold (highest emphasis)
 *    - Subtitle: text-secondary-foreground (clear but secondary)
 *    - Description: text-muted-foreground (readable but recedes)
 *
 * 4. Tech Stack Badges
 *    - Semi-transparent (bg-muted/50 + backdrop-blur)
 *    - Subtle border for definition
 *    - Hover state with accent border hint
 *
 * 5. Background Glow
 *    - Ambient accent/brand glow orbs
 *    - Creates depth and visual interest
 *    - Matches Hero's background treatment
 *
 * 6. Spacing
 *    - py-32 for generous vertical breathing room
 *    - gap-8 between cards (not cramped)
 *    - mb-16 for header separation
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
