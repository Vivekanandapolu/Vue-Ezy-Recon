<template>
  <h1 class="text-decoration-underline">All Concepts</h1>
  <div>
    <h2>V-For:</h2>
    <h6 v-for="(item, index) in data" :key="index" :id="index">{{ item }}</h6>
    <h2>V-bind:</h2>
    <a :href="url" target="_blank">Google Link </a>
    <h2>V-Model:</h2>
    <input type="text" class="form-control" />
  </div>
</template>
<script setup>
const data = ["Apple", "Orange", "Grapes"];
const url = "https://www.google.com";
</script>
<style></style>
