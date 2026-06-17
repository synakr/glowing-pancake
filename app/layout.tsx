import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://alhirajpharma.in"
  ),

  title: {
    default:
      "Al Hiraj Pharmaceuticals",
    template:
      "%s | Al Hiraj Pharmaceuticals",
  },

  applicationName:
    "Al Hiraj Pharmaceuticals",

  description:
  "Al Hiraj Pharmaceuticals is a Bengaluru-based pharmaceutical company engaged in pharmaceutical marketing, third-party manufacturing, contract manufacturing, and distribution of quality healthcare products across India.",

  keywords: [
    "Al Hiraj Pharmaceuticals",
    "Al Hiraj Pharma",
    "Al Hiraj Distributors",
    "Pharmaceutical Company Bangalore",
    "Pharmaceutical Company Bengaluru",
    "Pharma Marketing Company",
    "Third Party Manufacturing",
    "Contract Manufacturing",
    "Medicine Supplier Karnataka",
    "Healthcare Products",
  ],

  authors: [
    {
      name:
        "Al Hiraj Pharmaceuticals",
    },
  ],

  creator:
    "Al Hiraj Pharmaceuticals",

  publisher:
    "Al Hiraj Pharmaceuticals",

  category: "Healthcare",

  alternates: {
    canonical:
      "https://alhirajpharma.in",
  },

  verification: {
    google: "",
  },

  openGraph: {
    title:
      "Al Hiraj Pharmaceuticals",

    description:
      "Trusted pharmaceutical marketing and healthcare solutions company based in Bengaluru.",

    url:
      "https://alhirajpharma.in",

    siteName:
      "Al Hiraj Pharmaceuticals",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Al Hiraj Pharmaceuticals",

    description:
      "Trusted pharmaceutical marketing and healthcare solutions company based in Bengaluru.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet": -1,
      "max-video-preview":
        -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen bg-[#f5f7fb] text-slate-900">
        
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 pt-6">
          {children}
        </div>
      </body>
    </html>
  );
}