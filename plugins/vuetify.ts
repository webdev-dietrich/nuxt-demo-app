// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import type { ThemeDefinition } from "vuetify";

import { createVuetify } from "vuetify";

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
  });
  app.vueApp.use(vuetify);
});
