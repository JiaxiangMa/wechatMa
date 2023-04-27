<template>
	<view>
		<u-navbar :is-back="false" :title="navbarTitle" :border-bottom="false">
			<view slot="right" class="capsule">
				<view class="u-m-r-20">
					<u-image width="45" height="45" src="@/static/image/more.png"></u-image>
				</view>
				<view  class="u-m-l-20" @click.stop="closeAction()">
					<u-image width="40" height="40" src="@/static/image/close.png"></u-image>
				</view>
			</view>
		</u-navbar>
		<web-view   :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#ffffff',
						height:'200px',
					}
				},
				navbarTitle:'首页',
				url:''
			}
		},
		onLoad:function(option){
			console.log("option",option);
			if(!option.url){
				this.url="http://www.baidu.com"
			}else{
				this.url=option.url;
			}
		},
		methods:{
			closeAction:function(){
				console.log("返回");
				uni.navigateBack(
					{
						delta:2
					}
				);
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	.capsule {
		display: flex; 
		align-items: center; 
		border:1px solid #E9E9E9;
		 border-radius: 25px; 
		 background: #fff;
		 padding: 7rpx 20rpx; 
		 position: relative;
		 margin-right: 20rpx;
	}
	.capsule .more {width: 43rpx; height: 43rpx; margin-right: 20rpx;}
	.capsule .close {width: 36rpx; height: 36rpx; margin-left: 20rpx;}
	.capsule:before {content: ''; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%); width: 1px; height: 60%;
		background: #D4D4D4;
	}
</style>
