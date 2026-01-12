"use client"
import { motion } from "motion/react"
import { Mail, ArrowUpRight, Github, Linkedin, MapPin, Send } from "lucide-react"
import { sectionContainer, sectionItem } from "@/lib/motion"

const CONTACT = {
  email: "892630kux@gmail.com",
  responseTime: "Typically responds within 24 hours",
  github: "https://github.com/wangchengwei0122",
  linkedin: "https://www.linkedin.com/in/chengwei-wang-060852381",
  telegram: "https://t.me/chengwei0122",
  location: "China (Open to Remote)",
}

export default function Contact() {
  return (
    <section id="contact" className="bg-muted/50">
      <motion.div
        className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-32 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3, once: true }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={sectionItem}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Open to Opportunities
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={sectionItem}
          className="mb-6 text-3xl font-bold tracking-tight text-primary md:text-4xl"
        >
          Looking for a frontend engineer with Web3 experience?
        </motion.h2>

        {/* Description */}
        <motion.div
          variants={sectionItem}
          className="mb-6 max-w-2xl space-y-4 text-base leading-relaxed text-secondary-foreground"
        >
          <p>
            I specialize in building Web3 frontends—DEX interfaces, wallet integrations,
            and dApp UX with clean on-chain transaction flows.
          </p>
          <p>
            7+ years of production experience spanning enterprise platforms and DeFi applications.
            Comfortable with full-stack dApp architecture from indexer to edge cache to frontend.
          </p>
        </motion.div>

        {/* What I'm open to */}
        <motion.ul
          variants={sectionItem}
          className="mb-10 space-y-2 text-sm text-muted-foreground"
        >
          <li>• Full-time Web3 / DeFi frontend roles</li>
          <li>• Contract & consulting engagements</li>
          <li>• Remote-first positions</li>
        </motion.ul>

        {/* CTA + Contact Info Group */}
        <motion.div variants={sectionItem} className="space-y-6">
          {/* Primary CTA */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-brand-strong hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
          >
            <Mail className="size-5" />
            Send an Email
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* Supplementary Info */}
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <span>{CONTACT.email}</span>
            <span className="hidden sm:inline">·</span>
            <span>{CONTACT.responseTime}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Send className="size-4" />
              Telegram
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {CONTACT.location}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
