<template>
	<view>
		<u-navbar   :is-back="true" title=" "
					:background="{ background: '#f1f1f1'  }"
					:border-bottom="false">
					<view slot="right" style="margin-right: 20rpx;">
						<text style="font-size: 34rpx;color: #000000;">零钱明细</text>
					</view>
		</u-navbar>
		
		<view  style="display: flex;flex-direction: column;justify-content: space-around;align-items: center;">
			<view class="u-m-t-80">
				<u-icon name="rmb-circle-fill" size="120" color="#f2b007"></u-icon>
			</view>
			<view class="u-m-t-30 u-font-34">
				<view style="text-align: center;">
					<text>我的零钱</text>
				</view>
				<view style="font-size: 36px;font-weight: bold;text-align: center;margin-top: 20rpx;"> ¥ {{amountFormat()}}</view>
				<view style="color: #f29100;font-size: 32rpx;text-align: center;margin-top: 20rpx;">
					转入零钱通，能赚又能花<u-icon name="arrow-right" color="#f29100" size="30"></u-icon>  
				</view>
			</view>
		</view>
		
		<view class="u-m-t-80" style="padding:25%;">
			<view>
				<u-button @click="toPay()" type="success">充值</u-button>
			</view>
			<view class="u-m-t-30">
				<u-button @click="toCashOut()" type="default" class="custom-style" :hair-line="false">
					提现
				</u-button>
			</view>
		</view>
		
		<view style="position: absolute;bottom: 60rpx;text-align: center;width: 100%;">
			<view style="color: #36648b;font-weight: bold;margin-bottom: 10rpx;">常见问题</view>
			<view style="font-size: 24rpx;color: #909399;">本服务由财务通提供</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			amountFormat:function(){
				let that=this;
				if(that.vuex_userAccountInfo!=null&&that.vuex_userAccountInfo.accountBalance!=null&&that.vuex_userAccountInfo!=undefined){
					let value=this.vuex_userAccountInfo.accountBalance?this.vuex_userAccountInfo.accountBalance.toString():'0.00';
					var arrayNum = value.split(".");
					if (arrayNum.length == 1) {
						return value.toString()+".00";
					}
					else{
						if (arrayNum.length>1) {
							//小数点右侧 如果小于两位则补一个0
							if (arrayNum[1].length<2) {
								return value.toString()+"0" ;
							}
							return value;
						}
					}
				}
				return "0.00";
			},
			toPay:function(){
					this.$u.route("/pages/my/service/wallet-pay");
			},
			toCashOut:function(){
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.custom-style{
		background-color: #e0e0e0 !important;
		color: #19be6b !important;
		border:#f1f1f1 !important;
	}
</style>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
