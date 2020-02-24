let getDate=require('../config/getDate.js');

let router=require('koa-router')();

//查询所有物资
router.get('/selectallgoods',async(ctx)=>{
	let res=await getDate.selectallGoods();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"物资查询成功!",date:res};
	}else{
		ctx.body={code:0,message:"物资查询失败!"};
	}
})

//查询物资数量
router.get('/selectgoods',async(ctx)=>{
		let name=ctx.query.name;
		let values={name:name};
		let res=await getDate.selectGoods(values);
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"物资查询成功!",date:res};
	}else{
		ctx.body={code:0,message:"物资查询失败!"};
	}
})
//修改库存(入库出库操作)
router.get('/updategoods',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.updateGoods(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"库存操作成功!"};
	}else{
		ctx.body={code:0,message:"库存操作失败!"};
	}
})
//添加库存操作信息
router.get('/addmessage',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.addMessage(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"库存操作信息添加成功!"};
	}else{
		ctx.body={code:0,message:"库存操作信息添加失败!"};
	}
})
//获取库存操作的信息
router.get('/selectmessage',async(ctx)=>{
	let res=await getDate.selectMessage();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"库存操作信息获取成功!",date:res};
	}else{
		ctx.body={code:0,message:"库存操作信息获取失败!"};
	}
})
module.exports=router.routes();