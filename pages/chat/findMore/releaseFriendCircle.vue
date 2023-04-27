<template>
	<view class="releaseContainer">
		<u-navbar :background="{ background: '#ffffff'}" title="" :is-back="false" :border-bottom="false">
			<view class="u-flex u-row-between u-col-center u-p-l-20 u-p-r-20"
				style="width: 100%;font-size: 32rpx;color: #2c2d2f;">
				<view style="font-size: 34rpx;color: #2c2d2f;" @click="goBack()">取消</view>
				<view style="font-size: 36rpx;font-weight: bold;padding-left: 10rpx">{{navbarTitle}}</view>
				<view>
					<u-button :custom-style="customBtnStyle" size="mini" :loading="btnLoading" 
								:disabled="submitFlag"
								:type="submitFlag?'info ':'success'" @click="releaseFriendCircle()">
						发表</u-button>
				</view>
			</view>
		</u-navbar>
		<view class="content">
			<!-- 文字输入内容区 -->
					<scroll-view  @scroll="hiddenInput" class="input-box"  :scroll-top="inputScrollTop" :scroll-with-animation="inputAnimation"
									:style="'max-height:'+300+'rpx;width:'+(winWidth-30)+'px'"
									:scroll-x="false" :scroll-y="true">
							<textarea class="input" :auto-height="true"   placeholder-style="color:#DDDDDD;"  placeholder="这一刻的想法..."
								 :adjust-position="true" :auto-blur="true" @linechange="inputLineChange" @input="inputing" 
								 :confirm-hold="true" :show-confirm-bar="false"
								 :focus="inputFocusFlag" :disable-default-padding="true"
								v-model="content" :cursor="content.length" :maxlength="-1" />	
					</scroll-view>
				<!-- 文件选择区 -->	
					<view v-if="releaseType!=0"  class="uploadBox">
						<u-grid :col="3" :border="false" hover-class="none">
							<template v-if="tempFilePaths.length>0">
								<u-grid-item v-for="(item,index) in tempFilePaths" :index="index" :custom-style="girdItemCustomStyle">
									<view @click="delTempFile(index)"
										style="width: 200rpx; display: flex; flex-direction: row;align-items: flex-start;justify-content: flex-end;position: relative;left: 32rpx;top:32rpx; z-index: 999;">
										 <u-icon name="close-circle" size="32" color="#fa3534"></u-icon>
									</view>
									<view   @click="previewFile(index)" class="slot-btn" hover-class="slot-btn__hover">
										<u-image  :src="item" width="198rpx" height="198rpx" mode="aspectFill" border-radius="10"></u-image>
									</view>	
								</u-grid-item>
							</template>
							<template v-if="(tempFilePaths.length<9&&releaseType==1)||(tempFilePaths.length<1&&releaseType==2)">
								<u-grid-item @click="chooseFile()"  :custom-style="girdItemCustomStyle2">
									<view   class="slot-btn" hover-class="slot-btn__hover">
										<u-icon name="plus" size="80" :color="$u.color['lightColor']"></u-icon>
									</view>
								</u-grid-item>
							</template>
						</u-grid>
					</view>		
				<!-- 选项 -->	
					<view class="tips">
						<u-cell-group>
							<!--  :value="address.name" :value-style="customValueStyle" :label="address.address" -->
							<u-cell-item bg-color="#ffffff" 
									:title="address.chooseFlag?(address.name):'所在位置'" :title-style="customTitleStyle" 
									:label="address.chooseFlag?(address.address):'请选择'"  
									@click="toChooseLocation()">
								<view slot="icon" class="u-flex u-row-center u-col-center">
									<u-icon name="map" size="40" :color="address.chooseFlag?'#19be6b':'#606266'"></u-icon>
								</view>
							</u-cell-item>
							<u-cell-item bg-color="#ffffff" title="提醒谁看" :title-style="customTitleStyle" @click="toRemind()">
								<view slot="icon" class="u-flex u-row-center u-col-center">
									<u-icon name="/static/image/friendCircle/remindSymbol.png" width="40" height="40" color="#606266"></u-icon>
								</view>
							</u-cell-item>
							<u-cell-item bg-color="#ffffff"  @click="toSetPromission()"
										title="谁可以看" :title-style="customTitleStyle" 
										:value="'公开'" :value-style="customValueStyle">
								<view slot="icon" class="u-flex u-row-center u-col-center">
									<u-icon name="account"  size="40" color="#606266"></u-icon>
								</view>
							</u-cell-item>
						</u-cell-group>
					</view>
		</view>
		
		<!-- 播放视频 -->
		<view v-if="previewVideoFlag==true">
				<videoPlayer :previewVideoFlag="previewVideoFlag" :previewVideoSrc="previewVideoSrc" @quitPlay="previewVideoFlag=false"></videoPlayer>	
		</view>	
	</view>
</template>

<script>
	import videoPlayer from '@/components/videoPlayer/videoPlayer.vue';
	export default {
		components:{
			videoPlayer
		},
		data() {
			return {
				winWidth:0,
				scrollViewHeight:0,
				inputScrollTop:0,
				inputAnimation:false,
				releaseType: 1, //0 纯文字  1 图片或视频
				navbarTitle: '',
				customBtnStyle: {
					fontSize: '32rpx',
					padding: '28rpx',
					width:'100rpx'
				},
				girdItemCustomStyle:{
					padding: '0',
					margin:'0',
					width:'220rpx',
					height:'220rpx',
					//border:'1rpx solid #f2f6fc'
				},
				girdItemCustomStyle2:{
					padding: '0',
					marginTop:'32rpx',
					width:'200rpx',
					height:'200rpx',
					//border:'1rpx solid #f2f6fc'
				},
				customTitleStyle:{
					fontSize:'35rpx',
					color:'#2c2d2f',
					marginLeft:'30rpx'
				},
				customValueStyle:{
					fontSize:'32rpx',
					color:'#2c2d2f',
				},
				inputFocusFlag:false,
				tempFilePaths: [],
				tempUploadFilePath:[],
				content: '',   //文字
				address:{
					chooseFlag:false,
				},
				btnLoading: false ,//防止重复点击
				submitFlag:true,
				previewVideoFlag:false,
				previewVideoSrc:'',
				customMaskStyle:{
					display:"flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					paddingTop:'100rpx',
					//border:'1px solid red'
				}
			};
		},
		created: function() {
			this.winWidth= this.$u.sys().winWidth;
			let scrollViewHeight = this.$u.sys().windowHeight - 120;
			this.scrollViewHeight = scrollViewHeight;
		},
		
		onPageScroll:function(){
			uni.hideKeyboard();
		},
		
		onLoad: function(option) {
			if (option.releaseType != null && option.releaseType != undefined) {
				this.releaseType = option.releaseType;
			}
			if (this.releaseType == 0) {
				this.navbarTitle = "发表文字";
				this.inputFocusFlag=true;
				this.submitFlag=true;
			}
			if (this.releaseType == 1) {
				this.navbarTitle = "发表图文";
			}
			if (this.releaseType == 2) {
				this.navbarTitle = "发表视频";
			}
			if (option.tempFilePaths != null && option.tempFilePaths != undefined && option.tempFilePaths.length > 0) {
				this.tempFilePaths = JSON.parse(option.tempFilePaths);
				if(this.releaseType!=0){
					//console.log("不是纯文字")
					this.submitFlag=false; //可以直接发布
				}
				for (var i = 0; i < this.tempFilePaths.length; i++) {
					 let url= this.tempFilePaths[i];
					 this.tempUploadFilePath.push({url:url});
				}
				//console.log("准备发朋友圈的临时文件", this.tempUploadFilePath);
			}
			
		},
		
		//监听信息滚动
		onReady() {
			let that=this;
			uni.onKeyboardHeightChange(res => {
				//如果键盘弹起
				if (res.height != 0) {
					this.scrollViewHeight = this.$u.sys().windowHeight - res.height - 90;
				} 
				//键盘收起
				else {
					this.scrollViewHeight = this.$u.sys().windowHeight - 120;
				}
			});
		},
		
		methods: {
			//隐藏输入
			hiddenInput:function(e){
				let that=this;
				that.inputFocusFlag=false;
				uni.hideKeyboard();
			},
			//监听输入
			inputing:function(e){
				let content=e.detail.value.trim();
				//console.log("content",content);
				if(content.length>0){
					this.submitFlag=false;
				}else{
					//如果是纯文字,不能提交
					if(this.releaseType==0){
						this.submitFlag=true;
					}
					//如果不是纯文字
					else{
						//附件列表没有
						if(this.tempFilePaths.length<1){
							this.submitFlag=true;
						}else{
							this.submitFlag=false;
						}
					}
				}
			},
			//复制文本到输入框文字太多,焦点保证落在末尾去
			inputLineChange:function(e){
				this.inputAnimation=true;
				this.inputScrollTop=e.detail.height;
				if(e.detail.lineCount>0&&this.content.length>0){
					this.submitFlag=false;
				}else{
					//如果是纯文字,不能提交
					if(this.releaseType==0){
						this.submitFlag=true;
					}
					//如果不是纯文字
					else{
						//附件列表没有
						if(this.tempFilePaths.length<1){
							this.submitFlag=true;
						}else{
							this.submitFlag=false;
						}
					}
				}
			},
			//返回
			goBack: function() {
				uni.navigateBack();
			},
			//去选择所在位置
			toChooseLocation:function(){
				let that=this;
				uni.chooseLocation({
				    success: function (res) {
				       // console.log('位置名称：' + res.name);
				       // console.log('详细地址：' + res.address);
				       // console.log('纬度：' + res.latitude);
				        //console.log('经度：' + res.longitude);
						that.address=res;
						that.address.chooseFlag=true;
						//console.log("that.address",that.address);
				    },
					fail:function(){
						that.address={};
						that.address.chooseFlag=false;
					}
				});
			},
			//设置发布朋友圈的查看权限
			toSetPromission:function(){
				let that=this;
				that.globalUtil.utilAlert("功能暂未开放!");
				
			},
			//设置提醒谁去看
			toRemind:function(){
				let that=this;
				that.globalUtil.utilAlert("功能暂未开放!");
			},
			//删除临时文件
			delTempFile:function(index){
				let that=this;
				that.tempFilePaths.splice(index,1);
				that.tempUploadFilePath.splice(index,1);
			},
			//预览图片或者视频
			previewFile:function(index){
				let that=this;
				//照片
				if(that.releaseType==1){
					uni.previewImage({
						urls:that.tempFilePaths,
						current:index,
					})
				}
				//视频
				else{
					that.previewVideoSrc=that.tempFilePaths[0];
					that.previewVideoFlag=true;
				}
			},
			
			//选择文件
			chooseFile:function(){
				let that = this;
				//视频
				if (that.releaseType == 2) {
					uni.chooseVideo({
						sourceType: ['camera', 'album'],
						maxDuration: 60,
						success: function(res) {
							console.log("视频",res);
							let filePath = res.tempFilePath;
							that.tempFilePaths.push(filePath);
							return;
						}
					});
				}
				//选择照片
				else {
					let count=9-(that.tempFilePaths.length);
					console.log("可以选择的照片的数量",count);
					uni.chooseImage({
						count: count, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['camera','album'], //从相册选择
						success: function(res) {
							console.log("选择照片",res);
							let filePaths = res.tempFilePaths;
							that.tempFilePaths=that.tempFilePaths.concat(filePaths);
							return;
						}
					});
				}
			},
				
			//发布朋友圈
			 releaseFriendCircle() {
				let that=this;
				that.btnLoading = true;
				let userId=that.vuex_userInfo.id;
				let headImg=that.vuex_userInfo.avatar;
				let userName=that.vuex_userInfo.userName;
				let param={
					content: this.content,
					releaseType:that.releaseType,
					address:JSON.stringify(that.address),
				};
				//没有文件
				if(that.tempFilePaths.length<1){
					that.globalUtil.utilLoading("正在发布");
					that.$u.api.friendCircle.releaseFriendCircle(param).then(res => {
						if(res.code==200){
							let newCircle=res.data;
							if(newCircle.address!=null&&newCircle.address.length>0){
								newCircle.address=JSON.parse(newCircle.address);
							}else{
								newCircle.address={"chooseFlag":false};
							}
							if(newCircle.fileList!=null&&newCircle.fileList.length>0){
								newCircle.fileList=JSON.parse(newCircle.fileList);
							}else{
								newCircle.fileList=[];
							}
							if(newCircle.praise!=null){
								newCircle.praise=JSON.parse(newCircle.praise);	
							}else{
								newCircle.praise=[];
							}
							if(newCircle.comment!=null){
								newCircle.comment=JSON.parse(newCircle.comment);	
							}
							else{
								newCircle.comment=[];
							}
							let circleDataList=this.circleData;
							circleDataList.unshift(newCircle);
							that.$u.vuex('circleData', circleDataList);
							that.btnLoading = false;
							uni.hideLoading();
							that.$u.route({ type: 'back'});
						}
					})	
				}
				//有文件
				else{
					that.uploadMuchFile(param);
				}
			},
			//发布图文/视频+图文的朋友圈
			uploadMuchFile(param){
				let that=this;
				that.globalUtil.utilLoading("正在发布...");
				let updloadFilePathArr=[];
				let files=[];
				for (var i = 0; i < that.tempFilePaths.length; i++) {
				   let filePath=that.tempFilePaths[i];
				   let item={
					   uri:filePath,
					   name:"file"+i
				   }
				   files.push(item);
				}
				let uploadFileUrl = that.$u.api.multipartAddress.updloads+"/fiendCircle";
				let uploadTask = uni.uploadFile({
					url: uploadFileUrl,
					files: files,
					header: {
						'Access-Control-Allow-Origin': '*',
						'TOKEN_OA': that.vuex_token,
					},
					//formData:{releaseType:that.releaseType},
					success: (uploadFileRes) => {
						if (uploadFileRes.statusCode == 200 && uploadFileRes.data.length > 0) {
							let resObj = JSON.parse(uploadFileRes.data);
							if (resObj.code == 200) {
								if(resObj.data.length>0){
									for (let i = 0; i < resObj.data.length; i++) {
										  let filePath= resObj.data[i];
										  let _url = that.$u.api.multipartAddress.getFileByPath + filePath;
										  updloadFilePathArr.push(_url);	
									}
									param.fileList=JSON.stringify(updloadFilePathArr);
									console.log("发布新的动态参数",updloadFilePathArr);
									that.$u.api.friendCircle.releaseFriendCircle(param).then(res => {
										if(res.code==200){
											let newCircle=res.data;
											if(newCircle.address!=null&&newCircle.address.length>0){
												newCircle.address=JSON.parse(newCircle.address);
											}
											if(newCircle.fileList!=null&&newCircle.fileList.length>0){
												newCircle.fileList=JSON.parse(newCircle.fileList);
											}
											if(newCircle.praise!=null){
												newCircle.praise=JSON.parse(newCircle.praise);	
											}else{
												newCircle.praise=[];
											}
											if(newCircle.comment!=null){
												newCircle.comment=JSON.parse(newCircle.comment);	
											}
											else{
												newCircle.comment=[];
											}
											console.log("新的动态结果",newCircle);
											let circleDataList=that.circleData;
											circleDataList.unshift(newCircle);
											that.$u.vuex('circleData', circleDataList);
											that.btnLoading = false;
											uni.hideLoading();
											setTimeout(function(){
												that.$u.route({ type: 'back'});
											},500);
										}
									})	
								}
							}
						} 
					},
					fail: function() {
						console.log("批量上传失败");
						that.globalUtil.utiAlert("发布失败!");
						uni.hideLoading();
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.releaseContainer{
		.content {
			padding: 20rpx;
			.input-box{
				::-webkit-scrollbar{
					display: none;
					width: 0;
					height: 0;
				}
				//border: 1px solid red;
				padding: 20rpx 0rpx;
				
				.input {
					//border: 1px solid black;
					caret-color: $uni-color-success;
					//height: 200rpx;
					padding: 15rpx;
					width: initial;
					//text-indent:5rpx;
					font-size: 32rpx;
				}
			}
		
			.uploadBox{
				margin-top: 50rpx;
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
				
				.slot-btn__hover {
					background-color: rgb(235, 236, 238);
					
				}
			}
		
			.tips {
				margin-top: 120rpx;
			}
		}
	}
</style>
<style lang="scss">
.content {
	.upload {
		/deep/.u-list-item,
		.u-add-wrap {
			background-color: #f8f8f8;
			height: 180rpx !important;
			width: 180rpx !important;
		}
		
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx; 
	}
}
</style>
