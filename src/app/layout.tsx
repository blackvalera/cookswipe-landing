import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "CookSwipe — Tinder for Solana",
  description:
    "Swipe to trade. Let OpenClaw AI handle your exits with MEV protection. Launch tokens with zero fees.",
  openGraph: {
    title: "CookSwipe — Tinder for Solana",
    description:
      "Swipe to trade. Let OpenClaw AI handle your exits with MEV protection. Launch tokens with zero fees.",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CookSwipe — Tinder for Solana",
    description:
      "Swipe to trade. Let OpenClaw AI handle your exits with MEV protection. Launch tokens with zero fees.",
    images: ["/banner.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

