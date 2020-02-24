let getDate=require('../config/getDate.js');

let router=require('koa-router')();

//上架菜品
router.get('/addfoodmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.addFoodmenu(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"菜品上架成功!"};
	}else{
		ctx.body={code:0,message:"菜品上架失败!"};
	}
})
//下架菜品
router.get('/deletefoodmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.deleteFoodmenu(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"菜品下架成功!"};
	}else{
		ctx.body={code:0,message:"菜品下架失败!"};
	}
})
//上架推荐菜品
router.get('/addrecommendmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.addRecommendmenu(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"推荐菜品上架成功!"};
	}else{
		ctx.body={code:0,message:"推荐菜品上架失败!"};
	}
})
//下架推荐菜品
router.get('/deleterecommendmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.deleteRecommendmenu(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"推荐菜品下架成功!"};
	}else{
		ctx.body={code:0,message:"推荐菜品下架失败!"};
	}
})
//搜索菜单
router.get('/selectfoodmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.selectFoodmenu();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"菜品搜索成功!",date:res};
	}else{
		ctx.body={code:0,message:"菜品搜索失败!"};
	}
})
//搜索推荐菜单
router.get('/selectrecommendmenu',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.selectRecommendmenu();
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"推荐菜品搜索成功!",date:res};
	}else{
		ctx.body={code:0,message:"推荐菜品搜索失败!"};
	}
})

module.exports=router.routes();