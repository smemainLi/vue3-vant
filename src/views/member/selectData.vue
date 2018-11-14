<template>
  <div class="select-data">
    <selectCard @sexMothed="sexMothed" @dateMothed="dateMothed" :carCode="carCode" :sex="sex" :birthdate="birthdate"></selectCard>
    <div class="btn" @click="outLogin">
      退出登陆
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator"
import selectCard from "../../components/common/member/selectCard.vue"
import { Action } from 'vuex-class'
import {request} from "../../config/request"
import fetch from "../../config/fetch";

@Component( { components: { selectCard } } )

export default class SelectData extends Vue {
  @Action('setSex')        setSex          //设置性别
  @Action('setBirthdate')  setBirthdate    //设置出生年月日
  @Action('datumInfo')     datumInfo       //我的资料信息
  @Action('loginOut')      loginOut        // 退出登陆

  carCode:string=""     //车牌号码
  birthdate:string=""  //出生年月日
  sex:string=""        //性别

//  设置性别
 sexMothed(sex:string){
  let data:any = {}
  data.gender = sex==="男"? 0:1
  this.setSex(data).then(res=>{
    this.$toast.success('设置成功')
  }).catch(err=>{
    this.$toast.fail({message:err,duration:950})
    let _this = this
    setTimeout(function(){
      _this.datumIndexInfo()
    },1000)
  })
 }

// 设置出生年月日
 dateMothed(date:string){
     this.setBirthdate({birthdateStr:this.$momentTime(date,'Y-MM-DD')}).then(res=>{
    this.$toast.success('设置成功')
  }).catch(err=>{
    this.$toast.fail({message:err,duration:1950})
    let _this = this
    setTimeout(function(){
      _this.datumIndexInfo()
    },1000)
  })
 }

// 页面展示数据
  datumIndexInfo():void{
    this.datumInfo().then(res=>{
      this.birthdate = res.data.birthdate
      this.sex = res.data.gender===0? "男":"女"
      this.carCode = res.data.carNum===null? "":res.data.carNum
    }).catch(err=>{
      this.$toast.fail({message:err,duration:950})
    })
  }

// 退出登陆
  outLogin(){
    this.loginOut().then(res=>{
      let _this = this
      this.$toast.success("成功退出");
      setTimeout(function(){
        _this.$router.push({name:"login"})
      },1000)
    }).catch(err=>{
      this.$toast.fail(err);
    })
  }

  created() {
    this.datumIndexInfo()
  }


}
</script>

<style lang="scss" scoped>
.select-data{
  .btn{
    height: 88px;
    line-height: 88px;
    width: 100%;
    text-align: center;
    background-color: $color-ff;
    margin-top: 23px;
    color:$color-35;
    font-size: $size36;
  }
}
</style>