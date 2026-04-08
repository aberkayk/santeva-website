"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { textRevealContainer, textRevealWord } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const PRODUCT_IMAGES = [
  { src: "/images/detail-1.png", alt: "Santeva Hand Massager - Front view" },
  { src: "/images/detail-2.png", alt: "Santeva Hand Massager - Side view" },
  { src: "/images/detail-3.png", alt: "Santeva Hand Massager - Strap detail" },
  { src: "/images/detail-4.png", alt: "Santeva Hand Massager - Controls" },
  { src: "/images/detail-5.png", alt: "Santeva Hand Massager - In use" },
  { src: "/images/detail-6.png", alt: "Santeva Hand Massager - Packaging" },
  { src: "/images/detail-7.png", alt: "Santeva Hand Massager - Accessories" },
];

export default function Home() {
  const words = "Give Your Hands the Care They Deserve".split(" ");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative h-screen overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lightest via-white to-brand-light/30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8FD0E9 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-3xl" />

      {/* Main Content - centered */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-2 rounded-full
                         text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              {SITE.tagline}
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
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Cordless hand massager with rapid heat and airbag compression.
              Deep tissue relief for arthritis, carpal tunnel, and everyday
              fatigue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={SITE.amazonProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-full
                           font-semibold text-lg shadow-lg shadow-brand/25
                           hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={SITE.amazonProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent-charcoal
                           border border-gray-200 px-8 py-4 rounded-full
                           font-semibold text-lg hover:border-brand hover:text-brand
                           hover:-translate-y-0.5 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy on Amazon
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Image Carousel - pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pb-8 md:pb-12"
      >
        <div className="max-w-4xl mx-auto px-12 sm:px-16">
          <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
            <CarouselContent className="-ml-3">
              {PRODUCT_IMAGES.map((image, i) => (
                <CarouselItem
                  key={image.src}
                  className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/5"
                >
                  <button
                    onClick={() => api?.scrollTo(i)}
                    className={`relative w-full aspect-square rounded-xl overflow-hidden transition-all duration-300
                      ${
                        i === current
                          ? "scale-105"
                          : "opacity-50 hover:opacity-80"
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}
