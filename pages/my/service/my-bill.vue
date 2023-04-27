<template>
	<view>
		<u-navbar   :is-back="true" title="账单" :title-bold="true" :title-size="34"  
					:background="{ background: '#efefef'}"
					back-icon-name="close" back-icon-size="32"
					title-color="#404133" :border-bottom="true">
					<view slot="right" style="margin-right: 20rpx;">
						<text style="font-size: 34rpx;color: #000000;" @click="addRecord()">常见问题</text>
					</view>
		</u-navbar>
		<view>
			<view class="u-flex u-row-between u-col-center u-border-bottom" 
				  style="padding:34rpx 30rpx;">
				<view  @click="openTradeTypePop()" style="background-color:#e3e3e3;height:60rpx;line-height: 50rpx; border-radius: 30rpx;padding: 0rpx 16rpx;">
						<u-icon name="arrow-down-fill" size="16" color="#666666" 
							label="全部账单" label-size="26rpx" label-pos="left" margin-right="6rpx">
						</u-icon>
				</view>
				<view @click="toBillStatistics()">
					<u-icon name="arrow-right"  color="#acb0b7"
							label="统计" label-color="#acb0b7" label-pos="left"></u-icon>
				</view>
			</view>
			<view  style="padding:34rpx 30rpx;background-color:#efefef;width:100%;"
					class="u-flex u-row-between u-col-center">
				<view >
					<u-icon name="arrow-down" size="24" color="#333333"  @click="openTimePicker"
						:label="activeMonthObj.currentYear+'年'+activeMonthObj.currentMonth+'月'" 
						label-color="#333333"  
						label-size="30rpx" label-pos="left" 
						margin-right="6rpx">
					</u-icon>
				</view>
				<view class="u-flex u-row-left u-col-center" style="color:#acb0b7;" @click="openUpdateModel()">
					<view class="u-m-r-16">支出¥{{Number(activeMonthObj.outputAmount).toFixed(2)}}</view>
					<view>收入¥{{Number(activeMonthObj.inputAmount).toFixed(2)}}</view>
				</view>
			</view>		
		</view>
		<view style="background-color:#ffffff;width: 100%;">
			<scroll-view :scroll-x="false" :scroll-y="true" class="hidden-scroll-bar"
						 :style="'width: 100%;height:'+scrollviewHeight+'px'"
						 :scroll-into-view="scrollIntoViewId"
						 @scrolltoupper="scrolltoUpper"
						 @scrolltolower="scrolltolower">
				<template v-if="activeMonthObj.recordList&&activeMonthObj.recordList.length>0">
					<view   v-for="(record,index) in activeMonthObj.recordList" :key="index" 
							:id="'record_'+index"
							class="u-flex u-row-between u-col-center" 
							style="width: 100%;">
							<view   style="width: 18%;padding: 30rpx 20rpx 30rpx 30rpx;">
								<u-image :src="record.tradeIcon" width="90rpx" height="90rpx"
										  shape="circle" bg-color="#909399"></u-image>
							</view>
							<view  style="width: 82%;padding: 30rpx 30rpx 30rpx 0rpx" 
									class="u-flex u-row-between u-col-center u-border-bottom">
								<view 	@click="showUpdatePop(record,index)">
									<view style="font-size: 34rpx;font-weight: 500;width:400rpx" class="u-line-1">{{record.tradeTitle}}</view>
									<view style="font-size: 28rpx;color: #909399;margin-top:6rpx;">{{formatTimeStr(record.createTime)}}</view>
								</view>
								<view class="u-p-b-40" @click="toDetail(record)">
									<text v-if="record.tradeDirection=='out'" 
											style="color: #000000;font-weight: bold;font-size: 32rpx;">{{"-"+Number(record.tradeValue).toFixed(2)}}</text>
									<text v-if="record.tradeDirection=='in'"
										 style="color: #f29100;font-weight: bold;font-size: 32rpx;">{{"+"+Number(record.tradeValue).toFixed(2)}}</text>
								</view>
							</view>
					</view>
				</template>
			</scroll-view>
		</view>
		
		<u-popup   v-model="addPopFlag" mode="center" :mask-close-able="false" negative-top="200" closeable>
			<view class="u-p-30">
				<view class="u-m-t-30">
					<u-form :model="newRecord" ref="newRecord" label-width="150rpx">
						<u-form-item label="图标" prop="tradeIcon" label-position="left">
							<view class="u-flex u-row-right u-col-center" style="width: 100%;" @click="replaceIcon('add')">
								<view>
									<u-image :src="newRecord.tradeIcon" width="70rpx" height="70rpx" border-radius="10"></u-image>
								</view> 
								<view class="u-m-l-10">
									<u-icon name="arrow-right" size="32" color="#909399"></u-icon>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="时间" prop="createTime" label-position="left">
							<view class="u-flex u-row-right u-col-center" style="width: 100%;"  @click="replaceTime('add')">
								<view>{{newRecord.createTime}}</view> 
								<view class="u-m-l-10">
									<u-icon name="arrow-right" size="32" color="#909399"></u-icon>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="商家名称" prop="tradeTitle">
							<u-input input-align="right"  v-model="newRecord.tradeTitle" placeholder="商家名称"/>
						</u-form-item>
						<u-form-item label="消费类型" label-width="300"  prop="tradeDirection">
							<u-radio-group v-model="newRecord.tradeDirection">
								<u-radio  name="in">收入</u-radio>
								<u-radio  name="out">支出</u-radio>
							</u-radio-group>
						</u-form-item>
						<u-form-item label="消费金额"  prop="tradeValue">
							<u-input input-align="right" v-model="newRecord.tradeValue" type="number" placeholder="消费金额"/>
						</u-form-item>
					</u-form>
				</view>
				<view class="u-p-30">
					<view>
						<u-button type="success" @click="submitRecord">提交</u-button>
					</view>
					 <view class="u-m-t-20">
						<u-button type="warning" @click="clearRecord">清空记录</u-button> 
					 </view>
				</view>
			</view>
		</u-popup>
		
		<u-popup   v-model="updateRecordPopFlag" mode="center" :mask-close-able="false" negative-top="200" closeable>
			<view class="u-p-40">
				<view class="u-m-t-30">
					<u-form :model="updateRecord" ref="updateRecord" label-width="150rpx">
						<u-form-item label="图标" prop="tradeIcon" label-position="left">
							<view class="u-flex u-row-right u-col-center" style="width: 100%;"  @click="replaceIcon('update')">
								<view>
									<u-image :src="updateRecord.tradeIcon" width="70rpx" height="70rpx" border-radius="10"></u-image>
								</view> 
								<view class="u-m-l-10">
									<u-icon name="arrow-right" size="32" color="#909399"></u-icon>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="时间" prop="createTime" label-position="left">
							<view class="u-flex u-row-right u-col-center" style="width: 100%;"  @click="replaceTime('update')">
								<view>{{updateRecord.createTime}}</view> 
								<view class="u-m-l-10">
									<u-icon name="arrow-right" size="32" color="#909399"></u-icon>
								</view>
							</view>
						</u-form-item>
						<u-form-item label="商家名称" prop="tradeTitle">
							<u-input input-align="right"  v-model="updateRecord.tradeTitle" placeholder="商家名称"/>
						</u-form-item>
						<u-form-item label="消费类型" label-width="300"  prop="tradeDirection">
							<u-radio-group v-model="updateRecord.tradeDirection">
								<u-radio  name="in">收入</u-radio>
								<u-radio  name="out">支出</u-radio>
							</u-radio-group>
						</u-form-item>
						<u-form-item label="消费金额"  prop="tradeValue">
							<u-input input-align="right" v-model="updateRecord.tradeValue" type="number" placeholder="消费金额"/>
						</u-form-item>
					</u-form>
				</view>
				<view class="u-p-30">
					<view>
						<u-button type="success" @click="submitUpdateRecord">提交修改</u-button>
					</view>
					<view class="u-m-t-20">
						<u-button type="warning" @click="deleteItem(updateRecord)">删除记录</u-button> 
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 当前月份统计信息修改 -->
		<u-popup   v-model="currentMonthPopFlag" mode="center" :mask-close-able="false" negative-top="200" closeable>
			<view class="u-p-30">
				<view class="u-m-t-30">
					<u-form :model="activeMonthObj" ref="activeMonthObj" label-width="150rpx">
						<u-form-item label="当前年度">
							<u-input v-model="activeMonthObj.currentYear" type="number" placeholder="月份"/>
						</u-form-item>
						<u-form-item label="当前月份">
							<u-input v-model="activeMonthObj.currentMonth" type="number" placeholder="月份"/>
						</u-form-item>
						<u-form-item label="当月收入">
							<u-input  v-model="activeMonthObj.inputAmount" type="number" placeholder="本月收入"/>
						</u-form-item>
						<u-form-item label="当月支出">
							<u-input  v-model="activeMonthObj.outputAmount" type="number" placeholder="本月支出"/>
						</u-form-item>
					</u-form>
				</view>
				<view class="u-p-30">
					<view>
						<u-button type="success" @click="submitUpdate">确定</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	
		 <!-- 月份查询筛选-->
		<u-picker mode="time" v-model="timePickerShow" :params="timeParams" end-year="2022" 
			confirm-color="#3c2e55" confirm-text="确定" @confirm="timePickerConfirm"
			:show-time-tag="false"></u-picker>
			
		<!-- 新增或者修改时间选择器 -->
		<u-picker mode="time" v-model="createTimePickerShow" :params="createtimeParams" end-year="2022" 
			confirm-color="#3c2e55" confirm-text="确定" @confirm="createtimePickerConfirm"
			:show-time-tag="false"></u-picker>	
		<!-- 消费类型 -->	
		<u-popup v-model="tradeTypePopFlag" mode="bottom"
				 :border-radius="16" close-icon-color="#000000"
				 :closeable="true" 	close-icon-pos="top-left">
				<view style="width: 100%;padding: 20rpx;background-color: #f0f0f0;">
					<view style="margin-top: 20rpx;  text-align: center;font-weight: bold;">选择筛选项</view>
					<view style="margin-top: 50rpx;text-align: center;padding: 0rpx 20rpx;margin-bottom: 100rpx;">
						<u-row>
							<u-col :span="4" v-for="(tradeTypeItem,index) in tradeTypeList" :key="index">
								<view  v-if="index==4" 
									 class="trade-type trade-type-4" 
									 :class="currentTradeType.value==tradeTypeItem.value?'trade-type trade-type-4 trade-type-active':'trade-type trade-type-4'"
									 @click="selectTradeType(tradeTypeItem)">
									{{tradeTypeItem.title}}
								</view>
								<view v-else @click="selectTradeType(tradeTypeItem)"
									:class="currentTradeType.value==tradeTypeItem.value?'trade-type trade-type-active':'trade-type'">
									{{tradeTypeItem.title}}
								</view>
							</u-col>
						</u-row>
					</view>
				</view>
		</u-popup>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollviewHeight:0,
				scrollIntoViewId:'',
				currentMonthIndex:new Date().getMonth()+1, //当前月份
				currentYearIndex: new Date().getFullYear(),//当期年份
				currentMonthPopFlag:false,//当前月份信息修改弹窗控制器
				//当前月份数据
				activeMonthObj:{
					currentYear:2022,
					currentMonth:5,
					outputAmount:0.00,
					inputAmount:0.00,
					recordList:[]
				},
				addPopFlag:false, //新增记录弹窗
				//新增记录表单实体
				newRecord:{
					tradeTitle:'',
					tradeIcon:'/static/image/mycenter/default-record-icon.jpg',
					tradeValue:0.00,
					tradeDirection:'out', //交易方向 in:收入  out:支出
					tradeType:'6',	//交易类型  1红包 2转账 3充值 4提现 5消费	 6其他
					tradeStatus:"2", //交易状态   1进行中 2已完成 3撤销
					createTime:"",	//创建时间
					finishTime:'',//完成时间
				},
				
				updateRecordPopFlag:false, //修改的弹窗
				//修改的对象实体
				updateRecord:{
					tradeTitle:'',
					tradeIcon:'/static/image/mycenter/default-record-icon.jpg',
					tradeValue:0.00,
					tradeDirection:'', //交易方向 in:收入  out:支出
					tradeType:'6',	//交易类型  1红包 2转账 3充值 4提现 5消费	 6其他
					tradeStatus:"2", //交易状态   1进行中 2已完成 3撤销
					createTime:'',	//创建时间
					finishTime:'',//完成时间
				},
				timePickerShow:false, //时间选择器开关
				//时间参数
				timeParams:{
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false,
					timestamp: true,
				},
				createTimePickerShow:false, //时间选择器开关
				//时间参数
				createtimeParams:{
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false,
					timestamp: true,
				},
				optionTypeForCreatetime:'add',
				tradeTypePopFlag:false,
				tradeTypeList:[
					{"title":"全部",value:"0"},{"title":"红包",value:"1"},{"title":"转账",value:"2"},
					{"title":"群收款",value:"3"},{"title":"二维码收付款",value:"4"},{"title":"商户消费",value:"5"},
					{"title":"充值提现",value:"6"},{"title":"信用卡还款",value:"7"},{"title":"有退款",value:"8"},	
				],
				currentTradeType:{title:'全部',value:"0"}
			};
		},
		onLoad:function(){
			let that=this;
			this.scrollviewHeight= that.$u.sys().windowHeight*0.76; // 0.828
			this.getRecordList();
		},
		methods:{
			openTimePicker:function(){
				let that=this;
				that.timePickerShow=true;	
			},
			timePickerConfirm:function(obj){
				let year=obj.year;
				let monthStr=obj.month;
				let month= (new Date(obj.timestamp*1000)).getMonth()+1;
				console.log("选择的月份",month);
				this.currentMonthIndex=month;
				this.currentYearIndex=year;
				this.getRecordList();
			},
			
			//获取缓存记录
			getRecordList:function(){
				this.activeMonthObj.recordList=[];
				this.activeMonthObj.inputAmount=0.00;
				this.activeMonthObj.outputAmount=0.00;
				this.activeMonthObj.currentMonth=this.currentMonthIndex;
				this.activeMonthObj.currentYear=this.currentYearIndex;
				let month=this.currentMonthIndex<10?("0"+this.currentMonthIndex):this.currentMonthIndex;
				let param={
					timeDuring:this.currentYearIndex+"-"+month,
					tradeType:this.currentTradeType.value=='0'?'6':this.currentTradeType.value,
				}
				console.log("获取账单记录参数",param);
				this.$u.api.imUser.getUserAccountRecordList(param).then(res => {
					if(res.code==200&&res.data){
						this.activeMonthObj.recordList=res.data.recordList;
						this.activeMonthObj.inputAmount=res.data.monthAccountInfo.inputAmount;
						this.activeMonthObj.outputAmount=res.data.monthAccountInfo.outputAmount;
						console.log("获取账单记录结果",this.activeMonthObj);
					}
				})
			},
			//打开修改弹窗
			openUpdateModel:function(){
				this.currentMonthPopFlag=true;	
			},
		
			createtimePickerConfirm:function(obj){
				let that=this;
				let year=obj.year;
				let month=obj.month;
				let day=obj.day;
				let hour=obj.hour;
				let min=obj.minute;
				let second="00";
				let date=year+"-"+month+"-"+day+" "+hour+":"+min+":"+second;
				console.log("date",date);
				if(this.optionTypeForCreatetime=="add"){
					that.newRecord.createTime=date;
				}
				else{
					that.updateRecord.createTime=date;
				}
				that.createTimePickerShow=false;
			},
			
			//提交修改
			submitUpdate:function(){
				this.currentMonthPopFlag=false;	
			},
			//打开新增记录弹窗
			addRecord:function(){
				let that=this;
				that.addPopFlag=true;
			},
			//新增记录
			submitRecord:function(){
				let that=this;
				console.log("新增记录",that.newRecord);
				this.$u.api.imUser.addUserAccountRecord(that.newRecord).then(res => {
					console.log("新增记录结果",res);
					if(res.code==200&&res.data==1){
						that.getRecordList();
						that.addPopFlag=false;
						that.newRecord={
							tradeTitle:'',
							tradeIcon:'/static/image/mycenter/default-record-icon.jpg',
							tradeValue:0.00,
							tradeDirection:'out', //交易方向 in:收入  out:支出
							tradeType:'6',	//交易类型  1红包 2转账 3充值 4提现 5消费	 6其他
							tradeStatus:"2", //交易状态   1进行中 2已完成 3撤销
							createTime:"",	//创建时间
							finishTime:'',//完成时间
						}
					}
				})
			},
			//清除记录
			clearRecord:function(){
				let that=this;
				uni.showModal({
					content: '确定要清空数据',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.activeMonthObj.recordList=[];
							that.currentMonthIndex=1;
							that.activeMonthObj.currentMonth=1;
							that.activeMonthObj.inputAmount=0.00;
							that.activeMonthObj.outputAmount=0.00;
							that.addPopFlag=false;
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			
			replaceTime:function(optionType){
				let that=this;
				that.optionTypeForCreatetime=optionType;
				that.createTimePickerShow=true;
			},
		
			//替换图标
			replaceIcon:function(optionType){
				let that=this;
				console.log("替换图片");
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						let obj = {
							type: "img",
							filePath:res.tempFilePaths[0],
							savePath: "/useravatars"  //文件存放目录
						};
						that.globalUtil.globalUpload(that,{
							param:obj,
							success: (res1) => {
								if(res1.code==1){
									console.log("上传结果",res1);
									 if(optionType=="add"){
										 that.newRecord.tradeIcon=res1.result.url;
									 }else{
										 that.updateRecord.tradeIcon=res1.result.url;
									 }
									//that.activeMonthObj.recordList[index].icon=res1.result.url;
								};
								uni.hideLoading();
							},
							fail:(res1) => {
								uni.hideLoading();
								that.globalUtil.utilAlert("上传失败!");
								console.log("上传失败",res1);
							},
							complete: (res1) => {
								uni.hideLoading();
								that.globalUtil.utilAlert("上传失败!");
								console.log("上传完成",res1);
							}
						});
						
					}
				});
			},
			//删除记录
			deleteItem:function(item){
				let that=this;
				uni.showModal({
					content: '确定要删除此记录',
					success: function (res) {
						if (res.confirm) {
							that.$u.api.imUser.deleteUserAccountRecord(item).then(res => {
								console.log("删除记录结果",res);
								if(res.code==200){
									that.getRecordList();
									that.updateRecordPopFlag=false;
									that.updateRecord={};
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//打开
			showUpdatePop:function(item,index){
				let that=this;
				that.updateRecord=item;
				this.updateRecordPopFlag=true;
			},
			toDetail:function(record){
				let that=this;
				let tradeTitle=record.tradeTitle;
				let tradeValue=record.tradeValue;
				console.log("tradeValue",tradeValue);
				console.log("tradeTitle",tradeTitle);
				if(tradeTitle=="美团平台商户"&&tradeValue==134){
					console.log("跳转详情");
					this.$u.route({
						url:'/pages/my/service/my-bill-detail',
					});
				}
			},
			//提交修改
			submitUpdateRecord:function(){
				let that=this;
				console.log("修改记录",that.updateRecord);
				this.$u.api.imUser.updateUserAccountRecord(that.updateRecord).then(res => {
					console.log("修改记录结果",res);
					if(res.code==200){
						that.getRecordList();
						that.updateRecordPopFlag=false;
						that.updateRecord={};
					}
				})
			},
			
			scrolltoUpper:function(){
				this.currentMonthIndex=new Date().getMonth()+1, //当前月份
				this.currentYearIndex=new Date().getFullYear(),//当期年份
				this.getRecordList();
			},
			
			//监听滚动
			scrolltolower:function(){
				let that=this;
				console.log("监听到页面滚动到底部");
				this.currentMonthIndex=this.currentMonthIndex-1;
				let month=this.currentMonthIndex<10?"0"+this.currentMonthIndex:this.currentMonthIndex;
				let param={
					timeDuring:this.currentYearIndex+"-"+month,
					tradeType:this.currentTradeType.value=='0'?'6':this.currentTradeType.value,
				}
				console.log("获取上一个月的账单记录参数",param);
				this.$u.api.imUser.getUserAccountRecordList(param).then(res => {
					console.log("获取上一个月的账单记录结果",res);
					if(res.code==200&&res.data){
						let recordList=res.data.recordList;
						if(recordList!=null&&recordList.length>0){
							that.activeMonthObj.recordList=that.activeMonthObj.recordList.concat(recordList);
							that.activeMonthObj.inputAmount=res.data.monthAccountInfo.inputAmount;
							that.activeMonthObj.outputAmount=res.data.monthAccountInfo.outputAmount;
							that.activeMonthObj.currentMonth=this.currentMonthIndex;
						}
					}else{
						this.currentMonthIndex=this.currentMonthIndex+1;
					}
				})
			},
			formatTimeStr:function(timeStr){
				//console.log("timeStr",timeStr);
				timeStr=timeStr.replace(/-/g,"/");
				let cdate=new Date(timeStr);
				let month= cdate.getMonth()+1;
				//console.log("month",month);
				let day=cdate.getDate();
				let hour= cdate.getHours();
				let min=cdate.getMinutes();
				let monthStr=month+"月";
				let dayStr=day+"日";
				let hourStr=hour+":";
				let minStr=min;
				/* if(month<10){
					monthStr="0"+month+"月";
				}
				if(day<10){
					dayStr="0"+day+"日";
				} */
				if(hour<10){
					hourStr="0"+hour+":";
				}
				if(min<10){
					minStr="0"+min;
				}
				let formatStr=monthStr+dayStr+" "+hourStr+minStr;
				//console.log("formatStr",formatStr);
				return formatStr;
			},
			openTradeTypePop:function(){
				let that=this;
				that.tradeTypePopFlag=true;
			},
			selectTradeType:function(tradeItem){
				this.currentTradeType=tradeItem;
				this.tradeTypePopFlag=false;
				this.getRecordList();
			},
			toBillStatistics:function(){
				this.$u.route({
					url:'/pages/my/service/my-bill-statistics',
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-picker-view{
		background-color: #f3f4f6;
	}
	.trade-type{
		height: 120rpx;
		padding:40rpx 30rpx 0rpx 30rpx;
		margin-bottom: 16rpx;
		background-color: #e2e2e2;
		border-radius: 10rpx;
		text-align: center;
		color: #000000;
	}
	.trade-type-4{
		padding:25rpx 30rpx 0rpx 30rpx;
	}
	.trade-type-active{
		background-color: rgb(232,248,238);
		border:1rpx solid #18b566;
		font-weight: bold;
		color:#18b566;
	}
	
</style>
<style>
	page{
		background-color: #efefef;
	}

</style>