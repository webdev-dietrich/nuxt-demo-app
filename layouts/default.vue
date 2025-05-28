
<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-container>
        <v-app-bar-title>
          <NuxtLink to="/" class="font-weight-bold text-h4 text-white text-decoration-none">
            Sandkuhl
          </NuxtLink>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer app color="primary">
      <v-container class="py-0">
        <v-row>
          <v-col class="d-flex align-center">
            <p class="text-h6">
              sandkuhl.info
            </p>
          </v-col>

          <v-spacer />
          <v-col class="d-flex flex-column text-right">
            <NuxtLink to="/privacy" class="text-decoration-none text-white">
              Datenschutz
            </NuxtLink>
            <NuxtLink to="/impress" class="text-decoration-none text-white">
              Impressum
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>

</style>

