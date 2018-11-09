import { request } from "@/config/request"

const state = {
}


const mutations = {
}

const actions = {
// 优惠券待使用列表
  couponNotUsed({ commit },data){
    return request('/wx/member/center/coupon/notUsed', { pageNo:data.pageNo, pageSize:10 })
  },
// 优惠券已使用列表
  couponUsed({commit},data){
    return request("/wx/member/center/coupon/used", { pageNo:data.pageNo, pageSize:10 })
  },
// 优惠券过期列表
  couponExpired({commit},data){
    return request("/wx/member/center/coupon/expired", { pageNo:data.pageNo, pageSize:10 })
  },
// 优惠券待使用和已使用 已过期详情
  couponDetail({ commit }, id){
    return request("/wx/member/center/coupon/detail",id)
  },

  
// 代金券未使用列表 
  voucherNotUsed({ commit }, data){
    return request("/wx/member/center/voucher/notUsed",{ pageNo:data.pageNo, pageSize:10 })
  },
// 代金券已使用
  voucherUsed({ commit }, data){
    return request("/wx/member/center/voucher/used",{ pageNo:data.pageNo, pageSize:10 })
  },
// 代金券已过期
  voucherExpired({ commit }, data){
    return request("/wx/member/center/voucher/expired",{ pageNo:data.pageNo, pageSize:10 })
  },
// 代金券待使用，已使用，已过期详情
  voucherDetail({ commit }, id){
    return request("/wx/member/center/voucher/detail",id)
  },


// 兑换券待兑换列表
  integralExchangeNotUsed({ commit }, data){
    return request("/wx/member/center/integralExchange/notUsed", { pageNo:data.pageNo, pageSize:10 })
  },
// 兑换券已兑换列表
  integralExchangeUsed({ commit }, data){
    return request("/wx/member/center/integralExchange/used", { pageNo:data.pageNo, pageSize:10 })
  },
// 兑换券已过期列表
  integralExchangeExpired({ commit }, data){
    return request("/wx/member/center/integralExchange/expired", { pageNo:data.pageNo, pageSize:10 })
  },
// 兑换券，未兑换，已兑换，已过期详情
  integralExchangeDetail({ commit }, id){
    return request("/wx/member/center/integralExchange/detail", id)
  }
}



export default {
  actions,
  mutations,
  state
}