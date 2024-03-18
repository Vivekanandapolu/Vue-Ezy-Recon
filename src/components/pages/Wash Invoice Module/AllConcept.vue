<template>
  <h1 class="text-decoration-underline display-3">All Concepts</h1>
  <div>
    <h1 class="display-4 text-primary text-decoration-underline">Directives</h1>
    <h2>V-For:</h2>
    <h6 v-for="(item, index) in data" :key="index" :id="index">{{ item }}</h6>
    <h2>V-bind:</h2>
    <a :href="url" target="_blank">Google Link </a>

    <h1 class="text-decoration-underline">V-model, V-If, V-else:</h1>
    <h2 v-if="name != ''">V-Model value:{{ name }}</h2>
    <h2 v-else>No value in the Input Field</h2>
    <input type="text" class="form-control" v-model="name" />
    <h1 class="text-decoration-underline">V-Html</h1>
    <h5 v-html="htmlValue"></h5>
  </div>
</template>
<script setup>
import { ref } from "vue";

const data = ["Apple", "Orange", "Grapes"];
const url = "https://www.google.com";
let name = ref("");

const htmlValue = "<h2>Hi i am vivek From the script tag </h2>";
</script>
<style></style>
