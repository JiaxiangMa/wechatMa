import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let lifeData = {};

try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
} catch (e) {

}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_version','vuex_userInfo','vuex_userAccountInfo','vuex_app_config',
					 'vuex_token','vuex_deviceMode','vuex_loginParam','vuex_groupList','vuex_messageList',
					 'circleData','circleBgImg','vuex_billRecordObj','vuex_bill_currentMonthIndex'];

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
}



const store = new Vuex.Store({
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		vuex_userInfo: lifeData.vuex_userInfo ? lifeData.vuex_userInfo : {
			headImg: require('@/static/image/guanxi.jpg'), //头像
			id: 1, //id
			userName: '冠希', //昵称
			wechatNumber: 'ludan', //微信号
			signature: 'who do you want to meet.', //个性签名
			phone: '13535351112', //手机号
			pictureBanner: require('@/static/image/circle/3.jpg'), //相册背景图
			chatBgImg: require('@/static/image/circle/1.jpg'), //聊天背景图
			address: "河南郑州"
		},
		vuex_userAccountInfo:lifeData.vuex_userAccountInfo ? lifeData.vuex_userAccountInfo :null,
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',
		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		vuex_version:lifeData.vuex_version?lifeData.vuex_version:'体验版-1.0',
		//设备编号
		vuex_deviceMode:lifeData.vuex_deviceMode?lifeData.vuex_deviceMode:'',
		//登录信息
		vuex_loginParam:lifeData.vuex_loginParam?lifeData.vuex_loginParam:{
			mobile:'',
			password:'',
			userDeviceId:''
		},
		vuex_groupList:lifeData.vuex_groupList?lifeData.vuex_groupList:[],
		vuex_messageList:lifeData.vuex_messageList?lifeData.vuex_messageList:[],
		//朋友圈背景图片
		circleBgImg:lifeData.circleBgImg?lifeData.circleBgImg:require('@/static/image/circle/2.jpg'),
		//朋友圈展示信息
		circleData:lifeData.circleData?lifeData.circleData:[],
		//我的朋友
		firendList:[],
		//内置朋友圈相册banner图
		circleBgList:[
			{ src:require('@/static/image/circle/1.jpg'),isCheck:false },
			{ src:require('@/static/image/circle/2.jpg'),isCheck:false },
			{ src:require('@/static/image/circle/3.jpg'),isCheck:false },
			{ src:require('@/static/image/circle/4.jpg'),isCheck:false },
			{ src:require('@/static/image/circle/5.jpg'),isCheck:false },
			{ src:require('@/static/image/circle/6.jpg'),isCheck:false },
		],
		//app的配置信息
		vuex_app_config:{
			shareURL:'http://im.qgi.me/index.html#/pages/tabbar/home',//分享的域名
			defaultGroupId:null,//默认官方群
			appAdministrator:'18174403058',//APP管理员
			logoIcon:'/static/image/login/chatlogo.png',//登录图标
			appName:"仿微信"
		},
		vuex_billRecordObj:lifeData.vuex_billRecordObj?lifeData.vuex_billRecordObj:[
		/* 	{
				currentMonthObj:{
					currentMonth:1,
					outAmount:764.52,
					inputAmount:700,
				},
				recordList:[]
			},
			{
				currentMonthObj:{
					currentMonth:2,
					outAmount:0.00,
					inputAmount:0.00,
				},
				recordList:[]
			},
			{
				currentMonthObj:{
					currentMonth:3,
					outAmount:0.00,
					inputAmount:0.00,
				},
				recordList:[]
			},
			{
				currentMonthObj:{
					currentMonth:4,
					outAmount:0.00,
					inputAmount:0.00,
				},
				recordList:[]
			} */
		],
		vuex_bill_currentMonthIndex:lifeData.vuex_bill_currentMonthIndex?vuex_bill_currentMonthIndex:0,
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if (nameArr.length >= 2) {
				let obj = state[nameArr[0]];
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		},
	},

})

export default store
