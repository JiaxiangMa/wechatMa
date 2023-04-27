<template>
	<view>
		<u-navbar :is-back="false" title="" :background="{backgroundColor:'#f1f1f1'}">
			<view class="custom-navbar">
				<view class="nav-left" @click="customBack">
					<view>{{pageStatus==0?'关闭':'取消'}}</view>
				</view>
				<view class="nav-center u-flex u-row-center u-col-center">
					<view>{{pageStatus==1?'选择多个聊天':'选择一个聊天'}}</view>
				</view>
				<view class="nav-right">
					<template v-if="pageStatus==1">
						<u-button v-if="selectedGroups.length>0" @click="toForward()" size="mini" type="success">
							完成({{selectedGroups.length}}/9)</u-button>
						<u-button v-if="selectedGroups.length<1" size="mini" :disabled="true" type="default">完成
						</u-button>
					</template>
					<template v-else>
						<view style="text-align: right;" @click="changePageStatus">多选</view>
					</template>
				</view>
			</view>
		</u-navbar>
		<view v-if="myGroupList.length>0">
			<view class="u-flex u-row-between u-col-center u-font-28  u-border-bottom" style="padding: 30rpx 20rpx;">
				<view style="color: #000000;font-weight: bold;">最近聊天</view>
				<view @click="toCreateNewChatgroup">
					<u-icon name="plus" label="创建新的聊天" label-color="#36648b" label-pos="right" margin-left="12rpx"
						color="#36648b"></u-icon>
				</view>
			</view>
			<scroll-view :scroll-x="false" :scroll-y="true" :style="'height:'+scrollViewHeight+'px'"
				class="hidden-scroll-bar">
				<view v-for="(group,index) in myGroupList" :key="index"
					class="u-flex u-row-left u-col-center u-border-bottom">
					<!-- v-if="group.id!=currentChatGroupId"-->
					<template>
						<view v-if="pageStatus==1"
							style="text-align: center;width: 50rpx;margin-right: 16rpx;margin-left: 16rpx;"
							@click="changeStatus(group,index)">
							<view v-show="group.selected==true">
								<image style="width: 40rpx;height: 40rpx;" mode="aspectFill"
									src="@/static/image/fileType/redioCheck.png"></image>
							</view>
							<view v-show="group.selected==false">
								<image style="width: 40rpx;height: 40rpx;" mode="aspectFill"
									src="@/static/image/fileType/radioNoCheck.png"></image>
							</view>
						</view>
						<view :style="pageStatus==1?'width: 90%;':'width:100%'">
							<u-cell-item @click="toForward(group)" :title="group.chatGroupName"
								:title-style="{fontSize:'32rpx',color:'#000000'}" :arrow="false" :border-bottom="false">
								<view slot="icon" style="border-radius: 10rpx;" class="u-m-r-16">
									<u-image :src="group.chatGroupAvatar" width="90" height="90" border-radius="10">
										<u-image slot="error" src="/static/image/chat/we-chat-logo.png" width="90"
											height="90" border-radius="10"></u-image>
										<u-loading slot="loading"></u-loading>
									</u-image>
								</view>
								<view slot="label">
									<text>{{group.memberCounts}}人</text>
								</view>
							</u-cell-item>
						</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentChatGroupId: '',
				pageStatus: 0,
				scrollViewHeight: 0,
				sendType: 1,
				delta:1,
				msgList: {},
				myGroupList: [],
				selectedGroups: [],
			};
		},
		created: function() {
			this.scrollViewHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight -
			98;
		},
		onLoad: function(option) {
			if (option.sendType) {
				this.sendType = Number(option.sendType);
			}
			if (option.delta){
				this.delta=Number(option.delta);
			}
			if (option.fromChatGroupId) {
				this.currentChatGroupId = Number(option.fromChatGroupId);
			}
			let msgList = option.msgList;
			if (msgList != null && msgList != undefined && msgList.length > 0) {
				this.msgList = JSON.parse(decodeURIComponent(msgList));
				//this.msgList = JSON.parse(msgList);
				//console.log("要转发的信息", this.msgList);
			}
			this.getMyChatGroupList();
		},
		methods: {
			//自定义返回
			customBack: function() {
				if (this.pageStatus == 0) {
					uni.navigateBack();
				} else {
					this.pageStatus = 0;
					this.selectedGroups = [];
					this.myGroupList.forEach(function(value, index) {
						value.selected = false;
					})
				}
			},
			changePageStatus: function() {
				console.log("多选选择");
				if (this.pageStatus == 0) {
					this.pageStatus = 1;
				} else {
					console.log("去转发");
				}
			},
			//获取我的群组列表
			getMyChatGroupList: function() {
				let that = this;
				let param = {};
				that.$u.api.chatGroup.getMyChatGroupListForForward(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						if (data.length > 0) {
							for (var i = 0; i < data.length; i++) {
								data[i].selected = false;
								data[i].disabled = false;
							}
						}
						that.myGroupList = data;
						//console.log("group",that.myGroupList[0]);
					}
				})
			},
			//点击群组转发时间
			toForward: function(group) {
				let that = this;
				if (this.pageStatus == 1) {
					let targetGroup = [];
					for (var i = 0; i < that.selectedGroups.length; i++) {
						targetGroup.push({
							'chatGroupId': that.selectedGroups[i].id
						})
					}
					let param = {
						targetGroup: targetGroup,
						messageList: this.msgList,
						sendType: this.sendType,
					};
					console.log("targetGroup", targetGroup);
					that.forwardMsg(param);
					return;
				} else {
					console.log("要转发的群组", group);
					console.log("转发的信息", this.msgList);
					let param = {
						targetGroup: [{
							'chatGroupId': group.id
						}],
						messageList: this.msgList,
						sendType: this.sendType,
					};
					that.forwardMsg(param);
				}
			},
			//转发信息
			forwardMsg: function(param) {
				let that = this;
				console.log("转发的参数", param);
				that.$u.api.chatGroup.forwardMsg(param).then(res => {
					console.log("转发的结果", res);
					if (res.code == 200) {
						uni.showToast({
						    title: '转发成功',
						    icon: "success",
						    duration: 2000,
							complete:function(){
								if(that.delta==2){
									//多选的直接退到聊天界面
									uni.navigateBack({
										delta:2,
									})
								}else{
									uni.navigateBack({
										success:function(){
											that.globalUtil.utilAlert("转发成功!","success");
										}
									});
								}
							}
						});
					}
				})
			},
			//选择聊天中的文件
			changeStatus: function(groupObj, key) {
				let that = this;
				let index;
				if (that.selectedGroups.length >= 9) {
					index = that.selectedGroups.findIndex(function(obj) {
						return obj.id === groupObj.id
					})
				}
				if (index === -1) {
					this.globalUtil.utilAlert("最多能勾选9个", 'warning');
					return;
				}
				that.myGroupList[key].selected = !this.myGroupList[key].selected;
				//如果选中的列表为空,并且当前点击的文件selected等于true,就放入已选择的列表中
				if (that.selectedGroups.length === 0) {
					if (groupObj.selected === true) {
						that.selectedGroups.push(groupObj);
					}
				} else {
					let j = -1;
					for (let i = 0; i < that.selectedGroups.length; i++) {
						if (groupObj.id === that.selectedGroups[i].id) {
							//当存在，再次点击说明需要取消选中
							if (groupObj.selected === false) {
								//说明是选中的状态
								j = i;
								break;
							}
						}
					}
					if (j !== -1) {
						//表示先获取这个元素的下标，然后从这个下标开始计算，删除长度为1的元素
						that.selectedGroups.splice(j, 1);
					} else {
						that.selectedGroups.push(groupObj);
					}
				}
			},

			toCreateNewChatgroup: function() {
				let that=this;
				console.log("发起新的群聊进行转发");
				this.$u.route({
					url: '/pages/chat/chatGroup/forwardMsgToNewGroup',
					params: {
						messageList:JSON.stringify(that.msgList),
						sendType: that.sendType,
						delta:3,
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.custom-navbar {
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		padding: 0 30rpx;

		.nav-left {
			font-size: 32rpx;
			color: #333333;
			width: 15%;
		}

		.nav-center {
			font-size: 36rpx;
			font-weight: bold;
			width: 65%;
		}

		.nav-right {
			font-size: 32rpx;
			color: #333333;
			width: 16%;
			text-align: right;
		}
	}

	.hidden-scroll-bar {
		::-webkit-scrollbar {
			display: none;
			height: 0;
			width: 0;
		}
	}
</style>
