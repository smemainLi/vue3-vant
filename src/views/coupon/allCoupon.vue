<template>
  <div>
    <!-- <van-tabs v-model="active" class="tab" color="#888888"> -->
			<Tab v-model="tabMsg">
				<!-- 待使用   -->

				<!-- 已使用  tab-use -->
				<div slot="已使用">
					<ContentModel v-model="contentText"></ContentModel>
				</div>

			</Tab>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import Tab from "../../components/coupon/tab.vue";
import tabUse from '../../components/coupon/tabUse.vue'
import ContentModel from '../../components/coupon/contentModel.vue'

interface tabMsg{
	title:string,
	couponArry:Array<any>,
	// 内容框架
	isUse:boolean,  //是否已经使用


}

@Component({
  components: {
		Tab,
		tabUse,
		ContentModel
  }
})

export default class AllCoupon extends Vue {
	use:string = 'use'
	tabMsg = {
		msgArray:['123','234','2345']
	}

	contentText = {
		isUse:false
	}

}
</script>
