<script setup lang="ts">
import type { Domain } from '@/stores/assets';
import FontAvatar from './FontAvatar.vue';
import { domainDescriptionKey } from "@/util"

defineProps<{
  domain: Domain;
}>();
</script>

<template>
  <div class="card">
    <div>
      <img style="width: 3rem;height: 3rem;max-width: unset;" v-if="domain.image" :src="domain.image"
        :alt="domain.domain" />
      <FontAvatar :size="3" :word="domain.domain[0]" v-else />
    </div>
    <div class="overflow-hidden">
      <p class="domain font-black text-xl break-all">{{ domain.domain }}</p>
      <p class="description font-thin text-ellipsis overflow-hidden">
        {{ $t(domainDescriptionKey(domain.domain)) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: .5rem;
  background-color: #DB000099;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
}

.card>div {
  display: inline-block;
}

.card>div:first-child {
  margin-right: 0.5rem;
}

.card img {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
}

.card:hover {
  background-color: #E1444499;
}
</style>
