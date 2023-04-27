<template>
	<view>
		<view v-if="!vpnFlag">
			<web-view :webview-styles="webviewStyles" :src="url"></web-view>
		</view>
		<u-modal v-model="vpnFlag"  :show-cancel-button="true"
				cancel-text="直接上车"	confirm-text="前去加速"
				:title-style="{fontSize:'34rpx'}" 
				title="此功能需要外网支持!!!" 
				@cancel="cancel()"  @confirm="confirm()">
			<view class="slot-content u-p-30">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vpnFlag:true,
				webviewStyles: {
					progress: {
						color: '#00FF00'
					}
				},
				url:'',
				content:`
					<h3>
					<span style='color:#ff9900;font-weight:bold;font-size:26px'>'宅男福利,直达东京!!!!'</span>
					</h3>
					<h3 style='margin-bottom:10px'>推荐下载(pigcha):</h3>
					<h4>1:手机下载加速器APP</h4>
					<h4>2:开启加速</h4>
					<h4>3:打开本页面,高清福利视频随你看，免费看!</h4>
					<h4 style='margin-top:20px;'>上手简单,详细加速教程请见官方教程~</h4>
				`
			}
		},
		onLoad:function(option){
			console.log("option",option);
			if(option.url){
				this.url=option.url;
			}else{
				this.url="https://jable.tv/";
			}
		},
		methods:{
			cancel:function(){
				this.vpnFlag=false;
			},
			confirm:function(){
				let url="https://www.co2fun.com/register?share_id=a6149fed-c8d2-46e0-8cfd-7aa3755997ca";
				plus.runtime.openURL(url);  
			},
			launchApp() {  
				let _this = this;  
				// 判断平台  
				if (plus.os.name == 'Android') {  
					plus.runtime.launchApplication(  
						{  
							pname: 'com.taobao.taobao'  
						},  
						function(e) {  
							console.log('Open system default browser failed: ' + e.message);  
						}  
					);  
				} else if (plus.os.name == 'iOS') {  
					plus.runtime.launchApplication({ action: 'taobao://' }, function(e) {  
						console.log('Open system default browser failed: ' + e.message);  
					});  
				}  
			}   
		}
	}
</script>

<style scoped lang="scss">

</style>
