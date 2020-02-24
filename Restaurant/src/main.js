// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import animated from 'animate.css'

//引入store
import store from './store/store.js';


Vue.use(animated);
Vue.use(ElementUI);
Vue.config.productionTip = false;

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
//全局路由钩子函数
router.beforeEach((to,from,next)=>{
	if (to.fullPath!=='/login') {
		if (window.localStorage.getItem('login')) {
			next();
		}else{
			next('/login');
		}
	}else{
		next();
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
