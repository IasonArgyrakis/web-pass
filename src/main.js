import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import vuetify from "./plugins/vuetify";
import { Plugin } from "vue-fragment";

Vue.config.productionTip = false;

Vue.use(Plugin);

new Vue({
  store: store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
