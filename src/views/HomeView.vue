<script setup lang="ts">
import { useAssetsStore } from '@/stores/assets'
import { storeToRefs } from 'pinia'
import DomainCard from '@/components/DomainCard.vue'

const { domains } = storeToRefs(useAssetsStore())
</script>

<template>
  <div class="grid grid-cols-4 gap-0 w-fit">
    <DomainCard v-for="d in domains" :domain="d" />
  </div>
</template>
