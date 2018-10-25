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
@Component({
  components: {
  }
})
export default class Dar extends Vue {
  content:Array<any> = [
    {title:"首页",active:false,name:"index",className:'icon-home-page'},
    {title:"导购",active:false,name:"guide",className:'icon-guide'},
    {title:"会员",active:true,name:"member",className:'icon-member'}
    ]

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
  background-color: $color-w;
  height: 98px;

  .box{
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    i{
      font-size: $size40;
      color:$color-g2;
    }
    div{
      font-size: $size20;
    }
  }
}

.color{
  color: $color-y !important;
}
</style>