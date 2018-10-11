import Vue from "vue";
import Router from "vue-router";
import * as routerPath from '@/router/router-path';
import { isLogin } from '../service/getData'


Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "index", meta: { title: '主页面' }, component: routerPath.index },
    { path: "/parking/index", name: "parking", meta: { title: '积分停车' }, component: routerPath.parking },
    { path: "/wifi/index", name: "wifi", meta: { title: '免费wifi' }, component: routerPath.wifi },
    { path: "/guide/index", name: "guide", meta: { title: '找商家' }, component: routerPath.guide },
    { path: "/offer/index", name: "offer", meta: { title: '抢优惠' }, component: routerPath.offer },
    { path: "/ar/index", name: "ar", meta: { title: 'AR红包' }, component: routerPath.ar },
    { path: "/coupon/index", name: "coupon", meta: { title: '我的券包' }, component: routerPath.coupon },
    { path: "/redeem/index", name: "redeem", meta: { title: '积分兑换' }, component: routerPath.redeem },
    { path: "/earn/index", name: "earn", meta: { title: '赚积分' }, component: routerPath.earn },
    { path: "/member/index", name: "member", meta: { title: '会员信息' }, component: routerPath.member },
    { path: "/member/login", name: "login", meta: { title: '登录' }, component: routerPath.login }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  /* isLogin().then(res => {
    if (!res.data.login && to.path !== "/login" && to.path !== "/") next({ path: "/login" })
    next()
  }) */
  next();
  //后续微信授权
  //......

  //sdk认证
  //......
})

export default router;