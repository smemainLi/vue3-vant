<template>
  <div class="revise-password ">
   <myInput icon='icon-lock' class="myInput" placeholder="请输入原密码"></myInput>
   <myInput icon='icon-lock' class="myInput" placeholder="请输入新密码"></myInput>
   <myInput icon='icon-lock' class="myInput" placeholder="请再次输入新密码"></myInput>

   <button>确定</button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import myInput from "../../components/common/myInput.vue"

@Component({
  components: {
    myInput
  }
})
export default class RevisePassword extends Vue {
 

}
</script>

<style lang="scss" scoped>
.revise-password {
  height: calc(100%-74px);
  width: calc(100%-64px);
  padding: 74px 32px 0 32px;
  background-color: $color-w;

  .myInput{
    width: 100%;
    margin-bottom: 24px;
  }

  button{
    border:0;
    width: 686px;
    height: 88px;
    background-color: $color-y;
    padding: 0;
    color:$color-35;
    font-size: $size36;
    border-radius: 10px;
    margin-top: 76px;
  }
}
</style>

