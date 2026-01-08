"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { sectionContainer, sectionItem } from "@/lib/motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <motion.div
        className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 space-y-8"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h2
          variants={sectionItem}
          className="text-2xl md:text-3xl font-semibold leading-snug text-primary"
        >
          {title}
        </motion.h2>
        <motion.div variants={sectionItem} className="space-y-8">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
