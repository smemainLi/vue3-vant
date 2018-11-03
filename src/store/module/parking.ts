import { request } from '@/config/request'

const state = {}
const getters = {}
const mutations = {}
const actions = {
  /**
   * 缴费记录
   */
  parkingPayRecord: ({ commit }) => { return request("/wx/member/parking/payrecord") },

  /**
   * 获取车牌号码
   */
  queryPlateNumber: ({ commit }) => { return request("/wx/member/parking/homePage") },
}

export default {
  state,
  getters,
  mutations,
  actions
}