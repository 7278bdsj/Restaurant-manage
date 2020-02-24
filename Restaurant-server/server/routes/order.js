let getDate=require('../config/getDate.js');

let router=require('koa-router')();

//查询订单
router.get('/selectorder',async(ctx)=>{
	
	let res=await getDate.selectOrder();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"订单查询成功!",date:res};
	}else{
		ctx.body={code:0,message:"订单查询失败!"};
	}
		
});
//添加订单
router.get('/addorder',async(ctx)=>{
	let {name,num,ordlist,price,table}=ctx.query;
	let values={name,num,ordlist,price,table}
	
	let res=await getDate.addOrder(values);
	
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"订单添加成功!"};
	}else{
		ctx.body={code:0,message:"订单添加失败!"};
	}
		
});

//修改订单
router.get('/updateorder',async(ctx)=>{
	let {num,ordlist,price,table}=ctx.query;
	let values={num,ordlist,price,table};
	
	let res=await getDate.updateOrder(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"订单修改成功!"};
	}else{
		ctx.body={code:0,message:"订单修改失败!"};
	}
})
//删除订单
router.get('/deleteorder',async(ctx)=>{
	let {num}=ctx.query;
	let values={num};
	
	let res=await getDate.deleteOrder(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"订单删除成功!"};
	}else{
		ctx.body={code:0,message:"订单删除失败!"};
	}
})

module.exports=router.routes()