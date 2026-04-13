import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { ProductGallery } from "@/components/sections/product-gallery";
import { LifestyleShowcase } from "@/components/sections/lifestyle-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";

export const metadata: Metadata = {
  title: "Cordless Hand Massager with Heat & Compression",
  description:
    "SANTEVA cordless hand massager with heat and compression. 3 massage modes, 5 intensity levels, 4 heat settings. Relief for arthritis, carpal tunnel, wrist and finger pain. Rechargeable, portable, fits left and right hands.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Santeva Cordless Hand Massager with Heat & Compression",
            description:
              "Professional-grade cordless hand massager with rapid heat therapy (104-113°F in 8-10 seconds), TPU airbag compression, 3 massage modes, 5 intensity levels, and 4 heat settings. Relief for arthritis, carpal tunnel, wrist and finger pain. USB-C rechargeable, universal fit.",
            brand: {
              "@type": "Brand",
              name: "Santeva",
            },
            image: "https://santeva.com/images/detail-1.png",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              reviewCount: "5",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.amazon.com/dp/B0G7MNR9P1",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
            },
          }),
        }}
      />
      <Hero />
      <TrustBar />
      <FeaturedProduct />
      <ProductGallery />
      <LifestyleShowcase />
      <HowItWorks />
      <Reviews />
    </>
  );
}
