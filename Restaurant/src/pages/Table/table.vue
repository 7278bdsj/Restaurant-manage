<!-- 餐桌管理模块 -->

<template>
	<div class="table-main">
		<div class="table-operate">
			<div class="operate-input">
        <input type="text" placeholder="餐桌号" v-model="num">
      </div>
      <div class="add-delete">
        <button class="add el-icon-circle-plus" @click="addTable">&nbsp;添加餐桌</button>
        <button class="delete el-icon-error" @click="deleteTable">&nbsp;删除餐桌</button>
      </div>
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
				num:''
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
				let num=this.num;
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
						type:'success'
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
    background-color: #F0F2F5;
    overflow: hidden;
	}
	.table-operate{
		width: 44%;
		height: 100%;
		padding-bottom:20px ;
    float: left;
	}
  .operate-input{
    width: 500px;
    height: 350px;
    background-color: white;
    margin: 0 auto;
    box-shadow: 0 0 5px deepskyblue;
    border-radius: 10px;
  }
  .operate-input input{
    display: block;
    outline: none;
    width: 50%;
    height: 80%;
    margin: auto auto;
    font-size: 70px;
    font-weight: bolder;
    border: none;
    text-shadow: 0 0 10px #001529;
    color: #001529;
  }
  .add-delete{
    width: 500px;
    height: 350px;
    background-color: white;
    margin: 20px auto;
    box-shadow: 0 0 7px deepskyblue;
    border-radius: 5px;
    padding-top: 20px;
  }
  .add,.delete{
    display: block;
    width: 340px;
    height: 130px;
    background-color: white;
    box-shadow: 0 0 7px deepskyblue;
    margin: 20px auto;
    border-radius: 5px;
    font-size: 40px;
    font-weight: bold;
    line-height: 130px;
    border: none;
    transition: all 0.4s;
    color: #001529;
    text-shadow: 0 0 4px #001529;
  }
  .add:hover,.delete:hover{
    color:white;
    background-color: #001529;
  }
	.table-menu{
		width: 44%;
		height: 85%;
		background-color: white;
    float: right;
		margin: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
    box-shadow: 0 0 7px deepskyblue;
    border-radius: 5px;
    margin-right: 40px;
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
		box-shadow: 0 0 10px #9274D0;
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
