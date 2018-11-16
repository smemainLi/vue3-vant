<template>
  <div class="member" v-show="showIndex">
    <!-- 会员信息头部 -->
    <dataTop :userInfo="userInfo" @showDialog="showDialog"></dataTop>

    <!-- 功能卡片tab 上-->
    <div class="center">
      <dataCard borderColor title="我的资料" :text="(userInfo.infoPerfect&&userInfo.infoPerfect.isFinish)? '':`完善即+${userInfo.infoPerfect? userInfo.infoPerfect.integral:''}积分`" component="selectData"></dataCard>
      <dataCard :title="userInfo.phone"  text="修改手机号码" component="revisePhoneNumber" :imgUrl="require('../../assets/image/member/phone.png')"></dataCard>
    </div>

    <!-- 功能卡片tab 下-->
    <div class="bottom">
      <dataCard borderColor title="修改密码" component="revisePassword" :imgUrl="require('../../assets/image/member/revise.png')"></dataCard>
      <dataCard title="联系我们" :imgUrl="require('../../assets/image/member/contact.png')"></dataCard>
    </div>


  <!-- 二维码弹出框 -->
    <memberIndexDialog :show="show" v-model="show"></memberIndexDialog>
  </div>
</template>

<script lang="ts">
import memberIndexDialog from "@/components/common/member/memberIndexDialog.vue"
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import dataTop from "@/components/common/member/dataTop.vue"
import dataCard from "@/components/common/member/dataCard.vue"
import bar from "@/components/common/member/bar.vue"
import { Action } from 'vuex-class'

@Component({components: {dataTop,dataCard,memberIndexDialog}})

export default class Member extends Vue {
  @Action('memberIndexInfo')   memberIndexInfo         // 首页数据

  userInfo:any={ }
  show:boolean=false;
  showIndex:Boolean=false;
  showDialog(showValue){
    this.show = showValue
  }


// 获取展示数据
  memberInfo(){
     this.memberIndexInfo().then(res=>{
      this.userInfo = res.data
      this.showIndex = true
    }).catch(err=>{
      this.$toast.fail(err);
    })
  }

  created(){
    this.memberInfo()
  }
}




</script>

<style lang="scss" scoped>
.member{
  height: calc(100%-100px);
  // overflow: scroll;
  .center{
    margin: 24px 0;
  }
}

</style>