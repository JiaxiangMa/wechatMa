# bangbang-chat-uniapp

#### 介绍
一款仿微信界面的即时通讯APP,
采用uniapp开发(uview1.x版本),后端采用java.(springboot+websocket)
####功能支持
1:添加好友,单聊,群聊群组的发起

2:支持文字,表情,语音,图片,文件信息的收发,离线消息推送仅限安卓(ios没证书,安卓需要自行申请unipush)

3:支持发送红包功能

4:支持朋友圈交互功能(点赞,评论)

5:群聊功能支持(置顶,免打扰.撤回,转发,群公告,群名称)

7:支持发送位置定位

8:支持发送个人名片

9:支持音视频通话(点对点类型)

10:看一看短视频

11:更多功能请自行下载体验，此插件持续更新优化中,敬请期待

#### 项目说明(源码建议去gitee地址下载!!!)
1.  源码下来,必须先有安装node,然后根目录下执行: npm  install 添加依赖
2.  苹果机可以gitee上下载源码, hbuilderx连接上手机, 本地运行体验(新版本的HbuiderX已经不支持ios直接运行,必须打自定义基座)
3.  manifest.json是整个项目的配置文件,重要信息在APPID上,一个项目必须是一个APPID,
4.  源码拉下来,请修改APPID,包名,打自定义基座包和正式包都需要对应包名的打包文件(安卓为xxx.keystore;苹果需要两个:xxx.mobileprovision和xxx.p12)
5.  manifest.json里可以修改应用名称,图标,使用权限等等,
6.  前端使用了腾讯音视频插件,自己打包运行前,请务必去插件市场重新导入一下到你的项目里!
7.  音视频插件必须是自定义基座才能运行,见插件说明!!! [音视频插件](https://ext.dcloud.net.cn/plugin?id=9035)
8.  项目的自定义配置文件在/common/environment.js,接口API在/common/http.api.js
9.  项目二次开发时需要将高德地图,unipush等(manifest.json改)相关参数都需要自行改成自己的.
	

#### 安装测试使用说明
1.  请关注微信公众号——“程序员敬老院”,发送"仿微信",获取安装测试版本（暂只提供安卓）
2.  测试号可自行随意注册，无需校验，支付(充值)密码默认都是:888888
3.  有需要进一步了解的，可加本人微信:18174403058，qq:513489325,  QQ群（101223250）
4.  前端源码（上面的gitee地址获取），
5.  后端源码暂未免费公开，有需要的可以联系我，一包华子换源码也是可以滴~

#### 敬告
1.  感谢各位的关注,安装使用此应用，获取源码后仅供学习交流，并请务必遵从相关法律法规,不可用于违反国家相关法律法规的非法商业用途,
2.	违法违规使用本应用以及源码二次开发的，如有引起相关责任追究,本人本平台不承担任何法律责任!
3.  如果本应用涉及到相关应用产品侵权，存在违规之处，请联系本人，及时纠正

#### 微信公众号：
![微信公众号](https://bangbang-chat.oss-cn-hangzhou.aliyuncs.com/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E6%A0%87%E5%87%86%E8%89%B2%E7%89%88.png)
### 视频预览效果
[视频预览](https://mp.weixin.qq.com/s/06bry7QlSYQzhINQJZiyhg)

#### 特别感谢(以下插件，再您拉取代码后请重新导入到您的项目中)
1.	腾讯云音视频插件! [音视频插件](https://ext.dcloud.net.cn/plugin?id=9035)
2.	获取安卓视频第一帧图片 [安卓视频处理](https://ext.dcloud.net.cn/plugin?id=3309)
3.	获取苹果视频第一帧图片 [ios视频处理](https://ext.dcloud.net.cn/plugin?id=2834)
4.	安卓文件选择器 [安卓本地文件选择](https://ext.dcloud.net.cn/plugin?id=4607)
5.	支付宝原生扫码插件 [支付宝扫码插件](https://ext.dcloud.net.cn/plugin?id=2636)

