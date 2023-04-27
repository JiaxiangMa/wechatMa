<template>
	<view>
		<u-navbar   :is-back="true" title="支付管理" :title-bold="true" :title-size="34"  :background="{ background: '#f1f1f1'  }"
					title-color="#404133" :border-bottom="false"  z-index="1001">
		</u-navbar>
		
		<view style="width: 100%;">
			<u-cell-item title="修改支付密码" @click="toUpdatePayPwd"></u-cell-item>
		</view>
		
		
		
		<u-popup v-model="passwordPopFlag" mode="bottom" border-radius="14" length="70%"
				:mask-close-able="false">
				<view class="u-p-30">
					<view>
						<view class="u-flex u-row-between">
							<view style="width: 100rpx;" @click="closePwdPop">
								<u-icon name="close"></u-icon>
							</view>
							<view v-if="pwdErrorTips.length>0" 
								style="text-align: center;color: #FC5531;font-size: 34rpx">
								{{pwdErrorTips}}
							</view>
							<view v-else style="text-align: center;font-weight: bold;font-size: 32rpx;">
								<text>请输入支付密码</text>
							</view>
							<view style="width: 100rpx;">
								<text></text>
							</view>
						</view>
					</view>
					<view class="u-m-t-50">
						<u-message-input :breathe="true"  :maxlength="6" :dot-fill="true" 
									@change="inputChange" @finish="inputFinish" :focus="pwdFocus">
						</u-message-input>
					</view>
				</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passwordPopFlag:false,
				pwdErrorTips:'',
				pwdFocus:false,
			};
		},
		methods:{
			toUpdatePayPwd:function(){
				this.passwordPopFlag=true;
				this.pwdFocus=true;
			},
			closePwdPop:function(){
				this.pwdErrorTips="";
				this.passwordPopFlag=false;
				this.pwdFocus=false;
			},
			inputChange(e){
				this.pwdErrorTips="";
			},
			inputFinish(e) {
				let that=this;
				console.log('输入结束，当前值为：' + e);
				let param={
					tradePwd:e
				};
				that.$u.api.chatGroup.updateTradePwd(param).then(res => {
					console.log("交易密码校验结果",res);
					if(res.code==200){
							this.globalUtil.utilAlert("修改成功");
							this.closePwdPop();
							setTimeout(function(){
								uni.navigateBack();
							},2000);
							return;
					}else{
						let message=res.message?res.message:'支付密码错误';
						this.globalUtil.utilAlert(message);
						this.pwdErrorTips=message;
						this.closePwdPop();
						return;
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
