import { request } from '@/config/request';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  // 兑换积分首页展示
  redeemIndex({ commit }) {
    return request("/wx/member/integralExchange/homePage")
  },
  // 游戏币积分兑换
  gameExchange({ commit }, count) {
    return request("/wx/member/integralExchange/homePage/gameExchange", count)
  },
  // 积分商品兑换
  integralGoodsExchange({ commit }, id) {
    return request("/wx/member/integralExchange/homePage/integralGoodsExchange", id)
  },
  /**
   * 积分明细
   */
  integralDetail: ({ commit }, data) => { return request('/wx/member/integralExchange/integralDetail', data) },
}

export default {
  state,
  getters,
  mutations,
  actions
}