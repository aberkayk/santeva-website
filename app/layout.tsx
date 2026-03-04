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
  icons: {
    icon: "/icon.svg",
  },
  title: "Santeva | Cordless Hand Massager with Heat & Compression",
  description:
    "SANTEVA cordless electric hand massager with heat and compression therapy. Relief for arthritis, carpal tunnel, and hand fatigue. Rechargeable, portable, fits both hands.",
  keywords: [
    "hand massager",
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
    "santeva",
  ],
  openGraph: {
    title: "Santeva | Cordless Hand Massager with Heat & Compression",
    description:
      "Professional-grade hand therapy at home. Heat, compression, and deep tissue relief for arthritis, carpal tunnel, and everyday fatigue.",
    type: "website",
    locale: "en_US",
    siteName: "Santeva",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
