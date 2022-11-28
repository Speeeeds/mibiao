<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import VerifyModal from "@/components/VerifyModal.vue";
import { ref } from "vue";

const verifying = ref(false);
const verified = ref(false);
const route = useRoute();

function onVerifyFinish(success: boolean) {
  verifying.value = false;
  verified.value = success;
}
function sendMail() {
  window.location.href = 'mailto:hi@nai.ba'
}
</script>

<template>
  <RouterLink to="/">
    <header class="mb-4 font-black">
      <h1 class="text-3xl md:text-4xl">THE</h1>
      <h1 class="text-5xl md:text-8xl">BIG TOYS</h1>
      <h1 class="text-4xl md:text-6xl">COMPANY</h1>
    </header>
  </RouterLink>

  <main>
    <RouterView />
  </main>

  <VerifyModal :show="verifying" @finish="onVerifyFinish" />

  <footer>
    <p class="text-xl md:text-4xl">{{ $t('ui.vision') }}</p>
    <button @click="verified ? sendMail() : verifying = true"
      class="mt-6 text-xl md:text-4xl font-black color-black border-4 p-4 rounded-xl">
      {{ verified ? 'hi+' + (route.params.domain ?? 'bigtoyscompany.com') + '@nai.ba' : $t('ui.get_in_touch') }}
    </button>
    <div class="mt-10 border-t-4 pt-4 border-white">
      <p class="text-xl md:text-2xl">
        <img class="inline-block h-10" src="@/assets/logo.png" />
        2022 &copy; Big toys for big boys.
      </p>
    </div>
  </footer>
</template>

<style scoped>
button {
  background-color: #DB000099;
  border-color: #E14444;
}

button:hover {
  background-color: #E14444;
}
</style>
