// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  ssr: true,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error "No Error occurred"
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
