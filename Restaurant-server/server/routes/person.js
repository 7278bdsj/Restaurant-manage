let getDate=require('../config/getDate.js');

let router=require('koa-router')();

//添加人员信息
router.get('/addperson',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.addPerson(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"人员信息添加成功!"};
	}else{
		ctx.body={code:0,message:"人员信息添加失败!"};
	}
})
//删除(修改员工在职状态)员工信息
router.get('/deleteperson',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.deletePerson(values);
	if(res.affectedRows!==0){
		ctx.body={code:1,message:"人员信息删除成功!"};
	}else{
		ctx.body={code:0,message:"人员信息删除失败!"};
	}
})
//查询所有员工信息
router.get('/selectperson',async(ctx)=>{
	let values=ctx.query;
	let res=await getDate.selectPerson(values);
	if(res[0].ID!==undefined){
		ctx.body={code:1,message:"人员信息查询成功!",date:res};
	}else{
		ctx.body={code:0,message:"人员信息查询失败!"};
	}
})

module.exports=router.routes();