import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
// If using SSR, purgecss should be tested and configured
import purgecss from "astro-purgecss";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), purgecss()],
  devToolbar: {
    enabled: false,
  },
  output: "hybrid",
  adapter: netlify(),
});
