<template>
	<view>
		<u-navbar   :is-back="true" title=" " :title-bold="true" :title-size="34"
					:background="{ background: '#57ab6d'}"
					back-icon-name="close" back-icon-size="34" back-icon-color="#f0f0f0"
					:border-bottom="false">
		</u-navbar>
		<view>
			<scroll-view :scroll-x="false" :scroll-y="true" class="hidden-scroll-bar"
						 :style="'width: 100%;background-color: #ffffff;height:'+scrollviewHeight+'px'">
				<!-- 头部块 -->
				<view style="padding-bottom: 20rpx;background-color:#57ab6d;">
					<view class="u-flex u-row-center u-col-center">
						<!-- 年度账单/月度账单 -->
						<view  style="width: 500rpx;">
							<u-tabs :list="tabList" :is-scroll="false" :current="currentTab" @change="tabChange"
									:font-size="32" :height="90" :bar-width="100"
									active-color="#ffffff" inactive-color="#d6d6d6" bg-color="#57ab6d"></u-tabs>
						</view>	
					</view>
					<!-- 月份,年份,类型 -->
					<view  style="padding:40rpx;width:100%;padding-bottom: 30rpx;"
							class="u-flex u-row-between u-col-center">
						<view style="width: 50%;" v-if="currentTab==0">
							<u-icon name="arrow-down" size="24" color="#ffffff"  @click="openTimePicker('month')"
								:label="currentBillObj.year+'年'+currentBillObj.month+'月'" 
								label-color="#ffffff"  
								label-size="30rpx" label-pos="left" 
								margin-right="6rpx">
							</u-icon>
						</view>
						<view style="width: 50%;" v-if="currentTab==1">
							<u-icon name="arrow-down" size="24" color="#ffffff"  @click="openTimePicker('year')"
								:label="currentBillObj.year+'年'" 
								label-color="#ffffff"  
								label-size="30rpx" label-pos="left" 
								margin-right="6rpx">
							</u-icon>
						</view>
						<view class="u-flex u-row-between u-col-center" style="color:#d6d6d6;width: 50%;">
							<view  :class="currentBillObj.currentbillTitle==0?'active-bill-type':'bill-type'" @click="changebillTitle(0)">支出</view>
							<view  :class="currentBillObj.currentbillTitle==1?'active-bill-type':'bill-type'" @click="changebillTitle(1)">收入</view>
							<view  :class="currentBillObj.currentbillTitle==2?'active-bill-type':'bill-type'" @click="changebillTitle(2)">其他</view>
						</view>
					</view>
					<!-- 支付类型摘要信息 -->		
					<view v-if="currentBillObj.currentbillTitle!=2"  
						  style="padding:40rpx;background-color:#57ab6d;width:100%;padding-top: 20rpx;">
						<view style="color:#d6d6d6;font-size: 26rpx;">
							共{{currentBillObj.currentbillTitle==0?'支出':'收入'}}{{currentBillObj.tradeCount}}笔，合计
						</view>
						<view class="u-flex u-row-left u-col-top" 
								style="color: #ffffff;font-size: 26px;margin-top: 20rpx;font-weight: bold;">
							<view style="margin-right:16rpx;font-size: 22px;margin-top: 4rpx;">¥</view>
							<view class="u-m-l-10">{{Number(currentBillObj.tradeAmount).toFixed(2)}}</view>
						</view>
					</view>
				</view>	
				<!-- 白色块 -->
				<view class="u-p-20" v-show="currentTab==0"
					  style="background-color: #ffffff;border-top-left-radius: 20rpx;border-top-right-radius: 20rpx;">
					<view class="u-flex u-row-between u-col-center  u-p-30" 
						style="background-color: #f0f0f0;border-radius: 20rpx;">
						<view class="u-flex u-row-left u-col-center">
							<view class="u-m-r-20">
								<u-icon name="red-packet-fill" color="#57ab6d" size="32"></u-icon>
							</view>
							<view>
								<view class="u-line-2" style="color:#909399;">使用记账本，查看分类统计(餐饮、交通、等)</view>
							</view>
						</view>
						<view>
							<u-icon name="arrow-right" color="#909399" size="32"></u-icon>
						</view>
					</view>
					<view v-show="currentBillObj.currentbillTitle!=2"  >
						<!-- 图表 -->
						<view class="u-p-20">
							<view class="u-font-34 ">{{currentBillObj.currentbillTitle==0?'支出':'收入'}}对比</view>
							<view style="height: 500rpx;">
								<l-echart ref="chart"></l-echart>
							</view>
						</view>
						<!-- 排行榜 -->
						<view class="u-p-20">
							<view class="u-m-b-50">{{currentBillObj.currentbillTitle==0?'支出':'收入'}}排行榜</view>
							
							<view class="u-flex u-row-between u-col-center u-m-b-30" 
									v-for="(rankItem,index) in monthRankingkList" :key="index">
								<view class="u-flex u-row-left u-col-center">
									<view class="u-m-r-30" style="width: 40rpx;">{{rankItem.id}}</view>
									<view class="u-flex u-row-left u-col-center">
										<view>
											<u-image width="60rpx" height="60rpx" shape="circle" :src="rankItem.iconSrc"></u-image>
										</view>
										<view class="u-m-l-20 u-line-1" style="width: 350rpx;">{{rankItem.billTitle}}</view>
									</view>
								</view>
								<view>
									<view class="u-flex u-row-left u-col-center">
										<view style="color: #000000;font-weight: bold;width: 150rpx;text-align: right;">
											<text>¥</text>
											<text>{{Number(rankItem.amountValue).toFixed(2)}}</text>
										</view>
										<view class="u-m-l-20">
											<u-icon name="arrow-right" color="#909399"></u-icon>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view v-show="currentBillObj.currentbillTitle==2">
						<view style="padding-top: 20%;">
							<!-- 可以给src图片 -->
							<u-empty  text="无其他资金流转记录" mode="data" :icon-size="100"></u-empty>
						</view>
					</view>
				</view>
				
				<view class="u-p-40" v-show="currentTab==1"  
						style="background-color: #ffffff;border-top-left-radius: 20rpx;border-top-right-radius: 20rpx;">
					<view  v-if="currentBillObj.currentbillTitle!=2">
						<view class="u-font-34">
							{{currentBillObj.currentbillTitle==0?'支出':'收入'}}构成
						</view>
						
						<view class="u-m-t-40"  v-for="(yearBillItem,index) in yearBillBuildArr" :key="index">
							<u-row>
								<u-col :span="4">
									<view class="u-flex u-row-left u-col-center">
										<view>
											<u-image :src="yearBillItem.iconSrc" :width="36" :height="36"></u-image>
										</view>
										<view class="u-m-l-20 u-line-1" 
												style="width: 70%;font-size: 28rpx;">
												{{yearBillItem.billTitle}}
										</view>
									</view>
								</u-col>
								<u-col :span="4">
									<view>
										<u-line-progress  :show-percent="false"  :height="16"
														  :active-color="yearBillItem.color" 
														  :percent="yearBillItem.percentValue"></u-line-progress>
									</view>
								</u-col>
								<u-col :span="4">
									<view style="width: 100%;" class="u-flex u-row-right u-col-center">
										<view style="text-align: right;font-weight: bold;color:#000000;font-size: 26rpx;">
											¥{{Number(yearBillItem.amountValue).toFixed(2)}}
										</view>
										<view class="u-m-l-10">
											<u-icon name="arrow-right" color="#909399"></u-icon>
										</view>
									</view>
								</u-col>
							</u-row>
						</view>
					
					</view>
					<view  v-if="currentBillObj.currentbillTitle==2">
						<view class="u-font-34">
							<view class="u-flex u-row-left u-col-center">
								<view> 个人资金流转</view>
								<view class="u-m-l-16">
									<u-icon name="info-circle" color="#909399"></u-icon>
								</view>
							</view>
						</view>
						
						<view class="u-m-t-40">
							<view class="u-flex u-row-between u-col-center u-m-t-40" 
								  v-for="(otherItem,otherIndex) in yearBillBuildOtherArr" :key="otherIndex">
								<view class="u-flex u-row-left u-col-center">
									<view>
										<u-icon name="rmb-circle" color="#ff9900" size="40"></u-icon>
									</view>
									<view class="u-m-l-20 u-font-32">{{otherItem.title}}</view>
								</view>
								<view class="u-flex u-row-left u-col-center">
									<view style="font-weight: bold;">¥{{Number(otherItem.amountValue).toFixed(2)}}</view>
									<view class="u-m-l-10">
										<u-icon name="arrow-right" color="#909399"></u-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>	 
						
					 
			</scroll-view>
		</view>
		<!-- 月份查询筛选-->
		<u-picker mode="time" v-model="monthPickerShow" :params="monthTimeParams" end-year="2022" 
			confirm-color="#3c2e55" confirm-text="确定" @confirm="monthTimePickerConfirm"
			:show-time-tag="false"></u-picker>
		<!-- 年度查询筛选-->
		<u-picker mode="time" v-model="yearPickerShow" :params="yearTimeParams" end-year="2022"
			confirm-color="#3c2e55" confirm-text="确定" @confirm="yearTimePickerConfirm"
			:show-time-tag="false"></u-picker>
		
	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';
	export default {
		data() {
			return {
				scrollviewHeight:0, //页面高度
				//年月tab切换器
				tabList:[
					{name:"月账单"},{name:"年账单"}
				],
				//当期年月tab的下标
				currentTab:0,
				//参数
				currentBillObj:{
					year:new Date().getFullYear(),  //年
					month:new Date().getMonth()+1,	//月
					currentbillTitle:0 ,//0支出 ,1收入 2其他
					tradeCount:264,
					tradeAmount:216734.8
				},
				monthPickerShow:false, //月份时间选择器开关
				yearPickerShow:false, //年度事件选择器开关
				//时间参数-月
				monthTimeParams:{
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false,
					timestamp: true,
				},
				//时间参数-年
				yearTimeParams:{
					year: true,
					month: false,
					day: false,
					hour: false,
					minute: false,
					second: false,
					timestamp: true,
				},
				//月度排行榜
				monthRankingkList:[
					{id:1,iconSrc:"/static/image/bill/zz.jpg",billTitle:"转账",amountValue:182204.3},
					{id:2,iconSrc:"/static/image/bill/qr.jpg",billTitle:"二维码收付款",amountValue:21523.5},
					{id:3,iconSrc:"/static/image/bill/redbag.jpg",billTitle:"微信红包",amountValue:8550},
					/* {id:4,iconSrc:"",billTitle:"浙江高速石油发展有限公司",amountValue:298},
					{id:5,iconSrc:"",billTitle:"生活缴费",amountValue:100},
					{id:6,iconSrc:"",billTitle:"喜士多",amountValue:67.1},
					{id:7,iconSrc:"",billTitle:"京东商城平台商户",amountValue:65.9},
					{id:8,iconSrc:"",billTitle:"商户_李某某",amountValue:50},
					{id:9,iconSrc:"",billTitle:"浙江金拱门食品有限公司",amountValue:35},
					{id:10,iconSrc:"",billTitle:"上海宽娱",amountValue:25}, */
				],
				//年度账单构成
				yearBillBuildArr:[
					{
						billTitle:"转账",
						percentValue:70,
						amountValue:513080,
						color:"#F29100",
						iconSrc:"/static/image/bill/zhuanzhang.jpg"
					},
					{
						 billTitle:"消费支出",
						 percentValue:20,
						 amountValue:231160.58,
						 color:"#2979ff",
						 iconSrc:"/static/image/bill/xiaofei.jpg"
					},
					{
						 billTitle:"发红包",
						 percentValue:10,
						 amountValue:44650,
						 color:"#fa3534",
						 iconSrc:"/static/image/bill/hongbao.jpg"
					}
				],
				//年度账单其他类型的数据结构
				yearBillBuildOtherArr:[
					{title:"零钱提现",amountValue:1001},
					{title:"零钱提现",amountValue:430}
				],
				//图表插件 :https://ext.dcloud.net.cn/plugin?id=4899
				//图表的配置 参考:https://echarts.apache.org/zh/option.html#xAxis.axisLine.lineStyle.join
				chartOption: {
					xAxis: {
						type: 'category',
						data: ['7月', '8月', '9月', '10月', '11月', '12月'],
						axisLabel: {
							color: '#909399',
							fontSize:10,
						},
						axisLine:{
							lineStyle:{
								color:'rgb(172, 233, 189)'
							}
						}
					},
					yAxis: {
						type: 'value',
						show:false,
					},
					series: [{
						data: [21000,84000,16000,98000,102000,216000],
						type: 'bar',//柱状
						showBackground:false,//是否显示阴影
						color:'rgb(172, 233, 189)',//柱体颜色
						borderColor:'#fff',//柱体背景颜色
						barWidth:20,//柱条的宽度，
						label:{
							show:true,
							position:'top',
							fontSize:9,
							color:'inherit',
							formatter:function(params){
								//console.log(params);
								let val= params.data;
								//console.log("数值",val);
								if(val<10000){
									return "¥"+val.toFixed(2);
								}else{
									return "¥"+(val/10000).toFixed(1)+"万"
								}
							}
						},
					}]
				}
			};
		},
		mounted:function(){
			this.$refs.chart.init(echarts, chart=> {
				chart.setOption(this.chartOption);
			});
		},
		onLoad:function(){
			let that=this;
			this.scrollviewHeight= that.$u.sys().windowHeight*0.895; // 0.828
			this.getData();
		},
		methods:{
			//获取数据接口
			getData:function(){
				let that=this;
				let param={
					currentTab:this.currentTab, //0月度  1年度
					currentBillType:this.currentBillObj.currentbillTitle,//0支出 1收入 2其他
					year:this.currentBillObj.year,		//当前年度
					month:this.currentBillObj.month  	//当前月度(如果当前选择是年度,month参数要忽略的)
				};
				//获取相关统计数据
				console.log("请求后台接口数据参数",param);
				//这里返回要注意返回的数据要根据参数返回对应的数据结构
				//月度的和年度的支出,收入类型都需要提供:交易记录数量,交易记录总额
				//月度的话需要 图表数据(echartData),排行榜(结构见:monthRankingkList)
				//年度的话需要  支出构成(结构见:yearBillBuildOtherArr)
				//图片配置数据 this.$refs.chart.setOption(data) 参考:https://ext.dcloud.net.cn/plugin?id=4899
			},
			//年账单,月账单切换事件
			tabChange:function(index){
				this.currentTab = index;
				this.getData();
				if(index==1){
					this.getYearBillData();
				}else{
					//获取月度数据,以图表为例
					this.initCharData();
				}
			},
			//打开时间选择器
			openTimePicker:function(type){
				let that=this;
				if(type=='month'){
					that.monthPickerShow=true;	
				}
				if(type=='year'){
					that.yearPickerShow=true;	
				}
			},
			//选择时间变化-月度
			monthTimePickerConfirm:function(obj){
				let year=obj.year;
				let monthStr=obj.month;
				let month= (new Date(obj.timestamp*1000)).getMonth()+1;
				console.log("选择的月份",month);
				this.currentBillObj.month=month;
				this.currentBillObj.year=year;
				this.getData();
			},
			//选择时间变化-年度
			yearTimePickerConfirm:function(obj){
				let year=obj.year;
				this.currentBillObj.year=year;
				this.getData();
			},
			
			//改变账单类型  0支出 1收入 2其他
			changebillTitle:function(index){
				this.currentBillObj.currentbillTitle=index;
				if(this.currentTab==1){
					this.getYearBillData();
				}
				//获取月度数据,以图表为例
				if(this.currentTab==0&&index!=2){
					this.initCharData();
				}
				else{
					
				}
			},
			valueFormat:function(params){
				console.log("params",params);
			},
			//获取图表数据
			initCharData:function(){
				let that=this;
				if(this.currentTab==0){
					if(this.currentBillObj.currentbillTitle==1){
						that.currentBillObj.tradeCount=267;
						that.currentBillObj.tradeAmount=318962.2;
						this.chartOption.series[0].data=[21000,84000,16000,98000,102000,216743.8];//模拟后台数据
						this.$refs.chart.setOption(this.chartOption);
					}else{
						that.currentBillObj.tradeCount=324;
						that.currentBillObj.tradeAmount=216734.8;
						this.chartOption.series[0].data=[55000,102000,38000,116000,114000,264500];//模拟后台数据
						this.$refs.chart.setOption(this.chartOption);
					}
				}
			},
			getYearBillData:function(){
				let that=this;
				if(this.currentTab==1){
					that.currentBillObj.currentbillTitle;
					//收入
					if(that.currentBillObj.currentbillTitle==0){
						that.currentBillObj.tradeCount=3120;
						that.currentBillObj.tradeAmount=3816734.8;
						this.yearBillBuildArr=[
							{
								billTitle:"转账",
								percentValue:78,
								amountValue:that.currentBillObj.tradeAmount*0.78,
								color:"#F29100",
								iconSrc:"/static/image/bill/zhuanzhang.jpg"
							},
							{
								 billTitle:"消费支出",
								 percentValue:21,
								 amountValue:that.currentBillObj.tradeAmount*0.21,
								 color:"#2979ff",
								 iconSrc:"/static/image/bill/xiaofei.jpg"
							},
							{
								 billTitle:"发红包",
								 percentValue:1,
								 amountValue:that.currentBillObj.tradeAmount*0.01,
								 color:"#fa3534",
								 iconSrc:"/static/image/bill/hongbao.jpg"
							}
						];
					}if(that.currentBillObj.currentbillTitle==1){
						that.currentBillObj.tradeCount=3878;
						that.currentBillObj.tradeAmount=4201384.68;
						this.yearBillBuildArr=[
							{
								billTitle:"收转账",
								percentValue:80,
								amountValue:that.currentBillObj.tradeAmount*0.8,
								color:"#F29100",
								iconSrc:"/static/image/bill/zhuanzhang.jpg"
							},
							{
								 billTitle:"二维码收款",
								 percentValue:10,
								 amountValue:that.currentBillObj.tradeAmount*0.1,
								 color:"#fa3534",
								 iconSrc:"/static/image/bill/hongbao.jpg"
							},
							{
								 billTitle:"收红包",
								 percentValue:5,
								 amountValue:that.currentBillObj.tradeAmount*0.05,
								 color:"#fa3534",
								 iconSrc:"/static/image/bill/hongbao.jpg"
							},
							{
								 billTitle:"退款",
								 percentValue:3,
								 amountValue:that.currentBillObj.tradeAmount*0.03,
								 color:"#2979ff",
								 iconSrc:"/static/image/bill/xiaofei.jpg"
							},
							{
								 billTitle:"其他",
								 percentValue:2,
								 amountValue:that.currentBillObj.tradeAmount*0.02,
								 color:"#2979ff",
								 iconSrc:"/static/image/bill/hongbao.jpg"
							}
						];
					}
					if(that.currentBillObj.currentbillTitle==2){
						this.yearBillBuildOtherArr=[
							{title:"零钱提现",amountValue:1001},
							{title:"零钱提现",amountValue:430}
						];
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bill-type{
		border-radius: 30rpx;
		padding: 4rpx 16rpx;
		color: #ffffff;
	}
	.active-bill-type{
		border: 1rpx solid #fff;
		border-radius: 30rpx;
		padding: 4rpx 16rpx;
		color: #ffffff;
	}
</style>

