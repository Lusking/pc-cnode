import vue from 'vue'
import vuex from 'vuex'
import state from './state.js'
import mutation from './mutation.js'
vue.used(vuex)
const store=new vuex.Store({
	state,
	mutation,
	getter
})