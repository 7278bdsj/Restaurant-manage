<template>
	<el-container>
	  <el-aside width="200px">
		  <div class="aside-title">Restaurant</div>
		  <!-- <div @click="changePower">测试</div> -->
		  <el-row class="tac">
		   <el-col>
		      <el-menu
		        default-active="2"
		        class="el-menu-vertical-demo"
		        @open="handleOpen"
		        @close="handleClose"
		        background-color="#001529"
		        text-color="#A6ADB4"
		        active-text-color="#ffd04b">
		        <el-submenu index="1" ref="index1" v-if="index1">
		          <template slot="title" >
		            <i class="el-icon-s-order"></i>
		            <span>前台管理</span>
		          </template>
		            <el-menu-item index="1-1" @click='routerLink("order")'>订餐管理</el-menu-item>
		            <el-menu-item index="1-2" @click='routerLink("table")'>餐桌管理</el-menu-item>
		        </el-submenu>
		       <el-submenu index="2" ref="index2" v-if="index2">
		         <template slot="title">
		           <i class="el-icon-food"></i>
		           <span>菜单管理</span>
		         </template>
		           <el-menu-item index="2-1" @click='routerLink("dishes")'>菜品管理</el-menu-item>
		           <el-menu-item index="2-2" @click='routerLink("recommend")'>菜品推荐管理</el-menu-item>
				   <el-menu-item index="2-3" @click='routerLink("menu")'>菜单</el-menu-item>
		       </el-submenu>
		        <el-menu-item index="3" @click='routerLink("person")' ref="index3" v-if="index3">
		          <i class="el-icon-s-custom"></i>
		          <span slot="title">人事管理</span>
		        </el-menu-item>
		        <el-submenu index="4" ref="index4" v-if="index4">
		          <template slot="title">
		            <i class="el-icon-goods"></i>
		            <span>物资管理</span>
		          </template>
		            <el-menu-item index="4-1" @click='routerLink("resources")'>库存管理</el-menu-item>
		            <el-menu-item index="4-2" @click='routerLink("message")'>入/出库信息管理</el-menu-item>
		        </el-submenu>
				<el-submenu index="5" ref="index5" v-if="index5">
				  <template slot="title">
				    <i class="el-icon-coin"></i>
				    <span>入账管理</span>
				  </template>
				    <el-menu-item index="5-1" @click='routerLink("bar")'>信息相关图</el-menu-item>
				</el-submenu>
		      </el-menu>
		    </el-col>
			</el-row>
	  </el-aside>
	  <el-container>
	    <el-header>餐厅管理系统
			<div class="triangle"></div>
			<span class="user">用户：{{this.username}}</span>
		</el-header>
	    <el-main>
			<div class="triangle"></div>
			<div class="main">
				<router-view></router-view>
			</div>
		</el-main>
	    <el-footer class="el-icon-star-on">感谢使用本餐厅管理系统</el-footer>
	  </el-container>
	</el-container>
</template>

<script>
	export default {
		data(){
			return{
					username:window.localStorage.getItem("username"),
					index1:false,
					index2:false,
					index3:false,
					index4:false,
					index5:false,
			}
		},
		computed:{
			
		},
		mounted:function(){
			this.changePower();
		},
	    methods: {
		  //修改权限
		  changePower(){
			  let position=(window.localStorage.getItem('position'));
			  console.log(position);
			   if(position=='admin'){
				   this.index1=true;
				   this.index2=true;
				   this.index3=true;
				   this.index4=true;
				   this.index5=true;
			   }else if(position=='cook'){
				   this.index2=true;
			   }else if(position=='recept'){
				   this.index1=true;
			   }else if(position=='person'){
				   this.index3=true;
			   }else{
				   this.index4=true;
			   }
			  },
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  routerLink(path){
			  this.$router.push(`/main/${path}`);
			  this.changePower();
		  }
	    }
	  }
</script>

<style scoped>
  .el-header {
    background-color: white;
    color: Navy;
    text-align: center;
    line-height: 80px;
	font-weight: 800;
	font-size: 30px;
	position: relative;
  }
  .el-header .user{
	  float: right;
	  font-size: 15px;
	  font-weight: 400;
  }
  .el-header .triangle{
	  position: absolute;
	  content: "";
	  width: 0;
	  height: 0;
	  margin: 0;
	  padding: 0;
	  border-top: 25px solid white;
	  border-left: 25px solid transparent;
	  border-right: 25px solid transparent;
	  border-bottom: 25px solid transparent;
	  left: 100px;
	  top: 75px
  }
  .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
	  font-size: 16px;
    }
  
  .el-aside {
    background-color: #001529;
    color: #A6ADB4;
    text-align: center;
    line-height: 200px;
  }
  .el-aside .aside-title{
	  line-height: 100px;
	  font-size:25px;
	  display: block;
	  color: antiquewhite;
	  width: 100%;
	  height: 100px;
  }
  .el-row{
	  width: 202px;
  } 
  .el-row h2{
	  line-height: 10px;
	  margin: 0;
  }
  
  .el-main {
    background-color: rgba(220,220,220,0.8);
    color: #333;
    text-align: center;
    height: 800px;
	margin: 20px;
  }
  .el-main .main{
	  width: 100%;
	  height: 100%;
	  background-color: white;
  }
  
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
