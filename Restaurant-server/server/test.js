const query=require('./config/mysql.js')

const selectFoodmenu=async function(){
	let sql='SELECT * FROM foodmenu ORDER BY price';
	let res=await query.query(sql);
	res=JSON.parse(JSON.stringify(res));
	console.log(res);
	return res;
}

selectFoodmenu();

// const deleteFoodmenu=async function(values){
// 	let name=values.name;
// 	let sql=`DELETE FROM foodmenu WHERE name='${name}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// deleteFoodmenu({name:"腐竹炒肉"});

// const addFoodmenu=async function(values){
// 	let name=values.name;
// 	let type=values.type;
// 	let price=values.price;
// 	let url=values.url;
	
// 	let sql=`INSERT INTO foodmenu(name,type,price,url) VALUES('${name}','${type}','${price}','${url}')`
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// addFoodmenu({name:"腐竹炒肉",type:"家常小炒",price:"30",url:"localhost:3000/images/fuzucaorou.jpg"})

// const addMessage=async function(values){
// 	let date=new Date();
// 	let year=(date.getFullYear()).toString();
// 	let month=(date.getMonth()+1).toString();
// 	let day=(date.getDate()).toString();
// 	let hours=(date.getHours()).toString();
// 	let minutes=(date.getMinutes()).toString();
// 	let seconds=(date.getSeconds()).toString();
	
// 	let type=values.type;
// 	let name=values.name;
// 	let goodsstock=values.goodsstock;
	
// 	let mydate='';
// 	let sql='';
// 	mydate=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// 	sql=`INSERT INTO message(mydate,type,name,goodsstock) VALUES('${mydate}','${type}','${name}','${goodsstock}')`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// addMessage({type:"入库",name:"茄子",goodsstock:"300"});

// const selectGoods=async function(values){
// 	let name=values.name;
// 	let sql=`SELECT goodsstock FROM goods WHERE name='${name}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res)
// 	return res;
// }

// selectGoods({name:"大豆"});

// const updateGoods=async function(values){
// 	let num=values.num
// 	let name=values.name;
// 	let price=values.price;
// 	let goodsstock=values.goodsstock;
	
// 	let sql1=`SELECT * FROM goods WHERE name='${name}'`;
// 	let sql2='';
// 	let res2='';
// 	let res=await query.query(sql1);
// 	res=JSON.stringify(res);

// 	if(res=='[]'){
// 		sql2=`INSERT INTO goods(num,name,price,goodsstock) VALUES('${num}','${name}','${price}','${goodsstock}')`;
// 		res2=await query.query(sql2);
// 		res2=JSON.parse(JSON.stringify(res2));
// 		console.log(res2);
// 		return res2;
// 	}else{
// 		sql2=`UPDATE goods SET goodsstock='${goodsstock}' WHERE name='${name}'`;
// 		res2=await query.query(sql2);
// 		res2=JSON.parse(JSON.stringify(res2));
// 		// console.log(res2);
// 		return res2;
// 	}
// }

// updateGoods({num:"9527",name:"大豆",price:"15",goodsstock:"300"});

// const selectPerson=async function(){
// 	let sql=`SELECT * FROM persondatabase ORDER BY worknum`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// selectPerson();

// const deletePerson=async function(values){
// 	//获取单前时间
// 	let date=new Date();
// 	let year=(date.getFullYear()).toString();
// 	let month=(date.getMonth()+1).toString();
// 	let day=(date.getDate()).toString();
// 	let mydate=`${year}-${month}-${day}`;
	
// 	let worknum=values.worknum;
// 	let state=values.state;
	
// 	let sql=`UPDATE persondatabase SET deptime='${mydate}',state='${state}' WHERE worknum='${worknum}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// deletePerson({worknum:"9527",state:"已离职"});

// const order=async function(values){
// 	//获取时间
// 	let date=new Date();
// 	let year=(date.getFullYear()).toString();
// 	let month=(date.getMonth()+1).toString();
// 	let day=(date.getDate()).toString();
// 	let hours=(date.getHours()).toString();
// 	let minutes=(date.getMinutes()).toString();
// 	let seconds=(date.getSeconds()).toString();
	
// 	let ordname=values.name;
// 	let ordnum=values.num;
// 	let ordlist=((values.orderList).join("+")).toString();
// 	let ordprice=values.price;
	
// 	let mydate='';
// 	let sql='';
// 	mydate=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// 	sql=`INSERT INTO ord(mydate,ordname,ordnum,ordlist,ordprice) VALUES('${mydate}','${ordname}','${ordnum}','${ordlist}','${ordprice}')`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// }

// const updateOrder=async function(values){
// 	let ordname=values.name;
// 	let ordnum=values.num;
// 	let ordlist=((values.ordlist).join("+")).toString();
// 	let ordprice=values.price;
	
// 	let sql='';
// 	sql=`UPDATE ord SET ordlist='${ordlist}',ordprice='${ordprice}' WHERE ordname='${ordname}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	return res;
// }

// const deleteOrder=async function(values){
// 	let ordnum=values.num;
// 	let sql=`DELETE FROM ord WHERE ordnum='${ordnum}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	// return res;
// 	console.log(res);
// }

// const addTable=async function(values){
// 	let tablenum=values.num;
// 	let state=values.state;
// 	let sql=`INSERT INTO tables(tablenum,state) VALUES('${tablenum}','${state}')`;
// 	let res=query.query(sql);
// 	res=JSON.stringify(res);
// 	console.log(res);
// 	return res;
// }

// const deleteTable=async function(values){
// 	let tablenum=values.num;
// 	let sql=`DELETE FROM tables WHERE tablenum='${tablenum}'`;
// 	let res=query.query(sql);
// 	res=JSON.stringify(res);
// 	console.log(res)
// 	return res
// }

// const updateTable=async function(values){
// 	let tablenum=values.num;
// 	let state=values.state;
// 	let sql=`UPDATE tables SET state='${state}' WHERE tablenum='${tablenum}'`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
// }

// deleteOrder({num:"1"})

// addTable({num:'4',state:"free"});

// deleteTable({num:"4"});

// updateTable({num:'1',state:'using'});

// const person={
// 	name:"张三",
// 	sex:'男',
// 	age:18,
// 	identitycard:'431125199711021258',
// 	worknum:'9527',
// 	work:'厨师',
// 	entrytime:"2019-12-11",
// 	deptime:"null",
// 	price:'8000',
// 	personal:"good",
// 	state:"在职"
// }

// const addPerson=async function(values){
// 	let name=values.name;
// 	let sex=values.sex;
// 	let age=values.age;
// 	let identitycard=values.identitycard;
// 	let worknum=values.worknum;
// 	let work=values.work;
// 	let entrytime=values.entrytime;
// 	let deptime=values.deptime;
// 	let price=values.price;
// 	let personal=values.personal;
// 	let state=values.state;
	
// 	let sql=`INSERT INTO persondatabase(name,sex,age,identitycard,worknum,work,entrytime,deptime,price,personal,state) VALUES
// 	('${name}','${sex}','${age}','${identitycard}','${worknum}','${work}','${entrytime}','${deptime}','${price}','${personal}','${state}')`;
// 	let res=await query.query(sql);
// 	res=JSON.parse(JSON.stringify(res));
// 	console.log(res);
// 	return res;
	
// }

// addPerson(person);