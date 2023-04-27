<template>
	<view>
		<u-navbar :is-back="false" title="首页"></u-navbar>
		<view  class="container">
			<u-image width="100%" mode="widthFix"  src="/static/image/heart.png"></u-image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#001f3f',
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
  .container{
	  height:100%;	
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	  justify-items: center;
	  align-items: center;
  }
</style>
