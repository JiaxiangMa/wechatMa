<template>
	<view>
		<u-navbar   :is-back="true" title=" " :title-bold="true" :title-size="34"
					:background="{ background: '#ffffff'}"
					back-icon-name="close" back-icon-size="32"
					title-color="#404133" :border-bottom="false">
		</u-navbar>
		<view class="u-p-40" style="background-color: #ffffff;">
			<view class="header u-border-bottom" 
				style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;padding-bottom: 80rpx;">
				<view>
					<u-image width="100rpx" height="100rpx" src="/static/image/mt.jpg" shape="circle"></u-image>
				</view>
				<view style="font-size:17px;margin-top: 20rpx;margin-bottom: 26rpx;color: #000000;">美团商户平台</view>
				<view style="font-size: 28px;color: #000000;font-weight: bold;">-134.00</view>
			</view>
			<view class="center u-p-t-20">
				<view>
					<u-field  class="field-class"  v-model="tradeStatus" 
							  label="当前状态"  :label-width="160" 
							  :field-style="fieldStyle"
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view class="u-p-r-18">
					<u-field  class="field-class"  v-model="goodName" 
							  label="商品"  :label-width="160" 
							  :field-style="fieldStyle" type="textarea"
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view>
					<u-field  class="field-class"  v-model="company" 
							  label="收单机构"  :label-width="160" 
							  :field-style="fieldStyle" 
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view>
					<u-field  class="field-class"  v-model="settleCompany" 
							  label="清算机构"  :label-width="160" 
							  :field-style="fieldStyle" 
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view>
					<u-field  class="field-class"  v-model="paytime" 
							  label="支付时间"  :label-width="160" 
							  :field-style="fieldStyle" 
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view>
					<u-field  class="field-class"  v-model="payway" 
							  label="支付方式"  :label-width="160" 
							  :field-style="fieldStyle" 
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view>
					<u-field  class="field-class"  v-model="tradeCode" 
							  label="交易单号"  :label-width="160" 
							  :field-style="fieldStyle" 
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
				<view class="u-p-r-30">
					<u-field  class="field-class"  v-model="shanghuCode" 
							  label="商户单号"  :label-width="160" 
							  :field-style="fieldStyle" type="textarea"
							  :border-bottom="false" :clearable="false"	placeholder=" "></u-field>
				</view>
			</view>
		</view>
		<view class="u-m-t-20 u-p-40 u-flex u-row-between u-col-center"
			 style="background-color: #ffffff;font-size: 30rpx;">
			<view>商家小程序</view>
			<view class="u-flex u-row-between u-col-center">
				<view class="u-flex u-row-left u-col-center">
					<view class="u-m-r-10">
						<u-image width="36rpx" height="36rpx" src="/static/image/xiaochengxu.png"></u-image>
					</view>
					<view style="color: #909399;">
						<view class="u-flex u-row-left u-col-center">
							<view><text>美团</text></view>
							<view class="u-m-r-10 u-m-l-10">
								 <u-line color="#909399" direction="col" length="30rpx"/>
							</view>
							<view>
								<view>外卖美食买菜酒店电影</view>
							</view>
						</view>
						<view>购物</view>
					</view>
				</view>
				<view class="u-m-l-30">
					<u-icon name="arrow-right" color="#909399" size="30"></u-icon>
				</view>
			</view>
		</view>
		
		<view class="u-m-t-20 u-p-40"
			 style="background-color: #ffffff;font-size: 30rpx;">
			<view style="padding-bottom: 30rpx;">
				<text>账单服务</text>
			</view>
			<view class="u-flex u-row-between u-col-center u-p-t-30 u-border-top">
				<view>
					<u-icon size="32" name="question-circle" color="#818ba4"
							label="对订单有疑惑"  label-color="#818ba4" 
							margin-left="12" top="4"
						    label-size="30"	label-pos="right"></u-icon>
				</view>
				<view class="">
					<u-icon size="32" name="order" color="#818ba4" 
							label="在此商户的交易"  label-color="#818ba4"
							margin-left="12"
							label-size="30" label-pos="right"></u-icon>
				</view>
				<view style="width: 30rpx;"> </view>
			</view>
		</view>	
		 
		 <view class="u-m-t-20 u-p-40"  style="background-color: #ffffff;font-size: 30rpx;">
			 <view class="u-p-b-30">
				 <text>联系商家</text>
			 </view>
			 <view class="u-p-t-30 u-border-top">
				 <view>
				 	<u-icon size="32" name="phone" color="#818ba4"
				 			label="商家电话"  label-color="#818ba4" 
				 			margin-left="12" top="4"
				 		    label-size="30"	label-pos="right"></u-icon>
				 </view>
			 </view>
		 </view>
		 
		 <view style="width: 100%;text-align:center;padding:50rpx;color:#909399">
			 <text>本服务由财付通提供</text>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fieldStyle:{
					color:'#000000',
					//width:'460rpx',
					padding:'0rpx',
					margin:'0rpx',
					height:'70rpx',
				},
				tradeStatus:'支付成功',
				goodName:'美团订单-22050311100400000024196586649909',
				company:'北京钱袋宝支付技术有限公司',
				settleCompany:'中国银联股份有限公司',
				paytime:'2022年5月3日 11:27:35',
				payway:'零钱',
				tradeCode:'4200001489202205031336699932',
				shanghuCode:'22050311100400000024196586649909',
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.field-class{
		color:#909399 !important;
		font-size: 28rpx !important;
		margin: 0rpx !important;
		padding: 0rpx !important;
	}
</style>
<style>
	page{
		background-color: #efefef;
	}
</style>
