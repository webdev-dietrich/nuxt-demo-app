// import this after install `@mdi/font` package

import "ress/ress.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import type { ThemeDefinition } from "vuetify";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {

    "background": "#fff9f9",
    "surface": "#FFFFFF",
    "primary": "#930000",
    "primary-darken-1": "#3700B3",
    "secondary": "#03DAC6",
    "secondary-darken-1": "#018786",
    "error": "#B00020",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FB8C00",
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
