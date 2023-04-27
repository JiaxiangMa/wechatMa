<template>
	<view class="content" id="content">
		<u-navbar :background="{ background: '#f3f4f6' }" title="朋友圈" title-size="36" back-icon-color="#000000"
			title-color="#000000" :title-bold="true" :border-bottom="false">
			<view slot="right" class="u-margin-right-20" @click="showTypeSheet"
				@longpress="linkToRelease({releaseType:0})">
				<u-icon name="camera" color="#606266" size="44"></u-icon>
			</view>
		</u-navbar>

		<scroll-view :scroll-x="false" :scroll-y="true" v-show="showInput==false" class="scrollView"
			:scroll-with-animation="scrollWithAnimation" :scroll-top="scrollTop" @scroll="scrolling"
			@scrolltolower="loadMore" 
			:style="'height:'+scrollViewHeight+'px'">
			<!-- 我的朋友圈基本信息 -->
			<view class="content-imgbox">
				<image class="bgimg" :src="circleBgImg" mode="scaleToFill" @tap="showSheet">
				</image>
				<image class="headimg" :src="vuex_userInfo.avatar" @tap="linkToBusinessCard(vuex_userInfo.id)"></image>
				<text class="nickname">{{ vuex_userInfo.userName }}</text>
			</view>
			<!-- 个性签名 -->
			<view class="signature">
				<view class="">{{ vuex_userInfo.signature }}</view>
			</view>
			<!-- 朋友圈列表 -->
			<view class="content-circle">
				<template v-if="circleData!=null&&circleData.length>0">
					<view  class="content-circle-box" v-for="(item, index) in circleData" :key="index" :index="index">
						<view @tap="linkToBusinessCard(item.userId)">
							<u-image  :src="item.userHeadImg" width="80rpx" height="80rpx" mode="aspectFill" border-radius="10">
								<u-loading slot="loading"></u-loading>
								<view slot="error" class="u-flex u-row-left u-col-center">
									<u-icon  name="photo" size="80"></u-icon>
								</view>
							</u-image>
						</view>
						<view class="content">
							<view class="content-name" @tap="linkToBusinessCard(item.userId)">{{ item.userName }}</view>
							<view class="content-desc">{{ item.content }}</view>
							<!-- 图片,视频 -->
							<view class="content-img" v-if="item.fileList!=null&&item.fileList.length>0">
									<!-- //只有一张图时候 -->
									<view v-if="item.fileList.length==1&&item.releaseType==1"  class="u-flex u-row-left u-col-center" 
																			style="width:100%;min-height: 200rpx;">
										<u-image  width="280rpx"   :src="item.fileList[0]" mode="widthFix" @tap="previewImg(0, item)">
											 <u-loading slot="loading"></u-loading>
											 <view slot="error" class="u-flex u-row-left u-col-center" 
																style="font-size: 24rpx;width: 200rpx;height: 100rpx;margin-top: -50rpx;">
												 <u-icon  name="photo" size="100" label="加载失败" label-pos="bottom"></u-icon>
											 </view>
										</u-image>
									</view>
									<!-- 有多张图的时候 -->
									<view v-if="item.fileList.length > 1&&item.releaseType==1">
										<view class="content-img-more u-m-b-20">
											<u-grid :col="3" :border="false" hover-class="none">
												<u-grid-item  v-for="(src, index) in item.fileList" :index="index" :custom-style="girdItemCustomStyle">
													<view  @tap="previewImg(index, item)" class="slot-btn">
														<u-image  :src="src" width="180rpx" height="180rpx" mode="aspectFill" border-radius="10"></u-image>
													</view>	
												</u-grid-item>
											</u-grid>	
										</view>
									</view>
								
								
									<!-- 视频 -->
									<view class="u-m-b-30 u-m-t-30  u-flex u-row-left u-col-center"  v-if="item.fileList.length > 0&&item.releaseType==2"  @tap="previewImg(0, item)">
										<view  class="u-flex u-row-center u-col-center" style="border: 1rpx solid #36648b;width: 300rpx;height: 120rpx;border-radius: 16rpx;">
											<u-icon name="play-circle" size="48" color="#36648b"
													label="点击查看视频" label-pos="bottom"></u-icon>
										</view>
									</view>
									
							</view>
							
							<!-- 地点 -->
							<view v-if="(item.address&&item.address.chooseFlag)==true" class="u-line-2 u-m-t-10 u-m-b-10" style="font-size: 30rpx;color: #36648b;">
								 <u-icon name="map" color="#36648b" size="30" :custom-style="{marginLeft:'-4rpx'}"></u-icon>
								 <text> {{ item.address.name}}</text>
							</view>
							
							<!-- 相对时间 点赞按钮等 -->
							<view class="relavivetime" :id="`comment-${'null'}-${index}`">
								<view class="time u-flex  u-col-center">
								    <view>{{ item.createTimeStr }}</view>
									<view @click="deleteCircle(item,index)" style="color:#36648b;margin-left: 20rpx;" v-if="item.userId==vuex_userInfo.id">删除</view>
								</view>
								
								<view class="icon-box u-flex u-row-between u-col-center">
									<view @tap="clickThumb(item,index)" class="u-m-r-6 u-p-t-4">
										<u-icon v-if="item.isPraise==false" size="38" name="heart" color="#36648b"></u-icon>	
										<u-icon v-if="item.isPraise==true"  size="38" name="heart-fill" color="#36648b"></u-icon>
									</view>
									<view @tap="handleComment(item.circleId, null, index)" class="u-m-l-6 u-p-t-2">
										<u-icon size="40" name="chat" color="#36648b"></u-icon>	
									</view>
								</view>
							</view>
							
							<!-- 点赞人 评论 -->
							<view class="msg-box">
								<view class="thumbinfo u-border-bottom" v-if="item.praise!=null&&item.praise.length">
									<u-icon  size="30" name="heart" color="#36648b" class="u-m-r-10"></u-icon>
									<text class="thumbinfo-name" v-for="(userInfo, pindex) in item.praise" :index="pindex"
										:key="pindex" @tap="linkToBusinessCard(userInfo.userId)">
										{{ userInfo.userName }}{{ pindex != item.praise.length - 1 ? '，' : '' }}
									</text>
								</view>
								<view class="comment" v-if="item.comment!=null&&item.comment.length">
									<view class="comment-box" v-for="(comment, commentIndex) in item.comment" :index="commentIndex"
										:key="commentIndex" hover-class="comment-hover-class"
										:id="`comment-${item.circleId}-${index}`"
										@tap="handleComment(item.circleId, comment, index)">
										<text class="comment-box-name" v-if="!comment.replyUserId">{{ comment.commentUserName }}：</text>
										<text class="comment-box-name" v-if="comment.replyUserId">
											{{ comment.commentUserName }}
											<text class="callback u-m-l-4 u-m-r-4">回复</text>
										</text>
										<text v-if="comment.replyUserId" class="comment-box-name">{{ comment.replyUserName }}：</text>
										<text class="comment-box-content">{{ comment.content }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</template>
				<template v-else>
					<view style="margin-top: 30%;">
						<u-empty text="暂无动态,发一条试试吧~"></u-empty>
					</view>
				</template>
			</view>
		</scroll-view>
		<!-- 为了实现模拟键盘随着内容的选择而固定位置 -->
		<template v-if="showInput==true">
			<scroll-view :scroll-x="false" :scroll-y="true" :scroll-top="currentTop" @touchstart="closeInputModel"
				:style="'width:100%;height:'+scrollViewHeight+'px;'">
				<view @click="closeInputModel" class="content-circle-box">
					<view>
						<u-image  :src="currentItem.userHeadImg" width="80rpx" height="80rpx" mode="aspectFill" border-radius="10">
							<u-loading slot="loading"></u-loading>
							<view slot="error" class="u-flex u-row-left u-col-center">
								<u-icon  name="photo" size="80"></u-icon>
							</view>
						</u-image>
					</view>
					<view class="content">
						<view class="content-name">{{ currentItem.userName }}</view>
						<view class="content-desc">{{ currentItem.content }}</view>
						<view class="content-img" v-if="currentItem.fileList!=null&&currentItem.fileList.length>0">
							<view v-if="currentItem.fileList.length==1&&currentItem.releaseType==1" 
								class="u-flex u-row-left u-col-center" style="width:100%;min-height: 200rpx;">
								<u-image  width="280rpx"   :src="currentItem.fileList[0]" mode="widthFix">
									 <u-loading slot="loading"></u-loading>
									 <view slot="error" class="u-flex u-row-left u-col-center" 
														style="font-size: 24rpx;width: 200rpx;height: 100rpx;margin-top: -50rpx;">
										 <u-icon  name="photo" size="100" label="加载失败" label-pos="bottom"></u-icon>
									 </view>
								</u-image>
							</view>
							<!-- 有多张图的时候 -->
							<view v-if="currentItem.fileList.length > 1&&currentItem.releaseType==1">
								<view class="content-img-more u-m-b-20">
									<u-grid :col="3" :border="false" hover-class="none">
										<u-grid-item  v-for="(src, index) in currentItem.fileList" :index="index" :custom-style="girdItemCustomStyle">
											<view   class="slot-btn">
												<u-image  :src="src" width="180rpx" height="180rpx" mode="aspectFill" border-radius="10"></u-image>
											</view>	
										</u-grid-item>
									</u-grid>	
								</view>
							</view>
															
				
							<view   v-if="currentItem.releaseType==2" 	class="u-m-b-20 u-m-t-20  u-flex u-row-left u-col-center">
								<view  class="u-flex u-row-left u-col-center" style="height: 120rpx;border-radius: 16rpx;">
									<u-icon name="play-circle" size="48" color="#36648b"
											label="此处不支持观看视频" label-pos="bottom" :margin-left="20" :margin-right="20"></u-icon>
								</view>
							</view>
						</view>
						<!-- 地点 -->
						<view v-if="(currentItem.address&&currentItem.address.chooseFlag)==true" class="u-line-2 u-m-t-10 u-m-b-10" 
								style="font-size: 30rpx;color: #36648b;">
							 <u-icon name="map" color="#36648b" size="30" :custom-style="{marginLeft:'-4rpx'}"></u-icon>
							 <text> {{ currentItem.address.name}}</text>
						</view>
						<!-- 点赞人 评论 -->
						<view class="msg-box">
							<view class="thumbinfo" v-if="currentItem.praise!=null&&currentItem.praise.length>0">
								<image class="thumbinfo-icon" :src="require('@/static/like.png')"></image>
								<text class="thumbinfo-name" v-for="(userInfo, pindex) in currentItem.praise"
									:key="pindex">
									{{ userInfo.userName }}{{ pindex != currentItem.praise.length - 1 ? '，' : '' }}
								</text>
							</view>
							<view class="comment" v-if="currentItem.comment!=null&&currentItem.comment.length>0">
								<view class="comment-box" v-for="(comment, cindex) in currentItem.comment" :key="cindex" :index="cindex"
									hover-class="comment-hover-class">
									<text class="comment-box-name" v-if="!comment.replyUserId">{{ comment.commentUserName }}：</text>
									<text class="comment-box-name" v-if="comment.replyUserId">
										{{ comment.commentUserName }}<text class="callback u-m-l-4 u-m-r-4">回复</text>
									</text>
									<text v-if="comment.replyUserId" class="comment-box-name">{{ comment.replyUserName }}：</text>
									<text class="comment-box-content">{{ comment.content }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</template>


		<view class="input-box" v-show="showInput" style="height: 100rpx;">
			<view class="input-box-flex">
				<view class="input-box-flex-grow">
					<input :adjust-position="false" type="text" class="content" id="input" v-model="content"
						:confirm-type="'send'" :confirm-hold="true" placeholder-style="color:#DDD;" :cursor-spacing="6"
						:placeholder="placeholder" :focus="showInput" @blur="blurInput" @confirm="sendMsg" />
				</view>
				<button class="btn" type="primary" size="mini" @touchend.prevent="sendMsg">发送</button>
			</view>
		</view>

		<!-- 发表朋友类型 -->
		<u-action-sheet :list="releaseTypeList" v-model="releaseShow" border-radius="25" safe-area-inset-bottom
			@click="toChooseRelease"></u-action-sheet>
		<!-- 改变朋友圈背景 -->	
		<u-action-sheet :list="list" v-model="changBgSwitch" border-radius="25" safe-area-inset-bottom
			@click="clickAction"></u-action-sheet>
		<!-- 视频预览 -->
		<view v-if="previewVideoFlag==true">
				<videoPlayer :previewVideoFlag="previewVideoFlag" :previewVideoSrc="previewVideoSrc" @quitPlay="previewVideoFlag=false"></videoPlayer>	
		</view>	
		<!-- 删除朋友圈确认框 -->
		<view v-if="delCircleObj.delCircleModelFlag==true">
			<u-modal v-model="delCircleObj.delCircleModelFlag" :show-title="false" 
			:show-confirm-button="true" confirm-text="删除" confirm-color="#fa3534"
			:show-cancel-button="true"	cancel-text="取消"	cancel-color="#000000"
			content="删除该朋友圈?" :content-style="{color:'#000000',fontSize:'32rpx',fontWeight:'bold'}"
			@confirm="confirmDelCircle()" @cancel="cancelDelCircle()">
		</u-modal>
		</view>
	</view>
</template>

<script>
	import videoPlayer from '@/components/videoPlayer/videoPlayer.vue';
	import innerPlayer from '@/components/videoPlayer/innerPlayer.vue';
	export default {
		name: 'firendCircle',
		components:{
			videoPlayer,innerPlayer
		},
		data() {
			return {
				
				loadMoreFlag:true,//可以分页加载吗
				platFrom:'',
				girdItemCustomStyle:{
					padding: '0',
					margin:'0',
					border:'1rpx solid #f2f6fc'
				},
				scrollViewHeight: 0,
				scrollTop: 0,
				currentTop: 0,
				currentScroll: 0,
				scrollWithAnimation: false,
				changBgSwitch: false, //切换背景开关
				list: [{
					text: '更换相册封面',
					fontSize: '34'
				}],
				/* {
					text: '拍摄',
					fontSize: '34',
					color: '#000000'
				}, */
				releaseTypeList: [ {
					text: '选择照片',
					fontSize: '34',
					color: '#000000'
				}, {
					text: '选择视频',
					fontSize: '34',
					color: '#000000'
				}], //发表朋友圈的方式
				releaseShow: false, //发表朋友圈弹窗控制器
				content: '',
				placeholder: '',
				showInput: false,
				focus: false,
				circleId: '', //某一条朋友圈id
				commentInfo: {},
				currentItem: {},
				previewVideoFlag:false,
				previewVideoSrc:'',
				videoContext:null,
				pageNum:1,
				pageSize:5,
				//删除对象参数
				delCircleObj:{
					delCircleModelFlag:false,
					tempDelCircleId:'',
					tempDelIndex:"",
				}
			};
		},
		
		watch:{
			circleData:function(val){
				console.log("监听到朋友圈内容有变动",val.length);
			}	
		},
		
		onReady() {
			let that = this;
			uni.onKeyboardHeightChange(res => {
				if (res.height == 0) {
					let windowHeight = this.$u.sys().windowHeight;
					this.scrollViewHeight = windowHeight - 90;
					this.showInput = false;
					this.currentTop = 0;
					return;
				} else {
					this.currentTop = 999;
					let windowHeight = this.$u.sys().windowHeight;
					this.scrollViewHeight = (windowHeight - res.height) - 120;
				}
			});
		},
		onShow: function(option) {
			let windowHeight = this.$u.sys().windowHeight;
			this.scrollViewHeight = windowHeight - 90;
			console.log("onshow",this.pageNum);
		},
		onLoad:function(){
				 this.platFrom= this.$u.os();
				 console.log("onload",this.platFrom);
				 let param={
					pageNum:1,
					pageSize:this.pageSize,
					moreFlag:false
				};
				this.getCircleDataList(param);
		},

		//下拉刷新
		async onPullDownRefresh() {
			let that=this;
			that.pageNum=1;
			that.pageSize=5;
			that.loadMoreFlag=true;//可以分页加载
			let param={
				pageNum:1,
				pageSize:this.pageSize,
				moreFlag:false
			};
			await this.getCircleDataList(param);
			uni.stopPullDownRefresh();
		},

		methods: {
			//初始化朋友圈
			getCircleDataList:function(param){
				let that=this;
				that.$u.api.friendCircle.getCircleDataList(param).then(res => {
					if(res.code==200){
						let circleDataList=res.data;
						//console.log("朋友圈列表",circleDataList);
						if(circleDataList.length>0){
							that.loadMoreFlag=true;
							for (var i = 0; i < circleDataList.length; i++) {
								let item= circleDataList[i];
								if(item.userId==this.vuex_userInfo.id){
									item.userName="我";
								}
								if(item.address!=null&&item.address.length>0){
									item.address=JSON.parse(item.address);
								}
								if(item.fileList!=null&&item.fileList.length>0){
									item.fileList=JSON.parse(item.fileList);
									if(item.releaseType==2){
										
									}
								}
								if(item.praise!=null){
									item.praise=JSON.parse(item.praise);	
								}else{
									item.praise=[];
								}
								if(item.comment!=null&&item.comment.length>0){
									item.comment=JSON.parse(item.comment);	
								}
								else{
									item.comment=[];
								}
							}
						}else{
							if(param.moreFlag==true){
								that.loadMoreFlag=false;
							}
							return;
						}
						//初始化列表
						if(param.moreFlag==false){
							console.log("初始化朋友圈列表",circleDataList.length);
							that.$u.vuex('circleData', circleDataList);
						}
						//加载更多
						else{
							let oldList=that.circleData;
							let newList=oldList.concat(circleDataList);
							that.$u.vuex('circleData', newList);
							console.log("加载更多朋友圈列表",newList);
						}
						
					}
				})	
			},
			
			//滚动事件
			scrolling: function(event) {
				//console.log("event",event);
				let that = this;
				if (that.showInput == true) {
					return;
				}
				let scrollTop = event.detail.scrollTop;
				setTimeout(function() {
					that.currentScroll = scrollTop;
				}, 300);
			},
			//加载更多
			loadMore:function(){
				let that=this;
				if(that.loadMoreFlag==false){
					if(that.pageNum>1){
						//that.pageNum--;
						console.log("暂无更多",that.pageNum);
					}
					return;
				}
				that.pageNum++;
				let param={
					pageNum:that.pageNum,
					pageSize:that.pageSize,
					moreFlag:true
				}
				console.log("pageNum",param.pageNum);
				that.getCircleDataList(param);
			},
				
			//打开底部更换相册封面弹窗
			showSheet() {
				this.changBgSwitch = true;
			},
			showTypeSheet: function() {
				this.releaseShow = true;
			},

			//点赞
			clickThumb(item,index) {
				let that=this;
				item.isPraise = !item.isPraise;
				if (item.isPraise) {
					item.praise.push({
						userId: this.vuex_userInfo.id,
						userName: this.vuex_userInfo.userName
					});
				} else {
					const index = item.praise.findIndex(i => i.userId == this.vuex_userInfo.id);
					item.praise.splice(index, 1);
				}
				console.log("当前动态下标",index);
				console.log("点赞列表",item);
				let param={
					circleId:item.circleId,
					praise:JSON.stringify(item.praise)
				};
				that.$u.api.friendCircle.clickThumb(param).then(res => {
					if(res.code==200){
						console.log("点赞更新成功");
					}else{
						item.isPraise = !item.isPraise;
					}	
				});	
			},
			//跳转到名片
			linkToBusinessCard(userId) {
				if(userId==this.vuex_userInfo.id){
					return;
				}
				this.$u.route({
					url: 'pages/chat/friends/friendHome',
					params: {
						friendId:userId,
					}
				});
			},
			//删除朋友圈
			deleteCircle:function(item,index){
				let that=this;
				that.delCircleObj.tempDelCircleId=item.circleId;
				that.delCircleObj.tempDelIndex=index;
				that.delCircleObj.delCircleModelFlag=true;
			},
			confirmDelCircle:function(){
				let that=this;
				let delCircleId=that.delCircleObj.tempDelCircleId;
				let delIndex=that.delCircleObj.tempDelIndex;
				//let circleId=item.circleId;
				let param={
					circleId:delCircleId
				};
				that.$u.api.friendCircle.deleteCircle(param).then(res => {
					if(res.code==200){
						that.delCircleObj.delCircleModelFlag=false;
						that.delCircleObj.tempDelCircleId="";
						that.delCircleObj.tempDelIndex="";
						let tempData=that.circleData;
						tempData.splice(delIndex,1);
						this.$u.vuex('circleData', tempData);
					}	
				});	
			},
			cancelDelCircle:function(){
				let that=this;
				that.delCircleObj.delCircleModelFlag=false;
				that.delCircleObj.tempDelCircleId="";
				that.delCircleObj.tempDelIndex="";
			},
			
			//点击评论 唤出输入框和键盘
			handleComment(circleId, comment, index) {
				let that = this;
				this.content = '';
				that.currentItem = that.circleData[index];
				that.currentTop = 0;
				this.circleId = circleId;
				this.commentInfo = comment || {};
				this.placeholder = '评论：';
				if (comment) {
					//console.log("评论内容",comment);
					if (comment.commentUserId == this.vuex_userInfo.id) {
						//如果是回复自己
						this.placeholder = `评论：`;
					} else {
						// xxx评论...
						this.placeholder = `回复${comment.commentUserName}:`;
					}
				}
				this.showInput = true;
			},
			//提交评论消息
			sendMsg() {
				let that=this;
				if (!that.$u.trim(that.content)) {
					return;
				}
				let param={
					commentUserId:that.vuex_userInfo.id,
					commentUserName:that.vuex_userInfo.userName,
					content:that.content,
					friendCircleId:that.circleId
				};
				//如果被回复的动态发表人不是自己本人
				if(that.commentInfo.commentUserId!=that.vuex_userInfo.id){
					param.replyUserId=that.commentInfo.commentUserId;
					param.replyUserName=that.commentInfo.commentUserName;
				}
				console.log("新增动态的评论",param);
				this.circleData.forEach(item => {
					if (item.circleId == that.circleId) {
						if(item.comment!=null&&item.comment.length>0){
							item.comment.push(param);
						}
						else{
							item.comment=[param];
						}
						that.$u.api.friendCircle.handleComment(param).then(res => {
							if(res.code==200){
								console.log("评论更新成功");
							}	
						});
					}
				});	
				that.closeInputModel();
			},

			//查看大图或者预览视频
			previewImg(current, data) {
				let that=this;
				let releaseType= data.releaseType;
				let fileList=data.fileList;
				if(releaseType==2){
					that.previewVideoSrc=fileList[0];
					that.previewVideoFlag=true;
				}else{
					uni.previewImage({
						current:current,
						urls: fileList,
					});
					return;
				}
			},
			//关闭键盘 关闭输入框
			closeInputModel() {
				this.showInput = false;
				this.currentTop = 0;
				this.content = '';
				this.circleId = '';
				this.commentInfo = {};
				uni.hideKeyboard();
			},
			//失去焦点触发
			blurInput() {
				this.closeInputModel();
			},
			//模拟数据 可通过接口获取
			getData() {
				uni.showLoading({
					title: '正在加载...',
					mask: true
				});
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						// do something
						//由于模拟的数据是从vuex中获取的 所以他是响应式的
						//在此可以做数据的获取 并且再生命周期中调用
						//例如this.circleData = await xxx ...
						uni.hideLoading();
						resolve();
					}, 500);
				});
			},
			//点击相册封面弹窗选择项
			clickAction(index) {
				if (index == 0) {
					this.$u.route('pages/chat/findMore/friendCirclePages/chooseCirlcleBgImg');
				}
			},
			//选择发表朋友圈的方式
			toChooseRelease: function(index) {
				let that = this;
				let tempFilePaths = [];
				//拍照
				if (index == 0) {
					uni.chooseImage({
						count: 9, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['camera','album'], //从相册选择
						success: function(res) {
							tempFilePaths = res.tempFilePaths;
							let param = {
								releaseType: 1,
								tempFilePaths: JSON.stringify(tempFilePaths)
							}
							that.linkToRelease(param);
							return;
						}
					});
				}
				//选择视频
				if (index == 1) {
					uni.chooseVideo({
						sourceType: ['camera', 'album'],
						maxDuration: 60,
						success: function(res) {
							//console.log("视频",res);
							let filePath = res.tempFilePath;
							tempFilePaths.push(filePath);
							let param = {
								releaseType: 2,
								tempFilePaths: JSON.stringify(tempFilePaths)
							}
							that.linkToRelease(param);
							return;
						}
					});
				}

			},
			//点击自定义组件相机按钮
			linkToRelease(params) {
				this.$u.route({
					url: '/pages/chat/findMore/releaseFriendCircle',
					params: params
				});
			}
		},

		
	};
</script>

<style lang="scss" scoped>
	page {
		background-color: #ffffff;
	}

	.comment-hover-class {
		background-color: #FFFFFF;
	}

	image {
		will-change: transform;
	}

	.content {
		.scrollView{
			::-webkit-scrollbar{
				display: none;
				width: 0;
				height: 0;
			}
		}
		&-imgbox {
			position: relative;

			.bgimg {
				width: 100%;
				height: 560rpx;
			}

			.headimg {
				width: 110rpx;
				height: 110rpx;
				border-radius: 6rpx;
				position: absolute;
				right: 30rpx;
				bottom: -20rpx;
			}

			.nickname {
				color: #ffffff;
				position: absolute;
				right: 170rpx;
				bottom: 20rpx;
				font-size: 30rpx;
				font-weight: bold;
			}
		}

		&-circle {
			&-box {
				padding: 18rpx 30rpx;
				border-bottom: 1rpx solid #f2eeee;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: flex-start;

				.headimg {
					width: 80rpx;
					height: 80rpx;

					.img {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}

				.content {
					flex: 1;
					padding-left: 18rpx;
					font-size: 32rpx;

					&-name {
						color: #36648b;
						font-weight: bold;
						font-size: 32rpx;
					}

					&-desc {
						color: #000000;
						padding-top: 4rpx;
						//line-height: 36rpx;
						font-size: 32rpx;
					}

					&-img {
						margin-top: 10rpx;

						.img-1 {
							will-change: transform;
							width: 280rpx;
							height: auto;
							max-height: 400rpx;
						}

						&-more {
							display: flex;
							flex-wrap: wrap;

							.img-more {
								display: block;
								width: 160rpx;
								height: 160rpx;
								margin: 4rpx;
							}

							.img-3 {
								margin: 4rpx 4rpx 4rpx 0;
							}
						}
					}

					.msg-box {
						width: 100%;
						background-color: $u-type-info-light;
						margin-top: 15rpx;
						border-radius: 4rpx;

						.thumbinfo {
							// border-bottom: 1rpx solid gray;
							padding: 6rpx;
							display: flex;
							align-items: center;
							flex-wrap: wrap;

							&-icon {
								width: 28rpx;
								height: 28rpx;
								line-height: 28rpx;
								margin-right: 15rpx;
								text-align: center;
								vertical-align: middle;
								padding-left: 10rpx;
							}

							&-name {
								font-size: 28rpx;
								color: #36648b;
							}
						}

						.comment {
							padding: 6rpx 8rpx;
							color: $uni-text-color;
							font-size: 28rpx;

							&-box {
								padding: 4rpx 0;

								&-name {
									color: #36648b;

									.callback {
										color: $uni-text-color;
									}
								}

								&-content {
									word-break: break-all;
							}
								}
						}
					}
				}

				.relavivetime {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 26rpx;

					.time {
						color: $uni-text-color-grey;
					}

					.icon-box {
						display: flex;
						align-items: center;

						&-item {
							//background-color: #F8F8F8;
							padding: 4rpx 12rpx;
							border-radius: 6rpx;

							&.thumb {
								margin-right: 10rpx;
							}
						}

						.img {
							width: 34rpx;
							height: 34rpx;
						}
					}
				}
			}
		}

		.input-box {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			box-sizing: content-box;
			z-index: 999;
			background-color: #eaeaea;

			// margin-bottom: 0rpx;
			// margin-bottom: constant(safe-area-inset-bottom);
			// margin-bottom: env(safe-area-inset-bottom);
			&-flex {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: nowrap;
				flex-direction: row;
				padding: 0 20rpx;
				height: 100rpx;

				&-grow {
					flex-grow: 1;

					.content {
						background-color: #fff;
						height: 60rpx;
						padding: 0 20rpx;
						border-radius: 12rpx;
						font-size: 28rpx;
						caret-color: $uni-color-success;
					}
				}

				.btn {
					margin-left: 20rpx;
					background-color: $u-type-success;
					border: none;
				}
			}
		}

		.signature {
			display: flex;
			justify-content: flex-end;
			font-size: 24rpx;
			color: gray;
			padding: 35rpx 30rpx 35rpx 100rpx;
			text-align: right;
		}

		.slot-wrap {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
		}
		
		.slot-btn {
			width: 200rpx;
			height: 200rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgb(244, 245, 246);
			border-radius: 10rpx;
			border:1rpx solid  $u-border-color
		}
	}
</style>
