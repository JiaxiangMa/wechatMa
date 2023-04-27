<template>
	<view>
		<u-navbar :is-back="true" title="群管理员" title-size="34"></u-navbar>
		<view>
			<view  class="desc-box" :style="'height:'+(windowHeight*0.4)+'px'">
				<view class="desc-box" style="">
					<view>
						 <u-icon name="level" :size="130" color="#f29100"></u-icon>
					</view>
					<!-- <view class="u-tips-color">
						最多可设置10名
					</view> -->
				</view>
				<view style="padding: 20rpx; text-align: left;width: 100%;color: #aaaaaa;font-size: 30rpx;">
					<view class="u-font-32 u-m-b-10">群管理员可以拥有以下权限:</view>
					<view>1.发表群公告 </view>
					<view>2.修改群名称 </view>
					<view>3.移除群成员</view>
					<view>4.全体禁言</view>
				</view>
			</view>

			<view class="u-m-t-20">
				<view class="grid-box">
					<view class="grid-body">
						<u-grid :col="5" :border="false">
							<u-grid-item   @click="clickUser"
										v-for="(user, index) in adminMemberList" :index="index" :key="index">
								<view class="badge-icon" @click.stop="deleteMember(user)" v-show="user.memberType==1">
									<u-icon name="minus-circle-fill" color="#fa3534" :size="32"></u-icon>
								</view>
								<u-image show-loading width="80rpx" height="80rpx" :src="user.userAvatar" border-radius="4">
									<view slot="loading" style="background-color: #FFFFFF;width: 80rpx;height: 80rpx;">
										<u-icon name="/static/image/chat/defaultPhoto.png"  size="80"></u-icon>
									</view>
									<view slot="error" style="background-color: #FFFFFF;">
										<u-image show-loading bgColor="#ffffff"  width="80rpx" height="80rpx" src="@/static/image/chat/defaultPhoto.png" border-radius="4"></u-image>
									</view>
								</u-image>
								<view class="grid-text u-line-1">{{ user.userName?user.userName:'xxxx' }}</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentGroupInfo:"",
				windowHeight:uni.getSystemInfoSync().windowHeight,
				adminMemberList:[]
			};
		},
		created:function(){

		},
		onLoad:function(option){
			let that=this;
			if(option.group){
				let  groupStr= option.group;
				let groupObj= JSON.parse(groupStr);
				this.currentGroupInfo=groupObj;
				console.log("当前群里信息",this.currentGroupInfo);

			}
		},
		onShow:function(){
			this.getGroupAdminMembers();
		},
		methods:{
			//获取群成员
			getGroupAdminMembers:function(){
				let that = this;
				that.adminMemberList=[];
				let param = {
					chatGroupId: that.currentGroupInfo.id,
				};
				that.$u.api.chatGroup.getGroupAdminMembers(param).then(res => {
					if (res.code == 200) {
						if(res.data.length>0){
							that.adminMemberList=res.data;
							/*
							  {userAvatar:'../../../static/image/chat/delete.png',"id":-2,"userName":"移除","userId":-2}
							  */
						}
						let obj={
							'userAvatar':'../../../static/image/chat/addMember.png',
							"id":-1,
							"userName":"添加",
							"userId":-1
						}
						that.adminMemberList.push(obj);
					} else {
						that.globalUtil.utilAlert("群成员获取失败");
						return;
					}
				})
			},


			//添加管理员
			deleteMember:function(userInfo){
				console.log("userInfo",userInfo);
				let that=this;
				let param={
					userId:userInfo.userId,
					chatGroupId:that.currentGroupInfo.id,
					memberType:0
				}
				console.log("添加群管理员",param);
				that.$u.api.chatGroup.changeGroupMemberType(param).then(res => {
					if (res.code == 200) {
						that.getGroupAdminMembers();
						return;
					}else {
						console.log("删除管理员失败")
						return;
					}
				})
			},


			clickUser:function(index){
				let that=this;
				let userInfo=that.adminMemberList[index];
				if (userInfo.userId>0) {
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
						   if(groupUserInfo.isFriend){
							   that.$u.route({
							     url: 'pages/chat/friends/friendHome',
							     params:{
							   	  friendId:userId
							     },
							   })
						   }else{
							   console.log("不是朋友关系");
							   this.$u.route({
							   	url: 'pages/chat/friends/newFriendInfo',
							   	params: {newFriendInfo:encodeURIComponent(JSON.stringify(groupUserInfo)),fromPage:1}
							   });
						   }
						}
					})
					return;
				}
				if(userInfo.userId==-1)
				{
					let param={
						optionType:1,
						chatGroupId: that.currentGroupInfo.id
					}
					this.$u.route("/pages/chat/chatGroup/showMoreGroupMember",param);
					return;

				}
				if(userInfo.userId==-2){
					let param={
						optionType:-1,
						chatGroupId: that.currentGroupInfo.id
					}
					this.$u.route("/pages/chat/chatGroup/showMoreGroupMember",param);
					return;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
 .desc-box{
	width: 100%;
	padding: 30rpx;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
 /* 九宫格end */
 .badge-icon {
 	position: absolute;
 	top: 1rpx;
 	right: 10rpx;
 	width: 30rpx;
 	height: 30rpx;
 	z-index: 10000;
 }

</style>
<style>
	page {
		background-color: #f1f1f1;
	}
</style>
