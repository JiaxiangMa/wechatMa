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
			
			<view class="u-m-30">
				<view>
					<u-icon name="arrow-down-fill" @click="showRuleFlag=true" 
							 color="#fa9100" label-color="#fa9100"
							 size="30" label-size="32"
							:label="redBagRule.text" label-pos="left"></u-icon>
				</view>
				<view  style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;margin:16rpx 0rpx 6rpx 0rpx;">
					<view class="u-flex u-row-between u-col-center u-p-20"  :style="redBagNums>currentChatGroup.memberCounts?'color:#fa3534':''">
						<view>
							<!-- <u-icon name="red-packet-fill"
									 color="#FC5531" label-color="#000000" top="2"
									 size="40rpx" label-size="34" margin-left="16rpx"
									 label="红包个数" label-pos="right"></u-icon> -->
							<text>红包个数</text>		 
						</view>
						<view class="u-flex u-row-between u-col-center" >
							<view style="width: 90%;">
								<u-input input-align="right" v-model="redBagNums" type="digit" :border="false"
								 @input="countChange"
								:custom-style="{color:redBagNums>currentChatGroup.memberCounts?'#fa3534':'#000000',fontSize:'34rpx'}" 
								placeholder="填写红包个数" placeholder-style="color:#cccccc;font-size:34rpx;" :clearable="false"/>
							</view>
							<view style="width: 30rpx;color: #515151;margin-left: 10rpx;">个</view>
						</view>
					</view>
				</view>
				<view style="font-size: 28rpx;margin-left: 16rpx;color: #909399;">本群共<text>{{currentChatGroup.memberCounts}}</text>人</view>
			</view>
			
			<view class="u-m-30" style="background-color: #ffffff;color: #000000;font-size: 34rpx;border-radius: 10rpx;">
				<!--  :style="redBagValue>200?'color:#fa3534':''" -->
				<view class="u-flex u-row-between u-col-center u-p-20" >
					<view>
						<text v-if="redBagRule.value==1">总金额</text>
						<text v-if="redBagRule.value==2">单个金额</text>
						<text v-if="redBagRule.value==3">金额</text>
					</view>
					<view v-if="redBagRule.value!=2">
						<u-input input-align="right" v-model="redBagValue" type="digit" :border="false" 
						:custom-style="{fontSize:'34rpx'}"  @input="redBagValueChange"
						placeholder="¥0.00" placeholder-style="color:#cccccc;font-size:34rpx;" :clearable="false"/>
					</view>
					<view v-else>
						<u-input input-align="right" v-model="singleRedBagValue" type="digit" :border="false" 
						:custom-style="{fontSize:'34rpx'}" @input="redBagValueChange"
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
			<!-- redBagValue>200?'color:#fa3534;text-align: center;margin-top: 120rpx;': -->
			<view  :style="'text-align: center;margin-top: 120rpx;'"
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
			
			<!-- 红包发送规格 -->
			<u-action-sheet :list="redBagRules" v-model="showRuleFlag" @click="ruleClick" border-radius="16"></u-action-sheet>
			
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
				redBagNums:'',
				redBagValue:"",
				singleRedBagValue:'',
				redBagRemark:"",
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44,
				currentChatGroup:'',
				passwordPopFlag:false,
				pwdFocus:false,
				pwdErrorTips:'',
				redBagRule:{
					text:'拼手气红包',
					value:1
				},
				showRuleFlag:false,
				redBagRules:[
					{text:'拼手气红包',value:1,fontSize:34,color:'#000000'},
					{text:'普通红包',value:2,fontSize:34,color:'#000000'},
					{text:'专属红包',value:3,fontSize:34,disabled:true,color:'#000000'}
				]
			};
		},
		onLoad:function(option){
			if(option.currentChatGroup!=null&&option.currentChatGroup!=undefined){
				this.currentChatGroup=JSON.parse(option.currentChatGroup);
				console.log("当前群组",this.currentChatGroup);
			}
		},
		methods:{
			ruleClick:function(index){
				this.redBagRule=this.redBagRules[index];
				this.singleRedBagValue="";
				this.redBagValue="";
				this.redBagNums="";
			},
			
			redBagValueChange:function(e){
				let value="0.00";
				if(this.redBagRule.value==2){
					value= this.singleRedBagValue;
				}
				else{
					value=this.redBagValue;
				}
				value = value .replace(/[^\d.]/g, "") //将非数字和点以外的字符替换成空
					.replace(/^\./g, "") //验证第一个字符是数字而不是点
					.replace(/\.{2,}/g, ".") //出现多个点时只保留第一个
					.replace(".", "$#$") // 1、将数字的点替换成复杂字符$#$
					.replace(/\./g, "") // 2、将字符串的点直接清掉
					.replace("$#$", ".") // 3、将复杂字符再转换回点
					.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
				if (value.indexOf(".") < 0 && value != "") {
					  value = parseFloat(value);
				} else if (value.indexOf(".") > 1 && value[0] === '0') {
					  value = parseFloat(value);
				}
				this.$nextTick(function(){
					if(this.redBagRule.value==2){
						this.singleRedBagValue=value;
					}
					else{
						this.redBagValue=value;
					}
				})
			},
			
			valueFormat:function(){
				if(this.redBagRule.value!=2){
					let value=this.redBagValue?this.redBagValue.toString():'0.00';
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
				else{
					if(this.singleRedBagValue&&this.redBagNums){
						let a= Number(this.singleRedBagValue);
						let b=Number(this.redBagNums);
						let value=a*100*b/100;
						var arrayNum = value.toString().split(".");
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
					}else{
						return "0.00";
					}
				}
				return "0.00";
			},
			countChange:function(e){
				console.log("监听红包个数",e);
				if(e>this.currentChatGroup.memberCounts){
					this.showTips("红包个数不可超过当前群聊人数");
					return;
				}
			},
			showPwdPop:function(){
				let that=this;
				if(this.redBagNums>this.currentChatGroup.memberCounts){
					this.showTips("红包个数不可超过当前群聊人数");
					return;
				}
				if(this.redBagRule.value==2){
					if(this.singleRedBagValue.length<1){
						this.showTips("未填写[金额]");
						return;
					}
					this.redBagValue=Number(this.singleRedBagValue)*100*Number(this.redBagNums)/100;
				}else{
					if(this.redBagValue.length<1||this.redBagValue<=0){
						this.showTips("未填写[金额]");
						return;
					}
				}
				this.pwdErrorTips="";
				this.passwordPopFlag=true;
				setTimeout(function(){
					that.pwdFocus=true;
				},1000)
			},
			closePwdPop:function(){
				this.passwordPopFlag=false;
				this.pwdErrorTips="";
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
					redBagNums:this.redBagNums,
					redBagValue:this.redBagValue,
					redBagBg:0,
					receiveAllFlag:false,
					fromUser:this.vuex_userInfo.id,
					chatGroupId:Number(this.currentChatGroup.id),
					redBagType:1,
					redBagRule:this.redBagRule.value,
				}
				console.log("发出红包参数",param);
				//return;
				that.$u.api.chatGroup.sendRedBagForGroup(param).then(res => {
					if(res.code==200){
						console.log("红包已发");
						uni.navigateBack();
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
