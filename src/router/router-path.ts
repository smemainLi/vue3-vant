// 首页
export const index = (r: any) => require.ensure([], () => r(require('../views/index.vue')), e => console.log(e), 'index')

// 积分停车
export const parking = (r: any) => require.ensure([], () => r(require('../views/parking/index.vue')), e => console.log(e), 'parking')

// wifi
export const wifi = (r: any) => require.ensure([], () => r(require('../views/wifi/index.vue')), e => console.log(e), 'wifi')

// 找商家
export const guide = (r: any) => require.ensure([], () => r(require('../views/guide/index.vue')), e => console.log(e), 'index')

// 抢优惠
export const offer = (r: any) => require.ensure([], () => r(require('../views/offer/index.vue')), e => console.log(e), 'offer')

// AR
export const ar = (r: any) => require.ensure([], () => r(require('../views/ar/index.vue')), e => console.log(e), 'ar')

// 我的券包
export const coupon = (r: any) => require.ensure([], () => r(require('../views/coupon/index.vue')), e => console.log(e), 'coupon')
export const allCoupon = (r: any) => require.ensure([], () => r(require('../views/coupon/AllCoupon.vue')), e => console.log(e), 'allCoupon')

// 积分兑换
export const redeem = (r: any) => require.ensure([], () => r(require('../views/redeem/index.vue')), e => console.log(e), 'redeem')

// 赚积分
export const earn = (r: any) => require.ensure([], () => r(require('../views/earn/index.vue')), e => console.log(e), 'earn')

// 会员信息
export const member = (r: any) => require.ensure([], () => r(require('../views/member/index.vue')), e => console.log(e), 'member')
export const login = (r: any) => require.ensure([], () => r(require('../views/member/login.vue')), e => console.log(e), 'login')
