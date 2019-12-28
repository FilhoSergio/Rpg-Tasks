import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "@/views/Profile.vue";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
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

  // {
  //   path: "/login",
  //   name: "login",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Login.vue")
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: "",
  routes,
  linkActiveClass: "active"
});

// router gards
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   //auth route is authenticated
//   next();
// });

// router.afterEach((to, from) => {
//   NProgress.done();
// });

export default router;
