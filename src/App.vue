<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="mb-4">
    <h1 class="text-9xl">THE BIG TOYS</h1>
    <h1 class="text-8xl">COMPANY</h1>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p class="text-4xl">Big toys for big boys.</p>
    <p class="mt-2"><img class="h-20" src="@/assets/logo.png" /></p>
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - 30rem);
}
</style>
