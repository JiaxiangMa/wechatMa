<template>
	<view>
		<u-navbar  :is-back="false" title=""
					:background="{ background: '#f0f0f0'}">
			<view class="test-slot-wrap"  @click="clearUsedCount()">
				<view style="text-align: center;width: 100%;font-size: 34rpx;font-weight: bold;">apk过期!</view>
			</view>		
		</u-navbar>
		<view style="padding-top: 30%;"  @longpress="clearUsedCount">
			<u-empty text="apk已过期!"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			clearUsedCount:function(){
				console.log("useCount")
				uni.removeStorageSync("useCount");
			}
		}
	}
</script>


<style scoped lang="scss">
	.test-slot-wrap{
			width: 100%;
			display: flex;
			align-items: center;
			/* 如果您想让slot内容占满整个导航栏的宽度 */
			flex: 1;
			/* 如果您想让slot内容与导航栏左右有空隙 */
			//padding: 0 30rpx;
			text-align: center;
	}
</style>
<style>
	page{
		background-color: #f0f0f0;
	}
</style>
