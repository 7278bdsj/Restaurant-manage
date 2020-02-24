import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login/login.vue"
import Main from '../pages/Main/main.vue'

// main的相关路由
import Order from '../pages/Order/order.vue'  //订餐管理路由
import Table from '../pages/Table/table.vue'  //餐桌管理路由
import Dishes from '../pages/Dishes/dishes.vue'  //菜品管理路由
import Recommend from '../pages/Recommend/recommend.vue'  //菜品推荐管理路由
import Menu from '../pages/Menu/menu.vue'  //菜单路由
import Person from '../pages/Person/person.vue'  //人事管理路由
import Resources from '../pages/Resources/resources.vue'  //库存管理路由
import Message from '../pages/Message/message.vue'  //入/出库信息管理路由
import Bar from '../pages/Bar/bar.vue'  //柱状图
import Cake from '../pages/Cake/cake.vue'  //饼状图
import Line from '../pages/Line/line.vue'  //折线图

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
	{
	  path: '/login',
	  name: 'Login',
	  component: Login
	},
	{
	  path: '/main',
	  name: 'Main',
	  component: Main,
	  children:[
		  {path:'/main/order',component:Order},
		  {path:'/main/table',component:Table},
		  {path:'/main/dishes',component:Dishes},
		  {path:'/main/recommend',component:Recommend},
		  {path:'/main/menu',component:Menu},
		  {path:'/main/person',component:Person},
		  {path:'/main/resources',component:Resources},
		  {path:'/main/message',component:Message},
		  {path:'/main/bar',component:Bar},
		  {path:'/main/cake',component:Cake},
		  {path:'/main/line',component:Line}
	  ]
	}
  ]
})
