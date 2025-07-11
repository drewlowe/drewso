"use client";

import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "./Logo";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full mt-4 mb-5 md:mb-9 flex flex-row items-center justify-between">
      <div className="w-[100px]">
        <Link href="/">{pathname == "/" ? "Drew.so" : <Logo />}</Link>
      </div>
      <div
        className={`flex flex-row text-sm font-light items-center gap-4 ${jetBrainsMono.className}`}
      >
        <Link href="/tech-stack">Stack</Link>
        <Link href="/bio">Bio</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
