import { request } from '@/config/request';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  /**
   * 抢优惠获取商店优惠
   */
  storeDiscount: ({ commit }, data) => { return request('/wx/member/storeDiscount/homePage', data) },
  /**
   * 抢优惠券/代金券
   */
  rushQuan: ({ commit }, data) => { return request('/wx/member/storeDiscount/store/rushQuan', data) },
}

export default {
  state,
  getters,
  mutations,
  actions
}