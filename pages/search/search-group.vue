<template>
	<view>
		<u-navbar :is-back="false" title="" :border-bottom="false" :background="background">
			<view class="slot-wrap">
				<u-search action-text="取消" placeholder="请输入群聊名称" v-model="searchWord"
				 shape="square" :height="70" :focus="true"
				:input-style="{fontSize:'34rpx'}" :action-style="{fontSize:'34rpx',color:'#270c5c'}"
				color="#000000" bg-color="#ffffff" search-icon-color="#909399"
				@custom="customBack()" @change="change" @search="search"></u-search>
			</view>
		</u-navbar>
		
		<scroll-view :scroll-x="false" :scroll-y="true" :style="'height:'+scrollViewHeight+'px'"
				class="hidden-scroll-bar">	
			<view v-if="searchResults.length>0">	
				<view v-for="(group,index) in searchResults" :key="index" 
					class="u-flex u-row-left u-col-center u-border-bottom">
					<view style="width: 100%;">
						<u-cell-item :title="group.chatGroupName" :title-style="{fontSize:'32rpx',color:'#000000'}" 
									 :value="group.memberCounts+'人'"
									 @click="linkToChatting(group)" :border-bottom="false">
							<view slot="icon" style="border-radius: 10rpx;" class="u-m-r-16">
									<u-image :src="group.chatGroupAvatar" width="90" height="90" border-radius="10">
										<u-image  slot="error" src="/static/image/chat/we-chat-logo.png" width="90" height="90" border-radius="10"></u-image>
										<u-loading slot="loading"></u-loading>
									</u-image>
							</view>	
							<view slot="label">
							<!-- 	<view>群成员:<text style="font-weight: bold;">({{group.memberCounts}}人)</text></view> -->
									<view>
										<text v-if="group.chatGroupType==0">单聊</text>
										<text v-if="group.chatGroupType==1">群聊</text>
									</view>
							</view>
						</u-cell-item>
					</view>
				</view>	
			</view>
			
			<view v-if="searchResults.length<1&&showHistoryFlag==true&&emptyFlag==false">
				<u-row>
					<u-col :span="6">
						<view class="u-p-20 u-font-32">历史搜索记录</view>
					</u-col>
					<u-col :span="6">
						<view class="u-flex u-row-right u-col-center u-p-20">
							<view>
								<u-button size="mini" @click="clearHistory()">清空</u-button>
							</view>
						</view>
					</u-col>
				</u-row>
				<u-gap height="4" bg-color="#ffffff"></u-gap>
				<view class="u-p-20">
					<template  v-if="historySearchWordList.size>0">
						<u-row>
							<u-col :span="3" v-for="(hisItem,index) in historySearchWordList" :index="index">
								<view @click="historyClick(hisItem)" style="text-align: center;width: 100%;background-color: #ffffff;
											color: #606266;border-radius: 4rpx; padding: 12rpx 0rpx;" 
									  class="u-line-1 u-m-b-20">{{hisItem}}</view>		
							</u-col>
						</u-row>
					</template>
					<template v-else>
						<u-divider :height="60">暂无历史搜索记录</u-divider>
					</template>
				</view>
			</view>
		
			<view  v-if="searchResults.length<1&&emptyFlag"  
					class="u-flex u-row-center u-col-center" style="height: 80%;">
				<view>
					<u-empty  mode="search" text="暂无相关群组会话"></u-empty>
				</view> 
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#f0f0f0',
				},
				searchWord:'',
				showHistoryFlag:false,
				historySearchWordList:new Set(),
				scrollViewHeight:0,
				emptyFlag:false,
				searchResults:[],
			};
		},
		onLoad:function(option){
			this.scrollViewHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 45;	
			let historySearchArr= uni.getStorageSync("historySearchWordList");
			console.log("缓存中的搜索记录",historySearchArr);
			if(historySearchArr){
				let arr= JSON.parse(historySearchArr);
				console.log("历史搜素记录",arr);
				this.historySearchWordList=new Set(arr);
			}
			if(option.keyWord){
				this.searchWord=option.keyWord;
				this.search(this.searchWord);
			}
		},
		methods:{
			customBack:function(){
				let that=this;
				uni.navigateBack();
				that.emptyFlag=false;
			},
			change:function(value){
				this.emptyFlag=false;
				if(value.length<1){
					console.log("显示历史搜索");
					this.searchResults=[];
					this.showHistoryFlag=true;
				}else{
					this.showHistoryFlag=false;
				}
			},
			clearHistory:function(){
				console.log("清空历史搜索记录");
				this.historySearchWordList=new Set();
				//this.showHistoryFlag=false;
				uni.removeStorageSync("historySearchWordList");
			},
			historyClick:function(value){
				this.searchWord=value;
				this.search(value);
			},
			search:function(value){
				let that=this;
				if(value.length>0){
					let param={
						keyWord:value,
					};
					that.searchResults=[];
					that.$u.api.chatGroup.searchChatGroup(param).then(res => {
						 console.log("搜索群组结果",res);
						if(res.code==200){
						   if(res.data!=null&&res.data.length>0){
								 that.searchResults=res.data;
								 that.historySearchWordList.add(that.searchWord);
								 let arr= Array.from(that.historySearchWordList);
								 uni.setStorageSync("historySearchWordList",JSON.stringify(arr));
								 //that.searchWord="";
						   }else{
							    that.emptyFlag=true;
						   }
						}else{
							  that.emptyFlag=true;
						}
					})
				}
			},
			
			//跳转聊天窗口
			linkToChatting:function(groupInfo) {
			  let that=this;
			  console.log("群信息",groupInfo);
			  let chatGroupId=groupInfo.id;
			  let groupType=groupInfo.chatGroupType;
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
		}
	}
</script>

<style lang="scss" scoped>
.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 15rpx;
	}
.hidden-scroll-bar{
		::-webkit-scrollbar{
			display: none;
			height: 0;
			width: 0;
		}
}	
</style>
<style>
	page{
		background-color: #F1F1F1;
	}
</style>
