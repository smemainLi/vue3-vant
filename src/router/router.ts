import Vue from "vue";
import Router from "vue-router";
import wx from 'weixin-js-sdk';
import * as routerPath from '@/router/router-path';
import { isLogin, getAuthorizeUrl, getJsSdkConfig } from '@/service/getData'
import { getCookie } from '@/config/utils'
import { Toast } from 'vant';


Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 首页
    { path: "/", name: "index", meta: { title: '主页面' }, component: routerPath.index },

    // 积分停车
    { path: "/parking/index", name: "parking", meta: { title: '积分停车' }, component: routerPath.parking },
    { path: "/parking/parkingFee", name: "parkingFee", meta: { title: '积分停车' }, component: routerPath.parkingFee },
    { path: "/parking/successDeduct", name: "successDeduct", meta: { title: '积分抵扣成功' }, component: routerPath.successDeduct },
    { path: "/parking/paymentRecord", name: "paymentRecord", meta: { title: '缴费记录' }, component: routerPath.paymentRecord },

    // 免费wifi
    { path: "/wifi/index", name: "wifi", meta: { title: '免费wifi' }, component: routerPath.wifi },

    // 找商家
    { path: "/guide/index", name: "guide", meta: { title: '找商家' }, component: routerPath.guide },
    { path: "/guide/detailPage", name: "detailPage", meta: { title: '店铺详情' }, component: routerPath.detailPage },

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

    // 积分兑换
    { path: "/redeem/index", name: "redeem", meta: { title: '积分兑换' }, component: routerPath.redeem },
    { path: "/redeem/integralDetail", name: "integralDetail", meta: { title: '积分明细' }, component: routerPath.integralDetail },

    // 赚积分
    { path: "/earn/index", name: "earn", meta: { title: '赚积分' }, component: routerPath.earn },

    // 会员信息
    { path: "/member/index", name: "member", meta: { title: '会员信息' }, component: routerPath.member },
    { path: "/member/openMember", name: "openMember", meta: { title: '开通会员卡' }, component: routerPath.openMember },
    { path: "/member/memberRank", name: "memberRank", meta: { title: '会员等级' }, component: routerPath.memberRank },
    { path: "/member/selectData", name: "selectData", meta: { title: '我的资料' }, component: routerPath.selectData },
    { path: "/member/carNumber", name: "carNumber", meta: { title: '车牌号' }, component: routerPath.carNumber },

    // 账号登录
    { path: "/login", name: "login", meta: { title: '账号登录' }, component: routerPath.login },
    { path: "/forgetPassword", name: "forgetPassword", meta: { title: '忘记密码' }, component: routerPath.forgetPassword },
    { path: "/revisePhoneNumber", name: "revisePhoneNumber", meta: { title: '修改手机号码' }, component: routerPath.revisePhoneNumber },
    { path: "/revisePassword", name: "revisePassword", meta: { title: '修改密码' }, component: routerPath.revisePassword }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  Toast.clear()  //关闭提示框
  //判断是否登录过
  isLogin().then(res => {
    if (!res.data.isLogin && to.path !== "/login" && to.path !== "/") next({ path: "/login" })
  })

  /**
   * 判断微信是否授权，如果未授权，请求授权
   * 如果已经授权，可以请求sdk认证
   */
  /* if (!getCookie('qi_openid')) {
    // 微信授权
    getAuthorizeUrl(to.path).then(res => {
      location.href = res.data.authorizeUrl;
    })
  } else {
    // sdk认证
    getJsSdkConfig(to.path).then(res => {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appid, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.noncestr, // 必填，生成签名的随机串
        signature: res.data.sign,// 必填，签名
        jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
      });
    })
  } */


  next();
})

export default router;

