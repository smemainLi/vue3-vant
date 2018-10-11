import fetch from "../config/fetch";

export const codePic = () => fetch('/wx/getCodePic', {}, "POST");
export const isLogin = () => fetch('/wx/isLogin', {}, "POST");
export const getAuthorizeUrl = () => fetch('/wx/user/account/getAuthorizeUrl', {}, "POST");
export const login = (account: any, pwd: any) => fetch('/wx/user/account/login', { account, pwd }, "POST");
