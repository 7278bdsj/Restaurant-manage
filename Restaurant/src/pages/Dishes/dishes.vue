<!-- 菜品管理模块 -->

<template>
	<div class="dishes">
		<form class="submit-form animated bounceInDown">
			<h2>菜单管理</h2>
			<input type="text" name="menuName" placeholder="菜名" v-model="inputDate.name">
			<input type="text" name="type" placeholder="类型" v-model="inputDate.type">
			<input type="text" name="price" placeholder="价格" v-model="inputDate.price">
			<input type="text" name="num" placeholder="编号" v-model="inputDate.num">
			<input type="submit" value="上传" class="button" @click.prevent="updata">
			<input type="submit" value="下架" class="button2" @click.prevent="downdata">
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
		background-color: #F0F2F5;
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
		background-color: white;
		text-align: center;
		padding: 40px;
		overflow: hidden;
		position: relative;
		z-index: 100;
    text-shadow: 0 0 3px #001529;
    box-shadow: 0 0 5px deepskyblue;
	}
	.dishes .submit-form h2{
		color: white;
		font-size: 36px;
	}
	.dishes .submit-form input{
    box-shadow: 0 0 5px deepskyblue;
		margin: 6px 0px;
		height: 40px;
		border: none;
		font-size: 20px;
		border-radius: 5px;
		padding: 0 14px;
		background-color: rgba(255,255,255,0.4);
	}
	.dishes .submit-form .button{
		background-color: #409EFF;
		color: white;
		margin-top: 20px;
    cursor: pointer;
    text-shadow: 0 0 3px #001529;
	}
	.dishes .submit-form .button2{
		background-color: orangered;
    color: white;
    text-shadow: 0 0 3px #001529;
    cursor: pointer;
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
