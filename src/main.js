import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import mdi from "@mdi/js";
import axios from "axios";
import moment from "moment";
import devicon from "devicon";
import echarts from "echarts";
import VCharts from "v-charts";
import VeRadar from "v-charts/lib/radar.common";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
Vue.config.productionTip = false;

Vue.use(VCharts);
Vue.use(VueRouter);
const routes = [
  {
    path: "/",

    component: Home
  },
  {
    path: "/perfil",

    component: Profile
  }
];
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

const router = new VueRouter({
  routes,
  mode: "hash"
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
