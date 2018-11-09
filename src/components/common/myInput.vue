<template>
  <div class="inputs">
    <div class="input-content">
      <div :class="icon"></div>
      <input :type="type" class="input" v-model="value" :maxlength="placeholder==='请输入手机号'? '11':''" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
/** 
 *  五个参数 （*为必传）
 *   * 一、输入框的值，外面直接v-model绑定一个phoneNumber的值(随便一个字段)
 *     二、指定input的type类型 ===》type
 *     三、input的placeholder  ===》placeholder
 *     四、input的左边图标 ===》icon （使用字体图标）
 *     五、inputValue和第一个参数一样
*/
@Component({
  model: {
    event: 'phoneNumber'
  },
  props: {
    inputValue: {
      type: String
    },
    //输入框placeholder文字
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    // 输入框的左边icon图标
    icon: {
      type: String,
      default: ''
    },
    // 输入框的类型
    type: {
      type: String,
      default: 'text'
    }
  },
  components: {
  }
})
export default class MyInput extends Vue {
  value: any = ''
  placeholder
  inputValue

  cleanEmptys(){

  }

  @Watch("inputValue")
  cleanEmpty(news, old) {
    this.value = news
  }

  @Watch('value')
  trigger(one: any, two: any) {
    if (this.placeholder === '请输入手机号') {
      this.value = one.replace(/[^-|\d*]/, '')
    }
    this.$emit('phoneNumber', this.value)
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  width: 750px;
  .input-content {
    height: 88px;
    position: relative;
    border-radius: 10px;
    border: 1px solid rgba(229, 229, 229, 1);
    overflow: hidden;

    .input {
      border: 0;
      height: 28px;
      padding: 30px 30px 30px 70px;
      width: calc(100% - 99.95px);
      font-size: 28px;
      line-height: normal;
    }
    div {
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

input::-webkit-input-placeholder {
  font-size: 28px;
  color: #888888;
  line-height: 35px;
}

input[type="number"] {
  -webkit-text-security: disc;
}
</style>
