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
    // 首页
    { path: "/", name: "index", meta: { title: '主页面' }, component: routerPath.index },

    // 积分停车
    { path: "/parking/index", name: "parking", meta: { title: '停车缴费' }, component: routerPath.parking },
    { path: "/parking/parkingFee", name: "parkingFee", meta: { title: '支付停车缴费' }, component: routerPath.parkingFee },
    { path: "/parking/successDeduct", name: "successDeduct", meta: { title: '积分抵扣成功' }, component: routerPath.successDeduct },
    { path: "/parking/paymentRecord", name: "paymentRecord", meta: { title: '缴费记录' }, component: routerPath.paymentRecord },

    // 免费wifi
    { path: "/wifi/index", name: "wifi", meta: { title: '免费wifi' }, component: routerPath.wifi },

    // 找商家
    { path: "/guide/index", name: "guide", meta: { title: '找商家' }, component: routerPath.guide },

    // 抢优惠
    { path: "/offer/index", name: "offer", meta: { title: '抢优惠' }, component: routerPath.offer },

    // AR
    { path: "/ar/index", name: "ar", meta: { title: 'AR红包' }, component: routerPath.ar },

    // 我的券包
    { path: "/coupon/index", name: "coupon", meta: { title: '我的券包' }, component: routerPath.coupon },
    { path: "/coupon/allCoupon", name: "allCoupon", meta: { title: '优惠券' }, component: routerPath.allCoupon },
    { path: "/coupon/expire", name: "expire", meta: { title: '优惠券' }, component: routerPath.expire },
    { path: "/coupon/use", name: "use", meta: { title: '优惠券' }, component: routerPath.use },
    { path: "/coupon/waitUse", name: "waitUse", meta: { title: '优惠券' }, component: routerPath.waitUse },
    { path: "/coupon/allCashCoupon", name: "allCashCoupon", meta: { title: '代金券' }, component: routerPath.allCashCoupon },
    { path: "/coupon/cashCouponUse", name: "cashCouponUse", meta: { title: '代金券' }, component: routerPath.cashCouponUse },
    { path: "/coupon/cashCouponWaitUse", name: "cashCouponWaitUse", meta: { title: '代金券' }, component: routerPath.cashCouponWaitUse },
    { path: "/coupon/cashCouponExpire", name: "cashCouponExpire", meta: { title: '代金券' }, component: routerPath.cashCouponExpire },
    { path: "/coupon/exchangeVoucherIndex", name: "exchangeVoucherIndex", meta: { title: '兑换券' }, component: routerPath.exchangeVoucherIndex },
    { path: "/coupon/exchangeVoucherWaitUse", name: "exchangeVoucherWaitUse", meta: { title: '兑换券' }, component: routerPath.exchangeVoucherWaitUse },
    { path: "/coupon/exchangeVoucherUse", name: "exchangeVoucherUse", meta: { title: '兑换券' }, component: routerPath.exchangeVoucherUse },
    { path: "/coupon/exchangeVoucherExpire", name: "exchangeVoucherExpire", meta: { title: '兑换券' }, component: routerPath.exchangeVoucherExpire },
    { path: "/redeem/index", name: "redeem", meta: { title: '积分兑换' }, component: routerPath.redeem },

    // 赚积分
    { path: "/earn/index", name: "earn", meta: { title: '赚积分' }, component: routerPath.earn },

    // 会员信息
    { path: "/member/index", name: "member", meta: { title: '会员信息' }, component: routerPath.member },

    // 账号登录
    { path: "/login", name: "login", meta: { title: '账号登录' }, component: routerPath.login }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  /* isLogin().then(res => {
    if (!res.data.login && to.path !== "/login" && to.path !== "/") next({ path: "/login" })
  })

  // 微信授权
  if (!getCookie('qi_openid')) {
    getAuthorizeUrl(to.path).then(res => {
      const r = res;
      console.log(res);
      location.href = res.data.authorizeUrl;
    })
  } */

  // sdk认证
  // ......

  next();
})

export default router;

