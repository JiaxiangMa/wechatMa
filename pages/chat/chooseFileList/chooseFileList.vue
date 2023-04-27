<template>
	<view class="container">
		<u-navbar :is-back="true" z-index="1001">
			<view v-if="platFromType==1" class="slot-content" style="width: 100%;text-align: center;padding: 0rpx 40rpx;">
				<u-subsection 
						 active-color="#2979ff" 
						:list="subList" :current="currentTab" @change="sectionChange"></u-subsection>
			</view>
			<view v-else class="slot-content" style="width: 100%;text-align: center;">
				<text style="font-weight: bold; margin-right: 16rpx;font-size: 34rpx;color: #19be6b;">聊天中的文件</text>
			</view>
			<view slot="right" style="margin-right: 20rpx;">
				<u-button v-if="currentTab===0" @click="sendModalShowFlag=true" size="mini"
					:disabled="chatSelectedFiles.length<1" type="success"> 发送({{chatSelectedFiles.length}}/9)
				</u-button>
				<u-button v-if="currentTab===1" @click="sendModalShowFlag=true" size="mini"
					:disabled="sysSelectedFiles.length<1" type="success"> 发送({{sysSelectedFiles.length}}/9) </u-button>
			</view>
		</u-navbar>
			<!-- 聊天中的文件 -->
			<scroll-view v-if="currentTab===0&&chatFileList.length > 0" class="scrollList" 
				:scroll-y="true" :scroll-x="false" enable-back-to-top
				:scroll-into-view="scrollViewId" @scrolltolower="loadMore()" lower-threshold="10"
				:style="'height:'+winHeight+'px'">
				<view class="list">
					<view class="flex_col" v-for="(fileObj,key) in chatFileList" :key="key">
						<view style="text-align: center;" @click="chooseFile(fileObj,key)">
							<view v-show="fileObj.isChecked==true">
								<image style="width: 40upx;height: 40upx;" mode="aspectFill"
									src="@/static/image/fileType/radioCheck.png"></image>
							</view>
							<view v-show="fileObj.isChecked==false">
								<image style="width: 40upx;height: 40upx;" mode="aspectFill"
									src="@/static/image/fileType/radioNoCheck.png"></image>
							</view>
						</view>
						<image v-if="fileObj.fileSuffix === 'xls'" src="@/static/image/fileType/xls.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='doc'" src="@/static/image/fileType/docx.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='txt'" src="@/static/image/fileType/txt.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='ppt'" src="@/static/image/fileType/ppt.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='pdf'" src="@/static/image/fileType/pdf.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='zip'" src="@/static/image/fileType/zip.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='img'" 
							:src="fileObj.filePath?fileObj.filePath:fileObj.fileUrl" 
							mode="aspectFill"></image>	
						<image v-else src="@/static/image/fileType/unknowfile.png"
							mode="aspectFill"></image>
							
						<view class="flex_grow"  @click="downloadFile(fileObj)">
							<view class="flex_col">
								<view class="flex_grow">
									<view class="info" style="font-size: 32upx;color: rgba(74,74,74,1)">
										{{fileObj.fileName==null?'未知':fileObj.fileName}}</view>
								</view>
							</view>
							<view class="flex_col">
								<view class="fileSize">{{fileObj.fileSize}}</view>
								<view class="uploadTime">{{fileObj.createTime}}</view>
							</view>
						</view>
						<view style="text-align: center;" @click="downloadFile(fileObj)">
							<u-icon name="eye-fill" color="#19be6b" size="44"></u-icon>
						</view>
					</view>
				</view>
			</scroll-view>
			<!--系统中的文件列表-->
			<scroll-view v-if="currentTab===1&&sysFileList.length > 0" class="scrollList" 
				:scroll-y="true" :scroll-x="false"
				:style="'height:'+winHeight+'px'">
				<view class="list">
					<view class="flex_col" v-for="(fileObj,key) in sysFileList" :key="key">
						<view style="text-align: center;" @click="chooseSysFile(fileObj,key)">
							<view v-show="fileObj.isChecked===true">
								<image style="width: 40upx;height: 40upx;" mode="aspectFill"
									src="@/static/image/fileType/radioCheck.png"></image>
							</view>
							<view v-show="fileObj.isChecked===false">
								<image style="width: 40upx;height: 40upx;" mode="aspectFill"
									src="@/static/image/fileType/radioNoCheck.png"></image>
							</view>
						</view>
						<image v-if="fileObj.fileSuffix === 'xls'" src="@/static/image/fileType/xls.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='doc'" src="@/static/image/fileType/docx.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='txt'" src="@/static/image/fileType/txt.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.type=='img'" :src="fileObj.filePath"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix=='MP4'||fileObj.fileSuffix=='mp4'"
							src="@/static/image/chat/bofang.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='ppt'" src="@/static/image/fileType/ppt.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='pdf'" src="@/static/image/fileType/pdf.png"
							mode="aspectFill"></image>
						<image v-else-if="fileObj.fileSuffix==='zip'" src="@/static/image/fileType/zip.png"
							mode="aspectFill"></image>
						<image v-else src="@/static/image/fileType/unknowfile.png" mode="aspectFill"></image>
						<view class="flex_grow">
							<view class="flex_col">
								<view class="flex_grow">
									<view class="info" style="font-size: 32upx;color: rgba(74,74,74,1)">
										{{fileObj.fileName==null?'未知':fileObj.fileName}}</view>
								</view>
							</view>
							<view class="flex_col">
								<view class="fileSize">{{fileObj.fileSize}}</view>
							</view>
						</view>
						<view style="text-align: center;" @click="downloadFile(fileObj)">
							<u-icon name="eye-fill" color="#19be6b" size="44"></u-icon>
							<!--#19be6b-->
						</view>
					</view>
				</view>
			</scroll-view>
		<!--内容为空显示-->
		<view v-if="(chatFileList.length<1&&currentTab===0)||(currentTab===1&&sysFileList.length <1)" class="data-empty">
			<u-empty :mode="emptyMode" icon-size="150"></u-empty>
		</view>
		
		<!--发送文件确认框-->
		<u-modal v-model="sendModalShowFlag" content="是否确认发送文件到群聊天?" :show-confirm-button="true"
			:show-cancel-button="true" @confirm="sendFiles" @cancel="cancelSendFile">
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatGroupId:"",
				platFromType:0, //0安卓以外其他 ,1安卓
				pageNum: 1,
				pageSize: 10,
				winHeight: 0,
				
				currentTab:0,
				subList: [{
					name: '聊天中的文件',
				}, {
					name: '手机系统文件',
				}],
				popCustomStyle: {
					height: '210upx',
					marginTop: '140upx',
					textAlign: 'center',
					paddingRight: '20upx',
					paddingLeft: '20upx',
					backgroundColor: "#f3f4f6"
					//borderBottom:'1px solid red'
				},
				//搜索词
				searchWords: '',
				//系统中的文件
				sysFileList: [],
				//文件列表
				chatFileList: [],
				//已经选择的聊天中的文件
				chatSelectedFiles: [],
				//已经选择的系统中的文件
				sysSelectedFiles: [],
				//列表锚点
				scrollViewId: '',
				//内容为空展示
				emptyMode: 'list',
				//发送文件确认框标志
				sendModalShowFlag: false,
				maxFileSize: 314572800,
			};
		},
		onLoad(option) {
			let that = this;
			console.log("option==", option);
			this.chatGroupId= option.chatGroupId;
			if(this.chatGroupId==null||this.chatGroupId==undefined){
				this.globalUtil.utilAlert("请选择群组!");
				uni.navigateBack();
				return;
			}
			if (uni.getSystemInfoSync().platform === "android") {
				this.platFromType=1;
				this.title="聊天中的文件";
			}else{
				this.platFromType=0;
			}	
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.winHeight = winHeight-90;
			let currentUserId = that.vuex_userInfo.id;
			that.sysFileList = [];
			that.sysSelectedFiles = [];
			that.chatFileList = [];
			that.getServerFiles();
		},
		onShow: function() {
			let that = this;
			that.emptyMode = "list";
		},
		methods: {
			/* 获取聊天中的文件 */
			getServerFiles:function(){
				let param={
					pageNum:1,
					pageSize:10
				};
				this.$u.api.sys.getSysFiles(param).then(res => {
					console.log("获取文件列表结果",res);
					if(res.code==200){
						let list= res.data.records;
						if(list!=null&&list.length>0){
							this.chatFileList=list;
						}
					}
				})	
			},
			//切换方式
			sectionChange(index) {
				let that=this;
				this.currentTab = index;
				if(this.currentTab==1){
					//系统文件
					that.selectedAndroidFile();
				}
				//聊天中个文件
				else{
					that.getServerFiles();
				}
			},
			
			//选择文件类型
			selectedAndroidFile: function() {
				let that = this;
				that.sysFileList=[];
				//读取手机内存文件
				if (uni.getSystemInfoSync().platform === "android") {
					const plugin = uni.requireNativePlugin('GuoWei-SelectFileModule');
					plugin.chooseFile({count: 10}, result => {
						let filePathArr = result.files;
						if (filePathArr&&filePathArr.length > 0) {
							for (let i = 0; i < filePathArr.length; i++) {
								let fileObj = filePathArr[i];
								let fileSuffix = fileObj.suffix.slice(1, fileObj.suffix.length);
								let filePath = fileObj.url;
								let name = fileObj.name;
								let msg = {
									"fileSuffix": fileSuffix,
									"fileName": name,
									"filePath": filePath
								};
								let size=fileObj.size;
								if(size){
									let fileSize= this.globalUtil.byteConvert(size);
									fileObj.fileSize=fileSize;
								}
								let suffix=fileSuffix.toString().toUpperCase();
								if (suffix == "JPG" || suffix =="JPEG" ||suffix == "PNG" ||  suffix == "GIF") {
									msg.type = "img";
									msg.width = 350;
									msg.height = 350;
									msg.fileType="img";
								} 
								else if(suffix=="ZIP"||fileSuffix=="RAR"){
									msg.fileType="ZIP";
								}
								else {
									msg.type = "file";
								}
								msg.isChecked=false;
								let param=Object.assign(fileObj,msg);
								delete param.url;
								delete param.suffix;
								delete param.name;
								//console.log("fileObj",param);
								that.sysFileList.push(param);
							}
							//console.log("sysFileList",that.sysFileList)
						}else {
							this.globalUtil.utilAlert("没有选中的文件!", "none");
							return;
						}
					})
				} else {
					this.globalUtil.utilAlert("系统不支持!", "warning");
					return;
				}
			},
			//搜索聊天中的文件
			searchChattingFiles: function() {
				let that = this;
				that.emptyMode = "search";
				let searchWords = that.searchWords;
				let currentUserId = that.vuex_userInfo.id;
			},
			//获取聊天中的文件(阿里云)
			getChatFileList:function(){
				let that=this;
				that.chatFileList = [];
				let param={
					prefixDir:'chattingFiles/2022/05',	
					nextMarker:'',
				};
				if(that.chatFileList.length>0){
					param.nextMarker=that.chatFileList[that.chatFileList.length-1].id;
				}
				console.log("获取聊天中的文件的参数",param);
				this.$u.api.sys.getChatFileList(param).then(res => {
					console.log("聊天中的文件",res);
					if (res != null && res.data != null && res.code === 200) {
						let list = res.data;
						if (list.length > 0) {
							that.chatFileList = that.chatFileList.concat(list);
							uni.hideLoading();
						} else {
							this.globalUtil.utilAlert("暂无更多记录!", "warning");
							uni.hideLoading();
						}
						console.log("聊天中的文件列表", that.chatFileList);
						return;
					} else {
						uni.hideLoading();
					}
				}).catch(res => {
					console.log("获取群聊文件出发异常", res);
					uni.hideLoading();
				})
			},
			
			//选择聊天中的文件
			chooseFile: function(fileObj, key) {
				let that = this;
				let index;
				if (that.chatSelectedFiles.length >= 9) {
					index = that.chatSelectedFiles.findIndex(function(obj) {
						return obj.id === fileObj.id
					})
				}
				if (index === -1) {
					this.globalUtil.utilAlert("最多能勾选9个", 'warning');
					return;
				}
				that.chatFileList[key].isChecked = !this.chatFileList[key].isChecked;
				//如果选中的列表为空,并且当前点击的文件isChecked等于true,就放入已选择的列表中
				if (that.chatSelectedFiles.length === 0) {
					if (fileObj.isChecked === true) {
						that.chatSelectedFiles.push(fileObj);
					}
				} else {
					let j = -1;
					for (let i = 0; i < that.chatSelectedFiles.length; i++) {
						if (fileObj.id === that.chatSelectedFiles[i].id) {
							//当存在，再次点击说明需要取消选中
							if (fileObj.isChecked === false) {
								//说明是选中的状态
								j = i;
								break;
							}
						}
					}
					if (j !== -1) {
						//表示先获取这个元素的下标，然后从这个下标开始计算，删除长度为1的元素
						that.chatSelectedFiles.splice(j, 1);
						// this.chatSelectedFiles.pop(j);
					} else {
						that.chatSelectedFiles.push(fileObj);
					}
				}
			},
			//选择系统中的文件
			chooseSysFile: function(fileObj, key) {
				let that = this;
				let index;
				if (that.sysSelectedFiles.length >= 9) {
					index = that.sysSelectedFiles.findIndex(function(obj) {
						return obj.fileName === fileObj.fileName
					})
				}
				if (index === -1) {
					this.globalUtil.utilAlert("最多能勾选9个", 'warning');
					return;
				}
				that.sysFileList[key].isChecked = !this.sysFileList[key].isChecked;
				//如果选中的列表为空,并且当前点击的文件isChecked等于true,就放入已选择的列表中
				if (that.sysSelectedFiles.length === 0) {
					if (fileObj.isChecked === true) {
						that.sysSelectedFiles.push(fileObj);
					}
				} else {
					let j = -1;
					for (let i = 0; i < that.sysSelectedFiles.length; i++) {
						if (fileObj.fileName === that.sysSelectedFiles[i].fileName) {
							//当存在，再次点击说明需要取消选中
							if (fileObj.isChecked === false) {
								//说明是选中的状态
								j = i;
								break;
							}
						}
					}
					if (j !== -1) {
						//表示先获取这个元素的下标，然后从这个下标开始计算，删除长度为1的元素
						that.sysSelectedFiles.splice(j, 1);
						// this.chatSelectedFiles.pop(j);
					} else {
						that.sysSelectedFiles.push(fileObj);
					}
				}
			},
			//发送文件
			sendFiles: function() {
				let that = this;
				let sendFiles = [];
				//发送聊天中的文件
				if (that.currentTab === 0) {
					that.sendChattingFile();
					return;
				}
				//发送系统文件
				if (that.currentTab === 1) {
					let	sendFiles = that.sysFileList;
					if(sendFiles.length<1) {
						this.globalUtil.utilAlert("发送文件为空!", "error");
						return;
					}
					console.log("发送系统文件",sendFiles);
					let sum=sendFiles.length-1;
					for (let i = 0; i < sendFiles.length; i++) {
						setTimeout(function(){
							let item=sendFiles[i];
							item.type="file";
							item.savePath="/chattingFiles";
							that.sendSysFile(item,i,sum);
						},500);
					}
				}
			},
			
			/*发送手机文件*/
		 	sendSysFile:function(item,index,max){
				let that=this;
				that.globalUtil.globalUpload(that,{
					param:item,
					success: (res1) => {
						if(res1.code==1){
							//console.log("上传文件结果",res1);
							let param={
								sendFiles:[res1.result],
								chatGroupId:that.chatGroupId
							};
							that.$u.api.chatGroup.sendGroupFile(param).then(res => {
								if(res.code==200){
									if(res.data>0){
										if(index==max){
											uni.navigateBack({
												delta: 1,
												animationType: 'pop-out',
												animationDuration: 200
											});
										}
										else{
											that.globalUtil.utilAlert("第"+(index+1)+"份文件发送完成");
										}
									}
								}else{
									that.globalUtil.utilAlert("第"+(index+1)+"份文件发送失败");
									console.log("发送失败",res.message);
								}
							})
						};
					},
					fail:(res1) => {
						that.globalUtil.utilAlert("第"+(index+0)+"份上传文件失败!");
					}
				});
			},
			
			/*发送聊天中的文件*/
			sendChattingFile:function(){
				let that=this;
				let	sendFiles = that.chatSelectedFiles;
				if (sendFiles.length > 0 && sendFiles.length < 10) {
					let param={
						sendFiles:sendFiles,
						chatGroupId:that.chatGroupId
					};
					that.$u.api.chatGroup.sendGroupFile(param).then(res => {
						uni.hideLoading();
						if(res.code==200){
							if(res.data>0){
								uni.navigateBack({
									delta: 1,
									animationType: 'pop-out',
									animationDuration: 200
								});
							}
						}else{
							that.globalUtil.utilAlert(res.message);
							return;
						}
					})
				} else if (sendFiles.length > 9) {
					this.globalUtil.utilAlert("最多能选择9个!", "warning");
					return;
				} else {
					this.globalUtil.utilAlert("发送文件为空!", "error");
					return
				}
			},
			
		
			
			
			
			
			//取消发送
			cancelSendFile: function() {
				let that = this;
				that.sendModalShowFlag = false;
			},
			//下拉翻页加载列表
			loadMore: function() {
				let that = this;
			},
			//下载并打开文件
			downloadFile: function(fileItem) {
				let fileSuffix = fileItem.fileSuffix;
				let fileType=fileItem.fileType;
				let fileUrl = fileItem.fileUrl == null ? fileItem.url : fileItem.fileUrl;
				if (fileUrl.length < 1) {
					return;
				}
				if (fileSuffix === "img"||fileType==1) {
					// 预览图片
					uni.previewImage({
						urls: [fileUrl],
						indicator: "none"
					});
				} else {
					uni.downloadFile({
					  url: fileUrl,
					  success: function (res) {
					    var filePath = res.tempFilePath;
					    uni.openDocument({
					      filePath: filePath,
					      showMenu: true,
					      success: function (res) {
					        console.log('打开文档成功');
					      },
						  error:function(error){
							  console.log("文件打开失败",error);
							  this.globalUtil.utilAlert("暂不支持查看");
							  return;
						  }
					    });
					  }
					});
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.slot-wrap {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0 30rpx;
		}

		.scrollList {
			//border: 1px solid red;
			::-webkit-scrollbar{
				display: none;
				height: 0;
				width: 0;
			}
			/* 列表 */
			.list {
				background-color: #fff;
				font-size: 28upx;
				color: #333;
				user-select: none;
				touch-callout: none;

				&>view {
					padding: 24upx 30upx;
					position: relative;

					&:active,
					&.active {
						background-color: #f3f3f3;
					}

					image {
						height: 80upx;
						width: 80upx;
						border-radius: 4px;
						margin-right: 20upx;
					}

					&>view {
						line-height: 50upx;

						.time,
						.info {
							color: #999;
							font-size: 24upx;
						}

						.time {
							text-align: right;
						}

						.info {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							width: 100%;
						}
					}
				}

				&>view:not(:first-child) {
					margin-top: 1px;

					&::after {
						content: '';
						display: block;
						height: 0;
						border-top: #CCC solid 1px;
						width: 620upx;
						position: absolute;
						top: -1px;
						right: 0;
						transform: scaleY(0.5);
						/* 1px像素 */
					}
				}
			}


			/* 列式弹性盒子 */
			.flex_col {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
			}

			/* 弹性盒子弹性容器 */
			.flex_col .flex_grow {
				width: 0;
				-webkit-box-flex: 1;
				-ms-flex-positive: 1;
				flex-grow: 1;
			}

			.flex_row .flex_grow {
				-webkit-box-flex: 1;
				-ms-flex-positive: 1;
				flex-grow: 1;
			}

			/* 弹性盒子允许换行 */
			.flex_col.flex_wrap {
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
			}

			.fileSize {
				width: 30%;
				text-align: left;
				margin-right: 30upx;
				color: #D8D8D8;
			}

			.uploadTime {
				width: 60%;
				text-align: right;
				margin-right: 10upx;
				color: #D8D8D8;
			}

		}

	}
	.data-empty{
		    min-height: 600rpx;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
	}
</style>
