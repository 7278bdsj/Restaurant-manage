<!-- 人事管理模块-->

<template>
	<div class="person">
		<div class="person-list animated jello">
			<h2>人事信息相关表格</h2>
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      fixed
			      prop="worknum"
			      label="工作号"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="work"
			      label="职位"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="200">
			      <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细信息&nbsp&nbsp</el-button>
					<el-button type="text" size="small">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</div>
		<div class="person-operation animated jello">
			<h2>人事相关操作</h2>
			<div class="operation-main">
				<el-form :model="personForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="姓名" prop="name">
				    <el-input v-model="personForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="性别" prop="sex">
				      <el-radio-group v-model="personForm.sex">
				        <el-radio label="男"></el-radio>
				        <el-radio label="女"></el-radio>
				      </el-radio-group>
				    </el-form-item>
				  <el-form-item label="年龄" prop="age">
				    <el-input v-model="personForm.age"></el-input>
				  </el-form-item>
				  <el-form-item label="工作号" prop="worknum">
				    <el-input v-model="personForm.worknum"></el-input>
				  </el-form-item>
				  <el-form-item label="身份证号" prop="identitycard">
				    <el-input v-model="personForm.identitycard"></el-input>
				  </el-form-item>
				  <el-form-item label="职位" prop="work">
				    <el-select v-model="personForm.work" placeholder="请选择相关职位">
				      <el-option label="厨师" value="厨师"></el-option>
				      <el-option label="前台" value="前台"></el-option>
					  <el-option label="人事管理员" value="人事管理员"></el-option>
					  <el-option label="仓库管理员" value="仓库管理员"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="入职时间" required>
				    <el-col :span="11">
				      <el-form-item prop="entrytime">
				        <el-date-picker type="date" placeholder="选择日期" v-model="personForm.entrytime" style="width: 100%;"></el-date-picker>
				      </el-form-item>
				    </el-col>
				    <el-col class="line" :span="2">-</el-col>
				  </el-form-item>
				  <el-form-item label="工资" prop="price">
				    <el-input v-model="personForm.price"></el-input>
				  </el-form-item>
				  <el-form-item label="个人评价" prop="personal">
				    <el-input type="textarea" v-model="personForm.personal"></el-input>
				  </el-form-item>
				  <el-form-item label="职业状态" prop="state">
				      <el-radio-group v-model="personForm.state">
				        <el-radio label="在职"></el-radio>
				        <el-radio label="已离职"></el-radio>
				      </el-radio-group>
				    </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm">立即创建</el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import ajax from '../../config/ajax.js';
	  export default {
		   data() {
		        return {
					tableData:'',
		      personForm: {
		            name:'',
		            sex:'',
		            age:'',
		            identitycard:'',
		            worknum:'',
		            work:'',
		            entrytime:'',
		            deptime:'null',
		            price:'',
		            personal:'',
					state:''
		          },
		          rules: {
		            name: [
		              { required: true, message: '请输入员工姓名', trigger: 'blur' },
		            ],
		            sex: [
		              { required: true, message: '请选择员工姓名', trigger: 'change' }
		            ],
		            entrytime: [
		              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
		            ],
					identitycard:[
						{ required: true, message: '请输入身份证号码', trigger: 'blur' },
					],
		            age: [
		              { required: true, message: '请输入员工年龄', trigger: 'blur' }
		            ],
		            worknum: [
		              { required: true, message: '请输入员工号', trigger: 'blur' }
		            ],
		            work: [
		              { required: true, message: '请选择工作职位', trigger: 'change' }
		            ],
					price: [
					  { required: true, message: '请输入工资', trigger: 'blur' }
					],
					personal: [
						{required:true, message: '请输入相关评价', trigger:'blur'}
					],
					state:[
						{required:true, message: '请输入在职状态', trigger:'blur'}
					]
		          }
		        };
		      },
			  mounted:function(){
				  this.getdatebase();
			  },
		      methods: {
				 //获取人员信息的函数
				async getdatebase(){
					let res=await ajax('http://localhost:3000/api/selectperson');
					this.tableData=res.date;
					console.log(res);
				},

		        async submitForm() {
		          let values={
					  name:this.personForm.name,
					  sex:this.personForm.sex,
					  age: this.personForm.age,
					  identitycard:this.personForm.identitycard,
					  worknum: this.personForm.worknum,
					  work: this.personForm.work,
					  entrytime: this.personForm.entrytime,
					  deptime:this.personForm.deptime,
					  price:this.personForm.price,
					  personal:this.personForm.personal,
					  state:this.personForm.state
				  };
				  let res2='';
				  let res=await ajax('http://localhost:3000/api/addperson',values,'GET');
				  if(res.code===1){
					  this.$message({
						  message:`${res.message}`,
						  type:'success'
					  })
					  res2=await ajax('http://localhost:3000/api/selectperson');
					  this.tableData=res2.date
				  }else{
					  this.$message({
						  message:'${res.message}',
						  type:'error'
					  })
				  }

		        },
		        resetForm(formName) {
		          this.$refs[formName].resetFields();
		        },
				handleClick(row) {
				  console.log(row);
				}
		      }
	  }
</script>

<style>
	.person{
		width: 100%;
		height: 100%;
    background-color: #F0F2F5;
	}
	.person-list{
		width: 48%;
		height: 620px;
		background-color:white ;
		margin: 10px;
		float: left;
    box-shadow: 0 0 5px deepskyblue;
    text-shadow: 0 0 1px #001529;
	}
	.person-list h2{
		padding: 10px;
		font-size: 25px;
		color: #001529;
		background-image: linear-gradient(to right bottom,#001529,skyblue);
	}
	.person-operation{
		width: 48%;
		height: 620px;
		background-color: white;
		margin: 10px;
		float: right;
		position: relative;
    overflow: auto;
    box-shadow: 0 0 5px deepskyblue;
    text-shadow: 0 0 1px #001529;
	}
	.person-operation h2{
		padding: 10px;
		font-size: 25px;
		color: #001529;
		background-image: linear-gradient(to right bottom,#001529,skyblue);
	}
	.person-operation .operation-main{
		width: 100%;
		height: 100%;
		background-color: inherit;
		padding-top: 20px;
		padding-bottom: 20px;
		padding-left: 200px;
		padding-right: 200px;
		box-sizing: border-box;
	}
</style>
