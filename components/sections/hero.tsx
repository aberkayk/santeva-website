"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SITE } from "@/lib/constants";
import { textRevealContainer, textRevealWord } from "@/lib/animations";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = "Cordless Hand Massager with Heat & Compression".split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lightest via-white to-brand-light/30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8FD0E9 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </motion.div>

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-3xl" />

      <motion.div style={{ opacity }} className="w-full">
        <Container className="py-32 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-2 rounded-full
                           text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                Arthritis &amp; Carpal Tunnel Relief
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textRevealContainer}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
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
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-lg"
              >
                Slip it on like a glove. Rapid heat reaches 104&deg;F&ndash;113&deg;F in seconds.
                Advanced airbag compression massages every finger, palm, and wrist.
                Fits both hands, cordless and rechargeable via USB-C.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={SITE.amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-full
                             font-semibold text-lg shadow-lg shadow-brand/25
                             hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30
                             hover:-translate-y-0.5 transition-all duration-300"
                >
                  Buy on Amazon
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Product Visual */}
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div
                    className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl
                                overflow-hidden shadow-2xl shadow-brand/20
                                border border-brand/20"
                  >
                    <Image
                      src="/images/detail-1.png"
                      alt="Santeva Cordless Hand Massager with Heat and Compression for Arthritis and Carpal Tunnel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -inset-4 bg-brand/5 rounded-[2rem] blur-2xl -z-10" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3
                             border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-text-primary">
                      4.8
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
