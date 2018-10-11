import { baseUrl } from "./env";
import qs from 'qs'

export default async (
  url = "",
  data: any = {},
  type = "GET",
  method = "fetch"
) => {
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
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
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
        sendData = JSON.stringify(data);
      }
      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
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
