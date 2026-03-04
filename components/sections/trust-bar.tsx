"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TRUST_STATS } from "@/lib/constants";
import { Container } from "@/components/shared/container";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(String(v)));
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="relative py-12 md:py-16 bg-white border-y border-gray-100">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {TRUST_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Customer count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 pt-8 border-t border-gray-100"
        >
          <p className="text-text-secondary">
            <span className="text-2xl font-bold text-text-primary">
              <AnimatedCounter target={1000} suffix="+" />
            </span>{" "}
            happy customers and counting
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
