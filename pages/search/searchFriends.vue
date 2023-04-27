<template>
	<view class="search-friend-container">
		<view class="search-box">
			<u-search  @search="searchFriends"  @change="searchFriends"  bg-color="#ffffff" margin="2rpx 10rpx"
				:show-action="false" shape="square" placeholder="帐号/手机号" v-model="keyword"></u-search>
		</view>

		<view class="search-result-box u-p-l-5 u-p-r-5" v-if="searchFriendsList.length>0">
			<scroll-view scroll-y style="min-height:800rpx;" class="scrollViewBox">
				 <view class=""  v-for="(user,index) in searchFriendsList" :key="index">
					  <u-cell-item   :title="user.userName"  :label="user.mobile" @click="toPersonalHome(user)"
					   :value="user.isFriend?'已添加':''"
					   :title-style="customTitleStyle" :label-style="customLabelStyle">
						  <view slot="icon" class="u-m-r-30">
							  <u-image width="80rpx" height="80rpx" :src="user.avatar" border-radius="10">
								 <u-loading slot="loading"></u-loading>
								 <view slot="error">
									<u-icon name="account" size="64"></u-icon>
								 </view>
							  </u-image>
						  </view>
					  </u-cell-item>
				 </view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				searchFriendsList:[],
				customTitleStyle:{
					fontSize:'32rpx',
					color:'#000000'
				},
				customLabelStyle:{
					fontSize:'28rpx',
					color:'#000000'
				},
			};
		},
		methods:{
			searchFriends:function(value){
				let that=this;
				that.searchFriendsList=[];
				if(value.length>0){
					let param={
						keyWord:value,
					};
					console.log("搜索内容",value);
					that.$u.api.imUser.searchUser(param).then(res => {
						if(res.code==200){
						   console.log("搜索用户结果",res);
						   that.searchFriendsList=res.data;
						}
					})
				}
			},
			toPersonalHome:function(user){
				let that=this;
				console.log("user",user);
				let isFriend=user.isFriend;
				if(isFriend==true){
					this.$u.route({
						url: 'pages/chat/friends/friendHome',
						params: {friendId:user.id}
					});
				}else{
					this.$u.route({
						url: 'pages/chat/friends/newFriendInfo',
						params: {newFriendInfo:encodeURIComponent(JSON.stringify(user)),fromPage:2}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
   .search-box{
	   	padding: 16rpx;
	   	background-color: #f8f8f8;
		.scrollViewBox{
			::-webkit-scrollbar{
				display: none;
				width: 0;
				height: 0;
			}
		}
   }
</style>
