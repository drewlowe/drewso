import Image from "next/image";

export const StarBullets = ({ bullets }: { bullets: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {bullets.map((bullet, index) => (
        <div className="flex flex-row items-center gap-2" key={index}>
          <div className="flex items-center justify-center h-5">
            <Image
              src="/ui/drewso-star.png"
              width={270}
              height={276}
              alt=""
              className="w-4 h-4"
            />
          </div>
          <span className="text-sm font-semibold">{bullet}</span>
        </div>
      ))}
    </div>
  );
};
