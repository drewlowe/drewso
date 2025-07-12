import Link from "next/link";
import Image from "next/image";

export const CTA = () => (
  <div className="flex flex-col md:flex-row items-center pb-4">
    <div className="w-full md:w-1/3 justify-center">
      <div className="flex flex-row md:flex-col gap-8 md:gap-0 items-center">
        <div className="md:px-8 w-1/3 md:w-full">
          <Image
            width={500}
            height={500}
            src="/profile.png"
            alt="Drew Lowe"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono">(561) 332-9773</span>
          <span className="font-mono">drew@drew.so</span>
        </div>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <h4 className="font-mono">Ready to make it happen?</h4>
      <p className="text-sm">
        My name is Drew Lowe. I started Drew.so because I wanted to build
        software as an art.{" "}
        <Link href="/bio">The journey that led me here</Link> has shaped my
        design style and helped me build a team of wonderful developers and
        artists. Everything we do at Drew.so comes with a human perspective and
        experience that brings the best out of your project.
      </p>
      <p className="text-sm">
        If you have an idea you&#39;d like us to bring to life please reach out
        to me directly by either email or text. We look forward to helping!
      </p>
    </div>
  </div>
);
