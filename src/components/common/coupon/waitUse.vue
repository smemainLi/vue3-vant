<template>

<!-- 待使用的券码和 二维码 -->
  <div class="couponCode">
    <div class="Code-and-QRCode">

      <!-- 券码 -->
      <div class="top">
        <div class="coupon" v-text="`券码：${codeMsg.quanCode? codeMsg.quanCode:''}`"></div>
      </div>

      <!-- 二维码 -->
      <div class="img" id="qrcode">
        <!-- <img :src="codeMsg.codeUrl" alt=""> -->
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import QRCode from 'qrcodejs2'


// 券码  判断按钮的class，文字
// 消费时间
/**
 *      codeMsg  --- Object
 *          quanCode     券码
 *          codeUrl  二维码的url
 */

@Component({
  props:["codeMsg"]
})

export default class Waituse extends Vue {
qrcode:any
codeMsg

bol:boolean = false

  @Watch("codeMsg")
  codeMsgMouted(news,old){
    this.qrCode(news)
  }

  qrCode(data){
    if(this.bol){
    this.qrcode.clear()         //清除二维码
     this.qrcode.makeCode(data)  //创建另一个二维码
     return
    }
    this.qrcode = new QRCode('qrcode', {text: data.quanCode })
    this.bol = true
  }

  destroyed () {
    this.qrcode.clear() 
  }

}

</script>

<style lang='scss' scoped>
.couponCode{
  .Code-and-QRCode{
    background-color: $color-ff;
    padding: 0 30px;
    margin-top: 24px;
    margin-bottom: 23px;
    height: 518px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .top{
      height: 110px;
      line-height: 110px;
      width: 100%;
      display: flex;
      align-items: center;
      .coupon{
        height: 37px;
        width: 100%;
        overflow:hidden;
        font-size: $size32;
        font-weight: bold;
        text-overflow:ellipsis;
        white-space:nowrap;
        line-height: 37px;
        font-size: $size32;
        border-left: 11px solid $color-fb;
        padding-left: 15px;
      }
    }
    .img{
      width: 370px;
      height: 370px;
      object-fit: cover;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}


.img /deep/ img{
  height: 100%;
}
</style>