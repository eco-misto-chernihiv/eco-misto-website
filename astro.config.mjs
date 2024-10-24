import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
// If using SSR, purgecss should be tested and configured
import purgecss from "astro-purgecss";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://ecomisto.org",
  integrations: [
    react(),
    mdx(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  output: "hybrid",
  adapter: netlify(),
});
