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
  title: "Drew.so",
  description:
    "At Drew.so, we don’t just write code—we craft tools that respect your time, attention, and purpose. Whether it’s an app, platform, or internal tool, our work is grounded in clarity, empathy, and intention.",
  openGraph: {
    title: "Drew.so",
    description:
      "At Drew.so, we don’t just write code—we craft tools that respect your time, attention, and purpose. Whether it’s an app, platform, or internal tool, our work is grounded in clarity, empathy, and intention.",
    url: "https://drew.so",
    siteName: "Drew.so",
    images: [
      {
        url: "/drewbanner.jpg",
        width: 1400,
        height: 349,
        alt: "Drew.so Site Banner",
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
          <div className="flex min-h-screen justify-center bg-bg text-fg">
            <div className="max-w-[700px] w-full py-2 px-5 md:p-2">
              <Header />
              <div
                className={
                  "prose prose-h1:text-2xl dark:prose-invert mt-7 max-w-none"
                }
              >
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
