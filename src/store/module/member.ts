import { request } from "@/config/request"

const state = {
  // isLogin:false
  userInfo: {
    isLogin: false,

  }
}

const getters = {
}

const mutations = {
  isLogins(state, data) {
    state.userInfo.isLogin = data.isLogin
  }
}

const actions = {
  // 忘了密码
  forgetPassword({ commit }, data) {
    return request("/wx/member/account/forgetPwd", data)
  },
  //获取图形验证码 
  getGraphCode({ commit }) {
    return request("/wx/member/account/flashVCode")
  },
  // 获取短信验证码
  getSmsCode({ commit }, data) {
    return request("/wx/member/account/flashSmsCode", data)
  },
  // 开通会员卡
  openMember({ commit }, data) {
    return request("/wx/member/account/register", data)
  },
  //登录验证
  authLogin({ commit }, data) {
    return request("/wx/member/account/auth/login", data)
  },
  // 会员中心首页展示
  memberIndexInfo({ commit }) {
    return request("/wx/member/memberInfo/homePage")
  },
  // 获取会员二维码
  getMemberQrCode() {
    return request("/wx/member/account/qrCode")
  },
  // 性别编辑
  setSex({ commit }, data) {
    return request("/wx/member/memberInfo/myInfo/gender/edit", data)
  },
  // 出生年月编辑
  setBirthdate({ commit }, data) {
    return request("/wx/member/memberInfo/myInfo/birthdate/edit", data)
  },
  // 我的资料（性别，出生年月日，车牌号）
  datumInfo({ commit }) {
    return request("/wx/member/memberInfo/myInfo/homePage")
  },
  //编辑车牌号码
  carNumEdit({ commit }, data) {
    return request("/wx/member/memberInfo/myInfo/carNum/edit", data)
  },
  // 退出登陆
  loginOut({ commit }) {
    return request("/wx/member/account/loginOut")
  },
  //修改手机号码
  changePhone({ commit }, data) {
    return request("/wx/member/account/changePhone", data)
  },
  // 修改密码
  changePwd({ commit }, data) {
    return request("/wx/member/account/changePwd", data)
  },
  // 会员权益
  memberRights({ commit }) {
    return request("/wx/member/memberInfo/memberLevel/memberRights")
  },
  // 会员等级首页展示
  memberIndex({ commit }, data = { type: 2 }) {
    return request("/wx/member/memberInfo/memberLevel/index", data)
  },
  // 用户协议（开通会员卡）
  feesDesc({ commit }, data) {
    return request("/wx/member/parking/feesDesc", data)
  }

}



export default {
  actions,
  mutations,
  state,
  getters
}