import wx from 'weixin-js-sdk'

class wxMethods{
  constructor(){ }

  /**
   * 
   * @param {Object} data {title,link,imgUrl}
   * 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
   */
  updateTimelineShareData(data){
    wx.updateTimelineShareData({ 
      title: data.title,     // 分享标题
      link: data.link,       // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl,   // 分享图标
      success: function () {
        // 设置成功
      }
    });
  }

  /**
   * 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
   * @param { Object } data 
   */

  updateAppMessageShareData(data){
    wx.updateAppMessageShareData({ 
      title: data.title,    // 分享标题
      desc: data.desc,      // 分享描述
      link: data.link,      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl,  // 分享图标
      success: function () {
        // 设置成功
      }
    }
  )}
}

export const wxMethod = new wxMethods()