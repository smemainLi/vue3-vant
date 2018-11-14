<template>
  <div class="my-button">
   <!-- <button :class="[bgColor==='#F5F5F5'? 'boder-font':'#A6B5F7']"  :style="{'background-color':bgColor}">
     <slot></slot>
   </button> -->

   <!-- 兑换 -->
    <button @click="grab(buttonData.id)" v-if="buttonData.integralGoodsOptType===1" class="font-color"  style="background-color:#F56E72">
      {{ `${buttonData.needIntegral}分/${buttonData.unit} 点击兑换` }}
    </button>
    <!-- 抢光和已兑换 -->
    <button v-else-if="buttonData.integralGoodsOptType===2||buttonData.integralGoodsOptType===4" class="boder-font"  style="background-color:#F5F5F5">
      {{ buttonData.integralGoodsOptTypeStr }}  
    </button>
    <!-- 不够积分 -->
    <router-link tag="button" :to="{name:'earn'}" v-else-if="buttonData.integralGoodsOptType===3" class="font-color"  style="background-color:#A6B5F7">
      {{ buttonData.integralGoodsOptTypeStr }}  
    </router-link >
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:["buttonData"]
  // props:{
  //   bgColor:{          //控制backgroundColor和border
  //     type:String,
  //     default:'#F5F5F5'
  //   }
  // }
})
export default class MyButton extends Vue {
  // 点击按钮
  grab(id){
    this.$emit('exchange',id)
  }
}
</script>

<style lang="scss" scoped>
.my-button{
  button{
    border: 0;
    padding:0;
    background-color: $color-f5;
    height: 74px;
    width: 326px;
    line-height: 74px;
    border-radius: 10px;
    font-size: $size28;
  }

  .boder-font{
    border:1px solid $color-88;
    color:$color-88
  }
  .font-color{
    color: $color-ff;
  }
}

</style>