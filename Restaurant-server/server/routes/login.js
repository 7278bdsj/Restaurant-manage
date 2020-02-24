//登录的路由
let getDate = require('../config/getDate.js')

let router = require('koa-router')()

router.post('/login', async(ctx)=>{
	// ctx.set('Content-Type','application/json');
	// let {username,password,position}= ctx.query;
	let {username,password,position}= ctx.request.body;
	let res='';
	if(position==='1'){
		res=await getDate.adminLogin(username);
	}else if(position=='2'){
		res=await getDate.receptLogin(username);
	}else if(position=='3'){
		res=await getDate.cookLogin(username);
	}else if(position=='4'){
		res=await getDate.personLogin(username);
	}else{
		res=await getDate.stockLogin(username);
	}
	
	if(res.length===0){
		ctx.body={code:0,message:'不存在该账号'}
	}else if(res[0].password!==password){
		ctx.body={code:0,message:'登录密码错误'}
	}else{
		let pos=res[0].position.toString();
		ctx.body={code:1,message:'登录成功',username:username,position:pos}
	}
	
})

module.exports=router.routes()