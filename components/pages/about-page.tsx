"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { About } from "@/components/sections/about";
import { SITE } from "@/lib/constants";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  textRevealContainer,
  textRevealWord,
} from "@/lib/animations";

const MISSION_POINTS = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "From advanced TPU airbag compression to rapid-heat technology, we engineer solutions that outperform basic vibration massagers.",
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    description:
      "Every Santeva device features a 15-minute auto shut-off, premium ABS construction, and medical-grade PU leather for safe, daily therapeutic use.",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "From gamers and office workers to seniors managing arthritis — our universal-fit design and adjustable strap serve the whole family.",
  },
];

export default function AboutPage() {
  const words = "Our Story".split(" ");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lightest via-white to-brand-light/30" />
        </div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl" />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-2 rounded-full
                         text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              About Santeva
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textRevealContainer}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight
                         text-text-primary leading-[1.1] mb-6"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textRevealWord}
                  className="inline-block mr-3 md:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
            >
              Santeva was born from a simple belief: professional-grade hand
              therapy should be accessible to everyone, anywhere, anytime.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/living-room.png"
                alt="Santeva hand massager used at home for arthritis and hand fatigue relief"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                From Idea to Impact
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We started Santeva with a clear mission: to bridge the gap
                  between professional massage therapy and everyday self-care.
                  After extensive research into hand ergonomics, heat therapy,
                  and compression techniques, we designed a cordless wearable
                  massager that delivers real therapeutic results.
                </p>
                <p>
                  Our Rapid-Heat Engine reaches therapeutic temperatures
                  (104&deg;F&ndash;113&deg;F) in just 8&ndash;10 seconds. Combined with advanced
                  TPU airbag compression that targets every finger, palm, and
                  wrist, Santeva mimics professional massage techniques right in
                  the palm of your hand.
                </p>
                <p>
                  Today, thousands of customers trust Santeva for arthritis
                  management, carpal tunnel relief, post-workout recovery, and
                  daily relaxation. Every product is backed by our satisfaction
                  guarantee because your hand health matters.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-brand-lightest overflow-hidden">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {MISSION_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={staggerItem}
                  className="text-center p-8 rounded-2xl bg-white border border-gray-100
                             shadow-sm hover:shadow-lg hover:shadow-brand/10
                             hover:border-brand/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Values section from About component */}
      <About />

      {/* CTA */}
      <section className="py-20 md:py-28 overflow-hidden">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Reclaim Your Hand Health?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Discover why thousands of customers trust Santeva for arthritis
              relief, carpal tunnel recovery, and everyday hand wellness.
            </p>
            <a
              href={SITE.amazonProductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full
                         font-semibold text-lg shadow-lg shadow-brand/25
                         hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30
                         hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
