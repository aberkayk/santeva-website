import type { Metadata } from "next";
import ContactPage from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact Santeva - Get in Touch",
  description:
    "Have questions about Santeva hand massagers? Contact us via email at paklinollc@gmail.com. Mon-Fri, 9AM-6PM EST. Visit our Amazon store for product inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
