<template>
  <div :value="value" class="tab"> 
		<van-tabs v-model="active" color="#888888">
			<van-tab :title="title[index]" v-for="(item,index) in value.msgArray" :key="index">
				<!-- 待使用 -->
				<div class="card-box" v-if="active===0">
					这里{{ title[index] }}
				</div>

				<!-- 已使用 -->
				<div class="card-box" v-else-if="active===1">
					<slot :name="title[index]"></slot>
				</div>

				<!-- 已过期 -->
				<div class="card-box" v-else>
					这里{{ title[index] }}
				</div>


			</van-tab>
		</van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
// import tabUse from "./tabUse.vue"

interface tabMsg{
	title:string,
	couponArry:Array<any>
}

@Component({
  props:['value'],
  components: {
  }
})

export default class Tab extends Vue {
	title:Array<string> = ["待使用","已使用","已过期"]  //tab栏的title
	active:number = 1   //激活当前的index
}
</script>
<style lang="scss" scoped>
	.card-box{
		width: 100%;
		height: 194px;
		background-color:#fff;
		border-top: rgba(245,245,245,1) 23px solid;
	}


</style>
<style lang="scss" scoped>
// 主要是更好组件样式，使其更符合ui设计图

	.tab /deep/ .van-tabs__line{
		left: 100px !important;
		background-color:#FBDE19 !important;
		width: 52px !important;
	}
</style>

