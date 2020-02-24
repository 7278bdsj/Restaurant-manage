<template>
	<div class="menu">
		<div class="menu-main animated bounceInLeft">
			<div class="title">菜单</div>
			 <el-table class="animated jello"
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="name"
			        label="菜名"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="type"
			        label="类型"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="price"
			        label="价格/(人民币)">
			      </el-table-column>
			    </el-table>
		</div>
		<div class="menu-recommend animated bounceInRight">
			<div class="title">推荐菜单</div>
			<el-table class="animated jello"
			     :data="recommendData"
			     style="width: 100%">
			     <el-table-column
			       prop="name"
			       label="菜名"
			       width="180">
			     </el-table-column>
			     <el-table-column
			       prop="type"
			       label="类型"
			       width="180">
			     </el-table-column>
			     <el-table-column
			       prop="price"
			       label="价格/(人民币)">
			     </el-table-column>
			   </el-table>
		</div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default{
		 data() {
		        return {
		          tableData: [],
				  recommendData:[]
		        }
		      },
			  mounted:function(){
			  	this.getFoodMenu();
				this.getRecommendMenu();
			  }
			  ,
					methods:{
						//获取菜单
						async getFoodMenu(){
							let res=await ajax('http://localhost:3000/api/selectfoodmenu');
							if(res.code===1){
								this.$message({
									message:"菜单获取成功",
									type:'success'
								});
								this.tableData=res.date;
							}else{
								this.$message({
									message:"菜单获取失败",
									type:'error'
								});
							}
								
						},
						//获取推荐菜单
						async getRecommendMenu(){
							let res=await ajax('http://localhost:3000/api/selectrecommendmenu');
							if(res.code===1){
								this.$message({
									message:"菜单获取成功",
									type:'success'
								});
								this.recommendData=res.date;
							}else{
								this.$message({
									message:"菜单获取失败",
									type:'error'
								});
							}
						}
					}
	}
</script>

<style scoped>
	.menu{
		width: 100%;
		height: 100%;
	}
	.menu-main{
		width: 48%;
		height: 720px;
		background-color: #E3E3E3;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 20px;
		overflow: auto;
	}
	.menu-recommend{
		width: 48%;
		height: 720px;
		background-color: #E3E3E3;
		float: right;
		margin-top: 20px;
		margin-bottom: 20px;
		margin-right: 20px;
		overflow: auto;
	}
	.menu .title{
		width: 100%;
		height: 100px;
		background-color: #001529;
		color: white;
		line-height: 100px;
		text-align: center;
		font-family: "agency fb";
		font-size: 26px;
		font-weight: 800;
	}
	.menu .menu-main .el-table{
		margin: 10px;
	}
	.menu .menu-recommend .el-table{
		margin: 10px;
	}
	.jello{
		animation-duration: 2s;
	}
</style>
