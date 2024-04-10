import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
// If using SSR, purgecss should be tested and configured
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), purgecss()],
});
