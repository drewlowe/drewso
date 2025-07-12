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
  "/aws.png": {
    alt: "Amazon Web Services",
    width: 1200,
    height: 719,
  },
  "/firebase.png": {
    alt: "Firebase",
    width: 364,
    height: 364,
  },
  "/gcp.png": {
    alt: "Google Cloud Platform",
    width: 360,
    height: 360,
  },
  "/graphql.png": {
    alt: "GraphQL",
    width: 512,
    height: 512,
  },
  "/nest.png": {
    alt: "Nest",
    width: 200,
    height: 200,
  },
  "/openapi.png": {
    alt: "OpenAPI",
    width: 320,
    height: 320,
  },
  "/django.png": {
    alt: "django",
    width: 2560,
    height: 887,
  },
  "/redis.png": {
    alt: "Redis",
    width: 256,
    height: 256,
  },
  "/postgres.png": {
    alt: "PostgreSQL",
    width: 1200,
    height: 1237,
  },
  "/mysql.png": {
    alt: "MySQL",
    width: 512,
    height: 512,
  },
  "/webhooks.png": {
    alt: "Webhooks",
    width: 240,
    height: 240,
  },
  "/websocket.png": {
    alt: "Websocket",
    width: 512,
    height: 512,
  },
  "/google-analytics.png": {
    alt: "Google Analytics",
    width: 512,
    height: 512,
  },
  "/hubspot.webp": {
    alt: "HubSpot",
    width: 512,
    height: 512,
  },
  "/lighthouse.png": {
    alt: "Google Lighthouse",
    width: 512,
    height: 512,
  },
  "/mailchimp.png": {
    alt: "Mailchimp",
    width: 476,
    height: 499,
  },
  "/paddle.png": {
    alt: "Paddle",
    width: 1226,
    height: 434,
  },
  "/stripe.webp": {
    alt: "Stripe",
    width: 300,
    height: 300,
  },
  "/chargebee.png": {
    alt: "Chargebee",
    width: 741,
    height: 833,
  },
  "/recurly.webp": {
    alt: "Recurly",
    width: 741,
    height: 833,
  },
  "/grafana.png": {
    alt: "Grafana",
    width: 1200,
    height: 1227,
  },
  "/hotjar.png": {
    alt: "Hotjar",
    width: 500,
    height: 129,
  },
  "/typeform.png": {
    alt: "Typeform",
    width: 300,
    height: 300,
  },
  "/salesforce.webp": {
    alt: "Salesforce",
    width: 2560,
    height: 1792,
  },
} as const satisfies Record<string, ITechLogo>;
