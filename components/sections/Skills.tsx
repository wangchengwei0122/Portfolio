"use client"
import { motion } from "motion/react"
import { Code2, Server, Wrench, ShieldCheck, LucideIcon } from "lucide-react"
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * SKILLS SECTION — Capability Cards
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Visual Style: Matches Projects card system
 * - Subtle glass bg + border (no strong glow)
 * - Hover: gentle lift + shadow
 * - Content-first, value-oriented copy
 */

interface SkillCard {
  title: string
  icon: LucideIcon
  skills: string[]
  summary: string
}

const skillCards: SkillCard[] = [
  {
    title: "Web3 Frontend",
    icon: Code2,
    skills: [
      "Next.js / TypeScript",
      "wagmi / viem / RainbowKit",
      "Wallet Integration & Multi-chain",
      "On-chain Reads & Transaction Flows",
      "DeFi UI (Slippage, Price Impact, Approvals)",
    ],
    summary:
      "Building DEX interfaces, crowdfunding dApps, and wallet UX with type-safe contract interactions.",
  },
  {
    title: "Frontend Engineering",
    icon: Server,
    skills: [
      "SSR / Next.js App Router/ Nuxt.js ",
      "Monorepo (pnpm workspaces)",
      "Performance Optimization",
      "Component Library Architecture",
      "Multi-client (Web / H5 / WebView)",
    ],
    summary:
      "Shipping enterprise-scale frontends with SSR, code splitting, and cross-platform consistency.",
  },
  {
    title: "Backend & Infra",
    icon: Wrench,
    skills: [
      "Node.js / Fastify",
      "PostgreSQL / Drizzle ORM",
      "Cloudflare Workers / KV",
      "Event Indexer Architecture",
      "CI/CD & Build Workflows",
    ],
    summary: "Building APIs, indexers, and edge caching layers for dApp backends.",
  },
  {
    title: "DX & Quality",
    icon: ShieldCheck,
    skills: [
      "Strict TypeScript End-to-End",
      "Lint / Format Automation",
      "Reusable Hooks & Adapters",
      "Domain Model Separation",
      "Code Review & Standards",
    ],
    summary: "Decoupling UI from contract logic with typed adapters and clean state management.",
  },
]

function SkillCardComponent({ card }: { card: SkillCard }) {
  const Icon = card.icon

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-card/80 hover:shadow-md">
      {/* Header: Icon + Title */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="size-5 text-accent" />
        </div>
        <h3 className="text-base font-semibold text-primary md:text-lg">{card.title}</h3>
      </div>

      {/* Skills List */}
      <ul className="mb-5 flex-1 space-y-2.5">
        {card.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-secondary-foreground">
            <span className="size-1 rounded-full bg-accent/60" />
            {skill}
          </li>
        ))}
      </ul>

      {/* Summary */}
      <p className="border-t border-border/30 pt-4 text-sm leading-relaxed text-muted-foreground">
        {card.summary}
      </p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-12">
      <motion.div
        className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.15, once: true }}
      >
        {/* Section Header */}
        <motion.header variants={sectionItem} className="mb-12 space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Core Competencies
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Skills</h2>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground md:text-lg">
            Full-stack capabilities with deep focus on Web3 frontend and DeFi UX.
          </p>
        </motion.header>

        {/* Skills Grid */}
        <motion.div variants={listStagger} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCards.map((card) => (
            <motion.div key={card.title} variants={sectionItem}>
              <SkillCardComponent card={card} />
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
 * 1. Card Style (Consistent with Projects)
 *    - border-border/40 bg-card/50 backdrop-blur-sm
 *    - rounded-2xl for premium feel
 *    - No strong glow in default state
 *
 * 2. Hover Behavior
 *    - -translate-y-0.5: minimal lift
 *    - border-accent/20: subtle accent hint
 *    - shadow-md: gentle shadow increase
 *
 * 3. Content Structure
 *    - Icon + Title: establishes category
 *    - Skills List: scannable, no progress bars
 *    - Summary: value-oriented statement
 *
 * 4. Copy Style
 *    - No "Advanced / Proficient" levels
 *    - Focus on what I've built, not self-assessment
 *    - Summary answers "what value do I bring?"
 *
 * 5. Visual Hierarchy
 *    - Less prominent than Hero
 *    - Equal weight with Projects (supporting content)
 *    - Scannable 2x2 grid layout
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
