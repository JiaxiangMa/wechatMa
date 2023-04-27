<script>
	export default {
		onLaunch: function() {
				this.getAppConfig();
				// #ifdef APP
				let platfrom= this.$u.os();
				this.listenTRC();
				/* 	let clientId="";
				if("android"===platfrom){
					clientId= plus.device.uuid;
				}
				else{
					clientId=plus.device.uuid;
				} */
				this.$u.vuex('vuex_deviceMode',"mobile_"+new Date().getTime());
			// #endif
		},
		onShow: function() {

		},
		onHide: function() {
			console.log('App Hide')
		},
		onUnload:function(){
			this.trcApi.TRCLogout();
		},
		methods:{
			getAppConfig:function(){
				let configData={};
				this.$u.api.sys.getAppConfig({}).then(res => {
					//console.log("获取APP配置信息结果",res);
					if(res.code==200){
						let configArr= res.data;
						if(configArr&&configArr.length>0){
							for (let i = 0; i < configArr.length; i++) {
								let config= configArr[i];
								let key= config.configKey;
								let value= config.configValue
								configData[key]=value;
							}
						}
						this.$u.vuex("vuex_app_config",configData);
						console.log("app配置信息",this.vuex_app_config);
					}
				})
			},
			listenTRC:function(){
				let that=this;
				that.trcApi.listenCallStatus({
					onError:function(res){
						console.log(res);
					},
					onCallReceived:function(res){
						console.log(res);
					},
					onCallCancelled:function(res){
						console.log(res);
					},
					onCallBegin:function(res){
						console.log(res);
					},
					onCallEnd:function(res){
						console.log(res);
					},
				});
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	.test-border{
		border: 1px solid red;
	}
</style>

