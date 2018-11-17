import { request } from "@/config/request"

export const isLogin = () => request('/wx/member/account/isLogin');
export const getAuthorizeUrlSuper = (pageUri) => request('/wx/member/account/auth/getAuthorizeUrlSuper', { pageUri: pageUri });
export const getJsSdkConfig = (url) => request('/wx/user/account/getJsSdkConfig', { url: url });
export const gotoShare = () => request('/wx/member/earnIntegral/gotoShare');