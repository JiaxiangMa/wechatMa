import random from "uview-ui/libs/function/random";

const TUICallKit = uni.requireNativePlugin('TencentCloud-TUICallKit');
const TUICallingEvent = uni.requireNativePlugin('globalEvent');

function TRCLogin(that){
	TUICallKit.logout(res => {});
	let param={
		SDKAppID: that.vuex_userInfo.trcSdkAppId,
		userID: that.vuex_userInfo.mobile+"_"+that.vuex_userInfo.id,
		userSig: that.vuex_userInfo.userSign,
	}
	console.log("登录音视频参数",param);
	TUICallKit.login(param,(res) => {
			console.log("登录音视频插件回调",res);
			setTRCUserInfo(that.vuex_userInfo);
			// 开启悬浮窗
			TUICallKit.enableFloatWindow(true);
		}
	);
}

function setTRCUserInfo(vuex_userInfo){
	let options={
		  nickName: vuex_userInfo.userName,
		  avatar: vuex_userInfo.avatar
	};
	TUICallKit.setSelfInfo(options, (res) => {
		if (res.code === 0) {
			console.log('音视频通话用户信息更新成功');
		} else {
			console.log(`音视频通话用户信息更新失败 = ${res.msg}`);
		}
	});
}

function setCustomBell(filePath){
	TUICallKit.setCallingBell(filePath, (res) => {
	  if (res.code === 0) {
	    console.log('设置自定义铃声成功');
	  } else {
	    console.log(`设置自定义铃声失败,错误信息 = ${res.msg}`);
	  }
	});
}

 //1对1音视频通话， 语音通话(callMediaType = 1)、视频通话(callMediaType = 2)
function singleCall(userID,callMediaType){
	const options = {
	  userID:userID,
	  callMediaType:callMediaType,
	};
	TUICallKit.call(options, (res) => {
	  if (res.code === 0) {
	    console.log('call success');
		return res;
	  } else {
	    console.log(`call failed, error message = ${res.msg}`);
		return null;
	  }
	});
}
// 群组音视频通话 语音通话(callMediaType = 1)、视频通话(callMediaType = 2)
function groupCall(groupID,userIDList,callMediaType){
	const options = {
	  groupID: groupID?groupID:'群组_'+random(0,100),
	  userIDList:userIDList,
	  callMediaType: callMediaType, 
	};
	TUICallKit.groupCall(options, (res) => {
	  if (res.code === 0) {
	    console.log('groupCall success');
		return res;
	  } else {
	    console.log(`groupCall failed, error message = ${res.msg}`);
	  }
	});
}

function listenCallStatus(callback){
	if (typeof callback.onError != 'function') {
		  callback.onError = () => {};
		}
	if (typeof callback.onCallReceived != 'function') {
	  callback.onCallReceived = () => {};
	}
	if (typeof callback.onCallCancelled != 'function') {
	  callback.onCallCancelled = () => {};
	}
	if (typeof callback.onCallBegin != 'function') {
	  callback.onCallBegin = () => {};
	}
	if (typeof callback.onCallEnd != 'function') {
	  callback.onCallEnd = () => {};
	}
	TUICallingEvent.addEventListener('onError', (res) => {
		console.log('监听到通话异常', JSON.stringify(res));
		callback.onError(res);
	});
	TUICallingEvent.addEventListener('onCallReceived', (res) => {
		console.log('监听收到电话', JSON.stringify(res));
	    callback.onCallReceived(res);
	});
	TUICallingEvent.addEventListener('onCallCancelled', (res) => {
		console.log('监听到通话取消', res);
	    callback.onCallCancelled(res);
	});
	TUICallingEvent.addEventListener('onCallBegin', (res) => {
		console.log('监听到通话开始', JSON.stringify(res));
	    callback.onCallBegin(res);
	});
	TUICallingEvent.addEventListener('onCallEnd', (res) => {
		console.log('监听到通话结束', JSON.stringify(res));
		callback.onCallEnd(res);
	});
}

function TRCLogout(){
	TUICallKit.logout((res) => {
	  if (res.code === 0) {
	    console.log('logout success');
		return res;
	  } else {
	    console.log(`logout failed, error message = ${res.msg}`);
	  }
	});
};

module.exports={
	TRCLogin,
	TRCLogout,
	setTRCUserInfo,
	setCustomBell,
	singleCall,
	groupCall,
	listenCallStatus,
}
