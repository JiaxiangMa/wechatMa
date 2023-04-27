<template>
	<view class="u-p-30">
		<u-navbar title-bold  title-color="#000000" :title="navbarTitle"></u-navbar>
		<view>
			<u-parse :html="content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				navbarTitle:"",
				content:"",
			};
		},
		onLoad:function(option){
			console.log("option",option);
			let index= option.index;
			if(index==0){
				this.navbarTitle="用户使用协议";
				this.content=`<h3>用户以各种方式使用本站服务和数据（包括但不限于发表、上传、转载、浏览及利用本站或本站用户发布内容）的过程中，
				不得以任何方式利用本站直接或间接从事违反中国法律、以及社会公德的行为，且用户应当恪守下述承诺：</h3>
				<br/><br/>
				<h3>1. 发布、转载或提供的内容符合中国法律、社会公德；</h3>
				<br/><br/>
				<h3>2. 不得干扰、损害和侵犯本站的各种合法权利与利益；</h3>
				<br/><br/>
				<h3>3. 遵守本站以及与之相关的网络服务的协议、指导原则、管理细则等；</h3>
				<br/><br/>
				<h3>本APP有权对违反上述承诺的内容予以删除。若您因此触犯法律，我们对此不承担任何法律责任</h3>`
			}
			if(index==1){
				this.navbarTitle="隐私政策";
				this.content=`<h3>1.本平台不采集用户隐私敏感信息!</h3>
							  <h3>2.本平台会使用用户QQ号或者手机号作为注册账号使用，用户自愿提供使用，不暴力采集用户相关隐私信息</h3>`
			}
		}
	}
</script>

<style lang="scss">

</style>
