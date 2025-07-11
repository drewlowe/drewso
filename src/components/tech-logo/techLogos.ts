type ITechLogo = {
  alt: string;
  width: number;
  height: number;
};

export const techLogos = {
  "/typescript.png": {
    alt: "TypeScript",
    width: 512,
    height: 512,
  },
  "/react.png": {
    alt: "React",
    width: 512,
    height: 456,
  },
  "/nextjs.png": {
    alt: "Next.js",
    width: 320,
    height: 320,
  },
  "/vue.png": {
    alt: "Vue.js",
    width: 400,
    height: 400,
  },
  "/svelte.png": {
    alt: "Svelte",
    width: 280,
    height: 280,
  },
  "/astro.png": {
    alt: "Astro",
    width: 512,
    height: 512,
  },
  "/php.png": {
    alt: "PHP",
    width: 711,
    height: 384,
  },
  "/laravel.png": {
    alt: "Laravel",
    width: 512,
    height: 512,
  },
  "/swift.png": {
    alt: "Swift",
    width: 512,
    height: 512,
  },
  "/kotlin.png": {
    alt: "Kotlin",
    width: 512,
    height: 512,
  },
  "/expo.png": {
    alt: "Expo",
    width: 1143,
    height: 1280,
  },
  "/wasm.png": {
    alt: "WASM",
    width: 512,
    height: 512,
  },
} as const satisfies Record<string, ITechLogo>;
