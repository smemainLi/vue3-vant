<template>
    <div class="login">
        <van-cell-group>
            <van-field
                v-model="mobile"
                required
                clearable
                label="用户名"
                icon="question"
                placeholder="请输入用户名"
                @click-icon="$toast('question')"
            />

            <van-field
                v-model="smsCode"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
        </van-cell-group>
        <van-button slot="button" size="small" type="primary" @click="login()">登录</van-button>

        <!-- <van-cell-group>
            <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import $axios from 'axios'

@Component({
  components: {}
  })
export default class Login extends Vue {
  mobile = 'cfvcxv'
  smsCode: string = 'fdgfdgdf'
  login (): void {
    $axios
      .post('/wx/login', { mobile: this.mobile, smsCode: this.smsCode })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style lang='sass' scoped>

</style>
