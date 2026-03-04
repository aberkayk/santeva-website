"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Target, Award } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const VALUES = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every product is developed by listening to real customer needs — from arthritis sufferers to office workers and gamers.",
  },
  {
    icon: Target,
    title: "Therapeutic Quality",
    description:
      "We use premium ABS, soft PU leather, and advanced TPU airbags to deliver professional-grade therapy at home.",
  },
  {
    icon: Award,
    title: "Trusted on Amazon",
    description:
      "Thousands of 5-star reviews from customers who rely on Santeva for daily hand pain relief and recovery.",
  },
];

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-lightest/50 via-white to-white" />
      </motion.div>

      <Container>
        <SectionHeading
          badge="About Us"
          title="Why Santeva?"
          description="We set out to offer the very best for your hand health and comfort."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Santeva is a personal wellness brand specializing in innovative hand
            therapy solutions. Our cordless hand massager combines rapid heat
            therapy, advanced airbag compression, and ergonomic design to deliver
            a spa-like experience at home. Whether you&apos;re managing arthritis,
            recovering from carpal tunnel strain, or simply unwinding after a long
            day, Santeva is designed for you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="text-center p-8 rounded-2xl bg-white border border-gray-100
                           shadow-sm hover:shadow-lg hover:shadow-brand/10
                           hover:border-brand/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
