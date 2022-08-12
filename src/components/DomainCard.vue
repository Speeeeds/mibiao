<script setup lang="ts">
import type { Domain } from '@/stores/assets';

defineProps<{
  domain: Domain;
}>();
</script>

<template>
  <div class="card">
    <div>
      <img v-if="domain.image" :src="domain.image" :alt="domain.domain + ' - ' + domain.description" />
      <div class="align-middle" v-else>{{ domain.domain[0].toUpperCase() }}</div>
    </div>
    <div>
      <p class="domain font-black">{{ domain.domain }}</p>
      <p class="description font-thin">{{ domain.description }}</p>
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

.card>div:first-child>div {
  background-color: black;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
  line-height: 4rem;
  font-size: 3rem;
}

.card:hover {
  background-color: #E1444499;
}
</style>
