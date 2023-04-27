<template>
	<view class="service-home-page">
		<u-navbar   :is-back="true" title="服务" :title-bold="true" :title-size="34" 
					:background="{background: '#f1f1f1'}"
					title-color="#404133" :border-bottom="false"  z-index="1001">
			<view slot="right" class="u-m-r-20" @click="modelShow=true">
				<u-icon name="more-dot-fill" size="48"></u-icon>
			</view>		
		</u-navbar>

		<view class="u-p-20">
			<view class="u-flex u-row-around u-col-center"
				style="background-color:rgb(87,171,109);border-radius: 16rpx;height: 280rpx;
						font-size: 32rpx;color: #f8f8f8;text-align: center;">
				<view>
					<view>
						<u-icon name="/static/image/mycenter/shoufukuan.png"
							color="#ffffff" size="90"></u-icon>
					</view>
					<view style="font-weight: bold;">收付款</view>
				</view>
				<view @click="toWallet()">
					<view class="u-m-b-6">
						<u-icon name="/static/image/mycenter/qianbao.png"
						color="#ffffff" size="70"></u-icon>
					</view>
					<view  style="font-weight: bold;">钱包</view>
					<view style="color: #dbdbdb;;font-size: 28rpx;">
						<text v-if="userAccount.accountBalance"> ¥ {{amountFormat()}}</text>
						<text v-else>¥ 0.00</text>
					</view>
				</view>
			</view>

			<view style="background-color: #ffffff;border-radius: 10rpx;padding: 30rpx;margin: 20rpx 0rpx;font-size: 30rpx;">
				<view class="u-m-b-30" style="color:#606266">金融理财</view>
				<u-row style="color: #000000;font-size: 28rpx;padding: 30rpx 0rpx;">
					<u-col :span="3"  v-for="(service,index) in financeServiceList" :key="index">
						<view style="text-align: center;margin-bottom: 10rpx;">
							<u-icon :name="service.iconPath" size="60"></u-icon>
						</view>
						<view style="text-align: center;">
							{{service.title}}
						</view>
					</u-col>
				</u-row>
			</view>

			<view style="background-color: #ffffff;border-radius: 10rpx;padding: 30rpx;margin: 20rpx 0rpx;font-size: 30rpx;">
				<view class="u-m-b-30" style="color:#606266">生活服务</view>
				<u-row style="color: #000000;font-size: 28rpx;">
					<u-col style="margin: 30rpx 0rpx;" :span="3"  v-for="(service,index) in lifeServiceList" :key="index">
						<view style="text-align: center;margin-bottom: 10rpx;">
							<u-icon :name="service.iconPath" size="60"></u-icon>
						</view>
						<view style="text-align: center;">
							<view>{{service.title}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			
			<view style="background-color: #ffffff;border-radius: 10rpx;padding: 30rpx;margin: 20rpx 0rpx;font-size: 30rpx;">
				<view class="u-m-b-30" style="color:#606266">交通出行</view>
				<u-row style="color: #000000;font-size: 28rpx;">
					<u-col style="margin: 30rpx 0rpx;" :span="3"  v-for="(service,index) in jiaotongServiceList" :key="index">
						<view style="text-align: center;margin-bottom: 10rpx;">
							<u-icon :name="service.iconPath" size="60"></u-icon>
						</view>
						<view style="text-align: center;">
							<view>{{service.title}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		
		<u-action-sheet :list="actionList" v-model="modelShow" @click="toServiceSet" border-radius="20"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userAccount:{},
				financeServiceList:[
					{iconPath:'/static/image/mycenter/xinyongka.png',title:'信用卡还款'},
					{iconPath:'/static/image/mycenter/weilidai.png',title:'微粒贷借钱'},
					{iconPath:'/static/image/mycenter/licai.png',title:'理财通'},
					{iconPath:'/static/image/mycenter/baoxianfuwu.png',title:'保险服务'},	
				],
				lifeServiceList:[
					{iconPath:'/static/image/mycenter/shoujichongzhi.png',title:'手机充值'},
					{iconPath:'/static/image/mycenter/shenghuojiaofei.png',title:'生活缴费'},
					{iconPath:'/static/image/mycenter/qq.png',title:'Q币充值'},
					{iconPath:'/static/image/mycenter/city.png',title:'城市服务'},
					{iconPath:'/static/image/mycenter/gongyi.png',title:'腾讯公益'},
					{iconPath:'/static/image/mycenter/yiliaojiankang.png',title:'医疗健康'},
					{iconPath:'/static/image/mycenter/fangyi.png',title:'防御健康码'},
				],
				jiaotongServiceList:[
					{iconPath:'/static/image/mycenter/chuxing.png',title:'出行服务'},
					{iconPath:'/static/image/mycenter/huoche.png',title:'火车票机票'},
					{iconPath:'/static/image/mycenter/didi.png',title:'滴滴出行'},
					{iconPath:'/static/image/mycenter/jiudian.png',title:'酒店'},
					{iconPath:'/static/image/mycenter/T3.png',title:'T3打车'},
				],
				modelShow:false,
				actionList:[
					{text:'服务管理',fontSize:30,color:'#000000',subText:''},
				],
			};
		},
		onShow:function(){
			this.getAccountInfo();
		},
		methods:{
			
			getAccountInfo:function(){
				let that=this;
				that.$u.api.imUser.getUserAccountInfo({}).then(res =>{
					if(res.code==200){
						that.userAccount=res.data;
						this.$u.vuex("vuex_userAccountInfo",that.userAccount);
					}
				})
			},

			amountFormat:function(){
				let that=this;
				if(that.userAccount!=null&&that.userAccount!={}&&that.userAccount.accountBalance!=null&&that.userAccount!=undefined){
					let value=this.userAccount.accountBalance?this.userAccount.accountBalance.toString():'0.00';
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

			toWallet:function(){
				this.$u.route("/pages/my/service/wallat");
			},
			toServiceSet:function(index){
				console.log(`点击了第${index + 1}项，内容为：${this.actionList[index].text}`)
			},
		}
	}
</script>

<style lang="scss" scoped>
.service-home-page{

}
</style>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
