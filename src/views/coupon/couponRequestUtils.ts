import store from "../../store/index"
import Vue from "vue"
import { Toast } from 'vant'


class $Coupon {
  constructor(){}
/**
 * 
 * @param {string} methodName     action的方法名
 * @param {object} data           页数和页码
 * @param {boolean} isUse         按钮的控制
 * @param {boolean} isExchange    是否为兑换券（因为兑换券和代金券之类的数据处理方式不一样）
 * @returns {Array}               返回处理后的数组
 *  
 */
  // Method(methodName,data = { pageNo:1, pageSize:10 },isUse=false){
  Method(data){
    return store.dispatch(data.methodName, {pageNo:data.pageNo,pageSize:10})
    .then(res=>{
      let usedArray:Array<any>=[]
      if(res.data.list.length===0){
        data.status = true
        Toast.success('已全部加载')
        return {...data} 
      }
      usedArray = res.data.list.map(item=>{
        return data.isExchange? 
        {...item,
            mechantLogo:item.goodsImage,
            name:item.type===1? `${item.deductionIntegral}积分兑换${item.coinNum}个`
                                :`${item.deductionIntegral}积分兑换`,
            isUse:data.isUse,  
            mechantName:item.name
        }:{
          ...item,
          isUse:data.isUse         //按钮的控制
        }
      })
      data.pageNo+=1
      data.arr.push(...usedArray) 
      return {...data}
    })
    .catch(err=>{
      Toast.fail(err)
    })
  }

/**
 * 为了券中的有效期及时间 适用范围 有效期说明等情况展示
 * @param { Object } res   请求后的数据
 * @param { Array } arr    要传给子组件的数组
 */
  dataHandling(res,arr,bool=false):void{
    if(res.data.startDateStr!==""&&res.data.endDateStr&&res.data.startDateStr!==null){
      arr.push(
        {
          title:"有效期及时间",
          content:{
            titme:`${res.data.startDateStr}至${res.data.endDateStr}`
          }
        }
      )
    }

    if(res.data.usable&&res.data.usable!==""&&res.data.usable!==null){
      arr.push({
        title:"适用范围",
        content:{
          content:res.data.usable
        }
      })
    }

    if(res.data.useDateRemark&&res.data.useDateRemark!==""&&res.data.useDateRemark!==null){
      arr.push(
        {
          title:"有效期说明",
          content:{
            content:res.data.useDateRemark
          }
        }
      )
    }
    if(bool===true){
      arr.push(
        {
          title:"兑换地点",
          content:{
            content:"服务台"
          }
        }
      )
    }
  }

  

}
Vue.prototype.$Coupon = new $Coupon()



export default Vue