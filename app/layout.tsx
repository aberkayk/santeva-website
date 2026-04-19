import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santeva.com"),
  title: {
    default: "Santeva | Premium Wellness & Self-Care Solutions",
    template: "%s | Santeva",
  },
  description:
    "Explore Santeva's premium wellness and self-care products designed for your comfort and recovery. Featuring professional-grade therapy tools like our cordless hand massager.",
  keywords: [
    "Santeva",
    "wellness products",
    "self-care tools",
    "recovery devices",
    "premium health gadgets",
    "hand massager",
    "heated therapy",
    "therapeutic massagers",
    "personal wellness",
    "home recovery tools",
    "pain relief solutions",
    "heated hand massager",
    "hand massager for arthritis",
    "carpal tunnel massager",
    "cordless hand massager",
    "hand compression massager",
    "wrist massager",
    "finger massager",
    "palm massager",
    "hand pain relief",
    "deep tissue hand massage",
    "electric hand massager",
    "portable hand massager",
    "rechargeable hand massager",
    "therapeutic hand massager",
  ],
  authors: [{ name: "Santeva" }],
  creator: "Santeva",
  publisher: "Santeva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Santeva | Premium Wellness & Self-Care Solutions",
    description:
      "Innovative and premium wellness solutions for your daily life. Discover Santeva's therapeutic products designed for peak recovery and comfort.",
    url: "https://santeva.com",
    siteName: "Santeva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/detail-1.png",
        width: 1200,
        height: 630,
        alt: "Santeva Cordless Hand Massager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santeva | Premium Wellness & Self-Care Solutions",
    description:
      "Innovative and premium wellness solutions for your daily life. Discover Santeva's therapeutic products designed for peak recovery and comfort.",
    creator: "@santeva",
    images: ["/images/detail-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Santeva",
              url: "https://santeva.com",
              logo: "https://santeva.com/icon.svg",
              description:
                "Premium wellness and self-care solutions. Professional-grade hand massagers with heat therapy and airbag compression.",
              brand: {
                "@type": "Brand",
                name: "Santeva",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "paklinollc@gmail.com",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.amazon.com/s?k=hand+massager+with+heat+and+compression&me=A2DUFB3EWQ403X&ref=nb_sb_noss",
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
