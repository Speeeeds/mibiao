<script setup lang="ts">
import SlideVerify, { type SlideVerifyInstance } from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";

defineProps<{
    show: boolean;
}>();
const emits = defineEmits<{
    (event: 'finish', success: boolean): void
}>();

function handleClick(e: MouseEvent) {
    e.stopPropagation()
}
</script>

<template>
    <div @click="emits('finish', false)" v-if="show" class="modal">
        <div class="slide" @click="handleClick">
            <SlideVerify @success="emits('finish', true)" />
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    display: flex;
    align-items: center;
}

.slide {
    background-color: white;
    width: min-content;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0 auto;
}
</style>
