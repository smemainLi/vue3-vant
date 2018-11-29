import moment from 'moment'
import Vue from "vue"
import { Toast } from 'vant';

/**
 * 格式化时间 time为时间，formatText为格式
 * @param { time:Date, formatText:string }
 * @return 
 */
Vue.prototype.$momentTime = function momentTime(time: Date, formatText: string = 'Y-M-D hh:mm:ss'): string {

  return moment(time).format(formatText)
}

// 滑动到底部加载
class $ListenScroll {
  scrollMounted: any
  constructor(callback) {
    this.scrollMounted = () => {
      // scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = (<any>document.documentElement).scrollTop || document.body.scrollTop;
      // scrollHeight是滚动条的总高度
      let scrollHeight = (<any>document.documentElement).scrollHeight || document.body.scrollHeight;
      // windowHeight是可视区的高度
      let windowHeight = (<any>document.documentElement).clientHeight || document.body.clientHeight;
      if (scrollTop + windowHeight === scrollHeight) {
        callback()
      }
    }
  }
  // 监听scroll
  monitoringScroll() {
    window.addEventListener('scroll', this.scrollMounted)
  }
  // 移除监听事件，并要在destroyed钩子清除
  removeScroll() {
    window.removeEventListener("scroll", this.scrollMounted)
  }
}

// 在使用的组件中，new this.$Utils()一个实例并传入一个触发的方法
Vue.prototype.$ListenScroll = $ListenScroll

/**
 * 二次封装toast
 * @param { string } text       toast的提示内容
 * @param { number } duration   持续展示 toast
 * 
 */
function pottingTosts(message: string = "发送中", duration: number = 0): void {
  Toast.loading({
    duration: duration,       // 持续展示 toast
    forbidClick: true,        // 禁用背景点击
    loadingType: 'spinner',
    message: message
  })
}

Vue.prototype.$pottingTosts = pottingTosts

export default Vue
