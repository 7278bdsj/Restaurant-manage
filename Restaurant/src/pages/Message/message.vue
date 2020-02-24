<!-- 入/出库信息登记模块 -->

<template>
	<div class="message">
		<div class="message-list animated bounceInLeft">
			<el-table
			    :data="tableData"
			    height="625"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="mydate"
			      label="时间"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="type"
			      label="操作"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="食材">
			    </el-table-column>
				<el-table-column
				  prop="goodsstock"
				  label="数量/千克">
				</el-table-column>
			  </el-table>
		</div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js';
	 export default {
	    data() {
	      return {
	        tableData:[]
	      }
	    },
		mounted:function(){
			this.getTableDate();
		},
		methods:{
			async getTableDate(){
				let res=await ajax('http://localhost:3000/api/selectmessage');
				if(res.code===1){
					this.$message({
						message:"数据获取成功",
						type:'success'
					});
					this.tableData=res.date;
					
				}else{
					this.$message({
						message:"数据获取失败",
						type:'error'
					})
				}
				
			}
		}
	  }
</script>

<style>
	.message{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.message .message-list{
		width: 97.5%;
		height: 95%;
		background-color: #E3E3E3;
		margin: 20px;
		box-sizing: border-box;
		padding: 50px;
	}
	.message .message-list .el-table{
		box-shadow: 0 0 20px #9274D0;
	}
</style>
