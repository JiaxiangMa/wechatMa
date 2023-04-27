<template>
	<view>
		<u-cell-group>
			<u-cell-item title="选择内置背景图" :title-style="titleStyle"
			 :border-bottom="false"  :border-top="false"
			 @click="linkToBuiltinBgImg"></u-cell-item>
		</u-cell-group>
		<u-gap :height="16" bg-color="#f4f4f5"></u-gap>
		<u-cell-group>
			<u-cell-item title="通过手机选择" :title-style="titleStyle" 
			:border-bottom="false"  :border-top="false"
			@click="chooseImg"></u-cell-item>
		</u-cell-group>

		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			titleStyle:{
				marginLeft:"20rpx",
				fontSize:"32rpx",
				color:"#000000"
			}
		};
	},
	methods: {
		chooseImg() {
			let that=this;
			console.log("通过手机选择");
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['camera','album'], //从相册选择
				success: function(res) {
					console.log("res",res);
					let tempFilePaths = res.tempFilePaths;
					that.$u.vuex('circleBgImg',tempFilePaths[0]);
					return;
				}
			});
			return;
		},
		linkToBuiltinBgImg() {
			this.$u.route('pages/chat/findMore/friendCirclePages/builtinBgImg');
		},
	},

};
</script>

<style></style>
