import Vue from 'vue'
//vue 路由模块 vue-router 
import Router from "vue-router";

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from '../components/second.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
        	path: '',
            redirect: '/first'
	    },
	    {
	        path: '/first',
	        component: First
	    },
	    {
	        path: '/second',
	        component: secondcomponent
	    }
	]
})
