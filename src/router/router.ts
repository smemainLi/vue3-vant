import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login/login.vue";

import { isLogin } from '@/service/getData'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  // isLogin().then(res => {
  //   // !res.data.login && to.path !== "/login" && next({ path: "/login" })
  //   if (!res.data.login && to.path !== "/login") next({ path: "/login" })
  //   next()
  // })
  next();
  //后续微信授权
  //......

  //sdk认证
  //......
})

export default router;