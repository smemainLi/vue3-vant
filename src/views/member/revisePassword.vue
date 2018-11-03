<template>
  <div class="revise-password ">
   <myInput icon='icon-lock' v-model="data.oldPwd" class="myInput" placeholder="请输入原密码"></myInput>
   <myInput icon='icon-lock' type="password" v-model="data.newPwd" class="myInput" placeholder="请输入新密码"></myInput>
   <myInput icon='icon-lock' type="password" v-model="data.againPwd" class="myInput" placeholder="请再次输入新密码"></myInput>

   <button @click="revisePwd(data)">确定</button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import myInput from "../../components/common/myInput.vue"
import { Action } from 'vuex-class'
import md5 from 'js-md5'


@Component( { components: {myInput} } )
export default class RevisePassword extends Vue {
  @Action("changePwd")     changePwd     //修改密码

  data={
      oldPwd:'',
      newPwd:'',
      againPwd:''
    }

    
  revisePwd(data){
    if(!this.inspect(data)){
     return 
    }
    this.changePwd({newPwd:md5(data.newPwd),oldPwd:md5(data.againPwd)})
    .then(res=>{
      this.$toast.success("修改成功")
      let _this = this
      setTimeout(function(){
        _this.$router.push({name:'login'})
      },1000)
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

  inspect(data):Boolean{
    console.log(data,'dat')
    for(let item in data){
      console.log(data[item])
      if(data[item]===''){
        this.$toast.fail("请填写完整信息再提交")
        return false
      }
    }
    if(data.newPwd.length<6||data.newPwd.length>12){
      this.$toast.fail("密码长度6-12")
      return false
    }else if(data.newPwd!==data.againPwd){
      this.$toast.fail("两次输入的密码不一致")
      return false
    }
    return true
  }


}
</script>

<style lang="scss" scoped>
.revise-password {
  height: calc(100%-74px);
  width: calc(100%-64px);
  padding: 74px 32px 0 32px;
  background-color: $color-ff;

  .myInput{
    width: 100%;
    margin-bottom: 24px;
  }

  button{
    border:0;
    width: 686px;
    height: 88px;
    background-color: $color-fb;
    padding: 0;
    color:$color-35;
    font-size: $size36;
    border-radius: 10px;
    margin-top: 76px;
  }
}
</style>

