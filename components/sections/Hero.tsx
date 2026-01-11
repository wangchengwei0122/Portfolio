"use client"

import { motion } from "motion/react"
import { ArrowRight, Layers, Cpu, Activity, Blocks } from "lucide-react"
import {
  heroContainerVariants,
  heroItemVariants,
  heroVisualContainerVariants,
  heroCardVariants,
  heroFloatVariants,
  heroFloatDelayedVariants,
  heroPulseVariants,
} from "@/lib/motion"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * HERO COMPONENT — "Wow at First Sight"
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Layout: Left Content (50%) + Right Visual (50%)
 * Style: Vercel / Linear / Raycast marketing page
 *
 * Visual Hierarchy:
 * 1. Eyebrow (muted) → establishes role
 * 2. Headline (text-gradient, large) → core value prop
 * 3. Supporting copy (secondary) → proof points
 * 4. CTAs (primary glow + text link)
 * 5. Right visual (glass cards + gradient glow) → "complex systems" metaphor
 */

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* ═══ Background Glow Effect ═══ */}
      {/* Subtle gradient orb behind the visual area */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-brand-primary/8 blur-[100px]" />
      </div>

      {/* ═══ Main Container ═══ */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* ═══ Left: Content Area ═══ */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4, once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          {/* Eyebrow - Role identifier */}
          <motion.p
            variants={heroItemVariants}
            className="text-sm font-medium tracking-widest text-muted-foreground uppercase"
          >
            Frontend Systems Engineer
          </motion.p>

          {/* Headline - Core value proposition */}
          {/* text-gradient creates the cyan→indigo gradient effect */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">Building interfaces</span>
            <br />
            <span className="text-primary">for complex systems.</span>
          </motion.h1>

          {/* Supporting Copy - Proof points */}
          <motion.div
            variants={heroItemVariants}
            className="max-w-md space-y-3 text-base leading-relaxed text-secondary-foreground md:text-lg"
          >
            <p>
              5 years shipping production frontends—trading platforms, real-time dashboards,
              data-intensive enterprise tools.
            </p>
            <p className="text-muted-foreground">
              I turn ambiguous requirements into systems that scale.
            </p>
          </motion.div>

          {/* CTA Group */}
          <motion.div variants={heroItemVariants} className="flex items-center gap-5 pt-4">
            {/* Primary CTA - with glow effect */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 glow hover:bg-brand-strong hover:glow-strong"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA - text link */}
            <a
              href="#about"
              className="text-sm font-medium text-secondary-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>

        {/* ═══ Right: Visual Area ═══ */}
        {/* Represents "complex systems" through layered glass cards */}
        <motion.div
          variants={heroVisualContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Visual Container */}
          <div className="relative h-[400px] w-full max-w-[500px] md:h-[480px]">
            {/* ─── Gradient Glow Source ─── */}
            <motion.div
              variants={heroPulseVariants}
              initial="initial"
              animate="animate"
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full hero-gradient opacity-30 blur-3xl"
            />

            {/* ─── Card Layer 1: Main System Card ─── */}
            <motion.div
              variants={heroCardVariants}
              className="absolute left-4 top-8 z-30 w-72 md:left-8 md:w-80"
            >
              <motion.div
                variants={heroFloatVariants}
                initial="initial"
                animate="animate"
                className="glass-highlight elevated-lg rounded-2xl p-5"
              >
                {/* Card Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-brand-primary/20">
                    <Layers className="size-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">System Overview</p>
                    <p className="text-xs text-muted-foreground">Real-time metrics</p>
                  </div>
                </div>
                {/* Fake metrics bars */}
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Performance</span>
                      <span className="text-accent">98.2%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-accent to-brand-primary" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="text-accent">99.9%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-accent to-brand-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ─── Card Layer 2: Activity Card ─── */}
            <motion.div
              variants={heroCardVariants}
              className="absolute right-4 top-32 z-20 w-56 md:right-0 md:w-64"
            >
              <motion.div
                variants={heroFloatDelayedVariants}
                initial="initial"
                animate="animate"
                className="glass elevated rounded-xl p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Activity className="size-4 text-accent" />
                  <span className="text-xs font-medium text-primary">Live Activity</span>
                </div>
                {/* Fake activity graph */}
                <div className="flex h-12 items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent/60 to-accent"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ─── Card Layer 3: Component Block ─── */}
            <motion.div
              variants={heroCardVariants}
              className="absolute bottom-16 left-8 z-10 md:bottom-12 md:left-16"
            >
              <motion.div
                variants={heroFloatVariants}
                initial="initial"
                animate="animate"
                className="glass elevated rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card">
                    <Cpu className="size-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary">Process Node</p>
                    <p className="text-[10px] text-muted-foreground">Active · 24ms</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ─── Card Layer 4: Module Block ─── */}
            <motion.div
              variants={heroCardVariants}
              className="absolute bottom-8 right-12 z-10 md:bottom-4 md:right-20"
            >
              <motion.div
                variants={heroFloatDelayedVariants}
                initial="initial"
                animate="animate"
                className="glass elevated rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card">
                    <Blocks className="size-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary">UI Module</p>
                    <p className="text-[10px] text-muted-foreground">Rendered · 12ms</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ─── Connection Lines (decorative) ─── */}
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 500 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 160 120 Q 250 200 340 180"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.path
                d="M 180 280 Q 280 320 380 280"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ═══ Scroll Indicator ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
