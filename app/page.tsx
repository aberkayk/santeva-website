import type { Metadata } from "next";
import HomePage from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Santeva | Premium Hand Massager with Heat & Compression Therapy",
  },
  description:
    "Santeva offers professional-grade cordless hand massagers with rapid heat therapy and airbag compression. Relief for arthritis, carpal tunnel, and everyday hand fatigue. Shop on Amazon.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
