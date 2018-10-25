<template>
  <div class="inputs">
    <div class="input-content">
      <div :class="icon"></div>
      <input :type="type" class="input" v-model="value" :placeholder="placeholder">
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";




@Component({
  model:{
    event:'phoneNumber'
  },
  props:{
    //输入框placeholder文字
    placeholder:{
      type:String,
      default:'请输入验证码'
    },
    // 输入框的左边icon图标
    icon:{
      type:String,
      default:''
    },
    // 输入框的类型
    type:{
      type:String,
      default:'text'
    }
  },
  components: {
  }
})
export default class MyInput extends Vue {
  value:any = ''

  @Watch('value')
  trigger(one:any,two:any){
    this.$emit('phoneNumber',this.value)
  }
}
</script>

<style lang="scss" scoped>
.inputs{
  width: 750px;
  .input-content{
    height: 88px;
    position: relative;
    border-radius:10px;
    border:1px solid rgba(229,229,229,1);
    overflow: hidden;


    .input{
      border:0;
      height: 28px;
      padding:30px 30px 30px 70px;
      width:calc(100% - 99.95px);
      font-size: 28px;
      line-height: normal;
    }
    div{
      font-size: $size32;
      height: 88px;
      // line-height: 95px;
      line-height: 88px;
      font-size: 32px;
      background-color: #fff;
      position: absolute;
      padding-left: 24px;
      color: #888888;
    }
  }
}

input::-webkit-input-placeholder{
  font-size: 28px;
  color: #888888;
  line-height: 35px;
}
</style>
