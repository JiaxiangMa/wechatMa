<template>
	<view>
		<view v-if="qrModelFlag">
			<!-- 扫码进群 -->
			<view v-if="serviceCode==1">
				<qr-info-pop :qrModelFlag="qrModelFlag"
							 :windowHeight="windowHeight" 
							 :qrModelInfo="qrModelInfo"
							 @closeQRModel="closeQRModel"></qr-info-pop>
			</view>
		</view>
		<view v-else>
			<view style="padding-top: 10%;">
				<view>
					<text>非此平台二维码!</text>
				</view>
				 <view>
					 {{qrInfo}}
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
	import qrInfoPop from '@/components/qr-info-pop/qr-info-pop.vue';
	export default {
		components:{
			qrInfoPop
		},
		data() {
			return {
				qrModelInfo:{},
				qrModelFlag:false,
				windowHeight:0,
				serviceCode:0  //服务编码
			};
		},
		created:function(){
			this.windowHeight=this.$u.sys().windowHeight;
		},
		onLoad:function(option){
			if(option.qrInfo){
				let qrInfo=option.qrInfo;
				if(qrInfo.indexOf("businessCode")!=-1){
					this.qrModelInfo=JSON.parse(qrInfo);
					this.serviceCode= this.qrModelInfo.businessCode;
					this.qrModelFlag=true;
				}
				else{
					this.qrModelInfo=qrInfo;
				}
			}
		},
		methods:{
			closeQRModel:function(){
				let that=this;
				console.log("返回");
				that.qrModelInfo={};
				that.qrModelFlag=false;
				uni.navigateBack();
			},
		}
	}
</script>

<style lang="scss">

</style>
