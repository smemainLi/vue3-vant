<template>
  <div class="my-button">
   <button :class="[bgColor==='#F5F5F5'? 'boder-font':'font-color']"  :style="{'background-color':bgColor}">
     <slot></slot>
   </button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:{
    bgColor:{          //控制backgroundColor和border
      type:String,
      default:'#F5F5F5'
    }
  }
})
export default class MyButton extends Vue {
  created(){
    console.log()
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