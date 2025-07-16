"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export const Logo = () => {
  const { theme } = useTheme();

  if (!theme) return null;

  if (theme == "light") {
    return (
      <Image
        src={"/logo.png"}
        alt={"Drew.so Human Software Agency"}
        className={"w-full"}
        width={2336}
        height={1476}
        style={{ objectFit: "contain" }}
      />
    );
  } else if (theme == "dark") {
    return (
      <Image
        src={"/logo-dark.png"}
        alt={"Drew.so Human Software Agency"}
        className={"w-full"}
        width={2336}
        height={1476}
        style={{ objectFit: "contain" }}
      />
    );
  }
};
