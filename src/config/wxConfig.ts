import Vue from "vue";
import wx from "weixin-js-sdk";

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
      desc: data.desc,
      link: data.link,
      imgUrl: data.imgUrl,
      success: function () {
        //设置成功
      }
    });
  }
}

export const wxShare = new share();