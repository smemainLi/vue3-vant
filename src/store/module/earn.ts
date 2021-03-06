import { request } from "@/config/request"
import { exchangeVoucherIndex } from '@/router/router-path';

const state = {
}


const mutations = {
}

const actions = {
// 赚积分 -- 签到
  punchClock({ commit }){
    return request('/wx/member/earnIntegral/punchClock')
  },
//首页展示
  exchangeVoucherIndex({ commit }){
    return request("/wx/member/earnIntegral/index") 
  }
}



export default {
  actions,
  mutations,
  state
}