<!-- 订餐管理模块 -->

<template>
	<div class="container">
		<div class="left-menu animated bounceInDown">
			<h2>菜单</h2>
			<el-table :data="lefttableData" border style="width: 100%" class="animated jello">
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
				<el-button type="text" @click="dialogVisible = true" class="addmenu">添加订单</el-button>

				<el-dialog class="add-input" title="提示:
				订餐列表输入格式
				菜品编号+空格" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
					<el-input v-model="inputorder.ordnum" placeholder="请输入订单号"></el-input>
					<el-input v-model="inputorder.ordname" placeholder="请输入姓名"></el-input>
					<el-input v-model="inputorder.ordlist" placeholder="请输入订单列表"></el-input>
					<el-input v-model="inputorder.ordtable" placeholder="请输入餐桌号"></el-input>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="addorder">确 定</el-button>
					</span>
				</el-dialog>
			</div>
			<div class="right-order">
				<el-table :data="righttableData" border style="width: 100%">
					<el-table-column fixed prop="mydate" label="日期" width="200"></el-table-column>
					<el-table-column prop="ordname" label="姓名" width="150"></el-table-column>
					<el-table-column prop="ordnum" label="订单号" width="120"></el-table-column>
					<el-table-column prop="ordlist" label="订单" width="200"></el-table-column>
					<el-table-column prop="ordprice" label="价格/人民币" width="200"></el-table-column>
					<el-table-column prop="ordtable" label="餐桌号" width="200"></el-table-column>
					<el-table-column label="操作" width="110">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
							<el-button type="text" @click="dialogVisible2 = true" class="addmenu">修改</el-button>
							<el-dialog class="add-input" title="提示" :visible.sync="dialogVisible2" width="30%" :before-close="handleClose">
								<el-input v-model="inputorder.ordnum" placeholder="请输入订单号"></el-input>
								<el-input v-model="inputorder.ordlist" placeholder="请输入订单列表"></el-input>
								<el-input v-model="inputorder.ordtable" placeholder="请输入餐桌号"></el-input>
								<span slot="footer" class="dialog-footer">
									<el-button @click="dialogVisible2 = false">取 消</el-button>
									<el-button type="primary" @click="updataorder">确 定</el-button>
								</span>
							</el-dialog>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default {
		mounted: function() {
			this.getmenu();
			this.getorder();
		},
		methods: {

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
		},
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
				righttableData: ''
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
	}

	.left-menu {
		width: 48%;
		height: 100%;
		background-color: white;
		float: left;
		overflow: auto;
		padding: 20px;
		box-shadow: 0 0 20px #97A9C3;
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
		background-color: white;
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		box-shadow: 0 0 20px #97A9C3;
		overflow: auto;
	}

	.right-button {
		width: 100%;
		height: 100px;
		background-color: #001529;
		border-radius: 8px;
		text-align: center;
		line-height: 100px;
		font-size: 25px;
		font-weight: 800;
		font-family: "agency fb";
		color: #FAEBD7;
		cursor: pointer;
	}

	/* .right-button:hover{
		background-color: orange;
		color: #001529;
	} */
	.right-button .addmenu {
		display: block;
		width: 100%;
		height: 100%;
		font-size: 25px;
		font-weight: 800;
		color: #FAEBD7;
		background-color: #001529;
		transition: all 0.3s;
	}

	.right-button .addmenu:hover {
		background-color: orange;
		color: #001529;
	}

	.right-button .add-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
	}
	.jello{
		animation-duration: 2s;
	}
</style>
