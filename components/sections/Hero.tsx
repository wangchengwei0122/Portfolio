"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { heroContainer, heroItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 lg:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
          className="space-y-8"
        >
          <motion.p
            variants={heroItem}
            className="text-sm font-medium uppercase tracking-widest text-secondary"
          >
            Senior Frontend Engineer
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="text-4xl font-semibold leading-tight text-primary md:text-5xl"
          >
            I ship production-ready Web3 interfaces
            <span className="text-brand-primary">—</span>
            <br className="hidden md:block" />
            from complex DeFi flows to enterprise dashboards.
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="max-w-2xl text-base font-normal leading-relaxed text-secondary md:text-lg"
          >
            5+ years turning ambiguous product specs into performant, accessible
            frontends. I've built trading UIs handling millions in TVL,
            crowdfunding platforms with on-chain governance, and data systems
            used daily by 200+ enterprise users.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-4 text-base font-medium leading-normal text-on-brand transition-colors hover:bg-brand-strong"
            >
              See What I've Built
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-subtle px-6 py-4 text-base font-medium leading-normal text-primary transition-colors hover:bg-surface hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.6, once: true }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-normal leading-relaxed text-secondary"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}

/**
 * Why this Hero is better (from recruiter perspective):
 * 1. Opens with capability, not name — recruiters immediately see "Web3 + production systems" and know this isn't a junior dev with side projects.
 * 2. Specific proof points (TVL, on-chain governance, 200+ users) build credibility in 5 seconds without reading the full portfolio.
 * 3. Primary CTA drives to Projects first — the recruiter's real question is "show me the work," and now that's the default action.
 */
