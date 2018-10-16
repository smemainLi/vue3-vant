import Vue from "vue";
import Router from "vue-router";
import * as routerPath from '@/router/router-path';
import { isLogin, getAuthorizeUrl } from '@/service/getData'
import { getCookie } from '@/config/utils'


Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "index", meta: { title: '主页面' }, component: routerPath.index },
    { path: "/parking/index", name: "parking", meta: { title: '停车缴费' }, component: routerPath.parking },
    { path: "/wifi/index", name: "wifi", meta: { title: '免费wifi' }, component: routerPath.wifi },
    { path: "/guide/index", name: "guide", meta: { title: '找商家' }, component: routerPath.guide },
    { path: "/offer/index", name: "offer", meta: { title: '抢优惠' }, component: routerPath.offer },
    { path: "/ar/index", name: "ar", meta: { title: 'AR红包' }, component: routerPath.ar },
    { path: "/coupon/index", name: "coupon", meta: { title: '我的券包' }, component: routerPath.coupon },
    { path: "/coupon/allCoupon", name: "allCoupon", meta: { title: '优惠券' }, component: routerPath.allCoupon },
    { path: "/redeem/index", name: "redeem", meta: { title: '积分兑换' }, component: routerPath.redeem },
    { path: "/earn/index", name: "earn", meta: { title: '赚积分' }, component: routerPath.earn },
    { path: "/member/index", name: "member", meta: { title: '会员信息' }, component: routerPath.member },
    { path: "/login", name: "login", meta: { title: '账号登录' }, component: routerPath.login }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  /* isLogin().then(res => {
    if (!res.data.login && to.path !== "/login" && to.path !== "/") next({ path: "/login" })
  })

  //微信授权
  if (!getCookie('qi_openid')) {
    getAuthorizeUrl(to.path).then(res => {
      const r = res;
      console.log(res);
      location.href = res.data.authorizeUrl;
    })
  } */

  //sdk认证
  //......

  next();
})

export default router;

