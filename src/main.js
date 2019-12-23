import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import mdi from '@mdi/js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  mdi,
  render: h => h(App)
}).$mount("#app");
