"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

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
        initial={{ opacity: 0, translateY: 32 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.2, once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
