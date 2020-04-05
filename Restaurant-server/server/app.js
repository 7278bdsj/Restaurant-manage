const Koa = require('koa');
const bodyParse = require('koa-bodyparser');
const cors = require('koa2-cors');
const static = require('koa-static');
const fs=require('fs');
const Router = require('./routes/router.js');
let router=require('koa-router')();
const path = require('path');
// const koaBody = requA'koa-body');

let app = new Koa();

app.use(bodyParse({
	enableTypes: ['json', 'form', 'text']
}));

app.use(static(
	path.join(__dirname, './public')
));

// app.use(function(ctx,next){
// 	ctx.body="服务器启动成功";
// 	next();
// })


app.use(cors({
	 origin: function (ctx) {
	            return "*"; // 允许来自所有域名请求
	    },
}))

//挂载路由
app.use(Router);
app.use(router.routes());

app.listen(3000,function(err){
	if(err){
		console.log("服务器启动失败")
	}else{
		console.log("服务器启动，端口号：3000")
	}
})
