<template>
	<view class="red-bag-page">
			<u-navbar back-icon-name="close" :back-icon-size="36" back-icon-color="#333333" :border-bottom="false"
					title="发红包" title-color="#000000" :title-size="36" :title-bold="true">
				<view slot="right">
					<view class="u-m-r-20">
						<u-icon name="more-dot-fill" color="#333333" :size="36"></u-icon>
					</view>
				</view>
			</u-navbar>
			<u-top-tips ref="uTips" :navbar-height="statusBarHeight + navbarHeight" type="error"></u-top-tips>
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<view class="u-flex u-row-between u-col-center u-p-20"  :style="redBagValue>200?'color:#fa3534':''">
					<view>
						<text>金额</text>
					</view>
					<view>
						<u-input input-align="right" v-model="redBagValue" type="digit" :border="false" 
						:custom-style="{color:redBagValue>200?'#fa3534':'#000000',fontSize:'34rpx'}" 
						placeholder="¥0.00" placeholder-style="color:#cccccc;font-size:34rpx;" :clearable="false"/>
					</view>
				</view>
			</view>
			
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<view class="u-flex u-row-between u-col-center" style="width: 100%;padding: 30rpx 20rpx;">
					<view>
						<u-input input-align="left" v-model="redBagRemark" type="text" :border="false" 
						:custom-style="{color:'#000000',fontSize:'34rpx'}" 
						placeholder="恭喜发财,大吉大利" placeholder-style="color:#c0c0c0;font-size:34rpx;" :clearable="false"/>
					</view>
					<view>
						<u-icon name="/static/image/chat/biaoqingadd.png" size="48" label-color="#515151" label="+" label-pos="right" margin-left="0"></u-icon>
					</view>
				</view>
			</view>
			
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<view class="u-flex u-row-between u-col-center" style="width: 100%;padding: 30rpx 20rpx;">
					<view>
						<text>红包封面</text>
					</view>
					<view>
						<u-icon color="#ccc" name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
			
			<view  :style="redBagValue>200?'color:#fa3534;text-align: center;margin-top: 120rpx;':'text-align: center;margin-top: 120rpx;'"
					class="u-flex u-row-center u-col-center">
				<view style="font-size:36px;margin-right: 10rpx;font-weight: 500;margin-bottom: 10rpx;">¥</view>
				<view  style="font-size:50px;font-weight: 400;">{{valueFormat()}}</view>
			</view>
			
			<view class="u-flex u-row-center u-col-center u-m-t-30">
				<view @click="showPwdPop" 
					style="font-size: 36rpx; background-color:#FC5531;color:#ffffff;border-radius: 16rpx;text-align: center;padding: 26rpx 100rpx;">塞钱进红包</view>
			</view>
			
			
			<view style="position: absolute;bottom: 10rpx;width: 100%;text-align: center;">
				可直接使用收到的零钱发红包
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
						<view class="u-m-t-30 u-p-b-30  u-border-bottom" style="text-align: center;font-size: 18px;">
							<view>微信红包</view>
							<view style="font-weight: bold;">
								<text style="margin-right: 6rpx;">¥</text><text style="font-size: 26px;">{{valueFormat()}}</text>
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
				redBagValue:"",
				redBagRemark:"",
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44,
				chatGroupId:'',
				passwordPopFlag:false,
				pwdFocus:false,
				pwdErrorTips:'',
			};
		},
		onLoad:function(option){
			this.chatGroupId=option.chatGroupId;
		},
		methods:{
			valueFormat:function(){
				if(this.redBagValue.length<1){
					return "0.00"
				}
				if(this.redBagValue.toString().indexOf(".")==-1){
					return this.redBagValue+'.00';
				}else{
					return this.redBagValue;
				}
			},
			showPwdPop:function(){
				let that=this;
				if(this.redBagValue.length<1||this.redBagValue<=0){
					this.showTips("未填写[金额]");
					return;
				}
				if(this.redBagValue>200){
					this.showTips("单个红包金额不可超过200元");
					return;
				}
				this.passwordPopFlag=true;
				this.pwdErrorTips="";
				setTimeout(function(){
					that.pwdFocus=true;
				},1000)
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
				//this.pwdFocus=fasle;	
				let that=this;
				console.log('输入结束，当前值为：' + e);
				let param={
					accountBalance:this.redBagValue,
					tradePwd:e
				};
				that.$u.api.chatGroup.validateTradePwd(param).then(res => {
					console.log("交易密码校验结果",res);
					if(res.code==200){
						this.submit();
					}else{
						let message=res.message?res.message:'支付密码错误';
						this.globalUtil.utilAlert(message);
						this.pwdErrorTips=message;
						return;
					}
				})
			},
			submit:function(){
				let that=this;
				let param={
					redBagRemark:this.redBagRemark.length>0?this.redBagRemark:'恭喜发财,大吉大利',
					redBagValue:this.redBagValue,
					redBagBg:0,
					receiveAllFlag:false,
					fromUser:this.vuex_userInfo.id,
					chatGroupId:Number(this.chatGroupId),
					redBagType:0,
				}
				console.log("发出红包参数",param);
				that.$u.api.chatGroup.sendRedBag(param).then(res => {
					if(res.code==200){
						console.log("红包已发");
						uni.navigateBack();
					}else{
						that.globalUtil.utilAlert(res.message);
						return;
					}
				})
			},
			showTips(title) {
				this.$refs.uTips.show({
					title: title?title:'未填写[金额]',
					type:'error'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.red-bag-page{
		background-color: #f1f1f1;
	}
</style>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
