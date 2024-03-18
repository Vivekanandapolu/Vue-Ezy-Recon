<template>
  <h1>Dynamically addding the attributes for the elements</h1>
  <h3 v-bind="attrs">Header</h3>
  <h1>Dynamic Expressions</h1>
  <span v-bind="attrs">{{ false ? "YEs" : "No" }}</span>
  <div class="h1 mb-3" :id="`list-${id}`">
    Added a dynamic id using template literal syntax
  </div>

  <a :[anchor]="url" target="_blank">Dynamic Attribute added for this link </a>
  <br />
  <a v-bind="anchorAttrs">Variable consisting of the multiple attrs </a>
  <br />
  <div class="d-flex align-items-center gap-3 mt-3 w-auto m-auto">
    <button :disabled="count >= 10" class="btn btn-primary" @click="count++">
      +
    </button>
    <h3>value: {{ count }}</h3>
    <button :disabled="count == 0" class="btn btn-primary" @click="count--">
      -
    </button>
  </div>

  <button class="btn-secondary" @click="objects">
    Click to update the value
  </button>
  {{ obj }}

  <h3>Value: {{ value.value }}</h3>
  <h3>Name: {{ name }}</h3>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    let id = "vivek";
    let anchor = "href",
      url = "http://www.google.com";
    const attrs = {
      id: "header",
      class: "mb-3 text-primary",
    };

    const anchorAttrs = {
      href: "http://www.google.com",
      target: "_blank",
    };
    const obj = ref({
      value: "Hello",
      name: "Vivek",
    });
    const { value } = ref(obj);

    console.log(value.value);
    function objects() {
      obj.value.value == "Reddy"
        ? (obj.value.value = "Hello")
        : (obj.value.value = "Reddy");

      console.log(obj);
    }

    return {
      attrs,
      id,
      anchor,
      url,
      anchorAttrs,
      count,
      objects,
      obj,
      value,
      name,
    };
  },
  watch: {
    count(value) {
      value == 10 ? alert("Your Count Limit Exceeded") : null;
    },
  },
};
</script>
<style></style>
