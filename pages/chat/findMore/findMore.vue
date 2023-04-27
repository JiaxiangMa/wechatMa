<template>
	<view class="content">
		<u-navbar :is-back="false" title="发现" :background="{ background: '#f4f4f5'  }" 
		title-color="#404133"  :title-bold="true" title-size="34"
		:border-bottom="false" 
		z-index="1001">
		</u-navbar>
		<view style="background-color: #FFFFFF;">
			<view    v-for="(item,index) in cellList" :key="index">
					<u-cell-item  :title="item.title" :title-style="titleStyle" 
									:border-bottom="false"  :border-top="false" 
									@tap="linkTo(item)">
						<u-icon slot="icon" :name="item.icon" :color="item.color" size="44"></u-icon> 
						<view slot="right-icon" v-if="index==0&&newCircleInfo!=null&&newCircleInfo!=undefined">
								<u-avatar :src="newCircleInfo.userHeadImg" mode="square" :size="70">
								</u-avatar>
								<u-badge :is-dot="true" type="error" :offset="[20,60]"></u-badge>
							<!-- <u-icon  :name="newCircleInfo.userHeadImg" :size="64"></u-icon> -->
						</view>
					</u-cell-item>
					<u-gap :height="16" bg-color="#f4f4f5" v-if="index<cellList.length-1"></u-gap>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cellList:[
				{	id:1, 
					title:"朋友圈",
					icon:"/static/image/friendCircle/friendCircleIcon.png",
					color:"inherit" ,
					bind:"/pages/chat/findMore/friendCircle",
				},
				{id:2, title:"扫一扫",icon:"scan",color:"#409eff",bind:"scan"},
				{id:3, title:"购物",icon:"bag",color:"#fab6b6",bind:"taobao"},
				{id:4, title:"短视频",icon:"eye",color:"#ff9900",bind:"/pages/chat/findMore/video/video"},
			/* 	{id:5, title:"看一看",icon:"info-circle-fill",color:"#fa3534",bind:"/pages/chat/findMore/video/xvideos"}, */
			],
			titleStyle:{
				marginLeft:"20rpx",
				fontSize:"32rpx",
				color:"#000000"
			},
			newCircleInfo:{},
		};
	},
	onShow:function(){
		this.checkFriendCircleUpdate();
	},
	
	methods: {
		checkFriendCircleUpdate:function(){
			let that=this;
			that.$u.api.friendCircle.checkFriendCircleUpdate({}).then(res => {
				if(res.code==200&&res.data!=null&&res.data.length>0){
					that.newCircleInfo=res.data[0];
					console.log("检查朋友圈的更新情况",that.newCircleInfo);
					uni.showTabBarRedDot({
					  index: 2,
					})
				}else{
					that.newCircleInfo=null;
					uni.hideTabBarRedDot({
						index:2
					})
				}
			})	
		},
		
		linkTo(item){
			let that=this;
			let url=item.bind;
			console.log("跳转链接",url);
			if(url!=null&&url.length>0){
				if(url=='taobao'){
					if (plus.os.name == 'Android') {
						plus.runtime.launchApplication(  
							{  
								pname: 'com.taobao.taobao'  
							},  
							function(e) {  
								console.log('Open system default browser failed: ' + e.message);  
							}  
						);  
					} else if (plus.os.name == 'iOS') {  
						//抖音 snssdk1128://
						plus.runtime.launchApplication({ action: 'snssdk1128://' }, function(e) {  
							console.log('Open system default browser failed: ' + e.message);  
						}); 
					}	
				}else if(url=="scan"){
					this.globalUtil.scanQRcode(that,{
						complete:function(res){
							console.log("扫码结果",res);
							if(res.resp_code==1000){
								let respData=res.resp_result;
								that.$u.route({
									url:'/pages/chat/qr-info/qr-info',
									params:{
										qrInfo:respData
									},
									animationType:'slide-in-bottom'
								});
							}	
						},
					})
				}else{
					console.log("url",url);
					this.$u.route(url);
					return;
				}
			}  
		},
		isDuringDate: function (beginDateStr, endDateStr) {
			var curDate = new Date(),
			beginDate = new Date(beginDateStr),
			endDate = new Date(endDateStr);
			if (curDate >= beginDate && curDate <= endDate) {
				return true;
			}
			return false;
		 }
	}
};
</script>

<style lang="scss" scoped>
	.content{
		
	}
</style>
<style>
	page{
		background-color: #f4f4f5 !important;
	}
</style>

