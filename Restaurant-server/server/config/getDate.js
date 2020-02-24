const query = require('./mysql.js')

//查询admin登录密码
const adminLogin = async function(username) {
	let sql = `SELECT * FROM admin WHERE username = '${username}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//查询recept登录密码
const receptLogin = async function(username) {
	let sql = `SELECT * FROM recept WHERE username = '${username}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//查询cook登录密码
const cookLogin = async function(username) {
	let sql = `SELECT * FROM cook WHERE username = '${username}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//查询person登录密码
const personLogin = async function(username) {
	let sql = `SELECT * FROM person WHERE username = '${username}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//查询stock登录密码
const stockLogin = async function(username) {
	let sql = `SELECT * FROM stock WHERE username = '${username}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//获取订单列表
const selectOrder = async function() {
	let date = new Date();
	let ordyear = (date.getFullYear()).toString();
	// console.log(ordyear);
	let sql = `SELECT * FROM ord WHERE ordyear = '${ordyear}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}

//添加订单
const addOrder = async function(values) {
	//获取时间
	let date = new Date();
	let year = (date.getFullYear()).toString();
	let month = (date.getMonth() + 1).toString();
	let day = (date.getDate()).toString();

	let ordname = values.name;
	let ordnum = values.num;
	let ordlist = values.ordlist;
	let ordprice = values.price;
	let ordtable = values.table
	let ordyear = year;

	let mydate = '';
	let sql = '';
	mydate = `${month}-${day}`;
	sql =
		`INSERT INTO ord(mydate,ordname,ordnum,ordlist,ordprice,ordtable,ordyear) VALUES('${mydate}','${ordname}','${ordnum}','${ordlist}','${ordprice}','${ordtable}','${ordyear}')`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//修改订单
const updateOrder = async function(values) {
	let ordnum = values.num;
	let ordlist = values.ordlist;
	let ordprice = values.price;
	let ordtable = values.table;

	let sql = '';
	sql = `UPDATE ord SET ordlist='${ordlist}',ordprice='${ordprice}',ordtable='${ordtable}' WHERE ordnum='${ordnum}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//删除订单
const deleteOrder = async function(values) {
	let ordnum = values.num;
	let sql = `DELETE FROM ord WHERE ordnum='${ordnum}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}
//获取座位信息
const selectTable = async function() {
	let sql = 'SELECT * FROM tables ORDER BY ID';
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//添加座位
const addTable = async function(values) {
	let tablenum = values.num;
	let state = values.state;
	let sql = `INSERT INTO tables(tablenum,state) VALUES('${tablenum}','${state}')`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//删除座位
const deleteTable = async function(values) {
	let tablenum = values.num;
	let sql = `DELETE FROM tables WHERE tablenum=${tablenum}`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	console.log(res);
	return res;
}
//修改座位状态
const updateTable = async function(values) {
	let tablenum = values.num;
	let state = values.state;
	let sql = `UPDATE tables SET state='${state}' WHERE tablenum='${tablenum}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	console.log(res);
	return res;
}
//添加员工信息
const addPerson = async function(values) {
	let name = values.name;
	let sex = values.sex;
	let age = values.age;
	let identitycard = values.identitycard;
	let worknum = values.worknum;
	let work = values.work;
	let entrytime = values.entrytime;
	let deptime = values.deptime;
	let price = values.price;
	let personal = values.personal;
	let state = values.state;

	let sql =
		`INSERT INTO persondatabase(name,sex,age,identitycard,worknum,work,entrytime,deptime,price,personal,state) VALUES
	('${name}','${sex}','${age}','${identitycard}','${worknum}','${work}','${entrytime}','${deptime}','${price}','${personal}','${state}')`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;

}
//删除(修改员工在职状态)员工信息
const deletePerson = async function(values) {
	//获取单前时间
	let date = new Date();
	let year = (date.getFullYear()).toString();
	let month = (date.getMonth() + 1).toString();
	let day = (date.getDate()).toString();
	let mydate = `${year}-${month}-${day}`;

	let worknum = values.worknum;
	let state = values.state;

	let sql = `UPDATE persondatabase SET deptime='${mydate}',state='${state}' WHERE worknum='${worknum}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//查询所有员工信息
const selectPerson = async function() {
	let sql = `SELECT * FROM persondatabase ORDER BY worknum`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//查询所有物资数量
const selectallGoods = async function() {
	let sql = `SELECT * FROM goods`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}

//查询物资数量
const selectGoods = async function(values) {
	let name = values.name;
	let sql = `SELECT * FROM goods WHERE name='${name}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res)
	return res;
}
//修改库存(入库出库操作)
const updateGoods = async function(values) {
	let num = values.num
	let name = values.name;
	let price = values.price;
	let goodsstock = values.goodsstock;

	let sql1 = `SELECT * FROM goods WHERE name='${name}'`;
	let sql2 = '';
	let res2 = '';
	let res = await query.query(sql1);
	res = JSON.stringify(res);

	if (res == '[]') {
		sql2 = `INSERT INTO goods(num,name,price,goodsstock) VALUES('${num}','${name}','${price}','${goodsstock}')`;
		res2 = await query.query(sql2);
		res2 = JSON.parse(JSON.stringify(res2));
		// console.log(res2);
		return res2;
	} else {
		sql2 = `UPDATE goods SET goodsstock='${goodsstock}' WHERE name='${name}'`;
		res2 = await query.query(sql2);
		res2 = JSON.parse(JSON.stringify(res2));
		// console.log(res2);
		return res2;
	}
}
//添加库存操作信息
const addMessage = async function(values) {
	let date = new Date();
	let year = (date.getFullYear()).toString();
	let month = (date.getMonth() + 1).toString();
	let day = (date.getDate()).toString();
	let hours = (date.getHours()).toString();
	let minutes = (date.getMinutes()).toString();
	let seconds = (date.getSeconds()).toString();

	let type = values.type;
	let name = values.name;
	let goodsstock = values.goodsstock;

	let mydate = '';
	let sql = '';
	mydate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	sql = `INSERT INTO message(mydate,type,name,goodsstock) VALUES('${mydate}','${type}','${name}','${goodsstock}')`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//获取库存操作信息
const selectMessage = async function() {
	let sql = 'SELECT * FROM message ORDER BY ID desc';
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	return res;
}

//上架菜品
const addFoodmenu = async function(values) {
	let name = values.name;
	let type = values.type;
	let price = values.price;
	let num = values.num;
	let sql = `INSERT INTO foodmenu(name,type,price,foodnum) VALUES('${name}','${type}','${price}',${num})`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//下架菜品
const deleteFoodmenu = async function(values) {
	let name = values.name;
	let sql = `DELETE FROM foodmenu WHERE name='${name}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//上架推荐菜品
const addRecommendmenu = async function(values) {
	let name = values.name;
	let type = values.type;
	let price = values.price;
	let num = values.num

	let sql = `INSERT INTO recommendmenu(name,type,price,num) VALUES('${name}','${type}','${price}',${num})`
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//下架推荐菜品
const deleteRecommendmenu = async function(values) {
	let name = values.name;
	let sql = `DELETE FROM recommendmenu WHERE name='${name}'`;
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//搜索菜单
const selectFoodmenu = async function() {
	let sql = 'SELECT * FROM foodmenu ORDER BY ID';
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}
//搜索推荐菜单
const selectRecommendmenu = async function() {
	let sql = 'SELECT * FROM recommendmenu ORDER BY price';
	let res = await query.query(sql);
	res = JSON.parse(JSON.stringify(res));
	// console.log(res);
	return res;
}

module.exports = {
	adminLogin, //查询admin登录密码
	receptLogin, //查询recept登录密码
	cookLogin, //查询cook登录密码
	personLogin, //查询person登录密码
	stockLogin, //查询stock登录密码
	selectOrder, //查询所有订单
	addOrder, //添加订单
	updateOrder, //修改订单
	deleteOrder, //删除订单
	selectTable, //获取座位信息
	addTable, //添加餐桌
	deleteTable, //删除餐桌
	updateTable, //修改餐桌状态
	addPerson, //添加员工
	deletePerson, //删除员工
	selectPerson, //查询员工
	selectallGoods, //查询所有物质数量
	selectGoods, //查询物资数量
	updateGoods, //修改库存(入库出库操作)
	addMessage, //添加库存操作信息
	selectMessage, //获取库存操作的信息
	addFoodmenu, //上架菜品
	deleteFoodmenu, //下架菜品
	addRecommendmenu, //上架推荐菜品
	deleteRecommendmenu, //下架推荐菜品
	selectFoodmenu, //获取菜单
	selectRecommendmenu //获取推荐菜单
}
