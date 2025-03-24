import { defineConfig } from "astro/config";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  adapter: node({
    mode: "standalone",
  }),
  adapter: vercel({
    static: true,
    webAnalytics: { enabled: true },
  }),
});
