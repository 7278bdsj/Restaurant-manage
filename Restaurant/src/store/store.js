import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		username:window.localStorage.getItem("username"),
		foodmenu:JSON.parse(window.localStorage.getItem("foodmenu")),
		recommendmenu:'',
		position:window.localStorage.getItem("position")
	},
	getters:{

	},
	mutations:{
		changeUsername(state,res){
			state.username=res;
		}
	},
	actions:{
		changeUsername(context,res){
			context.commit('changeUsername',res);
		}
	}
})

export default store;