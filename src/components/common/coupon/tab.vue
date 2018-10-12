<template>
  <div :value="value">
    <van-tab :title="value.title">
			<div class="card-box">
				这里
			</div>
    </van-tab>

		 <van-tab :title="value.title">
			<div class="card-box">
				这里
			</div>
    </van-tab>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:['value'],
  components: {
  }
})

export default class Tab extends Vue {

}
</script>
<style lang="scss" scoped>
	.card-box{
		width: 100%;
		height: px2rem(194);
	}
	
</style>