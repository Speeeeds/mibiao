<script setup lang="ts">
import type { Domain } from '@/stores/assets';
import FontAvatar from './FontAvatar.vue';

defineProps<{
  domain: Domain;
}>();
</script>

<template>
  <div class="card">
    <div>
      <img style="width: 4rem;height: 4rem;max-width: unset;" v-if="domain.image" :src="domain.image"
        :alt="domain.domain" />
      <FontAvatar :size="4" :word="domain.domain[0]" v-else />
    </div>
    <div class="overflow-hidden">
      <p class="domain font-black text-xl text-ellipsis overflow-hidden">{{ domain.domain }}</p>
      <p class="description font-thin text-ellipsis overflow-hidden">{{ $t('description.' +
          domain.domain.replace('.', '_'))
      }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  background-color: #DB000099;
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 14rem;
  border-radius: 1rem;
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
