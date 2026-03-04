"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

interface ScrollAnimationProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
}

export function ScrollAnimation({
  children,
  variants = defaultVariants,
  className,
  delay = 0,
  amount = 0.3,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
