<template>
  <div class="loading_prompt">
    <div v-if="isiOS">
      <div class="prompt" v-if="bool">- 全部加载完成 -</div>
      <div class="prompt" v-else><van-loading type="spinner" />  &nbsp;&nbsp;加载中......</div>
    </div>
    <div v-else>
      <div class="prompts" id="promptss" ref="prompt" v-if="bool">- 全部加载完成 -</div>
      <div class="prompts" id="prompts" v-else><van-loading type="spinner" />  &nbsp;&nbsp;加载中......</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

@Component({
  props:{
    bool:{
        type:Boolean,
        default:false
      }
    }
  })

export default class LoadingPrompt extends Vue { 
  isiOS:boolean = false

// 这里如果触发的话说明，已经没有更多数据
  @Watch("bool")
  boolChange(){
      if(!this.isiOS){
      // 滚动条总高度
      let scrollHeight = (<any>document.documentElement).scrollHeight||document.body.scrollHeight;
      // 可视高度
      let windowHeight  = (<any>document.documentElement).clientHeight || document.body.clientHeight;
      if(scrollHeight===windowHeight){
        this.$nextTick(()=>{
        this.$refs.prompt["style"].position = "fixed"
        })
      }
    }
  }

  created(){
      let u = navigator.userAgent;
      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  }

}
</script>
<style lang='scss' scoped>
.prompt{
  width: 100%;
  text-align: center;
  // height: 50px;
  position: fixed;
  bottom: 15px;
  z-index: -1;
  color: #888888;
  display: flex;
  justify-content: center;
  align-items: center;
}
.prompts{
  width: 100%;
  text-align: center;
  // position: fixed;
  bottom: 15px;
  z-index: -1;
  color: #888888;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>