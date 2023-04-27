<template>
	<view style="position: relative;">
		 <video :show-center-play-btn="true" :id="'video_'+previewVideoIndex"
				:style="'height:'+(600)+'rpx;width:'+(winWidth/10*6)+'px'"
				:controls="false" :show-fullscreen-btn="false"
				:src="previewVideoSrc">
		</video>
	</view>
</template>

<script>
	export default {
		name:"innerPlayer",
		props:{
			previewVideoIndex:{
				type:Number,
				default:0,
				required:true
			},
			previewVideoSrc:{
				type:String,
				default:"",
				required:true
			}
		},
		data() {
			return {
				videoContext : null,	
				src:"https://www.bilibili.com/video/BV1d64y1b7Uq?t=0.0",
				autoplay:false,
				customMaskStyle:{
					display:"flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					//paddingTop:'100rpx',
					border:'1px solid red',
					width:"100%",
					height:"100%",
				},
				winHeight:0,
				winWidth:0
			};
		},
		created:function(){
			this.winHeight=this.$u.sys().windowHeight;
			this.winWidth=this.$u.sys().windowWidth;
		},
		mounted:function(){
			let that=this;
			console.log("that.previewVideoIndex",that.previewVideoIndex);
			that.videoContext = uni.createVideoContext("video_"+that.previewVideoIndex);
			setTimeout(function(){
				that.videoContext.play();
			})
		},
		methods:{
			quitPlay:function(){
				//this.$emit("quitPlay");
			}
		}
	}
</script>

<style lang="scss">
	.playBox{
		display: flex;
		flex-direction: column;
		justify-content: center;
		 align-items: center;
		 position: relative;
		 z-index: 1;
	}
	.quitBox{
		width: 100%;
	}
</style>
