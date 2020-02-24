const mysql=require('mysql');
const config=require('./default.js')

//创建连接池
let pool=mysql.createPool({
	host:config.database.HOST,
	user:config.database.USERNAME,
	password:config.database.PASSWORD,
	database:config.database.DATABASE
})

//与数据库建立连接
let query=function(sql,values){
	//创立promise函数
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,connection)=>{
			if(err){
				reject(err);
			}else{
				connection.query(sql,values,(err,rows)=>{
					if(err){
						reject(err);
					}else{
						resolve(rows);
					}
					connection.release();
				})
			}
		})
		
	})
}

module.exports={
	query
}