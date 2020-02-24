<template>
  <div class="login">
	  <div class="el-icon-arrow-left top-center animated bounceOutLeft infinite"></div>
	  <div class="el-icon-arrow-left top-right animated bounceOutLeft infinite"></div>
	  <div class="el-icon-arrow-left top-left animated bounceOutLeft infinite"></div>
	  <div class="el-icon-arrow-left top-center-right animated bounceOutLeft infinite"></div>
	  <div class="el-icon-arrow-left top-center-left animated bounceOutLeft infinite"></div>
	  <div class="el-icon-arrow-right bottom-center animated bounceOutRight infinite"></div>
	  <div class="el-icon-arrow-right bottom-right animated bounceOutRight infinite"></div>
	  <div class="el-icon-arrow-right bottom-left animated bounceOutRight infinite"></div>
	  <div class="el-icon-arrow-right bottom-center-right animated bounceOutRight infinite"></div>
	  <div class="el-icon-arrow-right bottom-center-left animated bounceOutRight infinite"></div>
		<form action="" class="animated bounceInDown login-form">
			<h2 class="animated bounceInLeft">登录</h2>
			<input type="text" name="username" placeholder="用户名" v-model="username" class="animated bounceInLeft">
			<input type="text" name="password" placeholder="密码" v-model="password" class="animated bounceInRight">
			<select class="select animated bounceInLeft" @change="changeProduct($event)">
			  <option value ="0">请选择</option>
			  <option v-for="(item,index) in productList" :key="index" :value="item.id">{{item.title}}</option>
			</select>
			<input type="button" value="登录" class="button animated bounceInUp" @click="login">
		</form>
  </div>
</template>

<script>
import ajax from '../../config/ajax.js';
export default {
   data(){
	   return {
		   productList:[{id:1,title:"总管理员"},
		   {id:2,title:"前台"},
		   {id:3,title:"厨师"},
		   {id:4,title:"人事管理员"},
		   {id:5,title:"库存管理员"}],
		   productActive:0,
		   username:'',
		   password:''
	   }
   },
   methods:{
	   changeProduct(event){
		   this.productActive=event.target.value;
		   console.log(this.productActive);
	   },
	   async login(){
		   let user={username:this.username,password:this.password,position:this.productActive};
		   let res=await ajax('http://localhost:3000/api/login',user,'POST');
		   if(res.code===1){
			   this.$message({
				   message:'登录成功',
				   type:'success'
			   })
			   window.localStorage.setItem("username",this.username);
			   window.localStorage.setItem('position',res.position);
			   window.localStorage.setItem("login",200);
			   this.$router.push('/main');
		   }else{
			   this.$message({
				   message:`${res.message}`,
				   type:'error'
			   })
		   }
		   
	   }
	   
   }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.login
	width 100%
	height 100%
	background url("./image/下载.jpg") no-repeat fixed
	background-size cover
	display flex
	align-items center
	justify-content center
	font-family "agency fb"
	position relative
	.el-icon-arrow-left
		width 100px
		height 100px
		color rgba(255,255,255,0.6)
		text-align center
		line-height 6.25rem
		font-size 60px
		font-weight 900
		animation-duration 2s
	.el-icon-arrow-right
		width 100px
		height 100px
		color rgba(255,255,255,0.6)
		text-align center
		line-height 6.25rem
		font-size 60px
		font-weight 900
		animation-duration 2s
	.top-center
		position absolute
		right 50%
		top 0
	.top-right
		position absolute
		right 0
		top 0
	.top-left
		position absolute
		left 0
		top 0
	.top-center-left
		position absolute
		left 25%
		top 0
	.top-center-right
		position absolute
		right 25%
		top 0
	.bottom-center
		position absolute
		right 50%
		bottom 0
	.bottom-right
		position absolute
		right 0
		bottom 0
	.bottom-left
		position absolute
		left 0
		bottom 0
	.bottom-center-left
		position absolute
		left 25%
		bottom 0
	.bottom-center-right
		position absolute
		right 25%
		bottom 0
	.login-form
		width 240px
		height 220px
		border-radius 18px
		display flex
		flex-direction column
		text-align center
		padding 40px
		z-index 100
		background inherit
		overflow hidden
		position relative
		h2
			font-size 18px
			font-weight 600
			animation-duration 2s
		.select
			margin 6px 0
			height 36px
			border none
			background-color rgba(255,255,255,0.3)
			border-radius 4px
			padding 0 14px
			color #2C3E50
			font-weight 400
			font-size 15px
			animation-duration 2s
		input
			margin 6px 0
			height 36px
			border none
			background-color rgba(255,255,255,0.3)
			border-radius 4px
			padding 0 14px
			color #2C3E50
			font-weight 400
			font-size 15px
			animation-duration 2s
		input::placeholder
			color #2C3E50
		.button
			margin-top 24px
			background-color rgba(139,0,139,0.3)
			color white
			transition all 0.3s
			animation-duration 2s
		.button:hover
			background-color rgba(139,0,139,0.7)
	.login-form::after
		content ''
		width calc(100%+20px)
		height calc(100%+20px)
		background inherit
		box-shadow inset 0 0 200px rgba(255,255,255,0.25)
		position absolute
		top -10px
		left -10px
		z-index -1
		filter blur(6px)
</style>
