<!-- 订餐管理模块 -->

<template>
	<div class="container">
		<div class="left-menu animated bounceInDown">
			<h2 class="el-icon-platform-eleme" style="color: #001529;">&nbsp;菜单列表</h2>
			<el-table :data="lefttableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" border style="width: 100%" class="animated jello">
				<el-table-column prop="name" label="菜名" width="180">
				</el-table-column>
				<el-table-column prop="type" label="种类" width="180">
				</el-table-column>
				<el-table-column prop="price" label="价格">
				</el-table-column>
				<el-table-column prop="foodnum" label="编号">
				</el-table-column>
			</el-table>
		</div>
		<div class="right-form animated bounceInUp">
			<div class="right-button">
				<el-button type="text" class="addmenu el-icon-circle-plus" @click="addorder">添加订单</el-button>
        <el-button type="text" class="addmenu2 el-icon-s-tools" @click="updataorder">修改订单</el-button>
				<input v-model="inputorder.ordnum" placeholder="请输入订单号"></input>
				<input v-model="inputorder.ordname" placeholder="请输入姓名"></input>
				<input v-model="inputorder.ordlist" placeholder="请输入订单列表"></input>
				<input v-model="inputorder.ordtable" placeholder="请输入餐桌号"></input>
			</div>
			<div class="right-order">
				<el-table :data="righttableData.slice((currentPage2-1)*PageSize2,currentPage2*PageSize2)" border style="width: 100%">
					<el-table-column fixed prop="mydate" label="日期" width="100"></el-table-column>
					<el-table-column prop="ordname" label="姓名" width="100"></el-table-column>
					<el-table-column prop="ordnum" label="订单号" width="100"></el-table-column>
					<el-table-column prop="ordlist" label="订单" width="150"></el-table-column>
					<el-table-column prop="ordprice" label="价格/人民币" width="100"></el-table-column>
					<el-table-column prop="ordtable" label="餐桌号" width="100"></el-table-column>
					<el-table-column label="操作" width="110">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
      <div class="page-right">
        <el-pagination
         @current-change="handleCurrentChange2"
         :current-page.sync="currentPage2"
         :page-size="5"
         :pager-count="8"
         background
         layout="prev, pager, next"
         :total="this.totalCount2">
        </el-pagination>
      </div>
      <span class="warn">订单列表输入格式为：菜品编号+空格+菜品编号</span>
		</div>
    <div class="page-left">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        :pager-count="8"
        background
        layout="prev, pager, next"
        :total="this.totalCount">
      </el-pagination>
    </div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default {
    data() {
    	return {
    		deleteNum: '',
    		inputorder: {
    			ordnum: '',
    			ordname: '',
    			ordlist: '',
    			ordtable: ''
    		},
    		dialogVisible: false,
        dialogVisible2: false,
    		lefttableData: '',
    		righttableData: '',
        // 默认显示第几页
        currentPage:1,
        // 总条数，根据接口获取数据长度(注意：这里不能为空)
        totalCount:1,
        // 个数选择器（可修改）
        pageSizes:[1,2,3,4],
        // 默认每页显示的条数（可修改）
        PageSize:10,
        currentPage2:1,
        totalCount2:1,
        pageSizes2:[1,2,3,4],
        PageSize2:6,
    	}
    }
    ,
		mounted: function() {
			this.getmenu();
			this.getorder();
		},
		methods: {
       handleCurrentChange(val) {
                  // 改变默认的页数
                  this.currentPage=val
              },
       handleCurrentChange2(val) {
                         // 改变默认的页数
           this.currentPage2=val
             },
			//修改订单
			async updataorder() {
				let ordnum = this.inputorder.ordnum;
				let ordlist = this.inputorder.ordlist;
				let ordtable = this.inputorder.ordtable;
				let ordlistArray = ordlist.split("+");
				let ordprice = 0;
				let values = {};
				let foodmenu = JSON.parse(window.localStorage.getItem("foodmenu"));

				for (let i = 0; i < ordlist.length; i++) {
					for (let j = 0; j < foodmenu.length; j++) {
						if (ordlist[i] == foodmenu[j].foodnum) {
							ordprice = ordprice + parseInt(foodmenu[j].price);
						}
					}
				}
				ordprice = ordprice.toString();
				values = {

					ordlist: ordlist,
					price: ordprice,
					num: ordnum,
					table: ordtable
				}
				console.log(values);
				let res = await ajax('http://localhost:3000/api/updateorder', values);
				if (res.code === 1) {
					this.$message({
						message: '订单修改成功',
						type: 'success'
					});
					this.getorder();
				} else {
					this.$message({
						message: '订单修改失败',
						type: 'error'
					})
				}

			},

			//添加订单
			async addorder() {
				let ordnum = this.inputorder.ordnum;
				let ordname = this.inputorder.ordname;
				let ordlist = this.inputorder.ordlist;
				let ordtable = this.inputorder.ordtable;
				let ordlistArray = ordlist.split("+");
				let ordprice = 0;
				let values = {};
				let foodmenu = JSON.parse(window.localStorage.getItem("foodmenu"));

				for (let i = 0; i < ordlist.length; i++) {
					for (let j = 0; j < foodmenu.length; j++) {
						if (ordlist[i] == foodmenu[j].foodnum) {
							ordprice = ordprice + parseInt(foodmenu[j].price);
						}
					}
				}
				ordprice = ordprice.toString();
				values = {
					name: ordname,
					ordlist: ordlist,
					price: ordprice,
					num: ordnum,
					table: ordtable
				}
				let res = await ajax('http://localhost:3000/api/addorder', values);
				if (res.code === 1) {
					this.$message({
						message: '订单添加成功',
						type: 'success'
					});
					this.getorder();
				} else {
					this.$message({
						message: '订单添加失败',
						type: 'error'
					})
				}

			},

			//获取订单列表
			async getorder() {
				let res = await ajax('http://localhost:3000/api/selectorder');
				if (res.code === 1) {
					this.righttableData = res.date;
          this.totalCount2=res.date.length;
				} else {
					this.$message({
						message: "订单数据获取失败",
						type: 'error'
					})
				}
			},
			//获取菜单
			async getmenu() {
				let res = await ajax('http://localhost:3000/api/selectfoodmenu');
				let date = '';
				if (res.code) {
					this.lefttableData = res.date;
          this.totalCount=res.date.length;
					date = JSON.stringify(res.date);
					window.localStorage.setItem("foodmenu", date);
				} else {
					this.$message({
						message: "菜单数据获取失败",
						type: 'error'
					})
				}
			},

			async handleClick(row) {
				this.deleteNum = row.ordnum;
				let values = {
					num: this.deleteNum
				};
				let res = await ajax('http://localhost:3000/api/deleteorder', values);
				if (res.code === 1) {
					this.$message({
						message: '订单删除成功',
						type: 'success'
					});
					this.getorder();
				} else {
					this.$message({
						message: '订单删除失败',
						type: 'error'
					})
				}
			},
			handleClose(done) {
			        this.$confirm('确认关闭？')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      }
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
    background-color: #F0F2F5;
    overflow: hidden;
	}

	.left-menu {
		width: 44%;
		height: 80%;
		background-color: white;
		float: left;
		overflow: auto;
		padding: 20px;
    margin: 20px;
    border-radius: 10px;
    text-shadow: 0 0 1px #001529;
    box-shadow: 0 0 5px deepskyblue;
    overflow: hidden;
	}

	.left-menu h2 {
		text-align: center;
		line-height: 70px;
		font-size: 28px;
		padding-bottom: 20px;
	}

	.right-form {
		width: 48%;
		height: 100%;
		background-color: #F0F2F5;
		float: right;
		padding: 10px;
		margin: 10px;
		overflow: auto;
	}

	.right-button {
		width: 100%;
		height: 200px;
		background-color: white;
		border-radius: 8px;
		text-align: center;
		line-height: 100px;
		font-size: 25px;
		font-weight: 800;
		font-family: "agency fb";
		color: #FAEBD7;
		cursor: pointer;
    margin-bottom: 20px;
    padding-top: 10px;
    box-shadow: 0 0 5px deepskyblue;
    position: relative;
	}

	/* .right-button:hover{
		background-color: orange;
		color: #001529;
	} */
	.right-button .addmenu {
		display: block;
		width: 200px;
		height: 80px;
		font-size: 28px;
		font-weight:  normal;
		color: #001529;
		transition: all 0.3s;
    text-shadow: 0 0 1px #001529;
    box-shadow: 0 0 5px deepskyblue;
    margin: 20px;
	}
  .right-button .addmenu2 {
  	display: block;
  	width: 200px;
  	height: 80px;
  	font-size: 28px;
  	font-weight:  normal;
  	color: #001529;
  	transition: all 0.3s;
    text-shadow: 0 0 1px #001529;
    box-shadow: 0 0 5px deepskyblue;
    margin: 20px;
    position: absolute;
    top: 10px;
    left: 220px;
  }

	.right-button .addmenu:hover,.addmenu2:hover {
		background-color: orange;
		color: #001529;
	}

  .right-button input{
    width: 250px;
    height: 25px;
    display: block;
    float: left;
    margin-left: 20px;
    font-size: 16px;
  }
  .right-button input::placeholder{
    color: #6CB4FF;
  }
  .right-order{
    width: 100%;
    height: 418px;
    overflow: auto;
    box-shadow: 0 0 5px deepskyblue;
    border-radius: 5px;
    text-shadow: 0 0 1px #001529;
  }
	.jello{
		animation-duration: 2s;
	}
  .page-left{
    width: 46.5%;
    float: left;
    margin-left: 20px;
  }
  .page-right{
    width: 100%;
    float: right;
    margin-top: 20px;
  }
  .warn{
    font-size: 12px;
    color:#6C66FF ;
  }
</style>
