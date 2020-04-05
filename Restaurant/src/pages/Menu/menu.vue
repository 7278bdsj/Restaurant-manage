<template>
	<div class="menu">
		<div class="menu-main animated bounceInLeft">
			<div class="title">菜单</div>
			 <el-table class="animated jello"
			      :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
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
            <el-table-column
              prop="foodnum"
              label="编号">
            </el-table-column>
			    </el-table>
		</div>
		<div class="menu-recommend animated bounceInRight">
			<div class="title">推荐菜单</div>
			<el-table class="animated jello"
			     :data="recommendData.slice((currentPage2-1)*PageSize2,currentPage2*PageSize2)"
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
           <el-table-column
             prop="num"
             label="编号">
           </el-table-column>
			   </el-table>
		</div>
    <div class="page-left">
      <el-pagination
       @current-change="handleCurrentChange"
       :current-page.sync="currentPage"
       :page-size="this.PageSize"
       :pager-count="10"
       background
       layout="prev, pager, next"
       :total="this.totalCount">
      </el-pagination>
	</div>
  <div class="page-right">
    <el-pagination
     @current-change="handleCurrentChange2"
     :current-page.sync="currentPage2"
     :page-size="this.PageSize"
     :pager-count="10"
     background
     layout="prev, pager, next"
     :total="this.totalCount2">
    </el-pagination>
    </div>
    </div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default{
		 data() {
		        return {
		          tableData: [],
				  recommendData:[],
          // 默认显示第几页
          currentPage:1,
          // 总条数，根据接口获取数据长度(注意：这里不能为空)
          totalCount:1,
          // 个数选择器（可修改）
          pageSizes:[1,2,3,4],
          // 默认每页显示的条数（可修改）
          PageSize:8,
          currentPage2:1,
          totalCount2:1,
          pageSizes2:[1,2,3,4],
          PageSize2:6,
		        }
		      },
			  mounted:function(){
			  	this.getFoodMenu();
				this.getRecommendMenu();
			  }
			  ,
					methods:{
            handleCurrentChange(val) {
                       // 改变默认的页数
                       this.currentPage=val
                   },
            handleCurrentChange2(val) {
                              // 改变默认的页数
                this.currentPage2=val
                  },
						//获取菜单
						async getFoodMenu(){
							let res=await ajax('http://localhost:3000/api/selectfoodmenu');
							if(res.code===1){
								this.$message({
									message:"菜单获取成功",
									type:'success'
								});
								this.tableData=res.date;
                this.totalCount=res.date.length;
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
                this.totalCount2=res.date.length;
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
    overflow: hidden;
    background-color: #F0F2F5;
	}
	.menu-main{
		width: 48%;
		height: 620px;
		background-color:white;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 20px;
		overflow: auto;
    box-shadow: 0 0 5px deepskyblue;
    text-shadow: 0 0 1px #001529;
    overflow: hidden;
    border-radius: 5px;
	}
	.menu-recommend{
		width: 48%;
		height: 620px;
		background-color: white;
		float: right;
		margin-top: 20px;
		margin-bottom: 20px;
		margin-right: 20px;
		overflow: auto;
    box-shadow: 0 0 5px deepskyblue;
    text-shadow: 0 0 1px #001529;
    overflow: hidden;
    border-radius: 5px;
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
  .page-left,.page-right{
    width: 48%;
    height: 50px;
    background-color: inherit;
    text-shadow: 0 0 1px #001529;
  }
  .page-left{
    float: left;
  }
  .page-right{
    float: right;
  }
</style>
