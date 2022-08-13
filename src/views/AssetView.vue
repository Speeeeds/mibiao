<script setup lang="ts">
import { useAssetsStore, type Domain } from '@/stores/assets'
import { storeToRefs } from 'pinia'
import FontAvatar from '@/components/FontAvatar.vue';
import { useRoute } from "vue-router";

const { domains } = storeToRefs(useAssetsStore())
const route = useRoute()

const domain = domains.value.find((d: Domain) => d.domain === route.params.domain);
if (!domain) {
  window.location.href = '/'
}
</script>

<template>
  <div class="asset m-auto flex items-center justify-center mb-20 mt-20">
    <div class="asset-domain border-4 p-6 border-white rounded-xl">
      <p class="text-3xl md:text-4xl font-black text-white">{{ $t('ui.the_domain_name') }}</p>
      <p class="text-5xl md:text-8xl xl:text-9xl font-black text-center mt-1 mb-1">
        {{ domain!.domain }}
      </p>
      <p class="text-3xl md:text-4xl text-right font-black text-white">{{ $t('ui.owned_by') }}</p>
      <div class="flex border-t-2 border-dashed mt-6 pt-6">
        <div>
          <img style="width: 10rem;height: 10rem;border-radius: 1rem;" v-if="domain!.image" :src="domain!.image"
            :alt="domain!.domain" />
          <FontAvatar :size="10" :word="domain!.domain[0]" v-else />
        </div>
        <div class="ml-6 text-3xl font-black self-center">
          {{ $t('description.' + domain!.domain.replaceAll('.', '_')) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset {
  min-height: 30rem;
}

.asset-domain {
  min-width: 17rem;
}

@media (min-width: 768px) {
  .asset-domain {
    min-width: 20rem;
  }
}

@media (min-width: 1024px) {
  .asset-domain {
    min-width: 40rem;
  }
}
</style>
