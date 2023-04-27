<template>
	<view>
		<u-navbar   :is-back="true" title="添加朋友" :title-bold="true" :title-size="34"  :background="{ background: '#f1f1f1'  }"
					title-color="#404133" :border-bottom="false"  z-index="1001">
		</u-navbar>
		
		<view>
			<view class="content_search  u-border-bottom">
				<view   @click="toSearchFriends()"  class="u-flex u-row-center u-col-center"
						style="background-color: #FFFFFF;height: 70rpx;border-radius: 8rpx;color: #c0c0c0;">
					<view class="u-m-r-20">
							<u-icon class="u-clear-icon" top="6rpx"  :size="40" name="search" color="#c0c0c0"></u-icon>
					</view>
					<view style="color: #c0c0c0;font-size: 34rpx;">账号/手机号</view>
				</view>
				<view class="u-m-t-30 u-flex u-row-center u-col-center">
					<!--  {{vuex_userInfo.mobile}} -->
					<view class="u-line-1"  style="color: #000000;font-size: 28rpx; text-align: center;margin-top: 10rpx;max-width: 70%;">我的微信号: {{vuex_userInfo.chatNumber}}</view>
					<view class="u-m-l-20" style="padding-top: 16rpx;">
						<u-icon name="/static/image/chat/myQr.png" size="40"></u-icon>
					</view>
				</view>
			</view>
			
			<view>
				<u-cell-group>
					 <u-cell-item   v-for="(cell,cellIndex) in cellList" :key="cellIndex"
									:title="cell.title" :title-style="titleStyle"  
									:label="cell.label" :label-style="labelStyle"
									@click="cellClick(cell)">
						 <view slot="icon" class="u-flex u-row-center cellitem" 
								:style="cell.bg?'background-color:'+cell.bg:''">
							 <u-icon :name="cell.iconPath" color="#ffffff" size="36"></u-icon>
						 </view>
					 </u-cell-item>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	import permission from '@/util/mobilePermission/permission.js';
	export default {
		data() {
			return {
				keyword:'',
				cellList:[
					{
						title:'雷达加朋友',
						label:'添加身边的朋友',
						iconPath:'/static/image/chat/addFriend/leida.png',
						bg:'#765ae4'
					},
					{
						title:'面对面建群',
						label:'与身边的朋友进入同一个群聊',
						iconPath:'/static/image/chat/addFriend/mianduimian.png',
						bg:'#19be6b'
					},
					{
						title:'扫一扫',
						label:'扫描二维码名片',
						iconPath:'/static/image/chat/addFriend/saoyisao.png',
						bg:'#2979ff'
					},
					{
						title:'手机联系人',
						label:'添加通讯录中的朋友',
						iconPath:'/static/image/contact.png',
						bg:'#19be6b'
					},
					{
						title:'公众号',
						label:'获取更多资讯和服务',
						iconPath:'/static/image/chat/addFriend/gongzhonghao.png',
						bg:'#2979ff'
					}
				],
				titleStyle:{
					fontSize:'34rpx',
					color:'#000000',
				},
				labelStyle:{
					fontSize:'28rpx',
					color:'#909399'
				}
			};
		},
		methods:{
			cellClick:function(cell){
				if(cell.title=="手机联系人"){
					this.getPhoneContact();
				}
			},
			
			getPhoneContact:function(){
				//请求获取相关权限
				if (uni.getSystemInfoSync().platform == "android") {
				  permission.requestAndroid("android.permission.READ_CONTACTS");//录音
				}else{
				  permission.requestIOS("contact");//ios请求录音权限
				}
				this.$u.route("/pages/chat/friends/phoneContacts");
			},
			toSearchFriends:function(){
				this.$u.route({
						url:'/pages/search/searchFriend',
						animationType:'fade-in',
						animationDuration:300
					}
				);
			}
		}
	}
</script>

<style lang="scss" scoped>
.content_search {
	padding: 16rpx;
	background-color: #f0f0f0;
	padding-bottom: 50rpx;
}
.cellitem{
	width: 50rpx;
	height: 50rpx;
	margin-right: 24rpx;
}
</style>
<style>
	page{
		background-color: #f0f0f0 !important;
	}
</style>
