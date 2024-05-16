import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
// If using SSR, purgecss should be tested and configured
import purgecss from "astro-purgecss";
import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), purgecss(), mdx()],
  devToolbar: {
    enabled: false
  },
  output: "hybrid",
  adapter: netlify()
});