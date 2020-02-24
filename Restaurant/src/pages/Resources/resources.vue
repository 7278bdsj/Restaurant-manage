<!-- 库存管理模块 -->

<template>
	<div class="res">
		<div class="res-list animated bounceInUp">
			<el-table
			    :data="tableData"
			    height="750"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="num"
			      label="编号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="食材名"
			      width="180">
			    </el-table-column>
				<el-table-column
				  prop="price"
				  label="价格/每千克"
				  width="180">
				</el-table-column>
			    <el-table-column
			      prop="goodsstock"
			      label="存量/千克">
			    </el-table-column>
			  </el-table>
		</div>
		<div class="res-operation animated bounceInRight">
			<el-input v-model="inputData.num" placeholder="请输入编号"></el-input>
			<el-input v-model="inputData.name" placeholder="请输入食材名"></el-input>
			<el-input v-model="inputData.price" placeholder="请输入食材价格"></el-input>
			<el-input-number v-model="inputData.goodsstock" controls-position="right" @change="handleChange"></el-input-number>
			<div><el-button type="primary" @click="ruku">原料入库</el-button>
			<el-button type="danger" @click="chuku">原料出库</el-button></div>
		</div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js';
	export default {
		 data() {
		      return {
				  inputData:{
					  num:'',
					  name:'',
					  price:'',
					  goodsstock:''
				  }
				  ,
		        tableData: ''
		      }
		    },
		mounted:function(){
			this.getTableDate();
		}
			,
		 methods:{
			 //入\出库信息操作
			async addMessage(type,name,goodsstock){
				let values={type:type,name:name,goodsstock:goodsstock}
				let res=await ajax('http://localhost:3000/api/addmessage',values);
				if(res.code===1){
					this.$message({
						message:`${res.message}`,
						type:'success'
					})
				}else{
					this.$message({
						message:`${res.message}`,
						type:'error'
					})
				}
			},
			 
			 //获取原料信息
			async getTableDate(){
				let res=await ajax('http://localhost:3000/api/selectallgoods');
				if(res.code===1){
					this.$message({
						message:"食材信息获取成功",
						type:"success"
					})
					this.tableData=res.date;
				}else{
					this.$message({
						message:"食材信息获取失败",
						type:"error"
					})
				}
				
			},
			 //入库
			async ruku(){
					let values1={name:this.inputData.name};
					let values2='';
					let num=this.inputData.num;
					let name=this.inputData.name;
					let price=this.inputData.price;
					let goodsstock='';
					let goodsstock2=this.inputData.goodsstock;
					
					let res=await ajax('http://localhost:3000/api/selectgoods',values1);
					goodsstock=goodsstock2+parseInt(res.date[0].goodsstock);
					values2={num,name,price,goodsstock};
					let res2=await ajax('http://localhost:3000/api/updategoods',values2);
					if(res2.code===1){
						this.$message({
								message:'入库操作成功',
								type:'success'
						});
						this.getTableDate();
						this.addMessage("入库",name,goodsstock2);
					}else{
						this.$message({
								message:'入库操作失败',
								type:'error'
						})
					}
						
			 },
			 
			//出库
			 async chuku(){
				 let values1={name:this.inputData.name};
				 let values2='';
				 let num=this.inputData.num;
				 let name=this.inputData.name;
				 let price=this.inputData.price;
				 let goodsstock=''
				 let goodsstock2=this.inputData.goodsstock;
				 
				 let res=await ajax('http://localhost:3000/api/selectgoods',values1);
				 goodsstock=parseInt(res.date[0].goodsstock)-goodsstock2;
				 values2={num,name,price,goodsstock};
				 let res2=await ajax('http://localhost:3000/api/updategoods',values2);
				 if(res2.code===1){
				 	this.$message({
				 			message:'出库操作成功',
				 			type:'success'
				 	});
					this.getTableDate();
					this.addMessage("出库",name,goodsstock2);
				 }else{
				 	this.$message({
				 			message:'出库操作失败',
				 			type:'error'
				 	})
				 }
			 },
			handleChange() {
			        this.inputData.stock=this.inputData.stock+2;
			      }
			}
			}
</script>

<style scoped>
	.res{
		width: 100%;
		height: 100%;
	}
	.res .res-list{
		width: 48%;
		height: 97%;
		float: left;
		margin: 10px;
		background-color: #E3E3E3;
		box-shadow: 0 0 20px #97A9C3;
	}
	.res .res-operation{
		width: 48%;
		height: 97%;
		float: right;
		margin: 10px;
		background-color: #E3E3E3;
		padding-top: 100px;
		padding-bottom: 100px;
		padding-left: 180px;
		padding-right: 180px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 20px #9274D0;
	}
</style>
