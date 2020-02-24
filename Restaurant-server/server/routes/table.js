let getDate=require('../config/getDate.js');

let router=require('koa-router')();

//获取座位
router.get('/selecttable',async(ctx)=>{
	let res=await getDate.selectTable();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"餐桌信息获取成功!",date:res};
	}else{
		ctx.body={code:0,message:"餐桌信息获取失败!"};
	}
})

//添加座位
router.get('/addtable',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.addTable(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"餐桌添加成功!"};
	}else{
		ctx.body={code:0,message:"餐桌添加失败!"};
	}
})

//删除座位
router.get('/deletetable',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.deleteTable(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"餐桌删除成功!"};
	}else{
		ctx.body={code:0,message:"餐桌删除失败!"};
	}
})

//修改座位状态
router.get('/updatetable',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.updateTable(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"状态修改成功!"};
	}else{
		ctx.body={code:0,message:"状态修改失败!"};
	}
})

module.exports=router.routes();