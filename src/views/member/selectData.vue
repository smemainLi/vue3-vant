<template>
  <div class="select-data">
    <selectCard @sexMothed="sexMothed" @dateMothed="dateMothed"></selectCard>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import selectCard from "../../components/common/member/selectCard.vue"
@Component({

  components: {
    selectCard
  }
})
export default class SelectData extends Vue {
 
 sexMothed(sex:string){
   console.log(sex,"性别")
 }

 dateMothed(date:string){
   console.log(date,'时间')
 }
}
</script>

<style lang="scss" scoped>
// .select-data{
  
// }
</style>