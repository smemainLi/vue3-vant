/**
 * 设置localStorage
 * @param name 
 * @param content 
 */
export const setStore = (name: any, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 * @param name 
 */
export const getStore = (name: any) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 移除localStorage
 * @param name 
 */
export const removeStore = (name: any) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 获取cookie
 * @param cname 
 */
export const getCookie = (cname: any) => {
  /* if (document.cookie.length > 0) {
    let cstart = document.cookie.indexOf(cname + "=");
    if (cstart !== -1) {
      cstart = cstart + cname.length + 1;
      let cend = document.cookie.indexOf(";", cstart);
      if (cend === -1) cend = document.cookie.length;
      return decodeURI(document.cookie.substring(cstart, cend));
    }
  }
  return ""; */
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}