import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drew Lowe",
  description:
    "Drew Lowe is a technologist, software developer, and business strategist.",
  openGraph: {
    title: "Drew Lowe",
    description:
      "Drew Lowe is a technologist, software developer, and business strategist.",
    url: "https://drew.so",
    siteName: "Drew Lowe",
    images: [
      {
        url: "/drewbanner.jpg",
        width: 1400,
        height: 349,
        alt: "Drew Lowe Site Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@drewsowhat",
    creator: "@drewsowhat",
    images: ["/drewbanner.jpg"],
  },
  metadataBase: new URL("https://drew.so"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen justify-center bg-[var(--background)] text-[var(--foreground)]">
            <div className="max-w-[597px] w-full py-2 px-5 md:p-2">
              <Header />
              <div className={"prose prose-h1:text-2xl dark:prose-invert mt-7"}>
                {children}
              </div>
              <Footer />
              <Analytics />
              <SpeedInsights />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
