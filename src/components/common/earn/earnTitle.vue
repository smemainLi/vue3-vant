<template>
  <div class="earn-top">
    <div class="content">
      <img src="@/assets/image/earn/earnBG.png" alt="" srcset="">
      <p class="text">来到购物中心点击打卡，即可获得5积分</p>
      <p class="scene">现场签到+5分</p>
      <button :class="{'bg-color':register}" @click="receiveMethod">立即签到</button>
    </div>

    <van-popup v-model="show">
      <div class="popup">
        <div class="value">+5</div>
        <div>成功积分</div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  props:{
    register:{
      type:Boolean,
      default:true
    }
  },
  components: {
  }
})
export default class EarnTop extends Vue {
  show:Boolean = false
  receiveMethod(){
    this.$emit('receiveMethod')
    this.show = true
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
      color:$color-w;
      font-size: $size34;
    }

    .text{
      color:$color-w;
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
      background-color: $color-w;
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
      color:$color-w;
    }
  }

  // .popup{
  //   display: flex;
  //   flex-direction:column;
  //   justify-content: center;
  //   width: 240px;

  //   .value{
  //     font-size: $size40
  //   }
  // }
}
</style>
