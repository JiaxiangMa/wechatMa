<template>
	<view class="content_search  u-border-bottom">
		<view @tap="clickInput">
			<u-search  placeholder="搜索" :height="70" shape="square" :input-align="inputAlign" :show-action="false" :bg-color="'#ffffff'" :disabled="true"></u-search>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		inputAlign:{
			type:String,
			default:'left'
		}	
	},
	data() {
		return {
			
		};
	},
	methods: {
		clickInput() {
			console.log("跳转搜索");
			this.$u.route({
				url:"pages/search/search",
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.content_search {
	padding: 16rpx;
	background-color: #f8f8f8;
}
</style>
