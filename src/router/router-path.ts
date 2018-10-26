// 首页
export const index = (r: any) => require.ensure([], () => r(require('../views/index.vue')), e => console.log(e), 'index')

// 积分停车
export const parking = (r: any) => require.ensure([], () => r(require('../views/parking/index.vue')), e => console.log(e), 'parking')
export const parkingFee = (r: any) => require.ensure([], () => r(require('../views/parking/parkingFee.vue')), e => console.log(e), 'parkingFee')
export const successDeduct = (r: any) => require.ensure([], () => r(require('../views/parking/successDeduct.vue')), e => console.log(e), 'successDeduct')
export const paymentRecord = (r: any) => require.ensure([], () => r(require('../views/parking/paymentRecord.vue')), e => console.log(e), 'paymentRecord')

// 免费wifi
export const wifi = (r: any) => require.ensure([], () => r(require('../views/wifi/index.vue')), e => console.log(e), 'wifi')

// 找商家
export const guide = (r: any) => require.ensure([], () => r(require('../views/guide/index.vue')), e => console.log(e), 'index')
export const detailPage = (r: any) => require.ensure([], () => r(require('../views/guide/detailPage.vue')), e => console.log(e), 'detailPage')

// 抢优惠
export const offer = (r: any) => require.ensure([], () => r(require('../views/offer/index.vue')), e => console.log(e), 'offer')

// AR
export const ar = (r: any) => require.ensure([], () => r(require('../views/ar/index.vue')), e => console.log(e), 'ar')

// 我的券包
export const coupon = (r: any) => require.ensure([], () => r(require('@/views/coupon/index.vue')), e => console.log(e), 'coupon')
export const allCoupon = (r: any) => require.ensure([], () => r(require('@/views/coupon/coupon/allCoupon.vue')), e => console.log(e), 'allCoupon')
export const expire = (r: any) => require.ensure([], () => r(require('@/views/coupon/coupon/expire.vue')), e => console.log(e), 'expire')
export const use = (r: any) => require.ensure([], () => r(require('@/views/coupon/coupon/alreadyUse.vue')), e => console.log(e), 'alreadyUse')
export const waitUse = (r: any) => require.ensure([], () => r(require('@/views/coupon/coupon/waitUse.vue')), e => console.log(e), 'waitUse')
export const allCashCoupon = (r: any) => require.ensure([], () => r(require('@/views/coupon/cashCoupon/allCashCoupon.vue')), e => console.log(e), 'allCashCoupon')
export const cashCouponUse = (r: any) => require.ensure([], () => r(require('@/views/coupon/cashCoupon/cashCouponUse.vue')), e => console.log(e), 'cashCouponUse')
export const cashCouponWaitUse = (r: any) => require.ensure([], () => r(require('@/views/coupon/cashCoupon/cashCouponWaitUse.vue')), e => console.log(e), 'cashCouponWaitUse')
export const cashCouponExpire = (r: any) => require.ensure([], () => r(require('@/views/coupon/cashCoupon/cashCouponExpire.vue')), e => console.log(e), 'cashCouponExpire')
export const exchangeVoucherIndex = (r: any) => require.ensure([], () => r(require('@/views/coupon/exchangeVoucher/exchangeVoucherIndex.vue')), e => console.log(e), 'exchangeVoucherIndex')
export const exchangeVoucherWaitUse = (r: any) => require.ensure([], () => r(require('@/views/coupon/exchangeVoucher/exchangeVoucherWaitUse.vue')), e => console.log(e), 'exchangeVoucherWaitUse')
export const exchangeVoucherUse = (r: any) => require.ensure([], () => r(require('@/views/coupon/exchangeVoucher/exchangeVoucherUse.vue')), e => console.log(e), 'exchangeVoucherUse')
export const exchangeVoucherExpire = (r: any) => require.ensure([], () => r(require('@/views/coupon/exchangeVoucher/exchangeVoucherExpire.vue')), e => console.log(e), 'exchangeVoucherExpire')

// 积分兑换
export const redeem = (r: any) => require.ensure([], () => r(require('../views/redeem/index.vue')), e => console.log(e), 'redeem')
export const integralDetail = (r: any) => require.ensure([], () => r(require('../views/redeem/integralDetail.vue')), e => console.log(e), 'integralDetail')

// 赚积分
export const earn = (r: any) => require.ensure([], () => r(require('../views/earn/index.vue')), e => console.log(e), 'earn')

// 会员信息
export const member = (r: any) => require.ensure([], () => r(require('../views/member/index.vue')), e => console.log(e), 'member')
export const openMember = (r: any) => require.ensure([], () => r(require('../views/member/openMember.vue')), e => console.log(e), 'openMember')
export const memberRank = (r: any) => require.ensure([], () => r(require('@/views/member/memberRank.vue')), e => console.log(e), 'memberRank')
export const selectData = (r: any) => require.ensure([], () => r(require('@/views/member/selectData.vue')), e => console.log(e), 'selectData')
export const cardNumber = (r: any) => require.ensure([], () => r(require('@/views/member/cardNumber.vue')), e => console.log(e), 'cardNumber')

// 账号登录
export const login = (r: any) => require.ensure([], () => r(require('../views/member/login.vue')), e => console.log(e), 'login')
export const forgetPassword = (r: any) => require.ensure([], () => r(require('../views/member/forgetPassword.vue')), e => console.log(e), 'forgetPassword')
export const revisePhoneNumber = (r: any) => require.ensure([], () => r(require('../views/member/revisePhoneNumber.vue')), e => console.log(e), 'revisePhoneNumber')
export const revisePassword = (r: any) => require.ensure([], () => r(require('../views/member/revisePassword.vue')), e => console.log(e), 'revisePassword')
