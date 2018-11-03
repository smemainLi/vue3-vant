import { baseUrl } from "./env";
import qs from 'qs'
import { __await } from 'tslib';

export default async (url = "", data: any = {}, type = "GET", method = "fetch") => {
  type = type.toUpperCase();
  url = `${baseUrl}${url}`;
  if (type === "GET") {
    let dataStr = "";
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`;
    });
    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = `${url}?${dataStr}`;
      url = url + "?" + dataStr;
    }
  }

  /**
   * 判断浏览器是否支持对window.fetch的支持，如果支持，就采用fetch做请求
   */
  if (window.fetch && method === "fetch") {
    const requestConfig: any = {
      credentials: "include",
      method: type,
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "cors",
      cache: "force-cache"
    };
    if (type === "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: qs.stringify(data)
      });
    }

    try {
      async function resJson() {
        const response = await fetch(url, requestConfig);
        const resJson = await response.json().catch(() => { throw ('请求地址不存在') });
        return resJson;
      }
      return Promise.race([resJson(), new Promise((resolve, reject) => {
        setTimeout(() => { reject("请求超时") }, 3000)
      })]);
    } catch (error) {
      throw new Error(error);
    }

    /**
     * 如果浏览器不支持window.fetch，那采用XMLHttpRequest做请求
     */
  } else {
    return new Promise((resolve, reject) => {
      let requestObj: any;
      if ((<any>window).XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject("Microsoft.XMLHTTP");
      }
      let sendData = "";
      if (type === "POST") {
        sendData = qs.stringify(data);
      }
      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      requestObj.ontimeout = () => {
        console.error("请求超时");
      }
      requestObj.send(sendData);
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response;
            if (typeof obj != "object") {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};

async (data: any) => {

}