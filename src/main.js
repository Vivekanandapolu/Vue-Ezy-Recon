// main.js
import $ from "jquery";
window.$ = window.jQuery = $;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
