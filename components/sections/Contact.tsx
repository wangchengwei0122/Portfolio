"use client";
import { motion } from "motion/react";
import Section from "../layout/Section";
import { listStagger, sectionItem } from "@/lib/motion";

const contactMethods = [
  { label: "Location", value: "San Francisco, CA" },
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { label: "GitHub", value: "github.com/username", href: "https://github.com/username" },
  { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/in/username" },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        variants={listStagger}
        className="w-full rounded-lg border border-subtle bg-surface p-12"
      >
        <div className="flex flex-col gap-12 md:flex-row">
          <motion.div
            variants={sectionItem}
            className="space-y-12 md:w-1/2"
          >
            <div className="space-y-6">
              <p className="text-base md:text-lg font-normal leading-relaxed text-primary">
                I&apos;m currently open to senior frontend and web3 engineering
                opportunities. Let&apos;s build something great together.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center rounded-md border border-subtle bg-canvas px-6 py-4 text-base font-medium leading-normal text-accent transition-colors hover:text-accent"
                >
                  Email Me
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-subtle px-6 py-4 text-base font-medium leading-normal text-primary transition-colors hover:bg-canvas hover:text-accent"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium leading-normal text-primary">
                Get in Touch
              </h3>
              <address className="not-italic">
                <ul className="space-y-4">
                  {contactMethods.map((method) => (
                    <li
                      key={method.label}
                      className="flex items-baseline gap-4 text-base md:text-lg font-normal leading-relaxed text-primary"
                    >
                      <span className="w-24 text-base font-medium leading-normal text-primary">
                        {method.label}:
                      </span>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-accent underline underline-offset-4"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span>{method.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </motion.div>

          <motion.div variants={sectionItem} className="md:w-1/2">
            <h3 className="mb-4 text-base font-medium leading-normal text-primary">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-normal leading-relaxed text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-subtle bg-canvas px-4 py-2 text-base font-normal leading-relaxed text-primary outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-normal leading-relaxed text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-subtle bg-canvas px-4 py-2 text-base font-normal leading-relaxed text-primary outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-normal leading-relaxed text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-subtle bg-canvas px-4 py-2 text-base font-normal leading-relaxed text-primary outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md border border-subtle bg-canvas px-6 py-4 text-base font-medium leading-normal text-accent transition-colors hover:text-accent"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
