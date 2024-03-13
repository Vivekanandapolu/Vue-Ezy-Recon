<template>
  <h1>Approval Component</h1>
  <button class="btn" @click="count++">+</button>
  <h1>Squared VAlue:{{ squared }}</h1>
  <h1>Count VAlue:{{ count }}</h1>
</template>
<script setup>
import { ref, computed } from "vue";

const count = ref(0);

const squared = computed(() => count.value * count.value);
</script>
