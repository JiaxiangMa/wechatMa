<template>
	<view>
		<u-cell-group title="好友申请" v-if="applyList.length>0">
			<template v-if="applyList.length>0">
				<u-cell-item v-for="(item,index) in applyList" :key="index" :arrow="false" hover-class="none">
					<view slot="icon" class="u-m-r-20">
						<u-image :src="item.avatar"  mode="aspectFill" width="80" height="80" border-radius="12">
							<u-loading slot="loading"></u-loading>
							<view slot="error">
								<u-icon name="account" size="64"></u-icon>
							</view>
						</u-image>
					</view>
					<view slot="title">{{item.userName}}</view>
					<view slot="label" v-if="item.remark!=null&&item.remark.length>0">{{item.remark}}</view>
					<view slot="right-icon">
						<view class="u-flex u-row-between u-col-center">
							<u-button    @click="handleApply(item,1)" size="mini" type="success" shape="square">同意</u-button>
							<view class="u-m-l-10 u-m-r-10"></view>
							<u-button    @click="handleApply(item,2)" size="mini" type="error" shape="square">拒绝</u-button>
						</view>
					</view>
				</u-cell-item>
			</template>
		</u-cell-group>
		<!-- <u-cell-group title="历史记录"></u-cell-group> -->
		<view  v-if="applyList.length<1" class="u-flex u-row-center u-col-center" style="min-height: 600rpx;">
			<u-empty text="暂无申请好友信息"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				applyList:[]
			};
		},
		onLoad:function(option){
			let that=this;
			that.checkFriendApply();
		},
		onNavigationBarButtonTap:function(e){
			if(e.index==0){
				this.$u.route({
					url: '/pages/chat/friends/addFriend',
				})
			}
		},
		methods:{
			//检查是否有人添加我为好友  2022年1月17日21:21:13
			checkFriendApply:function(){
				let that=this;
				that.$u.api.imUser.checkFriendApply({}).then(res => {
					if(res.code==200&&res.data!=null){
						that.applyList=res.data;
						let badgeNumber=res.data.length.toString();
						uni.setTabBarBadge({
						  index: 1,
						  text: badgeNumber
						})
					}else{
						that.applyList=[];
						uni.removeTabBarBadge({
							index:1
						})
					}
				})
			},
			
			handleApply:function(item,status){
				console.log("处理好友申请",item);
				let that=this;
				let param={
					applyUserId:item.id,
					status:status
				}
				that.$u.api.imUser.handleFriendApply(param).then(res => {
					if(res.code==200&&res.data!=null){
						that.$u.api.imUser.checkFriendApply({}).then(res1 => {
							if(res1.code==200&&res1.data!=null){
								that.applyList=res1.data;
								let num= that.applyList.length;
								if(num<1){
									that.$u.route({
										 type:'reLaunch',
										 url:'pages/chat/contactList'
									});
								}else{
									let badgeNumber=num.toString();
									uni.setTabBarBadge({
									  index: 1,
									  text: badgeNumber
									})
								}
							}else{
								that.$u.route({
									 type:'reLaunch',
									 url:'pages/chat/contactList'
								});
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
