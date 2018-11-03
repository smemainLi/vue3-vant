import moment from 'moment'
import Vue from "vue"

/**
 * 格式化时间 time为时间，formatText为格式
 * @param { time:Date, formatText:string }
 * @return 
 */
Vue.prototype.$momentTime = function momentTime(time:Date,formatText:string = 'Y-M-D hh:mm:ss'):string{
  
  return moment(time).format(formatText)
}

class Utils{
  constructor(){

  }



}





export default Vue
