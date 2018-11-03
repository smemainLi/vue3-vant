import fetch from "./fetch";

export async function request(url, data: any = {}) {
  // 请求数据打印出来
  console.log('%c 发起请求 =====>', 'color: #4CAF50; font-weight: bold', { url, data })
  return await fetch(url, data, "POST").then(res => {
    // 打印返回来的数据
    console.log('%c 返回来的数据 <=====', 'color: #4CAF50; font-weight: bold', res)
    switch (res.status) {
      case 200:
        return res
      case 404:
        throw "没有该页面"
      default:
        //传参或者其他的错误原因，直接返回错误message（非200和404，比如没登陆之类的当错误来处理） 
        // console.log('%c 错误 =====>','color: #EC6060; font-weight: bold', res)
        throw res.message    //如果不为200就为错误，就直接抛出一个错误
    }
  }).catch(err => {
    // 网络原因就直接返回网络错误（非200）
    /* console.log('%c 网络或者服务器错误 =====>', 'color: #EC6060; font-weight: bold', err) */
    throw `网络错误: ${err}`
  })
}
