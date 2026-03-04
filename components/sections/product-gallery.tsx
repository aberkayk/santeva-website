"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const GALLERY_IMAGES = [
  {
    src: "/images/detail-1.png",
    alt: "Santeva cordless hand massager - glove-style wearable design",
  },
  {
    src: "/images/detail-2.png",
    alt: "Santeva hand massager - airbag compression for fingers and palm",
  },
  {
    src: "/images/detail-3.png",
    alt: "Santeva hand massager - adjustable strap for universal fit",
  },
  {
    src: "/images/detail-4.png",
    alt: "Santeva hand massager - heat therapy controls and massage modes",
  },
  {
    src: "/images/detail-5.png",
    alt: "Santeva hand massager - premium ABS and PU leather materials",
  },
  {
    src: "/images/detail-6.png",
    alt: "Santeva hand massager - gift-ready packaging",
  },
  {
    src: "/images/detail-7.png",
    alt: "Santeva hand massager - USB-C charging cable and accessories",
  },
];

export function ProductGallery() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -z-10" />

      <Container>
        <SectionHeading
          badge="Product Gallery"
          title="See Every Detail"
          description="Explore the craftsmanship and design of the Santeva Hand Massager from every angle."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.src}
              variants={staggerItem}
              className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm
                         hover:shadow-lg hover:shadow-brand/10 hover:border-brand/20
                         transition-all duration-300 group
                         ${index === 0 ? "col-span-2 row-span-2" : ""}
                         aspect-square`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
