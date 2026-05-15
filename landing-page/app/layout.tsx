import type { Metadata } from "next";
import { Geist, Titan_One, Sour_Gummy } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "TTA - AI-Powered Audio Generation",
  description: "TTA transforms your words into lifelike, professional-grade audio using cutting-edge AI — perfect for creators, businesses, and editors.",
  openGraph: {
    title: "TTA - AI-Powered Audio Generation",
    description: "TTA transforms your words into lifelike, professional-grade audio using cutting-edge AI — perfect for creators, businesses, and editors.",
    images: [
      {
        url: "/api/og?title=TTA+AI-Powered+Audio+Generation",
        width: 1200,
        height: 630,
        alt: "TTA - AI-Powered Audio Generation",
      },
    ],
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const titan = Titan_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-titan",
  display: "swap",
});

const sour = Sour_Gummy({
  subsets: ["latin"],
  variable: "--font-sour",
  display: "swap",
});

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
        ${titan.variable}
        ${sour.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}