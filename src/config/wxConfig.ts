import wx from "weixin-js-sdk";
import { gotoShare } from "@/service/getData";
import { setStore } from "@/config/utils";

class share {
  constructor() {
  }
  shareWithFriends(data: any) {
    wx.updateAppMessageShareData({
      title: data.title,
      desc: data.desc,
      link: data.link,
      imgUrl: data.imgUrl,
      success: function () {
        //设置成功
      }
    });
  }
  shareCircleFriends(data: any) {
    wx.updateTimelineShareData({
      title: data.title,
      link: data.link,
      imgUrl: data.imgUrl,
      success: function () {
        //设置成功
      }
    });
  }
  shareMenuShareTimeline(data: any) {
    //分享朋友圈
    wx.onMenuShareTimeline({
      title: data.title, // 分享标题
      link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      success: function () {
        // 用户点击了分享后执行的回调函数
        console.log(data.toPath);
        console.log(data.toPath.indexOf("/guide/detailPage"));
        if (data.toPath.indexOf("/guide/detailPage") !== -1) {
          gotoShare().then((res) => {
            console.log(res.data.message);
            setStore("winPoints", true);
          }).catch((err) => {
            setStore("winPoints", false);
            console.log(err);
          });
        }
      }
    })
  }
  shareMenuShareAppMessage(data: any) {
    //分享给朋友
    wx.onMenuShareAppMessage({
      title: data.title, // 分享标题
      desc: data.desc, // 分享描述
      link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: data.imgUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户点击了分享后执行的回调函数
      }
    });
  }

}

export const wxShare = new share();