import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import mdi from "@mdi/js";
import axios from "axios";
import moment from "moment";
import devicon from "devicon";
import echarts from "echarts";
import VCharts from "v-charts";
import VeRadar from "v-charts/lib/radar.common";
Vue.config.productionTip = false;

Vue.use(VCharts);

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

new Vue({
  router,
  store,
  vuetify,
  mdi,
  axios,
  devicon,
  moment,
  echarts,
  VCharts,
  VeRadar,
  render: h => h(App)
}).$mount("#app");
