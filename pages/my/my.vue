<template>
	<view class="content">
		<u-navbar :is-back="false" title=" " :background="{ background: '#ffffff'  }" :border-bottom="false"></u-navbar>
		<view class="u-p-20 u-p-b-40">
			<u-row justify="between" align="top">
				<u-col :span="2">
					<view class="u-p-t-10 u-p-r-10">
						<u-image mode="scaleToFill"  width="100rpx" height="100rpx"  border-radius="10" :src="userAvatar">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="width: 100rpx;height: 100rpx;">
								<u-image v-if="vuex_userInfo!=null&&vuex_userInfo.sex==0" 
											:src="changeDefaultAvatar(1,5)"
											width="100rpx" height="100rpx" 
											border-radius="10" mode="aspectFill"></u-image>
								<u-image v-else 
											:src="changeDefaultAvatar(6,14)"
											width="100rpx" height="100rpx" 
											border-radius="10" mode="aspectFill"></u-image>
							</view>
						</u-image>
					</view>
				</u-col>
				<u-col :span="10">
					<view class="u-flex u-row-between u-col-center u-p-l-10">
						<view>
							<view>
								<view class="u-font-35" style="font-weight: bold;">{{vuex_userInfo.userName}}</view>
								<view class="u-m-t-16  u-font-32 u-line-1" style="color:#666666;max-width: 400rpx;">
									微信号: {{vuex_userInfo.chatNumber}}
								</view>
							</view>
							<view class="u-m-t-20 u-flex u-row-left u-col-center">
								<view class="test-border" 
									 style="width: 120rpx;height:46rpx;border-radius: 30rpx;border: 1rpx solid #dbdbdb;padding:0rpx 10rpx;">
									<view>
										<u-icon name="plus" size="30" color="#666666" margin-left="10"
												label="状态"  label-color="#666666" ></u-icon>
									</view>
								</view>
								<view class="test-border u-m-l-10 u-flex u-row-left u-col-center"
									 style="height:46rpx;border-radius: 30rpx;
											border: 1rpx solid #dbdbdb;padding:0rpx 10rpx;color: #666666;">
									<view class="u-flex u-row-left u-col-center u-p-l-6">
										<view>
											<u-image  width="34rpx" height="34rpx" shape="circle"
													  :src="changeDefaultAvatar(1,4)"></u-image>
										</view>
										<view style="position: relative;left:-5rpx">
											<u-image  width="34rpx" height="34rpx" shape="circle"
												  :src="changeDefaultAvatar(5,10)"></u-image>
										</view>
										<view style="position: relative;left:-5rpx">		  
											<u-image  width="34rpx" height="34rpx" shape="circle"
												  :src="changeDefaultAvatar(11,14)"></u-image>	
										</view>
										<view class="u-m-l-8 u-font-26">等{{globalUtil.randomNum(3,5)}}个朋友</view>
									</view>
								</view>
							</view>
						</view>
						<view class="u-flex u-row-between u-col-center" style="width:90rpx">
							<view>
								<u-image src="/static/image/mycenter/myqrcode.png" width="30rpx" height="30rpx"></u-image>
							</view>
							<view @click="toMyCenter()">
								<u-icon name="arrow-right" color="#909299"></u-icon>	
							</view>
						</view>
					</view>
				</u-col>
				
			</u-row>
		</view>
		
		<u-gap height="20" bg-color="#ededed" margin-top="1" margin-bottom="1"></u-gap>
		<u-cell-group :border="false">
			<u-cell-item @click="toPay()"  title="服务" :title-style="titleStyle" :border-bottom="false">
				<view slot="icon" class="u-m-r-20">
					<u-image src="/static/image/mycenter/service.png" width="38rpx" height="38rpx"></u-image>
				</view>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="20" bg-color="#ededed"  margin-top="1" margin-bottom="1"></u-gap>
		<u-cell-group  :border="false">
			<u-cell-item v-for="(item, index) in groupList" :key="index" :title="item.title" :title-style="titleStyle"
						:border-bottom="index==(groupList.length-1)?false:true"
						@click="toPage(item,index)">
				<view slot="icon" class="u-m-r-20">
					<u-image :src="item.icon" :width="item.iconSize" :height="item.iconSize"></u-image>
				</view>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="20" bg-color="#ededed" margin-top="1" margin-bottom="1"></u-gap>
		<u-cell-group :border="false">
			<u-cell-item  @click="setApp" title="设置" :title-style="titleStyle">
				<view slot="icon" class="u-m-r-20">
					<u-icon size="36"  name="setting" color="#409eff"></u-icon>
				</view>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			titleStyle:{
				fontSize:"32rpx",
				color:'#333',
				marginLeft: '10rpx'
			},
			userAvatar:'',
			groupList: [
				{ title: '收藏',   icon: '/static/image/mycenter/collection.png',iconSize:'40rpx'},
				{ title: '朋友圈', icon: '/static/image/mycenter/friendCircle.png',iconSize:'36rpx'},
				{ title: '卡包', icon: '/static/image/mycenter/card.png',iconSize:'36rpx'},
				{ title: '表情',icon: '/static/image/mycenter/emoji.png',iconSize:'38rpx'}
			],
		};
	},
	onShow:function(){
		let that=this;
		let avatar=  that.vuex_userInfo.avatar;
		 if(avatar!=null&&avatar!=undefined&&avatar.length>0){
			// console.log("avatar",avatar);
			 that.userAvatar=avatar
		 }else{
			 that.userAvatar="";
		 }
	},
	
	methods: {
		toPay:function(){
			this.$u.route("/pages/my/service/service-home");
			return;
		},
		toPage:function(item,index){
			if(item.title=='收藏'){
				this.$u.route("/pages/my/collection/index");
			}else{
				this.globalUtil.utilAlert("功能正在开发,敬请期待~");
			}
			return;
		},
		
		setApp:function(){
			this.$u.route("/pages/my/set");
		},
		toMyCenter:function(){
			this.$u.route("/pages/my/myCenter");
		},
		changeDefaultAvatar:function(min,max){
			let that=this;
			let avatarPrefix="/static/image/default/default-user/";
			let index=this.globalUtil.randomNum(min,max);
			let avatar=avatarPrefix+index+'.jpg';
			return avatar;
		},
	}
};
</script>

<style lang="scss" scoped>
.content{
	background-color: #ffffff !important;
}
</style>
<style>
	page{
		background-color: #ededed;
	}
</style>
