<template>
  <div class="protocol" v-if="show">
    <h2 v-text="name"></h2>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator"
import { Action } from 'vuex-class'

@Component({ props:["type"] } )

export default class Protocol extends Vue {
  type
  content:any
  show:boolean = false
  name:string = ""

  @Action("feesDesc") feesDesc   //协议说明
  
  feesDescMethod(){
    this.feesDesc({ type:this.type })
    .then(res=>{
      this.content = res.data.content
      this.name = res.data.name
      this.show = true
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

  mounted (){
    this.feesDescMethod()
  }
}
</script>

<style lang="scss" scoped>
  h2{
    display: block;
    width: 100%;
    text-align: center;
    color: $color-35;
    margin: 10px 0;
  }
</style>