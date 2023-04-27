<template>
	<view>
		<view>
			<u-navbar title=" " :background="{ background: '#ffffff'  }" :border-bottom="false">
				<view class="slot-wrap">
					<view>
						<u-icon name="more-dot-fill" color="#000000" size="32"></u-icon>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="friendInfo">
			<view class="img">
				<u-image 	:src="friendInfo.headImg"
							@tap="previewImg(friendInfo.headImg)"
							mode="aspectFill" width="130" height="130" border-radius="12">
					<u-loading slot="loading"></u-loading>
					<view slot="error">
							<u-icon name="account" size="64"></u-icon>
					</view>
				</u-image>
			</view>

			<view class="friendInfo-desc">
				<view class="friendInfo-desc-name">
					<text class="u-m-r-10" style="font-size: 42rpx;">{{friendInfo.friendName}}</text>
					<u-icon top="6rpx"  v-if="friendInfo.sex==1" name="/static/image/chat/addFriend/woman.png" size="34"></u-icon>
					<u-icon  top="6rpx"  v-if="friendInfo.sex==0" name="/static/image/chat/addFriend/man.png" size="34"></u-icon>
				</view>
				<view class="friendInfo-desc-gray">昵称：{{friendInfo.userName}}</view>
			<!-- 	<view class="friendInfo-desc-gray">账号：{{friendInfo.mobile}}</view> -->
				<view class="friendInfo-desc-gray u-line-1" style="max-width: 500rpx;">微信号：{{friendInfo.chatNumber}}</view>
				<view class="friendInfo-desc-gray">地区：{{parseAddress(friendInfo.address)}}</view>
			</view>
		</view>
		<u-gap height="1" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
		<u-cell-group>
			<u-cell-item title="备注和标签" :title-style="titleStyle" @click="setFiendTag"></u-cell-item>
			<u-cell-item title="朋友权限" :title-style="titleStyle" @click="setFiendPermission"></u-cell-item>
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
				<!--  label="暂不支持查看" -->
			<u-cell-item title="朋友圈" :title-style="titleStyle" @click="viewHisFiendCircle" style="padding: 40rpx 30rpx;">
			</u-cell-item>
			<u-cell-item title="视频号" :title-style="titleStyle"></u-cell-item>
			<u-cell-item title="更多信息" :title-style="titleStyle" @click="linkToMoreInfoMation"></u-cell-item>
		</u-cell-group>
		<view class="" v-if="!isItMe">
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			<u-cell-item :arrow="false" @click="createSingleChat">
				<view class="u-flex u-row-center u-col-center" style="font-size: 34rpx;color: #36648B">
					<view>
						<u-icon style="position: relative;top: 10rpx;"  name="/static/image/chat/sms-send.png"  size="40"></u-icon>
						<text style="margin-left: 10rpx;font-weight: bold;">发消息</text>
					</view>
				</view>
			</u-cell-item>

			<u-cell-item :arrow="false" @click="toCall">
				<view class="u-flex u-row-center u-col-center" style="font-size: 34rpx;color: #36648B">
					<view>
						<u-icon  style="position: relative;top: 10rpx;"   name="/static/image/chat/video-call.png"  size="46"></u-icon>
						<text style="margin-left: 10rpx;font-weight: bold;">音视频通话</text>
					</view>
				</view>
			</u-cell-item>
			<u-action-sheet :list="callList" v-model="callShow" @click="callClick"></u-action-sheet>
			<!-- <u-cell-item :arrow="false" @click="toCall">
				<view class="u-flex u-row-center u-col-center" style="font-size: 34rpx;color: #36648B">
					<view>
						<u-icon name="phone" color="#36648B" size="40"></u-icon>
						<text style="margin-left: 10rpx;font-weight: bold;">打电话</text>
					</view>
				</view>
			</u-cell-item> -->
		</view>

		<view v-if="isItMe" class="isItMe">
		    不支持与自己进行通讯
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle: {
					marginLeft: '10rpx',
					color: '#000000',
					fontSize: "34rpx",
				},
				friendId:"",
				isFriend:false,
				friendInfo: {},
				isItMe: false,
				callList:[
					{text: '视频通话'},
					{text: '语音通话'}
				],
				callShow:false,
			}
		},
		onLoad(option) {
			this.isFriend=option.isFriend;
			this.friendId=option.friendId;
			console.log("friendId",this.friendId);
			this.getFriendInfo();
		},
		methods: {
			getFriendInfo:function(){
				let that=this;
				let obj={
					friendId:that.friendId
				};
				that.$u.api.imUser.getFriendInfo(obj).then(res => {
				  if (res!=null&&res.data!=null&&res.code===200) {
						console.log("获取我的好友信息",res);
						this.friendInfo=res.data;
				  }else{
				    uni.hideLoading();
				    return;
				  }
				}).catch(res => {
				  uni.hideLoading();
				})
			},

			parseAddress:function(address){
				let addressStr="中国";
				if(address!=null&&address.length>0){
					let addressObj= JSON.parse(address);
					let provice= addressObj.province.label;
					let city=addressObj.city.label;
					let area=addressObj.area.label;
					addressStr=provice+" "+city+" "+area;
					let detail=addressObj.detail;
					if(detail!=null&&detail!=undefined){
						this.addressDetail=detail.label;
					}
				}
				return addressStr;
			},
			//创建单聊会话
			createSingleChat:function(){
			  let that=this;
			  if (this.isItMe){
			    this.$refs.uTips.show({
			      title: '不能与自己进行通讯',
			      type: 'warning',
			      duration: '2300'
			    })
			    return;
			  }else{
			    that.globalUtil.utilLoading("页面加载中",true);
			    let obj={
					"fromUser":that.vuex_userInfo.id,
					"toUser":that.friendInfo.friendId,
					"friendName":this.friendInfo.friendName,
				};
				console.log("发起单聊参数",obj);
				that.$u.api.chatGroup.createSingleChat(obj).then(res => {
			      //console.log("发起单聊响应结果",res);
			      if (res!=null&&res.data!=null&&res.code===200) {
			        that.linkToChatting(res.data);
			      }else{
			        uni.hideLoading();
			        that.globalUtil.utilAlert("发起聊天失败!","error");
			        return;
			      }
			    }).catch(res => {
			      uni.hideLoading();
			      that.globalUtil.utilAlert("发起聊天失败!","error");
			      console.log("会话列表加载触发异常",res);
			    })
			  }
			},
			//跳转聊天窗口
			linkToChatting:function(groupInfo) {
			  let that=this;
			 // console.log("群信息",groupInfo);
			  let chatGroupId=groupInfo.id;
			  let groupType=groupInfo.chatGroupType;
			  let currentUserId=groupInfo.createUser;
			  //重置未读信息数量
			  let paramData={"chatGroupId":chatGroupId,"userId":currentUserId,"groupType":groupType};
			  that.$u.api.chatGroup.activeHiddenFlag(paramData).then(res => {
			    //重置成功
			   // console.log("激活群聊响应结果",res);
			    if (res.code===200) {
			      uni.hideLoading();
			      let param="?chatGroupId="+chatGroupId;
			      let _url="/pages/chat/chatGroup/chatting";
			      let chatUrl=_url+param;
			      uni.navigateTo({
			        url: chatUrl,
			        success() {
			          that.resetUnReadNum(paramData);
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
			//重置未读信息数量
			resetUnReadNum:function(param){
			  //console.log("重置未读信息数量",param);
			  this.$u.api.chatGroup.clearUnReadNum(param).then(res => {
			    //重置成功
			   // console.log("重置未读信息数量响应结果",res);
			    // 获得数据
			  }).catch(res => {
			    console.log("清除未读数量接口请求失败");
			  });

			},
			toCall() {
				if (this.isItMe){
				  this.$refs.uTips.show({
				    title: '不能与自己进行通讯',
				    type: 'warning',
				    duration: '2300'
				  })
				  return;
				}
				this.callShow=true;
				return;
			},
			callClick:function(index){
				let remoteUserId=this.friendInfo.mobile+"_"+this.friendInfo.friendId;
				console.log("remoteUserId",remoteUserId);
				let type=2;
				//视频通话
				if(index==0){
					type=2;
				}
				//语音通话
				if(index==1){
					type=1;
				};
				let callResult= this.trcApi.singleCall(remoteUserId,type);
			},
			setFiendTag() {
				this.globalUtil.utilAlert("不能进,没完事~敬请期待");
				return;
			},
			setFiendPermission() {
				this.globalUtil.utilAlert("不能进,没完事~敬请期待");
				return;
			},
			viewHisFiendCircle() {
				this.globalUtil.utilAlert("不能进,没完事~敬请期待");
				return;
			},
			previewImg(urls) {
				if(urls!=null&&urls!=undefined){
					uni.previewImage({
						urls: [urls]
					})
				}
			},
			linkToMoreInfoMation() {
				this.$u.route({
					url: "pages/chat/friends/moreInforMation",
					params: {
						signature: this.friendInfo.signature
					}
				})
			}
		},

	}
</script>

<style scoped lang="scss">
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		width: 100%;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx;
		flex-direction: row;
		justify-content: flex-end;
	}

	.perch {
		height: 10rpx;
	}

	.friendInfo {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 20rpx 30rpx 40rpx 40rpx;
		background-color: #FFFFFF;

		.img {
			display: block;
			width: 130rpx;
			height: 130rpx;
			border-radius: 10rpx;
		}

		&-desc {
			padding-left: 30rpx;

			&-name {
				font-weight: bold;
				font-size: 36rpx;
				transform: translateY(-10rpx);
				color: #000000;
			}

			&-gray {
				color: $u-tips-color;
				font-size: 30rpx;
			}
		}
	}
</style>
