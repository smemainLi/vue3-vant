import { request } from '@/config/request';
import { setStore, getStore } from '@/config/utils';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  /**
   * 获取分类导购信息
   */
  classifiedGuide: ({ commit }, data) => { return request('/wx/member/guide/classifiedguide/index', data) },
  /**
   * 获取店铺详情
   */
  storeDetail: ({ commit }, data) => { return request('/wx/member/storeDiscount/store/storeDetail', data) },
  /**
   * 修改对店铺的关注
   */
  updateFocus: ({ commit }, data) => { return request('/wx/member/storeDiscount/store/updateFocus', data) },
};

export default {
  state,
  getters,
  mutations,
  actions
}