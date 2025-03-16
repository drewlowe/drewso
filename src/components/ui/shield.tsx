/* eslint-disable @next/next/no-img-element */

export interface ShieldProps {
    descriptor: string;
    technology: string;
    color: string;
    logo?: string;
    logoColor?: string;
}

export const Shield = ({ descriptor, technology, color, logo, logoColor = "white" }: ShieldProps) => {
    const formattedLogo = `logo=${logo}&logoColor=${logoColor}`;
    return (
        <img
            src={`https://img.shields.io/badge/${descriptor}-${technology}-${color}?${logo && formattedLogo}`}
            alt={technology}
            className="h-6 m-0"
        />
    )
}