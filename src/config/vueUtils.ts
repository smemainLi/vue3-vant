import moment from 'moment'
import Vue from "vue"

/**
 * 格式化时间 time为时间，formatText为格式
 * @param { time:Date, formatText:string }
 * @return 
 */
Vue.prototype.$momentTime = function momentTime(time: Date, formatText: string = 'Y-M-D hh:mm:ss'): string {

  return moment(time).format(formatText)
}


class $ListenScroll{
  scrollMounted:any
  constructor(callback){
    this.scrollMounted = ()=>{
      // scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = (<any>document.documentElement).scrollTop||document.body.scrollTop;
      // scrollHeight是滚动条的总高度
      let scrollHeight = (<any>document.documentElement).scrollHeight||document.body.scrollHeight;
      // windowHeight是可视区的高度
      let windowHeight  = (<any>document.documentElement).clientHeight || document.body.clientHeight;
      if(scrollTop+windowHeight===scrollHeight){
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


/* class $StyleColor {
  private className: string;
  private classColor: string;
  constructor(className, classColor) {
    this.className = className;
    this.classColor = classColor;
  }
  public change(): any {
    return (<any>document).getElementsByClassName(`'${this.className}'`)[0].style.color = `'${this.classColor}'`;
  }
}
 */
Vue.prototype.$StyleColor = (className, classColor) => { return (<any>document).getElementsByClassName(`'${className}'`)[0].style.color = `'${classColor}'`; };


export default Vue
