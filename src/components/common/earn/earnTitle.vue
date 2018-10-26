<template>
  <div class="earn-top">
  <!-- 签到 -->
    <div class="content">
      <img src="@/assets/image/earn/earnBG.png" alt="" srcset="">
      <p class="text">来到购物中心点击打卡，即可获得5积分</p>
      <p class="scene">现场签到+5分</p>
      <button :class="{'bg-color':register}" @click="receiveMethod">立即签到</button>
    </div>

  <!-- 提示成功签到的弹出框 -->
    <van-popup v-model="show" :overlay="false">
      <div class="popup">
        <div class="value">+5</div>
        <div class="success">成功积分</div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:{
    register:{  //是否已签到
      type:Boolean,
      default:true
    }
  }
})
export default class EarnTop extends Vue {
  show:Boolean = false

  receiveMethod():void{
  // 触发父组件的方法
    this.$emit('receiveMethod')
    this.show = true
    const _this = this
    window.setTimeout(function(){
      _this.show = false;
    },1000)
  }
}
</script>

<style lang="scss" scoped>
.earn-top{
  width: 100%;
  .content{
    height: 280px;
    object-fit: cover;
    position: relative;

    img{
      width: 100%;
      height: 100%
    }

    .scene{
      position: absolute;
      left: 32px;
      top:34px;
      color:$color-ff;
      font-size: $size34;
    }

    .text{
      color:$color-ff;
      font-size: $size26;
      position: absolute;
      bottom: 25px;
      right: 27px;

    }

    button{
      border:0;
      width: 195px;
      padding: 0;
      height: 84px;
      border-radius: 10px;
      background-color: $color-ff;
      box-shadow:0px 5px 1px rgba(144,130,36,0.21);
      color: $color-35;
      font-size:$size36;
      position: absolute;
      bottom:108px;
      left: 27px;
    }

    .bg-color{
      background-color: $color-d2;
      box-shadow: none;
      color:$color-ff;
    }
  }

// 改变组件库内部的样式
  [class^='van-popup']{
    background-color: rgba(0, 0, 0, .72);
    border-radius: 10px;
  }
  .popup{
    display: flex;
    flex-direction:column;
    justify-content: center;
    width: 230px;
    height: 230px;
    color: $color-ff;
    .value{
      font-size: $size50;
      text-align: center;
      margin-bottom: 10px;
      font-weight:bold;
    }
    .success{
      text-align: center;
      font-size: $size28;
    }
  }
}
</style>
