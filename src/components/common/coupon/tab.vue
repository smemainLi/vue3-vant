<template>
  <div class="tab"> 
		<van-tabs v-model="active" color="#888888" :swipeable='swipeable' :duration='0.3'>
			<van-tab :title="title[index]" v-for="(item,index) in 3" :key="index">
				
				<!-- 待使用 -->
				<div class="card-box" v-if="active===0">
					<slot :name="title[index]"></slot>
				</div>

				<!-- 已使用 -->
				<div class="card-box" v-else-if="active===1">
					<slot :name="title[index]"></slot>
				</div>

				<!-- 已过期 -->
				<div class="card-box" v-else>
					<slot :name="title[index]"></slot>
				</div>

			</van-tab>
		</van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

//   swipeable  tab切换页是否可以滑动

@Component({
  props:{
		swipeable:{
			type:Boolean,
			default:false
		}
	}
})

export default class Tab extends Vue {
	title:Array<string> = ["待使用","已使用","已过期"]  //tab栏的title
	active:number = 0   //激活当前的index


	@Watch("active")
	activeChange(news,old){
		this.$emit("activeChange",news)
	}

}
</script>
<style lang="scss" scoped>
.tab{
	// margin-top: 8px;
	.card-box{
		width: 100%;
		height: 1000px;
		background-color:#f5f5f5;
	}
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

