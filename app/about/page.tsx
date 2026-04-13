import type { Metadata } from "next";
import AboutPage from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About Santeva - Our Story & Mission",
  description:
    "Learn how Santeva bridges the gap between professional massage therapy and everyday self-care. Innovative hand therapy solutions with rapid-heat technology and TPU airbag compression.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
