"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const LIFESTYLE_SCENES = [
  {
    src: "/images/gym.png",
    alt: "Santeva hand massager for post-workout recovery at the gym",
    title: "Post-Workout Recovery",
    description: "Restore finger agility and reduce grip tension after intense sessions. Heat therapy soothes sore muscles fast.",
  },
  {
    src: "/images/office.png",
    alt: "Santeva hand massager for office workers with carpal tunnel and typing fatigue",
    title: "Office & Desk Relief",
    description: "Alleviate typing fatigue, wrist strain, and carpal tunnel discomfort. Your cordless desk companion.",
  },
  {
    src: "/images/living-room.png",
    alt: "Santeva hand massager for home relaxation and arthritis relief",
    title: "Home Spa Experience",
    description: "Unwind on the couch with a professional-grade hand massage. Perfect for daily self-care and arthritis management.",
  },
  {
    src: "/images/sleep 1.png",
    alt: "Santeva hand massager for better sleep and evening relaxation",
    title: "Evening Wind-Down",
    description: "A calming heated massage to ease stiffness and help you drift off to a restful sleep.",
  },
];

export function LifestyleShowcase() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-brand-lightest overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl" />

      <Container>
        <SectionHeading
          badge="Use Anywhere"
          title="Your Daily Recovery Partner"
          description="Cordless and portable \u2014 use Santeva at the gym, office, home, or on the go. Fits left or right hand."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {LIFESTYLE_SCENES.map((scene) => (
            <motion.div
              key={scene.src}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden border border-gray-100
                         shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/3]"
            >
              <Image
                src={scene.src}
                alt={scene.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {scene.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {scene.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
