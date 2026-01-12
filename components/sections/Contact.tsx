"use client"
import { motion } from "motion/react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react"
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion"
import { FormEvent, useState } from "react"

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * CONTACT SECTION — Portfolio Closing CTA
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Visual Style: Glass + subtle glow, matches Hero/Projects aesthetic
 * Layout: Left (Action Panel) + Right (Message Form)
 * Purpose: Credible, professional, action-oriented
 */

// ─── Contact Configuration ─────────────────────────────────────────────────────
// Update these values with your actual contact information

const CONTACT = {
  email: "hello@example.com",
  phone: "+1 (555) 123-4567", // Set to null/empty to hide
  location: "San Francisco, CA",
  availability: "Remote-friendly",
  responseTime: "Typically replies within 24 hours",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
}

const HEADLINE = "Let's build something meaningful together."
const SUBTEXT = "Open to collaboration, full-time roles, and interesting problems."

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ContactLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  value: string
}

// ─── Components ────────────────────────────────────────────────────────────────

function ContactLink({ href, icon, label, value }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 text-sm text-secondary-foreground transition-colors hover:text-primary"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-colors group-hover:bg-accent/10 group-hover:text-accent">
        {icon}
      </span>
      <span className="sr-only">{label}: </span>
      <span className="underline-offset-4 group-hover:underline">{value}</span>
    </a>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Option 1: Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Hi,\n\n${message}\n\nBest,\n${name}\n${email}`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`

    // Option 2: Mock submit (uncomment to use instead)
    // console.log("Form submitted:", { name, email, message })

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-secondary-foreground">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-border/40 bg-card/30 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/60 backdrop-blur-sm transition-all focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-secondary-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-border/40 bg-card/30 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/60 backdrop-blur-sm transition-all focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-secondary-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-none rounded-lg border border-border/40 bg-card/30 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/60 backdrop-blur-sm transition-all focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-brand-strong hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] disabled:opacity-70"
      >
        {isSubmitted ? (
          "Opening email client..."
        ) : isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="relative py-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.15, once: true }}
      >
        {/* Section Header */}
        <motion.header variants={sectionItem} className="mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10">
              <Mail className="size-4 text-accent" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get in Touch
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Contact</h2>
        </motion.header>

        {/* Main Content Card */}
        <motion.div
          variants={sectionItem}
          className="rounded-2xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm md:p-10"
        >
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {/* Left: Action Panel */}
            <motion.div variants={listStagger} className="space-y-8">
              {/* Headline */}
              <motion.div variants={sectionItem} className="space-y-3">
                <h3 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
                  {HEADLINE}
                </h3>
                <p className="text-base leading-relaxed text-secondary-foreground">{SUBTEXT}</p>
              </motion.div>

              {/* Primary CTA Buttons */}
              <motion.div variants={sectionItem} className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-brand-strong hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
                >
                  <Mail className="size-4" />
                  Email Me
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                {CONTACT.phone && (
                  <a
                    href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-5 py-3 text-sm font-medium text-secondary-foreground backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/80 hover:text-primary"
                  >
                    <Phone className="size-4" />
                    Call
                  </a>
                )}
              </motion.div>

              {/* Contact Links */}
              <motion.div variants={sectionItem} className="space-y-3">
                <ContactLink
                  href={`mailto:${CONTACT.email}`}
                  icon={<Mail className="size-4" />}
                  label="Email"
                  value={CONTACT.email}
                />

                {CONTACT.phone && (
                  <ContactLink
                    href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                    icon={<Phone className="size-4" />}
                    label="Phone"
                    value={CONTACT.phone}
                  />
                )}

                <ContactLink
                  href={CONTACT.github}
                  icon={<Github className="size-4" />}
                  label="GitHub"
                  value="GitHub"
                />

                <ContactLink
                  href={CONTACT.linkedin}
                  icon={<Linkedin className="size-4" />}
                  label="LinkedIn"
                  value="LinkedIn"
                />
              </motion.div>

              {/* Meta Info */}
              <motion.div
                variants={sectionItem}
                className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/30 pt-6 text-xs text-muted-foreground"
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {CONTACT.location} · {CONTACT.availability}
                </span>
                <span className="hidden sm:inline">·</span>
                <span>{CONTACT.responseTime}</span>
              </motion.div>
            </motion.div>

            {/* Right: Message Form */}
            <motion.div variants={sectionItem}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm">
                <h4 className="mb-5 text-base font-semibold text-primary">Send a Message</h4>
                <ContactForm />
              </div>
            </motion.div>
          </div>
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
 * 1. Card System (Consistent with portfolio)
 *    - Outer: border-border/30 bg-card/40 backdrop-blur-sm
 *    - Form container: border-border/30 bg-card/30 (nested glass)
 *    - No heavy shadows in default state
 *
 * 2. Left Panel (Action-Oriented)
 *    - Strong headline (2xl/3xl) but weaker than Hero
 *    - Primary CTA with glow on hover (hover:shadow-accent/20)
 *    - Contact links with icon + hover underline
 *    - Meta info (location, response time) at bottom
 *
 * 3. Right Panel (Form)
 *    - Inputs: subtle border, glass bg, accent focus ring
 *    - No thick borders or default browser styles
 *    - Submit button matches primary CTA style
 *
 * 4. Form Behavior
 *    - Uses mailto: to open email client with pre-filled content
 *    - Can be swapped for API submission
 *    - Shows loading/success states
 *
 * 5. Configuration
 *    - All contact info in CONTACT object at top
 *    - Easy to update without touching JSX
 *    - Phone is optional (null/empty to hide)
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */
