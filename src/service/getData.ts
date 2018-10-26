import fetch from "../config/fetch";

export const codePic = () => fetch('/wx/getCodePic', {}, "POST");
export const isLogin = () => fetch('/wx/member/account/isLogin', {}, "POST");
export const getAuthorizeUrl = (pageUri: any) => fetch('/wx/user/account/getAuthorizeUrl', { pageUri }, "POST");
export const login = (account: any, pwd: any) => fetch('/wx/member/account/auth/login', { account, pwd }, "POST");
