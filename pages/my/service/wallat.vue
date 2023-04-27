<template>
	<view class="wallat-page">
		<u-navbar   :is-back="true" title="钱包" :title-bold="true" :title-size="34"  :background="{ background: '#f1f1f1'  }"
					title-color="#404133" :border-bottom="false"  z-index="1001">
					<view slot="right" style="margin-right: 20rpx;" @click="toMyBill()">
						<text style="font-size: 34rpx;color: #000000;">账单</text>
					</view>
		</u-navbar>
		<view>
			<template  v-for="(item,index) in cellItemList">
				<u-cell-item   :title-style="titleStyle" :title="item.title"
								@click="itemClick(item)"
							    style="padding: 36rpx 30rpx;"
							   :value="item.value?item.value:' '"  
							   :value-style="valueStyle" bg-color="#ffffff">
					<view slot="icon" class="u-m-r-16">
						<u-icon :name="item.iconPath" :color="item.iconColor" :size="40" top="6"></u-icon>
					</view>		   
				</u-cell-item>
				<u-gap v-if="index==2||index==4" height="16" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			</template>
		</view>
		<view style="position: absolute;bottom: 60rpx;text-align: center;width: 100%;">
			<view style="color: #36648b;font-weight: bold;margin-bottom: 10rpx;">帮助中心</view>
			<view style="font-size: 24rpx;color: #909399;">本服务由财务通提供</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle:{
					fontSize:'32rpx',
					color:'#000000',
				},
				valueStyle:{
					fontSize:'32rpx',
					color:'#000000',
				},
				cellItemList:[
					{title:'零钱',value:'¥105242.12',iconPath:'rmb-circle',iconColor:'#f29100'},
					{title:'零钱通',value:'',iconPath:'integral',iconColor:'#f29100'},
					{title:'银行卡',value:'',iconPath:'zhuanfa',iconColor:'#5788f2'},
					{title:'支付分',value:'',iconPath:'coupon',iconColor:'#f29100'},
					{title:'亲属卡',value:'',iconPath:'grid',iconColor:'#f29100'},
					{title:'身份信息',value:'',iconPath:'fingerprint',iconColor:'#5788f2'},
				/* 	{title:'安全保障',value:'',iconPath:'integral-fill',iconColor:'#5788f2'}, */
					{title:'支付设置',value:'',iconPath:'setting',iconColor:'#5788f2'}
				]
			};
		},
		onLoad:function(){
			if(this.vuex_userAccountInfo!=null){
				this.cellItemList[0].value= this.amountFormat(this.vuex_userAccountInfo.accountBalance);
			}
		},
		methods:{
			amountFormat:function(accountBalance){
				let that=this;
				if(accountBalance!=null&&accountBalance!=undefined){
					let value=accountBalance?accountBalance.toString():'0.00';
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
			itemClick:function(item){
				console.log("item",item);
				if(item.title=='零钱'){
					this.$u.route("/pages/my/service/walletOption");
				}
				if(item.title=="支付设置"){
					this.$u.route("/pages/my/service/paySet");
				}
			},
			toMyBill:function(){
				this.$u.route("/pages/my/service/my-bill");
			}
		}
	}
</script>

<style lang="scss">
.wallat-page{
	
}
</style>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
