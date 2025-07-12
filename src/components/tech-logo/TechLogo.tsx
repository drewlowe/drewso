import Image from "next/image";
import { techLogos } from "@/components/tech-logo/techLogos";

export type TechLogoPath = keyof typeof techLogos;

export const TechLogo = ({
  path,
  invert = false,
}: {
  path: TechLogoPath;
  invert?: boolean;
}) => {
  const logo = techLogos[path];

  if (!logo) return null;

  return (
    <div className="flex items-center justify-center h-10">
      <Image
        src={`/tech-logos${path}`}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={`${invert ? "grayscale-logo-invert" : "grayscale-logo"} max-h-8 w-auto`}
      />
    </div>
  );
};
