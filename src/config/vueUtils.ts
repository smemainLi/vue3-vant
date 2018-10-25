import moment from 'moment'
import Vue from "vue"
Vue.prototype.$momentTime = function momentTime(time:Date,formatText:string = 'Y-M-D hh:mm:ss'):string{
  
  return moment(time).format(formatText)
}

export default Vue
