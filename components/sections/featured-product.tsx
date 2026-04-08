"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PRODUCT_FEATURES, SITE } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

export function FeaturedProduct() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl -z-10" />

      <Container>
        <SectionHeading
          badge="Featured Product"
          title="Santeva Cordless Hand Massager"
          description="Wearable glove-style massager with heat therapy and airbag compression for fingers, palm, and wrist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Product Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="flex justify-center"
          >
            <div
              className="w-full max-w-md aspect-square rounded-3xl overflow-hidden
                          border border-brand/10 shadow-xl shadow-brand/10 relative"
            >
              <Image
                src="/images/detail-2.png"
                alt="Santeva Hand Massager with heat and compression therapy"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {PRODUCT_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={staggerItem}
                    className="group relative bg-white rounded-2xl p-6
                               border border-gray-100 shadow-sm
                               hover:shadow-lg hover:shadow-brand/10 hover:border-brand/20
                               transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4
                                  group-hover:bg-brand/20 transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href={SITE.amazonProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-charcoal text-white px-8 py-4 rounded-full
                           font-semibold text-lg shadow-lg shadow-accent-charcoal/25
                           hover:bg-accent-charcoal/90 hover:shadow-xl hover:shadow-accent-charcoal/30
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                Buy on Amazon
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
