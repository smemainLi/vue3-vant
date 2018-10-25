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
    bgColor:{
      type:String,
      default:'#F5F5F5'
    },
  },
  components: {

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
    border:1px solid $color-g2;
    color:$color-g2
  }
  .font-color{
    color: $color-w;
  }
}

</style>