<script setup lang="ts">
import { useAssetsStore } from '@/stores/assets'
import { storeToRefs } from 'pinia'
import { RouterLink } from "vue-router"
import DomainCard from '@/components/DomainCard.vue'

const { domains } = storeToRefs(useAssetsStore())
</script>

<template>
  <div class="grid grid-cols-4 gap-0 w-fit">
    <RouterLink v-for="d in domains" :to="'/assets/' + d.domain">
      <DomainCard :domain="d" />
    </RouterLink>
  </div>
</template>
