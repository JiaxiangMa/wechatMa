<template>
	<view>
		<view class="custom-head-navbar">
			<u-navbar title="群成员列表" :border-bottom="false" :title-bold="true"></u-navbar>
		</view>
		<view  class="content-body"  v-if="groupMemberList.length>0">
			<view class="u-p-l-30 u-p-r-30">
				<u-search  :height="70" @search="searchUser" @blur="searchUser" @clear="searchUser"
						placeholder="输入用户名" :show-action="false" shape="square"  v-model="searchWord"></u-search>
			</view>
			<view>
				<view class="grid-box">
					<view class="grid-body">
						<u-grid :col="5" :border="false">
							<u-grid-item  v-for="(user, index) in groupMemberList" :index="index" :key="index"
										  :custom-style="user.memberType>0?adminCustomGirdItemStyle:customGirdItemStyle"
										  @click="clickUser">
								<view class="badge-icon" v-show="user.memberType>0">
									<text>管</text>
								</view>
								<u-image  width="80rpx" height="80rpx" :src="user.userAvatar" border-radius="4">
									<view slot="loading" style="background-color: #FFFFFF;width: 80rpx;height: 80rpx;">
										<u-image  bgColor="#ffffff"  width="80rpx" height="80rpx"
										 src="/static/image/chat/defaultPhoto.png" border-radius="4"></u-image>
									</view>
									<view slot="error" style="background-color: #FFFFFF;">
										<u-image show-loading bgColor="#ffffff"  width="80rpx" height="80rpx"
											src="/static/image/chat/defaultPhoto.png" border-radius="4"></u-image>
									</view>
								</u-image>
								<view class="grid-text u-line-1">{{user.userName?user.userName:'未知用户' }}</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<ls-loading text="数据加载中"  animation="rise"></ls-loading>
		</view>
	</view>
</template>

<script>
	import lsLoading from '@/uni_modules/ls-loading/components/ls-loading/ls-loading.vue';
	export default {
		data() {
			return {
				scrollViewHeight:0,
				chatGroupId:'',
				currentUserId:'',
				groupMemberList:[],
				tempData:[],
				optionType:0,
				customGirdItemStyle:{
					padding:'10rpx 0rpx',
				},
				adminCustomGirdItemStyle:{
					padding:'10rpx 0rpx',
					//borderRadius:'10rpx',
					backgroundColor:'#fef0f0'
				},
				searchWord:'',
			};
		},
		onLoad:function(option){
			let that=this;
			this.scrollViewHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 50;
			console.log("页面初始化参数",option);
			let userId= that.vuex_userInfo.id;
			that.currentUserId=userId;
			let chatGroupId= option.chatGroupId;
			that.chatGroupId=chatGroupId;
			if(option.optionType){
				that.optionType=Number(option.optionType);
			}
			that.initData();//获取通讯录好友
		},

		methods:{
			initData:function(){
				let that = this;
				let param = {
					chatGroupId: that.chatGroupId,
					limitFlag:0,
				};
				that.$u.api.chatGroup.getChatGroupMembers(param).then(res => {
					if (res.code == 200) {
						 that.groupMemberList=res.data;
						 that.tempData=that.groupMemberList;
					}else {
						that.globalUtil.utilAlert("群成员获取失败");
						return;
					}
				})
			},
			clickUser:function(index){
				let that=this;
				let userInfo=that.groupMemberList[index];
				console.log("userInfo",userInfo);
				console.log("optionType",this.optionType);
				if (this.optionType==0) {
					this.showInfo(userInfo);
				}
				if(this.optionType==1){
					let memberType=userInfo.memberType;
					if(memberType==0){
						let content='确定添加['+userInfo.userName+"]为管理员吗?";
						uni.showModal({
							title: '添加管理员',
							content:content,
							confirmColor:'#19be6b',
							success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
									that.changeGroupMemberType(userInfo);
								} else if (res.cancel) {
									console.log('用户点击取消');
									that.showInfo(userInfo);
								}
							}
						});
					}else{
						this.showInfo(userInfo);
					}
				}
			},
			showInfo:function(userInfo){
				let that=this;
				console.log("点击用户",userInfo);
				let userId= userInfo.userId;
				if(that.currentUserId==userId){
					return;
				}
				//根据userId去查询是否是好友
				let param={
					groupUserId:userId
				}
				that.$u.api.imUser.getGroupMemberInfo(param).then(res => {
				if(res.code==200){
					   let groupUserInfo= res.data;
					   //console.log("查询群成员信息结果",groupUserInfo);
					   if(groupUserInfo.isFriend){
						   that.$u.route({
						     url: '/pages/chat/friends/friendHome',
						     params:{
						   	  friendId:userId
						     },
						   })
					   }else{
						   console.log("不是朋友关系");
						   this.$u.route({
						   	url: '/pages/chat/friends/newFriendInfo',
						   	params: {newFriendInfo:encodeURIComponent(JSON.stringify(groupUserInfo)),fromPage:1}
						   });
					   }
					}
				})
				return;
			},
			//添加管理员
			changeGroupMemberType:function(userInfo){
				let that=this;
				let param={
					userId:userInfo.userId,
					chatGroupId:that.chatGroupId,
					memberType:1
				}
				console.log("添加群管理员",param);
				that.$u.api.chatGroup.changeGroupMemberType(param).then(res => {
					if (res.code == 200) {
						that.globalUtil.utilAlert("群管理员设置成功");
						that.initData();
						return;
					}else {
						that.globalUtil.utilAlert("群成员获取失败");
						return;
					}
				})
			},
			//搜索
			searchUser:function(value){
				let that=this;
				console.log("value",value);
				if(value&&value.length>0){
					let list=JSON.parse(JSON.stringify(that.tempData));
					that.groupMemberList=list.filter(function(userInfo){
						return userInfo.userName.indexOf(value)!=-1;
					});
				}
				else{
					that.groupMemberList=that.tempData;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
 .content-body{
		.scroll-Y{
			::-webkit-scrollbar{
				display: none;
				height: 0;
				width: 0;
			}
		}
		/* 九宫格start */
		.grid-box {
			//box-shadow: 1px 0px 1px 0px #D8D8D8;
			//text-align: center;
			//width: 100%;
			//margin: 10rpx 8rpx;
			background-color: #FFFFFF;
			border-radius: 10px;
			//border: 1rpx solid #D8D8D8;
		}

		.grid-body {
			padding: 30upx;
		}

		.grid-box .gird-item{
		   display: flex;
		   flex-direction: column;
		   justify-content:center;
		   align-items: center;
		   margin-bottom: 20upx;
		}

		.grid-box .image {
			width: 80upx;
			height: 80upx;
		}

		.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
			width: 120rpx;
			text-align: center;
		}

		.grid-box .text {
			font-size: 26upx;
			margin-top: 10upx;
			font-family: PingFangSC-Regular, PingFangSC;
			font-weight: 400;
			color: rgba(74, 74, 74, 1);
			line-height: 26 upx;
		}

		/deep/ .uni-grid-item__box.border-top {
			border-top: hidden;
		}

		/deep/ .uni-grid-item__box.border {
			border-bottom: hidden;
		  //  border-right: hidden;
		}

		.badge-icon {
			position: absolute;
			top: 1rpx;
			right: 10rpx;
			width: 30rpx;
			height: 30rpx;
			z-index: 10000;
			background-color: #fa3534;
			color:#FFFFFF;
			border-radius:15rpx;
			text-align: center;
			font-size: 20rpx;
		}
		/* 九宫格end */
	}
</style>
