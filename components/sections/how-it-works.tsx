"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-brand-lightest overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl" />

      <Container>
        <SectionHeading
          badge="How It Works"
          title="Relief in 3 Simple Steps"
          description="Slip it on like a glove, customize your therapy, and let Santeva do the rest."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative"
        >
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-xl font-bold mb-6 shadow-lg shadow-brand/25 z-10">
                {step.number}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow for mobile */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="md:hidden flex justify-center mt-6 mb-2">
                  <svg
                    className="w-6 h-6 text-brand/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
