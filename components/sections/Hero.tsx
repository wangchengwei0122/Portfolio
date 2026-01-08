"use client";

import { motion } from "motion/react";
import { MapPin, Mail, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function HeroIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-4"
    >
      <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
        <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent transition-all hover:scale-[1.02] inline-block">
          Your Name
        </span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary">
        Senior Frontend Engineer
      </h2>
    </motion.div>
  );
}

function HeroIntro() {
  return (
    <motion.p
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="text-base font-normal leading-relaxed md:text-lg text-primary max-w-2xl"
    >
      I build scalable, maintainable interfaces that solve real problems. With a
      focus on performance, accessibility, and developer experience, I turn
      complex requirements into elegant solutions.
    </motion.p>
  );
}

function HeroMeta() {
  const metaItems = [
    { icon: MapPin, text: "San Francisco, CA" },
    { icon: Mail, text: "hello@example.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="flex flex-wrap gap-6 text-sm text-primary"
    >
      {metaItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <item.icon className="size-4" />
          <span>{item.text}</span>
        </div>
      ))}
    </motion.div>
  );
}

function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="flex flex-wrap gap-4"
    >
      <Button asChild size="lg">
        <a href="#contact">Let&apos;s Talk</a>
      </Button>
      <Button asChild variant="outline" size="lg">
        <a href="#projects">View Work</a>
      </Button>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-primary"
    >
      <span>Scroll to explore</span>
      <ArrowDown className="size-4 animate-bounce" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-20">
        <div className="space-y-8">
          <HeroIdentity />
          <HeroIntro />
          <HeroMeta />
          <HeroActions />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
