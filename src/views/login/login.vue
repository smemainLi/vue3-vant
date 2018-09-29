<template>
  <div class="login">
    <headTop></headTop>
    <!-- <img @click="getCodePic()" src="" alt=""> -->
    <van-button type="primary" @click="getCodePic()">主要按钮</van-button>
    <!-- <van-cell-group>
      <van-field v-model="phone" required clearable label="手机号码" icon="question" placeholder="请输入用户名" @click-icon="$toast('question')" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" />
      <van-field v-model="phone" required clearable label="手机验证码" placeholder="请输入手机验证码" />
    </van-cell-group> -->
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { codePic } from '@/service/getData'

import headTop from '@/components/header/head.vue';

@Component({
  components: {
    headTop,
  }
})
export default class Login extends Vue {
  @Provide() codeImage: string = "";

  async getCodePic() {
    let res = await codePic();
    console.log(res);
  }
}
</script>
