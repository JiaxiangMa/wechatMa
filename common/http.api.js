/*
接口统一管理配置
*/
import config from '@/common/environment.js';
const  IM_BASE_API=config.BASE_API;
const  multipartUrl=config.MULTIPART_API;
const install = (Vue, vm) => {
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	const sys={
		getAppConfig: (params = {}) => vm.$u.post(IM_BASE_API+'sys/getAppConfig', params),
		login: (params = {}) => vm.$u.post(IM_BASE_API+'sys/login', params),
		checkLoginStatus: (params = {}) => vm.$u.post(IM_BASE_API+'sys/checkLoginStatus', params),
		checkUserPower: (params = {}) => vm.$u.post(IM_BASE_API+'sys/checkUserPower', params),
		updateUserPower: (params = {}) => vm.$u.post(IM_BASE_API+'sys/updateUserPower', params),
		loginOut :  (params = {}) => vm.$u.post(IM_BASE_API+'sys/logout', params),
		checkMobile:  (params = {}) => vm.$u.post(IM_BASE_API+'sys/checkMobile', params),
		checkQQ:  (params = {}) => vm.$u.post(IM_BASE_API+'sys/checkQQ', params),
		register: (params = {}) => vm.$u.post(IM_BASE_API+'sys/register', params),
		getLatestVersion: (params = {}) => vm.$u.post(IM_BASE_API+'sys/getLatestVersion', params),
		getChatFileList:(params = {}) => vm.$u.post(multipartUrl+'getByDir', params),
		getSysFiles:(params = {}) => vm.$u.post(multipartUrl+'getSysFiles', params),
	}
	const imUser={
		getUserAccountInfo: (params = {}) => vm.$u.post(IM_BASE_API+'imUser/getUserAccountInfo', params),
		toPayUserBalance:(params = {}) => vm.$u.post(IM_BASE_API+'imUser/toPayUserBalance', params),
		updateUserInfo: (params = {}) => vm.$u.post(IM_BASE_API+'imUser/updateUserInfo', params),
		searchUser: (params = {}) => vm.$u.post(IM_BASE_API+'imUser/searchUser', params),
		syncContacts:(params = {}) => vm.$u.post(IM_BASE_API+'imUser/syncContacts', params),
		addFriend:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/addFriend', params),
		checkFriendApply:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/checkFriendApply', params),
		handleFriendApply:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/handleFriendApply', params),
		getMyFriendList:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/getMyFriendList', params),
		getFriendInfo:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/getFriendInfo', params),
		getMyFriendListForAdd:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/getMyFriendListForAdd', params),
		getMyFriendListForDel:(params = {}) => vm.$u.post(IM_BASE_API+'imUserFriend/getMyFriendListForDel', params),
		getGroupMemberInfo:(params = {}) => vm.$u.post(IM_BASE_API+'imUser/getGroupMemberInfo', params),
		getVideoCallingInfo: (params = {}) => vm.$u.post(IM_BASE_API+'imUser/getVideoCallingInfo', params),
		//扫码加入群聊
		scanQRJoinGroup:(params = {}) => vm.$u.post(IM_BASE_API+'imUser/scanQRJoinGroup',params),
		//账户交易记录
		addUserAccountRecord:(params = {}) => vm.$u.post(IM_BASE_API+'accountRecord/addUserAccountRecord',params),
		getUserAccountRecordList:(params = {}) => vm.$u.post(IM_BASE_API+'accountRecord/getUserAccountRecordList',params),
		updateUserAccountRecord:(params = {}) => vm.$u.post(IM_BASE_API+'accountRecord/updateUserAccountRecord',params),
		deleteUserAccountRecord:(params = {}) => vm.$u.post(IM_BASE_API+'accountRecord/deleteUserAccountRecord',params),
	}
	const chatGroup={
		//获取我的群聊列表
		getMyChatGroupList: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/getMyChatGroupList', params),
		//搜索群组
		searchChatGroup:(params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/searchChatGroup', params),
		//转发的群聊列表
		getMyChatGroupListForForward:(params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/getMyChatGroupListForForward', params),
		//获取群聊信息
		getChatGroupInfo: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/getChatGroupInfo', params),
		//发起单聊
		createSingleChat: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/createSingleChat', params),
		//发起群聊
		launchChatGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/launchChatGroup', params),
		//添加群成员
		addMemberForGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/addMemberForGroup', params),
		//发红包时校验
		validateTradePwd: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/validateTradePwd', params),
		//充值时校验
		validatePayTradePwd: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/validatePayTradePwd', params),
		//修改支付密码
		updateTradePwd:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/updateTradePwd', params),
		//发送文件
		sendGroupFile:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/sendGroupFile', params),
		//转发信息
		forwardMsg:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/forwardMsg', params),
		//转发信息到新的人员
		forwardMsgToFriends:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/forwardMsgToFriends', params),
		//转发个人名片到群组
		forwardFriendToGroup:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/forwardFriendToGroup', params),
		//发红包(单聊)
		sendRedBag: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/sendRedBag', params),
		//发红包(群聊)
		sendRedBagForGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/sendRedBagForGroup', params),
		//领红包
		receviceRedBag:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/receviceRedBag', params),
		//抢群聊的红包
		receviceRedBagForGroup:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/receviceRedBagForGroup', params),
		//获取红包领取记录
		getRedBagReceiveList:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/getRedBagReceiveList', params),
		//删除群成员
		deleteMemberForGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/deleteMemberForGroup', params),
		//添加或删除群管理员
		changeGroupMemberType: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/changeGroupMemberType', params),
		//修改群状态
		updateGroupStatus: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/updateGroupStatus', params),
		//修改群名称
		updateGroupName: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/updateGroupName', params),
		//修改群公告
		updateGroupNotice: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/updateGroupNotice', params),
		//修改群人数限制
		updateGroupMaxCount: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/updateGroupMaxCount',params),
		//移除群聊
		hiddenGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/hiddenGroup', params),
		//激活移除的群聊
		activeHiddenFlag: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/activeHiddenFlag', params),
		//获取是否屏蔽群消息的标志
		getChatPingBiFlag:(params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/getChatPingBiFlag', params),
		//更新未读信息数量
		clearUnReadNum: (params = {}) => vm.$u.post(IM_BASE_API+'imChatGroup/clearUnReadMsg', params),
		//获取群聊历史消息记录
		getChatGroupHistoryMessage: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupMessageRef/getChatGroupHistoryMessage', params),
		//撤回消息
		revertMessageById: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupMessageRef/revertMessageById', params),
		//获取群成员
		getChatGroupMembers: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/getChatGroupMembers', params),
		//获取群管理员
		getGroupAdminMembers: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/getGroupAdminMembers', params),
		
		//更新我的群聊信息(屏蔽,置顶.群名称)
		updateMyChatGroupInfo: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/updateChatGroupInfo', params),
		//清空聊天记录
		clearChatContent: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/clearChatContent', params),
		//退出群聊
		quitChatGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/quitChatGroup', params),
		//解散群聊
		delChatGroup: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/delChatGroup', params),
		//获取音视频通话的用户信息
		getChatGroupTrcMembers: (params = {}) => vm.$u.post(IM_BASE_API+'imGroupUserRef/getChatGroupTrcMembers', params),
		//保存分享的记录
		saveShareMsg: (params = {}) => vm.$u.post(IM_BASE_API+'msgShare/addMsgShare', params),
		//查看详情
		getShareMsgByID:(params = {}) => vm.$u.get(IM_BASE_API+'msgShare/getShareMsgDetail?shareID='+params.msgId, params),
	
	}
	const friendCircle={
		releaseFriendCircle: (params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircle/releaseNewCircle', params),
		getCircleDataList: (params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircle/getCircleDataList', params),
		deleteCircle: (params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircle/deleteCircle', params),
		clickThumb: (params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircle/clickThumb', params),
		handleComment:(params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircleComment/handleComment', params),
		checkFriendCircleUpdate:(params = {}) => vm.$u.post(IM_BASE_API+'imFriendCircle/checkFriendCircleUpdate', params),
	}
	
	const multipartAddress={
		'getFileByPath':multipartUrl+'getFileFromParam?filePath=',//根据路径查看下载附件
		'getFileByEncodeParam':multipartUrl+"/getFileFromEncodeParam?encodePath=",
		'updload':multipartUrl+'upload',		//返回路径
		'uploadFile':multipartUrl+'uploadFile', //返回详细信息
		'uploadAliYun':multipartUrl+'upload/aliYun',
		'updloads':multipartUrl+'uploads',
	}
	const toolApi={
		'getRandomImage':(params = {}) => vm.$u.get('https://api.wer.plus/api/mowal',params),
		'chatGpt':(params = {}) => vm.$u.get('https://v1.apigpt.cn/',params),
	}
	vm.$u.api = {sys,multipartAddress,imUser,chatGroup,friendCircle,toolApi};
}



export default {
	install
}