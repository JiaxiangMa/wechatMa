<template>
	<view>
		<view class="u-p-30" style="margin-top: 10%;">
			<view style="width: 100%;
						height: 800rpx;
						padding: 30rpx;
						background-color: #ffffff;display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<view class="u-flex u-row-left u-col-center" style="width: 100%;">
					<view class="u-m-r-20">
						<u-image :src="titleIconSrc" width="120" height="120">
							<view slot="error">
								<u-image src="/static/image/login/logo.png" width="120" height="120">
								</u-image>	
							</view>
						</u-image>
					</view>
					<view>
						<text style="font-weight: bold;font-size: 40rpx;">
							{{title}}
						</text> 
					</view>
				</view>
				<view class="u-flex u-row-center u-col-center u-m-t-30" style="width: 100%;height: 70%;">
					<uqrcode ref="uqrcode" 
							canvas-id="qrcode" 
							fileType="png"
							:start="false"
							:auto="true"
							:value="qrInfoObj" 
							@complete="complete"
							@change="change"
							:options="options">
					</uqrcode>
				</view>
			</view>
		</view>
		<view class="u-p-50" style="position: absolute;bottom:5%;width: 100%;" v-show="qrFlag">
			<view>
				<u-button type="success" @click="uploadAndForward()">转发给朋友</u-button>
			</view>
			<view class="u-m-t-30">
				<u-button type="primary" @click="saveQRCode()">保存到本地</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"create-qr-code",
		props:{
			titleIconSrc:{
				type:String,
				default:"/static/image/login/logo.png"
			},
			title:{
				type:String,
				default:'',
			},
			qrInfoObj:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				options:{ 
					margin:20,
					size:250,
					backgroundColor:'#dbf1e1',
					sizeUnit:'rpx' ,
				},
				qrFlag:false,
			};
		},
		created:function(){
			let that=this;
			this.$nextTick(function(){
				that.$refs.uqrcode.make({
					success: (res) => {
					    console.log('生成成功');
					  },
					  fail: err => {
					    console.log(err)
					  }
				});
			})	
		},
		methods:{
			//二维码生成完成
			complete:function(e){
				console.log("二维码生成完成",JSON.parse(this.qrInfoObj));
				if(e.success==true){
					this.qrFlag=true;
				}
			},
			//二维码重新渲染完成
			change:function(e){
				console.log("二维码重新渲染完成",e);
			},
			
			//保存到相册
			saveQRCode:function(){
				let that=this;
				if(!that.qrFlag){
					console.log("二维码没有渲染完成");
					return;
				}
				this.$refs.uqrcode.save({
				  success: () => {
				    uni.showToast({
				      icon: 'success',
				      title: '保存成功'
				    });
				  }
				});
			},
			//转发
			uploadAndForward:function(){
				let that=this;
				if(!that.qrFlag){
					console.log("二维码没有渲染完成");
					return;
				}
				this.$refs.uqrcode.toTempFilePath({
				  success: res => {
				    //console.log("本地路径",res);
					if(res.tempFilePath&&res.tempFilePath.length>0){
						let obj = {
							type: "img",
							filePath: res.tempFilePath,
							savePath: "/chattingFiles"  //文件存放目录
						}
						this.globalUtil.globalUpload(that,{
							param:obj,
							success: (res1) => {
								console.log("上传成功",res1);
								if(res1.code==1){
									uni.getImageInfo({
										src: res.tempFilePath,
										success: (image) => {
											let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
											let maxH = uni.upx2px(350); //350是定义消息图片最大高度
											if (image.width > maxW || image.height > maxH) {
												let scale = image.width / image.height;
												image.width = scale > 1 ? maxW : maxH * scale;
												image.height = scale > 1 ? maxW / scale : maxH;
											}
											res1.result.type="img";
											res1.result.width=image.width;
											res1.result.height=image.height;
											res1.result.subContentType="qr";
											res1.result.qrInfo=that.qrInfoObj;
											res1.result.tempFilePath=res.tempFilePath;
											let forwardMSG=[
												{
													"content":JSON.stringify(res1.result),
													"platFrom": 1,
													"msgType": 1,
													"contentType": 2,
												}
											];
											console.log("发送二维码的参数",forwardMSG);
											that.$u.route({
												url: '/pages/chat/chatGroup/msgForward',
												params: {
													msgList:encodeURIComponent(JSON.stringify(forwardMSG)),
													sendType: 1, //1 单条转发 2多条转发
													fromChatGroupId:'',
													//delta:4
												}
											})
										}
									});
								}
							},
							fail:(res1) => {
								console.log("上传失败",res1);
							},
							complete: (res1) => {
								console.log("上传完成",res1);
							}
						});
					}
				  }
				});	
			},
		}
	}
</script>

<style lang="scss">

</style>