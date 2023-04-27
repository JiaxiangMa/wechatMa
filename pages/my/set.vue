<template>
	<view>
		<u-cell-group>
			<u-cell-item title="账号与安全"  :title-style="titleStyle"></u-cell-item>
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			<u-cell-item title="页面模式"    :title-style="titleStyle"></u-cell-item>
			<u-cell-item title="多语言"  :title-style="titleStyle"></u-cell-item>
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			<u-cell-item title="聊天背景"  :title-style="titleStyle"></u-cell-item>
			<u-cell-item title="发现页管理"  :title-style="titleStyle"></u-cell-item>
			<u-gap height="20" bg-color="#eee" margin-top="1" margin-bottom="1"></u-gap>
			<u-cell-item title="缓存清理"  :title-style="titleStyle" @click="clearVuex"></u-cell-item>
			<u-cell-item title="关于我们"  :title-style="titleStyle"></u-cell-item>
			<u-cell-item title="版本"  :title-style="titleStyle" :value="vuex_version"></u-cell-item>
		</u-cell-group>



		<view class="btn-logout">
		  <u-button @click="loginOut" type="error"  :plain="true" ripple shape="circle" ripple-bg-color="#fab6b6">退出登录</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle:{
					fontSize:"32rpx",
					color:'#333'
				}
			};
		},
		methods:{
			clearVuex:function(){
				let that=this;
				that.globalUtil.clearStorageVuex(that);
			},
			loginOut:function (){
			  let that=this;
			  this.globalUtil.utilLoading("正在退出登录...",true);
			  //调用service请求后台的接口
			  this.$u.api.sys.loginOut({}).then(res => {
			    uni.hideLoading();
				if(res.code==200){
					this.globalUtil.clearVuex(that);
					setTimeout(function(){
						that.$u.route({
							type:'reLaunch',
							url:"/pages/index/login",
							params: {}
						})
					},500);
					return;
				}
				else {
					//密码错误提示
					this.globalUtil.utilAlert(res.message, "none");
					return;
			    }
			  }).catch(res => {
					console.log("res",res);
					this.globalUtil.utilAlert("后台请求失败,请联系管理员!");
			  })
			},
		}
	}
</script>

<style lang="scss" scoped>
	.btn-logout{
	     height: 80rpx;
	     width: 80%;
	     margin: 0rpx 10%;
	     margin-top: 120rpx;
	}
</style>
