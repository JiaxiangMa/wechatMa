<template>
	<view class="content">
		<u-navbar :is-back="false" title=""  :background="{ background: '#f1f1f1'  }"  >
			<view class="slot-wrap-full">
				<view class="" 
					:style="plat=='ios'?'width: 100%;margin-left: 70rpx;':'width: 100%;margin-left: 70rpx;padding-left:20rpx;'">
					 <view v-if="dataLoading==false" 
						style="font-size: 34rpx;font-weight: bold;color: #404133;text-align: center;">
						{{navbarTitle}}
					 </view>
					 <view v-else class="u-flex u-row-center u-col-center">
						 <view class="u-m-r-10">
							 <u-loading mode="circle" color="#19be6b"></u-loading>
						 </view> 
						 <view style="font-size: 34rpx;font-weight: bold;color: #404133;text-align: center;">收取中</view>
					 </view>
				</view>
			</view>
			<view v-if="plat!='ios'" 
					class="u-flex u-row-around u-col-center  u-p-20"
					slot="right" >
				<view class="u-m-r-20">
					<u-icon class="u-clear-icon" @click="toSearch()"  
							:size="46" name="search" color="#606266"></u-icon>
				</view>
				<view>
					<u-icon name="plus-circle" :size="46" color="#606266" @click="showSelect"></u-icon>
				</view>
			</view>	
			<view  v-else  class="slot-wrap"  slot="right" >
				<u-icon name="/static/image/chat/add.png" :size="40" color="#000000" @click="showSelect"></u-icon>
			</view>
		</u-navbar>
		<selectInput :list="selectList" :list-key="'name'" :show.sync="selectShow" @on-select="checkSelect" @close="closeSelect" />
		<!-- @refresherrefresh="toFullScreen()"  :refresher-triggered="refresherTriggered" :refresher-enabled="true"  -->
		<scroll-view  :scroll-x="false" :scroll-y="true" :style="'height:'+scrollViewHeight+'px'" class="hidden-scroll-bar">	
			<template v-if="plat=='ios'">
				<view class="u-flex u-row-center u-col-center u-m-16" @click="toSearch()"
						style="background-color: #FFFFFF;height: 80rpx;border-radius: 4rpx;color: #c0c0c0;">
					<view class="u-m-r-20">
							<u-icon class="u-clear-icon" top="6rpx"  :size="40" name="search" color="#c0c0c0"></u-icon>
					</view>
					<view style="color: #c0c0c0;font-size: 34rpx;">搜索</view>
				</view>
			</template>
			<view   class="item u-border-bottom bg_view u-m-b-1"
					@click="toChatGpt"
					hover-class="message-hover-class">
				<view style="border-radius: 10rpx;" class="u-m-r-10 u-margin-left-10">
						<u-image   width="90" height="90" border-radius="10">
							<u-image  slot="error" 
							src="https://pic4.zhimg.com/v2-645d0da7460908edf795fd38c3a57f9f_b.jpg" 
							width="90" height="90" border-radius="10"></u-image>
							<u-loading slot="loading"></u-loading>
						</u-image>
				</view>
			<!-- 	<view style="position: relative;">
				  <u-badge :offset="[-46,6]"  type="error" :count="8"></u-badge>
				</view> -->
				<view class="right  title-wrap">
					<view class="right_top">
						<view class="right_top_name u-line-1" style="font-size: 32rpx;font-weight: bold;">ChatGpt</view>
						<view class="right_top_time">{{defaultTime}}</view>
					</view>
					<view class="right_btm">
						<view class="u-line-1" style="max-width: 90%;font-size: 28rpx;">
							<text   class="u-m-r-4 u-margin-left-4">智能对话</text>
						</view>
					</view>
				</view>
			</view>
			<view v-if="myGroupList.length>0" class="u-border-top">
				<template  v-for="(group, index) in myGroupList">
						<u-swipe-action :show="group.showOptionFlag"  :index="index" :key="group.imGroup.id" 
										btn-width="160" @click="clickOption" @open="openOption" :options="options">
							<view class="item  u-m-b-1" :class="group.groupUser.topFlag==1? ' bg_view' : 'bg_view_top'" 
											hover-class="message-hover-class" 
											@tap="linkToChatting(group)">
								<view style="border-radius: 10rpx;" class="u-m-r-10 u-margin-left-10">
										<u-image :src="group.imGroup.chatGroupAvatar" width="90" height="90" border-radius="10">
											<u-image  slot="error" src="/static/image/chat/we-chat-logo.png" width="90" height="90" border-radius="10"></u-image>
											<u-loading slot="loading"></u-loading>
										</u-image>
										<!-- <image :src="group.imGroup.chatGroupAvatar" style="width: 90rpx;height:90rpx;border-radius: 10rpx;"></image> -->
								</view>
								<view style="position: relative;" v-show="group.groupUser.unReadNum>0">
								  <u-badge :offset="[-46,6]"  type="error"  :is-dot="true"></u-badge>
								</view>
								<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
								<view class="right  title-wrap" style="border-bottom: 1rpx solid #f2f6fc;">
									<view class="right_top">
										<view class="right_top_name u-line-1" style="font-size: 33rpx;color:#000000">{{group.imGroup.chatGroupName}}</view>
										<view v-if="group.imGroupMessageRef.id!=0" class="right_top_time">{{group.imGroupMessageRef.createTime.substring(0,11)}}</view>
										<view v-else class="right_top_time">    </view>
									</view>
									<view class="right_btm" style="padding-top: 6rpx;">
										<view class="u-line-1" style="max-width: 90%;font-size: 27rpx;">
											<text v-if="group.groupUser.unReadNum>0" class="u-m-r-4 u-margin-left-4">[{{group.groupUser.unReadNum}}条]</text>
											<text v-if="group.imGroupMessageRef.id!=0&&group.imGroup.chatGroupType==1" class="u-m-r-4">{{group.imGroupMessageRef.userName}}:</text>
											<text>{{group.imGroupMessageRef.lastMsgContent?group.imGroupMessageRef.lastMsgContent:'[空]'}}</text>
										</view>
										<view class="u-line-1">
											<u-icon v-show="group.groupUser.chatStatus==1" name="/static/image/chat/pinbi.png" color="#c0c4cc" size="28"></u-icon>
										</view>
									</view>
								</view>
							</view>
						</u-swipe-action>
				</template>
			</view>
			<view v-else>
				<view v-if="dataLoading==false" style="position: absolute;bottom: 500rpx;width: 100%;">
					<u-empty text="暂无聊天群组" mode="message"></u-empty>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import searchInput from '@/components/searchInput/index.vue';
import selectInput from '@/components/selectInput/selectInput.vue';
import config from '@/common/environment.js';
const WEBSOCKET_SERVICE = config.WEBSOCKET_SERVICE;
export default {
	components: { searchInput, selectInput},
	data() {
		return {
			plat:'',
			refresherTriggered:false,
			windowHeight:0,
			navbarTitle:'微信',
			scrollViewHeight:0,
			is_open_socket:false,
			socketTask:null,
			myGroupList:[],
			selectShow: false,
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d',
						fontSize: '24rpx'
					}
				}
			],
			selectList: [
				{ id: '1', name: '发起群聊', icon: '/static/image/chat/option-1.png' },
				{ id: '2', name: '添加朋友', icon: '/static/image/chat/option-2.png' },
				{ id: '3', name: '扫一扫', icon: '/static/image/chat/option-3.png' },
				{ id: '4', name: '收付款', icon: '/static/image/chat/option-4.png' }],
			dataLoading:false,
			defaultTime:"",				
		};
	},
	created:function(){
		this.defaultTime= this.$u.timeFormat(new Date().getTime(), 'yyyy-mm-dd');
	},	
	onLoad:function(){
		let plat=this.$u.os();
		console.log("当前系统是",plat);
		this.plat=plat;
		let windowHeight=this.$u.sys().windowHeight;
		this.windowHeight=windowHeight;
		this.scrollViewHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 45;
		this.myGroupList=this.vuex_groupList;
	},
	onShow:function(){
		let that=this;
		that.refresherTriggered=false;
		that.getMyChatGroupList();	
		that.initWebScoket();
	},
	
	onHide(){
	  this.closeSocket();
	},
	
	onUnload(){
	  this.closeSocket();
	},
	
	methods: {
		getMyChatGroupList:function(){
			let that=this;
			that.dataLoading=true;
			let param={};
			that.$u.api.chatGroup.getMyChatGroupList(param).then(res => {
				if(res.code==200){
					let data=res.data;
					if(data.length>0){
						for (var i = 0; i < data.length; i++) {
							data[i].showOptionFlag=false;
						}
					}
					that.myGroupList=data;
					that.$u.vuex('vuex_groupList', data);
					that.dataLoading=false;
				}else{
					console.log("res",res);
					that.dataLoading=false;
				}
			})	   
		},
		// 进入这个页面的时候创建websocket连接【整个页面随时使用】
		initWebScoket() {
			let that = this;
			let userId = that.vuex_userInfo.id;
			let chatGroupId =0;
			let url = WEBSOCKET_SERVICE + userId + "/" + chatGroupId;
			console.log("列表界面webSocket链接地址:",url);
			that.socketTask = uni.connectSocket({
				url: url,
				header:{
					token:that.vuex_token
				},
				success(data) {
				    console.log("列表界面websocket连接成功,监听信息推送");
				},
			  });
			  // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
			that.socketTask.onOpen((res) => {
				that.is_open_socket = true;
				that.socketTask.onMessage((res) => {
				  if(res.data!=null){
					let msgObj=JSON.parse(res.data);
					console.log("列表界面监听到服务器发送的信息",msgObj);
					that.getMyChatGroupList();
					let fromUserId= msgObj.fromUserId;
					let chatGroupId=msgObj.chatGroupId;
					if(fromUserId!= that.vuex_userInfo.id){
						that.globalUtil.palyMsgTipSelected(that,chatGroupId);
					}
				  }
				});
			  })
		  // 这里仅是事件监听【如果socket关闭了会执行】
		  that.socketTask.onClose(() => {
		    console.log("列表界面websocket已经断开连接");
		  })
		},
		// 关闭websocket【离开这个页面的时候执行关闭】
		closeSocket() {
		  let that=this;
		  that.socketTask.close({
		    success(res) {
		      that.is_open_socket = false;
		      console.log("列表界面websocket关闭成功", res)
		    },
		    fail(err) {
		      console.log("列表界面websocket关闭失败", err)
		    }
		  })
		},
		//打开或者关闭弹窗
		showSelect(){
			this.selectShow = !this.selectShow;
		},
		//action 点击事件
		clickOption(index, index1) {
			if (index1 == 0) {
				//this.myGroupList.splice(index, 1);
				let group= this.myGroupList[index];
				this.hiddenGroup(group);
			} 
		},
		//移除群聊
		hiddenGroup:function(group){
			let that=this;
			let groupId=group.imGroup.id;
			let param={
				"chatGroupId":groupId
			}
			console.log("移除群聊",param);
			that.$u.api.chatGroup.hiddenGroup(param).then(res => {
				that.getMyChatGroupList();
			})
			return;	
		},
		
		//action 打开事件
		openOption(index) {
			this.myGroupList[index].showOptionFlag = true;
			this.myGroupList.map((val, idx) => {
				if (index != idx) this.myGroupList[idx].showOptionFlag = false;
			});
		},
		//跳转聊天窗口
		linkToChatting:function(groupInfo) {
		  let that=this;
		  //console.log("群信息",groupInfo);
		  let chatGroupId=groupInfo.imGroup.id;
		  let groupType=groupInfo.imGroup.chatGroupType;
		  let currentUserId=that.vuex_userInfo.id;
		  //重置未读信息数量
		  let paramData={"chatGroupId":chatGroupId,"userId":currentUserId,"groupType":groupType};
		  that.$u.api.chatGroup.clearUnReadNum(paramData).then(res => {
		    if (res.code===200) {
		      uni.hideLoading();
		      let param="?chatGroupId="+chatGroupId;
		      let _url="/pages/chat/chatGroup/chatting";
		      let chatUrl=_url+param;
		      uni.navigateTo({
		        url: chatUrl,
		        success() {
					//that.resetUnReadNum(paramData);
		        }
		      });
		    }
		    else{
		      console.log("清除未读数量失败",res);
		      that.globalUtil.utilAlert(res.data.msg,"none");
		      uni.hideLoading();
		      return;
		    }
		    // 获得数据
		  }).catch(res => {
		    // 失败进行的操作
		    console.log("清除未读数量接口请求失败");
		  });
		},
		//关闭弹窗
		closeSelect(){
			//小程序兼容
			this.selectShow = false;
		},
		//点击选择菜单
		checkSelect(index) {
			let that=this;
			if(index==0){
				that.globalUtil.checkUserPower(that,"addNewGroup",{
					success:function(res){
						that.$u.route({
							url: '/pages/chat/chatGroup/launchChat',
							params:{type: "1"}
						})
					},
					fail:function(res){
						uni.showModal({
							title: '抱歉,暂无权限!',
							content: '请添加客服为好友,然后进行申请',
							confirmText:'立即添加',
							cancelText:'算了',
							success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
									that.$u.route("/pages/search/searchFriend",{type:1});
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				});
			}
			else if (index == 1) {
				this.$u.route({
					url: '/pages/chat/friends/addFriend',
					params:{}
				})
			}
			else if(index == 2){
				this.globalUtil.scanQRcode(that,{
					complete:function(res){
						console.log("扫码结果",res);
						if(res.resp_code==1000){
							let respData=res.resp_result;
							that.$u.route({
								url:'/pages/chat/qr-info/qr-info',
								params:{
									qrInfo:respData
								},
								animationType:'slide-in-bottom'
							});
						}	
					},
				})
			}else{
				//收付款
			}
		},
		toFullScreen:function(){
			console.log("x下拉事件");
			this.refresherTriggered=true;
			this.$u.route({
				url:"/pages/u-full-screen/u-full-screen",
				animationType:'slide-in-top',
				animationDuration:700
			});
			return;
		},
		toSearch:function(){
			this.$u.route({
				url:'/pages/search/common-search'
			})
		},
		toChatGpt:function(){
			this.$u.route({
				url: '/pages/chat/chatting/chat-gpt-conversion/chat-gpt-conversion',
				params:{type: "1"}
			})
		},
	},
};
</script>

<style lang="scss" scoped>
.content {
	.item {
		width: 750rpx;
		display: flex;
		align-items: center;
		.right {
			overflow: hidden;
			flex: 1 0;
			padding: 20rpx 20rpx 26rpx 6rpx;
			&_top {
				display: flex;
				justify-content: space-between;
				&_name {
					font-size: 28rpx;
					color: $u-main-color;
					flex: 0 0 450rpx;
					overflow: hidden;
				}
				&_time {
					font-size: 22rpx;
					color: $u-light-color;
				}
			}
			&_btm {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 22rpx;
				color: $u-tips-color;
				padding-top: 10rpx;
				
			}
		}
	}
	.bg_view_top {
		background-color: #ffffff;
	}
	.bg_view {
		background-color: #f1f1f1;
	}
	.hidden-scroll-bar{
		::-webkit-scrollbar{
			display: none;
			height: 0;
			width: 0;
		}
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx; 
	}
	.slot-wrap-full {
		display: flex;
		flex: 1;
		align-items: center;
		//padding: 0 30rpx; 
		text-align: center;
	}
}
</style>
<style>
	.content .u-image__error{
		background-color: #FFFFFF !important;
	}
	page{
		background-color: #f1f1f1;
	}
</style>

