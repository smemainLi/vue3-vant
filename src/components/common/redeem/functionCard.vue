<template>
  <div class="functionCard" @click="trigger">
    <div class="function-content">
      <img :src="imgUrl" alt="">
      <div class="redeem-text" v-text="text"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:{
    text:{              //文字显示（如 100积分/1个）
      type:String,
      default:''
    },
    imgUrl:{            //图片 url
      type:String,
      default:''
    }
  }
})
export default class FunctionCard extends Vue {
  trigger(){
    this.$emit('trigger')
  }
}
</script>

<style lang="scss" scoped>
.functionCard{
  .function-content{
    height: 178px;
    width: 274px;
    object-fit: cover;
    color: $color-ff;
    font-size: $size26;
    position: relative;
    img{
      height: 178px;
      width: 274px;
      border-radius: 10px;
    }

    .redeem-text{
      position: absolute;
      top: 111px;
      text-align: center;
      width: 100%;
    }
  }
}

</style>