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
    company: "Web3 Platform",
    period: "2022 — Present",
    metrics: ["500K+ Users", "Multi-chain Support", "Core Wallet Team"],
    summary:
      "Led frontend architecture for a high-traffic wallet and dApp platform serving users across multiple blockchain networks.",
    contributions: [
      "Architected core wallet features with focus on security and performance",
      "Established frontend patterns and component libraries adopted across teams",
      "Reduced bundle size by 35% through code-splitting and lazy loading",
      "Collaborated with product and design on complex Web3 interaction flows",
    ],
    tags: ["React", "TypeScript", "Web3", "Design Systems"],
  },
  {
    role: "Frontend Engineer",
    company: "Product Studio",
    period: "2019 — 2022",
    metrics: ["10+ Products", "Design System Lead", "Consumer Scale"],
    summary:
      "Built reusable UI systems and shipped client-facing features across multiple product verticals on aggressive timelines.",
    contributions: [
      "Developed design system components used by 10+ internal applications",
      "Shipped features for high-traffic consumer products with strict perf budgets",
      "Reduced feature delivery time by 40% through reusable component patterns",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Performance"],
  },
  {
    role: "Frontend Engineer",
    company: "SaaS Company",
    period: "2017 — 2019",
    metrics: ["40% Faster", "Data Dashboards", "Legacy Migration"],
    summary:
      "Improved core workflows and performance for internal dashboards and customer-facing analytics tools.",
    contributions: [
      "Optimized rendering for data-heavy dashboards, reducing load times by 40%",
      "Built accessible forms and data visualization components",
      "Led migration from legacy stack to modern React-based architecture",
    ],
    tags: ["React", "D3.js", "Accessibility", "Performance"],
  },
]

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-card/80 hover:shadow-md md:p-8">
      {/* Header: Role · Company | Period */}
      <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">
            {experience.role}
          </h3>
          <p className="text-base font-medium text-secondary-foreground">
            {experience.company}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {experience.period}
        </p>
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
    <section id="experience" className="relative py-24">
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

          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Experience
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground md:text-lg">
            Building production systems at scale—from consumer products to Web3 infrastructure.
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
