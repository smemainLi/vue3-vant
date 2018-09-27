import { baseUrl } from '@/config/env'

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase()
  url = baseUrl + url

  if (type === 'GET') {
    let dataStr = '' // 数据拼接字符串，把key和value拼接成'username=aaaa&password=123456&captcha_code=4926&'
    Object.keys(data).forEach(key => {
      /* console.log(key); */
      dataStr += key + '=' + (<any>data)[key] + '&'
    })
    /* console.log(dataStr); */

    if (dataStr !== '') {
      // dataStr.lastIndexOf('&')找到'&'最后出现的位置，接着截取从下标0到'&'所在位置即length-1这一串字符串
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      credentials: 'include', // 让浏览器发送包含凭据的请求(即使是跨域源)
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'force-cache'
    }

    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data) // 序列化之后的数据：{"username":"sdffsdf","password":"sdfsdf","captcha_code":"sadf"}
      })
    }

    try {
      const response = await fetch(url, <any>requestConfig)
      const responseJson = await response.json()
      console.log(responseJson)
      console.log('555555555555555555555')
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj: any
      if ((<any>window).XMLHttpRequest) {
        // 浏览器支持XMLHttpRequest对象作为一个窗口属性(所有普通的浏览器都是这样的，除了IE 5和IE 6之外)，那么代码可以调用XMLHttpRequest的构造器。
        requestObj = new XMLHttpRequest()
      } else {
        // 如果浏览器把XMLHttpRequest对象实现为一个ActiveXObject对象(就像在IE 5和IE 6一样)，那么代码可以使用ActiveXObject的构造器
        requestObj = new ActiveXObject('Microsoft.XMLHTTP')
      }

      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }

      requestObj.open(type, url, true) // XMLHttpRequest.open(method, url, async, user, password),user和password默认为null
      requestObj.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
      ) // 发送合适的请求头信息
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        // 请求结束后，在此处写处理代码
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
