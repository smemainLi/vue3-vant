<template>
  <div class="bar">
    <div class="box" v-for="(item,index) in content" :key="index" @click="barFunction(index,content)">
      <i :class='[item.className,item.active? "color":""]'></i>
      <div v-text="item.title"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { index } from '@/router/router-path';

export default class Dar extends Vue {
  /**
   *  content   ---  Array
   *      ----- Object
   *      title       主题
   *      active      是否选中
   *      name        要跳转的组件name
   *      className   字体图标的名字
   */
  content:Array<any> = [
    {title:"首页",active:false,name:"index",className:'icon-home-page'},
    {title:"导购",active:false,name:"guide",className:'icon-guide'},
    {title:"会员",active:true,name:"member",className:'icon-member'}
    ]

// 点击后某个图片并跳转到相应的页面
  barFunction(index:number,data:Array<any>):void{
    this.content = data.map( item => {
      return {...item,active:false}
    })
    this.$set(this.content[index],'active',true)
    this.$router.push({name:this.content[index].name})
  }

}
</script>

<style lang="scss" scoped>
.bar{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: $color-ff;
  height: 98px;

  .box{
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    i{
      font-size: $size40;
      color:$color-88;
    }
    div{
      font-size: $size20;
    }
  }
}

.color{
  color: $color-fb !important;
}
</style>