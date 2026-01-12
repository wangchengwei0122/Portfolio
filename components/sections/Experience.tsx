"use client"
import { motion } from "motion/react"
import { Briefcase } from "lucide-react"
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * EXPERIENCE SECTION — Impact-Driven Cards
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Visual Style: Matches Projects / Skills card system
 * - No timeline or resume layout
 * - Focus on impact, scale, and results
 * - Stable, professional, trustworthy
 */

interface Experience {
  role: string
  company: string
  period: string
  metrics?: string[]
  summary: string
  contributions: string[]
  tags?: string[]
}

const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Qichacha Technology",
    period: "2019.04 — Present",
    metrics: ["Millions of Users", "Open Platform", "AI Integration"],
    summary:
      "Leading frontend architecture and core delivery for enterprise open platform, shipping scalable web applications with cross-functional collaboration.",
    contributions: [
      "Built SSR optimization with Nuxt.js + Node.js, improving initial load and SEO performance",
      "Integrated AI capabilities: intelligent Q&A, content summarization, and recommendation features",
      "Drove department-wide monorepo adoption and established engineering standards for code reuse",
      "Built modular UI component library and promoted cross-team component standardization",
      "Refactored multi-client codebases (Web, H5, in-app WebView/JSBridge) for better maintainability",
    ],
    tags: ["Vue.js", "Nuxt.js", "Node.js", "Monorepo", "AI", "SSR"],
  },
  {
    role: "Frontend Engineer",
    company: "Tongcheng Travel",
    period: "2018.05 — 2019.04",
    metrics: ["~30% Bundle Reduction", "Node.js BFF", "Mini Programs"],
    summary:
      "Built ticketing, booking, and payment features across Web, Hybrid App, and WeChat Mini Programs.",
    contributions: [
      "Added Node.js BFF layer for API aggregation, reducing latency and improving stability",
      "Modularized core flows with Vuex to improve maintainability and scalability",
      "Used dynamic import and code splitting to cut bundle size ~30% and speed up first load",
      "Collaborated closely with UX/design on responsive layout and accessibility details",
    ],
    tags: ["Vue.js", "Vuex", "Node.js", "Mini Programs", "Performance"],
  },
  {
    role: "Frontend Engineer",
    company: "Jiangsu Weisheng Network",
    period: "2017.04 — 2018.05",
    metrics: ["jQuery → Vue Migration", "JSBridge", "Component System"],
    summary:
      "Responsible for Hybrid App and mini-program frontend development.",
    contributions: [
      "Migrated legacy jQuery projects to Vue, improving modularity and maintainability",
      "Integrated native capabilities via JSBridge (maps, QR scan, payments, etc.)",
      "Led company-wide UI refactoring and componentization, establishing unified architecture",
      "Authored internal coding standards and documentation to improve collaboration quality",
    ],
    tags: ["Vue.js", "jQuery", "Hybrid App", "JSBridge", "Mini Programs"],
  },
]

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-card/80 hover:shadow-md md:p-8">
      {/* Header: Role · Company | Period */}
      <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">{experience.role}</h3>
          <p className="text-base font-medium text-secondary-foreground">{experience.company}</p>
        </div>
        <p className="text-sm text-muted-foreground">{experience.period}</p>
      </header>

      {/* Impact Metrics (optional) */}
      {experience.metrics && (
        <div className="mb-4 flex flex-wrap gap-2">
          {experience.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      {/* Summary */}
      <p className="mb-4 text-base leading-relaxed text-secondary-foreground">
        {experience.summary}
      </p>

      {/* Key Contributions */}
      <ul className="mb-4 space-y-2">
        {experience.contributions.map((contribution, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 size-1 flex-shrink-0 rounded-full bg-accent/60" />
            <span>{contribution}</span>
          </li>
        ))}
      </ul>

      {/* Tech / Focus Tags (optional) */}
      {experience.tags && (
        <div className="flex flex-wrap gap-2 border-t border-border/30 pt-4">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-12">
      <motion.div
        className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.15, once: true }}
      >
        {/* Section Header */}
        <motion.header variants={sectionItem} className="mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10">
              <Briefcase className="size-4 text-accent" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Career
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Experience</h2>

          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground md:text-lg">
            7+ years building production systems—from enterprise platforms to Web3 infrastructure.
          </p>
        </motion.header>

        {/* Experience Cards */}
        <motion.div variants={listStagger} className="flex flex-col gap-6">
          {experiences.map((experience, index) => (
            <motion.div key={`${experience.company}-${index}`} variants={sectionItem}>
              <ExperienceCard experience={experience} />
            </motion.div>
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
 * 1. Card System (Consistent with Projects / Skills)
 *    - rounded-2xl border-border/40 bg-card/50 backdrop-blur-sm
 *    - Same hover behavior: -translate-y-0.5, border-accent/20, shadow-md
 *    - No timeline, no resume structure
 *
 * 2. Card Structure (5 clear zones)
 *    - Header: Role + Company | Period
 *    - Metrics: Impact pills (optional, accent background)
 *    - Summary: One-line scope statement
 *    - Contributions: 3-4 action + impact bullets
 *    - Tags: Tech stack / focus areas (optional)
 *
 * 3. Copy Style
 *    - Action + Impact, not "responsible for..."
 *    - Quantified results where possible
 *    - Focus on systems, scale, outcomes
 *
 * 4. Visual Hierarchy
 *    - Role: font-semibold text-primary (highest)
 *    - Company: font-medium text-secondary-foreground
 *    - Period: text-sm text-muted-foreground (lowest)
 *    - Contributions: text-muted-foreground (supporting)
 *
 * 5. Mental Model
 *    - Not "what I did" but "what value I created"
 *    - Experience as proof of sustained impact
 *    - Stable anchor module (no flashy effects)
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
