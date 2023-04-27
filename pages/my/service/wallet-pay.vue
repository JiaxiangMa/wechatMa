<template>
	<view class="red-bag-page">
			<u-navbar back-icon-name="close" :back-icon-size="36" back-icon-color="#333333" :border-bottom="false"
					title="充值" title-color="#000000" :title-size="36" :title-bold="true">
				<view slot="right">
					<view class="u-m-r-20">
						<u-icon name="more-dot-fill" color="#333333" :size="36"></u-icon>
					</view>
				</view>
			</u-navbar>
			<u-top-tips ref="uTips" :navbar-height="statusBarHeight + navbarHeight" type="error"></u-top-tips>
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<view class="u-flex u-row-between u-col-center u-p-20"  :style="payValue>5000?'color:#fa3534':''">
					<view>
						<text>金额</text>
					</view>
					<view>
						<u-input input-align="right" v-model="payValue"  :border="false" 
						 @input="amountInputChange" type="digit"
						:custom-style="{color:payValue>5000?'#fa3534':'#000000',fontSize:'34rpx'}" 
						placeholder="¥0.00" placeholder-style="color:#cccccc;font-size:34rpx;" :clearable="false"/>
					</view>
				</view>
			</view>
		
			
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<view  class="u-flex u-row-between u-col-center" 
						style="width: 100%;padding: 30rpx 20rpx;" @click="selectPayWay">
					<view>
						<text>充值方式</text>
					</view>
					<view>
						<u-icon color="#606266" name="arrow-right" 
								 label-pos="left" label-color="#000000" label-size="32rpx"
								:label="selectedPayWay.text"></u-icon>
					</view>
				</view>
			</view>
			
			<view  :style="payValue>5000?'color:#fa3534;text-align: center;margin-top: 120rpx;':'text-align: center;margin-top: 120rpx;'"
					class="u-flex u-row-center u-col-center">
				<view style="font-size:36px;margin-right: 10rpx;font-weight: 500;margin-bottom: 10rpx;">¥</view>
				<view  style="font-size:50px;font-weight: 400;">{{valueFormat()}}</view>
			</view>
			
			<view class="u-flex u-row-center u-col-center u-m-t-30">
				<view @click="showPwdPop" 
					style="font-size: 36rpx; background-color:#19be6b;color:#ffffff;border-radius: 16rpx;text-align: center;padding: 26rpx 100rpx;">充值</view>
			</view>
			
			<!-- 支付方式 -->
			<u-action-sheet :tips="tips" :list="payWaylist"  @click="payWayClick" v-model="payWayshow"></u-action-sheet>
			
			
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
							<view>充值到零钱</view>
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
				payValue:"",
				redBagRemark:"",
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44,
				chatGroupId:'',
				passwordPopFlag:false,
				pwdFocus:false,
				pwdErrorTips:'',
				payWayshow:false,
				payWaylist:[
					{
						text: '微信',
						color:'#19be6b',
						fontSize:32,
						subText:'推荐',
						payID:1
					},
					{
						text: '支付宝',
						color:'#2979ff',
						fontSize:32,
						payID:2
					}
				],
				tips: {
					text: '选择充值方式',
					color: '#000000',
					fontSize: 36
				},
				selectedPayWay:{
					text: '请选择',
					payID:0
				}
			};
		},
		onLoad:function(option){
			this.chatGroupId=option.chatGroupId;
		},
		methods:{
			valueFormat:function(){
				if(this.payValue.length<1){
					return "0.00"
				}
				if(this.payValue.toString().indexOf(".")==-1){
					return this.payValue+'.00';
				}else{
					return this.payValue;
				}
			},
			amountInputChange:function(e){
				console.log(e);
				if(Number(e)>5000){
					this.showTips("单次充值金额不可超过5000元");
					this.payValue="";
				}
			},
			
			selectPayWay:function(){
				let that=this;
				that.payWayshow=true;	
			},
			payWayClick:function(index){
				//console.log(`点击了第${index + 1}项`,this.payWaylist[index]);
				this.selectedPayWay=this.payWaylist[index];
			},
			showPwdPop:function(){
				let that=this;
				if(this.payValue.length<1||this.payValue<=0){
					this.showTips("未填写[金额]");
					return;
				}
				if(this.payValue>5000){
					this.showTips("单次充值金额不可超过5000元");
					return;
				}
				if(this.selectedPayWay.payID<1){
					this.showTips("请选择充值方式");
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
					accountBalance:this.payValue,
					tradePwd:e
				};
				that.$u.api.chatGroup.validatePayTradePwd(param).then(res => {
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
					payValue:Number(this.payValue).toFixed(2),
					payWay:this.selectedPayWay.payID,
				}
				that.$u.api.imUser.toPayUserBalance(param).then(res =>{
					if(res.code==200){
						that.userAccount=res.data;
						this.$u.vuex("vuex_userAccountInfo",that.userAccount);
						this.closePwdPop();
						this.globalUtil.utilAlert("充值成功!",3000);
						setTimeout(function(){
							uni.navigateBack();
						},2000)
					}
				})
				console.log("充值参数",param);
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
