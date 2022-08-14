<script setup lang="ts">
import { useAssetsStore } from '@/stores/assets'
import { storeToRefs } from 'pinia'
import { RouterLink } from "vue-router"
import DomainCard from '@/components/DomainCard.vue'

const { domains } = storeToRefs(useAssetsStore())
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 w-fit mt-10 mb-10">
    <RouterLink v-for="d in domains" :to="'/assets/' + d.domain.toLowerCase()">
      <DomainCard :domain="d" />
    </RouterLink>
  </div>
</template>
