<script setup lang="ts">
import { useAssetsStore, type Domain } from '@/stores/assets'
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref, type Ref } from 'vue';

const { domains } = storeToRefs(useAssetsStore())

const domain: Ref<Domain | undefined> = ref(undefined);
// domain.value = domains.value.find((d: Domain) => d.domain === route.params.domain);
</script>

<template>
  <div class="asset max-w-xl m-auto flex items-center	justify-center">
    <div class="border-4 p-6 border-white rounded-xl">
      <p class="text-4xl font-black text-white">The domain name</p>
      <p class="text-9xl font-black">
        {{ domain?.domain }}
      </p>
      <p class="text-4xl text-right font-black text-white">is owned by naiba</p>
      <div>
        <img v-if="domain?.image" :src="domain.image" :alt="domain.domain + ' - ' + domain.description" />
        <div class="align-middle" v-else>{{ domain?.domain[0].toUpperCase() }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset {
  min-height: 30rem;
}
</style>
