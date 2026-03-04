"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {badge && (
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-block text-sm font-semibold text-brand uppercase tracking-widest mb-4"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
