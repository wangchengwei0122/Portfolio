"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Phone, ArrowDown } from "lucide-react";
import { heroContainer, heroItem } from "@/lib/motion";

export default function Hero() {
  const metaItems = [
    { icon: MapPin, text: "San Francisco, CA" },
    { icon: Mail, text: "hello@example.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-20">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
          className="space-y-8"
        >
          <motion.h1
            variants={heroItem}
            className="text-5xl md:text-6xl font-semibold leading-tight text-primary"
          >
            Your Name
          </motion.h1>
          <motion.h2
            variants={heroItem}
            className="text-2xl md:text-3xl font-semibold leading-snug text-primary"
          >
            Senior Frontend Engineer
          </motion.h2>
          <motion.p
            variants={heroItem}
            className="text-base md:text-lg font-normal leading-relaxed text-primary max-w-2xl"
          >
            I build scalable, maintainable interfaces that solve real problems.
            With a focus on performance, accessibility, and developer
            experience, I turn complex requirements into elegant solutions.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="flex flex-wrap gap-6 text-sm font-normal leading-relaxed text-primary"
          >
            {metaItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="size-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={heroItem} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-subtle bg-surface px-6 py-4 text-base font-medium leading-normal text-accent transition-colors hover:text-accent"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-subtle px-6 py-4 text-base font-medium leading-normal text-primary transition-colors hover:bg-surface hover:text-accent"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.6, once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-normal leading-relaxed text-primary"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}
