<!-- 菜品管理模块 -->

<template>
	<div class="dishes">
		<form class="submit-form animated rubberBand">
			<h2>菜单管理</h2>
			<input type="text" name="menuName" placeholder="菜名" v-model="inputDate.name">
			<input type="text" name="type" placeholder="类型" v-model="inputDate.type">
			<input type="text" name="price" placeholder="价格" v-model="inputDate.price">
			<input type="text" name="num" placeholder="编号" v-model="inputDate.num">
			<input type="submit" value="上传" class="button" @click.prevent="updata">
			<input type="submit" value="下架" class="button" @click.prevent="downdata">
		</form>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js'
	export default{
		data(){
			return {
				inputDate:{
					name:'',
					type:'',
					price:'',
					num:null
				}
			}
		}
		,
		methods:{
			//上传菜单
			async updata(){
				let values={
					name:this.inputDate.name,
					type:this.inputDate.type,
					price:this.inputDate.price,
					num:this.inputDate.num
				}
				let res=await ajax('http://localhost:3000/api/addfoodmenu',values)
				if(res.code===1){
					this.$message({
						message:'菜品上架成功',
						type:'success'
					})
				}else{
					this.$message({
						message:'菜品上架失败',
						type:'error'
					})
				}
			},
			//下架菜单
			async downdata(){
				let values={
					name:this.inputDate.name
				}
				let res=await ajax('http://localhost:3000/api/deletefoodmenu',values)
				if(res.code===1){
					this.$message({
						message:'菜品下架成功',
						type:'success'
					})
				}else{
					this.$message({
						message:'菜品下架失败',
						type:'error'
					})
				}
			}	
		}
	}
</script>

<style scoped>
	.dishes{
		width: 100%;
		height: 100%;
		background:url(../Login/image/下载.jpg) no-repeat fixed;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "agency fb";
	}
	.dishes .submit-form{
		width: 500px;
		height: 400px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		background:inherit;
		text-align: center;
		padding: 40px;
		overflow: hidden;
		position: relative;
		z-index: 100;
	}
	.dishes .submit-form h2{
		color: white;
		font-size: 36px;
	}
	.dishes .submit-form input{
		margin: 6px 0px;
		height: 40px;
		border: none;
		font-size: 20px;
		border-radius: 5px;
		padding: 0 14px;
		background-color: rgba(255,255,255,0.4);
	}
	.dishes .submit-form input::placeholder{
		color: #2C3E50;
	}
	.dishes .submit-form input.file{
		transform: translate(125px,0);
		width: 200px;
		height: 200px;
		background-color: rgba(255,255,255,0.4);
		opacity: 0;
	}
	.dishes .submit-form .fileStyle{
		width: 250px;
		height: 210px;
		background-color: rgba(255,255,255,0.4);;
		border-radius: 5px;
		position: absolute;
		top: 240px;
		left: 160px;
		color: rgba(105,105,105,0.5);
		font-size: 120px;
		line-height: 210px;
		font-weight: lighter;
	}
	.dishes .submit-form .button{
		background-image: linear-gradient(to bottom right,rgba(	0,0,205,0.3),rgba(139,0,139,0.5));
		color: white;
		margin-top: 20px;
	}
	.dishes .submit-form .button:hover{
		background-image: linear-gradient(to bottom right,rgba(139,0,139,0.8),rgba(	255,255,0,0.5));
	}
	.dishes .submit-form::after{
		content:'';
		width:600px;
		height:750px;
		background: inherit;
		box-shadow: inset 0 0 350px rgba(255,255,255,0.3);
		position: absolute;
		top: -15px;
		left: -15px;
		z-index: -1;
		filter: blur(6px);
	}
</style>
