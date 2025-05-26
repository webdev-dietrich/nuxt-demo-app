// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import type { ThemeDefinition } from "vuetify";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#6200EE",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });
  app.vueApp.use(vuetify);
});
