//信息类型
const MSG_TYPE={
	SYSTEM_MSG:0,
	USER_MSG:1,
	SYSTEM_MSG_LAUNCHGROUP:2,
}
// 内容类型  1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
const CONTENT_TYPE={
	 /**文本信息*/
	TEXT_CONTENT_TYPE:1,
	 /**图片信息*/
	IMG_CONTENT_TYPE:2,
	/**视频信息*/
	VIDEO_CONTENT_TYPE:3,
	 /**语音信息*/
	AUDIO_CONTENT_TYPE:4,
	 /**文件*/
	FILE_CONTENT_TYPE:5,
	/**位置类型*/
	OTHER_CONTENT_TYPE:6,
	 /**红包信息*/
	RED_BAG_CONTENT_TYPE:7,
	 /**名片信息*/
	FRIEND_INFO_CONTENT_TYPE:8,
	 /**位置信息*/
	LOCATION_CONTENT_TYPE:9,
	/**合并聊天记录信息*/
	CHAT_RECORD_CONTENT_TYPE:10,
	 /**图文信息*/
	IMG_TEXT_COM_CONTENT_TYPE:11,
	 /**视频图文*/
	VIDEO_TEXT_COM_CONTENT_TYPE:12
}


//添加聊天信息到缓存
function addMessage(chatGroupId,message){
	let messageListStr= uni.getStorageSync(chatGroupId);
	if(messageListStr!=null&&messageListStr!=undefined&&messageListStr.length>0){
		let messageList=JSON.parse(messageListStr);
		messageList.push(message);
		uni.setStorageSync(chatGroupId,JSON.stringify(messageList));
	}
	else{
		let messageList=[];
		messageList.push(message);
		uni.setStorageSync(chatGroupId,JSON.stringify(messageList));
	}
}
//分页获取聊天信息
function getMessageList(pageNum,pageSize,chatGroupId,currentUserId){
	let start=0;
	let end=0;
	pageSize=pageSize?pageSize:15
	if(pageNum<1){
		start=0;
	}else{
		start=((pageNum-1)*pageSize);
		end=start+pageSize;
	}
	console.log("起始位置=====",start);
	console.log("结束位置=======",end);
	let messageListStr= uni.getStorageSync(chatGroupId);
	if(messageListStr!=null&&messageListStr!=undefined&&messageListStr.length>0){
		let messageList=JSON.parse(messageListStr);
		let list= messageList.reverse().slice(start,end);
		list.map(function(item,index){
			if(item.userId==currentUserId){
				item.meFlag=true;
			}else{
				item.meFlag=false;
			}
		})
		if(list.length>=0){
			return list.reverse();
		}else{
			return [];
		}
	}else{
		return [];
	}
}

function getLastMessageByGroupId(chatGroupId){
	let messageListStr= uni.getStorageSync(chatGroupId);
	if(messageListStr!=null&&messageListStr!=undefined&&messageListStr.length>0){
		let messageList=JSON.parse(messageListStr);
		let lastMsg= messageList[messageList.length-1];
		let formatContent="";
		switch (lastMsg.contentType+''){
			case "1":
				formatContent=lastMsg.content.text;
				formatContent=formatContent.replace(/face\[([^\s\[\]]+?)]/g, function(face) {
					return face.replace(/^face/g, '')
				});
				break;
			case "2":
				formatContent="[图片]";
				break;
			case "3":
				formatContent="[视频]";
				break;
			case "4":
				formatContent="[语音]";
				break;
			case "10":
				formatContent="[聊天记录]";
				break;
			case "11":
				formatContent="[图文]";
				break;
			case "12":
				formatContent="[视频文字]";
				break;
			default:
				formatContent="[其他]";
				break;
		}
		lastMsg.lastMsgContent=formatContent;
		//console.log("最后一条信息",lastMsg);
		return lastMsg;
	}else{
		//console.log("最后一条信息为空");
		return null;
	}
}


//下载图片资源至本地，返回文件的本地临时路径
function setImageLocalSrc(url,msgId){
	if(url&&msgId){
		uni.downloadFile({
			url:url,
			success: (res) =>{
				if (res.statusCode === 200){
					uni.saveFile({
						tempFilePath: res.tempFilePath,
						success: function (res2) {
							  //console.log("图片存入到本地缓存中===msgId==="+msgId,res2.savedFilePath)
							  uni.setStorageSync("image"+msgId, res2.savedFilePath)
						}
					});
					//保存图片至相册
				/* 	uni.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: function(result) {
							uni.setStorageSync("image"+msgId,result.path);
							console.log("文件以及存放在本地中");
						}
					}); */
				}
			}
		})
	}
}

function setVideoLocalSrc(url,msgId){
	if(url&&msgId){
		let path= uni.getStorageSync("video"+msgId);
		if(path&&path.length>0){
			//console.log("已经存在本地缓存，无需继续存储");
			return;
		}
		uni.downloadFile({
			url:url,
			success: (res) =>{
				if (res.statusCode === 200){
					uni.saveFile({
						tempFilePath: res.tempFilePath,
						success: function (res2) {
							//console.log("视频存入到本地缓存中===msgId==="+msgId,res2.savedFilePath)
							uni.setStorageSync("video"+msgId, res2.savedFilePath)
						}
					})
				}
			}
		})
	}
}

//将图片，视频信息放入缓存中
function saveLocal(messageObj){
	let msgId= messageObj.id;
	let contentType= messageObj.contentType;
	let contentObj=JSON.parse(messageObj.content);
	switch (contentType+''){
		case "2":
			let url =contentObj.url;
			setImageLocalSrc(url,msgId);
			break;
		case "3":
			let subImgInfo = contentObj.subImgInfo;
			if (subImgInfo) {
				let url= subImgInfo.url;
				setImageLocalSrc(url,msgId);
			}
			break;
		case "4":
			break;
		case "11":
			break;
		case "12":
			break;
		default:
			break;
	};
}

function clearLocalFile(){
	uni.getSavedFileList({
		success: function (res) {
			//console.log("缓存中的文件",res.fileList);
			let fileList=res.fileList;
			if(fileList.length>0){
				for (var i = 0; i < fileList.length; i++) {
					let localFile=fileList[i];
					let localPath= localFile.filePath;
					let localFileSize=localFile.size;
					uni.removeSavedFile({
						filePath:localPath,
						complete:function (res) {
							//console.log("删除本地文件结果",res);
						}
					});
				};
			}
		}
	});
	const res = uni.getStorageInfoSync();
	let keys= res.keys;
	for (var i = 0; i < keys.length; i++) {
		let key= keys[i];
		if(key.indexOf('image')!=-1||key.indexOf('video')!=-1){
			uni.removeStorage({
				key:key,
				success: function (res) {
					//console.log("文件"+key+"已被清除");
				}
			});
		}
	}
}


module.exports = {
	MSG_TYPE:MSG_TYPE,
	CONTENT_TYPE:CONTENT_TYPE,
	addMessage:function(chatGroupId,message){
		return addMessage(chatGroupId,message);
	},
	getMessageList:function(pageNum,pageSize,chatGroupId,currentUserId){
		return getMessageList(pageNum,pageSize,chatGroupId,currentUserId);
	},
	getLastMessageByGroupId:function(chatGroupId){
		return getLastMessageByGroupId(chatGroupId);
	},
	setImageLocalSrc:function (url,msgId) {
		return setImageLocalSrc(url,msgId);
	},
	setVideoLocalSrc:function (url,msgId){
		return setVideoLocalSrc(url,msgId);
	},
	saveLocal:function(message){
		return saveLocal(message);
	},
	clearLocalFile:function(){
		return clearLocalFile();
	}	
}	