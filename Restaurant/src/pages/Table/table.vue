<!-- 餐桌管理模块 -->

<template>
	<div class="table-main">
		<div class="table-operate">
			<div class="add-table animated rollIn">
				<el-popover
				  placement="top"
				  width="180"
				  v-model="visible">
				  <input type="text" name="num" class="addinput" placeholder="请输入号码" v-model="num"><br><br />
				  <div style="text-align: center; margin: 0">
					<el-button type="text" size="mini" @click="addTable">确定</el-button>
				  </div>
				  <el-button slot="reference" class="addtable">添加餐桌</el-button>
				</el-popover>
			</div>
			<div class="delete-table animated rollIn"><el-popover
				  placement="top"
				  width="180"
				  v-model="visible">
				  <input type="text" name="num" placeholder="请输入号码" class="" v-model="deletenum"><br><br />
				  <div style="text-align: center; margin: 0">
					<el-button type="text" size="mini" @click="deleteTable">确定</el-button>
				  </div>
				  <el-button slot="reference" class="deletetable">删除餐桌</el-button>
				</el-popover></div>
		</div>
		<ul class="table-menu">
			<div class="el-icon-warning-outline" title="白色:空闲状态
			深色:使用状态
			红色:禁用状态"></div>
			<li :class="item.state" @click="changState($event)" :data-state="item.state" v-for="(item, i) in tableList">{{item.tablenum}}</li>
		</ul>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default{
		data(){
			return {
				tableList:[],
				num:'',
				deletenum:''
			}
		}
		,
		mounted:function(){
			this.getTables();
		}
		,
		methods:{
			//添加餐桌
			async addTable(){
				let num=this.num;
				let state="free";
				let values={num:num,state:state};
				let res=await ajax('http://localhost:3000/api/addtable',values)
				if(res.code===1){
					this.$message({
						message:"餐桌添加成功",
						type:'success'
					});
					this.getTables();
				}else{
					this.$message({
						message:"餐桌添加失败",
						type:'error'
					})
				}
			},
			//删除餐桌
			async deleteTable(){
				let num=this.deletenum;
				let values={num:num};
				let res=await ajax('http://localhost:3000/api/deletetable',values)
				if(res.code===1){
					this.$message({
						message:"餐桌删除成功",
						type:'success'
					});
					this.getTables();
				}else{
					this.$message({
						message:"餐桌删除失败",
						type:'error'
					})
				}
			},
			//获取餐桌信息
			async getTables(){
				let res=await ajax('http://localhost:3000/api/selecttable');
				 if(res.code===1){
					 this.tableList=res.date;
				 }else{
					 this.$message({
						 message:'餐桌信息获取失败',
						 type:'error'
					 })
				 }
			},
			//提交餐桌状态
			async updateTable(values){
				let res=await ajax('http://localhost:3000/api/updatetable',values);
				let state=values.state;
				if(res.code===1){
					this.$message({
						message:`${state}状态修改成功`,
						tye:'success'
					})
				}else{
					this.$message({
						message:`${state}状态修改失败`,
						type:'error'
					})
				}
			}
			,
			changState(e){
				let state=e.target.dataset.state;
				if(state=="free"){
					e.target.className="using";
					e.target.dataset.state="using";
					this.updateTable({num:(e.target.value).toString(),state:"using"});
				}else if(state=="using"){
					e.target.className="forbidden"
					e.target.dataset.state="forbidden";
					this.updateTable({num:(e.target.value).toString(),state:"forbidden"});
				}else{
					e.target.className="free";
					e.target.dataset.state="free";
					this.updateTable({num:(e.target.value).toString(),state:"free"});
				}
			}
		}
	}
</script>

<style scoped>
	.table-main{
		width: 100%;
		height: 100%;
	}
	.table-operate{
		width: 100%;
		height: 100px;
		padding-bottom:20px ;
	}
	.add-table{
		width: 45%;
		height: 100%;
		background-color: #001529;
		color: white;
		font-size: 30px;
		outline: none;
		float: left;
		margin-left: 20px;
		border-radius: 10px;
		margin-top: 10px;
		transition: all 0.5s;
		font-family: "agency fb";
		line-height: 100px;
		cursor: pointer;
	}
	.add-table .el-popover .addinput:placeholder{
		color: #B3C0D1
		}
	.add-table .addtable{
		width: 100%;
		height: 100%;
		background-color: #001529;
		color: white;
		font-size: 30px;
		outline: none;
		border-radius: 10px;
		transition: all 0.5s;
		font-family: "agency fb";
		line-height: 70px;
		cursor: pointer;
	}
	.add-table .addtable:hover{
		color: #001529;
		background-color: orange;
		}
	.delete-table{
		width: 45%;
		height: 100%;
		background-color: #001529;
		color: white;
		font-size: 30px;
		outline: none;
		float: right;
		margin-right: 20px;
		border-radius: 10px;
		margin-top: 10px;
		transition: all 0.5;
		transition: all 0.5s;
		font-family: "agency fb";
		line-height: 100px;
		cursor: pointer;
	}
	.delete-table .deletetable{
		width: 100%;
		height: 100%;
		background-color: #001529;
		color: white;
		font-size: 30px;
		outline: none;
		border-radius: 10px;
		transition: all 0.5s;
		font-family: "agency fb";
		line-height: 70px;
		cursor: pointer;
	}
	.delete-table .deletetable:hover{
		color: #001529;
		background-color: orange;
		}
	.table-menu{
		width: 100%;
		height: 80%;
		background-color: #E3E3E3;
		margin: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.table-menu .el-icon-warning-outline{
		position: absolute;
		top:10px;
		left: 10px;
		font-size: 30px;
		font-weight: 900;
		color: #FF0000;
	}
	.table-menu li{
		cursor: pointer;
		width: 80px;
		height: 50px;
		background-color: white;
		border-radius: 3px;
		line-height: 50px;
		margin: 30px;
		font-size: 20px;
		font-weight: 800;
		box-shadow: 0 0 20px #9274D0;
	}
	.table-menu li.using{
		background-color: #001529;
		color: white;
	}
	.table-menu li.forbidden{
		background-color: red;
		color: white;
	}
</style>
