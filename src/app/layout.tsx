import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Amit Gajare | Senior Frontend Developer",
    template: "%s | Amit Gajare",
  },
  description:
    "Senior Frontend Developer with 6+ years of experience specializing in React.js, Next.js, and modern web architecture.",
  keywords: [
    "Amit Gajare",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Amit Gajare" }],
  creator: "Amit Gajare",
  openGraph: {
    title: "Amit Gajare | Senior Frontend Developer",
    description:
      "Building scalable and high-performance web applications using React & Next.js.",
    url: "https://yourdomain.com",
    siteName: "Amit Gajare Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Gajare | Senior Frontend Developer",
    description:
      "Frontend Engineer specializing in React, performance optimization & architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-slate-950
          text-slate-100
          min-h-screen
          flex
          flex-col
          selection:bg-indigo-500/30
        `}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}