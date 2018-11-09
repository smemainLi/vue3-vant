<template>
	<router-link v-if="contentText.id" :to='component==="exchange"? "":{name:component,params:{id:contentText.id}}'  tag="div" class="content-model">
		<div class="content-box">
			<img :src="(contentText.mechantLogo===''||contentText.mechantLogo===null)? require('@/assets/image/coupon/mechantLogo.png'):contentText.mechantLogo" alt="">
			<div class="content-title">
				<span class='title' v-text="contentText.mechantName"></span>
				<span class="coupon-text" v-text="contentText.name"></span>
			</div>
		</div>

		<!-- 以下主要针对优惠券等的主页面和待使用等的页面区分" > "和 button -->
	<button v-if="'isUse' in contentText" :class="['button',contentText.isUse? 'yes':'']" v-text="contentText.statusName"></button>
	<van-icon v-else class="icon" name="arrow" />
</router-link>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
/**
 *  contentText --- Object
 *  	 mechantName   ---> 餐馆名字
 * 		 name  ---> 优惠
 * 		 isUse   ---> 按钮样式 （不传就不显示按钮，只显示 > ）
 * 		 useText ---> 按钮文字
 * 		 mechantLogo  ---> 店铺logo
 * */  

@Component({
	props:['contentText',"component"], 
  components: { }
})

export default class ContentModel extends Vue {


}
</script>
<style lang='scss' scoped>
.content-model{
	height: 194px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	margin-top: 24px;

	.content-box{
		display: flex;
		align-items: center;

		img{
			display: block;
			margin-right: 13px;
			height: 112px;
			width: 112px;
			object-fit: contain;
		}

		.content-title{
			display: flex;
			flex-direction: column;
			// align-items: center;
			justify-content:flex-start;

			.title{
				font-size: $size28;
				color: #000000;
				margin-bottom: 10px;
			}

			.coupon-text{
				font-size: $size26;
				color: #353535;
			}
		}

	}

	.button{
		display: block;
		background-color:#F56E72;
		height: 36px;
		line-height: 36px;
		width: 138px;
		padding: 0;
		border: 0;
		font-size: $size28;
		color: #fff;
		border-radius: 18px;
	}


	.yes{
		background-color: #888888 !important;
	}

}
</style>