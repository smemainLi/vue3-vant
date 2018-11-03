<template>
  <div class="member-index-dialog" v-show="showQr">
     <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="member-dialog">
        <div class="box-head">
          <div class="title">把会员码展示给商家</div>
          <img src="@/assets/image/redeem/close.png" alt="" @click.stop="close()">
        </div>
        <div class="box-content">
          <div class="text">
            <div class="member-id">会员卡ID:</div>
            <div class="member-code" v-text="memberId"></div>
          </div>
          <div class="qr-img" id="qrcode" ref="qrcode">
          </div>
        </div>
      </div>
    </van-popup>

  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator"
import { Action } from 'vuex-class'
import QRCode from 'qrcodejs2'

@Component({
  model:{
    event:"value"
  },
  props:{
    show:{          //显示弹框
      type:Boolean,
      default:false
    }
  }
})
export default class MemberIndexDialog extends Vue {
  showDialog:Boolean = false
  target:string = ""  //二维码序列
  show
  qrcode:any         //创建二维码
  memberId:string=""
  showQr:Boolean=false


  @Action('getMemberQrCode')   getMemberQrCode         // 获取二维码

  @Watch("show")
  showMounted(news,old){
    this.showDialog = news
    news&&this.getQrCode()
  }

  @Watch("showDialog")
  valueMounted(news,old){
    this.$emit("value",news)
  }

  close(){
    this.showDialog = false
  }

// 获取二维码序列
  getQrCode(){
     this.getMemberQrCode().then(res=>{
       this.$nextTick(()=>{
         this.memberId = res.data.carID
         this.qrCode(res.data.target)
      })
    }).catch(err=>{
      this.showQr = true
      this.$toast.fail(err)
    })
  }

// 创建二维码
  qrCode(data){
    if(this.qrcode){
      this.qrcode.clear()         //清除二维码
     this.qrcode.makeCode(data)  //创建另一个二维码
     return
    }
    this.qrcode = new QRCode('qrcode', {text: data })
    this.showQr = true    
  }
}
</script>

<style lang="scss" scoped>
.member-index-dialog{
  .member-dialog{
    height: 814px;
    width: 686px;
    border-radius: 10px;
    overflow: hidden;
    color: $color-35;
    background-color: $color-ff;
    

    .box-head{
      height: 124px;
      line-height: 124px;
      background-color: $color-fb;
      position: relative;

      .title{
        width: 340px;
        margin: 0 auto;
        font-size: $size34;
        font-weight: 500;
        color:$color-00;
      }

      img{
        position: absolute;
        top:37px;
        right: 26px;
      }
    }
    .box-content{
      height: 690px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .text{
        width: 500px;
        margin-top: 90px;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .member-id{
          font-size: $size28;
          height: 57px;
          margin-right: 10px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 5px;
        }
        .member-code{
          font-size: $size48;
          height: 62px;
          font-weight: bold;
        }
      }

      .qr-img{
        height: 370px;
        width: 370px;
        object-fit: cover;
      }
    }
  }
}

.qr-img /deep/ img{
  height: 100%;
}
[class^="van-popup"]{
  border-radius: 10px;
}

</style>