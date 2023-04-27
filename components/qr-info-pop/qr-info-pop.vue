<template>
	<view>
		<u-popup v-model="qrModelFlag" mode="bottom" border-radius="14"
				 :height="(windowHeight)+'px'" :mask-close-able="false">
			<view style="padding-top: 10%;">
				<view style="height:60rpx" 
					  class="u-flex u-row-left u-col-center u-p-30">
					<view @click="closeQRModel()">
						<u-icon name="close" :size="38"></u-icon>
					</view>
				</view>
				<view v-if="currentChatGroup" 
						class="qr-pop-class" :style="'height:'+(windowHeight*0.8)+'px'">
					<view class="qr-pop-class">
						<view>
							<u-image :src="currentChatGroup.chatGroupAvatar" width="120" height="120">
								<view slot="error">
									<u-image src="/static/image/login/logo.png" width="120" height="120">
									</u-image>	
								</view>
							</u-image>
						</view>
						<view class="u-m-t-40 u-font-40" style="text-align: center;">
						    <text>{{currentChatGroup.chatGroupName}}</text>
							<text>({{currentChatGroup.memberCounts}})</text>
						</view>
					</view>
					<view>
						<u-button type="success" @click="joinGroup()">加入群聊</u-button>
					</view>
				</view>
				<view v-else class="test-border">
					<u-empty text="群聊信息丢失"></u-empty>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"qr-info-pop",
		props:{
			qrModelFlag:{
				type:Boolean,
				default:false
			},
			windowHeight:{
				type:Number,
				default:uni.getSystemInfoSync().windowHeight
			},
			qrModelInfo:{
				type: Object,
				default: function() {
					return {
						qrValue:'',
						businessCode:1
					}
				}
			}
		},
		data() {
			return {
				currentChatGroup:null,
			};
		},
		mounted:function(){
			console.log("qrModelInfo.qrValue",this.qrModelInfo);
			let chatGroupId= this.qrModelInfo.qrValue.chatGroupId;
			if(chatGroupId){
				this.getChatGroupInfo(chatGroupId);
			}
		},
		
		methods:{
			//获取群组信息
			getChatGroupInfo: function(chatGroupId) {
				let that = this;
				let param = {
					chatGroupId: chatGroupId
				};
				that.$u.api.chatGroup.getChatGroupInfo(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						that.currentChatGroup = data.imGroup;
						if(that.currentChatGroup.chatGroupType==0){
							that.navbarTitle="聊天详情";
						}else{
							that.navbarTitle="聊天信息("+that.currentChatGroup.memberCounts+")";
						}
						console.log("=========currentChatGroup======",that.currentChatGroup);
					} else {
						that.globalUtil.utilAlert("群信息获取失败");
						return;
					}
				})
			},
			closeQRModel:function(){
				this.$emit("closeQRModel");
			},
			joinGroup:function(){
				let that=this;
				console.log("加入群聊",that.qrModelInfo);
				let createTimeStamp= that.qrModelInfo.createTimeStamp;
				let qrExpireTime=that.qrModelInfo.expireTime;
				let nowTimestamp= new Date().getTime();
				let during=Number(nowTimestamp)-Number(createTimeStamp);
				console.log("during",during);
				let duringHours=during/1000/3600;
				console.log("duringHours",duringHours);
				if(qrExpireTime!=-1&&duringHours>qrExpireTime){
					console.log("二维码已过期");
					that.globalUtil.utilAlert("二维码已过期");
					return;
				}
				let param={
					qrValue:that.currentChatGroup,
				}
				that.$u.api.imUser.scanQRJoinGroup(param).then(res => {
					console.log("加入群聊响应结果",res);
					if(res.code==200){
						let chatGroupId=that.currentChatGroup.id;
						let paramData={
							"chatGroupId":chatGroupId,
							"userId":that.vuex_userInfo.id,
							"groupType":that.currentChatGroup.chatGroupType,
						};
						that.$u.api.chatGroup.clearUnReadNum(paramData).then(res => {
							if (res.code===200) {
								that.$emit("closeQRModel");
								let param="?chatGroupId="+chatGroupId;
								let _url="/pages/chat/chatGroup/chatting";
								let chatUrl=_url+param;
								uni.navigateTo({
								  url: chatUrl,
								});
								return;
							}else{
								 that.globalUtil.utilAlert("扫码进群失败");
							}
						}).catch(res => {
							  // 失败进行的操作
							  console.log("清除未读数量接口请求失败");
							  that.globalUtil.utilAlert("扫码进群失败");
						});
					}else{
						 that.globalUtil.utilAlert("扫码进群失败");
					}
				}).catch(res => {
					  // 失败进行的操作
					   console.log("扫码进群失败",res);
					  that.globalUtil.utilAlert("扫码进群失败");
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.qr-pop-class{
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
</style>