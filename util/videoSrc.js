const { randomNum } = require("./util");

let data=[
	{
		"id": randomNum(1,1000),
		"ming": "有视频资源的可以自定义哦~",
		"shipin": "http://tucdn.wpon.cn/api-girl/index.php?wpon=302",
	}
]

uni.getSystemInfo({  
	success: function(e) {
		Vue.prototype.$xitong =e;				
		Vue.prototype.windowWidth =e.windowWidth;
		Vue.prototype.windowHeight =e.windowHeight;
		Vue.prototype.StatusBar = e.statusBarHeight;								
		if (e.platform == 'android') {						
			Vue.prototype.CustomBar = e.statusBarHeight + 50;
		} else {					
			Vue.prototype.CustomBar = e.statusBarHeight + 45;
		};		

		//#ifdef APP-PLUS					
		if (e.platform == 'android') {					
			Vue.prototype.CustomBar = e.statusBarHeight + 40;
		} else {
			Vue.prototype.CustomBar = e.statusBarHeight + 45;
		};	
		// #endif			
		// #ifdef MP-ALIPAY					
		Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight; 
		// #endif
	}
})

module.exports = {
  lie: data
}
