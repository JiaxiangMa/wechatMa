<template>
	<view class="moreInfo-container">
		<view class="moreInfo-box">
			<u-cell-group>
				<u-cell-item :arrow="false"  
							 title="我和他的共同群聊"  :title-style="titleStyle" 
							 hover-class="none" 
							:value="'0个'" :value-style="valueStyle">
				</u-cell-item>
			</u-cell-group>
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			<u-cell-group>
				<u-cell-item title="个性签名" :title-style="titleStyle"  :arrow="false" :center="true" hover-class="none"
							 :value-style="valueStyle" :value="signature">
				</u-cell-item>
				<u-cell-item title="来源" :title-style="titleStyle"  :arrow="false" :center="true" hover-class="none" 
						 :value-style="valueStyle"	:value="'通讯录'">
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle: {
					marginLeft: '10rpx',
					color: '#000000',
					fontSize: "32rpx",
				},
				valueStyle:{
					fontSize: "32rpx",
				},
				signature:""
			}
		},
		methods: {
			
		},
		onLoad({signature}) {
			this.signature = signature
		}
	}
</script>

<style  scoped lang="scss">
	.moreInfo-container{
		background-color: #FFFFFF;
		.moreInfo-box{
			
		}
	}
</style>
