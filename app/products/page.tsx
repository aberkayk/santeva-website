import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { ProductGallery } from "@/components/sections/product-gallery";
import { LifestyleShowcase } from "@/components/sections/lifestyle-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";

export const metadata = {
  title: "Cordless Hand Massager with Heat & Compression | Santeva",
  description:
    "SANTEVA cordless hand massager with heat and compression. 3 massage modes, 5 intensity levels, 4 heat settings. Relief for arthritis, carpal tunnel, wrist and finger pain. Rechargeable, portable, fits left and right hands.",
};

export default function ProductsPage() {
  return (
    <>
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
